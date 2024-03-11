(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[862],{5632:function(e,t,a){Promise.resolve().then(a.bind(a,9905))},8792:function(e,t,a){"use strict";a.d(t,{default:function(){return n.a}});var r=a(5250),n=a.n(r)},7907:function(e,t,a){"use strict";var r=a(5313);a.o(r,"usePathname")&&a.d(t,{usePathname:function(){return r.usePathname}}),a.o(r,"useRouter")&&a.d(t,{useRouter:function(){return r.useRouter}}),a.o(r,"useSearchParams")&&a.d(t,{useSearchParams:function(){return r.useSearchParams}})},9905:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var r=a(7437),n=a(2265),s=a(8792),l=a(2212),c=a(9687);a(7463);var i=a(2327),o=e=>{let{data:t}=e,{linkText:a}=i.categoriesLabels,n=t.map(e=>({id:e.id,name:e.attributes.name,slug:e.attributes.slug,image:e.attributes.image.data.attributes.url}));return(0,r.jsx)("div",{className:"container w-full my-10  ",children:(0,r.jsx)("div",{className:" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3",children:n.map(e=>{let{name:t,slug:n,image:i,id:o}=e;return(0,r.jsx)(s.default,{href:"/plp/".concat(n),children:(0,r.jsxs)("div",{className:"px-1 mt-9",children:[(0,r.jsx)(l.Z,{iconDisplay:"hidden",classnames:"w-full h-[18rem] sm:h-[346px] lg:h-[418px] h-96 rounded-2xl shrink-0 back ",productImage:i}),(0,r.jsx)("h5",{className:"mt-2 mb-2 font-bold text-[10px] leading-4 sm:text-sm sm:leading-5 lg:text-lg lg:leading-[26px]",children:t}),(0,r.jsx)("div",{className:"h-6 w-[60px] sm:w-[92px] sm:h-9 lg:h-12 lg:w-28",children:(0,r.jsx)(c.Z,{rounded:"full",variant:"primary",children:(0,r.jsxs)("h2",{className:"text-[9px] leading-3 sm:text-sm sm:leading-4 lg:text-base lg:leading-5 font-medium",children:[" ",a]})})})]})},o)})})})},u=a(6658),d=a(5467),x=a(3358),m=a(1947),h=a(7907),p=e=>{var t,a;let{params:{category:s}}=e,l=(0,h.useRouter)(),c=(0,h.usePathname)(),i=(0,h.useSearchParams)().get("page"),[p,g]=(0,n.useState)(i||1),[f,b]=(0,n.useState)([]),[j,v]=(0,n.useState)(0),[w,y]=(0,n.useState)([]);(0,n.useEffect)(()=>{N(s,p),k()},[s,p]);let N=async(e,t)=>{try{let{data:a,meta:{pagination:r}}=await (0,m.zj)(e,t);b(a),v(r.pageCount)}catch(e){console.error("Error fetching data:",e)}},k=async()=>{try{let e=await (0,m.HS)();y(e)}catch(e){console.error("Error fetching popular searches:",e)}};return(0,r.jsx)("div",{children:(0,r.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between px-4 md:px-12",children:[(0,r.jsx)(x.Z,{heading:s}),(0,r.jsx)("div",{className:"h-px w-full mt-20 md:mt-40 bg-black border-0 "}),(0,r.jsx)(o,{data:f}),(0,r.jsx)(u.Z,{totalPage:j,currPage:p,nextPageHandler:e=>{let t=Number(p)+1;l.push("".concat(c,"?page=").concat(t)),t<=j&&(g(t),e.preventDefault())},prevPageHandler:e=>{let t=p-1;l.push("".concat(c,"?page=").concat(t)),t>=1&&(g(t),e.preventDefault())}}),(0,r.jsx)("div",{className:"h-px w-full my-8 bg-black border-0 "}),(0,r.jsx)(d.Z,{popularSearches:w}),(null==w?void 0:null===(a=w.products)||void 0===a?void 0:null===(t=a.data)||void 0===t?void 0:t.length)<5&&(0,r.jsx)("div",{className:"hidden ml:block h-px w-full mb-[60px] bg-black border-0"})]})})}},2116:function(e,t,a){"use strict";var r=a(7437);a(2265),t.Z=e=>{let{backgroundColor:t="black",children:a,border:n=!1,paddingValue:s=4,...l}=e;return(0,r.jsx)("button",{className:"relative flex justify-center p-".concat(s," w-fit rounded-full bg-white ").concat(n?"border border-black hover:border-gray-500":""," hover:text-gray-500"),...l,children:a})}},7625:function(e,t,a){"use strict";var r=a(7437),n=a(703);t.Z=e=>{let{width:t=24,height:a=24,className:s="",viewBox:l="0 0 18 11",fill:c="none"}=e;return(0,r.jsx)("div",{children:(0,r.jsx)(n.default,{className:s,width:24,height:24,src:"/svgs/carrot.svg",alt:"Carrot "})})}},2212:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var r=a(7437),n=e=>{let{iconDisplay:t,classnames:a,productImage:n}=e;return(0,r.jsx)("div",{className:"".concat(a," relative overflow-hidden"),children:(0,r.jsx)("div",{className:"w-full  h-full bg-center hover:scale-110 transition-all duration-700",style:{backgroundSize:"cover",backgroundImage:"url(".concat(n,")")}})})}},6658:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var r=a(7437);a(2265);var n=a(2116),s=e=>{let{children:t,caption:a,...s}=e;return(0,r.jsxs)(n.Z,{backgroundColor:"white",paddingValue:2,border:!0,...s,children:[t,(0,r.jsx)("span",{className:"absolute bottom-0 left-0 right-0 translate-y-[100%] pt-1 mx-auto text-xs font-medium",children:a})]})},l=a(7625);let c=e=>{let{onClick:t}=e;return(0,r.jsx)(s,{caption:"back",onClick:t,children:(0,r.jsx)(l.Z,{className:"-rotate-90 text-xl"})})},i=e=>{let{onClick:t}=e;return(0,r.jsx)(s,{caption:"next",onClick:t,children:(0,r.jsx)(l.Z,{className:"rotate-90 text-xl"})})};var o=e=>{let{totalPage:t,currPage:a,nextPageHandler:n,prevPageHandler:s,CustomPrevButton:l=null,CustomNextButton:o=null}=e;return(0,r.jsxs)("div",{className:"flex items-center gap-x-4",children:[null===l?(0,r.jsx)(c,{onClick:s}):(0,r.jsx)(l,{onClick:s}),(0,r.jsxs)("div",{className:"text-base font-medium font-manrope",children:[a," of ",t]}),null===o?(0,r.jsx)(i,{onClick:n}):(0,r.jsx)(o,{onClick:n})]})}},9687:function(e,t,a){"use strict";var r=a(7437);a(2265),t.Z=function(e){let{variant:t,rounded:a,onClick:n,children:s,addStyle:l}=e,c="font-manrope ";return"full"===a?c+="rounded-full font-medium text-xs py-1 px-2 md:py-2 md:px-4 border-gray-700 text-gray-900":"semi"===a&&(c+="rounded-lg "),"primary"===t?c+="text-24 font-normal border py-1 px-2 md:py-2 md:px-4 border-gray-700 text-gray-900":"secondary"===t&&(c+="text-white text-24 font-normal bg-customBrown border-none p-4 space-x-2"),c+=" ".concat(l||""),(0,r.jsx)("button",{className:c,onClick:n,children:s})}},3358:function(e,t,a){"use strict";var r=a(7437);a(2265),t.Z=e=>{let{heading:t,description:a}=e,n=decodeURIComponent(t);return(0,r.jsxs)("div",{className:"mt-16 md:mt-32",children:[(0,r.jsx)("div",{className:"md:mb-[44px] text-center text-black text-[30px] xs:text-[40px] sm:text-6xl lg:text-[112px] lg:leading-[80px] font-medium leading-7 md:leading-[66px] xs:tracking-[-1.5px] md:tracking-[-3px]  capitalize",children:(0,r.jsx)("h1",{children:n})}),(0,r.jsx)("div",{className:" mt-5 text-center text-gray-700  text-xs xs:text-sm sm:text-[28px] leading-3  lg:text-3xl lg:leading-7 font-normal sm:leading-[22.645px] lowercase font-Poppins;",children:(0,r.jsx)("p",{children:null!=a?a:"BUY customized ".concat(n," workwear")})})]})}},7463:function(e,t,a){"use strict";a(7437)},5467:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var r=a(7437);a(2265);var n=a(9687),s=a(2212),l=a(8792);a(1130);var c=e=>{let{popularSearches:{products:{data:t=[]}={data:[]}}={data:[]}}=e,a=t.map(e=>{var t,a;let{id:c,attributes:{Title:i,description:o,image:u,product_detail:d}}=e,x=null==d?void 0:null===(a=d.data)||void 0===a?void 0:null===(t=a.attributes)||void 0===t?void 0:t.price;return(0,r.jsx)("div",{className:"me-7 w-3/4 md:w-full mb-8 pb-8 ",children:(0,r.jsxs)(l.default,{href:"/pdp/".concat(c),children:[(0,r.jsx)(s.Z,{iconDisplay:"flex",classnames:"w-[14rem] h-72 sm:w-64 sm:h-[346px] lg:w-[308px] lg:h-[418px] rounded-2xl shrink-0 back",productImage:u.data.attributes.url}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex justify-between md:mr-6 ",children:[(0,r.jsx)("h3",{className:"lg:text-sm sm:text-xs text-[10px] font-bold leading-5 sm:leading-6 lg:leading-7",children:i}),(0,r.jsxs)("h4",{className:"lg:text-sm sm:text-xs text-[10px] font-bold leading-5 sm:leading-6   ",children:[x," INR"]})]}),(0,r.jsx)("p",{className:"sm:text-[10px] lg:text-xs lg:leading-6 sm:leading-5 text-[8px] leading-4 font-medium ml-2 text-start text-gray-500 ",children:o}),(0,r.jsx)("div",{className:"lg:w-28 lg:h-9 w-[74px] h-[1.5rem] sm:w-[6rem] sm:h-[2rem] text-left ml-2 my-2",children:(0,r.jsx)(n.Z,{variant:"primary",rounded:"full",children:(0,r.jsx)("h2",{className:"lg:text-xs text-[8px] sm:text-[10px] leading-3 leading-[11px] font-medium lg:leading-4",children:"enquire now"})})})]})]},c)},c)});return(0,r.jsxs)("div",{className:"pt-4 max-w-full max-w-screen-full text-center",children:[(0,r.jsx)("div",{className:"text-[18px] leading-[26px] md:text-[34px] font-medium mb-2 text-left",children:"popular searches"}),(0,r.jsx)("div",{className:"md:my-9  my-5 max-w-screen-full lg overflow-x-auto custom-scrollbar flex flex-nowrap",children:a})]})}},1947:function(e,t,a){"use strict";a.d(t,{HS:function(){return d},Kf:function(){return n},QH:function(){return u},VE:function(){return o},Xp:function(){return i},rh:function(){return l},v8:function(){return s},zj:function(){return c}});let r="http://13.232.103.119:1337/api",n=async e=>{try{let e=await fetch(r+"/home-page?populate=deep",{cache:"no-cache"});if(e.ok)return await e.json();return e}catch(e){throw e}},s=async()=>{try{let e=await fetch(r+"/about-us?populate=deep",{cache:"no-cache"});if(!e.ok)return e;{let t=await e.json();return console.log("result",t),t}}catch(e){throw e}},l=async()=>{try{let e=await fetch(r+"/contact-us?populate=deep",{cache:"no-cache"});if(!e.ok)return e;{let t=await e.json();return console.log("result",t),t}}catch(e){throw e}},c=async(e,t)=>{t=t||1;let a="".concat(r,"/sub-categories?pagination[page]=").concat(t,"&pagination[pageSize]=").concat(25,"&filters[category][slug][$eq]=").concat(e,"&populate=deep");try{let e=await fetch(a,{cache:"no-cache"});if(e.ok)return await e.json();return e}catch(e){throw e}},i=async(e,t)=>{t=t||1;let a="".concat(r,"/products?pagination[page]=").concat(t,"&pagination[pageSize]=").concat(10,"&filters[sub_category][slug][$eq]=").concat(e,"&populate=*");try{let e=await fetch(a,{cache:"no-cache"});if(e.ok)return await e.json();return e}catch(e){throw e}},o=async e=>{let t="".concat(r,"/product-details?populate=*&filters[product][id][$eq]=").concat(e);try{let e=await fetch(t,{cache:"no-cache"});if(e.ok)return await e.json();return e}catch(e){throw e}},u=async e=>{let t="".concat(r,"/product-details?populate=*&filters[product][id][$eq]=").concat(e);try{let e=await fetch(t,{cache:"no-cache"});if(e.ok)return(await e.json()).data[0].attributes.images.data.map((e,t)=>({id:t+10,smallImageSrc:e.attributes.url,largeImageSrc:e.attributes.url,alt:"Product Image"}));return e}catch(e){throw e}},d=async()=>{try{return(await n("home-page")).data.attributes.popularSearches}catch(e){throw console.error("Error fetching popular searches:",e),e}}},2327:function(e,t,a){"use strict";a.d(t,{categoriesLabels:function(){return r}});let r={linkText:"explore"}},1130:function(){}},function(e){e.O(0,[250,703,971,69,744],function(){return e(e.s=5632)}),_N_E=e.O()}]);