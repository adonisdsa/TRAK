import './productHub.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
import Button from 'components/Button';

import ProductHub from 'assets/images/Picture2.png';

export default function productHub() {
    return (
        <Container theme="light" className="autoFillFlex paddingY5">
            <Section className="paddingY3">
                <div className="howImage">
                    <img src={ProductHub} alt="Product Hub" />
                </div>
            </Section>

            <Section>
                <h2 className="sectionHeader">Product Hub</h2>
                <p>
                    Find all the relevant information and training curated to your product lineup. Keep your learners ahead of the game by providing them with the latest product launch materials,
                    owner manuals, product specifications, competitor data, pretty much anything which is beneficial to the development and knowledge of your staff.
                </p>
                <div className="paddingY4">
                    <Button className="homeEmpowerGetStartedSignUp" to="/contact-us/" type="quiet" color="primary">
                        Create a free account and start testing <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </Button>
                </div>
            </Section>
        </Container>
    );
}
