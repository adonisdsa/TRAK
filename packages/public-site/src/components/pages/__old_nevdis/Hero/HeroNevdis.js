import './HeroNevdis.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

export default function NevdisHero() {
    return (
        <Container theme="dark">
            <Section>
                <div className="heroWrapper">
                    <h1 className="header-nevdis">
                        <strong>NEVDIS Rego Plate to VIN</strong>
                    </h1>
                    <h3 className="sub-header-nevdis">Enter REGO or VIN for a Vehicle Check</h3>
                    <div className="buttonWrapper">
                        <a className="button-cta fill-dark" href="/nevdis/try-nevdis-rego-to-vin/">
                            Check My Vehicle <FontAwesomeIcon icon={['fal', 'chevron-right']} />
                        </a>
                    </div>
                    <p className="text-nevdis">NEVDIS is a service provided to businesses and requires a company email upon submitting a vehicle check.</p>
                </div>
            </Section>
        </Container>
    );
}
