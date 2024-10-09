import React from 'react';
import { Link } from 'react-router-dom';
import "../Style/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list" style={{ listStyle: 'none', position: "relative", top: "10px" }}>
                <li className="navbar-item">
                    <Link to="/about" className="navbar-link">About</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/resume" className="navbar-link">Resume</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/portfolio" className="navbar-link">Portfolio</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/blog" className="navbar-link">Blog</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/contact" className="navbar-link">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;



// Navbar has following issues
// the position of navbar is incorrect.
// Also navlinks or routes are yet to add 