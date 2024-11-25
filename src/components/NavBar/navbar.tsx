import './navbar.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";


function NavBar() {
    return (
        <div className="radio-inputs">
          <label className="radio">
            <input type="radio" name="radio" checked={true} />
            <span className="name">Home</span>
          </label>
          <label className="radio">
            <input type="radio" name="radio" />
            <span className="name">Dashboard</span>
          </label>

          <label className="radio">
            <input type="radio" name="radio" />
            <span className="name">Macchinari</span>
          </label>

          <label className="radio">
            <input type="radio" name="radio" />
            <span className="name">Impianti</span>
          </label>
        </div>
    )
}

export default NavBar