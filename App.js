import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebDevelopmentPage from './WebDevelopmentPage';
import ContactPage from './Contact'; // Ensure you have a Contact page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WebDevelopmentPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
