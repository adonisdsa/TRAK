import React from 'react';
import { Helmet } from 'react-helmet';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import BookDemo from 'components/pages/private/thank-you/book-meeting/BookMeeting';

export default function ContactPageStatistics() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="robots" content="noindex" />
                <title>Thank You - Blue Flag</title>
                <link rel="canonical" href="https://blueflag.com.au/private/thank-you/book-demo/" />
            </Helmet>
            <Navigation />

            <BookDemo />

            <Footer />
        </>
    );
}
