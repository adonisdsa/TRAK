import './pricing.scss';

import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

import toyotaIcon from 'assets/images/Toyota.png';
import hyundaiIcon from 'assets/images/Hyundai.png';
import lexusIcon from 'assets/images/lexus.png';
import mitsubishiIcon from 'assets/images/mitsubishi.png';
import avidaIcon from 'assets/images/avida.png';
import genesisIcon from 'assets/images/genesis.png';

export default function pricingTiers() {
    return (
        <Container theme="dark" className="workwith-container paddingYB4" autoMinHeight={false}>
            <Section>
                <h3 className="pricingclientsHeader">trusted by the best companies to save time and money</h3>
                <div className="workwith-grid-pricing paddingY3">
                    <div className="cell">
                        <img src={toyotaIcon} alt="Toyota logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={hyundaiIcon} alt="Mistubishi logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={lexusIcon} alt="Hyundai logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={mitsubishiIcon} alt="Ford logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={avidaIcon} alt="Kia logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={genesisIcon} alt="Kia logo" width="100%" height="100%" />
                    </div>
                </div>
            </Section>
        </Container>
    );
}
