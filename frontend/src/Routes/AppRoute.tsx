import { SignInPage } from "@/pages/auth/SignInPage"
import SignUpPage from "@/pages/auth/SignUpPage"
import HomePage from "@/pages/home/HomePage"
import { Routes, Route } from "react-router"

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  )
}

export default AppRoute
