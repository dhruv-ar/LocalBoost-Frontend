import React from 'react';
import "../styles/asg.css"

function ApexSolutionsGroup() {
    const contactDetails = {
        phone: "(123) 456-7890",
        email: "info@apexsolutionsgroup.com",
        address: "123 Business Rd, Business City, BC 12345"
    };

    const reviews = [
        { name: "John Doe", comment: "Great service and support!", rating: 5 },
        { name: "Jane Smith", comment: "Very professional and timely.", rating: 4 },
        { name: "Alice Johnson", comment: "Satisfied with the project outcomes.", rating: 4 }
    ];

    const ownerDetails = {
        name: "Emily Stanton",
        role: "Founder & CEO",
        bio: "Emily has over 20 years of experience in strategic consulting and business management. She founded Apex Solutions Group with a vision to transform how businesses leverage technology.",
        imageUrl: "./images/user-female-icon.png"
    };

    return (
        <div className="main-container">
            <h1>Apex Solutions Group</h1>

            <div className="owner-details">
                <img src={ownerDetails.imageUrl} alt={`${ownerDetails.name}`} />
                <h2>{ownerDetails.name}</h2>
                <p>{ownerDetails.role}</p>
                <p>{ownerDetails.bio}</p>
            </div>

            <h2>Contact Details</h2>
            <ul>
                <li>Phone: {contactDetails.phone}</li>
                <li>Email: <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></li>
                <li>Address: {contactDetails.address}</li>
            </ul>

            <h2>Reviews</h2>
            {reviews.map((review, index) => (
                <div key={index} className="review-container">
                    <p><strong>{review.name}</strong> ({review.rating} stars)</p>
                    <p>{review.comment}</p>
                </div>
            ))}

            <h2>About Us</h2>
            <p>Apex Solutions Group specializes in providing innovative and tailored solutions across various sectors including technology, finance, and healthcare. With over a decade of expertise, we help organizations transform their processes and increase efficiency.</p>
        </div>
    );
}

export default ApexSolutionsGroup;
