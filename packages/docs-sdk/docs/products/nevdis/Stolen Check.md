---
sidebar_position: 6
hide_table_of_contents: true
slug: stolen_check
---

import { Stack, HStack, Flex } from "@chakra-ui/react"

<HStack>

<Box className="boxContainer">
<Box className="attributes" h="100%" px="40px" py="10px">

Stolen vehicle data is provided by the police to the state road and traffic authority.
<br />

[Learn More >](https://blueflag.com.au/blog/stolen-vehicle/)

<br /> <br />

**Attributes**
___

`vin` <span className="smaller-text">string</span>

A unique 17 character code used to identify individual motor vehicles.

___

`chassis` <span className="smaller-text">string</span>

A unique code used to identify individual motor vehicles. Used before January 1989 in Australia.

___

`registration.plate` <span className="smaller-text">string</span>

An alphanumeric code used to identify vehicles. The plate is visible on the front and rear of most vehicles.

___

`registration.state` <span className="smaller-text">string</span>

The area within Australia where the vehicle is registered.

<p className="smaller-text">One of: ACT, NSW, NT, QLD, SA, TAS, VIC, WA</p>

___

`compliance_plate` <span className="smaller-text">string (YYYY-MM)</span>

Month and year the vehicle was confirmed as meeting local regulations.

<p className="smaller-text">Not available for TAS</p>

___

`stolen.type` <span className="smaller-text">string</span>

Part of the vehicle that is stolen.

<p className="smaller-text">One of: VIN, Engine, Plate</p>

___

`stolen.jurisdiction` <span className="smaller-text">string</span>

State where the vehicle was reported stolen.

<p className="smaller-text">One of: ACT, NSW, NT, QLD, SA, TAS, VIC, WA</p>

___

`stolen.reported_date` <span className="smaller-text">string (YYYY-MM-DD)</span>

Date the vehicle was reported as stolen.

___

`stolen.summary` <span className="smaller-text">string</span>

Police jurisdiction reference number.

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
https://sandbox.blueflag.com.au/nevdis/stolen_check?plate=TEST80&state=VIC"
```

</pre>
</div>

<div className="method-example-response">
    <div className="method-example-request-topbar">
        <div className="method-example-request-title">EXAMPLE REQUEST</div>
    </div>
    <pre className="IntroSection-pre">

```bash
curl "https://sandbox.blueflag.com.au/nevdis/stolen_check?plate=TEST80&state=VIC" -H "Authorization: secret_SANDBOX_f1nlZOh0Xr1JvMgJy0d0l9i5JybnBEAYfl7isuU0_o-1GkBsaN8f"
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
  "request_id": "5e8fbb2e-129f-41de-851c-b4315f324678",
  "result": [
    {
      "vin": "WAUZZZ8X4GB00TEST",
      "chassis": null,
      "registration": {
        "plate": "TEST80",
        "state": "VIC"
      },
      "stolen": [
        {
          "type": "Plate",
          "jurisdiction": "VIC",
          "reported_date": "2021-02-21",
          "summary": "POL JUR-N REF-00789042100033645052"
        }
      ]
    }
  ]
}
```

</pre>
</div>

</Box>
</Box>

</HStack>