import './navbar.css';

function NavBar() {
  return (
    <div>
<input type="checkbox" id="menu-toggle"/>
  <label id="trigger" htmlFor="menu-toggle"></label>
  <label id="burger" htmlFor="menu-toggle"></label>
  <ul id="menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">Dashboard</a></li>
    <li><a href="#">Macchinari</a></li>
    <li><a href="#">Impianti</a></li>
  </ul>
    </div> 
  );
};

export default NavBar;