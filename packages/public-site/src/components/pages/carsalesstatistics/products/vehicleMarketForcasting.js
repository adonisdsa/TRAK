import '../CarSalesStatistics.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

import Button from 'components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faGasPump, faCar, faArrowRight, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import FeatureItem from 'components/pages/carsalesstatistics/products/featureItem';
import MarketForecast from 'assets/images/MarketForecast.svg';

export default function vehicleMarketForecasting() {
    return (
        <>
            <Container theme="light" className="reverseMobile paddingY6" autoMinHeight={false}>
                <Section>
                    <div className="product">
                        <h2 className="productHeader">New Car Market Forecast</h2>
                        <p className="productCopy">Predicting the number of new vehicle sales by calendar month. Contains all vehicles for the Australian market.</p>

                        <div className="checkCopy paddingY4">
                            <FeatureItem>
                                <div className="iconWrapper">
                                    <FontAwesomeIcon icon={faCar} />
                                </div>
                                <div className="itemCopy">
                                    <p>Break down by Make and Model</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <div className="iconWrapper">
                                    <FontAwesomeIcon icon={faGasPump} />
                                </div>
                                <div className="itemCopy">
                                    <p>Break down by Fuel Type (Petrol, Diesel & Electric)</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <div className="iconWrapper">
                                    <FontAwesomeIcon icon={faBolt} />
                                </div>
                                <div className="itemCopy">
                                    <p>Detailed predictions for Hybrids, Plug-In Hybrid Electric Vehicles (PHEV) and Full Electric Vehicles (EV)</p>
                                </div>
                            </FeatureItem>
                            <FeatureItem>
                                <div className="iconWrapper">
                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                </div>
                                <div className="itemCopy">
                                    <p>Predictions go out 10 years</p>
                                </div>
                            </FeatureItem>
                        </div>

                        <Button to="https://blueflag.com.au/contact/?contact_sales_product=Vehicle%20Market%20Forecast" type="new-outline" color="primary">
                            Learn More <FontAwesomeIcon icon={faArrowRight} />
                        </Button>
                    </div>
                </Section>

                <Section className="forecastingImage">
                    <MarketForecast />
                </Section>
            </Container>
        </>
    );
}
