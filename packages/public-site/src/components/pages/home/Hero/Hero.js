import './hero.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
import Button from 'components/Button';

import HeroImage from 'assets/images/dashboard.png';

export default function HomeHero() {
    return (
        <Container theme="light-blue" className="heroFlex paddingY5">
            <Section className="hero-form">
                <div className=" paddingY3">
                    <h1 className="paddingY3 gradient-header mainHeader">The Automotive industry’s favourite Learning Management System.</h1>
                    <p>Measurably faster at onboarding and upskilling your teams.</p>

                    <div className="cta-group paddingY5">
                        <Button type="new-fill" className="homeHeroGetStartedSignUp home" color="primary-dark" to="/contact-us/" href="/contact-us/">
                            Try it now
                        </Button>
                        <span style={{ paddingLeft: 10 }}>
                            <Button type="quiet" color="primary-dark" to="/contact-us/">
                                Get in touch
                            </Button>
                        </span>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="heroimageWrapper">
                    <img src={HeroImage} alt="HeroImage" />
                </div>
            </Section>
        </Container>
    );
}
