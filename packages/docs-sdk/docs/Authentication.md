---
sidebar_position: 2
hide_table_of_contents: true
---

import { Stack, HStack, VStack, Flex } from "@chakra-ui/react"

<HStack>
<Box className="box" h="100%" px="40px" py="10px">

The Blue Flag API uses API keys to authenticate requests. You can view and manage your API keys in the [Blue Flag Dashboard](https://app.blueflag.com.au/api-keys).
<br />

Sandbox (test) keys have the prefix `secret_SANDBOX`
and live keys have the prefix `secret_LIVE`.
<br />

Use your API key by setting it as the Authorization header of your https request.

</Box>

<Box className="box2" h="100%" px="40px" py="10px">

<div className="method-example-code">
    <div className="method-example-request-topbar">
        <div className="method-example-request-title">AUTHENTICATED REQUEST</div>
    </div>
    <pre className="IntroSection-pre">

```bash
curl "https://sandbox.blueflag.com.au/nevdis/vehicle_details?plate=TEST00&state=VIC" 
-H "Authorization: secret_SANDBOX_f1nlZOh0Xr1JvMgJy0d0l9i5JybnBEAYfl7isuU0_o-1GkBsaN8f"
```

</pre>
</div>

<div className="method-example-note">
    <div className="method-example-response-topbar">
        <div className="method-example-response-title">Your API Key</div>
    </div>
    <p>A sample test API key is included in all the examples here, so you can test any example right away.</p>
    <p>To test requests using your account, replace the sample API key with your actual API key.</p>
</div>

</Box>

</HStack>