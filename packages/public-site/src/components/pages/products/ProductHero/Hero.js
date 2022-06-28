import './hero.scss';
import React from 'react';
// import { Link } from 'gatsby'
// import HubspotFormHome from 'react-hubspot-form'

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
import Button from 'components/Button';

export default function ProductsHero() {
    return (
        <Container theme="light-blue" className="ProductHeroFlex paddingY3" autoMinHeight={false}>
            <Section type="full" className="productHeroForm">
                <div className="paddingY3">
                    <h1 className="paddingY3 gradient-header">Access to vehicle data, made simple</h1>
                    <p>Get access to data for millions of Australian cars, motorbikes and trucks. Start building with Blue Flag's API today.</p>

                    <div className="cta-group paddingY5">
                        <Button type="new-fill" className="homeHeroGetStartedSignUp" color="primary-dark" to="https://app.blueflag.com.au/get-started" href="https://app.blueflag.com.au/get-started">
                            Start now
                        </Button>
                        <span style={{ paddingLeft: 10 }}>
                            <Button type="quiet" color="primary-dark" to="/contact-us/">
                                Contact sales
                            </Button>
                        </span>
                    </div>
                </div>
            </Section>
        </Container>
    );
}
