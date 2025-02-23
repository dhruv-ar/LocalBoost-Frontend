import React, { useState, useEffect } from 'react';

function InvestorProfile() {
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        bio: 'Enter your bio here...'
    });

    // Load user data from local storage or set default
    useEffect(() => {
        const storedUser = localStorage.getItem('userProfile');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userProfile', JSON.stringify(user));
        setIsEditing(false); // Turn off edit mode after saving
    };

    return (
        <div className="user-profile-form">
            <h1>Edit Profile</h1>
            {!isEditing ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Bio: {user.bio}</p>
                    <button onClick={toggleEdit}>Edit</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={user.name} onChange={handleChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={user.email} onChange={handleChange} />
                    </label>
                    <label>
                        Bio:
                        <textarea name="bio" value={user.bio} onChange={handleChange} />
                    </label>
                    <button type="submit">Save Changes</button>
                </form>
            )}
        </div>
    );
}

export default InvestorProfile;
