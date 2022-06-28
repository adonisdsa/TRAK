---
sidebar_position: 7
hide_table_of_contents: true
slug: written_off_vehicle
---

import { Stack, HStack, Flex } from "@chakra-ui/react"

<HStack>

<Box className="boxContainer">
<Box className="attributes" h="100%" px="40px" py="10px">

Written Off Vehicle Register (WOVR) data is provided by insurance companies to the state road and traffic authority.

<br />

[Learn More >](https://blueflag.com.au/blog/written-off-vehicles-register-wovr/)

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

Area within Australia where the vehicle is registered.

<p className="smaller-text">One of: ACT, NSW, NT, QLD, SA, TAS, VIC, WA</p>

___

`written_off.damage_codes` <span className="smaller-text">string</span>

Code dictating the type and location of damage

___

`written_off.incident_code` <span className="smaller-text">string</span>

A statutory write-off indicates the vehicle cannot be repaired whereas a repairable write-off indicates the vehicle can be repaired. This is determined by the insurance company.

<p className="smaller-text">One of: Statutory Write-Off or Repairable Write-Off</p>

___

`written_off.incident_recorded_date` <span className="smaller-text">string (YYYY-MM-DD)</span>

Date the vehicle was recorded as written-off.

___

`written_off.jurisdiction` <span className="smaller-text">string</span>

State where the vehicle was recorded as written-off.

<p className="smaller-text">One of: ACT, NSW, NT, QLD, SA, TAS, VIC, WA</p>

___

`written_off.type_code` <span className="smaller-text">string</span>

Cause of the vehicle damage

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
https://sandbox.blueflag.com.au/nevdis/written_off_check?plate=TEST80&state=VIC"
```

</pre>
</div>

<div className="method-example-response">
    <div className="method-example-request-topbar">
        <div className="method-example-request-title">EXAMPLE REQUEST</div>
    </div>
    <pre className="IntroSection-pre">

```bash
curl "https://sandbox.blueflag.com.au/nevdis/written_off_check?plate=TEST80&state=VIC" -H "Authorization: secret_SANDBOX_f1nlZOh0Xr1JvMgJy0d0l9i5JybnBEAYfl7isuU0_o-1GkBsaN8f"
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
  "request_id": "61343a9d-3bd5-4792-b5fe-f93ebda2c868",
  "result": [
    {
      "vin": "WAUZZZ8X4GB00TEST",
      "chassis": null,
      "registration": {
        "plate": "TEST80",
        "state": "VIC"
      },
      "written_off": [
        {
          "damage_codes": "F14N",
          "incident_code": "Statutory Write-off",
          "incident_recorded_date": "2021-03-02",
          "jurisdiction": "VIC",
          "type_code": "Storm, Flood, Other Write-off"
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