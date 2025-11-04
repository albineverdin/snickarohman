import React from 'react';
import './Hero.css';

function Hero({ videoSrc, title, subtitle, buttonText, buttonLink }) {
    return (
        <div className="hero">
            <div className="hero__video-container">
                <div className="hero__video-container--overlay"></div>
                <video autoPlay muted loop className="hero__video">
                    <source src={videoSrc} type="video/mp4" />
                </video>
            </div>
            <div className="hero__content">
                <h1 className="hero__title">{title}</h1>
                <p className="hero__subtitle">{subtitle}</p>
                <a href={buttonLink} className="hero__button">{buttonText}</a>
            </div>
        </div>
    );
}

export default Hero;
