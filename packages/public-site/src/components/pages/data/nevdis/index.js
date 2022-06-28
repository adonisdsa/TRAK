import './index.scss';
import 'style/colors.scss';
import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
import Button from 'components/Button';

const dataFields = [
    {
        name: 'Number Plate',
        description: 'An alphanumeric code used to identify vehicles. The plate is visible on the front and rear of most vehicles.',
        to: '/docs/api/products/NEVDIS/vehicle_details/',
    },
    { name: 'State', description: 'The area within Australia where the vehicle is registered.', to: 'https://blueflag.com.au/docs/api/products/NEVDIS/vehicle_details/' },
    { name: 'VIN', description: 'A unique 17 character code used to identify individual motor vehicles.', to: 'https://blueflag.com.au/docs/api/products/NEVDIS/vehicle_details/' },
    {
        name: 'Chassis',
        description: 'A unique code used to identify individual motor vehicles. Used before January 1989 in Australia.',
        to: 'https://blueflag.com.au/docs/api/products/NEVDIS/vehicle_details/',
    },

    { name: 'Make', description: 'The manufacturer of the vehicle.', to: 'https://blueflag.com.au/docs/api/products/NEVDIS/vehicle_details/' },
    { name: 'Model', description: 'The specific product within the manufacturers range.', to: 'https://blueflag.com.au/docs/api/products/NEVDIS/vehicle_details/' },

    { name: 'Engine Number', description: 'A unique alphanumeric sequence stamped onto the engine by the manufacturer.', to: 'https://blueflag.com.au/docs/api/products/NEVDIS/vehicle_details/' },
    { name: 'Vehicle Type', description: 'Category that the vehicle is registered as.', to: 'https://blueflag.com.au/docs/api/products/NEVDIS/vehicle_details/' },
    { name: 'Body Type', description: 'Classification of the vehicle shape noted by the road authority.', to: 'https://blueflag.com.au/docs/api/products/NEVDIS/vehicle_details/' },
    { name: 'Colour', description: 'Primary paint colour of the vehicle noted by the road authority.', to: 'https://blueflag.com.au/docs/api/products/NEVDIS/vehicle_details/' },
    { name: 'Compliance Plate', description: 'Month and year the vehicle was confirmed as meeting local regulations.', to: '/docs/api/products/NEVDIS/build_and_compliance/' },
    { name: 'Year of Manufacture', description: 'Year the vehicle was assembled.', to: '/docs/api/products/NEVDIS/build_and_compliance/' },
    { name: 'Registration Status', description: 'Can be either Registered, Unregistered or Suspended.', to: '/docs/api/products/NEVDIS/registration_status/' },
    {
        name: 'Registration Expiry Date',
        description: 'Status and expiry date update when registration is paid / cancelled or lapsed. Some states update within 1 hour while others update overnight.',
        to: '/docs/api/products/NEVDIS/registration_status/',
    },

    { name: 'Written-off Vehicle Notification Status', description: 'Current written off status of the vehicle', to: '/docs/api/products/NEVDIS/written_off_vehicle/' },
    { name: 'Written-off Vehicle Damage Codes', description: 'Code dictating the type and location of damage', to: '/nevdis/insurance-written-off-vehicle-information/' },

    { name: 'Stolen Vehicle Type', description: 'Part of the vehicle that is stolen.', to: '/docs/api/products/NEVDIS/stolen_check/' },
    { name: 'Stolen Vehicle Jurisdiction', description: 'State where the vehicle was reported stolen.', to: '/docs/api/products/NEVDIS/stolen_check/' },
    { name: 'Stolen Vehicle Reported Date', description: 'Date the vehicle was reported as stolen.', to: '/docs/api/products/NEVDIS/stolen_check/' },
    { name: 'Stolen Vehicle Summary', description: 'Police jurisdiction reference number.', to: '/docs/api/products/NEVDIS/stolen_check/' },
];

