import React from 'react';
import { Helmet } from 'react-helmet';

import Navigation from 'components/Navigation';
import Hero from 'components/pages/bookmeeting/Hero/Hero';

export default function SalesConsultation() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sales Consultation</title>
                <link rel="canonical" href="https://blueflag.com.au/sales-consultation/" />

                <meta name="description" content="Book in a consult with our team." />
                <meta name="keywords" content="book consult, sales consultation" />
            </Helmet>
            <Navigation hideCTA />
            <Hero />
        </>
    );
}
