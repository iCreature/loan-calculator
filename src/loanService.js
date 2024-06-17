// loanService.js

export const calculateApproxPayment = async (loanAmount, interestRate, term, rv) => {
    const response = await fetch(`/api/loan/calculateApprox?loanAmount=${loanAmount}&interestRate=${interestRate}&term=${term}&rv=${rv}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
};

export const saveQuote = async (loanAmount, interestRate, term, rv) => {
    const response = await fetch(`/api/loan/saveQuote?loanAmount=${loanAmount}&interestRate=${interestRate}&term=${term}&rv=${rv}`, {
        method: 'POST'
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
};
