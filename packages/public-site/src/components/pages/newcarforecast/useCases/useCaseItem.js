import React from 'react';

export default function CaseItem(props) {
    const { children } = props;
    return (
        <>
            <div className="textArea">
                <div className="padding3">{children}</div>
            </div>
        </>
    );
}
