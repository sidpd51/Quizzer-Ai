import React from "react";
import { Routes, Route } from "react-router-dom";
import SignInPage from "../pages/auth/SignInPage";
import SignUpPage from "../pages/auth/SignUpPage";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUpPage />} />     {/* Default = SignUp */}
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
};

export default AppRoute;
