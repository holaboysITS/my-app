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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          possiamo usare <code>javascript </code>invece di <code>typescript </code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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