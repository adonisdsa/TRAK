import React from 'react';
import { Helmet } from 'react-helmet';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import Hero from 'components/pages/carsalesstatistics/hero/salesStatisticsHero';
import VehicleMarketForcasting from 'components/pages/carsalesstatistics/products/vehicleMarketForcasting';
import NewVehicleReleases from 'components/pages/carsalesstatistics/products/newVehicleReleases';
import RetailOffers from 'components/pages/carsalesstatistics/products/retailOffers';
import MarketPulse from 'components/pages/carsalesstatistics/products/marketPulse';

export default function CarSalesStatisticsPage() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Car Sales Statistics</title>
                <link rel="canonical" href="https://blueflag.com.au/car-sales-statistics/" />

                <meta name="description" content="Find useful specific details of your vehicle." />
                <meta name="keywords" content="vin decoder, find vin, vin check" />
            </Helmet>
            <Navigation />
            <Hero />
            <VehicleMarketForcasting />
            <NewVehicleReleases />
            <RetailOffers />
            <MarketPulse />
            <Footer />
        </>
    );
}
