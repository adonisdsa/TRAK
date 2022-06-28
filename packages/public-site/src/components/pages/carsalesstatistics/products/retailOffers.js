import '../CarSalesStatistics.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

import FeatureItem from 'components/pages/carsalesstatistics/products/featureItem';
import PricingChanges from 'assets/images/PricingChanges.svg';

import Button from 'components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faFileAlt, faHistory } from '@fortawesome/free-solid-svg-icons';
import { faChartNetwork } from '@fortawesome/pro-solid-svg-icons';

export default function VINDecoderData() {
    return (
        <>
            <Container theme="light" className="reverseMobile paddingY6" autoMinHeight={false}>
                <Section>
                    <div className="product">
                        <h2 className="productHeader">New Car Offers</h2>
                        <p className="productCopy">All manufacturer advertised offers, incentives and price changes.</p>

                        <div className="checkCopy paddingY4">
                            <FeatureItem>
                                <div className="iconWrapper">
                                    <FontAwesomeIcon icon={faChartNetwork} />
                                </div>
                                <div className="itemCopy">
                                    <p>National Coverage</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <div className="iconWrapper">
                                    <FontAwesomeIcon icon={faHistory} />
                                </div>
                                <div className="itemCopy">
                                    <p>10 years of historical data</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <div className="iconWrapper">
                                    <FontAwesomeIcon icon={faFileAlt} />
                                </div>
                                <div className="itemCopy">
                                    <p>Includes evidence of each offer</p>
                                </div>
                            </FeatureItem>
                        </div>

                        <Button to="https://blueflag.com.au/contact/?contact_sales_product=Retail%20Offers" type="new-outline" color="primary">
                            Learn More <FontAwesomeIcon icon={faArrowRight} />
                        </Button>
                    </div>
                </Section>

                <Section className="PricingImage">
                    <PricingChanges />
                </Section>
            </Container>
        </>
    );
}
