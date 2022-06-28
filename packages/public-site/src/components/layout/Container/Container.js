import './container.scss';
import React from 'react';

export default function Container(props) {
    const className = props.className || '';
    const type = props.type || 'page';
    const theme = props.theme || 'light';
    const autoMinHeight = props.autoMinHeight === false ? false : true;

    const wrapperClasses = ['container'];
    const classes = className ? [className] : [];

    // Layout
    if (type !== 'page' && type !== 'full' && type !== 'blog') {
        throw new Error(`Unkown Container type = ${type}`);
    }

    classes.push(`container-${type}`);

    // Colours
    if (theme !== 'light' && theme !== 'dark' && theme !== 'dark-secondary' && theme !== 'light-grey' && theme !== 'light-blue' && theme !== 'blue-gradient') {
        throw new Error(`Unkown theme = ${theme}`);
    }

    wrapperClasses.push(`theme-${theme}`);

    if (autoMinHeight) {
        wrapperClasses.push('autoMinHeight');
    }

    return (
        <div className={wrapperClasses.join(' ')}>
            <div className={classes.join(' ')}>{props.children}</div>
        </div>
    );
}
