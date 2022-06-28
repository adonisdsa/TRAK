// import '@progress/kendo-theme-default/dist/all.css';
import './BlogPostLayout.scss';
import './BlogPostLayout-custom.scss';

import React from 'react';
import PropTypes from 'prop-types';
// import { StaticQuery, graphql } from 'gatsby';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

const Layout = ({ children, isBlogPost }) => (
    <Container type={isBlogPost ? 'blog' : 'page'} className="paddingY5" autoMinHeight={false}>
        <Section>
            <div className="content-flex ">{children}</div>
        </Section>
    </Container>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
