import './navbar.css';
function NavBar() {
    return (
        <nav className="nav">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#news">Gestione Impianti</a></li>
                <li><a href="#contact">Gestione Macchinari</a></li>
                <li><a href="#about">Login</a></li>
            </ul>
        </nav>
    )
}

export default NavBar