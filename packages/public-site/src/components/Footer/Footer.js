import './footer.scss';
import React from 'react';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
import Button from 'components/Button';

export default function Footer() {
    return (
        <>
            <Container theme="dark" autoMinHeight={false} className="Footer-content paddingY4">
                <Section>
                    <div className="Footer-title">Need help getting started?</div>

                    <div className="paddingY4">
                        <Button to="/contact-us/" color="white">
                            Talk to an expert <FontAwesomeIcon icon={faArrowRight} />
                        </Button>
                    </div>
                </Section>
                <Section className="PageLinks">
                    <div className="linkColumn last">
                        <p>Legal</p>
                        <ul>
                            <li>
                                <Link to="/terms-of-use/">Terms of Use</Link>
                            </li>
                            <li>
                                <Link to="/privacy-policy/">Privacy Policy</Link>
                            </li>
                            {/* <li><Link to="/generalterms">General Terms</Link></li>
                            <li><Link to="/nevdisgeneralterms">NEVDIS General Terms</Link></li> */}
                        </ul>
                    </div>
                    {/* <div className="linkColumn">
                        <p>Company</p>
                        <ul>
                            <li>
                                <Link to="/about-us/">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact-us/">Contact Us</Link>
                            </li>
                        </ul>
                    </div> */}
                    {/* <div className="linkColumn second">
                        <p>Products</p>
                        <ul>
                            <li>
                                <Link to="/car-sales-statistics/">Car Sales Statistics</Link>
                            </li>
                            <li>
                                <Link to="/real-car-pricing/">Real Car Pricing</Link>
                            </li>
                            <li>
                                <Link to="/vin-decoder/">VIN Decoder</Link>
                            </li>
                            <li>
                                <Link to="/nevdis/">NEVDIS</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="linkColumn first">
                        <p>Blue Flag</p>
                        <ul>
                            <li>
                                <Link to="/pricing/">Pricing</Link>
                            </li>
                            <li>
                                <Link to="/blog/">Blog</Link>
                            </li>
                            <li>
                                <Link to="/docs/">Docs</Link>
                            </li>
                        </ul>
                    </div> */}
                </Section>
            </Container>

            <Container theme="dark-secondary" autoMinHeight={false}>
                <Section>
                    <div className="Footer-legals">
                        <span>Copyright &copy; 2021 Blue Flag Pty Ltd</span>
                    </div>
                </Section>
                <Section>
                    <div className="Footer-socials">
                        <a href="https://twitter.com/traklms" className="twitter" alt="twitter" aria-label="Twitter" rel="nofollow">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCuVgoHcf0cUx8kOtj5GqV4g" className="youtube" alt="youtube" aria-label="youtube" rel="nofollow">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        <a href="https://www.facebook.com/TRAK.LMS/" className="facebook" alt="facebook" aria-label="facebook" rel="nofollow">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.instagram.com/trak_lms/" className="github" alt="instagram" aria-label="instagram" rel="nofollow">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </Section>
            </Container>
        </>
    );
}
