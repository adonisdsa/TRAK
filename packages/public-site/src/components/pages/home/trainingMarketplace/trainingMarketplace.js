import './trainingMarketplace.scss';
import MarketplaceItem from './trainingMarketplaceItem';

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
import Button from 'components/Button';

import APIImage from 'assets/images/APIImage.svg';
import DataImage from 'assets/images/DataImage.svg';
import ResearchImage from 'assets/images/ResearchImage.svg';
import TrainingImage from 'assets/images/TrainingImage.svg';

export default function trainingMarketplace() {
    return (
        <Container className="marketplaceColumns paddingYB5" theme="light-grey">
            <Section type="full">
                <div>
                    <h1 className="section-header pricingTitle">Training Marketplace</h1>
                    <p className="marketplaceHeaderText">
                        Give your staff more opportunities to learn and develop, not only focus on product and technical info but also on professional and personal development. You can’t expect your
                        learners to reach their full potential without given them the right set of tools and information on the marketplace. With TRAK they will have access to over 100,000
                        Professional Development and Soft Skill courses, to not only develop professionally but also personally.
                    </p>
                </div>

                <div className="marketplaceProducts paddingY5">
                    <div className="marketplaceAPI">
                        <a href="/contact-us/" alt="api">
                            <MarketplaceItem>
                                <div className="marketplaceImageWrapper wrapperAPI">
                                    <APIImage />
                                </div>
                                <div className="subheaderWrapper">
                                    <h2 className="marketplaceHeader">Communication</h2>
                                </div>
                                <p className="paddingY2 marketplaceText">Our effective communication training program provides the skills and tools to upskill you with confidence and conviction.</p>

                                <div>
                                    <Button className="homeEmpowerGetStartedSignUp" to="/contact-us/" type="quiet" color="primary">
                                        Explore <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                                    </Button>
                                </div>
                            </MarketplaceItem>
                        </a>
                    </div>

                    <div className="marketplaceAPI">
                        <a href="/contact-us/" alt="car sales statistics">
                            <MarketplaceItem>
                                <div className="marketplaceImageWrapper wrapperData">
                                    <DataImage />
                                </div>
                                <div className="subheaderWrapper">
                                    <h2 className="marketplaceHeader">Customer Service</h2>
                                </div>
                                <p className="paddingY2 marketplaceText">
                                    The Customer Service workshop will look at all types of customers and how we can serve them better and improve ourselves in the process.
                                </p>

                                <div>
                                    <Button className="homeEmpowerGetStartedSignUp" to="/contact-us/" type="quiet" color="primary">
                                        Explore <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                                    </Button>
                                </div>
                            </MarketplaceItem>
                        </a>
                    </div>

                    <div className="marketplaceAPI">
                        <a href="/contact-us/" alt="research and reporting">
                            <MarketplaceItem>
                                <div className="marketplaceImageWrapper wrapperResearch">
                                    <ResearchImage />
                                </div>
                                <div className="subheaderWrapper">
                                    <h2 className="marketplaceHeader">Marketing & Advertising</h2>
                                </div>
                                <p className="paddingY2 marketplaceText">
                                    This course will give you the skills required to effectively create, develop, implement and evaluate advertising and marketing activities.
                                </p>

                                <div>
                                    <Button className="homeEmpowerGetStartedSignUp" to="/contact-us/" type="quiet" color="primary">
                                        Explore <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                                    </Button>
                                </div>
                            </MarketplaceItem>
                        </a>
                    </div>

                    <div className="marketplaceAPI">
                        <a href="/contact-us/" alt="training">
                            <MarketplaceItem>
                                <div className="marketplaceImageWrapper wrapperTraining">
                                    <TrainingImage />
                                </div>
                                <div className="subheaderWrapper">
                                    <h2 className="marketplaceHeader">Compliance</h2>
                                </div>
                                <p className="paddingY2 marketplaceText">Access to eLearning modules including training videos, product guides, technical modules and much more.</p>

                                <div>
                                    <Button className="homeEmpowerGetStartedSignUp" to="/contact-us/" type="quiet" color="primary">
                                        Explore <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                                    </Button>
                                </div>
                            </MarketplaceItem>
                        </a>
                    </div>

                    <div className="marketplaceAPI">
                        <a href="/contact-us/" alt="training">
                            <MarketplaceItem>
                                <div className="marketplaceImageWrapper wrapperTraining">
                                    <TrainingImage />
                                </div>
                                <div className="subheaderWrapper">
                                    <h2 className="marketplaceHeader">Leadership Compliance</h2>
                                </div>
                                <p className="paddingY2 marketplaceText">This leadership course is perfect for up and coming Leaders who are starting out on their leadership journey.</p>

                                <div>
                                    <Button className="homeEmpowerGetStartedSignUp" to="/contact-us/" type="quiet" color="primary">
                                        Explore <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                                    </Button>
                                </div>
                            </MarketplaceItem>
                        </a>
                    </div>
                </div>
            </Section>
        </Container>
    );
}
