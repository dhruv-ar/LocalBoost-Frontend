import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/loginpage.css";
function BusinessOwnerLogin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform authentication here (This is just a simulation)
        if (username === 'owner' && password === 'password') {
            navigate('/dashboard/business-owner');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Owner Login</h2>
                <input type="text" placeholder="Username" className="input-field" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="button">Login</button>
            </form>
        </div>
    );
}

export default BusinessOwnerLogin;
