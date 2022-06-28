---
sidebar_position: 1
hide_table_of_contents: true
slug: registration_status_build_and_compliance
---

import { Stack, HStack, Flex } from "@chakra-ui/react"

<HStack>

<Box className="boxContainer">
<Box className="attributes" h="100%" px="40px" py="10px">

This is a combination of [Registration Status](/docs/api/products/nevdis/registration_status) & [Build and Compliance](/docs/api/products/nevdis/build_and_compliance)

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

`registration.status` <span className="smaller-text">string</span>
<p>
Can be either Registered, Unregistered or Suspended.
</p>

___

`registration.expiry_date` <span className="smaller-text">string (YYYY-MM-DD)</span>
<p>
Status and expiry date update when registration is paid / cancelled or lapsed. Some states update within 1 hour while others update overnight.
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
https://sandbox.blueflag.com.au/nevdis/registration_status_build_and_compliance?plate=TEST00&state=VIC"
```

</pre>
</div>

<div className="method-example-response">
    <div className="method-example-request-topbar">
        <div className="method-example-request-title">EXAMPLE REQUEST</div>
    </div>
    <pre className="IntroSection-pre">

```bash
curl "https://sandbox.blueflag.com.au/nevdis/registration_status_build_and_compliance?plate=TEST00&state=VIC" -H "Authorization: secret_SANDBOX_f1nlZOh0Xr1JvMgJy0d0l9i5JybnBEAYfl7isuU0_o-1GkBsaN8f"
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
  "request_id": "4946c454-9710-4722-acad-068b0760faf6",
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