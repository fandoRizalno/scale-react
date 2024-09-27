import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WelcomePage from './bmi/WelcomePage';
import PersonalData from './bmi/PersonalData';
import ProfilePage from './bmi/ProfilePage';
import BmiPage from './bmi/BmiPage';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/personalData" element={<PersonalData />} />
        <Route path="/bmiPage" element={<BmiPage />} />
        <Route path="/profilePage" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
