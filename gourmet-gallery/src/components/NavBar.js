import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <NavLink exact to="/" className="nav-logo">
                    Culinary Canvas
                </NavLink>
                <div className="menu-icon" onClick={handleToggle}>
                    <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
                </div>
                <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={() => setMobileMenuOpen(false)}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/recipes" activeClassName="active" className="nav-links" onClick={() => setMobileMenuOpen(false)}>
                            Recipes
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blog" activeClassName="active" className="nav-links" onClick={() => setMobileMenuOpen(false)}>
                            Blog
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" activeClassName="active" className="nav-links" onClick={() => setMobileMenuOpen(false)}>
                            About
                        </NavLink>
                    </li>
                    {/* More nav items can be added here */}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
