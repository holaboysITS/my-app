import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import Dashboard from './pages/dashboard';
import Impianti from './pages/impianti';
import Login from './pages/login';
import Macchinari from './pages/macchinari';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === '/' && (
        <div className="App-header">
          <div className="e-card playing">
            <div className="image"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="infotop">
              <img src={logo} className="App-logo" alt="logo" />
              <br></br>
              <h1>AZIENDA MECH</h1>
              <br></br>
              <div className="name">"Matteo ora sa il nome del gruppo..."</div>
              <div className='Links'>
                <Link to="/login" className='login-link'>Login</Link>
                {/* <Link to="/dashboard">Dashboard</Link>
                <Link to="/macchinari">Macchinari</Link>
                <Link to="/impianti">Impianti</Link> */}
              </div>
            </div>
          </div>
        </div>
      )}
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/macchinari" element={<Macchinari />} />
          <Route path="/impianti" element={<Impianti />} />
        </Routes>
       
      </main>
    </div>
  );
}

export default App;