import React from 'react';
import { Helmet } from 'react-helmet';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import VinOrChassis from 'components/pages/vinchassis/VINChassis';

export default function VinOrChassisPage() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>VIN and Chassis Number - Is it the same?</title>
                <link rel="canonical" href="https://blueflag.com.au/nevdis/vin-or-chassis-number/" />
            </Helmet>
            <Navigation />
            <VinOrChassis />
            <Footer />
        </>
    );
}
