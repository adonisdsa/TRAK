import '../VINDecoder.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

import DecoderItem from 'components/pages/vindecoder/features/decoderItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt, faCars, faSyncAlt } from '@fortawesome/pro-duotone-svg-icons';

import FindVehicles from 'assets/images/findvehicles.svg';

export default function VINDecoderFeatures() {
    return (
        <>
            <Container className="Pricing paddingY5" theme="light-grey">
                <div className="customersHeader">
                    <p className="understandCustomer header">Features</p>
                    <h2>Instantly find vehicles</h2>
                    <p className="text paddingX6">
                        Connecting to our vehicle database gives you the power to find the correct vehicle. Don't waste time double-checking and verifying details with your customers.
                    </p>
                    <a href="https://app.blueflag.com.au/get-started" className="vinDecoderFeaturesGetStartedSignUp secondaryCTA">
                        Find Vehicles Now <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>

                <Section className="paddingY5 featureItems">
                    <DecoderItem>
                        <div className="iconCircle">
                            <FontAwesomeIcon icon={faCars} />
                        </div>
                        <div className="copy">
                            <h3>Vehicle Search</h3>
                            <p>Allow your users to search for their car by VIN or Registration Plate not just by Make and Model. </p>
                        </div>
                    </DecoderItem>
                    <DecoderItem>
                        <div className="iconCircle">
                            <FontAwesomeIcon icon={faFileAlt} />
                        </div>
                        <div className="copy">
                            <h3>Auto-Fill Forms</h3>
                            <p>Make life easier for your customers. Send us their VIN or Registration Plate and we'll pre-fill the form for you.</p>
                        </div>
                    </DecoderItem>
                    <DecoderItem>
                        <div className="iconCircle">
                            <FontAwesomeIcon icon={faSyncAlt} />
                        </div>
                        <div className="copy">
                            <h3>Data Enrichment</h3>
                            <p>Ensure your database is correct and up to date. Reduce your risk when making decisions for purchasing, quoting and valuation.</p>
                        </div>
                    </DecoderItem>
                </Section>

                <Section className="decoderImage">
                    <FindVehicles />
                </Section>
            </Container>
        </>
    );
}
