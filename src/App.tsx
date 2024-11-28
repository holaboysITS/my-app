import React from 'react';
import logo from './utility/cathead.gif';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import Dashboard from './pages/dashboard';
import Impianti from './pages/impianti';
import Login from './pages/login';
import Macchinari from './pages/macchinari';
import Aboutus from './pages/aboutus';

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
              <h1 className='titolo'>NOME AZIENDA</h1>
              <br></br><br />
              <div className="name">Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit. Nunc scelerisque 
                 velit at lectus vestibulum, vitae venenatis dolor 
                 imperdiet. Nullam faucibus libero facilisis tellus 
                 commodo efficitur. Aliquam ut neque ullamcorper, tempus 
                 lectus ut, pharetra sem. Fusce imperdiet urna in iaculis 
                 varius. <br /><br />
                 Suspendisse ipsum lectus, elementum id mattis in,
                  maximus a nisl.
                  Donec condimentum pulvinar lacus, non 
                  ullamcorper nisi faucibus a</div>
              <div className='Links'>
                <Link to="/login" className='login-link'>Accedi</Link>
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
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
       
      </main>
    </div>
  );
}

export default App;