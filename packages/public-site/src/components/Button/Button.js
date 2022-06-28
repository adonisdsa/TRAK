import './button.scss';
import React from 'react';
import { Link } from 'gatsby';

export default function Container(props) {
    const className = props.className || '';
    const classes = className ? [className] : [];
    const type = props.type || 'outline';
    const color = props.color || 'primary-dark';

    if (type !== 'outline' && type !== 'fill' && type !== 'quiet' && type !== 'new-fill' && type !== 'new-outline') {
        throw new Error(`Unkown Button type = ${type}`);
    }

    classes.push(`Button-${type}`);
    classes.push(`Button--${color}`);

    return (
        <div className="Button">
            <Link to={props.to} className={classes.join(' ')}>
                {props.children}
            </Link>
        </div>
    );
}
