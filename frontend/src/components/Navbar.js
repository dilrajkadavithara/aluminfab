import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <h2 className="logo">AluminFab</h2>
            <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="hamburger" onClick={toggleMobileMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
};

export default Navbar;
