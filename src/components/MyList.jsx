import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/InvestmentsandList.css"
function MyList() {
    const myListItems = [
        "Apex Solutions Group",
        "Premier Tech Innovations",
        "Quantum Accounting Solutions",
    ];

    const navigate = useNavigate();

    const goToDetails = (item) => {
        navigate(`/details/${encodeURIComponent(item)}`);
    };

    return (
        <div className="list-container">
            <h1>My Lists</h1>
            <ul>
                {myListItems.map((item, index) => (
                    <li key={index}>
                        <span>{item}</span>
                        <button onClick={() => goToDetails(item)}>View Details</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyList;
