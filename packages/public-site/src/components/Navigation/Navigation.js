import './navigation.scss';
import React from 'react';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'components/Button';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faBracketsCurly } from '@fortawesome/pro-solid-svg-icons';
import { faFileChartColumn, faDatabase } from '@fortawesome/pro-regular-svg-icons';

import TrakLogo from 'assets/images/trakLogo.svg';

export default function Navigation(props) {
    const { hideCTA } = props;

    return (
        <section>
            <nav className="navBar">
                <Link className="navBarLogo" to="/">
                    <img src="/assets/logos/trakLogo.png" alt="TRAK logo" width="156px" height="auto" />
                </Link>

                {!hideCTA && (
                    <>
                        <div className="navBar_Actions">
                            <div className="navBarLinks">
                                {/* <div className="navLink dropdown">
                                    Products
                                    <div className="dropdownMenu">
                                        <div className="dropdownColumn">
                                            <div className="columnWrapper">
                                                <FontAwesomeIcon icon={faBracketsCurly} />
                                                <p className="columnHeader"> API</p>
                                            </div>
                                            <a href="/vin-decoder/">
                                                <div className="productDropdown api">
                                                    <h3>VIN Decoder</h3>
                                                    <p className="productDropdownText">Find useful specific details of your vehicle</p>
                                                </div>
                                            </a>
                                            <a href="/nevdis/">
                                                <div className="productDropdown api">
                                                    <h3>NEVDIS Plate to VIN</h3>
                                                    <p className="productDropdownText">vin, chassis, registration plate, registration state</p>
                                                </div>
                                            </a>
                                            <a href="/nevdis/">
                                                <div className="productDropdown api">
                                                    <h3>Vehicle Details</h3>
                                                    <p className="productDropdownText">make, model, colour, vehicle type, body type</p>
                                                </div>
                                            </a>
                                            <a href="/nevdis/">
                                                <div className="productDropdown api">
                                                    <h3>Registration Status</h3>
                                                    <p className="productDropdownText">registration status, registration expiry date</p>
                                                </div>
                                            </a>
                                            <a href="/nevdis/">
                                                <div className="productDropdown api">
                                                    <h3>Build and Compliance</h3>
                                                    <p className="productDropdownText">compliance plate, year of manufacture</p>
                                                </div>
                                            </a>
                                            <a href="/nevdis/">
                                                <div className="productDropdown api">
                                                    <h3>Stolen Check</h3>
                                                    <p className="productDropdownText">stolen type, jurisdiction, reported date, summary</p>
                                                </div>
                                            </a>
                                            <a href="/nevdis/">
                                                <div className="productDropdown api">
                                                    <h3>Written Off Check</h3>
                                                    <p className="productDropdownText">damage codes, incident code, reported date, jurisdiction, type code</p>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="dropdownColumn">
                                            <div className="columnWrapper data">
                                                <FontAwesomeIcon icon={faDatabase} />
                                                <p className="columnHeader"> Data</p>
                                            </div>
                                            <a href="/public/campaigns/202204/ev-report/">
                                                <div className="productDropdown">
                                                    <h3>Electric Vehicle Forecast</h3>
                                                    <p className="productDropdownText">Monitor the transition from ICE to Electric Vehicles</p>
                                                </div>
                                            </a>
                                            <a href="/real-car-pricing/">
                                                <div className="productDropdown">
                                                    <h3>Real Car Pricing</h3>
                                                    <p className="productDropdownText">Find out what consumers pay for new and used cars in Australia</p>
                                                </div>
                                            </a>
                                            <a href="/car-sales-statistics/">
                                                <div className="productDropdown">
                                                    <h3>New Car Calendar</h3>
                                                    <p className="productDropdownText">Every release including new models, face-lifts, tech changes and limited editions</p>
                                                </div>
                                            </a>
                                            <a href="/car-sales-statistics/">
                                                <div className="productDropdown">
                                                    <h3>New Car Offers</h3>
                                                    <p className="productDropdownText">All manufacturer advertised offers, incentives and price changes</p>
                                                </div>
                                            </a>
                                            <a href="/car-sales-statistics/">
                                                <div className="productDropdown">
                                                    <h3>New Car Market Forecast</h3>
                                                    <p className="productDropdownText">Predicting the number of new vehicle sales by calendar month</p>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="dropdownColumn">
                                            <div className="columnWrapper research">
                                                <FontAwesomeIcon icon={faFileChartColumn} />
                                                <p className="columnHeader">Research & Reporting</p>
                                            </div>
                                            <a href="/car-sales-statistics/">
                                                <div className="productDropdown">
                                                    <h3>Residual Values</h3>
                                                    <p className="productDropdownText">Prediction of what your vehicle is worth today and in the future</p>
                                                </div>
                                            </a>

                                            <a href="/car-sales-statistics/">
                                                <div className="productDropdown">
                                                    <h3>Fleet Emissions Monitoring</h3>
                                                    <p className="productDropdownText">Ensure your vehicles will be emissions compliant</p>
                                                </div>
                                            </a>
                                            <a href="/car-sales-statistics/">
                                                <div className="productDropdown">
                                                    <h3>Dealer Analysis</h3>
                                                    <p className="productDropdownText">Analyse sales and servicing performance by PMA</p>
                                                </div>
                                            </a>
                                            <a href="/car-sales-statistics/">
                                                <div className="productDropdown">
                                                    <h3>Competitive Benchmarking</h3>
                                                    <p className="productDropdownText">Compare your performance against key competitors</p>
                                                </div>
                                            </a>
                                            <a href="/car-sales-statistics/">
                                                <div className="productDropdown">
                                                    <h3>Data Cleansing</h3>
                                                    <p className="productDropdownText">Correct and enrich your internal databases with our datasets</p>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="dropdownColumn">
                                            <div className="columnWrapper training">
                                                <Trak />
                                                <p className="columnHeader"> Training</p>
                                            </div>
                                            <a href="https://traklms.com/">
                                                <div className="productDropdown lms">
                                                    <h3>TRAK Learning Management System (LMS)</h3>
                                                    <p className="productDropdownText">Our industry leading Learning Management System designed for OEM's and dealers</p>
                                                </div>
                                            </a>
                                            <a href="https://traklms.com/">
                                                <div className="productDropdown lms">
                                                    <h3>Training Marketplace</h3>
                                                    <p className="productDropdownText">Instant access to over 100,000 Professional Development and Soft Skill eLearning modules</p>
                                                </div>
                                            </a>
                                            <a href="https://traklms.com/">
                                                <div className="productDropdown lms">
                                                    <h3>Training Content Services</h3>
                                                    <p className="productDropdownText">Custom eLearning modules, including training videos, product guides, technical modules and much more</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <Link className="navLink" to="/pricing/">
                                    Pricing
                                </Link>

                                <Link className="navLink" to="/docs/">
                                    Docss
                                </Link> */}

                                <a className="navLink" rel="nofollow" href="/contact-us/">
                                    Contact Us
                                </a>
                            </div>

                            <a className="navButton" href="/contact-us/">
                                <Button type="outline" className="navGetStartedSignUp" href="/contact-us/">
                                    Free Trial <FontAwesomeIcon icon={faArrowRight} />
                                </Button>
                            </a>
                        </div>

                        <nav className="mobileNavBar">
                            <div id="menuToggle">
                                <input type="checkbox" id="checkbox" name="checkbox" />
                                <span></span>
                                <span></span>
                                <span></span>
                                <ul id="menu">
                                    <p className="menuHeader">Products</p>
                                    <div className="menuSection">
                                        <div className="columnheaderWrapper">
                                            <FontAwesomeIcon icon={faBracketsCurly} />
                                            <p className="columnHeader"> API</p>
                                        </div>
                                        <div className="menuContainer">
                                            <div className="menuColumn">
                                                <li>
                                                    <Link to="/vin-decoder/">VIN Decoder</Link>
                                                </li>
                                                <li>
                                                    <Link to="/nevdis/">Vehicle Details</Link>
                                                </li>
                                                <li>
                                                    <Link to="/nevdis/">Build & Compliance</Link>
                                                </li>
                                                <li>
                                                    <Link to="/nevdis/">Written Off Check</Link>
                                                </li>
                                            </div>
                                            <div className="menuColumn">
                                                <li>
                                                    <Link to="/nevdis/">NEVDIS Plate to VIN</Link>
                                                </li>
                                                <li>
                                                    <Link to="/nevdis/">Registration Status</Link>
                                                </li>

                                                <li>
                                                    <Link to="/nevdis/">Stolen Check</Link>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menuSection">
                                        <div className="columnheaderWrapper">
                                            <FontAwesomeIcon icon={faDatabase} />
                                            <p className="columnHeader"> Data</p>
                                        </div>
                                        <div className="menuContainer">
                                            <div className="menuColumn">
                                                <li>
                                                    <Link to="/vin-decoder/">Electric Vehicle Forecast</Link>
                                                </li>
                                                <li>
                                                    <Link to="/nevdis/">New Car Calendar</Link>
                                                </li>
                                                <li>
                                                    <Link to="/nevdis/">New Car Market Forecast</Link>
                                                </li>
                                            </div>
                                            <div className="menuColumn">
                                                <li>
                                                    <Link to="/nevdis/">Real Car Pricing</Link>
                                                </li>
                                                <li>
                                                    <Link to="/nevdis/">New Car Offers</Link>
                                                </li>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="menuSection">
                                        <div className="columnheaderWrapper">
                                            <FontAwesomeIcon icon={faFileChartColumn} />
                                            <p className="columnHeader">Research & Reporting</p>
                                        </div>
                                        <div className="menuContainer">
                                            <div className="menuColumn">
                                                <li>
                                                    <Link to="/car-sales-statistics/">Residual Values</Link>
                                                </li>
                                                <li>
                                                    <Link to="/car-sales-statistics/">Fleet Emissions Monitoring</Link>
                                                </li>
                                                <li>
                                                    <Link to="/car-sales-statistics/">Dealer Analysis</Link>
                                                </li>
                                            </div>
                                            <div className="menuColumn">
                                                <li>
                                                    <Link to="/car-sales-statistics/">Competitive Benchmarking</Link>
                                                </li>
                                                <li>
                                                    <Link to="/car-sales-statistics/">Data Cleansing</Link>
                                                </li>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="menuSection">
                                        <div className="columnheaderWrapper">
                                            <TrakLogo className="traklogo" />
                                            <p className="columnHeader"> Training</p>
                                        </div>
                                        <div className="menuContainer">
                                            <div className="menuColumn">
                                                <li>
                                                    <Link to="https://traklms.com/">TRAK LMS</Link>
                                                </li>
                                                <li>
                                                    <Link to="https://traklms.com/">Training Content Services</Link>
                                                </li>
                                            </div>
                                            <div className="menuColumn">
                                                <li>
                                                    <Link to="https://traklms.com/">Training Marketplace</Link>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </nav>
                    </>
                )}
            </nav>
        </section>
    );
}
