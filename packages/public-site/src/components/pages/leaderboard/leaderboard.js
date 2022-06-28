import './leaderboard.scss';
import 'components/view/Hubspot.scss';
import React from 'react';

import Container from 'components/layout/Container';
import Section from 'components/layout/Section';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/pro-solid-svg-icons';

export default function Leaderboard() {
    return (
        <Container theme="light-blue" className="leaderboardFlex paddingY5">
            <Section className="paddingX6">
                <div className="trophyWrapper">
                    <FontAwesomeIcon icon={faTrophy} />
                </div>

                <h2 className="leaderboardSubHeader">Blue Flag Presents</h2>
                <h1 className="gradient-header leaderboardHeader">Gran Premio Del Australian Automobili Venditore Associazione 2022</h1>
                <p>Driver standings will be displayed below</p>

                <iframe title="leaderboardStandings" src="https://aleaderboard.com/w2/9cb0a7cc-0653-4ba2-bb17-5d8a0bfba069" width="100%" height="600px" class="eventWidget"></iframe>
            </Section>
        </Container>
    );
}
