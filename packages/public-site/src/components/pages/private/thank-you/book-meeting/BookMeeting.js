import './BookMeeting.scss';
import React from 'react';
import Button from 'components/Button';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

import MeetingBooked from 'assets/images/book-meeting.svg';

export default function ContactSales() {
    return (
        <Container theme="light-blue" className="ContactSalesStatistics paddingY5">
            <Section>
                <MeetingBooked className="meetingImage" />
                <h1 className="thankyouheader">Thank you for your submission!</h1>
                <p className="paddingY3">We'll be in touch shortly to book in an introductory meeting.</p>
                <p className="paddingYB3">In the meantime...</p>
                <div className="meetingCTA">
                    <h2 className="paddingY3 testingHeader">Start integrating and testing today!</h2>
                    <Button type="new-fill" color="primary" to="https://app.blueflag.com.au/get-started" href="https://app.blueflag.com.au/get-started">
                        Sign up to our API
                    </Button>
                    <p className="">and start making test requests to our sandbox in seconds</p>
                </div>
            </Section>
        </Container>
    );
}
