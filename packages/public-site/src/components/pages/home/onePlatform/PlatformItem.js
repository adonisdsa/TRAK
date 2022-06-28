import React from 'react';

export default function PlatformItem(props) {
    const { children } = props;
    return (
        <>
            <div className="platformBlock">
                <div className="padding4">{children}</div>
            </div>
        </>
    );
}
