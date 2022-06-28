import React from 'react';
import { Helmet } from 'react-helmet';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import Hero from 'components/pages/realcarpricing/realcarpricingfaq/RealCarPricingfaq';
import FAQ from 'components/pages/realcarpricing/realcarpricingfaq/faq';
import Tabs from 'components/pages/realcarpricing/realcarpricingfaq/tabs';

export default function RealCarPricingFAQTabs() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Real Car Pricing FAQs</title>
                <link rel="canonical" href="https://blueflag.com.au/real-car-pricing/faq/" />

                <meta name="description" content="Find out what consumers pay for new and used cars in Australia." />
                <meta name="keywords" content="real car pricing, actual car prices, real car prices" />
            </Helmet>
            <Navigation />
            <Tabs />
            <Hero />
            <FAQ />
            <Footer />
        </>
    );
}
