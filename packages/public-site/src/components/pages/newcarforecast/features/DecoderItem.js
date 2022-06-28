import React from 'react';

// import {useState} from 'react';

export default function VehicleItem(props) {
    // const [switchToggled, setSwitchToggled] = useState(false);

    // const ToggleSwitch = () => {
    //     setSwitchToggled(!switchToggled);

    //     console.log(switchToggled);
    // };

    // <div className={switchToggled ? 'isactive' : 'customer'} onClick={ToggleSwitch}></div>

    const { children } = props;
    return (
        <>
            <div className="customer">
                <div className="textArea">
                    <div className="paddingY3 paddingX4 features">{children}</div>
                </div>
            </div>
        </>
    );
}
