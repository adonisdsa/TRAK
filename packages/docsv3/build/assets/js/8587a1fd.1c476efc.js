(self.webpackChunkbfapi_userguides=self.webpackChunkbfapi_userguides||[]).push([[853],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7242:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:3},u="Using cURL",c={unversionedId:"getting-started/make-requests/using-curl",id:"getting-started/make-requests/using-curl",isDocsHomePage:!1,title:"Using cURL",description:"The simplest approach is to make a request in your terminal using curl. The example below shows how you can retrieve VIN Decoder from a registration plate and state entry. This uses the vindecoder endpoint.",source:"@site/docs/getting-started/make-requests/using-curl.md",sourceDirName:"getting-started/make-requests",slug:"/getting-started/make-requests/using-curl",permalink:"/docs/getting-started/make-requests/using-curl",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mySidebar",previous:{title:"Submitting an application",permalink:"/docs/getting-started/submitting-an-application"},next:{title:"Using Postman",permalink:"/docs/getting-started/make-requests/using-postman"}},l=[],p={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-curl"},"Using cURL"),(0,a.kt)("p",null,"The simplest approach is to make a request in your terminal using curl. The example below shows how you can retrieve ",(0,a.kt)("a",{parentName:"p",href:"https://blueflag.com.au/docs/api/products/vin_decoder/"},"VIN Decoder")," from a registration plate and state entry. This uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"vin_decoder")," endpoint."),(0,a.kt)("p",null,"Example request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'curl "https://sandbox.blueflag.com.au/vin_decoder?vin=KMHH351EMKU00TEST" \\\n-H "Authorization: secret_SANDBOX_f1nlZOh0Xr1JvMgJy0d0l9i5JybnBEAYfl7isuU0_o-1GkBsaN8f"\n')),(0,a.kt)("p",null,"Replace the example sandbox key in the request above with the sandbox key you generated in step 2 and paste the snippet in your terminal. This will send a request to our API using VIN Decoder for the plate ",(0,a.kt)("inlineCode",{parentName:"p"},"TEST00")," in the state of ",(0,a.kt)("inlineCode",{parentName:"p"},"VIC")," . "),(0,a.kt)("p",null,"You will get the JSON response for this request as per below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'    {\n    "request_id": "baf6dcfb-0a34-4881-9365-87dffc9d1e31",\n    "result": {\n        "vin": "KMHH351EMKU00TEST",\n        "make": "Hyundai",\n        "model": "i30",\n        "series": "PD2",\n        "variant": "Active",\n        "build_year": 2019,\n        "model_year": 2019,\n        "body_style": "Hatchback",\n        "doors": 4,\n        "seats": 5,\n        "fuel": {\n            "type": "Petrol"\n        },\n        "drive": "FWD",\n        "engine": {\n            "cylinders": 4,\n            "size_litres": 2\n        },\n        "transmission": {\n            "type": "Auto"\n        }\n    }\n}\n')))}d.isMDXComponent=!0}}]);