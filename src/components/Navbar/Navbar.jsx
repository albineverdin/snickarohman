import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close menu when link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      // Detect if scrolled past the hero section (100vh)
      const scrollThreshold = window.innerHeight;

      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className={`header__navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header__logo">
          <Link to="/" onClick={closeMenu}>
            <img
              src={isScrolled
                ? "/images/logo/snickarohman--burgundy-light.png"
                : "/images/logo/snickarohman--creme.png"}
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
            <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? '--active' : ''}>
              Hem
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? '--active' : ''}>
              Om mig
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => isActive ? '--active' : ''}>
              Tjänster
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink to="/inspiration" onClick={closeMenu} className={({ isActive }) => isActive ? '--active' : ''}>
              Inspiration
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? '--active' : ''}>
              Kontakt
            </NavLink>
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