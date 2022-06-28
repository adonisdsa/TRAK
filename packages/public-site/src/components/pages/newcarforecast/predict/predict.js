import '../newcarforecast.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

import DecoderItem from 'components/pages/vindecoder/features/decoderItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt, faCars, faSyncAlt } from '@fortawesome/pro-duotone-svg-icons';

export default function NewCarSalesPredict() {
    return (
        <>
            <Container className="Pricing paddingY3" theme="light-grey">
                <div className="customersHeader">
                    <p className="understandCustomer header">Methodology</p>
                    <h2>How we do it?</h2>
                    <p className="text paddingX6">With our initimate knowledge of products leaving and joining the market, we know where sales results come from.</p>
                    <a href="https://app.blueflag.com.au/get-started" className="secondaryCTA">
                        Explore Now <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>
                <Section className="paddingY5 featureItems">
                    <DecoderItem>
                        <div className="iconCircle">
                            <FontAwesomeIcon icon={faCars} />
                        </div>
                        <div className="copy">
                            <h3>What goes into the Methodology that we're happy to talk about, is it analysing media spend</h3>
                            <p>Break down by Segment / Make / Model / Fuel Type</p>
                        </div>
                    </DecoderItem>
                    <DecoderItem>
                        <div className="iconCircle">
                            <FontAwesomeIcon icon={faFileAlt} />
                        </div>
                        <div className="copy">
                            <h3>dfsdfd</h3>
                            <p>Know the players, learn the trajectory and plan for the future for this growing market segment</p>
                        </div>
                    </DecoderItem>
                    <DecoderItem>
                        <div className="iconCircle">
                            <FontAwesomeIcon icon={faSyncAlt} />
                        </div>
                        <div className="copy">
                            <h3>Marketing Spend</h3>
                            <p>Plan your Ordering, Sales and Logistics strategy, saving money and time from our 10 year forecast</p>
                        </div>
                    </DecoderItem>
                </Section>

                <Section className="decoderImage"></Section>
            </Container>
        </>
    );
}
