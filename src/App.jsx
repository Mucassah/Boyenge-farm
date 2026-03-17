import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Agriculture from "./Agriculture"; 
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* This makes Agriculture the default page when you open the site */}
        <Route path="/" element={<Agriculture />} />
        
        {/* This keeps your specific path active as well */}
        <Route path="/Agriculture" element={<Agriculture />} />
        
        {/* Optional: Redirect any unknown URL back to home */}
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
  );
}

export default App;