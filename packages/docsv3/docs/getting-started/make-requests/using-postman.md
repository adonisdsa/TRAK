---
sidebar_position: 4
---

# Using Postman

You can make a request to the Blue Flag API is using Postman. This tool lets you make HTTP requests using a graphical user interface. You can specify the request URL, parameters, headers etc.  


Example request:

```json
curl "https://sandbox.blueflag.com.au/vin_decoder?vin=KMHH351EMKU00TEST" \
-H "Authorization: secret_SANDBOX_f1nlZOh0Xr1JvMgJy0d0l9i5JybnBEAYfl7isuU0_o-1GkBsaN8f"
``` 


<div className="list">
<span>1</span> 

Create a New Collection by pressing the **'+'** Button and name it.

</div>
<div className="list">
<span>2</span> 

Click **'Add a request'** and select a name for it.

</div>

![Postman New Collection](/img/getting-started/postman-collection.png)

<div className="list">
<span>3</span> 

Enter in the URL from the example request above.

</div>
<div className="list">
<span>4</span> 

Click the **'Headers'** tab

</div>

![Postman Get](/img/getting-started/postman-get.png)

<div className="list">
<span>5</span> 

Enter in the word **'Authorization'** underneath the **KEY** column.

</div>
<div className="list">
<span>6</span> 

Paste your Secret Sandbox key underneath the **VALUE** column.

</div>

<div className="list">
<span>7</span> 

To make the request, click **'Send'**.

</div>

![Postman Authorization](/img/getting-started/postman-auth.png)


You will then get the JSON response for this request as below:

![Postman Response](/img/getting-started/postman-response.png)