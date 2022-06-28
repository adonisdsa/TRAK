(self.webpackChunkbfapi_userguides=self.webpackChunkbfapi_userguides||[]).push([[865],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6138:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:2},l="Generate sandbox API key",u={unversionedId:"getting-started/generate-sandbox-keys",id:"getting-started/generate-sandbox-keys",isDocsHomePage:!1,title:"Generate sandbox API key",description:"The Blue Flag API (Application Program Interface), allows you to connect your software to our data.",source:"@site/docs/getting-started/generate-sandbox-keys.md",sourceDirName:"getting-started",slug:"/getting-started/generate-sandbox-keys",permalink:"/docs/getting-started/generate-sandbox-keys",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mySidebar",previous:{title:"Sign up to the Blue Flag API",permalink:"/docs/getting-started/sign-up-to-blueflag-api"},next:{title:"Test Vehicles",permalink:"/docs/getting-started/test-vehicles"}},c=[],p={toc:c};function d(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"generate-sandbox-api-key"},"Generate sandbox API key"),(0,o.kt)("p",null,"The Blue Flag API (Application Program Interface), allows you to connect your software to our data."),(0,o.kt)("p",null,"Our Sandbox environment emulates the behaviour of our production API. It allows your developers to integrate and test at no cost."),(0,o.kt)("p",null,"To access the ",(0,o.kt)("a",{parentName:"p",href:"https://app.blueflag.com.au/dashboard"},"Blue Flag API sandbox"),", you will need to follow these steps:"),(0,o.kt)("div",{className:"list"},(0,o.kt)("span",null,"1"),(0,o.kt)("p",null,"Navigate to the '",(0,o.kt)("a",{parentName:"p",href:"https://app.blueflag.com.au/api-keys"},"API Keys"),"' in your developer Portal"),(0,o.kt)("br",null),(0,o.kt)("span",null,"2"),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"'Create Sandbox API Key'")," button")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"API Keys Image",src:n(2941).Z})),(0,o.kt)("div",{className:"list"},(0,o.kt)("span",null,"3"),(0,o.kt)("p",null,"Name your API key and click ",(0,o.kt)("strong",{parentName:"p"},"'Create & View'"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Save Keys Image",src:n(666).Z})),(0,o.kt)("div",{className:"list"},(0,o.kt)("span",null,"4"),(0,o.kt)("p",null,"Save your API key somewhere safe and click ",(0,o.kt)("strong",{parentName:"p"},"'Done'"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Secret Key Image",src:n(2488).Z})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"WARNING:")," Your API Key will only display once when created. Please store this securely as we cannot show it to you again for security reasons. If a new key is required, your integrations will also need updating.")))}d.isMDXComponent=!0},2941:function(e,t,n){"use strict";t.Z=n.p+"assets/images/api-keys-5ccd9048609b83539de48d15f59b95cd.png"},666:function(e,t,n){"use strict";t.Z=n.p+"assets/images/save-key-441f8e5b633552addcd3e55d443a6cfe.png"},2488:function(e,t,n){"use strict";t.Z=n.p+"assets/images/secret-key-805d8f998240caba00e12a9676802411.png"}}]);