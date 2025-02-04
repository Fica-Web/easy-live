import React from 'react';
import PageTitle from '../components/reusable/PageTitle';
import ContactForm from '../components/contactPage/ContactForm';

const ContactPage = () => {
    return (
        <>
            <PageTitle title={'Contact Us'} />
            <ContactForm />
        </>
    )
}

export default ContactPage
