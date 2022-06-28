import './workwith.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
import Button from 'components/Button';

import toyotaIcon from 'assets/images/Toyota.png';
import kiaIcon from 'assets/images/kia.png';
import hyundaiIcon from 'assets/images/Hyundai.png';
import subaruIcon from 'assets/images/subaru.png';
import fordIcon from 'assets/images/ford.png';
import nissanIcon from 'assets/images/nissan.png';
import audiIcon from 'assets/images/audi.png';
import genesisIcon from 'assets/images/genesis.png';
import lexusIcon from 'assets/images/lexus.png';
import mercedesIcon from 'assets/images/mercedes.png';
import porscheIcon from 'assets/images/porsche.png';
import volvoIcon from 'assets/images/volvo.png';
import peugeotIcon from 'assets/images/peugeot.png';
import citroenIcon from 'assets/images/citroen.png';
import jaglandroverIcon from 'assets/images/jaglandrover.png';
import hondaIcon from 'assets/images/honda.png';
import volkswagenIcon from 'assets/images/volkswagen.png';
import mitsubishiIcon from 'assets/images/mitsubishi.png';
import renaultIcon from 'assets/images/renault.png';
import bmwIcon from 'assets/images/bmw.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function HomeWorkWith() {
    return (
        <Container theme="dark" className="workwith-container paddingY4" autoMinHeight={false}>
            <Section>
                <div className="workwith-grid paddingY3">
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
                        <img src={citroenIcon} alt="Citroen logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={fordIcon} alt="Ford logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={nissanIcon} alt="Nissan logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={volvoIcon} alt="Volvo logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={audiIcon} alt="Audi logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={genesisIcon} alt="Genesis logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={peugeotIcon} alt="Peugeot logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={mercedesIcon} alt="Mercedes logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={renaultIcon} alt="Renault logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={lexusIcon} alt="Lexus logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={volkswagenIcon} alt="Volkswagen logo" width="100%" height="100%" />
                    </div>

                    <div className="cell">
                        <img src={jaglandroverIcon} alt="JLR logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={hondaIcon} alt="Honda logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={subaruIcon} alt="Subaru logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={kiaIcon} alt="Kia logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={porscheIcon} alt="Porshce logo" width="100%" height="100%" />
                    </div>
                    <div className="cell">
                        <img src={bmwIcon} alt="BMW logo" width="100%" height="100%" />
                    </div>
                </div>
            </Section>

            <Section className="companiesHome paddingY4 paddingXL4">
                <h2 className="productHeader homeSmall">See why the best companies work with Blue Flag to save time and money</h2>
                <p>Blue Flag helps you shorten forms, enrich data and save valuable time on research. We are the gold standard all-in-one platform for vehicle data intelligence.</p>

                <div className="paddingYB5">
                    <Button className="homeCompaniesGetStartedSignUp" to="https://app.blueflag.com.au/get-started" type="new-outline" color="primary">
                        Try It Now <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </Button>
                </div>
            </Section>
        </Container>
    );
}
