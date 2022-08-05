import './contact.scss';
import 'components/view/Hubspot.scss';
import React from 'react';
import HubspotForm from 'react-hubspot-form';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

import toyotaIcon from 'assets/images/toyotaBlack.png';
import hyundaiIcon from 'assets/images/hyundaiBlack.png';
import lexusIcon from 'assets/images/lexusBlack.png';
import mitsubishiIcon from 'assets/images/mitsuBlack.png';
import avidaIcon from 'assets/images/avidaBlack.png';
import genesisIcon from 'assets/images/genesisBlack.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loader = (
    <div className="loader">
        <FontAwesomeIcon icon={['fad', 'spinner-third']} spin />
    </div>
);

const Contact = () => {
    return (
        <Container className="Contact paddingY5">
            <Section className="paddingX4">
                <h1>Contact Sales</h1>
                <h2 className="contact-description">Tell us how we can help and we’ll get in touch shortly.</h2>

                <HubspotForm portalId="20814455" formId="56b03f05-8b9e-492e-ba34-182546e32cbd" loading={Loader} />
            </Section>

            <Section className="paddingX4">
                <p className="Contact-clients-text paddingY5">Want to get in touch? We'd love to hear from you.</p>

                <div className="contact-grid">
                    <div className="cell">
                        <img src={toyotaIcon} alt="Toyota logo" />
                    </div>
                    <div className="cell">
                        <img src={hyundaiIcon} alt="Hyundai logo" />
                    </div>
                    <div className="cell">
                        <img src={lexusIcon} alt="Lexus logo" />
                    </div>

                    <div className="cell">
                        <img src={mitsubishiIcon} alt="Mitsubishi logo" />
                    </div>
                    <div className="cell">
                        <img src={avidaIcon} alt="Avida logo" />
                    </div>
                    <div className="cell">
                        <img src={genesisIcon} alt="Genesis logo" />
                    </div>
                </div>
            </Section>
        </Container>
    );
};

export default Contact;
