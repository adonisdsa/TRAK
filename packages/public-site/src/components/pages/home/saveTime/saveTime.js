import './saveTime.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/pro-duotone-svg-icons';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
import Button from 'components/Button';

import AutoFill from 'assets/images/autoFill.svg';

export default function saveTime() {
    return (
        <Container theme="light" className="autoFillFlex paddingY5">
            <Section className="paddingY3">
                <div className="howImage">
                    <AutoFill />
                </div>
            </Section>

            <Section>
                <h2 className="sectionHeader">Make it easy for your users to share their car details</h2>
                <p>
                    Create an amazing experience by using our{' '}
                    <a alt="vin decoder" href="https://blueflag.com.au/docs/api/products/vin_decoder/">
                        VIN Decoder API
                    </a>
                    . Search for a number plate or VIN and autofill your forms.
                </p>

                <div className="fieldsVIN paddingY4">
                    <div className="columnsVIN">
                        <div className="product-item light">
                            <FontAwesomeIcon icon={faCheckCircle} /> VIN
                        </div>
                        <div className="product-item light">
                            <FontAwesomeIcon icon={faCheckCircle} /> Make
                        </div>
                        <div className="product-item light">
                            <FontAwesomeIcon icon={faCheckCircle} /> Model
                        </div>
                        <div className="product-item light">
                            <FontAwesomeIcon icon={faCheckCircle} /> Series
                        </div>
                        <div className="product-item light">
                            <FontAwesomeIcon icon={faCheckCircle} /> Variant
                        </div>
                        <div className="product-item light">
                            <FontAwesomeIcon icon={faCheckCircle} /> Build Year
                        </div>
                        <div className="product-item light">
                            <FontAwesomeIcon icon={faCheckCircle} /> Model Year
                        </div>
                        <div className="product-item light">
                            <FontAwesomeIcon icon={faCheckCircle} /> Body Style
                        </div>
                    </div>
                    <div className="columnsVIN">
                        <div className="product-item light">
                            <FontAwesomeIcon icon={faCheckCircle} /> Doors
                        </div>
                        <div className="product-item light">
                            <FontAwesomeIcon icon={faCheckCircle} /> Seats
                        </div>
                        <div className="product-item light">
                            <FontAwesomeIcon icon={faCheckCircle} /> Fuel Type
                        </div>
                        <div className="product-item light">
                            <FontAwesomeIcon icon={faCheckCircle} /> Drive
                        </div>
                        <div className="product-item light">
                            <FontAwesomeIcon icon={faCheckCircle} /> Engine Cylinders
                        </div>
                        <div className="product-item light">
                            <FontAwesomeIcon icon={faCheckCircle} /> Engine Size Litres
                        </div>
                        <div className="product-item light">
                            <FontAwesomeIcon icon={faCheckCircle} /> Transmission Type
                        </div>
                    </div>
                </div>

                <div className="paddingYT4">
                    <Button className="homeEmpowerGetStartedSignUp" to="https://app.blueflag.com.au/get-started" type="quiet" color="primary">
                        Create a free account and start testing <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </Button>
                </div>
            </Section>
        </Container>
    );
}
