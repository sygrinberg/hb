import React from 'react';
import './ContactIcon.scss';

export default ({ iconUrl, className = '' }) => { 
    return (
        <div className={`contact-icon ${className}`}>
            <img className="contact-icon-image" src={iconUrl} />
        </div>
    );
};