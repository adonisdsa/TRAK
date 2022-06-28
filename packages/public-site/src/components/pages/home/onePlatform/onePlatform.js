import './onePlatform.scss';
import PlatformItem from './PlatformItem';

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
import Button from 'components/Button';

import APIImage from 'assets/images/APIImage.svg';
import DataImage from 'assets/images/DataImage.svg';
import ResearchImage from 'assets/images/ResearchImage.svg';
import TrainingImage from 'assets/images/TrainingImage.svg';

export default function onePlatform() {
    return (
        <Container className="platformColumns paddingYB5" theme="light-grey">
            <Section type="full">
                <div>
                    <h1 className="section-header pricingTitle">One platform, endless potential.</h1>
                    <p className="platformHeaderText">We are the gold standard all-in-one platform for vehicle data intelligence.</p>
                </div>

                <div className="platformProducts paddingY5">
                    <div className="platformAPI">
                        <a href="/vin-decoder/" alt="api">
                            <PlatformItem>
                                <div className="platformImageWrapper wrapperAPI">
                                    <APIImage />
                                </div>
                                <div className="subheaderWrapper">
                                    <h2 className="platformHeader">API</h2>
                                </div>
                                <p className="paddingY2 platformText">Get access to data for millions of Australian cars, motorbikes and trucks. Start building with Blue Flag’s API today.</p>

                                <div>
                                    <Button className="homeEmpowerGetStartedSignUp" to="https://app.blueflag.com.au/get-started" type="quiet" color="primary">
                                        Explore API <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                                    </Button>
                                </div>
                            </PlatformItem>
                        </a>
                    </div>

                    <div className="platformAPI">
                        <a href="/car-sales-statistics/" alt="car sales statistics">
                            <PlatformItem>
                                <div className="platformImageWrapper wrapperData">
                                    <DataImage />
                                </div>
                                <div className="subheaderWrapper">
                                    <h2 className="platformHeader">Data</h2>
                                </div>
                                <p className="paddingY2 platformText">We connect the dots, linking and enriching datasets to provide the answers you want.</p>

                                <div>
                                    <Button className="homeEmpowerGetStartedSignUp" to="https://app.blueflag.com.au/get-started" type="quiet" color="primary">
                                        Explore Data <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                                    </Button>
                                </div>
                            </PlatformItem>
                        </a>
                    </div>

                    <div className="platformAPI">
                        <a href="/car-sales-statistics/" alt="research and reporting">
                            <PlatformItem>
                                <div className="platformImageWrapper wrapperResearch">
                                    <ResearchImage />
                                </div>
                                <div className="subheaderWrapper">
                                    <h2 className="platformHeader">Research & Reporting</h2>
                                </div>
                                <p className="paddingY2 platformText">Predict values, analyse sales, benchmark competitors and enrich data. Then make your next move feeling confident.</p>

                                <div>
                                    <Button className="homeEmpowerGetStartedSignUp" to="https://app.blueflag.com.au/get-started" type="quiet" color="primary">
                                        Explore Research & Reporting <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                                    </Button>
                                </div>
                            </PlatformItem>
                        </a>
                    </div>

                    <div className="platformAPI">
                        <a href="https://traklms.com/" alt="training">
                            <PlatformItem>
                                <div className="platformImageWrapper wrapperTraining">
                                    <TrainingImage />
                                </div>
                                <div className="subheaderWrapper">
                                    <h2 className="platformHeader">Training</h2>
                                </div>
                                <p className="paddingY2 platformText">Access to eLearning modules including training videos, product guides, technical modules and much more.</p>

                                <div>
                                    <Button className="homeEmpowerGetStartedSignUp" to="https://app.blueflag.com.au/get-started" type="quiet" color="primary">
                                        Explore Training <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                                    </Button>
                                </div>
                            </PlatformItem>
                        </a>
                    </div>
                </div>
            </Section>
        </Container>
    );
}
