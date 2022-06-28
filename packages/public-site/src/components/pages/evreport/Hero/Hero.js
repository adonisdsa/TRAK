import './hero.scss';
import React from 'react';
// import { Link } from 'gatsby'
// import HubspotFormHome from 'react-hubspot-form'

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HubspotForm from 'react-hubspot-form';

const Loader = (
    <div className="loader">
        <FontAwesomeIcon icon={['fad', 'spinner-third']} spin />
    </div>
);

const Introduction = () => {
    return (
        <Container theme="light-blue" autoMinHeight={false} className="heroFlex paddingY4 fullHeight">
            <Section className="hero-report">
                <div className="paddingY3">
                    <h1 className="paddingY3 gradient-header reportHeader">Electric Vehicle Market Forecast</h1>
                    <h3 className="productSubHeader report">March 2022</h3>
                </div>
            </Section>
            <Section className="paddingY5 paddingX5 reportSection">
                <h3 className="download paddingYT4">Download the free report</h3>
                <HubspotForm portalId="19517217" formId="aba15b18-0f86-4c41-8a1f-236c8c657ea6" loading={Loader} />
            </Section>
        </Container>
    );
};

export default Introduction;
