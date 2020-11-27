import React from 'react';
import ContactIcon from '../ContactIcon/ContactIcon';
import './ContactCard.scss';

export const className = 'contact-card';

const ContactCard = props => {    
    const { company_name, email, icon, job, name, phone, profile_image } = props;
    
    return (
        <div className={className} tabIndex="0">
            <div className={`${className}-content`}>
                <img className={`${className}-content-image`} src={profile_image} alt={name} />
                <div className={`${className}-content-icon`} >
                    <ContactIcon iconUrl={icon} name={name} />
                </div>
                <div className={`${className}-content-info `} >
                    <div>
                        <div className={`${className}-content-info-name`} >
                            {name}
                        </div>
                        <div className={`${className}-content-info-job`}>
                            {job
                                ? `${job} | @${company_name}`
                                : `@${company_name}`
                            }
                        </div>
                    </div>
                    <div className={`${className}-content-info-contact-details`} >
                        <div>
                            {phone && `Phone Number ${phone}`}
                        </div>
                        <div>
                            {email}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;