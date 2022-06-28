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
            <Section className="hero-evcontact">
                <div className="paddingY3">
                    <h1 className="paddingY3 gradient-header reportHeader">Tell Us More</h1>
                    {/* <h3 className="productSubHeader report">November 2021</h3> */}
                </div>
            </Section>
            <Section className="paddingY5 paddingX5 reportSection">
                <HubspotForm portalId="19517217" formId="dddada3a-3987-480c-b8bb-92e0bd1337a0" loading={Loader} />
            </Section>
        </Container>
    );
};

export default Introduction;
