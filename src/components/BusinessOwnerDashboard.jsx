import React, { useState } from "react";
import SalesDataUploader from "./SalesDataUploader";
import investorProfile from "../images/investor-profile.jpg"; // Ensure correct path
import profileImg from "../images/investor-profile.jpg";
const BusinessOwnerDashboard = () => {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const allSuggestions = [
        "John Doe", "Jane Smith", "Alice Johnson", "Robert Brown",
        "Emily White", "Michael Green", "Rachel Adams",
        "Steven Hall", "Laura Taylor", "James Wilson", "Sarah Miller"
    ];

    const handleSearchChange = (e) => {
        const userInput = e.target.value;
        setQuery(userInput);
        setSuggestions(
            allSuggestions.filter(name => name.toLowerCase().includes(userInput.toLowerCase()))
        );
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion);
        setSuggestions([]);
    };

    return (
        <div style={{
            fontFamily: "Arial, sans-serif",
            backgroundColor: "#f4f4f4",
            width: "100vw",   // Full viewport width
            height: "100vh",  // Full viewport height
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Centers all items
            justifyContent: "flex-start",
            paddingTop: "20px"
        }}>

            {/* Navbar */}
            {/* <div style={{
                width: "100%", backgroundColor: "#2C3E50",
                padding: "15px 20px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}> */}
            <div style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "50px",
                backgroundColor: "#2C3E50",
                display: "flex",
                alignItems: "center",
                padding: "0 20px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                zIndex: 1000
            }}>
                <ul style={{
                    listStyle: "none", display: "flex",
                    justifyContent: "start", margin: "0", padding: "0"
                }}>
                    <li style={{ marginRight: "20px" }}>
                        <a href="home.asp" style={{ textDecoration: "none", color: "white", fontSize: "16px" }}>Home</a>
                    </li>
                    <li>
                        <a href="investor-list.asp" style={{ textDecoration: "none", color: "white", fontSize: "16px" }}>Investor List</a>
                    </li>
                    <div style={{
                        height: "50px",  // Matches navbar height
                        width: "50px",  // Ensures aspect ratio
                        display: "flex",
                        alignItems: "center",  // Centers image vertically
                        justifyContent: "center",  // Centers image horizontally
                        position: "absolute",  // Ensures positioning inside navbar
                        right: "20px",  // Pushes the profile to the right
                        top: "5px",  // Adjust positioning slightly
                        cursor: "pointer"  // Makes the profile image clickable
                    }}
                        onClick={() => navigate("/investor/profile")}  // Makes the whole div clickable
                    >
                        <img
                            src={profileImg}
                            alt="User Profile"
                            style={{
                                width: "40px",  // Slightly smaller than container for padding
                                height: "40px",  // Maintains aspect ratio
                                borderRadius: "50%",  // Makes the profile picture circular
                                objectFit: "cover",  // Ensures the image covers space without distortion
                                border: "2px solid #fff",  // Optional: Adds a white border
                                transition: "transform 0.2s ease"  // Smooth effect on hover
                            }}
                            onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}  // Slightly enlarges on hover
                            onMouseOut={(e) => e.target.style.transform = "scale(1)"}  // Returns to normal size
                        />
                    </div>

                </ul>

            </div>


            {/* Search Bar */}
            <div style={{
                width: "90%", maxWidth: "600px",
                margin: "20px auto", padding: "15px",
                backgroundColor: "#ffffff", borderRadius: "5px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}>
                <h2>Search for Investors Here</h2>
                <input
                    type="text"
                    value={query}
                    onChange={handleSearchChange}
                    placeholder="Search for investors..."
                    style={{
                        width: "96%", padding: "12px", border: "1px solid #ccc",
                        borderRadius: "4px", fontSize: "16px"
                    }}
                />
                {query && (
                    <div style={{
                        width: "100%", backgroundColor: "#fff",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                        borderRadius: "4px", marginTop: "5px"
                    }}>
                        {suggestions.map((suggestion, index) => (
                            <div
                                key={index}
                                onClick={() => handleSuggestionClick(suggestion)}
                                style={{
                                    padding: "10px", cursor: "pointer",
                                    borderBottom: "1px solid #ececec"
                                }}
                            >
                                {suggestion}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Featured Investor Box */}
            <div
                onClick={() => alert('Navigate to Profile')}
                style={{
                    display: "flex", alignItems: "center",
                    justifyContent: "start", padding: "20px",
                    width: "90%", maxWidth: "600px",
                    backgroundColor: "#ffffff", border: "1px solid #dcdcdc",
                    borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer", transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
                <img
                    src={investorProfile}
                    alt="Investor Profile"
                    style={{
                        width: "80px", height: "80px", borderRadius: "50%",
                        objectFit: "cover", marginRight: "20px"
                    }}
                />
                <div>
                    <h3 style={{ fontSize: "1.2rem", color: "#333", marginBottom: "5px" }}>Featured Investor: John Doe</h3>
                    <p style={{ fontSize: "1rem", color: "#666", margin: "0" }}>Click here to view profile.</p>
                </div>
            </div>

            {/* Upload Section */}
            <div style={{
                width: "90%", maxWidth: "600px", margin: "40px auto",
                padding: "20px", backgroundColor: "#fff", borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", textAlign: "center"
            }}>
                <h1 style={{ fontSize: "24px", color: "#333" }}>Upload Sales Data</h1>
                <SalesDataUploader />
            </div>
        </div>
    );
}

export default BusinessOwnerDashboard;
