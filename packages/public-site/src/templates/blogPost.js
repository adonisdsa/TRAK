import './blogPost.scss';
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Navigation from 'components/Navigation';
import View from 'components/View';
import Footer from 'components/Footer';

import BlogPostLayout from 'components/pages/blog/BlogPostLayout';

import { createJsonLd } from './blogJsonLd';

export default function Template({ data }) {
    const { markdownRemark: post } = data;

    const p = post.frontmatter;
    const url = `https://blueflag.com.au${p.path}`;
    const heroImage = post.frontmatter.heroImage && post.frontmatter.heroImage.childImageSharp.fluid;
    const socialPostImage = post.frontmatter?.heroImage?.childImageSharp?.socialPostImage;
    const blogImage = heroImage ? `https://blueflag.com.au${heroImage.src}` : 'https://blueflag.com.au/assets/logos/blueflag-logo-icon-dark-500.png';
    const isBlogPost = url.indexOf('/blog/') !== -1;

    const keywords =
        p.keywords &&
        p.keywords
            .split(',')
            .map(kk => kk.trim())
            .join(', ');

    const datePublished = new Date(p.date || '2020-10-06').toISOString();
    const dateModified = new Date(p.dateModified || '2020-10-06').toISOString();
    const displayDate = new Date(p.dateModified || '2020-10-06').toLocaleDateString('en-gb', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const JSON_LD = createJsonLd({
        ...p,
        url,
        datePublished,
        dateModified,
        socialPostImage,
    });

    return (
        <>
            <Helmet
                htmlAttributes={{ lang: 'en' }}
                title={p.title}
                meta={[
                    { property: `article:published_time`, content: datePublished },
                    { property: `article:modified_time`, content: dateModified },
                    // { property: `article:publisher`, content: facebookPageURL },

                    { name: `description`, content: p.description },
                    { name: `keywords`, content: keywords },

                    { property: `og:site_name`, content: 'Blue Flag' },
                    { property: `og:type`, content: 'website' },
                    { property: `og:locale`, content: 'en_US' },
                    { property: `og:url`, content: url },
                    { property: `og:title`, content: p.title },
                    { property: `og:description`, content: p.description },
                    { property: `og:image`, content: blogImage },

                    { property: `twitter:card`, content: 'summary' },
                    { property: `twitter:site`, content: '@blueflag' },
                    { property: `twitter:image`, content: blogImage },
                    { property: `twitter:title`, content: p.title },
                    { property: `twitter:description`, content: p.description },
                ]}
            >
                <link rel="canonical" href={url} />
                <script type="application/ld+json">{JSON.stringify(JSON_LD)}</script>
            </Helmet>
            <Navigation />
            <View>
                <BlogPostLayout isBlogPost={isBlogPost}>
                    <div className="blogPost">
                        {isBlogPost && <Img fluid={heroImage} alt={post.frontmatter.title} />}
                        <h1>{post.frontmatter.title}</h1>

                        {isBlogPost && (
                            <div className="date">
                                {displayDate} • {post.fields.readingTime.text}
                            </div>
                        )}

                        <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    </div>
                </BlogPostLayout>
            </View>
            <Footer />
        </>
    );
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                dateModified
                date
                description
                heroImage {
                    childImageSharp {
                        fluid(maxWidth: 810) {
                            ...GatsbyImageSharpFluid
                        }
                        socialPostImage: fluid(maxWidth: 1200, maxHeight: 628) {
                            ...GatsbyImageSharpFluid
                            presentationHeight
                            presentationWidth
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
`;
