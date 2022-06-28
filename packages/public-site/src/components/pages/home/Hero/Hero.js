import './hero.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
import Button from 'components/Button';

import HeroImage from 'assets/images/hero-section-new.svg';

export default function HomeHero() {
    return (
        <Container theme="light-blue" className="heroFlex paddingY5">
            <Section className="hero-form">
                <div className=" paddingY3">
                    <h1 className="paddingY3 gradient-header">Access to vehicle data, made simple</h1>
                    <p>Get access to data for millions of Australian cars, motorbikes and trucks. Start building with Blue Flag's API today.</p>

                    <div className="cta-group paddingY5">
                        <Button
                            type="new-fill"
                            className="homeHeroGetStartedSignUp home"
                            color="primary-dark"
                            to="https://app.blueflag.com.au/get-started"
                            href="https://app.blueflag.com.au/get-started"
                        >
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

            <Section>
                <div className="heroimageWrapper">
                    <HeroImage />
                </div>
            </Section>
        </Container>
    );
}
