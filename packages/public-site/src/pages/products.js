import React from 'react';
import { Helmet } from 'react-helmet';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import ProductsAPI from 'components/pages/products/ProductItems/ProductsAPI';
import ProductsData from 'components/pages/products/ProductItems/ProductsData';
import ProductsResearch from 'components/pages/products/ProductItems/ProductsResearch';
import ProductsTraining from 'components/pages/products/ProductItems/ProductsTraining';
import ProductHero from 'components/pages/products/ProductHero/Hero.js';

export default function ProductsPage() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Products</title>
                <link rel="canonical" href="https://blueflag.com.au/products/" />

                <meta name="description" content="ENTER NEW TEXT" />
                <meta name="keywords" content="ENTER NEW TEXT" />
            </Helmet>
            <Navigation />
            <ProductHero />
            <ProductsAPI />
            <ProductsData />
            <ProductsResearch />
            <ProductsTraining />
            <Footer />
        </>
    );
}
