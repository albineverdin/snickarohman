import React from 'react';
import './ContactInfo.css';

function ContactInfo({
    title,
    description,
    phone,
    email,
    address,
    hours,
    mapImageSrc,
    mapImageAlt
}) {
    return (
        <section className="contact-info-section">
            <div className="contact-info__container">
                {/* Left: Contact Information */}
                <div className="contact-info__details">
                    <h2 className="contact-info__title" dangerouslySetInnerHTML={{ __html: title }} />
                    <p className="contact-info__text">{description}</p>

                    <div className="contact-info__item">
                        <h3 className="contact-info__subtitle">Telefon</h3>
                        <p className="contact-info__value">{phone}</p>
                    </div>

                    <div className="contact-info__item">
                        <h3 className="contact-info__subtitle">E-post</h3>
                        <p className="contact-info__value">{email}</p>
                    </div>

                    <div className="contact-info__item">
                        <h3 className="contact-info__subtitle">Adress</h3>
                        <p className="contact-info__value" dangerouslySetInnerHTML={{ __html: address }} />
                    </div>

                    <div className="contact-info__item">
                        <h3 className="contact-info__subtitle">Kontorstider</h3>
                        <p className="contact-info__value" dangerouslySetInnerHTML={{ __html: hours }} />
                    </div>
                </div>

                {/* Right: Map */}
                <div className="contact-info__map">
                    <img
                        src={mapImageSrc}
                        alt={mapImageAlt}
                        className="contact-map-image"
                    />
                </div>
            </div>
        </section>
    );
}

export default ContactInfo;
