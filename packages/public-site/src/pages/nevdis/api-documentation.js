import React from 'react';
import { Helmet } from 'react-helmet';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import NevdisAPIDocumentationLegacy from 'components/pages/nevdis/api-documentation';

export default function WrittenOffInfo() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>NEVDIS API Documentation</title>
                <meta name="description" content="Getting started guide for the NEVDIS search API and registration checks. Check any VIN, chassis or number plate in Australia." />
                <link rel="canonical" href="https://blueflag.com.au/nevdis/api-documentation/" />
            </Helmet>
            <Navigation />
            <NevdisAPIDocumentationLegacy />
            <Footer />
        </>
    );
}
