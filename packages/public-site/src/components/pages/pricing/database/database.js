import '../pricing.scss';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
import Button from 'components/Button';

const pricing = [
    {
        nameDouble: 'Pricing',
        sandbox: 'Free',
        grow: <FontAwesomeIcon icon={faCheck} />,
        enterprise: <FontAwesomeIcon icon={faCheck} />,
    },
];

const planDetails = [
    { nameDouble: 'Sign Up', sandbox: 'Free', launch: 'Free', grow: 'Free', enterprise: 'Free' },
    { nameDouble: 'Make test requests', sandbox: <FontAwesomeIcon icon={faCheck} />, launch: '', grow: '', enterprise: '' },
    { nameDouble: 'Make live requests', sandbox: '', launch: <FontAwesomeIcon icon={faCheck} />, grow: <FontAwesomeIcon icon={faCheck} />, enterprise: <FontAwesomeIcon icon={faCheck} /> },
    { nameDouble: 'Maximum number of requests allowed per month', sandbox: '1,000', launch: '5,000', grow: '50,000', enterprise: 'Unlimited' },
    { nameDouble: 'Pay per request', sandbox: '', launch: <FontAwesomeIcon icon={faCheck} />, grow: <FontAwesomeIcon icon={faCheck} />, enterprise: <FontAwesomeIcon icon={faCheck} /> },
    { nameDouble: 'Pay by Credit Card', sandbox: '', launch: <FontAwesomeIcon icon={faCheck} />, grow: <FontAwesomeIcon icon={faCheck} />, enterprise: <FontAwesomeIcon icon={faCheck} /> },
    { nameDouble: 'Pay by Invoice', sandbox: '', launch: '', grow: '', enterprise: <FontAwesomeIcon icon={faCheck} /> },
    {
        nameDouble: 'Manage your own API Keys',
        sandbox: <FontAwesomeIcon icon={faCheck} />,
        launch: <FontAwesomeIcon icon={faCheck} />,
        grow: <FontAwesomeIcon icon={faCheck} />,
        enterprise: <FontAwesomeIcon icon={faCheck} />,
    },
    { nameDouble: 'Number of API Keys', sandbox: '1', launch: '1', grow: '5', enterprise: '10' },
    {
        nameDouble: 'Secure Environment (HTTPS only)',
        sandbox: <FontAwesomeIcon icon={faCheck} />,
        launch: <FontAwesomeIcon icon={faCheck} />,
        grow: <FontAwesomeIcon icon={faCheck} />,
        enterprise: <FontAwesomeIcon icon={faCheck} />,
    },
    { nameDouble: 'Rate Limits', sandbox: '2 requests/sec', launch: '5 requests/sec', grow: '10 requests/sec', enterprise: 'Custom' },
    { nameDouble: 'Minimum monthly spend', sandbox: 'Free', launch: '$0', grow: 'Custom', enterprise: 'Custom' },
];

const APIs = [
    {
        nameDouble: 'Search by Registration Plate and State',
        text: 'NSW, VIC, QLD, WA, SA, TAS, ACT, NT ',
        sandbox: <FontAwesomeIcon icon={faCheck} />,
        launch: <FontAwesomeIcon icon={faCheck} />,
        grow: <FontAwesomeIcon icon={faCheck} />,
        enterprise: <FontAwesomeIcon icon={faCheck} />,
    },
    {
        nameDouble: 'Search by VIN',
        sandbox: <FontAwesomeIcon icon={faCheck} />,
        launch: <FontAwesomeIcon icon={faCheck} />,
        grow: <FontAwesomeIcon icon={faCheck} />,
        enterprise: <FontAwesomeIcon icon={faCheck} />,
    },
    {
        nameDouble: 'Search by Chassis',
        sandbox: <FontAwesomeIcon icon={faCheck} />,
        launch: <FontAwesomeIcon icon={faCheck} />,
        grow: <FontAwesomeIcon icon={faCheck} />,
        enterprise: <FontAwesomeIcon icon={faCheck} />,
    },
];

