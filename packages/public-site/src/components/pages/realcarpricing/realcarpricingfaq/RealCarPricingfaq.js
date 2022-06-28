import '../realcarpricing.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

export default function RealCarPricingHero() {
    return (
        <>
            <Container theme="light-blue" className="VINheroContainer paddingY5" autoMinHeight={false}>
                <Section className="heroSection rcpFAQ">
                    {/* <p className="hero vinDecoder">Car Sales Statistics</p> */}
                    <h1 className="gradient-header rcpHeader">Real Car Pricing FAQs</h1>
                </Section>
            </Container>
        </>
    );
}
