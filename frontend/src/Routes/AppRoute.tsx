import { SignInPage } from "@/pages/auth/SignInPage"
import SignUpPage from "@/pages/auth/SignUpPage"
import { Routes, Route } from "react-router"

function AppRoute() {
  return (
     <Routes>
     <Route path="/signup" element={<SignUpPage/>} />
     <Route path="/signin" element={<SignInPage/>} />
    </Routes>
  )
}

export default AppRoute
