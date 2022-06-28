import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Navigation from 'components/Navigation';
import View from 'components/View';
import Footer from 'components/Footer';
import NevdisIndex from 'components/pages/data/nevdis';
import JSON_LD from 'components/pages/data/nevdis/jsonld';

export default function page({ data }) {
    const canonical = 'https://blueflag.com.au/nevdis/';
    const title = 'NEVDIS - VIN Check and Rego Check';
    const description = `NEVDIS database (National Exchange of Vehicle and Driver Information System) contains information on all vehicle's registered in Australia. All data is imported from the eight state and territory road authorities.`;
    const iconUrl = 'https://blueflag.com.au/assets/logos/blueflag-logo-icon-dark-500.png';

    return (
        <View>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <link rel="canonical" href={canonical} />

                <meta name="description" content={description} />
                <meta name="keywords" content="nevdis, nevdis api, rego check" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:url" content={canonical} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={iconUrl} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@blueflag" />
                <meta name="twitter:image" content={iconUrl} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />

                <script type="application/ld+json">{JSON.stringify(JSON_LD)}</script>
            </Helmet>
            <Navigation />
            <NevdisIndex nevdisDataSources={data?.nevdisDataSources} />
            <Footer />
        </View>
    );
}

export const query = graphql`
    query {
        nevdisDataSources: file(relativePath: { eq: "images/nevdis/datasources.png" }) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
