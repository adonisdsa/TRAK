import './NewUsers.scss';
import 'components/view/Hubspot.scss';
import React from 'react';
import HubspotForm from 'react-hubspot-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
import Button from 'components/Button';

const Loader = <div>Loading...</div>;

export default function NewUsers() {
    return (
        <>
            <Container className="NewUsers paddingY5">
                <Section type="full">
                    <h1>Welcome to the Blue Flag Portal</h1>

                    <p className="description paddingY3">From here you can download the excel file for your subscribed products</p>

                    <p className="paddingY3">Whenever we update our data, we will send you an email so that you can stay up-to-date.</p>

                    <div className="gridWrapper paddingY3 paddingX6">
                        <div className="gridHeader span">Product Update Frequency</div>
                        <div className="rowHeader">Future Market Activity Database (FMAD)</div>
                        <div className="rowText">Weekly</div>
                        <div className="rowHeader">FMAD Sales Forecast (TIV)</div>
                        <div className="rowText">Monthly</div>
                        <div className="rowHeader">Retail Offer Planner (ROP)</div>
                        <div className="rowText">Weekly</div>
                        <div className="rowHeader">Transactional Pricing (TP)</div>
                        <div className="rowText">Monthly</div>
                        <div className="rowHeader">MAX Report</div>
                        <div className="rowText">Monthly</div>
                        <div className="rowHeader">CMO Report</div>
                        <div className="rowText">Monthly</div>
                    </div>

                    <p className="login-text paddingX4 paddingY5">
                        To download the data, please click the button below and enter the login detail we've sent you. To keep things organised, we have placed each product into its own folder. If you
                        have any questions or need help logging in, please get in touch via the form below. Thanks.
                    </p>

                    <div className="paddingY3">
                        <Button type="fill" to="https://blueflag.sharefile.com/Authentication/Login">
                            View Products <FontAwesomeIcon icon={['fal', 'chevron-right']} />
                        </Button>
                    </div>
                </Section>
            </Container>

            <Container className="NewUsers paddingY5" theme="dark">
                <Section type="full">
                    <h3 className="supportBanner paddingY4">Contact Support</h3>
                    <div className="formWrapper paddingY4">
                        <HubspotForm portalId="6080063" formId="778f5be2-6a1e-473f-ad5f-5e5f18141502" loading={Loader} />
                    </div>
                </Section>
            </Container>
        </>
    );
}
