import './base.scss';

import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faClipboardListCheck, faTable } from '@fortawesome/pro-light-svg-icons';
import { faFlask, faExpandArrowsAlt, faArrowRight, faFilter, faHandHoldingUsd, faBolt, faGasPump, faCar, faHistory } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faSpinnerThird, faFileAlt, faCars, faSyncAlt } from '@fortawesome/pro-duotone-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faRocket, faThList, faSearch, faEngineWarning, faCarCrash, faAddressCard, faInfoCircle, faChartNetwork, faCalendarAlt } from '@fortawesome/pro-regular-svg-icons';
import { faTwitter, faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Icons to include in this project
library.add(faAddressCard);
library.add(faCarCrash);
library.add(faCheckCircle);
library.add(faChevronRight);
library.add(faClipboardListCheck);
library.add(faEngineWarning);
library.add(faSearch);
library.add(faThList);
library.add(faFlask);
library.add(faRocket);
library.add(faExpandArrowsAlt);
library.add(faArrowRight);
library.add(faEnvelope);
library.add(faInfoCircle);
library.add(faSpinnerThird);
library.add(faTwitter);
library.add(faGithub);
library.add(faYoutube);
library.add(faLinkedin);
library.add(faFilter);
library.add(faChartNetwork);
library.add(faHandHoldingUsd);
library.add(faTable);
library.add(faFileAlt);
library.add(faCars);
library.add(faCar);
library.add(faSyncAlt);
library.add(faBolt);
library.add(faCalendarAlt);
library.add(faGasPump);
library.add(faHistory);

export default function View(props) {
    return <>{props.children}</>;
}
