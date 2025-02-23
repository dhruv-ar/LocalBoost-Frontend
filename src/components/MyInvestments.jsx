import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/InvestmentsandList.css"
function MyInvestments() {
    const investments = [
        { id: 1, name: "Apex Solutions Group", amount: "$10,000", status: "Active" },
        { id: 2, name: "Sterling Financial Advisors", amount: "$5,000", status: "Pending" },
        { id: 3, name: "ProVision Consulting", amount: "$8,000", status: "Completed" },
    ];

    const navigate = useNavigate();

    const viewDetails = (id) => {
        navigate(`/investment-details/${id}`);
    };

    return (
        <div className="investment-container">
            <h1>My Investments</h1>
            {investments.map((investment) => (
                <div key={investment.id} className="investment-item">
                    <h2>{investment.name}</h2>
                    <p>Amount Invested: {investment.amount}</p>
                    <p>Status: {investment.status}</p>
                    <button onClick={() => viewDetails(investment.id)}>View Details</button>
                </div>
            ))}
        </div>
    );
}

export default MyInvestments;
