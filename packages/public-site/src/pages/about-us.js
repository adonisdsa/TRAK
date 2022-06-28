import React from 'react';
import { Helmet } from 'react-helmet';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import Hero from 'components/pages/about-us/Hero/HeroAbout';
import WhoWeAre from 'components/pages/about-us/WhoWeAre/WhoWeAre';
import AboutUs from 'components/pages/about-us/AboutUs';

export default function aboutPage() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Us - Blue Flag</title>
                <link rel="canonical" href="https://blueflag.com.au/about-us/" />

                <meta name="description" content="Learn a little more about our company and its history. Our team of automotive and software experts are here to help." />
            </Helmet>
            <Navigation />
            <Hero />
            <AboutUs />
            <WhoWeAre />
            <Footer />
        </>
    );
}
