import React from 'react';
import './Banner.css';

function Banner({ imageSrc, imageAlt, topper, title }) {
    return (
        <div className="banner">
            <div className="banner__image-wrapper">
                <div className="banner__image--overlay"></div>
                <img className="banner__image" src={imageSrc} alt={imageAlt} />
            </div>

            <div className="banner__content">
                {topper && <span className="banner__title-topper">{topper}</span>}
                {title && <h1 className="banner__title">{title}</h1>}
            </div>
        </div>
    );
}

export default Banner;
