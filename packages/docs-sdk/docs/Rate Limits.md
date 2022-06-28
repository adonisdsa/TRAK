---
sidebar_position: 3
hide_table_of_contents: true
slug: /rate-limits
---

To ensure our platform remains stable and fair for everyone, all Blue Flag APIs are rate-limited. We use a variety of strategies to enforce rate limits. We ask developers to use industry standard techniques for limiting calls, caching results, and re-trying requests responsibly. Rate limits are calculated per API key across all APIs. If you hit the rate limiter, you will receive a `HTTP 429` response. You can retry the request using an incremental backoff.


| **RESOURCE**   | **DEFAULT LIVE QUOTA** | **SANDBOX QUOTA** | **CAN BE INCREASED?** |
| :-------     | :-------:          | :-------:          | :-------:              |
| /vin_decoder | 5 requests/sec | 2 requests/sec | Yes                   |
| /nevdis/lookup | 5 requests/sec | 2 requests/sec  | Yes                   |
| /nevdis/vehicle_details | 5 requests/sec | 2 requests/sec  | Yes                   |
| /nevdis/build_and_compliance | 5 requests/sec | 2 requests/sec  | Yes                   |
| /nevdis/registration_status | 5 requests/sec | 2 requests/sec  | Yes                   | 
| /nevdis/written_off_check | 5 requests/sec | 2 requests/sec  | Yes                   |
| /nevdis/stolen_check | 5 requests/sec | 2 requests/sec  | Yes                   |
| /nevdis/vehicle_details_registration_status_build_and_compliance | 5 requests/sec | 2 requests/sec  | Yes                   |
| /nevdis/vehicle_details_build_and_compliance | 5 requests/sec | 2 requests/sec  | Yes                   |
| /nevdis/registration_status_build_and_compliance | 5 requests/sec | 2 requests/sec  | Yes                   |



### Increasing Rate Limits

Our standard rate limits satisfy the majority of our users. However, if the standard limits are not sufficient for your needs, please contact us to arrange for an increase.

### Billing

You will not be charged for any rate limited requests.