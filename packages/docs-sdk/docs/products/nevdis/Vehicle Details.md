---
sidebar_position: 2
hide_table_of_contents: true
slug: vehicle_details
---

import { Stack, HStack, Flex } from "@chakra-ui/react"

<HStack>

<Box className="boxContainer">
<Box className="attributes" h="100%" px="40px" py="10px">

When a vehicle is first registered, the dealership or vehicle owner provides the vehicle information to the road traffic authority.

<br /> <br />

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

</Box>

<Box className="box2" h="100%" px="40px" py="10px">

<br />

<div className="method-example-response">
    <div className="method-example-request-topbar">
        <div className="method-example-request-title">ENDPOINT URL</div>
    </div>
    <pre className="IntroSection-pre">

```
https://sandbox.blueflag.com.au/nevdis/vehicle_details?plate=TEST00&state=VIC"
```

</pre>
</div>

<div className="method-example-response">
    <div className="method-example-request-topbar">
        <div className="method-example-request-title">EXAMPLE REQUEST</div>
    </div>
    <pre className="IntroSection-pre">

```bash
curl "https://sandbox.blueflag.com.au/nevdis/vehicle_details?plate=TEST00&state=VIC" -H "Authorization: secret_SANDBOX_f1nlZOh0Xr1JvMgJy0d0l9i5JybnBEAYfl7isuU0_o-1GkBsaN8f"
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
  "request_id": "6f9cd72a-2a35-4490-ab22-a63bf9d7cab8",
  "result": [
    {
      "vin": "KMHH351EMKU00TEST",
      "chassis": null,
      "registration": {
        "plate": "TEST00",
        "state": "VIC"
      },
      "make": "HYUNDAI",
      "model": "I30",
      "colour": "SILVER OR CHROME",
      "body_type": "CAR/SEDAN",
      "vehicle_type": "CAR / SMALL PASSENGER VEHICLE",
      "engine_number": "G40000000000"
    }
  ]
}
```

</pre>
</div>

</Box>
</Box>

</HStack>