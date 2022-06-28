import './VINChassis.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

export default function VinOrChassis() {
    return (
        <>
            <Container theme="dark" className="paddingY5" autoMinHeight={false}>
                <Section>
                    <h1>Difference between a VIN and a Chassis Number?</h1>
                </Section>
            </Container>

            <Container className="paddingY4" autoMinHeight={false}>
                <Section>
                    <h2>What is a VIN?</h2>
                    <p>A VIN is the 'Vehicle Identification Number' attached to any motor vehicle manufactured on or after 1st January 1989. Important Information about a VIN includes:</p>
                    <ul>
                        <li>A VIN is always 17 characters long</li>
                        <li>A VIN does not contain the letter "o" - it will always be the number zero that appears</li>
                        <li>A VIN does not contain the letter "i" - it will always be the number one that appears</li>
                        <li>A VIN does not contain the letter "q"</li>
                    </ul>
                </Section>
            </Container>

            <Container className="paddingY4" autoMinHeight={false}>
                <Section>
                    <h2>What is a Chassis Number?</h2>
                    <p>A Chassis number is the identification number attached to motor vehicles manufactured before 1st January 1989. Important Information about a Chassis includes:</p>

                    <ul>
                        <li>A chassis does not have any specified length</li>
                        <li>A chassis may not be a unique number</li>
                    </ul>

                    <p>
                        However there might be some special vehicles produced like plant machinery or specialized vehicles of that sort that might still be allocated a chassis at the time of
                        manufacture even today. This is decided by the manufacturer and beyond our scope of knowledge.
                    </p>
                </Section>
            </Container>

            <Container className="paddingY4" autoMinHeight={false}>
                <Section>
                    <h2>Where to find a VIN on a vehicle?</h2>
                    <p>
                        Vehicle Identification Numbers are located on the vehicle itself, often in numerous places but can also be sourced externally. Many vehicles have a VIN stamped behind the
                        dashboard that can be seen by looking through the bottom corner of the windscreen. Sometimes it’s more visible if you lift up the windscreen wiper arm. The VIN may also appear
                        in a number of other locations. It is always stamped onto the body of the car itself as opposed to a door or boot lid:
                    </p>

                    <ul>
                        <li>Front Of Engine Block</li>
                        <li>Engine Bay</li>
                        <li>Under Rear Wheel Arch</li>
                        <li>Driver Door Jamb</li>
                        <li>Underneath Spare Tyre In Boot</li>
                    </ul>

                    <p>
                        If your VIN is still elusive your owners manual should direct you to its location. Alternatively try searching your car model on the internet or contact your local dealer for
                        help. A VIN check can only be done with a relevant VIN.
                    </p>
                </Section>
            </Container>
        </>
    );
}
