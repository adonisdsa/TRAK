import '../VINDecoder.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

import VinToData from 'assets/images/vintodata.svg';
import DecoderItem from 'components/pages/vindecoder/trustedData/vehicleItem';

import Button from 'components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function VINDecoderData() {
    return (
        <>
            <Container theme="light" className="paddingY5" autoMinHeight={false}>
                <Section className="dataImage">
                    <VinToData />
                </Section>
                <Section className="vinVehicle">
                    <p className="trustData header">Data</p>
                    <h2>VIN to Vehicle Details in Seconds</h2>

                    <DecoderItem>
                        <div className="copyVIN">
                            <h3>High Quality Data</h3>
                            <p>Our team of automotive experts review, cleanse and map all data. This ensures you always get accurate and consistent information.</p>
                        </div>
                    </DecoderItem>
                    <DecoderItem>
                        <div className="copyVIN">
                            <h3>Various Industry Sources</h3>
                            <p>We collect and cross-reference many data sources. This means that you always have access to the information you need.</p>
                        </div>
                    </DecoderItem>
                    <DecoderItem>
                        <div className="copyVIN">
                            <h3>Always Up To Date</h3>
                            <p>New content is added and updated all the time.</p>
                        </div>
                    </DecoderItem>
                    <div className="paddingY3">
                        <Button className="vinDecoderDataGetStartedSignUp" to="https://app.blueflag.com.au/get-started" type="fill" color="primary">
                            Get Vehicle Details Now <FontAwesomeIcon icon={faArrowRight} />
                        </Button>
                    </div>
                </Section>
            </Container>
        </>
    );
}
