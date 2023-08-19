import React from 'react';
import { Link } from "react-router-dom";


const NavbarComponent = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <Link to="/" className='nav-link'>Home</Link>
                </li>
            </ul>
        </nav>
    );
}
export default NavbarComponent;