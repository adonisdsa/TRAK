import React from 'react';
import { Helmet } from 'react-helmet';

import Navigation from 'components/Navigation';
import View from 'components/View';
import Footer from 'components/Footer';
import Hero from 'components/pages/home/Hero/Hero';
import WorkWith from 'components/pages/home/WorkWith/WorkWith';
import API from 'components/pages/home/API/API';
import VehicleIdentification from 'components/pages/home/vehicleIdentification/vehicleIdentification';
import DataProducts from '../components/pages/home/DataProducts/services';
import SaveTime from '../components/pages/home/saveTime/savetime';
import OnePlatform from '../components/pages/home/onePlatform/onePlatform';

export default function Home() {
    const canonical = 'https://blueflag.com.au';
    const title = 'Blue Flag | Vehicle Data Platform';
    const description = 'Blue Flag is a vehicle data platform (VDP) that provides access to automotive data via an API. Learn more about our data and how you can get access.';
    const logoUrl = 'https://blueflag.com.au/assets/logos/blueflag-logo-full-1500.png';
    const iconUrl = 'https://blueflag.com.au/assets/logos/blueflag-logo-icon-dark-500.png';

    const jsonLD = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Blue Flag',
        url: 'https://blueflag.com.au',
        logo: logoUrl,
        sameAs: ['https://twitter.com/blueflag', 'https://www.linkedin.com/company/blueflag'],
    };

    return (
        <View>
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="canonical" href={canonical} />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content="Blue Flag, nevdis, vehicle, api, automotive, data, rego" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:url" content={canonical} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={logoUrl} />
                <meta property="og:image:alt" content="Blue Flag logo" />
                <meta property="og:image:width" content="1500" />
                <meta property="og:image:height" content="333" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@blueflag" />
                <meta name="twitter:image" content={iconUrl} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />

                <script type="application/ld+json">{JSON.stringify(jsonLD)}</script>
            </Helmet>
            <Navigation />
            <Hero />
            <WorkWith />
            <VehicleIdentification />
            <SaveTime />
            <DataProducts />
            <API />
            <OnePlatform />
            <Footer />
        </View>
    );
}
