import './API.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
import Button from 'components/Button';

import CodeBlock from 'assets/images/codeExample.svg';

export default function saveTime() {
    return (
        <Container theme="light" className="autoFillFlex paddingY6" autoMinHeight={false}>
            <Section>
                <div className="codeImage">
                    <CodeBlock />
                </div>
            </Section>

            <Section>
                <h2 className="sectionHeader">The most easy-to-use API</h2>
                <p>Our Vehicle Data Platform (VDP) allows you or your development team to connect once and access all of our datasets. This keeps your code simple, secure and easier to maintain.</p>

                <div className="paddingYB4">
                    <Button to="https://blueflag.com.au/docs/api/" type="quiet" color="primary">
                        Read Docs <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </Button>
                </div>
            </Section>
        </Container>
    );
}
