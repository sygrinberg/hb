import React, { useState, useCallback } from 'react';
import ContactIcon from '../ContactIcon/ContactIcon';
import './ContactCard.scss';

export const className = 'contact-card';

export default props => {    
    const { company_name, email, icon, job, name, phone, profile_image } = props;
    
    return (
        <div className={className} tabindex="0">
            <div className={`${className}-content`}>
                <img className={`${className}-content-image`} src={profile_image} />
                <div className={`${className}-content-icon`} >
                    <ContactIcon iconUrl={icon} />
                </div>
                <div className={`${className}-content-info `} >
                    <div>
                        <div className={`${className}-content-info-name`} >
                            {name}
                        </div>
                        <div className={`${className}-content-info-job`} className="contact-card-content-info-job">
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