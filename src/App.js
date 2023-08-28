import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Layout/Navbar";
import Expertise from "./components/Expertise";
import Clients from "./components/section/Clients";
import Doubt from "./components/section/Doubt";
import Footer from "./components/Layout/Footer";
import Headrer from "./components/section/Headrer";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard";
import Landingpage from "./pages/Landingpage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landingpage />}></Route>

          <Route exact path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
