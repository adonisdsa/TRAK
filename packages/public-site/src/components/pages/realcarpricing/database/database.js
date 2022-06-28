import '../realcarpricing.scss';
import React from 'react';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTable } from '@fortawesome/pro-light-svg-icons';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

const dataFields = [
    { name: 'Real Car Price', example: '$22,290', description: "Blue Flag's calculated price for what consumers are paying." },
    { name: 'RRP', example: '$19,925', description: "Manufacturer's Recommended Retail Price." },
    { name: 'Make', example: 'Hyundai', description: 'The manufacturer of the vehicle.' },
    { name: 'Model', example: 'i30', description: 'The specific product within the manufacturers range.' },
    { name: 'Variant', example: 'Go', description: 'The manufacturers specific variant or grade of the vehicle.' },
    { name: 'Compliance Year', example: '2022', description: 'The year the vehicle was verified as meeting Australian Design Rules.' },
    { name: 'Body Style', example: 'Hatchback', description: 'The body style of the vehicle.' },
    { name: 'Fuel Type', example: 'Petrol', description: 'The fuel type powering the vehicle.' },
    { name: 'No. of Doors', example: '5', description: 'The number of doors fitted to the vehicle.' },
    { name: 'No. of Seats', example: '5', description: 'The number of seats fitted to the vehicle.' },
    { name: 'Drivetrain', example: 'FWD', description: 'Which axle and wheels are driving the vehicle.' },
    { name: 'Transmission', example: 'Auto', description: 'The type of transmission fitted to the vehicle.' },
    { name: 'No. of Cylinders', example: '4', description: 'The number of individual cylinders within the engine.' },
    { name: 'Engine Capacity (L)', example: '2', description: 'The size of the engine measured in litres.' },
    { name: 'Power (kW)', example: '120', description: 'The power made by the engine measured in kilowatts.' },
    { name: 'Torque (Nm)', example: '203', description: 'The torque made by the engine measured in Newton meters.' },
    { name: 'AU Status', example: 'Past Car', description: 'Whether the vehicle is a current or discontinued model.' },
];

export default function VINDecoderDatabase({ nevdisDataSources }) {
    return (
        <>
            <Container theme="light-grey" className="paddingY5" autoMinHeight={false}>
                <Section className="database">
                    <div className="fieldsIcon">
                        <FontAwesomeIcon icon={faTable} />
                    </div>
                    <h2>Database Fields</h2>
                    <p>Below are some of the fields available in our Real Car Pricing database. For extra information about the vehicles, take a look at our other datasets.</p>

                    <a href="https://blueflag.com.au/contact/?contact_sales_product=Real%Car%20Pricing" className="secondaryCTA">
                        Talk to an expert <FontAwesomeIcon icon={faArrowRight} />
                    </a>

                    <div className="paddingY5">
                        <table>
                            <thead>
                                <tr>
                                    <th>VFACTS Segments</th>
                                    <th>Example</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataFields.map((ff, ii) => (
                                    <tr key={ii}>
                                        <td>{ff.to ? <Link to={ff.to}>{ff.name}</Link> : ff.name}</td>
                                        <td>{ff.example}</td>
                                        <td>{ff.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Section>
            </Container>
        </>
    );
}
