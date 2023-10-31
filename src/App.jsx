import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from './components/Landing';
import Diagram from './components/Diagram';
import Stories from './components/Stories';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/diagram" element={<Diagram />} />
        <Route path="/stories" element={<Stories />} />
      </Routes>
    </Router>
  );
}

export default App;
