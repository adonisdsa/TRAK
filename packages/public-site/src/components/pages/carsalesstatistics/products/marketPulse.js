import '../CarSalesStatistics.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

import FeatureItem from 'components/pages/carsalesstatistics/products/featureItem';
import MarketPulse from 'assets/images/MarketPulse.svg';

import Button from 'components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faDollarSign, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { faCars } from '@fortawesome/pro-solid-svg-icons';

export default function VINDecoderData() {
    return (
        <>
            <Container theme="light" className="paddingY5 paddingYB6" autoMinHeight={false}>
                <Section className="MarketImage">
                    <MarketPulse />
                </Section>

                <Section>
                    <div className="product">
                        <h2 className="productHeader">Real Car Pricing</h2>
                        <p className="productCopy">The price buyers actually pay for new and used vehicles.</p>

                        <div className="checkCopy paddingY4">
                            <FeatureItem>
                                <div className="iconWrapper">
                                    <FontAwesomeIcon icon={faFileInvoiceDollar} />
                                </div>
                                <div className="itemCopy">
                                    <p>The closest price to invoice value</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <div className="iconWrapper">
                                    <FontAwesomeIcon icon={faDollarSign} />
                                </div>
                                <div className="itemCopy">
                                    <p>Includes pricing for Private, Dealer and Wholesale</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <div className="iconWrapper">
                                    <FontAwesomeIcon icon={faCars} />
                                </div>
                                <div className="itemCopy">
                                    <p>New, Used & Trade-In's</p>
                                </div>
                            </FeatureItem>
                        </div>

                        <Button to="https://blueflag.com.au/contact/?contact_sales_product=Market%20Pulse" type="new-outline" color="primary">
                            Learn More <FontAwesomeIcon icon={faArrowRight} />
                        </Button>
                    </div>
                </Section>
            </Container>
        </>
    );
}
