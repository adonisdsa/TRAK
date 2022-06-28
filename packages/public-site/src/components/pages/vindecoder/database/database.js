import '../VINDecoder.scss';
import React from 'react';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTable } from '@fortawesome/pro-light-svg-icons';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

const dataFields = [
    { name: 'VIN', example: 'JTDAF4E320A005143', description: 'A unique 17 character code used to identify individual motor vehicles.', to: '/docs/api/products/vin_decoder/' },
    { name: 'Make', example: 'Toyota', description: 'The manufacturer of the vehicle.', to: '/docs/api/products/vin_decoder/' },
    { name: 'Model', example: 'Yaris', description: 'The specific product within the manufacturers range.', to: '/docs/api/products/vin_decoder/' },
    { name: 'Series', example: 'GXPA16R', description: 'The internal code denoting the manufacturers product', to: '/docs/api/products/vin_decoder/' },
    { name: 'Variant', example: 'GR', description: 'The manufacturers specific variant or grade of the vehicle.', to: '/docs/api/products/vin_decoder/' },
    { name: 'Build Year', example: '2021', description: 'The year the vehicle was physically made.', to: '/docs/api/products/vin_decoder/' },
    { name: 'Model Year', example: '2021', description: 'The manufacturers model year of production.', to: '/docs/api/products/vin_decoder/' },
    { name: 'Body Type', example: 'Hatchback', description: 'The body style of the vehicle.', to: '/docs/api/products/vin_decoder/' },
    { name: 'Fuel', example: 'Petrol', description: 'The fuel type powering the vehicle.', to: '/docs/api/products/vin_decoder/' },
    { name: 'Drive', example: 'AWD', description: 'Which axle and wheels are driving the vehicle.', to: '/docs/api/products/vin_decoder/' },
    { name: 'Cylinders', example: '3', description: 'The number of individual cylinders within the engine.', to: '/docs/api/products/vin_decoder/' },
    { name: 'Litres', example: '1.6', description: 'The size of the engine measured in litres.', to: '/docs/api/products/vin_decoder/' },
    { name: 'Transmission', example: 'Manual', description: 'The type of transmission fitted to the vehicle.', to: '/docs/api/products/vin_decoder/' },
    { name: 'Doors', example: '3', description: 'The number of doors fitted to the vehicle.', to: '/docs/api/products/vin_decoder/' },
    { name: 'Seats', example: '5', description: 'The number of seats fitted to the vehicle.', to: '/docs/api/products/vin_decoder/' },
];

export default function VINDecoderDatabase({ nevdisDataSources }) {
    return (
        <>
            <Container theme="light-grey" className="paddingY5" autoMinHeight={false}>
                <Section className="database">
                    <div className="fieldsIcon" id="database-fields">
                        <FontAwesomeIcon icon={faTable} />
                    </div>
                    <h2>Database Fields</h2>
                    <p>All the fields listed in the table below are available via the VIN Decoder in the Blue Flag API. For extra information about the vehicles, take a look at our other datasets.</p>

                    <a href="https://blueflag.com.au/docs/api/products/vin_decoder/" className="secondaryCTA">
                        Read Docs <FontAwesomeIcon icon={faArrowRight} />
                    </a>

                    <div className="paddingY5">
                        <table>
                            <thead>
                                <tr>
                                    <th>VIN Decoder Field Name</th>
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
