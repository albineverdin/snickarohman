import React from 'react';
import Banner from '../components/Banner/Banner.jsx';
import ContactForm from '../components/ContactForm/ContactForm.jsx';
import '../styles/sections/contact-info.css';

function Contact() {
    return (
        <>
            {/* Banner Section */}
            <Banner
                imageSrc="/images/img__services-banner.jpg"
                imageAlt="---"
                topper="Låt inte drömmar förbli drömmar"
                title="Kontakta oss idag"
                buttonText="Be om en offert"
                buttonLink="#cs__contact"
            />

            <main style={{ padding: 0 }}>
                {/* Contact Information & Map Section */}
                <section className="contact-info-section">
                    <div className="contact-info__container">
                        {/* Left: Contact Information */}
                        <div className="contact-info__details">
                            <h2 className="contact-info__title">Kontakt-<br />information</h2>
                            <p className="contact-info__text">
                                Vi finns här för att svara på dina frågor och hjälpa dig med ditt projekt.
                                Kontakta oss via telefon, e-post eller besök oss på plats.
                            </p>

                            <div className="contact-info__item">
                                <h3 className="contact-info__subtitle">Telefon</h3>
                                <p className="contact-info__value">070 - 123 45 67</p>
                            </div>

                            <div className="contact-info__item">
                                <h3 className="contact-info__subtitle">E-post</h3>
                                <p className="contact-info__value">snickarohman@mailadress.se</p>
                            </div>

                            <div className="contact-info__item">
                                <h3 className="contact-info__subtitle">Adress</h3>
                                <p className="contact-info__value">
                                    Adressvägen 1<br />
                                    900 99 Umeå
                                </p>
                            </div>

                            <div className="contact-info__item">
                                <h3 className="contact-info__subtitle">Kontorstider</h3>
                                <p className="contact-info__value">
                                    Måndag - Tisdag: 13:00 - 16:00<br />
                                    Onsdag - Fredag: 15:00 - 16:00<br />
                                    Helgdag: Stängt
                                </p>
                            </div>
                        </div>

                        {/* Right: Map */}
                        <div className="contact-info__map">
                            <img
                                src="/images/img__contact-map.jpg"
                                alt="Karta över vårt kontor i Umeå"
                                className="contact-map-image"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Contact;