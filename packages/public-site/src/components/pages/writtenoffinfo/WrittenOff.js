/* eslint-disable jsx-a11y/control-has-associated-label */
import './wovr.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

export default function WrittenOff() {
    return (
        <>
            <Container theme="dark" className="paddingY5" autoMinHeight={false}>
                <Section>
                    <h1>NEVDIS Written-off Vehicle Notification</h1>
                </Section>
            </Container>

            <Container className="WOV paddingY4" autoMinHeight={false}>
                <Section>
                    <h2>What is the Written Off Vehicle Register (WOVR)</h2>
                    <p>
                        The Written Off Vehicle Register contains vehicles that have been declared a "write-off". This includes vehicles that have been badly damaged and are unsafe to drive. It also
                        includes vehicles where the estimated cost of repair is more than the value of the vehicle.
                    </p>
                </Section>
            </Container>

            <Container className="WOV paddingY4" autoMinHeight={false}>
                <Section>
                    <h2>Written Off Vehicle Types</h2>
                    <p>There are two types of vehicle write-off's. A statutory write-off and a repairable write-off.</p>

                    <ul>
                        <li>A statutory write-off is when a vehicle has severe structural damage or deterioration. It is a total loss and no longer safe to drive on road.</li>
                        <li>
                            A repairable write-off is when a vehicle has been assessed as too costly to repair. But, subject to state laws, it can be re-registered for road use, once it has passed a
                            vehicle safety and identity check.
                        </li>
                    </ul>
                </Section>
            </Container>

            <Container className="paddingY4" autoMinHeight={false}>
                <Section>
                    <h2>Written Off Vehicle Register (WOVR) Codes</h2>

                    <p>The written-off information can be broken down into three parts:</p>
                </Section>
            </Container>

            <Container className="WOV paddingY4" autoMinHeight={false}>
                <Section>
                    <h3>1. Incident Type</h3>
                    <p>Determined by a letter that represents each of the 6</p>

                    <table>
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>D</td>
                                <td>Dismantled - Legitimate removal of components for use as parts.</td>
                            </tr>
                            <tr>
                                <td>F</td>
                                <td>Fire - Damage caused by combustion.</td>
                            </tr>
                            <tr>
                                <td>H</td>
                                <td>Hail - Damage caused by hail stones.</td>
                            </tr>
                            <tr>
                                <td>I</td>
                                <td>Impact - Collision of some type with an object, for example another vehicle, tree or pole.</td>
                            </tr>
                            <tr>
                                <td>M</td>
                                <td>
                                    Malicious/Vandalism/Stripped - Intentional damage, for example, broken door locks, glass window or windows, paint, scratched or stripped of all or a combination of
                                    interior and exterior body parts.
                                </td>
                            </tr>
                            <tr>
                                <td>W</td>
                                <td>Water - Damage caused by water (fresh or salt) such as a storm, river or flood.</td>
                            </tr>
                        </tbody>
                    </table>
                </Section>
            </Container>

            <Container className="WOV paddingY4" autoMinHeight={false}>
                <Section>
                    <h3>2. Damage Location</h3>
                    <p>Determined by a number ranging from 1-41 that corresponds to a position on the vehicle</p>

                    <table>
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Motor Vehicle – Passenger Front</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Motor Vehicle – Driver Front</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Motor Vehicle – Driver Side</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Motor Vehicle - Driver Rear</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Motor Vehicle – Passenger Rear</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Motor Vehicle – Passenger Side</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Motor Vehicle - Engine</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Motor Vehicle - Roof</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Motor Vehicle - Interior</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Caravan/Trailer - Front</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Caravan/Trailer - Rear</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Motorcycle - Front</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Motorcycle – Left Rear</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Motorcycle – Right Rear</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>Whole Vehicle</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>Floor Pan (passenger front)</td>
                            </tr>
                            <tr>
                                <td>16</td>
                                <td>Fire Wall</td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td>Chassis/structural rails (passenger)</td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td>Floor Pan (driver rear)</td>
                            </tr>
                            <tr>
                                <td>19</td>
                                <td>Floor Pan (driver front)</td>
                            </tr>
                            <tr>
                                <td>20</td>
                                <td>Floor Pan (passenger rear)</td>
                            </tr>
                            <tr>
                                <td>21</td>
                                <td>Chassis/structural rails (driver)</td>
                            </tr>
                            <tr>
                                <td>22</td>
                                <td>A pillar passenger</td>
                            </tr>
                            <tr>
                                <td>23</td>
                                <td>A pillar driver</td>
                            </tr>
                            <tr>
                                <td>24</td>
                                <td>B pillar passenger</td>
                            </tr>
                            <tr>
                                <td>25</td>
                                <td>B pillar driver</td>
                            </tr>
                            <tr>
                                <td>26</td>
                                <td>C pillar passenger</td>
                            </tr>
                            <tr>
                                <td>27</td>
                                <td>C pillar driver</td>
                            </tr>
                            <tr>
                                <td>28</td>
                                <td>D pillar passenger</td>
                            </tr>
                            <tr>
                                <td>29</td>
                                <td>D pillar driver</td>
                            </tr>
                            <tr>
                                <td>30</td>
                                <td>Engine block (cracked, fractured)</td>
                            </tr>
                            <tr>
                                <td>31</td>
                                <td>Transmission case</td>
                            </tr>
                            <tr>
                                <td>32</td>
                                <td>Differential case</td>
                            </tr>
                            <tr>
                                <td>33</td>
                                <td>Axle housing</td>
                            </tr>
                            <tr>
                                <td>34</td>
                                <td>Suspension (passenger front)</td>
                            </tr>
                            <tr>
                                <td>35</td>
                                <td>Suspension (driver front)</td>
                            </tr>
                            <tr>
                                <td>36</td>
                                <td>Suspension (passenger rear)</td>
                            </tr>
                            <tr>
                                <td>37</td>
                                <td>Suspension (driver rear)</td>
                            </tr>
                            <tr>
                                <td>38</td>
                                <td>Airbag front</td>
                            </tr>
                            <tr>
                                <td>39</td>
                                <td>Airbag side</td>
                            </tr>
                            <tr>
                                <td>40</td>
                                <td>Airbag curtain</td>
                            </tr>
                            <tr>
                                <td>41</td>
                                <td>Seat belt pre-tensioner</td>
                            </tr>
                        </tbody>
                    </table>
                </Section>
            </Container>

            <Container className="WOV paddingY4" autoMinHeight={false}>
                <Section>
                    <h3>3. Damage Severity</h3>
                    <p>Determined by a letter ranging from A-P that represents the level of severity</p>

                    <table>
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>A</td>
                                <td>Heavy Panel</td>
                            </tr>
                            <tr>
                                <td>B</td>
                                <td>Light Panel</td>
                            </tr>
                            <tr>
                                <td>C</td>
                                <td>Heavy Structural</td>
                            </tr>
                            <tr>
                                <td>D</td>
                                <td>Light Structural</td>
                            </tr>
                            <tr>
                                <td>E</td>
                                <td>Unrepairable</td>
                            </tr>
                            <tr>
                                <td>F</td>
                                <td>Major Mechanical Damage</td>
                            </tr>
                            <tr>
                                <td>G</td>
                                <td>Minor Mechanical Damage</td>
                            </tr>
                            <tr>
                                <td>H</td>
                                <td>Major Stripping</td>
                            </tr>
                            <tr>
                                <td>I</td>
                                <td>Minor Stripping</td>
                            </tr>
                            <tr>
                                <td>J</td>
                                <td>Major Vandalism</td>
                            </tr>
                            <tr>
                                <td>K</td>
                                <td>Minor Vandalism</td>
                            </tr>
                            <tr>
                                <td>L</td>
                                <td>Water (salt)</td>
                            </tr>
                            <tr>
                                <td>M</td>
                                <td>Water (fresh)</td>
                            </tr>
                            <tr>
                                <td>N</td>
                                <td>Burnt/Blistered</td>
                            </tr>
                            <tr>
                                <td>O</td>
                                <td>Smoke and Heat</td>
                            </tr>
                            <tr>
                                <td>P</td>
                                <td>Minor Smoke</td>
                            </tr>
                        </tbody>
                    </table>
                </Section>
            </Container>

            <Container className="WOV WOV-example paddingY4" autoMinHeight={false}>
                <Section>
                    <h2>Example</h2>

                    <div>
                        <strong>NEVDIS Written-off Vehicle Notification: </strong>
                        <span className="code">WA, 01 Sep 2010, H14B [Hail | Whole vehicle | Light panel]</span>
                    </div>

                    <p className="paddingY3">The code will be displayed, and then decoded. Using the above example of H14B [Hail | Whole vehicle | Light panel]:</p>

                    <table>
                        <thead>
                            <tr>
                                <th> </th>
                                <th>Code</th>
                                <th>Description</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Incident Type</td>
                                <td>H</td>
                                <td>Hail - Damage caused by hail stones</td>
                            </tr>
                            <tr>
                                <td>Damage Location</td>
                                <td>14</td>
                                <td>Whole Vehicle</td>
                            </tr>
                            <tr>
                                <td>Damage Severity</td>
                                <td>B</td>
                                <td>Light Panel</td>
                            </tr>
                        </tbody>
                    </table>
                </Section>
            </Container>
        </>
    );
}
