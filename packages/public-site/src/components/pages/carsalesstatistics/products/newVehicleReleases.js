import '../CarSalesStatistics.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

import FeatureItem from 'components/pages/carsalesstatistics/products/featureItem';
import VehicleRelease from 'assets/images/VehicleRelease.svg';

import Button from 'components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCar, faHistory } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

export default function VINDecoderData() {
    return (
        <>
            <Container theme="light" className="paddingY5" autoMinHeight={false}>
                <Section className="VehicleImage">
                    <VehicleRelease />
                </Section>
                <Section>
                    <div className="product">
                        <h2 className="productHeader">New Car Calendar</h2>
                        <p className="productCopy">Every release including new models, face-lifts, tech changes and limited editions.</p>

                        <div className="checkCopy paddingY4">
                            <FeatureItem>
                                <div className="iconWrapper">
                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                </div>
                                <div className="itemCopy">
                                    <p>Forecast for the next 10 years</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <div className="iconWrapper">
                                    <FontAwesomeIcon icon={faHistory} />
                                </div>
                                <div className="itemCopy">
                                    <p>Includes 15 years of historical data</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <div className="iconWrapper">
                                    <FontAwesomeIcon icon={faCar} />
                                </div>
                                <div className="itemCopy">
                                    <p>Predictions down to model and variant level</p>
                                </div>
                            </FeatureItem>
                        </div>

                        <Button to="https://blueflag.com.au/contact/?contact_sales_product=New%20Vehicle%20Releases" type="new-outline" color="primary">
                            Learn More <FontAwesomeIcon icon={faArrowRight} />
                        </Button>
                    </div>
                </Section>
            </Container>
        </>
    );
}
