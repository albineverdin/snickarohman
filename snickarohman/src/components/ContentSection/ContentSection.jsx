import React from 'react';
import { Link } from 'react-router-dom';
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
    // Check if buttonLink is a hash link (anchor) or external link
    const isHashLink = buttonLink?.startsWith('#');
    const isExternalLink = buttonLink?.startsWith('http');

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
                            {isHashLink || isExternalLink ? (
                                <a href={buttonLink}>{buttonText}</a>
                            ) : (
                                <Link to={buttonLink}>{buttonText}</Link>
                            )}
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
