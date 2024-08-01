import Home from "./components/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import MyAccountPage from "./components/MyAccountPage";
export default function App() {
  return (
    <Router>
      <div className="App" style={{ fontFamily: "Roboto", backgroundColor: "black" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/myaccount" element={<MyAccountPage />} />
        </Routes>
      </div>
    </Router>
  );
}
