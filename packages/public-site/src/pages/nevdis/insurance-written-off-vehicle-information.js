import React from 'react';
import { Helmet } from 'react-helmet';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import WrittenOff from 'components/pages/writtenoffinfo/WrittenOff';

export default function WrittenOffInfo() {
    const description = `The Written Off Vehicle Register contains vehicles that have been declared a "write-off". This includes vehicles that have been badly damaged and are unsafe to drive. It also includes vehicles where the estimated cost of repair is more than the value of the vehicle.`;

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>NEVDIS Written-off Vehicle Notification (WOVR)</title>
                <link rel="canonical" href="https://blueflag.com.au/nevdis/insurance-written-off-vehicle-information/" />

                <meta name="description" content={description} />
                <meta name="keywords" content="write off, wovr, Written Off Vehicle Register" />
            </Helmet>
            <Navigation />
            <WrittenOff />
            <Footer />
        </>
    );
}
