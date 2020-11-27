import React from 'react';
import './ContactIcon.scss';

const ContactIcon = ({ iconUrl, name, className = '' }) => { 
    return (
        <div className={`contact-icon ${className}`}>
            <img className="contact-icon-image" src={iconUrl} alt={`${name} icon`} />
        </div>
    );
};

export default ContactIcon;