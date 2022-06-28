import React from 'react';
import { Helmet } from 'react-helmet';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import Hero from 'components/pages/newcarforecast/hero/NewCarForecast';
import TrustedData from 'components/pages/newcarforecast/trustedData/trustedData';
import Database from 'components/pages/newcarforecast/database/database';
import EV from 'components/pages/newcarforecast/ev/electricVehicles';
import Features from 'components/pages/newcarforecast/features/decoderFeatures';
import Predict from 'components/pages/newcarforecast/predict/predict';
// import UseCases from 'components/pages/newcarforecast/useCases/useCases';

export default function NewCarForecastPage() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>New Car Sales Forecast</title>
                <link rel="canonical" href="https://blueflag.com.au/new-car-market-forecast/" />

                <meta name="description" content="Find useful specific details of your vehicle." />
                <meta name="keywords" content="vin decoder, find vin, vin check" />
            </Helmet>
            <Navigation />
            <Hero />
            <Features />
            <Predict />
            <TrustedData />
            <EV />
            <Database />
            {/* <UseCases /> */}
            <Footer />
        </>
    );
}
