import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { calculateApproxPayment, saveQuote } from './loanService';

function LoanCalculator() {
    const [term, setTerm] = useState(36);
    const [loanAmount, setLoanAmount] = useState(100000);
    const [interestRate, setInterestRate] = useState(10);
    const [rv, setRv] = useState(0);
    const [approxPayment, setApproxPayment] = useState(0);
    const [exactPayment, setExactPayment] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        handleCalculateApproxPayment();
        if (loanAmount > 1000000) {
            navigate('/thankyou');
        }
    }, [term, loanAmount, interestRate, rv]);

    const handleCalculateApproxPayment = async () => {
        try {
            const payment = await calculateApproxPayment(loanAmount, interestRate, term, rv);
            setApproxPayment(payment);
        } catch (error) {
            console.error('Error calculating approximate payment:', error);
        }
    };

    const handleSaveQuote = async () => {
        try {
            const payment = await saveQuote(loanAmount, interestRate, term, rv);
            setExactPayment(payment);
        } catch (error) {
            console.error('Error saving quote:', error);
        }
    };

    return (
        <div>
            <h1>Loan Calculator</h1>
            <div>
                <label>Term (in months): </label>
                <input type="number" value={term} onChange={(e) => setTerm(e.target.value)} />
            </div>
            <div>
                <label>Loan Amount: </label>
                <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
            </div>
            <div>
                <label>Interest Rate (%): </label>
                <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
            </div>
            <div>
                <label>Residual Value (RV): </label>
                <input type="number" value={rv} onChange={(e) => setRv(e.target.value)} />
            </div>
            <div>
                <h2>Approximate Payment: {approxPayment.toFixed(2)}</h2>
            </div>
            <button onClick={handleSaveQuote}>Save</button>
            {exactPayment !== null && (
                <div>
                    <h2>Exact Payment: {exactPayment.toFixed(2)}</h2>
                </div>
            )}
        </div>
    );
}

export default LoanCalculator;