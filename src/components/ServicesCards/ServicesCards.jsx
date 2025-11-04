import React from 'react';
import './ServicesCards.css';

function ServicesCards({ cards }) {
    return (
        <div className="services-cards__wrapper">
            {cards.map((card, index) => (
                <div key={index} className="services-card">
                    <img src={card.icon} alt={card.iconAlt} className="services-card__icon" />
                    <h2 className="services-card__title">{card.title}</h2>
                    <p className="services-card__text">{card.text}</p>
                </div>
            ))}
        </div>
    );
}

export default ServicesCards;
