import React, { useContext }  from 'react';
import ContactCard, { className as contactCardClass } from '../ContactCard/ContactCard';
import { Context } from '../store/store';
import './ContactsList.scss';

export default ({ contacts = [] }) => {
    const { state } = useContext(Context);
    const { filteredContacts } = state;

    return (
        <div className="contacts-list">
            <div className="contacts-list-items">
                {filteredContacts.map((contact, index) => <ContactCard {...contact} key={index} /> )}
                {new Array(filteredContacts.length + 10).fill(true).map(() => <div className={`${contactCardClass} filler`}></div>)}
            </div>
        </div>
    );
};