import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Agriculture from "./Agriculture"; 
import Contact from './Contact';
import AboutUs from './AboutUs';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* 1. Main Pages */}
        <Route path="/" element={<Agriculture />} />
        <Route path="/Agriculture" element={<Agriculture />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        
        {/* 2. The Catch-all (MUST BE LAST) */}
        {/* This only runs if NONE of the above paths match */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;