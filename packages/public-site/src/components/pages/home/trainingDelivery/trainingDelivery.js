import './trainingDelivery.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
import Button from 'components/Button';

import SimplifyTraining from 'assets/images/Picture1.png';

export default function TrainingDelivery() {
    return (
        <Container theme="light-grey" className="trainingFlex paddingY4">
            <Section>
                <h2 className="sectionHeader">Simplify your training delivery</h2>
                <p>Onboarding new personnel or upskilling your staff, TRAK is all about creating an intuitive and seamless learning experience.</p>

                <div className="trainingCTA paddingY4">
                    <Button className="homeVehicleID GetStartedSignUp" to="/contact-us/" type="new-fill" color="primary">
                        Try it now <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </Button>
                    <Button className="homeVehicleIDDocs" to="/contact-us/" type="quiet" color="primary">
                        Learn More <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </Button>
                </div>
            </Section>

            <Section className="paddingY3">
                <div className="trainingImage">
                    <img src={SimplifyTraining} alt="Simplify Training" />
                </div>
            </Section>
        </Container>
    );
}
