import React from 'react';

export default function ProductItem(props) {
    const { children } = props;

    return (
        <>
            <div className="ProductItem-block">
                <div className="ProductItem-wrapper">{children}</div>
            </div>
        </>
    );
}