const DataPack = [
    {
        nameDouble: 'VIN Decoder',
        text: 'vin, make, model, series, variant, build year, model year, body style, doors, seats, fuel type, drive, engine cylinders, engine size litres, transmission type',
        sandbox: <FontAwesomeIcon icon={faCheck} />,
        launch: <FontAwesomeIcon icon={faCheck} />,
        grow: <FontAwesomeIcon icon={faCheck} />,
        enterprise: <FontAwesomeIcon icon={faCheck} />,
    },
    {
        nameDouble: 'Lookup',
        text: 'vin, chassis, registration plate, registration state',
        sandbox: <FontAwesomeIcon icon={faCheck} />,
        launch: <FontAwesomeIcon icon={faCheck} />,
        grow: <FontAwesomeIcon icon={faCheck} />,
        enterprise: <FontAwesomeIcon icon={faCheck} />,
    },
    {
        nameDouble: 'Vehicle Details',
        text: 'vin, chassis, registration plate, registration state, make, model, colour, vehicle type, body type',
        sandbox: <FontAwesomeIcon icon={faCheck} />,
        launch: <FontAwesomeIcon icon={faCheck} />,
        grow: <FontAwesomeIcon icon={faCheck} />,
        enterprise: <FontAwesomeIcon icon={faCheck} />,
    },
    {
        nameDouble: 'Registration Status',
        text: 'vin, chassis, registration plate, registration state, registration status, registration expiry date',
        sandbox: <FontAwesomeIcon icon={faCheck} />,
        launch: <FontAwesomeIcon icon={faCheck} />,
        grow: <FontAwesomeIcon icon={faCheck} />,
        enterprise: <FontAwesomeIcon icon={faCheck} />,
    },
    {
        nameDouble: 'Build and Compliance',
        text: 'vin, chassis, registration plate, registration state, compliance plate, year of manufacture',
        sandbox: <FontAwesomeIcon icon={faCheck} />,
        launch: <FontAwesomeIcon icon={faCheck} />,
        grow: <FontAwesomeIcon icon={faCheck} />,
        enterprise: <FontAwesomeIcon icon={faCheck} />,
    },
    {
        nameDouble: 'Stolen Check',
        text: 'vin, chassis, registration plate, registration state, stolen type, stolen jurisdiction, stolen reported date, stolen summary',
        sandbox: <FontAwesomeIcon icon={faCheck} />,
        launch: <FontAwesomeIcon icon={faCheck} />,
        grow: <FontAwesomeIcon icon={faCheck} />,
        enterprise: <FontAwesomeIcon icon={faCheck} />,
    },
    {
        nameDouble: 'Written Off Check',
        text:
            'vin, chassis, registration plate, registration state, written off damage codes, written off incident code, written off incident reported date, written off jurisdiction, written off type code',
        sandbox: <FontAwesomeIcon icon={faCheck} />,
        launch: <FontAwesomeIcon icon={faCheck} />,
        grow: <FontAwesomeIcon icon={faCheck} />,
        enterprise: <FontAwesomeIcon icon={faCheck} />,
    },
];

const supportSuccess = [
    {
        nameDouble: 'Documentation',
        sandbox: <FontAwesomeIcon icon={faCheck} />,
        launch: <FontAwesomeIcon icon={faCheck} />,
        grow: <FontAwesomeIcon icon={faCheck} />,
        enterprise: <FontAwesomeIcon icon={faCheck} />,
    },
    {
        nameDouble: 'Chat Support',
        sandbox: <FontAwesomeIcon icon={faCheck} />,
        launch: <FontAwesomeIcon icon={faCheck} />,
        grow: '',
        enterprise: '',
    },
    {
        nameDouble: 'Priority Email & Chat Support',
        sandbox: '',
        launch: '',
        grow: <FontAwesomeIcon icon={faCheck} />,
        enterprise: <FontAwesomeIcon icon={faCheck} />,
    },
    {
        nameDouble: 'Phone Support',
        sandbox: '',
        launch: '',
        grow: <FontAwesomeIcon icon={faCheck} />,
        enterprise: <FontAwesomeIcon icon={faCheck} />,
    },
    {
        nameDouble: 'API Status Updates',
        sandbox: '',
        launch: <FontAwesomeIcon icon={faCheck} />,
        grow: <FontAwesomeIcon icon={faCheck} />,
        enterprise: <FontAwesomeIcon icon={faCheck} />,
    },
    {
        nameDouble: 'Dedicated Account Manager',
        sandbox: '',
        launch: '',
        grow: '',
        enterprise: <FontAwesomeIcon icon={faCheck} />,
    },
    {
        nameDouble: 'Assisted Onboarding',
        sandbox: '',
        launch: '',
        grow: '',
        enterprise: <FontAwesomeIcon icon={faCheck} />,
    },
];

