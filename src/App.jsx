import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

// import different books
import HungryCaterpillar from "./components/HungryCaterpillar";
import BrownBear from "./components/BrownBear";
import GoodnightMoon from "./components/GoodnightMoon";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Add each book as a route */}
        <Route path="/book/hungryCaterpillar" element={<HungryCaterpillar />} />
        <Route path="/book/brownBear" element={<BrownBear />} />
        <Route path="/book/goodnightMoon" element={<GoodnightMoon />} />
      </Routes>
    </Router>
  );
}

export default App;
