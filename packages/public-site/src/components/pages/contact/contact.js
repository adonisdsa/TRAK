import './contact.scss';
import 'components/view/Hubspot.scss';
import React from 'react';
import HubspotForm from 'react-hubspot-form';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

import CarNextDoorIcon from 'assets/images/CarNextDoor.png';
import DingoIcon from 'assets/images/Dingo.png';
import FamousIcon from 'assets/images/Famous.png';
import HSYIcon from 'assets/images/HSY.png';
import PicklesIcon from 'assets/images/Pickles.png';
import TruckAssistIcon from 'assets/images/TruckAssist.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { trackEvent } from 'utils/googleAnalytics'

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

                <HubspotForm portalId="19517217" formId="19f834d4-1456-4242-9af8-0a863e0f6402" loading={Loader} />
            </Section>

            <Section className="paddingX4">
                <p className="Contact-clients-text paddingY5">Join the other innovators that are already building with Blue Flag.</p>

                <div className="contact-grid">
                    <div className="cell">
                        <img src={CarNextDoorIcon} alt="Flipacar logo" />
                    </div>
                    <div className="cell">
                        <img src={DingoIcon} alt="Macquarie logo" />
                    </div>
                    <div className="cell">
                        <img src={FamousIcon} alt="Hyundai logo" />
                    </div>

                    <div className="cell">
                        <img src={HSYIcon} alt="AutoInfo logo" />
                    </div>
                    <div className="cell">
                        <img src={PicklesIcon} alt="Toyota logo" />
                    </div>
                    <div className="cell">
                        <img src={TruckAssistIcon} alt="Cinix1 logo" />
                    </div>
                </div>
            </Section>
        </Container>
    );
};

export default Contact;
