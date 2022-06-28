// import './markdown.scss';
// import React from 'react';
// import { Helmet } from 'react-helmet';
// import { graphql } from 'gatsby';

// import Navigation from 'components/Navigation';
// import Footer from 'components/Footer';
// import Container from 'components/layout/Container/Container';
// import Section from 'components/layout/Section/Section';

// export default function Template({ data }) {
//     const { markdownRemark } = data;
//     const { frontmatter, html } = markdownRemark;

//     const { title, abstract } = frontmatter;
//     const canonical = `https://blueflag.com.au${frontmatter.path}`;

//     return (
//         <>
//             <Helmet>
//                 <meta charSet="utf-8" />
//                 <title>{title} | Blue Flag</title>
//                 {/* <link rel="canonical" href={canonical} /> */}
//                 <meta name="description" content={frontmatter.abstract} />

//                 {/* Open Graph / Facebook */}
//                 <meta property="og:type" content="website" />
//                 <meta property="og:locale" content="en_US" />
//                 <meta property="og:url" content={canonical} />
//                 <meta property="og:title" content={title} />
//                 <meta property="og:description" content={abstract} />
//                 {/* <meta property="og:image" content={logoUrl} /> */}
//                 {/* <meta property="og:image:alt" content="Blue Flag logo" /> */}

//                 {/* Twitter */}
//                 <meta name="twitter:card" content="summary" />
//                 <meta name="twitter:site" content="@blueflag" />
//                 {/* <meta name="twitter:image" content={iconUrl} /> */}
//                 <meta name="twitter:title" content={title} />
//                 <meta name="twitter:description" content={abstract} />
//             </Helmet>

//             <Navigation />

//             <Container className="paddingY5">
//                 <Section>
//                     <h1 className="paddingY4">{frontmatter.title}</h1>

//                     <div dangerouslySetInnerHTML={{ __html: html }} />
//                 </Section>
//             </Container>

//             <Footer />
//         </>
//     );
// }

// export const pageQuery = graphql`
//     query($path: String!) {
//         markdownRemark(frontmatter: { path: { eq: $path } }) {
//             html
//             frontmatter {
//                 path
//                 title
//                 abstract
//             }
//         }
//     }
// `;
