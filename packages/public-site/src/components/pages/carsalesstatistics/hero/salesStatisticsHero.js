import '../CarSalesStatistics.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
import Button from 'components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import HeroImage from 'assets/images/CarSalesStatisticsHeroImage.svg';

export default function CarSalesStatistics() {
    return (
        <>
            <Container theme="light-blue" className="heroContainer paddingY5" autoMinHeight={false}>
                <Section className="heroSection">
                    <h1 className="carSalesStatistics">Car Sales Statistics</h1>
                    <h2 className="statsHeader paddingX6">A collection of data sets for analysing, planning and making predictions</h2>
                    {/* <p>A convincing reason why this data is invaluable to your business</p> */}

                    <a href="https://blueflag.com.au/contact/?contact_sales_product=Hero">
                        <Button type="new-outline" color="primary">
                            Get Started <FontAwesomeIcon icon={faArrowRight} />
                        </Button>
                    </a>
                    <HeroImage className="heroImage" />
                </Section>
            </Container>
        </>
    );
}
