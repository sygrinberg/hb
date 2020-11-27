export const filterContacts = (searchTerm = '', contacts = []) => {
    const lowerSearchTerm = searchTerm.toLocaleLowerCase();
    return contacts.filter(({ searchString }) => searchString.includes(lowerSearchTerm));
};

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