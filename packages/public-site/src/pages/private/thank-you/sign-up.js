import React from 'react';
import { Helmet } from 'react-helmet';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import SignUp from 'components/pages/private/thank-you/sign-up/SignUp';

export default function ContactPage() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="robots" content="noindex" />
                <title>Thank You - Blue Flag</title>
                <link rel="canonical" href="https://blueflag.com.au/private/thank-you/sign-up/" />
            </Helmet>
            <Navigation />

            <SignUp />

            <Footer />
        </>
    );
}
