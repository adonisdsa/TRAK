import '../realcarpricing.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
import Button from 'components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import RealCarPricingHeroImage from 'assets/images/realcarpricing.svg';

export default function RealCarPricingHero() {
    return (
        <>
            <Container theme="light-blue" className="VINheroContainer paddingY5" autoMinHeight={true}>
                <Section className="heroSection">
                    {/* <p className="hero vinDecoder">Car Sales Statistics</p> */}
                    <h1 className="gradient-header">Real Car Pricing</h1>
                    <p>Find out what consumers pay for new and used cars in Australia.</p>

                    <a href="https://blueflag.com.au/contact/?contact_sales_product=Real%Car%20Pricing">
                        <Button className="vinDecoderHeroGetStartedSignUp" type="fill" color="primary">
                            Talk to an expert <FontAwesomeIcon icon={faArrowRight} />
                        </Button>
                    </a>
                </Section>
                <Section className="realCarPricingHero">
                    <RealCarPricingHeroImage />
                </Section>
            </Container>
        </>
    );
}
