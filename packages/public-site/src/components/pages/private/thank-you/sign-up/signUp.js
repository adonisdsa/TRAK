import './signUp.scss';
import React from 'react';
import Success from 'assets/images/Success.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';
import Button from 'components/Button';

export default function SignUp() {
    return (
        <Container className="SignUpThanks paddingY5">
            <Section className="paddingY4">
                <h1>Thank You for Signing Up!</h1>
                <p className="paddingY4">
                    You're one podium finish closer to accessing our vehicle data. One of our team members will get in touch with you soon so please keep an eye on your email inbox.
                </p>
                <p className="ctaHeader paddingY2">In the meantime, if you'd like to invite a colleague or recommend Blue Flag to someone. Simply click the button below.</p>

                <Button to="https://app.blueflag.com.au/get-started" type="fill" color="primary">
                    Invite Colleague <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                </Button>
            </Section>

            <Section className="paddingX3 paddingY4">
                <img src={Success} alt="Thank You Sign Up"></img>
            </Section>
        </Container>
    );
}
