import React from 'react';

// import {useState} from 'react';

export default function FeaturesItem(props) {
    // const [switchToggled, setSwitchToggled] = useState(false);

    // const ToggleSwitch = () => {
    //     setSwitchToggled(!switchToggled);

    //     console.log(switchToggled);
    // };

    // <div className={switchToggled ? 'isactive' : 'customer'} onClick={ToggleSwitch}></div>

    const { children } = props;
    return (
        <>
            <div className="featureItem">
                <div className="textArea">
                    <div className="paddingY2 paddingX2 features">{children}</div>
                </div>
            </div>
        </>
    );
}
