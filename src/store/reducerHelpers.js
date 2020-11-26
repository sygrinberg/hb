export const filterContacts = (searchTerm = '', contacts = []) => (
    contacts.filter(({ searchString }) => searchString.includes(searchTerm))
);

export const prepareContacts = (contacts = []) => {
    return contacts.map(contact => {
        const { company_name = '', email = '', job = '', name = '', phone = '' } = contact;
        return {
            ...contact,
            searchString: [
                company_name.toLowerCase(),
                email.toLowerCase(),
                job.toLowerCase(),
                name.toLowerCase(),
                phone.toLowerCase(),            
            ].join('')
        };
    });
};