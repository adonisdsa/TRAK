import './vehicleIdentification.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
import Button from 'components/Button';

import VehicleID from 'assets/images/VehicleIdentification.svg';

export default function VehicleIdentification() {
    return (
        <Container theme="light-grey" className="vehicleIDFlex paddingY4">
            <Section>
                <h2 className="sectionHeader">Find the right car. Every time.</h2>
                <p>Send us a car's number plate and we'll return its details. Our API offers many data products so you can choose exactly what you need.</p>

                <div className="vehicleIDCTA paddingY4">
                    <Button className="homeVehicleID GetStartedSignUp" to="https://app.blueflag.com.au/get-started" type="new-fill" color="primary">
                        Try it now <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </Button>
                    <Button className="homeVehicleIDDocs" to="/vin-decoder/" type="quiet" color="primary">
                        Learn More <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </Button>
                </div>
            </Section>

            <Section className="paddingY5">
                <div className="VehicleIDImage">
                    <VehicleID />
                </div>
                <div className="homeVehicleIDMore">
                    <Button to="/vin-decoder#database-fields" type="quiet" color="primary">
                        See all fields <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </Button>
                </div>
            </Section>
        </Container>
    );
}
