import React from 'react';

export default function ServiceItem(props) {
    const { children } = props;

    return (
        <>
            <div className="services-block">
                <div className="services-wrapper">{children}</div>
            </div>
        </>
    );
}
