import './section.scss';
import React from 'react';

export default function Section(props) {
    const className = props.className || '';
    const type = props.type || 'half';

    if (type !== 'half' && type !== 'full') {
        throw new Error(`Unkown Section type = ${type}`);
    }

    const classes = ['section', `section-${type}`];

    if (className) {
        classes.push(className);
    }

    return <section className={classes.join(' ')}>{props.children}</section>;
}
