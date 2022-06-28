---
sidebar_position: 3
hide_table_of_contents: true
slug: vehicle_details_registration_status_build_and_compliance
---

import { Stack, HStack, Flex } from "@chakra-ui/react"

<HStack>

<Box className="boxContainer">
<Box className="attributes" h="100%" px="40px" py="10px">

This is a combination of [Vehicle Details](/docs/api/products/nevdis/vehicle_details), [Registration Status](/docs/api/products/nevdis/registration_status) & [Build and Compliance](/docs/api/products/NEVDIS/build_and_compliance)

<br/><br/>

**Attributes**
___

`vin` <span className="smaller-text">string</span>
<p>
A unique 17 character code used to identify individual motor vehicles.
</p>

___

`chassis` <span className="smaller-text">string</span>
<p>
A unique code used to identify individual motor vehicles. Used before January 1989 in Australia.
</p>

___

`registration.plate` <span className="smaller-text">string</span>
<p>
An alphanumeric code used to identify vehicles. The plate is visible on the front and rear of most vehicles.
</p>

___

`registration.state` <span className="smaller-text">string</span>

The area within Australia where the vehicle is registered.
<p className="smaller-text">One of: ACT, NSW, NT, QLD, SA, TAS, VIC, WA</p>

___

`make` <span className="smaller-text">string</span>
<p>
The manufacturer of the vehicle.
</p>

___

`model` <span className="smaller-text">string</span>
<p>
The specific product within the manufacturers range.
</p>

___

`colour` <span className="smaller-text">string</span>
<p>
Primary paint colour of the vehicle noted by the road authority.
</p>

___

`body_type` <span className="smaller-text">string</span>
<p>
Classification of the vehicle shape noted by the road authority.
</p>

___

`vehicle_type` <span className="smaller-text">string</span>
<p>
Category that the vehicle is registered as.
</p>

___

`engine_number` <span className="smaller-text">string</span>
<p>
A unique alphanumeric sequence stamped onto the engine by the manufacturer.
</p>

___

`compliance_plate` <span className="smaller-text">string (YYYY-MM)</span>

Month and year the vehicle was confirmed as meeting local regulations.

<p className="smaller-text">Not available for TAS</p>

___

`year_of_manufacture` <span className="smaller-text">string (YYYY)</span>

Year the vehicle was assembled.

<p className="smaller-text"> Not available for NSW </p>

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
https://sandbox.blueflag.com.au/nevdis/vehicle_details_registration_status_build_and_compliance?plate=TEST00&state=VIC"
```

</pre>
</div>

<div className="method-example-response">
    <div className="method-example-request-topbar">
        <div className="method-example-request-title">EXAMPLE REQUEST</div>
    </div>
    <pre className="IntroSection-pre">

```bash
curl "https://sandbox.blueflag.com.au/nevdis/vehicle_details_registration_status_build_and_compliance?plate=TEST00&state=VIC" -H "Authorization: secret_SANDBOX_f1nlZOh0Xr1JvMgJy0d0l9i5JybnBEAYfl7isuU0_o-1GkBsaN8f"
```

</pre>
</div>

<div className="method-example-response">
    <div className="method-example-request-topbar">
        <div className="method-example-request-title">EXAMPLE RESPONSE</div>
    </div>
    <pre className="IntroSection-pre">

```json
{
  "request_id": "118d9c6a-55c8-4abf-a220-d89da3b1f692",
  "result": [
    {
      "vin": "KMHH351EMKU00TEST",
      "chassis": null,
      "registration": {
        "plate": "TEST00",
        "state": "VIC",
        "status": "REGISTERED",
        "expiry_date": "2022-01-16"
      },
      "make": "HYUNDAI",
      "model": "I30",
      "colour": "SILVER OR CHROME",
      "body_type": "CAR/SEDAN",
      "vehicle_type": "CAR / SMALL PASSENGER VEHICLE",
      "engine_number": "G40000000000",
      "compliance_plate": "2019-07",
      "year_of_manufacture": "2019"
    }
  ]
}
```

</pre>
</div>

</Box>
</Box>

</HStack>