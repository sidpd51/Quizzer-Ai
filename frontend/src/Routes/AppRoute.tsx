// App.tsx or routes.tsx
import { SignInPage } from "@/pages/auth/SignInPage";
import SignUpPage from "@/pages/auth/SignUpPage";
import HomePage from "@/pages/home/HomePage";
import AllTestPage from "@/pages/TestManagement/AllTestPage";
import CreateTestPage from "@/pages/TestManagement/CreateTestPage";
import Dashboard from "@/pages/TestManagement/Dashboard";
import TestManagement from "@/pages/TestManagement/TestManagement";
import { Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/test-management" element={<TestManagement />}>
        {/* Nested inside TestManagement layout */}
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="create-test" element={<CreateTestPage />} />
        <Route path="tests" element={<AllTestPage />} />
      </Route>

      {/* Optional: fallback route */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default AppRoutes;
