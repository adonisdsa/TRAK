import React from 'react';
import { Helmet } from 'react-helmet';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import PricingTiers from 'components/pages/pricing/pricingTiers';
import Clients from 'components/pages/pricing/clients';
import FAQ from 'components/pages/pricing/faq';
import Descriptions from 'components/pages/pricing/descriptions';
import Database from 'components/pages/pricing/database/database';

export default function PricingPage() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Plans & Pricing for Blue Flag API and NEVDIS</title>
                <link rel="canonical" href="https://blueflag.com.au/pricing/" />

                <meta name="description" content="Great value plans and pricing for NEVDIS registration data via Blue Flag's API. Signup for pay-per-request pricing information." />
                <meta name="keywords" content="nevdis pricing, blue flag pricing, registration data pricing" />
            </Helmet>
            <Navigation />
            <PricingTiers />
            <Descriptions />
            <Clients />
            <Database />
            <FAQ />
            <Footer />
        </>
    );
}
