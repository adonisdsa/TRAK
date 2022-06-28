import React from 'react';
import Faq from 'react-faq-component';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

const data = {
    rows: [
        {
            title: 'Are there any set-up fees or account keeping fees?',
            content: `No, there are no set-up or account keeping fees.`,
        },
        {
            title: 'What is a starter / sandbox?',
            content: `The sandbox area allows you to test our API using our free sample data. You can test as much as you like for free in the sandbox.`,
        },
        {
            title: 'What does pay per request mean?',
            content: `Pay per request means that you only pay for the number of requests you make. There are no other fees or charges.`,
        },
        {
            title: 'How much is a request?',
            content: `The price per request will depend on the product. Each product has its own rate. After you create your account and submit the application form, you will be able to view the pricing chart.`,
        },
        {
            title: 'Can I make free requests?',
            content: `Yes, you can make free requests in the sandbox testing area. Any live requests will be charged.`,
        },
        {
            title: 'How do we purchase requests?',
            content: `The cost of requests will be deducted from your account balance. Once you have no more credit, we will stop fufilling your requests until you deposit more funds into your account.`,
        },
        {
            title: 'How do I pay and what payment methods are allowed?',
            content: 'We accept payment via credit card. We support several credit card brands including large global networks such as VISA, Mastercard and American Express.',
        },

        {
            title: 'Will my credit card data be private and safe?',
            content: `Yes, all card numbers are encrypted at rest with AES-256. Decryption keys are stored on separate machines. Blue Flag’s infrastructure for storing, decrypting, and transmitting card numbers runs in a separate hosting environment, and doesn’t share any credentials with Blue Flag’s primary services (API, website, and so on).`,
        },
        {
            title: 'How do I make a large number of requests frequently?',
            content: `Talk to one of our experts about your volume levels and data requirements.`,
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: 'blue',
    rowTitleColor: 'blue',
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export default function PricingFAQ() {
    return (
        <Container className="FAQ paddingY4 paddingX6" theme="light-grey" autoMinHeight={false}>
            <Section type="full">
                <h2 className="FAQTitle paddingY4">Frequently Asked Questions</h2>
                <Faq data={data} styles={styles} config={config} />
            </Section>
        </Container>
    );
}
