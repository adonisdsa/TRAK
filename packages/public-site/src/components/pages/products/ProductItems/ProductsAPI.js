import './Products.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

import ProductItems from './productItem';

export default function ProductsAPI() {
    return (
        <Container theme="light-grey" className="paddingY3">
            <Section>
                <h2 className="sectionHeader paddingYB4">API</h2>
                <div className="productItem-grid">
                    <div className="productItem-box-wrapper">
                        <div className="productItemBox">
                            <ProductItems>
                                <div className="productItemTextWrapper">
                                    <h3>VIN Decoder</h3>
                                    <p className="productItemText">Find useful specific details of your vehicle</p>
                                </div>
                            </ProductItems>
                        </div>
                    </div>

                    <div className="productItem-box-wrapper">
                        <div className="productItemBox">
                            <ProductItems>
                                <div className="productItemTextWrapper">
                                    <h3>NEVDIS Plate to VIN</h3>
                                    <p className="productItemText">vin, chassis, registration plate, registration state</p>
                                </div>
                            </ProductItems>
                        </div>
                    </div>

                    <div className="productItem-box-wrapper">
                        <div className="productItemBox">
                            <ProductItems>
                                <div className="productItemTextWrapper">
                                    <h3>Vehicle Details</h3>
                                    <p className="productItemText">make, model, colour, vehicle type, body type</p>
                                </div>
                            </ProductItems>
                        </div>
                    </div>

                    <div className="productItem-box-wrapper">
                        <div className="productItemBox">
                            <ProductItems>
                                <div className="productItemTextWrapper">
                                    <h3>Registration Status</h3>
                                    <p className="productItemText">registration status, registration expiry date</p>
                                </div>
                            </ProductItems>
                        </div>
                    </div>

                    <div className="productItem-box-wrapper">
                        <div className="productItemBox">
                            <ProductItems>
                                <div className="productItemTextWrapper">
                                    <h3>Build and Compliance</h3>
                                    <p className="productItemText">compliance plate, year of manufacture</p>
                                </div>
                            </ProductItems>
                        </div>
                    </div>

                    <div className="productItem-box-wrapper">
                        <div className="productItemBox">
                            <ProductItems>
                                <div className="productItemTextWrapper">
                                    <h3>Stolen Check</h3>
                                    <p className="productItemText">stolen type, jurisdiction, reported date, summary</p>
                                </div>
                            </ProductItems>
                        </div>
                    </div>

                    <div className="productItem-box-wrapper">
                        <div className="productItemBox">
                            <ProductItems>
                                <div className="productItemTextWrapper">
                                    <h3>Written Off Check</h3>
                                    <p className="productItemText">damage codes, incident code, reported date, jurisdiction, type code</p>
                                </div>
                            </ProductItems>
                        </div>
                    </div>
                </div>
            </Section>
        </Container>
    );
}
