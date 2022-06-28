import './contactSales.scss';
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
// import Button from 'components/Button'

export default function ContactSales() {
    return (
        <Container className="ContactSales paddingY5">
            <Section>
                <h1>Thank You!</h1>
                <p className="paddingY3">One of our team members will get in touch with you soon. Please keep an eye on your email inbox.</p>

                {/* <p>In the meantime, you can sign up to test the api for FREE.</p>
                <Button></Button> */}
            </Section>
        </Container>
    );
}
