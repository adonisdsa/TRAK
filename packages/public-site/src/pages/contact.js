import React from 'react';
import { Helmet } from 'react-helmet';

// import Footer from 'components/Footer'
import Navigation from 'components/Navigation';
import Contact from 'components/pages/contact/contact';

export default function ContactPage() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us - TRAK</title>
                <link rel="canonical" href="https://traklms/contact/" />

                <meta name="description" content="Get in touch for general sales inquiries. Speak to our experts to find out how our api can help you identify vehicles quickly." />
                <meta name="keywords" content="nevdis contact, registration data sales" />
            </Helmet>
            <Navigation hideCTA />
            <Contact />
            {/* <Footer /> */}
        </>
    );
}
