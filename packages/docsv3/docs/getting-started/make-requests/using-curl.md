---
sidebar_position: 3
---

# Using cURL

The simplest approach is to make a request in your terminal using curl. The example below shows how you can retrieve [VIN Decoder](https://blueflag.com.au/docs/api/products/vin_decoder/) from a registration plate and state entry. This uses the `vin_decoder` endpoint.

Example request:

```json
curl "https://sandbox.blueflag.com.au/vin_decoder?vin=KMHH351EMKU00TEST" \
-H "Authorization: secret_SANDBOX_f1nlZOh0Xr1JvMgJy0d0l9i5JybnBEAYfl7isuU0_o-1GkBsaN8f"
```



Replace the example sandbox key in the request above with the sandbox key you generated in step 2 and paste the snippet in your terminal. This will send a request to our API using VIN Decoder for the plate `TEST00` in the state of `VIC` . 

You will get the JSON response for this request as per below:

```json
    {
    "request_id": "baf6dcfb-0a34-4881-9365-87dffc9d1e31",
    "result": {
        "vin": "KMHH351EMKU00TEST",
        "make": "Hyundai",
        "model": "i30",
        "series": "PD2",
        "variant": "Active",
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