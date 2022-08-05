import './analytics.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
import Button from 'components/Button';

import Analytics from 'assets/images/Picture3.png';

export default function VehicleIdentification() {
    return (
        <Container theme="light-grey" className="vehicleIDFlex paddingY4">
            <Section>
                <h2 className="sectionHeader">Analytics and Reporting</h2>
                <p>
                    Make data-driven L&D decisions through smart reporting and custom dashboards. Detailed reporting on your learning programs is essential for every team leader to make informed
                    decisions.TRAK provides real-time reporting on how learners are progressing. It displays each team member’s progress through a comprehensive and customizable analytics report.
                </p>

                <div className="vehicleIDCTA paddingY4">
                    <Button className="homeVehicleID GetStartedSignUp" to="/contact-us/" type="new-fill" color="primary">
                        Try it now <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </Button>
                    <Button className="homeVehicleIDDocs" to="/contact-us/" type="quiet" color="primary">
                        Learn More <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </Button>
                </div>
            </Section>

            <Section className="paddingY3">
                <div className="VehicleIDImage">
                    <img src={Analytics} alt="Analytics" />
                </div>
            </Section>
        </Container>
    );
}
