import './contactcarsales.scss';
import 'components/view/Hubspot.scss';
import React from 'react';
import HubspotForm from 'react-hubspot-form';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ContactImage from 'assets/images/contactUs.svg';

// import { trackEvent } from 'utils/googleAnalytics'

const Loader = (
    <div className="loader">
        <FontAwesomeIcon icon={['fad', 'spinner-third']} spin />
    </div>
);

const ContactUs = () => {
    return (
        <Container theme="light-blue" className="ContactCarSales reverseMobile paddingY5">
            <Section className="paddingX4">
                <h1>Talk to an expert</h1>
                <h2 className="contact-description">Tell us how we can help and we’ll get in touch shortly.</h2>

                <HubspotForm portalId="19517217" formId="634167dc-4a1f-4622-9b53-8ac7d94e0b33" loading={Loader} />
            </Section>

            <Section>
                <ContactImage className="ContactImage" />
            </Section>
        </Container>
    );
};

export default ContactUs;
