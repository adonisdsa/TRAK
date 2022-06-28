---
sidebar_position: 1
hide_table_of_contents: true
slug: vin-decoder
---

import { Stack, HStack, Flex } from "@chakra-ui/react"

<HStack>

<Box className="boxContainer">
<Box className="attributes" h="100%" px="40px" py="10px">

Find useful specific details of your vehicle. VIN Decoder covers all passenger and light commerical vehicle back to 1990.

<br /> <br />

**Attributes**
___

`vin` <span className="smaller-text">string</span>

A unique 17 character code used to identify individual motor vehicles.

___

`make` <span className="smaller-text">string</span>

Manufacturer of the vehicle.

___

`model` <span className="smaller-text">string</span>

The specific product within the manufacturers range.

___

`series` <span className="smaller-text">string</span>

Internal code denoting the manufacturers product.

___

`variant` <span className="smaller-text">string</span>

Manufacturers specific variant or grade of the vehicle.

___

`build_year` <span className="smaller-text">integer</span>

Year the vehicle was assembled.

___

`model_year` <span className="smaller-text">float</span>

Manufacturers model year of production.

___

`body_style` <span className="smaller-text">string</span>

Body style of the vehicle.

___

`doors` <span className="smaller-text">integer</span>

Number of doors fitted to the vehicle.

___

`seats` <span className="smaller-text">integer</span>

Number of seats fitted to the vehicle.

___

`fuel.type` <span className="smaller-text">string</span>

Fuel type powering the vehicle.

___

`drive` <span className="smaller-text">string</span>

Which axle and wheels are driving the vehicle.

___

`engine.cylinders` <span className="smaller-text">integer</span>

Number of individual cylinders within the engine.

___

`engine.size_litres` <span className="smaller-text">float</span>

Size of the engine measured in litres.

___

`transmission.type` <span className="smaller-text">string</span>

Type of transmission fitted to the vehicle.

___


</Box>

<Box className="box2" h="100%" px="40px" py="10px">

<br />

<div className="method-example-response">
    <div className="method-example-request-topbar">
        <div className="method-example-request-title">ENDPOINT URL</div>
    </div>
    <pre className="IntroSection-pre">

```
https://sandbox.blueflag.com.au/vin_decoder?vin=KMHH351EMKU00TEST"
```

</pre>
</div>

<div className="method-example-response">
    <div className="method-example-request-topbar">
        <div className="method-example-request-title">EXAMPLE REQUEST</div>
    </div>
    <pre className="IntroSection-pre">

```bash
curl "https://sandbox.blueflag.com.au/vin_decoder?vin=KMHH351EMKU00TEST" -H "Authorization: secret_SANDBOX_f1nlZOh0Xr1JvMgJy0d0l9i5JybnBEAYfl7isuU0_o-1GkBsaN8f"
```

</pre>
</div>

<div className="method-example-response">
    <div className="method-example-request-topbar">
        <div className="method-example-request-title">EXAMPLE RESPONSE</div>
    </div>

```json
{
    "request_id": "baf6dcfb-0a34-4881-9365-87dffc9d1e31",
    "result": {
        "vin": "KMHH351EMKU00TEST",
        "make": "Mercedes-Benz",
        "model": "C-Class",
        "series": "PD2",
        "variant": "ACTIVE",
        "build_year": 2019,
        "model_year": 2019,
        "body_style": "Hatchback",
        "doors": 4,
        "seats": 5,
        "fuel": {
            "type": "Petrol"
        },
        "drive": "FWD",
        "engine": {
            "cylinders": 4,
            "size_litres": 2
        },
        "transmission": {
            "type": "Auto"
        }
    }
}
```

</div>

</Box>
</Box>

</HStack>





