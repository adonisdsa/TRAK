import './Products.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

import ProductItems from './productItem';

export default function ProductsTraining() {
    return (
        <Container theme="light-grey" className="paddingY3">
            <Section>
                <h2 className="sectionHeader">Training</h2>
                <div className="productItem-grid">
                    <div className="productItem-box-wrapper">
                        <div className="productItemBox">
                            <ProductItems>
                                <div className="productItemTextWrapper">
                                    <h3>TRAK Learning Management System (LMS)</h3>
                                    <p className="productItemText">Our industry leading Learning Management System designed for OEM's and dealers</p>
                                </div>
                            </ProductItems>
                        </div>
                    </div>

                    <div className="productItem-box-wrapper">
                        <div className="productItemBox">
                            <ProductItems>
                                <div className="productItemTextWrapper">
                                    <h3>Training Marketplace</h3>
                                    <p className="productItemText">Instant access to over 100,000 Professional Development and Soft Skill eLearning modules</p>
                                </div>
                            </ProductItems>
                        </div>
                    </div>

                    <div className="productItem-box-wrapper">
                        <div className="productItemBox">
                            <ProductItems>
                                <div className="productItemTextWrapper">
                                    <h3>Training Content Services</h3>
                                    <p className="productItemText">Custom eLearning modules, including training videos, product guides, technical modules and much more</p>
                                </div>
                            </ProductItems>
                        </div>
                    </div>
                </div>
            </Section>
        </Container>
    );
}
