// // // import { useEffect } from 'react';
// // // import { useNavigate } from 'react-router-dom';

// // // function Gateway() {
// // //     const navigate = useNavigate();

// // //     useEffect(() => {
// // //         const userRole = getUserRole(); // This function should determine the user's role
// // //         if (userRole === 'investor') {
// // //             navigate('/login/investor');
// // //         } else if (userRole === 'business-owner') {
// // //             navigate('/login/business-owner');
// // //         }
// // //     }, [navigate]);

// // //     // Function to mock getting a user's role
// // //     function getUserRole() {
// // //         // Assume some logic to determine the user role
// // //         // It could be from an API response, local storage, etc.
// // //         return 'investor'; // or 'business-owner'
// // //     }

// // //     return <h1>Redirecting based on role...</h1>;
// // // }

// // // export default Gateway;

// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';

// // function Gateway() {
// //     const navigate = useNavigate();

// //     const handleRoleSelection = (role) => {
// //         navigate(`/login/${role}`);  // Navigate based on the selected role
// //     };

// //     return (
// //         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
// //             <h1 className="text-3xl font-bold mb-6">Welcome to Our Platform</h1>
// //             <p className="text-lg text-gray-700 mb-6">Please select your role to proceed:</p>
// //             <div className="flex space-x-4">
// //                 {/* Buttons for selecting role */}
// //                 <button
// //                     onClick={() => handleRoleSelection('investor')}  // Redirect to investor login
// //                     className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
// //                 >
// //                     Investor Login
// //                 </button>
// //                 <button
// //                     onClick={() => handleRoleSelection('business-owner')}  // Redirect to business owner login
// //                     className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
// //                 >
// //                     Business Owner Login
// //                 </button>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Gateway;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function Gateway() {
//     const navigate = useNavigate();

//     const handleRoleSelection = (role) => {
//         navigate(`/login/${role}`);  // Navigate based on the selected role
//     };

//     return (
//         <div style={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             minHeight: '100vh',
//             background: 'linear-gradient(to right, #6a3093, #a044ff)'  // Purplish-violet gradient
//         }}>
//             <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#FFFFFF' }}>Welcome to Our Platform</h1>
//             <p style={{ fontSize: '1.25rem', color: '#EDEDED', marginBottom: '1rem' }}>Please select your role to proceed:</p>
//             <div>
//                 <button
//                     onClick={() => handleRoleSelection('investor')}
//                     style={{
//                         padding: '0.75rem 1.5rem',
//                         backgroundColor: '#0056b3',
//                         color: 'white',
//                         borderRadius: '0.5rem',
//                         marginRight: '0.5rem',
//                         cursor: 'pointer'
//                     }}
//                 >
//                     Investor Login
//                 </button>
//                 <button
//                     onClick={() => handleRoleSelection('business-owner')}
//                     style={{
//                         padding: '0.75rem 1.5rem',
//                         backgroundColor: '#4CAF50',
//                         color: 'white',
//                         borderRadius: '0.5rem',
//                         cursor: 'pointer'
//                     }}
//                 >
//                     Business Owner Login
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Gateway;




import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Gateway.css"
function Gateway() {
    const navigate = useNavigate();

    const handleRoleSelection = (role) => {
        navigate(`/login/${role}`);  // Navigate based on the selected role
    };

    return (
        <div className="gateway-container">
            <h1 className="gateway-header">LocalBoost</h1>
            <p className="gateway-subtext">Please select your role to proceed:</p>
            <div>
                <button
                    onClick={() => handleRoleSelection('investor')}
                    className="gateway-button"
                >
                    Investor Login
                </button>
                <button
                    onClick={() => handleRoleSelection('business-owner')}
                    className="gateway-button business-owner"
                >
                    Business Owner Login
                </button>
            </div>
        </div>
    );
}

export default Gateway;
