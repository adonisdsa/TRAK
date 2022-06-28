import './WhatIsNevdis.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

export default function AboutWhoWeAre() {
    return (
        <Container className="paddingY5">
            <Section>
                {/* <p className="paddingY3">
                    In February 2017, <b>Blue Flag</b> signed an agreement with <b>Austroads</b> to become an authorised broker of Plate to VIN <b>NEVDIS</b> data.
                </p> */}
                <h3 className="paddingY3">What is NEVDIS?</h3>
                <p className="paddingY3">
                    The National Exchange of Vehicle and Driver Information System (NEVDIS) was established in 1998 and is owned by Austroads on behalf of the eight states and territory jurisdictions
                    that contribute information.
                </p>
                <p className="paddingY3">
                    NEVDIS is a unique national system which enables road authorities to interact across state borders and directly supports the transport and automotive industries. This essential
                    customer service system exchanges national information about vehicles and driver licences.
                </p>
                <p className="paddingY3">
                    In addition to information supplied by road agencies, NEVDIS collects vehicle identification number (VIN) data from vehicle manufacturers and vehicle theft information from police.
                    It also serves information to public and private sector organisations to facilitate provenance checking on vehicles, matching of biographic details on licences, motor insurance
                    underwriting and vehicle safety recalls.
                </p>
                <h3 className="paddingY3">The system processes more than 100 million enquiries each year.</h3>
                <p className="paddingY3">The NEVDIS team works tirelessly to maintain a high standard of service to stakeholders with a reliability uptime of 99.9%.</p>
                <h3 className="paddingY3">The core product links:</h3>
                <p className="paddingY3">
                    <ul>
                        <li>Number plate and state with VIN</li>
                        <li>Number plate and state with chassis number</li>
                        <li>VIN with number plate</li>
                    </ul>
                    <a href="/nevdis/vin-or-chassis-number">Click here for more information regarding VIN's and Chassis Numbers</a>
                </p>
                <h3 className="paddingY3">Plate to VIN NEVDIS Data</h3>
                <p className="paddingY3">Austroads’ Plate to VIN (P2V) initiative is designed to meet the demand for access to vehicle data in NEVDIS from commercial or government enterprises.</p>
                <h3 className="paddingY3">Optional additional data products deliver rich information sets including:</h3>
                <p className="paddingY3">
                    <ul className="double-column">
                        <li>Basic Vehicle Attributes</li>
                        <li>Vehicle Age</li>
                        <li>Power-to-Weight Ratio</li>
                        <li>Registration Status</li>
                        <li>Written-Off Status</li>
                        <li>Written-Off History</li>
                        <li>Written-Off Damage Codes</li>
                        <li>Written-Off Damage Codes History</li>
                        <li>Stolen Status</li>
                    </ul>
                    <a href="/nevdis/insurance-written-off-vehicle-information">Click here for more information regarding Written-Off Vehicle Insurance.</a>
                </p>
                <h3 className="paddingY3">Accessing NEVDIS Data</h3>
                <p className="paddingY3">
                    Blue Flag has provisioned various methods for accessing NEVDIS data. Clients can choose from a integrated solution utilising our API. Additionally, clients can upload an Excel or
                    text file, as well as use our user interface for smaller queries.
                </p>
                <a href="/contact-us">Please contact the team at Blue Flag to discuss your requirements.</a>
            </Section>
        </Container>
    );
}
