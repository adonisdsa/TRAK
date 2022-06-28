import '../realcarpricing.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

import DataSources from 'assets/images/realcarpricingsourcesnp.svg';
import DecoderItem from 'components/pages/vindecoder/trustedData/vehicleItem';

import Button from 'components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function VINDecoderData() {
    return (
        <>
            <Container theme="light" className="paddingY5" autoMinHeight={false}>
                <Section className="vinVehicle">
                    <p className="trustData header">Data</p>
                    <h2>Data Sources</h2>

                    <DecoderItem>
                        <div className="copyVIN">
                            <h3>Our Data</h3>
                            <p>We incorporate a number of ingredients from our database, including:</p>
                            <p className="textData">
                                <li>Vehicle RRP and Driveway Pricing (and the change over time of both).</li>
                                <li>Dealer delivery fees.</li>
                                <li>Price of factory options and accessories and the average take up of both.</li>
                                <li>Advertised retail offers and the dollar value of each component of an offer.</li>
                                <li>Supply constraints and order wait times.</li>
                                <li>A vehicle's desirability.</li>
                                <li>Brand and dealers willingness to discount.</li>
                            </p>
                        </div>
                    </DecoderItem>

                    <DecoderItem>
                        <div className="copyVIN">
                            <h3>Other Data</h3>
                            <p>
                                We also utilise data from various industry sources including data partners, government, importers, wholesalers and OEMs. This helps us enrich our data and improve the
                                quality of our information.
                            </p>
                        </div>
                    </DecoderItem>

                    <div className="paddingY3">
                        <Button className="vinDecoderDataGetStartedSignUp" to="https://blueflag.com.au/contact/?contact_sales_product=Real%Car%20Pricing" type="fill" color="primary">
                            See how we can help <FontAwesomeIcon icon={faArrowRight} />
                        </Button>
                    </div>
                </Section>

                <Section className="sourcesImage">
                    <DataSources />
                </Section>
            </Container>
        </>
    );
}
