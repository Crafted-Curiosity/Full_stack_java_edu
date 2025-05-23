import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import './App.css';
import './styling/Main.css';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
