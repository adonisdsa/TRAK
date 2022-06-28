import './pricing.scss';
import PricingItem from './PricingItem';

import React from 'react';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faArrowRight, faExpandArrowsAlt, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/pro-duotone-svg-icons';
import { faRocket } from '@fortawesome/pro-regular-svg-icons';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

export default function pricingTiers() {
    return (
        <Container className="PricingTiers paddingYB5" theme="light-blue">
            <Section type="full">
                <div>
                    <h1 className="gradient-header pricingTitle">Choose a plan that works for you.</h1>
                </div>

                <div className="pricing-plans paddingY5">
                    <div className="plan starter">
                        <div className="pricing-icon-header light">
                            <FontAwesomeIcon icon={faFlask} /> <h3>Build</h3>
                        </div>

                        <PricingItem>
                            <div className="subheaderWrapper">
                                <h2 className="pricing-header light">Developer Sandbox</h2>
                            </div>
                            <p className="paddingY2 text-area light">Build and test using any of our data fields.</p>
                            <p className="products-title light">Benefits</p>
                            <div className="benefits">
                                <div className="product-item light">
                                    <FontAwesomeIcon icon={faCheckCircle} /> Free test credentials
                                </div>
                                <div className="product-item light">
                                    <FontAwesomeIcon icon={faCheckCircle} /> Unlimited test requests
                                </div>
                                <div className="product-item light">
                                    <FontAwesomeIcon icon={faCheckCircle} /> Get setup in 5 minutes
                                </div>
                            </div>
                        </PricingItem>

                        <Link href="https://app.blueflag.com.au/get-started" className="pricingFreeAccountCTA GetStartedSignUp pricing-button light">
                            Create free Account <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>

                    <div className="plan pay-per">
                        <div className="popular">Recommended for you</div>
                        <div className="pricing-icon-header dark">
                            <FontAwesomeIcon icon={faRocket} /> <h3>Launch</h3>
                        </div>

                        <PricingItem>
                            <div className="subheaderWrapper">
                                <h2 className="pricing-header dark">Pay Per Request</h2>
                            </div>
                            <p className="paddingY2 text-area dark">Only pay for what you use from the API with no other fees, charges or minimum spend commitments.</p>
                            <p className="products-title dark">Benefits</p>
                            <div className="benefits dark">
                                <div className="product-item dark">
                                    <FontAwesomeIcon icon={faCheckCircle} /> Only pay for what you use
                                </div>
                                <div className="product-item dark">
                                    <FontAwesomeIcon icon={faCheckCircle} /> You choose the query fields
                                </div>
                                <div className="product-item dark">
                                    <FontAwesomeIcon icon={faCheckCircle} /> No obligations
                                </div>
                                <div className="product-item dark">
                                    <FontAwesomeIcon icon={faCheckCircle} /> No lock in contracts
                                </div>
                            </div>
                        </PricingItem>

                        <Link href="https://app.blueflag.com.au/get-started" className="pricingGetStartedCTA GetStartedSignUp pricing-button dark">
                            Get Started <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>

                    <div className="plan scale">
                        <div className="pricing-icon-header light">
                            <FontAwesomeIcon icon={faExpandArrowsAlt} /> <h3>Grow</h3>
                        </div>

                        <PricingItem>
                            <div className="subheaderWrapper">
                                <h2 className="pricing-header light lower">Monthly plans</h2>
                            </div>
                            <p className="paddingY2 text-area">Discounts trigger when you commit to regular usage and as your volume grows.</p>
                            <p className="products-title">Benefits</p>
                            <div className="benefits">
                                <div className="product-item">
                                    <FontAwesomeIcon icon={faCheckCircle} /> Discounted pricing
                                </div>
                                <div className="product-item">
                                    <FontAwesomeIcon icon={faCheckCircle} /> Higher request limits per month
                                </div>
                                <div className="product-item">
                                    <FontAwesomeIcon icon={faCheckCircle} /> Technical onboarding guidance
                                </div>
                                <div className="product-item">
                                    <FontAwesomeIcon icon={faCheckCircle} /> Email & Phone support
                                </div>
                            </div>
                        </PricingItem>

                        <Link href="/contact-us/" className="pricingTalkToSalesCTA pricing-button light">
                            Talk to Sales <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>

                    <div className="plan enterprise">
                        <div className="pricing-icon-header light">
                            <FontAwesomeIcon icon={faBuilding} /> <h3>Enterprise</h3>
                        </div>

                        <PricingItem>
                            <div className="subheaderWrapper">
                                <h2 className="pricing-header light lower">Customisable</h2>
                            </div>
                            <p className="paddingY2 text-area">Customised service tailored to your corporate requirement.</p>
                            <p className="products-title">Benefits</p>
                            <div className="benefits">
                                <div className="product-item">
                                    <FontAwesomeIcon icon={faCheckCircle} /> Custom contracts & invoicing
                                </div>
                                <div className="product-item">
                                    <FontAwesomeIcon icon={faCheckCircle} /> Premium support
                                </div>
                                <div className="product-item">
                                    <FontAwesomeIcon icon={faCheckCircle} /> Dedicated account manager
                                </div>
                                <div className="product-item">
                                    <FontAwesomeIcon icon={faCheckCircle} /> Integration assistance
                                </div>
                            </div>
                        </PricingItem>

                        <Link href="/contact-us/" className="pricingTalkToSalesCTA pricing-button light">
                            Talk to Sales <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>
                </div>
            </Section>
        </Container>
    );
}
