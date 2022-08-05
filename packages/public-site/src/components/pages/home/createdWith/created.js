import './created.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

export default function CreatedWithSection() {
    return (
        <Container theme="light" className="paddingY4" autoMinHeight={false}>
            <Section className="createdHome paddingY4">
                <h2 className="createdHeader productHeader">Created with learners at the centre: This is TRAK, a platform that goes beyond your average training platform.</h2>
                <p className="paddingX5">
                    It’s user-centric, data-driven, intuitive and comes from understanding what is takes to train and retain skilled staff. They represent your brand, so empower them to become the
                    best version of themselves.
                </p>
            </Section>
        </Container>
    );
}
