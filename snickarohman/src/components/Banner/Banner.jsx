import React from 'react';
import './Banner.css';

function Banner({ imageSrc, imageAlt, topper, title, buttonText, buttonLink }) {
    const handleButtonClick = () => {
        if (buttonLink) {
            const element = document.querySelector(buttonLink);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="banner">
            <div className="banner__image-wrapper">
                <div className="banner__image--overlay"></div>
                <img className="banner__image" src={imageSrc} alt={imageAlt} />
            </div>

            <div className="banner__content">
                {topper && <span className="banner__title-topper">{topper}</span>}
                {title && <h1 className="banner__title">{title}</h1>}
                {buttonText && buttonLink && (
                    <button className="banner__button" onClick={handleButtonClick}>
                        {buttonText}
                    </button>
                )}
            </div>
        </div>
    );
}

export default Banner;
