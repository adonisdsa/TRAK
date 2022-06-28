import '../newcarforecast.scss';
import React from 'react';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTable } from '@fortawesome/pro-light-svg-icons';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

const dataFields = [
    { name: 'Segment', example: 'SUV Medium >$60k', description: 'The industry classification for where the vehicle fits', to: '/docs/api/products/vin_decoder/' },
    { name: 'Make', example: 'Mercedes-Benz', description: 'The manufacturer of the vehicle', to: '/docs/api/products/vin_decoder/' },
    { name: 'Model', example: 'C-Class', description: 'The specific product within the manufacturers range', to: '/docs/api/products/vin_decoder/' },
    { name: 'Fuel Type', example: 'Plug-In Petrol', description: 'The fuel type used to propel the vehicle', to: '/docs/api/products/vin_decoder/' },
];

export default function VINDecoderDatabase({ nevdisDataSources }) {
    return (
        <>
            <Container theme="light-grey" className="paddingY5" autoMinHeight={false}>
                <Section className="database">
                    <div className="fieldsIcon">
                        <FontAwesomeIcon icon={faTable} />
                    </div>
                    <h2>Forecast Filtering</h2>
                    <p>All the market views below are available via the forecasting tool in the Blue Flag API. For extra information about vehicles themselves, take a look at our other datasets.</p>

                    <br />
                    <p> table of filtering fields for fuel types, makes, models and segments </p>

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
