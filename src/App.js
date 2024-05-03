import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reports from "./components/Reports";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reports" element={<Reports />}/>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
