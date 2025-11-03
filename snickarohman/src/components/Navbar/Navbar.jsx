import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  return (
    <header>
      <nav className="header__navbar">
        <div className="header__logo">
          <Link to="/">
            <img src="/images/logo/snickarohman--creme.png" alt="SnickarÖhmans logga" />
          </Link>
        </div>

        <ul className="header__menu">
          <li className="header__menu-item"><Link to="/">Hem</Link></li>
          <li className="header__menu-item"><Link to="/about">Om mig</Link></li>
          <li className="header__menu-item"><Link to="/services">Tjänster</Link></li>
          <li className="header__menu-item"><Link to="/inspiration">Inspiration</Link></li>
          <li className="header__menu-item"><Link to="/contact">Kontakt</Link></li>
          <li className="header__button"><a href="#cs__contact">Offertförfrågan</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
