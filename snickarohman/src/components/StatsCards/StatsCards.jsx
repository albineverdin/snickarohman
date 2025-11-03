import React from 'react';
import './StatsCards.css';

function StatsCards({ cards }) {
    return (
        <section className="stats-cards-section">
            <div className="stats-cards__container">
                <ul className="stats-cards__list">
                    {cards.map((card, index) => (
                        <li key={index} className="stats-card">
                            <img src={card.icon} alt={card.iconAlt} className="stats-card__icon" />
                            <h2 className="stats-card__number">{card.number}</h2>
                            <p className="stats-card__text">{card.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default StatsCards;
