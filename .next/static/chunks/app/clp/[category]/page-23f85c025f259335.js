(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[862],{7387:function(e,t,r){Promise.resolve().then(r.bind(r,4504))},1295:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return i},unstable_getImgProps:function(){return o}});let a=r(1024),n=r(2301),l=r(7873),c=r(3222),s=a._(r(5033)),o=e=>{(0,l.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},i=c.Image},4504:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var a=r(7437),n=r(2265),l=r(1396),c=r.n(l),s=r(8091),o=r(9764),i=e=>{let{cardsPerRow:t,children:r}=e;return(0,a.jsx)("div",{className:"w-full grid grid-cols-".concat(t," gap-").concat(t),children:r})};let u={linkText:"explore"};var d=e=>{let{data:t}=e,{linkText:r}=u,n=t.map(e=>({id:e.id,name:e.attributes.name,image:e.attributes.image.data.attributes.url}));return(0,a.jsx)("div",{className:"container w-full my-10 ",children:(0,a.jsx)(i,{cardsPerRow:4,children:n.map(e=>{let{name:t,image:n,id:l}=e;return(0,a.jsx)(c(),{href:"/plp/".concat(t),children:(0,a.jsxs)("div",{className:"px-1 mt-9",children:[(0,a.jsx)(s.Z,{iconDisplay:"hidden",classnames:"w-full h-96 rounded-2xl shrink-0 back ",productImage:n}),(0,a.jsx)("h5",{className:"mt-2 mb-2 font-semibold text-lg",children:t}),(0,a.jsx)(o.Z,{rounded:"full",variant:"primary",addStyle:"py-3 px-7 text-xl ",children:r})]})},l)})})})},m=r(8543),x=e=>{let{children:t,caption:r,...n}=e;return(0,a.jsxs)(m.default,{backgroundColor:"white",paddingValue:2,border:!0,...n,children:[t,(0,a.jsx)("span",{className:"absolute bottom-0 left-0 right-0 translate-y-[100%] pt-1 mx-auto text-xs font-medium",children:r})]})},f=r(4159);let p=e=>{let{onClick:t}=e;return(0,a.jsx)(x,{caption:"back",onClick:t,children:(0,a.jsx)(f.Z,{className:"-rotate-90 text-xl"})})},h=e=>{let{onClick:t}=e;return(0,a.jsx)(x,{caption:"next",onClick:t,children:(0,a.jsx)(f.Z,{className:"rotate-90 text-xl"})})};var g=e=>{let{totalPage:t,currPage:r,nextPageHandler:n,prevPageHandler:l,CustomPrevButton:c=null,CustomNextButton:s=null}=e;return(0,a.jsxs)("div",{className:"flex items-center gap-x-4",children:[null===c?(0,a.jsx)(p,{onClick:l}):(0,a.jsx)(c,{onClick:l}),(0,a.jsxs)("div",{className:"text-base font-medium font-manrope",children:[r," of ",t]}),null===s?(0,a.jsx)(h,{onClick:n}):(0,a.jsx)(s,{onClick:n})]})},j=r(5708),b=e=>{let{heading:t,description:r}=e,n=decodeURIComponent(t);return(0,a.jsxs)("div",{className:"mt-32",children:[(0,a.jsx)("div",{className:"mb-[44px] text-center text-black text-[115px] not-italic font-normal leading-[80.724px] tracking-[-4.6px] font-manrope capitalize",children:(0,a.jsx)("h1",{children:n})}),(0,a.jsx)("div",{className:"text-center text-gray-700 text-[34px] not-italic font-normal leading-[26.645px] lowercase font-Poppins;",children:(0,a.jsx)("p",{children:null!=r?r:"BUY customized ".concat(n," workwear")})})]})},y=r(4759),v=e=>{let{params:{category:t}}=e;var[r,l]=(0,n.useState)([]),[c,s]=(0,n.useState)(0),[o,i]=(0,n.useState)(0);return(0,n.useEffect)(()=>{(async function(e){try{var{data:t=[],meta:{pagination:{page:r,pageSize:a,pageCount:n,total:c}}}=await (0,y.zj)(e);0===t.length?l(industrialCategoryMockData):(l(t),s(n),i(c))}catch(e){console.error("Error fetching data:",e)}})(t)},[t]),(0,a.jsx)("div",{children:(0,a.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between ",children:[(0,a.jsx)(b,{heading:t}),(0,a.jsx)("div",{className:"h-px w-full mt-40 bg-black border-0 "}),(0,a.jsx)(d,{data:r}),(0,a.jsx)(g,{totalPage:o,currPage:c}),(0,a.jsx)("div",{className:"h-px w-full my-8 bg-black border-0 "}),(0,a.jsx)(j.Z,{})]})})}},8543:function(e,t,r){"use strict";r.r(t);var a=r(7437);r(2265),t.default=e=>{let{backgroundColor:t="black",children:r,border:n=!1,paddingValue:l=4,...c}=e;return(0,a.jsx)("button",{className:"relative flex justify-center p-".concat(l," w-fit rounded-full bg-").concat(t," ").concat(n?"border border-black hover:border-gray-500":""," hover:text-gray-500"),...c,children:r})}},4159:function(e,t,r){"use strict";var a=r(7437),n=r(6691),l=r.n(n);t.Z=e=>{let{width:t=24,height:r=24,className:n="",viewBox:c="0 0 18 11",fill:s="none"}=e;return(0,a.jsx)("div",{children:(0,a.jsx)(l(),{className:n,width:24,height:24,src:"/svgs/carrot.svg",alt:"Carrot "})})}},8200:function(e,t,r){"use strict";r(7437)},8091:function(e,t,r){"use strict";var a=r(7437);r(8200),t.Z=e=>{let{iconDisplay:t,classnames:r,productImage:n}=e;return(0,a.jsx)("div",{className:"".concat(r," relative overflow-hidden"),children:(0,a.jsx)("div",{className:"w-full h-full hover:scale-110 transition-all duration-700",style:{backgroundSize:"cover",backgroundImage:"url(".concat(n,")")}})})}},9764:function(e,t,r){"use strict";var a=r(7437);r(2265),t.Z=function(e){let{variant:t,rounded:r,onClick:n,children:l,addStyle:c}=e,s="font-manrope ";return"full"===r?s+="rounded-full font-medium text-xs py-2 px-4 border-gray-700 text-gray-900":"semi"===r&&(s+="rounded-lg "),"primary"===t?s+="text-24 font-normal border px-4 py-2 border-gray-700 text-gray-900":"secondary"===t&&(s+="text-white text-24 font-normal bg-customBrown border-none p-4 space-x-2"),s+=" ".concat(c||""),(0,a.jsx)("button",{className:s,onClick:n,children:l})}},5708:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(7437);r(2265);var n=r(9764),l=r(8091),c=r(1396),s=r.n(c),o=e=>{let{popularSearches:{products:{data:t=[]}={data:[]}}={data:[]}}=e,r=t.map(e=>{let{id:t,attributes:{Title:r,description:c,image:o}}=e;return(0,a.jsxs)("div",{className:"me-7 w-full mb-12",children:[(0,a.jsx)(s(),{href:"/pdp/".concat(t),children:(0,a.jsx)(l.Z,{iconDisplay:"flex",classnames:"w-[19rem] h-[26rem] rounded-2xl shrink-0 back",productImage:o.data.attributes.url})},t),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"flex justify-between my-1 ml-2",children:(0,a.jsx)("h3",{className:"text-sm font-semibold leading-7",children:r})}),(0,a.jsx)("p",{className:"text-xs font-medium ml-2 text-start text-gray-500 leading-7",children:c}),(0,a.jsx)("div",{className:"text-left ml-2 my-2",children:(0,a.jsx)(n.Z,{variant:"primary",rounded:"full",children:"enquire now"})})]})]},t)});return(0,a.jsxs)("div",{className:"py-4 max-w-full  max-w-screen-full text-center ",children:[(0,a.jsx)("div",{className:"text-3xl font-normal mb-2 text-left",children:"popular searches"}),(0,a.jsx)("div",{className:"scrollbar my-9 max-w-screen-full lg flex flex-nowrap overflow-x-scroll  ",children:r})]})}},4759:function(e,t,r){"use strict";r.d(t,{HS:function(){return o},QH:function(){return s},rh:function(){return c},zj:function(){return l}});let a="http://127.0.0.1:1337/api",n=async e=>{let t="http://127.0.0.1:1337/api/home-page?populate=deep";console.log(a),console.log(t);try{let e=await fetch(t,{cache:"no-cache"});if(!e.ok)return e;{let t=await e.json();return console.log(t),t}}catch(e){throw e}},l=async e=>{let t="".concat(a,"/sub-categories?filters[category][slug][$eq]=").concat(e,"&populate=deep");console.log("Subcategory",t);try{let e=await fetch(t,{cache:"no-cache"});if(e.ok)return await e.json();return e}catch(e){throw e}},c=async e=>{let t="".concat(a,"/product-details?populate=*&filters[product][id][$eq]=").concat(e);console.log("deatils",t);try{let e=await fetch(t,{cache:"no-cache"});if(!e.ok)return e;{let t=await e.json();return console.log(t),t}}catch(e){throw e}},s=async e=>{let t="".concat(a,"/product-details?populate=*&filters[product][id][$eq]=").concat(e);console.log("productdetails",t);try{let e=await fetch(t,{cache:"no-cache"});if(!e.ok)return e;{let t=await e.json(),r=t.data[0].attributes.images.data.map((e,t)=>({id:t+10,smallImageSrc:e.attributes.url,largeImageSrc:e.attributes.url,alt:"Product Image"}));return console.log("Fetched image data:",r),r}}catch(e){throw e}},o=async()=>{try{let e=await n("home-page");return e.data.attributes.popularSearches}catch(e){throw console.error("Error fetching popular searches:",e),e}}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=r(2265),n=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var a,l={},i=null,u=null;for(a in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,a)&&!o.hasOwnProperty(a)&&(l[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===l[a]&&(l[a]=t[a]);return{$$typeof:n,type:e,key:i,ref:u,props:l,_owner:s.current}}t.Fragment=l,t.jsx=i,t.jsxs=i},7437:function(e,t,r){"use strict";e.exports=r(622)},6691:function(e,t,r){e.exports=r(1295)},1396:function(e,t,r){e.exports=r(6685)}},function(e){e.O(0,[685,222,971,596,744],function(){return e(e.s=7387)}),_N_E=e.O()}]);