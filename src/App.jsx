// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Gateway from './components/Gateway';
// import InvestorLogin from './components/InvestorLogin';
// import BusinessOwnerLogin from './components/BusinessOwnerLogin';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Gateway />} />
//         <Route path="/login/investor" element={<InvestorLogin />} />
//         <Route path="/login/business-owner" element={<BusinessOwnerLogin />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvestorLogin from './components/InvestorLogin';
import BusinessOwnerLogin from './components/BusinessOwnerLogin';
import InvestorDashboard from './components/InvestorDashboard';
import BusinessOwnerDashboard from './components/BusinessOwnerDashboard';
import InvestorProfile from './components/InvestorProfile';
import Gateway from './components/Gateway';
import ApexSolutionsGroup from './components/ApexSolutionsGroup';
import MyInvestments from './components/MyInvestments';
import MyList from './components/MyList';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login/investor" element={<InvestorLogin />} />
        <Route path="/login/business-owner" element={<BusinessOwnerLogin />} />
        <Route path="/dashboard/investor" element={<InvestorDashboard />} />
        <Route path="/dashboard/business-owner" element={<BusinessOwnerDashboard />} />
        <Route path="/investor/profile" element={<InvestorProfile />} />
        <Route path="/apex-solutions-group" element={<ApexSolutionsGroup />} />
        <Route path="/my-investments" element={<MyInvestments />} />
        <Route path="/my-lists" element={<MyList />} />
        <Route path="/" element={<Gateway />} />
      </Routes>
    </Router>
  );
}

export default App;
