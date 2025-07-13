import { SignInPage } from "@/pages/auth/SignInPage";
import SignUpPage from "@/pages/auth/SignUpPage";
import HomePage from "@/pages/home/HomePage";
import GenericErrorPage from "@/pages/Errors/GenericErrorPage";
import TestManagement from "@/pages/TestManagement/TestManagement";
import { Route, Routes } from "react-router";
import { Toaster } from "sonner";

function AppRoute() {
  return (
    <>
      <Toaster expand visibleToasts={3} position="top-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/test-management" element={<TestManagement />} />
        <Route path="/unauthorized" element={<GenericErrorPage statusCode={401} message={"You need to log in to access this page"} redirectLink={"/signin"} />} />
        <Route path="/forbidden" element={<GenericErrorPage statusCode={403} message={"This action is not allowed for your account"} redirectLink={"/"} />} />
        <Route path="*" element={<GenericErrorPage statusCode={404} message={"Page not found"} redirectLink={"/"} />} />
      </Routes>
    </>
  );
}

export default AppRoute;