export default function NevdisHero({ nevdisDataSources }) {
    const tickIcon = <FontAwesomeIcon icon={['fad', 'check-circle']} size="1x" style={{ color: '$positive', marginRight: 4 }} />;

    return (
        <div className="NevdisIndex">
            <Container theme="dark" className="paddingY5">
                <Section>
                    <h1>NEVDIS Database</h1>
                    <h2>VIN Check and Rego Check</h2>

                    <div className="paddingY5">
                        <Button className="nevdisHeroGetStartedSignUp" color="secondary" type="fill" to="https://app.blueflag.com.au/get-started">
                            Get started with NEVDIS
                        </Button>
                    </div>
                </Section>
            </Container>

            <Container className="NevdisIndex-intro paddingY5" autoMinHeight={false}>
                <Section>
                    <h2>What is NEVDIS?</h2>
                    <p>
                        NEVDIS (National Exchange of Vehicle and Driver Information System) is the database that contains information on all vehicle's registered in Australia. All data is imported
                        from the eight state and territory road authorities. Australian businesses and government organisations can search NEVDIS for vehicle identification information and vehicle
                        status checks.
                    </p>

                    <p className="paddingY3">You can get access to the NEVDIS database via the Blue Flag API. </p>
                </Section>
                {/* <Section className="NevdisIndex-intro-right paddingX3">
                    <div>{tickIcon} Trusted data, all values come directly from the government</div>
                    <div>{tickIcon} Includes all registered vehicles including cars, motorbikes, trucks etc.</div>
                    <div>{tickIcon} Easily find vehicles by number plate, VIN or chassis number</div>
                </Section> */}
            </Container>

            <Container theme="light-grey" className="NevdisIndex-benefits paddingY5" autoMinHeight={false}>
                <Section className="paddingX3">
                    <h3>{tickIcon} Fresh data</h3>
                    <p>
                        Direct from <Link to="https://austroads.com.au/">Austroads</Link> and the road and traffic authority, our database is always up-to-date.
                    </p>
                </Section>

                <Section className="paddingX3">
                    <h3>{tickIcon} 100% Coverage</h3>
                    <p>Once registered by a local road traffic authority, all vehicles are ready for a NEVDIS search.</p>
                </Section>

                <Section className="paddingX3">
                    <h3>{tickIcon} Pay per request</h3>
                    <p>Only pay for what you use. Discount plans with extra savings are also available if you have consistent usage.</p>
                </Section>
            </Container>

            <Container className="NevdisIndex-details paddingY5">
                <Section className="paddingX3">
                    <h2>Trusted data, directly from the Government</h2>

                    <p className="paddingY3">
                        With our API, you can request a NEVDIS search on vehicles registered in each state or territory. This includes registrations for cars, trucks and motorcycles. The information
                        provided is exactly as is from the source system, we do not change it.
                    </p>

                    <div className="paddingY3">
                        <table>
                            <thead>
                                <tr>
                                    <th>Jurisdiction</th>
                                    <th>Organisation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ACT</td>
                                    <td>ACT Road Transport Authority</td>
                                </tr>
                                <tr>
                                    <td>NSW</td>
                                    <td>Roads and Maritime Services</td>
                                </tr>
                                <tr>
                                    <td>NT</td>
                                    <td>Northern Territory Transport Group</td>
                                </tr>
                                <tr>
                                    <td>QLD</td>
                                    <td>Department of Transport and Main Roads</td>
                                </tr>
                                <tr>
                                    <td>SA</td>
                                    <td>Service SA</td>
                                </tr>
                                <tr>
                                    <td>TAS</td>
                                    <td>Department of State Growth (Transport)</td>
                                </tr>
                                <tr>
                                    <td>VIC</td>
                                    <td>VicRoads</td>
                                </tr>
                                <tr>
                                    <td>WA</td>
                                    <td>Department of Transport</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="paddingY3">
                        <Button className="nevdisDataGetStartedSignUp" to="https://app.blueflag.com.au/get-started" type="fill" color="primary">
                            Try it now <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                        </Button>
                    </div>
                </Section>

                <Section className="paddingX4">
                    <Img fluid={nevdisDataSources?.childImageSharp?.fluid} alt="BlueFlag API and NEVDIS data sourced from road authorities diagram" />
                    <div className="Code-caption">
                        <FontAwesomeIcon icon={['far', 'info-circle']} /> Our data is <strong>always accurate</strong>. We source data from each of the eight Australian road and traffic authorities
                        via NEVDIS.
                    </div>
                </Section>
            </Container>

            <Container className="paddingY5">
                <Section className="paddingX3">
                    <h2>NEVDIS Database Fields</h2>
                    <p className="paddingY3">
                        All the fields listed in the table below are available via the Blue Flag API. The values are exactly as captured by the road traffic authorities and are not changed. For extra
                        information about the vehicles, take a look at our other datasets.
                    </p>

                    <div className="paddingY5">
                        <table>
                            <thead>
                                <tr>
                                    <th>NEVDIS Field Name</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataFields.map((ff, ii) => (
                                    <tr key={ii}>
                                        <td>{ff.to ? <Link to={ff.to}>{ff.name}</Link> : ff.name}</td>
                                        <td>{ff.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <Button to="/docs/" type="fill" color="primary-dark">
                        Read docs <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </Button>
                </Section>
            </Container>

            <Container theme="light-grey" className="paddingY5">
                <Section className="paddingX3">
                    <h2>Use Cases</h2>

                    <div className="paddingY3">
                        <h3>Leasing Companies</h3>
                        <p>
                            You can easily use NEVDIS to verify that your entire fleet is currently registered. This means that all of your clients are covered and your company is compliant. Also,
                            when you purchase a vehicle fleet from a third party, you can verify all vehicle details in one easy step.
                        </p>
                    </div>

                    <div className="paddingY3">
                        <h3>Automotive Importers</h3>
                        <p>
                            From January 2020, all new vehicles must be registered to be counted as a sale in Australia. It’s easy to use NEVDIS to check all your new vehicle VIN's and make sure they
                            show a valid registration status and future registration expiry date.
                        </p>
                    </div>

                    <div className="paddingY3">
                        <h3>Automotive Aftermarket Suppliers</h3>
                        <p>
                            Many of your clients don’t know their vehicle’s VIN but they do know their registration number plate! Its easy to use NEVDIS to enter a registration and state and return
                            the VIN. You know know exactly which parts to provide for the client, minimising errors and ensuring repeat business.
                        </p>
                    </div>
                </Section>
            </Container>
        </div>
    );
}
