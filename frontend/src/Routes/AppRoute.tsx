import SignUpPage from "@/pages/auth/SignUpPage"
import { Routes, Route } from "react-router"

function AppRoute() {
  return (
     <Routes>
     <Route path="/signup" element={<SignUpPage/>} />
    </Routes>
  )
}

export default AppRoute
