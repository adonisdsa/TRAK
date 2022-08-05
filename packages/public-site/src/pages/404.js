import './404.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Helmet } from 'react-helmet';
import ErrorImage from 'assets/images/errorImage.svg';

import Navigation from 'components/Navigation';
import View from 'components/View';
import Button from 'components/Button';
import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

export default function NotFound() {
    return (
        <View>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Uh Oh! | TRAK</title>
                <link rel="canonical" href="/404-not-found" />
            </Helmet>
            <Navigation hideCTA />
            <Container className="paddingY5">
                <Section className="NotFound">
                    <div className="imageWrapper">
                        <ErrorImage />
                    </div>
                    <h1>Uh Oh! Page Not Found</h1>
                    <p className="textWrapper paddingY4">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
                    <Button type="fill" to="/">
                        Back to Home <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                    </Button>
                </Section>
            </Container>
            {/* <Footer /> */}
        </View>
    );
}
