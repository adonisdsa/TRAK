import './pricing.scss';

import React from 'react';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

export default function pricingTiers() {
    return (
        <Container className="Pricing paddingYT4" theme="light-blue" autoMinHeight={false}>
            <Section type="full">
                <div className="descriptionContainer">
                    <div className="planDescription">
                        <h3>Pay per request pricing, how does it work?</h3>
                        <p className="planDescriptionText paddingX6">
                            Our pay per request pricing depends on the products you choose. We have a fixed price per product, so it’s easy to work out your costs. There are no other monthly
                            commitments, you only pay for what you use.
                        </p>

                        <Link href="https://app.blueflag.com.au/get-started" className="planDescriptionCTA pricingDescriptionGetStartedSignUp">
                            Create your free account to get pricing <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>

                    {/* <div className='descriptionSeperator'></div>

                    <div className='planDescription'>
                        <h3>Pay per request</h3>
                        <p>
                        Our pay per request pricing depends on the products you choose. We have a fixed price per product, so it’s easy to work out your costs. There are no other monthly commitments, you only pay for what you use. 
                        </p>

                        <Link href="https://app.blueflag.com.au/get-started" className="planDescriptionCTA">
                            Talk to Sales <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div> */}
                </div>
            </Section>
        </Container>
    );
}
