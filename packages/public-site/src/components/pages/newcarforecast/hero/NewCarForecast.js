import '../newcarforecast.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
import Button from 'components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import HeroForecast from 'assets/images/hero-forecast.svg';

export default function VINDecoderHero() {
    return (
        <>
            <Container theme="light" className="heroContainer paddingY5" autoMinHeight={false}>
                <Section className="heroSection">
                    <h1 className="productSubHeader">New Car Sales Forecast</h1>
                    <h2 className="forecastHeader">Insight into the future of car sales in Australia</h2>
                    <p className="paddingX6">From detailed product analysis to in-depth industry consultation, we package knowledge succinctly into our powerful Vehicle identification API.</p>

                    <a href="https://blueflag.com.au/contact/?contact_sales_product=Hero">
                        <Button type="new-outline" color="primary">
                            Get Started <FontAwesomeIcon icon={faArrowRight} />
                        </Button>
                    </a>
                    <div className="forecastContainer">
                        <HeroForecast className="forecastImage" />
                    </div>
                </Section>
            </Container>
        </>
    );
}
