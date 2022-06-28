import './contactSalesCarSales.scss';
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
// import Button from 'components/Button'

import ThankYouImage from 'assets/images/thankyouimage.svg';

export default function ContactSales() {
    return (
        <Container theme="light-blue" className="ContactSalesStatistics paddingY6">
            <Section>
                <ThankYouImage className="thankyouimage" />
                <h1 className="thankyouheader">Thank You!</h1>
                <p className="paddingY3">One of our team members will get in touch with you soon. Please keep an eye on your email inbox.</p>
            </Section>
        </Container>
    );
}
