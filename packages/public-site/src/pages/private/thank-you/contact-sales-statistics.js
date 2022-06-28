import React from 'react';
import { Helmet } from 'react-helmet';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import ContactSalesStatistics from 'components/pages/private/thank-you/contact-sales/ContactSalesCarSales';

export default function ContactPageStatistics() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="robots" content="noindex" />
                <title>Thank You - Blue Flag</title>
                <link rel="canonical" href="https://blueflag.com.au/private/thank-you/contact/" />
            </Helmet>
            <Navigation />

            <ContactSalesStatistics />

            <Footer />
        </>
    );
}
