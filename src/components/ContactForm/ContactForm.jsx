import React from 'react';
import './ContactForm.css';

function ContactForm() {
    return (
        <section className="content-section cs__contact" id="cs__contact">
            <div>
                <span className="cs__title-topper">Förverkliga din dröm</span>
                <h1 className="cs__title">Få en kostnadsfri <br />offert idag!</h1>
            </div>

            <form method="POST" action="mailto:alev0009@student.umu.se" className="contact__form">
                <div className="contact__input-wrapper">

                    <label htmlFor="name" className="contact__label">Namn *</label>
                    <input type="text" id="name" name="namn" className="contact__input" placeholder="Vem är du?" required />

                    <label htmlFor="email" className="contact__label">Epost *</label>
                    <input type="email" id="email" name="mail" className="contact__input" placeholder="Hur kontaktar jag dig?" required />

                    <label htmlFor="phone" className="contact__label">Telefonnummer</label>
                    <input type="tel" id="phone" name="tel" className="contact__input" placeholder="Vill du hellre prata?" />

                    <label htmlFor="message" className="contact__label">Meddelande *</label>
                    <textarea id="message" name="meddelande" className="contact__textarea"
                        placeholder="Vad behöver du hjälp med?" required></textarea>

                    <button type="submit" className="contact__button">Skicka</button>

                </div>
            </form>
        </section>
    );
}

export default ContactForm;
