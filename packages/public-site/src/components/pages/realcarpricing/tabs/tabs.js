import '../realcarpricing.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

export default function VINDecoderData() {
    return (
        <>
            <Container theme="dark" autoMinHeight={false}>
                <Section className="tabBar">
                    <div className="tab title">Real Car Pricing</div>

                    <a href="/real-car-pricing/">
                        <div className="tab active">Overview</div>
                    </a>

                    <a href="/pricing/">
                        <div className="tab noactive">Pricing</div>
                    </a>

                    <a href="/real-car-pricing/faq/">
                        <div className="tab noactive">FAQs</div>
                    </a>
                </Section>
            </Container>
        </>
    );
}
