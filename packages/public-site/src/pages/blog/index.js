import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Navigation from 'components/Navigation';
import View from 'components/View';
import Footer from 'components/Footer';

import BlogHome from 'components/pages/blog';

export default function Blog(props) {
    const posts = props.data.blog.edges.map(pp => pp.node);

    const canonical = 'https://blueflag.com.au/blog/';
    const title = 'Automotive Blog - Data on Industry Trends and Market Analysis';
    const description = `We talk about everything automotive including sales, data, statistics, forecasts, market analysis and much more.`;
    const iconUrl = 'https://blueflag.com.au/assets/logos/blueflag-logo-icon-dark-500.png';

    // const JSON_LD = {};

    return (
        <View>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <link rel="canonical" href={canonical} />

                <meta name="description" content={description} />
                <meta name="keywords" content="blog, automotive, blue flag" />

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

                {/* <script type="application/ld+json">{JSON.stringify(JSON_LD)}</script> */}
            </Helmet>
            <Navigation />
            <BlogHome posts={posts} />
            <Footer />
        </View>
    );
}

export const pageQuery = graphql`
    query {
        blog: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: { fileAbsolutePath: { regex: "/(blog)/" } }) {
            edges {
                node {
                    frontmatter {
                        path
                        title
                        date
                        description
                        heroImage {
                            childImageSharp {
                                fluid(maxHeight: 2000) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        readingTime {
                            text
                        }
                    }
                }
            }
        }
    }
`;
