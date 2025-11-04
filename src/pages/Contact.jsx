import React from 'react';
import Banner from '../components/Banner/Banner.jsx';
import ContactForm from '../components/ContactForm/ContactForm.jsx';
import ContactInfo from '../components/ContactInfo/ContactInfo.jsx';

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
                <ContactInfo
                    title="Kontakt-<br />information"
                    description="Vi finns här för att svara på dina frågor och hjälpa dig med ditt projekt. Kontakta oss via telefon, e-post eller besök oss på plats."
                    phone="070 - 123 45 67"
                    email="snickarohman@mailadress.se"
                    address="Adressvägen 1<br />900 99 Umeå"
                    hours="Måndag - Tisdag: 13:00 - 16:00<br />Onsdag - Fredag: 15:00 - 16:00<br />Helgdag: Stängt"
                    mapImageSrc="/images/img__contact-map.jpg"
                    mapImageAlt="Karta över vårt kontor i Umeå"
                />
            </main>
        </>
    );
}

export default Contact;
