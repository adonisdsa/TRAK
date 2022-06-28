import './pricing.scss';

import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

import toyotaIcon from 'assets/images/Toyota.png';
import kiaIcon from 'assets/images/kia.png';
import hyundaiIcon from 'assets/images/Hyundai.png';
import fordIcon from 'assets/images/ford.png';
import mitsubishiIcon from 'assets/images/mitsubishi.png';
import subaruIcon from 'assets/images/subaru.png';
import nissanIcon from 'assets/images/nissan.png';
import volvoIcon from 'assets/images/volvo.png';
import volkswagenIcon from 'assets/images/volkswagen.png';
import bmwIcon from 'assets/images/bmw.png';

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
                        <img src={mitsubishiIcon} alt="Mistubishi logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={hyundaiIcon} alt="Hyundai logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={fordIcon} alt="Ford logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={kiaIcon} alt="Kia logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={bmwIcon} alt="Kia logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={subaruIcon} alt="Kia logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={volkswagenIcon} alt="Kia logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={volvoIcon} alt="Kia logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={nissanIcon} alt="Kia logo" width="100%" height="100%" />
                    </div>
                </div>
            </Section>
        </Container>
    );
}
