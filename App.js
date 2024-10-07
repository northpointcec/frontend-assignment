import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import TaskPage from './components/TaskPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/task">Task Page</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/task" element={<TaskPage />} />
      </Routes>
    </Router>
  );
}

export default App;
