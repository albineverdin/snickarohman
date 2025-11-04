import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close menu when link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav className="header__navbar">
        <div className="header__logo">
          <Link to="/" onClick={closeMenu}>
            <img
              src="/images/logo/snickarohman--creme.png"
              alt="SnickarÖhmans logga"
            />
          </Link>
        </div>

        {/* Hamburger button*/}
        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`header__menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="header__menu-item">
            <Link to="/" onClick={closeMenu}>Hem</Link>
          </li>
          <li className="header__menu-item">
            <Link to="/about" onClick={closeMenu}>Om mig</Link>
          </li>
          <li className="header__menu-item">
            <Link to="/services" onClick={closeMenu}>Tjänster</Link>
          </li>
          <li className="header__menu-item">
            <Link to="/inspiration" onClick={closeMenu}>Inspiration</Link>
          </li>
          <li className="header__menu-item">
            <Link to="/contact" onClick={closeMenu}>Kontakt</Link>
          </li>
          <li className="header__button">
            <a href="#cs__contact" onClick={closeMenu}>Offertförfrågan</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;