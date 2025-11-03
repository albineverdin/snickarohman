import React from 'react';
import './ContentSection.css';

function ContentSection({
    imagePosition = 'left',
    imageSrc,
    imageAlt,
    topper,
    title,
    children,
    buttonText,
    buttonLink
}) {
    return (
        <section className="content-section">
            <div className="cs__container --side-flex">
                {imagePosition === 'left' && (
                    <div className="cs__image">
                        <img src={imageSrc} alt={imageAlt} />
                    </div>
                )}

                <div className="cs__content-side">
                    {topper && <span className="cs__title-topper">{topper}</span>}
                    {title && <h1 className="cs__title">{title}</h1>}

                    {children}

                    {buttonText && buttonLink && (
                        <div className="cs__button">
                            <a href={buttonLink}>{buttonText}</a>
                        </div>
                    )}
                </div>

                {imagePosition === 'right' && (
                    <div className="cs__image">
                        <img src={imageSrc} alt={imageAlt} />
                    </div>
                )}
            </div>
        </section>
    );
}

export default ContentSection;
