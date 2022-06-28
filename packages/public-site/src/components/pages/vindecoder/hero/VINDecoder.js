import '../VINDecoder.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
import Button from 'components/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import DecoderHero from 'assets/images/vindecoderhero.svg';

export default function VINDecoderHero() {
    return (
        <>
            <Container theme="dark-secondary" className="VINheroContainer paddingY6" autoMinHeight={false}>
                <Section className="heroSection">
                    <h1 className="hero vinDecoder">VIN Decoder API</h1>
                    <h2>Unlock data on millions of VINs</h2>
                    <p>Access to make, model, year and other related attributes using our powerful Vehicle identification API.</p>

                    <a href="https://app.blueflag.com.au/get-started">
                        <Button className="vinDecoderHeroGetStartedSignUp" type="fill" color="primary">
                            Get Started <FontAwesomeIcon icon={faArrowRight} />
                        </Button>
                    </a>
                </Section>
                <Section className="decoderHero">
                    <DecoderHero />
                </Section>
            </Container>
        </>
    );
}
