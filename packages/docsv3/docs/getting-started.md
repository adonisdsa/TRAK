---
sidebar_position: 1
---

# Getting Started


Genuine vehicle information is not available in Sandbox (test) mode. Instead, use any of the following test vehicles. All requests for these vehicles are free and must me made to the sandbox environment: `https://sandbox.blueflag.com.au`


|   PLATE  | STATE |        VIN        |   CHASSIS   | REGISTERED | STOLEN | WRITTEN-OFF |
|:--------:|:-----:|:-----------------:|:-----------:|:----------:|:------:|:-----------:|
| TEST00 |  VIC  | KMHH351EMKU00TEST |      -      | <div className="tick">✔</div>    |    ❌   |      ❌      |
| TEST20 |  VIC  |         -         | YR21000TEST |      ❌     |    ❌   |      ❌      |
| TEST21 |  VIC  | WDB1240312B00TEST |      -      |      ❌     |    ❌   |      ❌      |
| TEST80 |  VIC  | WAUZZZ8X4GB00TEST |      -      |      ❌     |  <div className="tick">✔</div>|<div className="tick">✔</div>|

>When you’re ready to take your integration live, please make requests to `https://api.blueflag.com.au` with a **LIVE KEY** rather than your sandbox key. Live request will not work if your integration is still using your test keys.