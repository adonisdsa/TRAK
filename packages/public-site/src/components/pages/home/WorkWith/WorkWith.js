import './workwith.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
import Button from 'components/Button';

import toyotaIcon from 'assets/images/Toyota.png';
import hyundaiIcon from 'assets/images/Hyundai.png';
import lexusIcon from 'assets/images/lexus.png';
import mitsubishiIcon from 'assets/images/mitsubishi.png';
import avidaIcon from 'assets/images/avida.png';
import genesisIcon from 'assets/images/genesis.png';

export default function HomeWorkWith() {
    return (
        <Container theme="dark" className="workwith-container paddingY4" autoMinHeight={false}>
            <Section>
                <div className="workwith-grid paddingY3">
                    <div className="cell">
                        <img src={toyotaIcon} alt="Toyota logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={lexusIcon} alt="Lexus logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={genesisIcon} alt="Genesis logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={mitsubishiIcon} alt="Mistubishi logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={hyundaiIcon} alt="Hyundai logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={avidaIcon} alt="AVIDA logo" width="100%" height="100%" />
                    </div>
                </div>
            </Section>

            <Section className="companiesHome paddingY4 paddingXL4">
                <h2 className="productHeader homeSmall gradient-header">Some of the leading brands we work with</h2>
                <p>
                    TRAK has and continues to be a success, achieving corporate objectives and values, continuous growth in dealer engagement through Learning and Development, further enhancing cross
                    function capability, providing direct sales support for staff & customers at point of sale. We’re doing great things for our network; we continue to support and add value thanks to
                    TRAK.
                </p>

                <div className="paddingYB5">
                    <Button className="homeCompaniesGetStartedSignUp" to="/contact-us/" type="new-outline" color="primary">
                        Try It Now <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </Button>
                </div>
            </Section>
        </Container>
    );
}
