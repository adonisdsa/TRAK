import React from 'react';
import { Helmet } from 'react-helmet';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import Hero from 'components/pages/realcarpricing/hero/RealCarPricing';
import Tabs from 'components/pages/realcarpricing/tabs/tabs';
import TrustedData from 'components/pages/realcarpricing/trustedData/trustedData';
import Database from 'components/pages/realcarpricing/database/database';
import Features from 'components/pages/realcarpricing/features/decoderFeatures';

export default function VinDecoderPage() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Real Car Pricing</title>
                <link rel="canonical" href="https://blueflag.com.au/real-car-pricing/" />

                <meta name="description" content="Find out what consumers pay for new and used cars in Australia." />
                <meta name="keywords" content="real car pricing, actual car prices, real car prices" />
            </Helmet>
            <Navigation />
            <Hero />
            <Tabs />
            <Features />
            <TrustedData />
            <Database />
            {/* <UseCases /> */}
            <Footer />
        </>
    );
}
