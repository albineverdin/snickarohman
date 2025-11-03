import React from 'react';
import './SectionHeader.css';

function SectionHeader({ topper, title, children }) {
    return (
        <div className="section-header">
            {topper && <span className="section-header__topper">{topper}</span>}
            {title && <h1 className="section-header__title">{title}</h1>}
            {children}
        </div>
    );
}

export default SectionHeader;
