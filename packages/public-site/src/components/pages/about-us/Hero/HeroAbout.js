import './heroAbout.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

export default function AboutHero() {
    return (
        <Container theme="dark" className="AboutUs-hero-container">
            <Section>
                <div>
                    <div className="feature-title">Our Mission</div>

                    <h1>Power the future of automotive services</h1>
                </div>
            </Section>
        </Container>
    );
}
