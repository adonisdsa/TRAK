import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileAlt, faTerminal } from '@fortawesome/free-solid-svg-icons'

// Icons to include in this project
library.add(faTerminal);
library.add(faFileAlt);

export default function View(props) {
    return <>{props.children}</>;
}
