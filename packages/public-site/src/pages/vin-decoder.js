import React from 'react';
import { Helmet } from 'react-helmet';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import Hero from 'components/pages/vindecoder/hero/VINDecoder';
import TrustedData from 'components/pages/vindecoder/trustedData/trustedData';
import Database from 'components/pages/vindecoder/database/database';
import Features from 'components/pages/vindecoder/features/decoderFeatures';
// import UseCases from 'components/pages/vindecoder/useCases/useCases';

export default function VinDecoderPage() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>VIN Decoder</title>
                <link rel="canonical" href="https://blueflag.com.au/vin-decoder/" />

                <meta name="description" content="Find useful specific details of your vehicle." />
                <meta name="keywords" content="vin decoder, find vin, vin check" />
            </Helmet>
            <Navigation />
            <Hero />
            <Features />
            <TrustedData />
            <Database />
            {/* <UseCases /> */}
            <Footer />
        </>
    );
}
