import React from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { useState } from "react";
import { Navigate } from "react-router-dom";
import Forgotpassword from "./Components/Forgotpassword";
import Otpverification from "./Components/Otpverification";
import Changepassword from "./Components/Changepassword";
import Main from "./Components/Main";
import Admin from "./Components/Admin";
import Resume from "./Components/Resume";
import Verify from "./Components/Verify";

const App = () => {
  const [userRole, setUserRole] = useState("");

  const setUserRoleOnLogin = (role) => {
    setUserRole(role);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/main" element={<Main userRole={userRole} />} />

          <Route
            path="/login"
            element={<Login setUserRoleOnLogin={setUserRoleOnLogin} />}
          />

          <Route path="/signup" element={<Signup />} />

          <Route path="/resume" element={<Resume />} />

          <Route path="/admin/api" element={<Admin />} />

          <Route path="/forgotpassword" element={<Forgotpassword />} />

          <Route path="/otpverification/:id" element={<Otpverification />} />

          <Route path="/changepassword/:id" element={<Changepassword />} />

          <Route path="/verify/:token" element={<Verify />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
