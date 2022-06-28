import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

export default function AboutUs() {
    return (
        <Container className="paddingY5">
            <Section>
                <h2>About Us</h2>
                <p>
                    Based in Melbourne, our all Australian company is made up of developers, designers & professional problem solvers who provide a range of creative & analytical services to the
                    automotive and related industries. We specialise in transforming information into insight, which assists in sales, marketing and strategic planning. Our team not only understands
                    the current marketplace, we know where it's going…globally.
                </p>
            </Section>

            <Section>
                <blockquote className="paddingX3">We work with a range of companies from government agencies to international organisations and leading automotive brands.</blockquote>
            </Section>
        </Container>
    );
}
