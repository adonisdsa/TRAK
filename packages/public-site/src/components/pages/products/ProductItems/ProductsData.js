import './Products.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

import ProductItems from './productItem';

export default function ProductsData() {
    return (
        <Container theme="light-grey" className="paddingY3">
            <Section>
                <h2 className="sectionHeader">Data</h2>
                <div className="productItem-grid">
                    <div className="productItem-box-wrapper">
                        <div className="productItemBox">
                            <ProductItems>
                                <div className="productItemTextWrapper">
                                    <h3>Electric Vehicle Forecast</h3>
                                    <p className="productItemText">Monitor the transition from ICE to Electric Vehicles</p>
                                </div>
                            </ProductItems>
                        </div>
                    </div>

                    <div className="productItem-box-wrapper">
                        <div className="productItemBox">
                            <ProductItems>
                                <div className="productItemTextWrapper">
                                    <h3>Real Car Pricing</h3>
                                    <p className="productItemText">Find out what consumers pay for new and used cars in Australia</p>
                                </div>
                            </ProductItems>
                        </div>
                    </div>

                    <div className="productItem-box-wrapper">
                        <div className="productItemBox">
                            <ProductItems>
                                <div className="productItemTextWrapper">
                                    <h3>New Car Calendar</h3>
                                    <p className="productItemText">Every release including new models, face-lifts, tech changes and limited editions</p>
                                </div>
                            </ProductItems>
                        </div>
                    </div>

                    <div className="productItem-box-wrapper">
                        <div className="productItemBox">
                            <ProductItems>
                                <div className="productItemTextWrapper">
                                    <h3>New Car Offers</h3>
                                    <p className="productItemText">All manufacturer advertised offers, incentives and price changes</p>
                                </div>
                            </ProductItems>
                        </div>
                    </div>

                    <div className="productItem-box-wrapper">
                        <div className="productItemBox">
                            <ProductItems>
                                <div className="productItemTextWrapper">
                                    <h3>New Car Market Forecast</h3>
                                    <p className="productItemText">Predicting the number of new vehicle sales by calendar month</p>
                                </div>
                            </ProductItems>
                        </div>
                    </div>
                </div>
            </Section>
        </Container>
    );
}
