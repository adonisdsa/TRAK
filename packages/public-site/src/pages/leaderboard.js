import React from 'react';
import { Helmet } from 'react-helmet';

import Navigation from 'components/Navigation';
import Contact from 'components/pages/leaderboard/leaderboard';

export default function LeaderboardPage() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="robots" content="noindex" />
                <title>Blue Flag - Gran Premio Del Australian Automobili Venditore Associazione 2022</title>
                <link rel="canonical" href="https://blueflag.com.au/leaderboard/" />

                <meta name="description" content="Leaderboard for the racing simulator" />
                <meta name="keywords" content="leaderboard, simulator, blue flag cup" />
            </Helmet>
            <Navigation />
            <Contact />
        </>
    );
}
