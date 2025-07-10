import React from "react";
import { Routes, Route } from "react-router-dom";
import SignInPage from "@/pages/auth/SignInPage"; // adjust path if needed

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
    </Routes>
  );
};

export default AppRoute;
