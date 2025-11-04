import React from 'react';
import './FAQ.css';
import FAQItem from './FAQItem';

function FAQ({ faqs }) {
    return (
        <div className="faq__container">
            {faqs.map((faq, index) => (
                <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                />
            ))}
        </div>
    );
}

export default FAQ;
