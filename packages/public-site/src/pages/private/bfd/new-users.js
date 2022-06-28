import React from 'react';
import { Helmet } from 'react-helmet';

import Navigation from 'components//Navigation/Navigation';
import NewUsers from 'components/pages/private/bfd/NewUsers';

export default function ContactPage() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="robots" content="noindex" />
                <title>Welcome - Blue Flag</title>
                <link rel="canonical" href="https://blueflag.com.au/private/bfd/new-users/" />
            </Helmet>

            <Navigation hideCTA />

            <NewUsers />
        </>
    );
}
