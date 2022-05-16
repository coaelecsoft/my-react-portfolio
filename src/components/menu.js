import { Link } from "react-router-dom";
import "./menu.scss";
function Menu() {
    function openMenu() {
        const navbar = document.getElementById('nav-bar')
        if (navbar.classList.contains('opened')) {
            navbar.classList.remove('opened')
        } else {
            navbar.classList.add('opened')
        }
    }
    return (

        <nav id="nav-bar" className="menu-component">
            <a onClick={openMenu} title="Glavni meni" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                </svg>
            </a>
            <ul>
                <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/galery">Galery</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            </nav>
        );
}
export default Menu;