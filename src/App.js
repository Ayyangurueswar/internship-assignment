import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reports from "./components/Reports";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import ForgotPwd from "./components/auth/ForgotPwd";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reports" element={<Reports />}/>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/forgotPassword" element={<ForgotPwd />} />
          </Routes>
        </BrowserRouter>
        <div id="modal-root"></div>
      </div>
    </AuthProvider>
  );
}

export default App;
