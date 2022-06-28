import React from 'react';
import HubspotFormTry from 'react-hubspot-form';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

export default function TryNevdis() {
    return (
        <Container className="paddingY5">
            <Section>
                <HubspotFormTry portalId="6080063" formId="465b96e6-98fb-4778-91f1-065db1ca0b2b" />
            </Section>
        </Container>
    );
}
