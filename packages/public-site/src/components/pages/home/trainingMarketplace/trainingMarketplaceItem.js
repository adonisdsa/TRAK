import React from 'react';

export default function trainingMarketplaceItem(props) {
    const { children } = props;
    return (
        <>
            <div className="marketplaceBlock">
                <div className="padding2">{children}</div>
            </div>
        </>
    );
}
