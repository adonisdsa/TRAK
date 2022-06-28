---
sidebar_position: 1
hide_table_of_contents: true
slug: nevdis_search_query_parameters
---

All NEVDIS vehicle search APIs accept the following parameters.


### Search by VIN

`vin` <span className="smaller-text">string</span>
<p>
A unique 17 character code used to identify individual motor vehicles.
</p>

<br/>

<div className="smaller-text">EXAMPLE QUERY:</div>
<br/>

`?vin=KMHH351EMKU00TEST`

___


### Search by Registration Plate

`plate` <span className="smaller-text">string</span>
<p>
An alphanumeric code used to identify vehicles. The plate is visible on the front and rear of most vehicles.
</p>
<br/>

`state` <span className="smaller-text">string</span>

The area within Australia where the vehicle is registered.
<p className="smaller-text">One of: ACT, NSW, NT, QLD, SA, TAS, VIC, WA</p>

<br/>

<div className="smaller-text">EXAMPLE QUERY:</div>
<br/>


`?plate=TEST00&state=VIC`

___


### Search by Chassis Number

`chassis` <span className="smaller-text">string</span>
<p>
A unique code used to identify individual motor vehicles. Used before January 1989 in Australia.
</p>

<br/>

<div className="smaller-text">EXAMPLE QUERY:</div>
<br/>

`?chassis=YR21000TEST`