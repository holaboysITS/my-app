import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from './pages/dashboard';
import Impianti from './pages/impianti';
import Login from './pages/login';
import Macchinari from './pages/macchinari';


function App() {
  return (
    <Router>
    <div className="App">
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
            <div className="name">matteo non sa il nome del gruppo</div>
          </div>
      </div>
    </div>
      <main>
      <Routes>{/* absolutely do not touch or just ask me @AanRuu */}
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/macchinari" element={<Macchinari />} />
            <Route path="/impianti" element={<Impianti />} />
        </Routes> {/*routes isn't even a real html element it just defines routers*/}

        </main>
        <div className='andreaEdit'>
              <Link to="/login" className='andreaEdit'>Login</Link> {/*touchable*/}
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/macchinari">Macchinari</Link>
              <Link to="/impianti">Impianti</Link>
          </div>
      </div>
  </Router>
  );
}

export default App;