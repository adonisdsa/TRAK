import './DataFields.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

export default function AboutWhoWeAre() {
    return (
        <Container ClassName="whatis paddingY5">
            <Section>
                <h3 ClassName="what-is-header">Data Fields</h3>
                <div ClassName="gridWrapper">
                    <div ClassName="gridHeader">Search Input</div>
                    <div ClassName="gridHeader">Core Responses</div>
                    <div ClassName="rowHeader">Number Plate and State</div>
                    <div ClassName="rowText">Provides the associated VIN or Chassis Number of the registered vehicle.</div>
                    <div ClassName="rowHeader">VIN</div>
                    <div ClassName="rowText">Provides the current Number Plate and State of the registered VIN.</div>
                    <div ClassName="rowHeader">Chassis</div>
                    <div ClassName="rowText">Provides the current Number Plate and State of the registered Chassis.</div>
                </div>
                <a ClassName="data-link" href="/vin-or-chassis-number">
                    <p>Click here for more information regarding VIN's and Chassis Numbers</p>
                </a>
                <div ClassName="gridWrapper">
                    <div ClassName="gridHeader span">Optional Responses</div>
                    <div ClassName="rowHeader">Basic Vehicle Attributes (as sourced from State and Territory road agencies)</div>
                    <div ClassName="rowText">Provides the associated VIN or Chassis Number of the registered vehicle.</div>
                    <div ClassName="rowHeader">Vehicle Age</div>
                    <div ClassName="rowText">Provides the vehicle’s registered Year of Manufacture and Compliance Plate.</div>
                    <div ClassName="rowHeader">Power-to-Weight Ratio</div>
                    <div ClassName="rowText"> Provides the vehicle’s Power, Weight and Power-to-Weight Ratio.</div>
                    <div ClassName="rowHeader">Registration Status</div>
                    <div ClassName="rowText"> Provides whether a vehicle is Registered, Suspended or Unregistered, and its Expiry Date.</div>
                    <div ClassName="rowHeader">Written-Off Vehicle (WOV) Status</div>
                    <div ClassName="rowText">
                        Provides a vehicle’s most recently reported Written-Off entry, if any. Includes whether write-off was due to: a collision or other cause (eg. storm, flood), repairable
                        write-off, inspected repairable write-off, statutory write-off, or if the vehicle was unrecovered, along with the date. Also includes the reporting road authority jurisdiction.
                    </div>
                    <div ClassName="rowHeader">WOV History</div>
                    <div ClassName="rowText">
                        Provides a vehicle’s historical (not including the most recent) reported Written-Off entries, if any. Includes whether write-off was due to: a collision or other cause (eg.
                        storm, flood), repairable write-off, inspected repairable write-off, statutory write-off, or if the vehicle was unrecovered, along with the date. Also includes the reporting
                        road authority jurisdiction.
                    </div>
                    <div ClassName="rowHeader">WOV Damage Codes</div>
                    <div ClassName="rowText">Provides a vehicle’s most recently reported Damage Codes, if any.</div>
                    <div ClassName="rowHeader">WOV Damage Codes History</div>
                    <div ClassName="rowText">Provides a vehicle’s historical (not including the most recent) reported Damage Codes, if any.</div>
                    <div ClassName="rowHeader">Stolen Status</div>
                    <div ClassName="rowText">
                        Provides a vehicle’s reported Stolen incident(s), if any. Includes whether Stolen Status was due to: Stolen VIN, Chassis, Engine, or Plate; provides the reporting police
                        jurisdiction, Stolen Reference Number and the reported date.
                    </div>
                </div>
            </Section>
        </Container>
    );
}
