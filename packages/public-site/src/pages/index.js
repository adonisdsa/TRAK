import React from 'react';
import { Helmet } from 'react-helmet';

import Navigation from 'components/Navigation';
import View from 'components/View';
import Footer from 'components/Footer';
import Hero from 'components/pages/home/Hero/Hero';
import WorkWith from 'components/pages/home/WorkWith/WorkWith';
import CreatedWith from 'components/pages/home/CreatedWith/created';
import CreatedWith2 from 'components/pages/home/CreatedWith2/created';
import TrainingDelivery from 'components/pages/home/trainingDelivery/trainingDelivery';
import Analytics from '../components/pages/home/analyticsReporting/analytics';
import ProductHub from '../components/pages/home/productHub/productHub';
import TrainingMarketplace from '../components/pages/home/trainingMarketplace/trainingMarketplace';

export default function Home() {
    const canonical = 'https://traklms.com';
    const title = 'TRAK | Learning Management System';
    const description = 'The Automotive industry’s favourite Learning Management System.';
    const logoUrl = 'https://blueflag.com.au/assets/logos/trakLogo.png';
    const iconUrl = 'https://blueflag.com.au/assets/logos/trakLogo.png';

    const jsonLD = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'TRAK',
        url: 'https://traklms.coom',
        logo: logoUrl,
        sameAs: ['https://twitter.com/traklms', 'https://www.linkedin.com/showcase/trak-lms/'],
    };

    return (
        <View>
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="canonical" href={canonical} />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content="TRAK, lms, training modules, automotive, learning management system" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:url" content={canonical} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={logoUrl} />
                <meta property="og:image:alt" content="TRAK logo" />
                <meta property="og:image:width" content="1500" />
                <meta property="og:image:height" content="333" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@trak" />
                <meta name="twitter:image" content={iconUrl} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />

                <script type="application/ld+json">{JSON.stringify(jsonLD)}</script>
            </Helmet>
            <Navigation />
            <Hero />
            <WorkWith />
            <CreatedWith />
            <TrainingDelivery />
            <ProductHub />
            <Analytics />
            <CreatedWith2 />
            <TrainingMarketplace />
            <Footer />
        </View>
    );
}
