import './navbar.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import Dashboard from '../../pages/dashboard';
import Impianti from '../../pages/impianti';
import Login from '../../pages/login';
import Macchinari from '../../pages/macchinari';


function NavBar() {
  return (
    <div>
      <input type="checkbox" id="menu-toggle"/>
        <label id="trigger" htmlFor="menu-toggle"></label>
        <label id="burger" htmlFor="menu-toggle"></label>
        <ul id="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/macchinari">Macchinari</Link></li>
          <li><Link to="/impianti">Impianti</Link></li>

        </ul>




      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/macchinari" element={<Macchinari />} />
        <Route path="/impianti" element={<Impianti />} />
        
      </Routes>
    </div> 
  );
};

export default NavBar;