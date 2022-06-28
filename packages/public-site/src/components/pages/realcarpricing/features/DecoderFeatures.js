import '../realcarpricing.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

import DecoderItem from 'components/pages/vindecoder/features/decoderItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function RealCarPricingFeatures() {
    return (
        <>
            <Container className="Pricing paddingY5" theme="light-grey">
                <div className="customersHeader">
                    <p className="understandCustomer header">Features</p>
                    <h2>Car prices in Australia are going up!</h2>
                    <p className="text paddingX6">
                        Chip shortages, supply chain issues and low stock. Three factors causing Australian's to pay higher car prices. Everything is moving fast, making{' '}
                        <b>prices seem unpredictable</b>. Our Real Car Pricing sheds light on what consumers pay.
                    </p>
                    <a href="https://blueflag.com.au/contact/?contact_sales_product=Real%Car%20Pricing" className="vinDecoderFeaturesGetStartedSignUp secondaryCTA">
                        Learn More <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>

                <Section className="paddingYB5 rcpFeatureItems">
                    <DecoderItem>
                        {/* <div className="iconCircle">
                            <FontAwesomeIcon icon={faDatabase} />
                        </div> */}
                        <div className="copyRCP">
                            <h3>Analytics and Reporting</h3>
                            <p>Analyse trends and find opportunities in the market. Real Car Pricing is perfect for car dealers and OEMs. Know where your product sits compared to the competition.</p>
                            <a href="https://blueflag.com.au/contact/?contact_sales_product=Real%Car%20Pricing" className="RealCarPricingFeaturesContact secondaryCTA">
                                Learn More <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                        </div>
                    </DecoderItem>
                    <DecoderItem>
                        {/* <div className="iconCircle">
                            <FontAwesomeIcon icon={faDatabase} />
                        </div> */}
                        <div className="copyRCP">
                            <h3>Data Enrichment</h3>
                            <p>
                                Real Car Pricing can increase the depth of your dataset by adding in the true vehicle value. Fleet managers, insurers and financiers can understand their exposure and
                                assess risk.
                            </p>
                            <a href="https://blueflag.com.au/contact/?contact_sales_product=Real%Car%20Pricing" className="RealCarPricingFeaturesContact secondaryCTA">
                                Learn More <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                        </div>
                    </DecoderItem>
                </Section>
            </Container>
        </>
    );
}
