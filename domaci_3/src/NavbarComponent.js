import React from 'react';
import { Link } from "react-router-dom";


const NavbarComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/" className='nav-link'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className='nav-link'>About</Link>
                </li>
            </ul>
        </nav>
    );
}
export default NavbarComponent;