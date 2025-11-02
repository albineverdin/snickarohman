import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">

                <div className="footer__menu-list-wrapper">
                    <div className="footer__logo-wrapper">
                        <a href="/" className="footer__logo-link">
                            <img src="/images/logo__full--black.svg" alt="SnickarÖhmans logga" className="footer__logo-image" />
                        </a>
                    </div>
                    <div className="footer__socials-wrapper">
                        <a href="#" className="footer__social-link">
                            <img src="/images/icon__fb-clean.svg" alt="Facebook icon" className="footer__social-icon" />
                        </a>
                        <a href="#" className="footer__social-link">
                            <img src="/images/icon__insta-clean.svg" alt="Instagram icon" className="footer__social-icon" />
                        </a>
                        <a href="#" className="footer__social-link">
                            <img src="/images/icon__linkedin.svg" alt="LinkedIn icon" className="footer__social-icon" />
                        </a>
                    </div>
                </div>

                <div className="footer__menu-list-wrapper">
                    <span className="footer__menu-title">Navigera</span>
                    <ul className="footer__menu-list">
                        <li><a href="/" className="footer__menu-item">Hem</a></li>
                        <li><a href="/services" className="footer__menu-item">Tjänster</a></li>
                        <li><a href="/inspiration" className="footer__menu-item">Inspiration</a></li>
                        <li><a href="/about" className="footer__menu-item">Om mig</a></li>
                        <li><a href="/contact" className="footer__menu-item">Kontakta mig</a></li>
                    </ul>
                </div>

                <div className="footer__menu-list-wrapper">
                    <span className="footer__menu-title">Kontakt</span>
                    <ul className="footer__menu-list">
                        <li className="footer__menu-item">
                            <img src="/images/icon__phone.svg" alt="Telefonikon" className="footer__menu-icon" />
                            070 - 123 45 67
                        </li>
                        <li className="footer__menu-item">
                            <img src="/images/icon__mail.svg" alt="E-postikon" className="footer__menu-icon" />
                            <a href="#">Maila mig!</a>
                        </li>
                        <li className="footer__menu-item">
                            <img src="/images/icon__location.svg" alt="Platsikon" className="footer__menu-icon" />
                            Adressvägen 1, UÅ
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
