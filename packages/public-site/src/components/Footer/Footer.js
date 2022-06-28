import './footer.scss';
import React from 'react';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
                                <Link to="/blueflag-termsofuse/">Terms of Use</Link>
                            </li>
                            <li>
                                <Link to="/blueflag-privacypolicy/">Privacy Policy</Link>
                            </li>
                            {/* <li><Link to="/generalterms">General Terms</Link></li>
                            <li><Link to="/nevdisgeneralterms">NEVDIS General Terms</Link></li> */}
                        </ul>
                    </div>
                    <div className="linkColumn">
                        <p>Company</p>
                        <ul>
                            <li>
                                <Link to="/about-us/">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact-us/">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="linkColumn second">
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
                    </div>
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
                        <a href="https://twitter.com/blueflag" className="twitter" alt="twitter" aria-label="Twitter" rel="nofollow">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCRA7zwmdOJkK1GobgkJwZXQ" className="youtube" alt="youtube" aria-label="youtube" rel="nofollow">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        <a href="https://www.linkedin.com/company/blueflag" className="linkedin" alt="linkedin" aria-label="linkedin" rel="nofollow">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/blueflag" className="github" alt="github" aria-label="github" rel="nofollow">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </Section>
            </Container>
        </>
    );
}
