import React from 'react';
import { Helmet } from 'react-helmet';

// import Footer from 'components/Footer'
import Navigation from 'components/Navigation';
import Contact from 'components/pages/contact/contact-carsalesstatistics';

export default function ContactPage() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us - Blue Flag</title>
                <link rel="canonical" href="https://blueflag.com.au/contact-us/" />

                <meta name="description" content="Get in touch for general sales inquiries. Speak to our experts to find out how our api can help you identify vehicles quickly." />
                <meta name="keywords" content="nevdis contact, registration data sales" />
            </Helmet>
            <Navigation hideCTA />
            <Contact />
            {/* <Footer /> */}
        </>
    );
}
