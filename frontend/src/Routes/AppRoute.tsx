import { SignInPage } from "@/pages/auth/SignInPage";
import SignUpPage from "@/pages/auth/SignUpPage";
import TestManagement from "@/pages/TestManagement/TestManagement";
import HomePage from "@/pages/home/HomePage"
import NotFoundPage from "@/pages/NotFound/NotFoundPage"
import { Routes, Route } from "react-router"
import { Toaster } from "sonner"

function AppRoute() {
  return (
    <>
      <Toaster expand visibleToasts={3} position="top-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/test-management" element={<TestManagement />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default AppRoute;
