import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import AppRoute from "./Routes/AppRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <AppRoute />
      </AuthProvider>
    </>
  );
}

export default App;
