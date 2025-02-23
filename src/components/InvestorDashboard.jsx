import React, { useState } from "react";
import "../styles/navbarinvestor.css";
import "../styles/welcome.css"
import "../styles/categories.css"
import profileImg from "../images/investor-profile.jpg";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function InvestorDashboard() {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    const allSuggestions = [
        "Apex Solutions Group",
        "Sterling Financial Advisors",
        "ProVision Consulting",
        "Elite Marketing Strategies",
        "Precision Legal Services",
        "Premier Tech Innovations",
        "Strategic Business Partners",
        "Quantum Accounting Solutions",
        "Vanguard HR Consultants",
        "Prime Property Management",
        "Professional Insight Architects",
    ];

    const categories = [
        "Technology",
        "Finance",
        "Healthcare",
        "Education",
        "Real Estate",
    ];

    const handleSearchChange = (e) => {
        const userInput = e.target.value;
        setQuery(userInput);
        const filteredSuggestions = allSuggestions.filter((item) =>
            item.toLowerCase().includes(userInput.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
    };

    // const handleSuggestionClick = (suggestion) => {
    //     setQuery(suggestion);
    //     setSuggestions([]); // This clears the suggestions, you might want to navigate instead
    //     // Example: navigate(`/details/${suggestion}`); // Uncomment and modify if using react-router
    // };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion);
        setSuggestions([]);

        // Direct routing for specific company names
        switch (suggestion) {
            case "Apex Solutions Group":
                navigate("/apex-solutions-group");
                break;
            // Add more cases as necessary for other specific pages
            default:
                navigate(`/details/${encodeURIComponent(suggestion)}`);
                break;
        }
    };

    const navigate = useNavigate();

    return (
        <>

            <div className="navbar-wrapper">
                <ul className="navbar">
                    {/* <li><a href="dashboard/investor">Home</a></li>
                    <li><a href="news.asp">My Investments</a></li>
                    <li><a href="contact.asp">My Lists</a></li> */}
                    <li><Link to="/dashboard/investor">Home</Link></li>
                    <li><Link to="/my-investments">My Investments</Link></li>
                    <li><Link to="/my-lists">My Lists</Link></li>
                </ul>
                <div className="user-profile">
                    {/* <a href="/investor/profile">
                        <img src={profileImg} onClick={navigate("/investor/profile")} alt="User Profile" />
                    </a> */}
                    <a onClick={() => navigate("/investor/profile")}>
                        <img src={profileImg} alt="User Profile" />
                    </a>
                </div>
            </div>
            <div className="welcome">
                <h1>Welcome Investor</h1>
                <h2>Search for Businesses</h2>
            </div>

            {/* Search Bar with Clickable Suggestions */}
            <div className="search-container">


                <input
                    type="text"
                    value={query}
                    onChange={handleSearchChange}
                    placeholder="Search for business ideas, investments..."
                    className="search-input"
                />
                {query && (
                    <div className="suggestions-container">
                        {suggestions.map((suggestion, index) => (
                            <div
                                key={index}
                                onClick={() => handleSuggestionClick(suggestion)}
                                className="suggestion-item"
                            >
                                {suggestion}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="category-container">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className={`category-card ${selectedCategory === category ? "active" : ""}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </div>
                ))}
            </div>

        </>
    );
}

export default InvestorDashboard;
