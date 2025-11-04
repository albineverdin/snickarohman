import React from 'react';

function FAQItem({ question, answer }) {

    // TODO: Add actual FAQ accordion functionality

    return (
        <div className="faq-item">
            <div className="faq-question">
                <h3>{question}</h3>
                <span className="faq-icon">&#8963;</span>
            </div>
            <div className="faq-answer">
                <p>{answer}</p>
            </div>
        </div>
    );
}

export default FAQItem;
