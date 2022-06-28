import './heromeeting.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable } from '@fortawesome/pro-light-svg-icons';
import { faFileAlt } from '@fortawesome/pro-light-svg-icons';
import { faBullseyeArrow } from '@fortawesome/pro-regular-svg-icons';
import { faUsdCircle } from '@fortawesome/pro-regular-svg-icons';
import { faCode } from '@fortawesome/pro-regular-svg-icons';

import kiaIcon from 'assets/images/kia.png';
import hyundaiIcon from 'assets/images/Hyundai.png';
import subaruIcon from 'assets/images/subaru.png';
import fordIcon from 'assets/images/ford.png';
import nissanIcon from 'assets/images/nissan.png';
import bmwIcon from 'assets/images/bmw.png';

import { InlineWidget } from 'react-calendly';

const Introduction = () => {
    return (
        <Container theme="dark" autoMinHeight={false} className="heroFlex paddingY4">
            <Section className="paddingY4 regoSection">
                <img src="/assets/logos/blueflag-logo.svg" alt="Blue Flag logo" width="156px" height="31px" />
                <h1 className="paddingYB4 meetingHeader">What we'll cover in the demo</h1>

                <div className="paddingY4 ticksWrapper">
                    <div className="demoCover">
                        <FontAwesomeIcon icon={faBullseyeArrow} />
                        <div className="demoInner">
                            <p className="paddingY2 coverHeader">Discuss Your Objectives</p>
                            <p className="coverText">What problems you’re trying to solve and how the API can help</p>
                        </div>
                    </div>
                    <div className="demoCover">
                        <FontAwesomeIcon icon={faTable} />
                        <div className="demoInner">
                            <p className="paddingY2 coverHeader">Data and Fields Available</p>
                            <p className="coverText">We’ll ensure you have a solid understanding of what you can extract from the API</p>
                        </div>
                    </div>
                    <div className="demoCover">
                        <FontAwesomeIcon icon={faFileAlt} />
                        <div className="demoInner">
                            <p className="paddingY2 coverHeader">Austroad’s Rules</p>
                            <p className="coverText">There are some governance rules we will cover in terms of data usage and storage</p>
                        </div>
                    </div>
                    <div className="demoCover">
                        <FontAwesomeIcon icon={faUsdCircle} />
                        <div className="demoInner">
                            <p className="paddingY2 coverHeader">Pricing</p>
                            <p className="coverText">A clear understanding of what each request will cost you</p>
                        </div>
                    </div>
                    <div className="demoCover">
                        <FontAwesomeIcon icon={faCode} />
                        <div className="demoInner">
                            <p className="paddingY2 coverHeader">Integration and Support</p>
                            <p className="coverText">Run through the steps to having live API data on your system</p>
                        </div>
                    </div>
                </div>

                <p className="paddingY2 productSubHeader meeting">Trusted and loved by global brands</p>
                <div className="workwith-grid paddingY3">
                    <div className="cell">
                        <img src={hyundaiIcon} alt="Hyundai logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={fordIcon} alt="Ford logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={kiaIcon} alt="Kia logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={subaruIcon} alt="Subaru logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={nissanIcon} alt="Nissan logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={bmwIcon} alt="BMW logo" width="100%" height="100%" />
                    </div>
                </div>
            </Section>

            <Section className="paddingY5 paddingX5 meetingSection">
                <div className="meetingWrapper">
                    <h2 className="meetingSubHeader">Schedule my demo</h2>
                    <p className="meetingText">
                        We will thank you for your time with
                        <br />
                        <span className="creditBold">$100 of credit</span>
                    </p>

                    <InlineWidget
                        url="https://calendly.com/blueflag/blue-flag-introduction"
                        pageSettings={{
                            backgroundColor: 'fff',
                            hideEventTypeDetails: true,
                            hideLandingPageDetails: true,
                            primaryColor: '00beff',
                            textColor: '000',
                        }}
                        style={{
                            height: '1300px',
                        }}
                    />
                </div>

                {/* <p className="meetingSteps">
                    1. Select a day and time below<br/>
                    2. Fill out your details<br/>
                    3. Click schedule event and we'll talk soon!
                </p> */}
            </Section>
        </Container>
    );
};

export default Introduction;
