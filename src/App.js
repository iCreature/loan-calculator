import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoanCalculator from './LoanCalculator';
import ThankYou from './ThankYou';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/calculator" element={<LoanCalculator />} />
                <Route path="/thankyou" element={<ThankYou />} />
                <Route path="*" element={<Navigate to="/calculator" />} />
            </Routes>
        </Router>
    );
}

export default App;
