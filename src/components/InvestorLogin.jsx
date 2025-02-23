


// // components/InvestorLogin.jsx
// import React from 'react';
// import "../styles/loginpage.css";
// function InvestorLogin() {
//     return (
//         <div className="login-container">
//             <form className="login-form">
//                 <h2>Investor Login</h2>
//                 <input type="text" placeholder="Username" className="input-field" />
//                 <input type="password" placeholder="Password" className="input-field" />
//                 <button type="submit" className="button">Login</button>
//                 <div className="link">Forgot Password?</div>
//                 <div className="link">Sign Up</div>
//             </form>
//         </div>
//     );
// }

// export default InvestorLogin;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/loginpage.css";

import "../styles/Searchbar.css"
function InvestorLogin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform authentication here (This is just a simulation)
        if (username === 'investor' && password === 'password') {
            navigate('/dashboard/investor');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Investor Login</h2>
                <input type="text" placeholder="Username" className="input-field" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="button">Login</button>
            </form>
        </div>
    );
}

export default InvestorLogin;
