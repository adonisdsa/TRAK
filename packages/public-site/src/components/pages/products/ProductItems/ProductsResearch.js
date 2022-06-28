import './Products.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

import ProductItems from './productItem';

export default function ProductsResearch() {
    return (
        <Container theme="light-grey" className="paddingY3">
            <Section>
                <h2 className="sectionHeader">Research & Reporting</h2>
                <div className="productItem-grid">
                    <div className="productItem-box-wrapper">
                        <div className="productItemBox">
                            <ProductItems>
                                <div className="productItemTextWrapper">
                                    <h3>Residual Values</h3>
                                    <p className="productItemText">Prediction of what your vehicle is worth today and in the future</p>
                                </div>
                            </ProductItems>
                        </div>
                    </div>

                    <div className="productItem-box-wrapper">
                        <div className="productItemBox">
                            <ProductItems>
                                <div className="productItemTextWrapper">
                                    <h3>Fleet Emissions Monitoring</h3>
                                    <p className="productItemText">Ensure your vehicles will be emissions compliant</p>
                                </div>
                            </ProductItems>
                        </div>
                    </div>

                    <div className="productItem-box-wrapper">
                        <div className="productItemBox">
                            <ProductItems>
                                <div className="productItemTextWrapper">
                                    <h3>Dealer Analysis</h3>
                                    <p className="productItemText">Analyse sales and servicing performance by PMA</p>
                                </div>
                            </ProductItems>
                        </div>
                    </div>

                    <div className="productItem-box-wrapper">
                        <div className="productItemBox">
                            <ProductItems>
                                <div className="productItemTextWrapper">
                                    <h3>Competitive Benchmarking</h3>
                                    <p className="productItemText">Compare your performance against key competitors</p>
                                </div>
                            </ProductItems>
                        </div>
                    </div>

                    <div className="productItem-box-wrapper">
                        <div className="productItemBox">
                            <ProductItems>
                                <div className="productItemTextWrapper">
                                    <h3>Data Cleansing</h3>
                                    <p className="productItemText">Correct and enrich your internal databases with our datasets</p>
                                </div>
                            </ProductItems>
                        </div>
                    </div>
                </div>
            </Section>
        </Container>
    );
}
