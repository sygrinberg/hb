import React, { useContext }  from 'react';
import ContactCard, { className as contactCardClass } from '../ContactCard/ContactCard';
import { Context } from '../store/store';
import './ContactsList.scss';

const ContactList = ({ contacts = [] }) => {
    const { state } = useContext(Context);
    const { filteredContacts } = state;

    return (
        <div className="contacts-list">
            <div className="contacts-list-items">
                {filteredContacts.map((contact, index) => <ContactCard {...contact} key={index} /> )}
                {/* Adding more empty cards for grid alignment */}
                {new Array(filteredContacts.length + 10).fill(true).map((i, index) => (
                    <div className={`${contactCardClass} filler`} key={`filler_${index}`}></div>
                ))}
            </div>
        </div>
    );
};

export default ContactList;