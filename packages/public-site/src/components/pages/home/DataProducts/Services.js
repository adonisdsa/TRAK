import './services.scss';
import React from 'react';
// import { Link } from 'gatsby';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/Button';

import ServiceItem from './ServiceItem';
import { faMagnifyingGlass } from '@fortawesome/pro-solid-svg-icons';
import { faFileLines, faScrewdriverWrench, faBinary, faShieldCheck } from '@fortawesome/pro-solid-svg-icons';
import { faCarCrash } from '@fortawesome/free-solid-svg-icons';

export default function Services() {
    return (
        <Container theme="light-grey" className="paddingY5">
            <Section className="servicesSection paddingXR6">
                <h2 className="sectionHeader">Choose the datasets that suit your project</h2>
                <p>Our API gives you the ability to access the entire Blue Flag vehicle database. We are always adding new datasets to give you a more comprehensive view of a vehicle.</p>

                <div className="vehicleIDCTA paddingY4">
                    <Button className="homeVehicleID" to="/nevdis/" type="quiet" color="primary">
                        Learn More <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </Button>
                </div>
            </Section>

            <Section>
                <div className="services-grid">
                    <div className="services-box-wrapper">
                        <div className="servicesBox">
                            <ServiceItem>
                                <div className="servicesImageWrapper search">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                                <div className="textwrapper">
                                    <h3>Search by Rego or VIN</h3>
                                    <p className="servicesText">Find a vehicle by number plate, VIN or chassis number. We have access to millions.</p>
                                </div>
                            </ServiceItem>
                        </div>
                    </div>

                    <div className="services-box-wrapper">
                        <div className="servicesBox">
                            <ServiceItem>
                                <div className="servicesImageWrapper vin">
                                    <FontAwesomeIcon icon={faBinary} />
                                </div>
                                <div className="textwrapper">
                                    <h3>VIN Decoder</h3>
                                    <p className="servicesText">Access to make, model, year and other related attributes using our powerful Vehicle identification API.</p>
                                </div>
                            </ServiceItem>
                        </div>
                    </div>

                    <div className="services-box-wrapper">
                        <div className="servicesBox">
                            <ServiceItem>
                                <div className="servicesImageWrapper rego">
                                    <FontAwesomeIcon icon={faFileLines} />
                                </div>
                                <div className="textwrapper">
                                    <h3>Registration Status</h3>
                                    <p className="servicesText">Check the current status (registered, suspended or unregistered) of a vehicle's registration and its expiry date.</p>
                                </div>
                            </ServiceItem>
                        </div>
                    </div>

                    <div className="services-box-wrapper">
                        <div className="servicesBox">
                            <ServiceItem>
                                <div className="servicesImageWrapper wovr">
                                    <FontAwesomeIcon icon={faCarCrash} />
                                </div>
                                <div className="textwrapper">
                                    <h3>Written-Off Check (WOVR)</h3>
                                    <p className="servicesText">Check if a vehicle has been written off, the reason (collision, storm, flood etc.) and whether it's repairable.</p>
                                </div>
                            </ServiceItem>
                        </div>
                    </div>

                    <div className="services-box-wrapper">
                        <div className="servicesBox">
                            <ServiceItem>
                                <div className="servicesImageWrapper stolen">
                                    <FontAwesomeIcon icon={faShieldCheck} />
                                </div>
                                <div className="textwrapper">
                                    <h3>Stolen Check</h3>
                                    <p className="servicesText">Check if a vehicle or plate has been stolen. Get the reported date, police jurisdiction and stolen reference number.</p>
                                </div>
                            </ServiceItem>
                        </div>
                    </div>

                    <div className="services-box-wrapper">
                        <div className="servicesBox">
                            <ServiceItem>
                                <div className="servicesImageWrapper compliance">
                                    <FontAwesomeIcon icon={faScrewdriverWrench} />
                                </div>
                                <div className="textwrapper">
                                    <h3>Build and Compliance</h3>
                                    <p className="servicesText">Get a vehicles year of manufacture and compliance date of when it was fitted to the vehicle by the importer or manufacturer.</p>
                                </div>
                            </ServiceItem>
                        </div>
                    </div>
                </div>
            </Section>
        </Container>
    );
}
