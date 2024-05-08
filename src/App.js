import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reports from "./components/Reports";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import ForgotPwd from "./components/auth/ForgotPwd";

function App() {
  return (
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
    </div>
  );
}

export default App;
