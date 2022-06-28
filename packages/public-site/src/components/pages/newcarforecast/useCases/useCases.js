import '../newcarforecast.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
import UseCaseItem from './useCaseItem';

export default function VINDecoderUseCases() {
    return (
        <>
            <Container theme="light-grey" className="paddingY5" autoMinHeight={false}>
                <Section className="useCases left">
                    <h2>Use Cases</h2>

                    <div className="usecase left">
                        <UseCaseItem>
                            <h3>Leasing Companies</h3>
                            <p>You can easily use VIN Decoder to verify that new additions to your fleet are accurately described in one easy step.</p>
                        </UseCaseItem>
                    </div>

                    <div className="usecase left">
                        <UseCaseItem>
                            <h3>Insurance Companies</h3>
                            <p>Precisely determine which type of vehicle the client is insuring. Be sure to accurately inform clients who may not know all the vehicle details.</p>
                        </UseCaseItem>
                    </div>
                </Section>
                <Section className="useCases right">
                    <div className="usecase right">
                        <UseCaseItem>
                            <h3>Automotive Aftermarket Suppliers</h3>
                            <p>Drill down to the exact vehicle a client has and therefore identify the mechanical or body parts needed more accurately.</p>
                        </UseCaseItem>
                    </div>

                    <div className="usecase right">
                        <UseCaseItem>
                            <h3>Automotive Valuation Suppliers</h3>
                            <p>You can accurately determine the value of a vehicle by using the VIN Decoder, which enables you to identify the exact vehicle.</p>
                        </UseCaseItem>
                    </div>
                </Section>
            </Container>
        </>
    );
}
