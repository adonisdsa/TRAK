import React from 'react';

export default function ServiceItem(props) {
    const { children } = props;
    return (
        <>
            <div className="pricing-block">
                <div className="padding4">{children}</div>
            </div>
        </>
    );
}