export default function VINDecoderDatabase({ nevdisDataSources }) {
    return (
        <>
            <Container theme="light" className="paddingY5" autoMinHeight={false}>
                <Section className="featuresTable">
                    <h2 className="featuresTableTitle paddingY4">Want to know more? Let's dig deeper</h2>

                    <div className="paddingY4">
                        <table className="featuresDesktop">
                            <thead>
                                <tr>
                                    <th className="planHeaderNone"> </th>
                                    <th className="planHeader sandbox">Build</th>
                                    <th className="planHeader launch">Launch</th>
                                    <th className="planHeader grow">Grow</th>
                                    <th className="planHeader enterprise">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="planHeaderNone"> </td>
                                    <td className="featuresCTATop">
                                        <a href="https://app.blueflag.com.au/get-started">
                                            <Button type="new-outline" color="primary" className="sandboxCTA sandboxGetStartedSignUp">
                                                Create Free Account <FontAwesomeIcon icon={faArrowRight} />
                                            </Button>
                                        </a>
                                    </td>
                                    <td className="featuresCTATop">
                                        <a href="https://app.blueflag.com.au/get-started">
                                            <Button type="new-fill" color="primary" className="launchCTA launchGetStartedSignUp">
                                                Get Started <FontAwesomeIcon icon={faArrowRight} />
                                            </Button>
                                        </a>
                                    </td>
                                    <td className="featuresCTATop">
                                        <a href="https://blueflag.com.au/contact-us/">
                                            <Button type="new-outline" color="primary" className="growCTA">
                                                Talk to Sales <FontAwesomeIcon icon={faArrowRight} />
                                            </Button>
                                        </a>
                                    </td>
                                    <td className="featuresCTATop">
                                        <a href="https://blueflag.com.au/contact-us/">
                                            <Button type="new-outline" color="primary" className="enterpriseCTA">
                                                Talk to Sales <FontAwesomeIcon icon={faArrowRight} />
                                            </Button>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody>
                                {pricing.map((ff, ii) => (
                                    <tr key={ii}>
                                        <td className="featurePricing">
                                            <div className="featureDoubleHeader">{ff.nameDouble}</div>
                                            <div className="featureDoubleText">{ff.text}</div>
                                        </td>
                                        <td className="featurePricing">{ff.sandbox}</td>
                                        <td className="featurePricingblocked" colSpan="3">
                                            Pricing is only available to businesses after completing the steps below: <br />
                                            <span>
                                                1.
                                                <a href="https://app.blueflag.com.au/get-started" className="pricingLink pricingLinkGetStartedSignUp">
                                                    Create a free account
                                                </a>
                                                <br />
                                                2.
                                                <a href="https://app.blueflag.com.au/account/apply" className="pricingLink">
                                                    Complete the application form
                                                </a>{' '}
                                                with a business email address*
                                                <br />
                                                3. You'll get immediate access to our{' '}
                                                <span>
                                                    <a href="https://app.blueflag.com.au/billing/pricing" className="pricingLink">
                                                        pricing chart
                                                    </a>
                                                </span>
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tbody>
                                {planDetails.map((ff, ii) => (
                                    <tr key={ii}>
                                        <td className="featureText">
                                            <div className="featureDoubleHeader">{ff.nameDouble}</div>
                                            <div className="featureDoubleText">{ff.text}</div>
                                        </td>
                                        <td className="featureOption">{ff.sandbox}</td>
                                        <td className="featureOption">{ff.launch}</td>
                                        <td className="featureOption">{ff.grow}</td>
                                        <td className="featureOption">{ff.enterprise}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <thead>
                                <tr>
                                    <th className="featureSection" colSpan="5">
                                        APIs
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {APIs.map((ff, ii) => (
                                    <tr key={ii}>
                                        <td className="featureText">
                                            <div className="featureDoubleHeader">{ff.nameDouble}</div>
                                            <div className="featureDoubleText">{ff.text}</div>
                                        </td>
                                        <td className="featureOption">{ff.sandbox}</td>
                                        <td className="featureOption">{ff.launch}</td>
                                        <td className="featureOption">{ff.grow}</td>
                                        <td className="featureOption">{ff.enterprise}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <thead>
                                <tr>
                                    <th className="featureSubSection" colSpan="5">
                                        Data Packs
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {DataPack.map((ff, ii) => (
                                    <tr key={ii}>
                                        <td className="featureText">
                                            <div className="featureDoubleHeader">{ff.nameDouble}</div>
                                            <div className="featureDoubleText">{ff.text}</div>
                                        </td>
                                        <td className="featureOption">{ff.sandbox}</td>
                                        <td className="featureOption">{ff.launch}</td>
                                        <td className="featureOption">{ff.grow}</td>
                                        <td className="featureOption">{ff.enterprise}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <thead>
                                <tr>
                                    <th className="featureSection" colSpan="5">
                                        Support & Success
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {supportSuccess.map((ff, ii) => (
                                    <tr key={ii}>
                                        <td className="featureText">
                                            <div className="featureDoubleHeader">{ff.nameDouble}</div>
                                            <div className="featureDoubleText">{ff.text}</div>
                                        </td>
                                        <td className="featureOption">{ff.sandbox}</td>
                                        <td className="featureOption">{ff.launch}</td>
                                        <td className="featureOption">{ff.grow}</td>
                                        <td className="featureOption">{ff.enterprise}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <thead>
                                <tr>
                                    <th className="planHeaderNone"> </th>
                                    <th className="featuresCTA">
                                        <a href="https://app.blueflag.com.au/get-started">
                                            <Button type="new-outline" color="primary" className="sandboxCTA sandboxGetStartedSignUp">
                                                Create Free Account <FontAwesomeIcon icon={faArrowRight} />
                                            </Button>
                                        </a>
                                    </th>
                                    <th className="featuresCTA">
                                        <a href="https://app.blueflag.com.au/get-started">
                                            <Button type="new-fill" color="primary" className="launchCTA launchGetStartedSignUp">
                                                Get Started <FontAwesomeIcon icon={faArrowRight} />
                                            </Button>
                                        </a>
                                    </th>
                                    <th className="featuresCTA">
                                        <a href="https://blueflag.com.au/contact-us/">
                                            <Button type="new-outline" color="primary" className="growCTA">
                                                Talk to Sales <FontAwesomeIcon icon={faArrowRight} />
                                            </Button>
                                        </a>
                                    </th>
                                    <th className="featuresCTA">
                                        <a href="https://blueflag.com.au/contact-us/">
                                            <Button type="new-outline" color="primary" className="enterpriseCTA">
                                                Talk to Sales <FontAwesomeIcon icon={faArrowRight} />
                                            </Button>
                                        </a>
                                    </th>
                                </tr>
                            </thead>
                        </table>

                        <div className="featuresMobile">
                            <table className="mobileTableHeader">
                                <thead>
                                    <tr className="headersContainer">
                                        <th className="planHeaderMobile">Developer Sandbox</th>
                                        <th className="planHeaderMobile">Launch</th>
                                        <th className="planHeaderMobile">Grow</th>
                                        <th className="planHeaderMobile">Enterprise</th>
                                    </tr>
                                </thead>
                            </table>

                            <table className="mobileTable">
                                {/* <thead>
                                <tr>
                                    <th className="featureHeaderMobile" colSpan="4">Pricing</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pricing.map((ff, ii) => (
                                    <tr key={ii}>
                                        <td className="featurePricing">{ff.sandbox}</td>
                                        <td className="featurePricingblocked" colSpan="3">
                                            Pricing is only available to legitmate businesses after completing the steps below: <br />
                                            <span>
                                                1. Create a free{' '}
                                                <a href="https://app.blueflag.com.au/get-started" className="pricingLink">
                                                    account
                                                </a>{' '}
                                                <br />
                                                2. Complete the{' '}
                                                <a href="https://app.blueflag.com.au/account/apply" className="pricingLink">
                                                    application form
                                                </a>{' '}
                                                with a business email address* <br />
                                                3. You'll get immediate access to pricing
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody> */}

                                {planDetails.map((ff, ii) => (
                                    <div>
                                        <thead>
                                            <tr key={ii}>
                                                <th className="featureHeaderMobile" colSpan="4">
                                                    {ff.nameDouble}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr key={ii}>
                                                <td className="featureOptionMobile">{ff.sandbox}</td>
                                                <td className="featureOptionMobile">{ff.launch}</td>
                                                <td className="featureOptionMobile">{ff.grow}</td>
                                                <td className="featureOptionMobile">{ff.enterprise}</td>
                                            </tr>
                                        </tbody>
                                    </div>
                                ))}
                            </table>

                            <table className="mobileTable">
                                <thead>
                                    <tr className="headersContainer">
                                        <th className="featureHeaderMobileSection">APIs</th>
                                    </tr>
                                </thead>
                            </table>

                            <table className="mobileTable">
                                {APIs.map((ff, ii) => (
                                    <div>
                                        <thead>
                                            <tr key={ii}>
                                                <th className="featureHeaderMobile" colSpan="4">
                                                    {ff.nameDouble}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr key={ii}>
                                                <td className="featureOptionMobile">{ff.sandbox}</td>
                                                <td className="featureOptionMobile">{ff.launch}</td>
                                                <td className="featureOptionMobile">{ff.grow}</td>
                                                <td className="featureOptionMobile">{ff.enterprise}</td>
                                            </tr>
                                        </tbody>
                                    </div>
                                ))}
                            </table>

                            <table className="mobileTable">
                                <thead>
                                    <tr className="headersContainer">
                                        <th className="featureHeaderMobileSubSection">Data Packs</th>
                                    </tr>
                                </thead>
                            </table>

                            <table className="mobileTable">
                                {DataPack.map((ff, ii) => (
                                    <div>
                                        <thead>
                                            <tr key={ii}>
                                                <th className="featureHeaderMobile double" colSpan="4">
                                                    {ff.nameDouble}
                                                </th>
                                            </tr>
                                            <tr className="featurePricingMobile">
                                                <td className="featureTextMobile" colSpan="4">
                                                    {ff.text}
                                                </td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr key={ii}>
                                                <td className="featureOptionMobile">{ff.sandbox}</td>
                                                <td className="featureOptionMobile">{ff.launch}</td>
                                                <td className="featureOptionMobile">{ff.grow}</td>
                                                <td className="featureOptionMobile">{ff.enterprise}</td>
                                            </tr>
                                        </tbody>
                                    </div>
                                ))}
                            </table>

                            <table className="mobileTable">
                                <thead>
                                    <tr className="headersContainer">
                                        <th className="featureHeaderMobileSection">Support & Success</th>
                                    </tr>
                                </thead>
                            </table>

                            <table className="mobileTable">
                                {supportSuccess.map((ff, ii) => (
                                    <div>
                                        <thead>
                                            <tr key={ii}>
                                                <th className="featureHeaderMobile" colSpan="4">
                                                    {ff.nameDouble}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr key={ii}>
                                                <td className="featureOptionMobile">{ff.sandbox}</td>
                                                <td className="featureOptionMobile">{ff.launch}</td>
                                                <td className="featureOptionMobile">{ff.grow}</td>
                                                <td className="featureOptionMobile">{ff.enterprise}</td>
                                            </tr>
                                        </tbody>
                                    </div>
                                ))}
                            </table>
                        </div>

                        <p className="disclaimerPricing">
                            *Our data is only available to registered Australian businesses who have a current ABN. If you provide a non-business email address, we will have to review your application
                            prior to providing pricing to ensure you meet the above criteria.
                        </p>
                    </div>
                </Section>
            </Container>
        </>
    );
}
