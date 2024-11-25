import React from 'react';
import logo from './logo.svg';
import './App.css';
import Page2 from './pages/dashboard';
import Page3 from './pages/impianti';
import Page1 from './pages/login';
import Page4 from './pages/macchinari';


function App() {
  return (
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
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
      </main>
  </div>
  );
}

export default App;