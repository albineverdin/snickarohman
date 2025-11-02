import React from 'react';
import './Navbar.css';


function Navbar() {
  return (
    <header>
      <nav className="header__navbar">
        <div className="header__logo">
          <a href="/">
            <img src="/images/logo/snickarohman--creme.png" alt="SnickarÖhmans logga" />
          </a>
        </div>

        <ul className="header__menu">
          <li className="header__menu-item"><a href="/">Hem</a></li>
          <li className="header__menu-item"><a href="/about">Om mig</a></li>
          <li className="header__menu-item"><a href="/services">Tjänster</a></li>
          <li className="header__menu-item"><a href="/inspiration">Inspiration</a></li>
          <li className="header__menu-item"><a href="/contact">Kontakt</a></li>
          <li className="header__button"><a href="#cs__contact">Offertförfrågan</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
