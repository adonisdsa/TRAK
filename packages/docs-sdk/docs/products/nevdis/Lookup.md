---
sidebar_position: 3
hide_table_of_contents: true
slug: lookup
---

import { Stack, HStack, Flex } from "@chakra-ui/react"

<HStack>

<Box className="boxContainer">
<Box className="attributes" h="100%" px="40px" py="10px">

Find vehicles by VIN or Registration Plate or Chassis Number.

<br /> <br />

**Attributes**
___

`vin` <span className="smaller-text">string</span>
<p>
A unique 17 character code used to identify individual motor vehicles.
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

`chassis` <span className="smaller-text">string</span>
<p>
A unique code used to identify individual motor vehicles. Used before January 1989 in Australia.
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
https://sandbox.blueflag.com.au/nevdis/lookup?plate=TEST00&state=VIC"
```

</pre>
</div>

<div className="method-example-response">
    <div className="method-example-request-topbar">
        <div className="method-example-request-title">EXAMPLE REQUEST</div>
    </div>
    <pre className="IntroSection-pre">

```bash
curl "https://sandbox.blueflag.com.au/nevdis/lookup?plate=TEST00&state=VIC" -H "Authorization: secret_SANDBOX_f1nlZOh0Xr1JvMgJy0d0l9i5JybnBEAYfl7isuU0_o-1GkBsaN8f"
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
  "request_id": "6ed59e0f-9481-46d0-a226-aeabf291a75d",
  "result": [
    {
      "vin": "KMHH351EMKU00TEST",
      "chassis": null,
      "registration": {
        "plate": "TEST00",
        "state": "VIC"
      }
    }
  ]
}
```

</pre>
</div>

</Box>
</Box>

</HStack>