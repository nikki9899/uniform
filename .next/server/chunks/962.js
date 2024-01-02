exports.id = 962;
exports.ids = [962];
exports.modules = {

/***/ 6333:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 8657:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2870));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1248))

/***/ }),

/***/ 854:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23))

/***/ }),

/***/ 1954:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Wish = ({ width = 24, height = 24, classnames = "", viewBox = "0 0 24 24", stroke = "#1E1E1E" })=>{
    return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsx("svg", {
            className: classnames,
            xmlns: "http://www.w3.org/2000/svg",
            width: width,
            height: height,
            viewBox: viewBox,
            fill: "none",
            children: /*#__PURE__*/ _jsx("path", {
                d: "M20.3042 5.20872C19.8461 4.74626 19.3021 4.37941 18.7034 4.12912C18.1047 3.87883 17.463 3.75 16.8149 3.75C16.1668 3.75 15.5251 3.87883 14.9264 4.12912C14.3277 4.37941 13.7837 4.74626 13.3256 5.20872V5.20872C12.8018 5.73715 11.9477 5.73715 11.4239 5.20872V5.20872C10.4985 4.27503 9.24338 3.75048 7.93463 3.75048C6.62589 3.75048 5.37074 4.27503 4.44532 5.20872C3.5199 6.14241 3 7.40877 3 8.72921C3 10.0497 3.5199 11.316 4.44532 12.2497L5.39614 13.209L10.9543 18.8168C11.7367 19.6063 13.0128 19.6063 13.7953 18.8168L19.3534 13.209L20.3042 12.2497C20.7626 11.7875 21.1262 11.2386 21.3742 10.6346C21.6223 10.0305 21.75 9.38307 21.75 8.72921C21.75 8.07535 21.6223 7.4279 21.3742 6.82384C21.1262 6.21978 20.7626 5.67096 20.3042 5.20872Z",
                stroke: stroke,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Wish)));


/***/ }),

/***/ 2870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ footerNewsLetter)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/utils/labels/footerLabels.js
const footerLabels = {
    newsLater: {
        title: "Uniform on Web Newsletter",
        subTitle: " Get highlights of the most important news delivered to your mail inbox",
        button: "Subscribe"
    }
};

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/components/molecules/footerNewsLetter.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const FooterNewsLetter = (props)=>{
    const { title, subTitle, button } = footerLabels.newsLater;
    const handelSubscribe = (event)=>{};
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "mb-4 text-2xl font-medium text-gray-900  ",
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "text-gray-900 font-normal",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "mb-4",
                        children: subTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "mb-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid grid-cols-3 gap-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative col-span-2 ",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "email",
                                        className: "w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-[#efefef]",
                                        placeholder: "e-mail"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: "relative py-3 text-black",
                                    onClick: handelSubscribe,
                                    children: [
                                        button,
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: " z-[-1] absolute my-2 inset-y-0 right-0 h-8 w-8 bg-red-900"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const footerNewsLetter = (/*#__PURE__*/(0,react_.memo)(FooterNewsLetter));


/***/ }),

/***/ 1248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ navbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
;// CONCATENATED MODULE: ./src/utils/labels/aboutUsLables.js
const aboutUsLables_aboutUsLables = {
    topImgHead: "About us",
    topImgText: "Unveiling the Threads of Our Story",
    overviewHead: "Overview",
    overviewSubTitle: "Uniform on web the top manufacturers and suppliers of customize wholesale corporate uniforms, was established in the year --------- at New Delhi, Delhi/NCR-India.",
    overviewText: "If you want to know about modern design, comfortable corporate and industrial staff working uniforms price near me or looking to buy custom men and women corporate uniform In India you are at the right place. We have 20+ years of experience & expertise in manufacturing unique and extraordinary uniforms for different streams. We make extraordinary designs by blending the right concepts, color, methods and fabrics which is later metamorphosed to extraordinary uniforms. We have a range of products waiting to be used by our valuable customers. We are specialized corporate and industry custom design uniform manufacturers in India",
    sideImgText1: "We “uniform on web” are a sole proprietorship based firm, engaged as the foremost manufacturer, wholesaler and retailer of corporate clothing and workwear uniforms.",
    sideImgText2: "Our range of logo uniform work Wear for Mens and women includes:-hospital staff uniforms, hospitality uniforms, beauty salons uniforms, receptionist uniforms, industrial uniforms, restaurant & bar uniforms, cafe uniforms, staff uniforms, air hostess uniforms chefs uniforms, engineers maintenance uniforms, factory workers uniforms, security guard uniform, construction uniforms, spa uniform, nursing uniforms, sports uniform, retail store uniform, gas station staff uniforms, gym staff uniforms, patient uniforms, departmental store uniforms ,horticulture safety uniforms, peon uniforms, photographers uniforms, drivers uniforms, plumbing & electrical workers uniforms, hostel staff uniforms. And many more.",
    sideImgText3: "All our corporate uniform unisex uniforms are developed following the current fashion trends and as per the industry guidelines. Owing to excellent fitting, color fastness, intricate designs and comfortability, our products are widely acclaimed by the clients across the globe -Canada, Mexico and the United States, Austria, Belgium, Bulgaria, Croatia, Republic of Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain and Sweden. Saudi Arabia, Kuwait, Yemen, Oman, Bahrain, Hong Kong, Japan, Macau, Mongolia and South Korea.",
    descriptionText1: "Being a customer-oriented organization, all our efforts are directed towards winning the optimum level of satisfaction for our clients. Our entire range is developed by a team of designers and craftsmen, keeping in mind the set parameters of quality. We are also known as trusted manufacturers and suppliers of custom design professional workwear corporate apparel in India for all the products as per our clients' demand and choice. Moreover, customers can avail these uniforms at reasonable prices and hence, avoid their budgetary constraints.",
    descriptionText2Light: "Our Business markets include ",
    descriptionText2Dark: "Gurugram, Manesar, Delhi, Mumbai, Bangalore, Hyderabad, Ahmedabad, Chennai, Kolkata, Surat, Ghaziabad, Ludhiana, Agra, Nashik, Faridabad, Meerut, Rajkot, Kalyan-Dombivali, Vasai-Virar, Varanasi, Srinagar, Pune, Jaipur, Lucknow, Kanpur, Nagpur, Indore, Thane, Bhopal, Visakhapatnam, Pimpri-Chinchwad, Patna and Vadodara.",
    descriptionText3: "Feel free to contact us for any type of latest design corporate uniform for office staff requirements. Our team is committed towards giving the best service with best result hence our qualified team ensures timely delivery of excellent high quality custom logo corporate uniform to our customers.",
    descriptionBtn: "contact now",
    factsheetHead: "Factsheet",
    businessHead: "Nature of Business -",
    business: "Manufacturer, Wholesaler, Trader, Retailer, Supplier, Distributor",
    ceoHead: "Company CEO -",
    ceoName: "Mr. Joshi",
    locationHead: "Company location -",
    locationAdd: "New Delhi- 110051, Delhi, India",
    employeeHead: "Total Number of Employees -",
    employeeNo: "Unto 10 People",
    yearHead: "Year of Establishment -",
    yearOfEstablishment: "2000",
    statusHead: "Legal Status of Firm Individual -",
    status: "Proprietor",
    turnoverHead: "Annual Turnover -",
    turnover: "Rs. 1 - 3 Crore",
    uspHead: "Company USP",
    UspText: [
        {
            id: "001",
            uspTeaxt1: "Primary Competitive Advantage"
        },
        {
            id: "002",
            uspTeaxt1: "Experienced R & D Department"
        },
        {
            id: "003",
            uspTeaxt1: "Good Financial Position & TQM"
        },
        {
            id: "004",
            uspTeaxt1: "Large Product Line"
        },
        {
            id: "005",
            uspTeaxt1: "Large Production Capacity"
        },
        {
            id: "006",
            uspTeaxt1: "Provide Customized Solutions"
        },
        {
            id: "007",
            uspTeaxt1: "Quality Measures / Testing Facilities Yes"
        }
    ],
    profileHead: "Statutory Profile",
    Profiles: [
        {
            id: "001",
            profile: "Banker"
        },
        {
            id: "001",
            profile: "ABC-------------------"
        },
        {
            id: "001",
            profile: "ABC-------------"
        },
        {
            id: "001",
            profile: "GST No.------- ABCDEFGH"
        },
        {
            id: "001",
            profile: "HSN Code"
        }
    ],
    hsnHead: "HSN Description",
    hsnNo1: "6113",
    hsnText1: "Garments, made up of knited or crocheted fabrics of heading 5903, 5906 or 5907",
    hsnNo2: "6217",
    hsnText2: "Other made up clothing accessories; parts of garments or of clothing accessories, other than those of heading 6212",
    teamHead: "Our Team",
    teamText1: "We are assisted by a team of diligent professionals at every stage of our designing and stitching process. All these experts are hired after going through stringent recruitment procedures, which includes practical exams and face to face interviews. To complete the tasks successfully, our professionals work in close coordination among each other. Moreover, these experts also maintain friendly relationships with the clients so as to know their exact needs and fulfill the same in a streamlined manner.",
    teamText2: "Further, to keep our experts abreast of the changing trends that emerge in the fashion industry, we arrange regular training sessions, seminars, exhibitions and workshops.",
    membersHead: "Our team consists of the following members",
    Members: [
        {
            id: "001",
            member: "Designers"
        },
        {
            id: "002",
            member: "Skilled tailoring professionals"
        },
        {
            id: "003",
            member: "Client relation executives"
        },
        {
            id: "004",
            member: "Warehousing managers"
        },
        {
            id: "005",
            member: "Packaging experts"
        },
        {
            id: "006",
            member: "Sales and marketing personnel"
        }
    ],
    paymentHead: "Packaging/Payment and Shipment Details",
    PaymentMode: [
        {
            id: "001",
            paymentMode1: "Payment Mode"
        },
        {
            id: "002",
            paymentMode1: "Cash"
        },
        {
            id: "003",
            paymentMode1: "Credit Card"
        },
        {
            id: "004",
            paymentMode1: "Bank Transfer"
        },
        {
            id: "005",
            paymentMode1: "DD"
        },
        {
            id: "006",
            paymentMode1: "Cheque"
        },
        {
            id: "007",
            paymentMode1: "Online"
        }
    ],
    shipmentMode: "Shipment Mode By Road",
    whyUsHead: "Why Us?",
    whyUsText: "We are widely recognized in this sector due to our premium quality and trendy range of garments which we provide in several colors, patterns and designs. Due to the following unique reasons, we are able to carve a niche in this field:",
    WhyUs1: [
        {
            id: "001",
            whyUsDetails: "State-of-the-art infrastructural base"
        },
        {
            id: "002",
            whyUsDetails: "Affordable price structure"
        },
        {
            id: "003",
            whyUsDetails: "Wide range of garments"
        }
    ],
    WhyUs2: [
        {
            id: "001",
            whyUsDetails: "Customized options"
        },
        {
            id: "002",
            whyUsDetails: "Quality-proven range"
        },
        {
            id: "003",
            whyUsDetails: "Prompt delivery"
        },
        {
            id: "004",
            whyUsDetails: "Positive records"
        },
        {
            id: "005",
            whyUsDetails: "Adroit team of professionals"
        }
    ],
    WhyUs3: [
        {
            id: "001",
            whyUsDetails: "Well equipped warehouse"
        },
        {
            id: "002",
            whyUsDetails: "Timely delivery"
        },
        {
            id: "003",
            whyUsDetails: "Wide distribution network"
        }
    ]
};

;// CONCATENATED MODULE: ./src/components/molecules/aboutUs/banner.jsx




const banner_Banner = ({ aboutUs })=>{
    let { topImgHead, topImgText } = aboutUsLables;
    return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsxs("div", {
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "relative",
                    children: /*#__PURE__*/ _jsx(Image, {
                        src: "/images/aboutUs1.png",
                        alt: "Overview Image",
                        height: 518,
                        width: 1442
                    })
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "text-center text-white absolute top-56 left-96",
                    children: [
                        /*#__PURE__*/ _jsx("p", {
                            className: "font-medium text-8xl",
                            children: topImgHead
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            className: "font-normal text-4xl",
                            children: topImgText
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const banner = ((/* unused pure expression or super */ null && (banner_Banner)));

;// CONCATENATED MODULE: ./src/components/molecules/aboutUs/overview.jsx




const overview_Overview = ({ aboutUs })=>{
    let { overviewHead, overviewSubTitle, overviewText } = aboutUsLables;
    return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsxs("div", {
            className: " overview text-center px-40 py-20",
            children: [
                /*#__PURE__*/ _jsx("h3", {
                    className: "font-medium text-4xl ",
                    children: overviewHead
                }),
                /*#__PURE__*/ _jsx("p", {
                    className: "text-xl py-8 leading-7",
                    children: overviewSubTitle
                }),
                /*#__PURE__*/ _jsx("p", {
                    className: "text-base leading-5",
                    children: overviewText
                })
            ]
        })
    });
};
/* harmony default export */ const overview = ((/* unused pure expression or super */ null && (overview_Overview)));

;// CONCATENATED MODULE: ./src/components/molecules/aboutUs/sideImageText.jsx




const sideImageText_SideImageText = ({ aboutUs })=>{
    let { sideImgText1, sideImgText2, sideImgText3 } = aboutUsLables;
    return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "overview flex justify-between px-20 pb-20",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "text text-sm leading-5 w-1/2",
                    children: /*#__PURE__*/ _jsxs("p", {
                        children: [
                            sideImgText1,
                            /*#__PURE__*/ _jsx("br", {}),
                            /*#__PURE__*/ _jsx("br", {}),
                            sideImgText2,
                            /*#__PURE__*/ _jsx("br", {}),
                            /*#__PURE__*/ _jsx("br", {}),
                            sideImgText3
                        ]
                    })
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "image w-1/2",
                    children: /*#__PURE__*/ _jsx(Image, {
                        src: "/images/aboutUs2.png",
                        alt: "Overview Image",
                        height: 541,
                        width: 546
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const sideImageText = ((/* unused pure expression or super */ null && (sideImageText_SideImageText)));

;// CONCATENATED MODULE: ./src/components/molecules/aboutUs/description.jsx




const description_Description = ({ aboutUs })=>{
    let { descriptionText1, descriptionText2Light, descriptionText2Dark, descriptionText3, descriptionBtn } = aboutUsLables;
    return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "overview text-center px-20 pb-14",
            children: [
                /*#__PURE__*/ _jsx("p", {
                    className: "font-normal text-base leading-5",
                    children: descriptionText1
                }),
                /*#__PURE__*/ _jsx("br", {}),
                /*#__PURE__*/ _jsxs("p", {
                    className: "font-normal text-base leading-5",
                    children: [
                        descriptionText2Light,
                        /*#__PURE__*/ _jsx("span", {
                            className: "font-medium text-base leading-5",
                            children: descriptionText2Dark
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("br", {}),
                /*#__PURE__*/ _jsx("br", {}),
                /*#__PURE__*/ _jsx("p", {
                    className: "font-medium text-base leading-5",
                    children: descriptionText3
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "pt-10",
                    children: /*#__PURE__*/ _jsx("button", {
                        className: " border rounded-xl border-current py-2 px-5 ",
                        children: descriptionBtn
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const description = ((/* unused pure expression or super */ null && (description_Description)));

;// CONCATENATED MODULE: ./src/components/molecules/aboutUs/factsheet.jsx



const factsheet_Factsheet = ({ aboutUs })=>{
    let { factsheetHead, businessHead, business, ceoHead, ceoName, locationHead, locationAdd, employeeHead, employeeNo, yearHead, yearOfEstablishment, statusHead, status, turnoverHead, turnover } = aboutUsLables;
    return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "factsheet border-y border-current px-12 py-10",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "factsheet heading font-medium text-3xl leading-9 pb-6",
                    children: factsheetHead
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "factsheet-description",
                    children: [
                        /*#__PURE__*/ _jsxs("p", {
                            className: "text-base font-normal leading-5",
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    className: " font-semibold",
                                    children: businessHead
                                }),
                                " ",
                                business
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("p", {
                            className: "text-base font-normal leading-5",
                            children: [
                                /*#__PURE__*/ _jsxs("span", {
                                    className: " font-semibold",
                                    children: [
                                        ceoHead,
                                        " -"
                                    ]
                                }),
                                " ",
                                ceoName
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("p", {
                            className: "text-base font-normal leading-5",
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    className: " font-semibold",
                                    children: locationHead
                                }),
                                " ",
                                locationAdd
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("p", {
                            className: "text-base font-normal leading-5",
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    className: " font-semibold",
                                    children: employeeHead
                                }),
                                " ",
                                employeeNo
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("p", {
                            className: "text-base font-normal leading-5",
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    className: " font-semibold",
                                    children: yearHead
                                }),
                                " ",
                                yearOfEstablishment
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("p", {
                            className: "text-base font-normal leading-5",
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    className: " font-semibold",
                                    children: statusHead
                                }),
                                " ",
                                status
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("p", {
                            className: "text-base font-normal leading-5",
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    className: " font-semibold",
                                    children: turnoverHead
                                }),
                                " ",
                                turnover
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const factsheet = ((/* unused pure expression or super */ null && (factsheet_Factsheet)));

;// CONCATENATED MODULE: ./src/components/molecules/aboutUs/companyUsp.jsx



const companyUsp_UspHead = ({})=>{
    let { uspHead, UspText } = aboutUsLables;
    return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "companyUps border-y border-current px-12 py-10",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "companyUps heading font-normal text-3xl leading-9 pb-6",
                    children: uspHead
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "companyUps-description text-base font-normal leading-5",
                    children: UspText.map((item)=>/*#__PURE__*/ _jsx("p", {
                            children: item.uspTeaxt1
                        }, item.id))
                })
            ]
        })
    });
};
/* harmony default export */ const companyUsp = ((/* unused pure expression or super */ null && (companyUsp_UspHead)));

;// CONCATENATED MODULE: ./src/components/molecules/aboutUs/statutory.jsx



const statutory_StatutoryProfile = ({ aboutUs })=>{
    let { profileHead, Profiles } = aboutUsLables;
    return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "companyUps border-y border-current px-12 py-10",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "companyUps heading font-normal text-3xl leading-9 pb-6",
                    children: profileHead
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "companyUps-description text-base font-normal leading-5",
                    children: Profiles.map((item)=>/*#__PURE__*/ _jsx("p", {
                            children: item.profile
                        }, item.id))
                })
            ]
        })
    });
};
/* harmony default export */ const statutory = ((/* unused pure expression or super */ null && (statutory_StatutoryProfile)));

;// CONCATENATED MODULE: ./src/components/molecules/aboutUs/hsnDescription.jsx



const hsnDescription_HsnDescription = ({ aboutUs })=>{
    let { hsnHead, hsnNo1, hsnText1, hsnNo2, hsnText2 } = aboutUsLables;
    return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsx("div", {
            className: "hsnDescription border-y border-current px-12 py-10",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "w-1/2",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "hsnDescriptionHeading font-semibold text-xl pb-6",
                        children: hsnHead
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "hsnDescription-description text-sm font-normal ",
                        children: [
                            /*#__PURE__*/ _jsxs("p", {
                                children: [
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "font-semibold",
                                        children: hsnNo1
                                    }),
                                    " ",
                                    hsnText1
                                ]
                            }),
                            /*#__PURE__*/ _jsx("br", {}),
                            /*#__PURE__*/ _jsxs("p", {
                                children: [
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "font-semibold",
                                        children: hsnNo2
                                    }),
                                    " ",
                                    hsnText2
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const hsnDescription = ((/* unused pure expression or super */ null && (hsnDescription_HsnDescription)));

;// CONCATENATED MODULE: ./src/components/molecules/aboutUs/teamMembers.jsx



const teamMembers_TeamMembers = ({ aboutUs })=>{
    let { membersHead, Members } = aboutUsLables;
    return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "font-medium text-center px-16 py-10",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "text-2xl pb-10",
                    children: membersHead
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "text-base flex justify-between",
                    children: Members.map((item)=>/*#__PURE__*/ _jsx("div", {
                            children: item.member
                        }, item.id))
                })
            ]
        })
    });
};
/* harmony default export */ const teamMembers = ((/* unused pure expression or super */ null && (teamMembers_TeamMembers)));

;// CONCATENATED MODULE: ./src/components/molecules/aboutUs/packingDetails.jsx



const packingDetails_PaymentMode = ({ aboutUs })=>{
    let { paymentHead, shipmentMode, PaymentMode } = aboutUsLables;
    return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "atatutoryProfile border-y border-current px-12 py-10",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "factsheet heading font-normal text-3xl leading-9 pb-6",
                    children: paymentHead
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "",
                    children: PaymentMode.map((item)=>/*#__PURE__*/ _jsx("p", {
                            children: item.paymentMode1
                        }, item.id))
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "font-semibold pt-6",
                    children: shipmentMode
                })
            ]
        })
    });
};
/* harmony default export */ const packingDetails = ((/* unused pure expression or super */ null && (packingDetails_PaymentMode)));

;// CONCATENATED MODULE: ./src/components/molecules/aboutUs/whyUs.jsx




const whyUs_WhyUs = ({ aboutUs })=>{
    let { whyUsHead, whyUsText, WhyUs1, WhyUs2, WhyUs3 } = aboutUsLables;
    return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "text-center px-12 py-10",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "whyUsHeading font-semibold text-6xl pb-8",
                    children: whyUsHead
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "whyUsDescription px-28",
                    children: whyUsText
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "text-center pt-10",
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            className: "flex justify-center",
                            children: WhyUs1.map((item)=>/*#__PURE__*/ _jsx("div", {
                                    className: "font-semibold text-base px-6 py-2 m-2 border rounded-3xl border-current",
                                    children: item.whyUsDetails
                                }, item.id))
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "flex justify-center",
                            children: WhyUs2.map((item)=>/*#__PURE__*/ _jsx("div", {
                                    className: "font-semibold text-base px-6 py-2 m-2 border rounded-3xl border-current",
                                    children: item.whyUsDetails
                                }, item.id))
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "flex justify-center",
                            children: WhyUs3.map((item)=>/*#__PURE__*/ _jsx("div", {
                                    className: "font-semibold text-base px-6 py-2 m-2 border rounded-3xl border-current",
                                    children: item.whyUsDetails
                                }, item.id))
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const whyUs = ((/* unused pure expression or super */ null && (whyUs_WhyUs)));

;// CONCATENATED MODULE: ./src/components/molecules/aboutUs/ourTeam.jsx




const ourTeam_OurTeam = ({ aboutUs })=>{
    let { teamHead, teamText1, teamText2 } = aboutUsLables;
    return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    children: /*#__PURE__*/ _jsx(Image, {
                        src: "/images/aboutUs3.png",
                        alt: "Overview Image",
                        height: 539,
                        width: 1448
                    })
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "text-center text-white w-2/3 m-auto relative bottom-96",
                    children: [
                        /*#__PURE__*/ _jsx("h1", {
                            className: "font-medium text-6xl pb-8",
                            children: teamHead
                        }),
                        /*#__PURE__*/ _jsxs("p", {
                            className: "font-normal text-base tracking-tighter",
                            children: [
                                teamText1,
                                /*#__PURE__*/ _jsx("br", {}),
                                /*#__PURE__*/ _jsx("br", {}),
                                teamText2
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const ourTeam = ((/* unused pure expression or super */ null && (ourTeam_OurTeam)));

;// CONCATENATED MODULE: ./src/app/aboutUs/[aboutUs]/page.js















const Page = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        children: [
            /*#__PURE__*/ _jsx(Banner, {}),
            /*#__PURE__*/ _jsx(Overview, {}),
            /*#__PURE__*/ _jsx(SideImageText, {}),
            /*#__PURE__*/ _jsx(Description, {}),
            /*#__PURE__*/ _jsx(Factsheet, {}),
            /*#__PURE__*/ _jsx(UspHead, {}),
            /*#__PURE__*/ _jsx(StatutoryProfile, {}),
            /*#__PURE__*/ _jsx(HsnDescription, {}),
            /*#__PURE__*/ _jsx(OurTeam, {}),
            /*#__PURE__*/ _jsx(TeamMembers, {}),
            /*#__PURE__*/ _jsx(PaymentMode, {}),
            /*#__PURE__*/ _jsx(WhyUs, {})
        ]
    });
};
/* harmony default export */ const page = ((/* unused pure expression or super */ null && (Page)));

;// CONCATENATED MODULE: ./src/components/atoms/Icons/Search.jsx

const Search = ({ width = 24, height = 24, fill = "#1E1E1E", classnames = "", viewBox = "0 0 24 24" })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            className: classnames,
            xmlns: "http://www.w3.org/2000/svg",
            width: width,
            height: height,
            viewBox: viewBox,
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7.3125 11.4375C7.3125 8.05476 10.0548 5.3125 13.4375 5.3125C16.8202 5.3125 19.5625 8.05476 19.5625 11.4375C19.5625 14.8202 16.8202 17.5625 13.4375 17.5625C10.0548 17.5625 7.3125 14.8202 7.3125 11.4375ZM13.4375 3.3125C8.95019 3.3125 5.3125 6.95019 5.3125 11.4375C5.3125 15.9248 8.95019 19.5625 13.4375 19.5625C15.3208 19.5625 17.0544 18.9218 18.4322 17.8464L20.8724 20.2866C21.263 20.6772 21.8961 20.6772 22.2866 20.2866C22.6772 19.8961 22.6772 19.263 22.2866 18.8724L19.8464 16.4322C20.9218 15.0544 21.5625 13.3208 21.5625 11.4375C21.5625 6.95019 17.9248 3.3125 13.4375 3.3125Z",
                fill: fill
            })
        })
    });
};
/* harmony default export */ const Icons_Search = (Search);

// EXTERNAL MODULE: ./src/components/atoms/Icons/Wish.jsx
var Wish = __webpack_require__(1954);
;// CONCATENATED MODULE: ./src/utils/labels/navbarLabels.js
const NavbarLabels = {
    Logo: "Uniform On Web",
    uniformbyProfessionTitle: "UniformbyProfession",
    uniformbyProfessionSrc: "/clp/industrial Clothing",
    Tabs: [
        {
            id: "001",
            TabTitle: "Sale",
            src: "https://www.google.com/"
        },
        {
            id: "002",
            TabTitle: "About",
            src: "/aboutUs/page.js"
        },
        {
            id: "003",
            TabTitle: "Contact Us",
            src: "https://www.google.com/"
        }
    ],
    SearchLink: "https://www.google.com/",
    WishLink: "https://www.youtube.com/"
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/utils/labels/dropdownLables.js
const dropdownLabels = {
    industrialClothingHead: "Industrial Clothing",
    securityGuardUniformHead: "Security Guard Uniform",
    commercialUniformHead: "Commercial  Uniforms",
    corporateUniformHead: "Corporate Uniform",
    hospitalUniformHead: "Hospital Uniforms",
    hotelUniformHead: "Hotel Uniforms",
    schoolUniformHead: "School Uniforms"
};
const industrialClothing = [
    {
        id: 1,
        name: "Safety Suits"
    },
    {
        id: 2,
        name: "Work Clothes"
    },
    {
        id: 3,
        name: "Industrial Aprons"
    },
    {
        id: 4,
        name: "Bee Veil"
    },
    {
        id: 5,
        name: "Chemical Resistant Clothing"
    },
    {
        id: 6,
        name: "Rubber Suit"
    },
    {
        id: 7,
        name: "Insulated Clothing"
    },
    {
        id: 8,
        name: "Fire Proximity Suits"
    },
    {
        id: 9,
        name: "Reflective Clothing"
    },
    {
        id: 10,
        name: "Industrial Coverall"
    },
    {
        id: 11,
        name: "Work Shirts"
    },
    {
        id: 12,
        name: "ESD Garments"
    },
    {
        id: 13,
        name: "Safety T Shirt"
    },
    {
        id: 14,
        name: "Safety Shirt"
    },
    {
        id: 15,
        name: "Working Trouser"
    },
    {
        id: 16,
        name: "High Visibility Clothing"
    },
    {
        id: 17,
        name: "Industrial Trousers"
    },
    {
        id: 18,
        name: "Sand Blasting Suit"
    },
    {
        id: 19,
        name: "Immersion Suit"
    }
];
const securityGuardUniform = [
    {
        id: 1,
        name: "Men Security Uniform"
    },
    {
        id: 2,
        name: "Security Guard Shoes"
    },
    {
        id: 3,
        name: "Security Guard Belt"
    },
    {
        id: 4,
        name: "Security Guard Caps"
    },
    {
        id: 5,
        name: "Security Guard Shirt"
    },
    {
        id: 6,
        name: "Security Jacket"
    }
];
const commercialUniform = [
    {
        id: 1,
        name: "Worker Uniform"
    },
    {
        id: 2,
        name: "Scout Uniforms"
    },
    {
        id: 3,
        name: "Staff Uniform"
    },
    {
        id: 4,
        name: "Corporate Uniform"
    },
    {
        id: 5,
        name: "Promotional Uniform"
    },
    {
        id: 6,
        name: "Driver Uniform"
    },
    {
        id: 7,
        name: "Driver Uniform"
    },
    {
        id: 8,
        name: "Uniform Accessories"
    },
    {
        id: 9,
        name: "Petrol Pump Uniform"
    },
    {
        id: 10,
        name: "Doctor Coat"
    },
    {
        id: 11,
        name: "Advocate Gown"
    },
    {
        id: 12,
        name: "Housekeeping Uniform"
    },
    {
        id: 13,
        name: "Uniform Pants"
    },
    {
        id: 14,
        name: "College Uniform"
    },
    {
        id: 15,
        name: "Uniform Belts"
    },
    {
        id: 16,
        name: "SPA Uniform"
    },
    {
        id: 17,
        name: "Air Hostess Uniform"
    },
    {
        id: 18,
        name: "Uniform Shirt"
    },
    {
        id: 19,
        name: "Technician Uniform"
    },
    {
        id: 20,
        name: "Uniform Cap"
    },
    {
        id: 21,
        name: "Sales Uniform"
    },
    {
        id: 22,
        name: "Drama Dress"
    },
    {
        id: 23,
        name: "Photographer Jackets"
    },
    {
        id: 24,
        name: "Pilot Uniform"
    },
    {
        id: 25,
        name: "Institutional Uniform"
    },
    {
        id: 26,
        name: "Ladies Housekeeping Uniform"
    },
    {
        id: 27,
        name: "Uniform Necktie"
    }
];
const corporateUniform = [
    {
        id: 1,
        name: "Uniform Saree"
    },
    {
        id: 2,
        name: "Logo T Shirt"
    },
    {
        id: 3,
        name: "Men Corporate T Shirt"
    },
    {
        id: 4,
        name: "Men Corporate Uniform"
    },
    {
        id: 5,
        name: "Office Wear"
    },
    {
        id: 6,
        name: "Ladies Corporate Uniform"
    },
    {
        id: 7,
        name: "Men Corporate Shirt"
    },
    {
        id: 8,
        name: "Corporate Shirt"
    },
    {
        id: 9,
        name: "Men Dress Socks"
    },
    {
        id: 10,
        name: "Executive Shirt"
    }
];
const hospitalUniform = [
    {
        id: 1,
        name: "Doctor Coat"
    },
    {
        id: 2,
        name: "Lab Apron"
    },
    {
        id: 3,
        name: "Disposable Lab Coat"
    },
    {
        id: 4,
        name: "School Lab Coat"
    },
    {
        id: 5,
        name: "Nonwoven Lab Coat"
    },
    {
        id: 6,
        name: "Scrub Suits"
    },
    {
        id: 7,
        name: "Nurse Uniform"
    },
    {
        id: 8,
        name: "Medical Apron"
    },
    {
        id: 9,
        name: "Medical Scrub"
    },
    {
        id: 10,
        name: "Pharmaceutical Uniform"
    },
    {
        id: 11,
        name: "Nurse Coat"
    },
    {
        id: 12,
        name: "Ward Boy Uniform"
    },
    {
        id: 13,
        name: "Medical Scrub Set"
    },
    {
        id: 14,
        name: "Dentist Apron"
    },
    {
        id: 15,
        name: "Scrub Tops"
    },
    {
        id: 16,
        name: "Nurse Cap"
    },
    {
        id: 17,
        name: "Cotton Scrubs"
    },
    {
        id: 18,
        name: "Nurse Tops"
    },
    {
        id: 19,
        name: "Scrub Pant"
    }
];
const hotelUniform = [
    {
        id: 1,
        name: "Housekeeping Uniform"
    },
    {
        id: 2,
        name: "Chef Coats"
    },
    {
        id: 3,
        name: "Waiter Uniform"
    },
    {
        id: 4,
        name: "Catering Uniform"
    },
    {
        id: 5,
        name: "Restaurant Uniform"
    },
    {
        id: 6,
        name: "Chef Uniform"
    },
    {
        id: 7,
        name: "Bell Boy Uniform"
    },
    {
        id: 8,
        name: "Chef Caps"
    },
    {
        id: 9,
        name: "Oven Mitt"
    },
    {
        id: 10,
        name: "Chef Hat"
    },
    {
        id: 11,
        name: "Chef Pants"
    },
    {
        id: 12,
        name: "Chef Scarf"
    },
    {
        id: 13,
        name: "Chef Shirt"
    },
    {
        id: 14,
        name: "Chef Skull Cap"
    }
];
const schoolUniform = [
    {
        id: 1,
        name: "Kids School Uniforms"
    },
    {
        id: 2,
        name: "School T Shirts"
    },
    {
        id: 3,
        name: "School Belt"
    },
    {
        id: 4,
        name: "School Tie"
    },
    {
        id: 5,
        name: "School Uniform Shirt"
    },
    {
        id: 6,
        name: "Boys School Uniform"
    },
    {
        id: 7,
        name: "School Blazer"
    },
    {
        id: 8,
        name: "School Sweater"
    },
    {
        id: 9,
        name: "Girls School Uniform"
    },
    {
        id: 10,
        name: "School Sports Uniform"
    },
    {
        id: 11,
        name: "School Tracksuit"
    },
    {
        id: 12,
        name: "School Trousers"
    }
];

;// CONCATENATED MODULE: ./src/components/molecules/Dropdown/industrialClothing.jsx




const IndustrialClothing = ()=>{
    let { industrialClothingHead } = dropdownLabels;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "font-bold text-sm leading-5",
                children: industrialClothingHead
            }),
            industrialClothing.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "list-none font-medium text-xs leading-4",
                    children: item.name
                }, item.id))
        ]
    });
};
/* harmony default export */ const Dropdown_industrialClothing = (IndustrialClothing);

;// CONCATENATED MODULE: ./src/components/molecules/Dropdown/securityGuardUniform.jsx




const SecurityGuardUniform = ()=>{
    let { securityGuardUniformHead } = dropdownLabels;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "font-bold text-sm leading-5",
                children: securityGuardUniformHead
            }),
            securityGuardUniform.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "list-none font-medium text-xs leading-4",
                    children: item.name
                }, item.id))
        ]
    });
};
/* harmony default export */ const Dropdown_securityGuardUniform = (SecurityGuardUniform);

;// CONCATENATED MODULE: ./src/components/molecules/Dropdown/commercialUniforms.jsx




const CommercialUniforms = ()=>{
    let { commercialUniformHead } = dropdownLabels;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "font-bold text-sm leading-5",
                children: commercialUniformHead
            }),
            commercialUniform.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "list-none font-medium text-xs leading-4",
                    children: item.name
                }, item.id))
        ]
    });
};
/* harmony default export */ const commercialUniforms = (CommercialUniforms);

;// CONCATENATED MODULE: ./src/components/molecules/Dropdown/corporateUniform.jsx



const CorporateUniform = ()=>{
    let { corporateUniformHead } = dropdownLabels;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "font-bold text-sm leading-5",
                children: corporateUniformHead
            }),
            corporateUniform.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "list-none font-medium text-xs leading-4",
                    children: item.name
                }, item.id))
        ]
    });
};
/* harmony default export */ const Dropdown_corporateUniform = (CorporateUniform);

;// CONCATENATED MODULE: ./src/components/molecules/Dropdown/hospitalUniforms.jsx



const HospitalUniforms = ()=>{
    let { hospitalUniformHead } = dropdownLabels;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "font-bold text-sm leading-5",
                children: hospitalUniformHead
            }),
            hospitalUniform.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "list-none font-medium text-xs leading-4",
                    children: item.name
                }, item.id))
        ]
    });
};
/* harmony default export */ const hospitalUniforms = (HospitalUniforms);

;// CONCATENATED MODULE: ./src/components/molecules/Dropdown/hotelUniforms.jsx



const HotelUniforms = ()=>{
    let { hotelUniformHead } = dropdownLabels;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "font-bold text-sm leading-5",
                children: hotelUniformHead
            }),
            hotelUniform.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "list-none font-medium text-xs leading-4",
                    children: item.name
                }, item.id))
        ]
    });
};
/* harmony default export */ const hotelUniforms = (HotelUniforms);

;// CONCATENATED MODULE: ./src/components/molecules/Dropdown/schoolUniforms.jsx



const SchoolUniforms = ()=>{
    let { schoolUniformHead } = dropdownLabels;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "font-bold text-sm leading-5",
                children: schoolUniformHead
            }),
            schoolUniform.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "list-none font-medium text-xs leading-4",
                    children: item.name
                }, item.id))
        ]
    });
};
/* harmony default export */ const schoolUniforms = (SchoolUniforms);

;// CONCATENATED MODULE: ./src/components/molecules/Dropdown/index.jsx










const Dropdown = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between absolute top-28 bg-white z-10 w-full p-2.5",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Dropdown_industrialClothing, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Dropdown_securityGuardUniform, {})
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(commercialUniforms, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Dropdown_corporateUniform, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(hospitalUniforms, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(hotelUniforms, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(schoolUniforms, {})
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const molecules_Dropdown = (Dropdown);

;// CONCATENATED MODULE: ./src/components/molecules/navbar.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const Navbar = ()=>{
    let { Logo, Tabs, SearchLink, uniformbyProfessionSrc, uniformbyProfessionTitle, WishLink } = NavbarLabels;
    const [isHovered, setIsHovered] = (0,react_.useState)(false);
    const handleMouseEnter = ()=>{
        setIsHovered(true);
    };
    const handleMouseLeave = ()=>{
        setIsHovered(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: " px-14 h-24 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] bg-background flex w-full py-7",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-black text-3xl not-italic font-black leading-7 tracking-[-1.066px] float-left font-bold ",
                    children: Logo
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "inline-flex pl-[20%] h-4 items-start gap-14 shrink-0 text-gray-800",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: uniformbyProfessionSrc,
                            className: "cursor-pointer",
                            onMouseEnter: handleMouseEnter,
                            onMouseLeave: handleMouseLeave,
                            children: uniformbyProfessionTitle
                        })
                    }),
                    Tabs.map(({ id, TabTitle, src })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "cursor-pointer",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                href: src,
                                className: "text-base not-italic font-normal leading-4 tracking-[-0.64px]",
                                children: [
                                    " ",
                                    TabTitle
                                ]
                            })
                        }, id))
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex pl-[20%] gap-2.5  float-right",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "cursor-pointer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: SearchLink,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Icons_Search, {})
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "cursor-pointer"
                    })
                ]
            }),
            isHovered && /*#__PURE__*/ jsx_runtime_.jsx(molecules_Dropdown, {})
        ]
    });
};
/* harmony default export */ const navbar = (Navbar);


/***/ }),

/***/ 7651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
;// CONCATENATED MODULE: ./src/components/molecules/footerList.jsx



const FooterList = (props)=>{
    let { title, listItems } = props.contents;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "mb-4 text-sm font-semibold text-gray-900 ",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "text-gray-700  font-normal",
                children: listItems.map(({ item, id, link = "" })=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "mb-2",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: link,
                            children: [
                                " ",
                                item
                            ]
                        })
                    }, id))
            })
        ]
    });
};
/* harmony default export */ const footerList = (/*#__PURE__*/(0,react_shared_subset.memo)(FooterList));

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/components/molecules/footerNewsLetter.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\uniform-on-web-fe\src\components\molecules\footerNewsLetter.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const footerNewsLetter = (__default__);
;// CONCATENATED MODULE: ./src/components/molecules/socialMediaIcons.jsx


const SocialMediaIcons = (props)=>{
    let { name, iconPath, link } = props.socialMedia;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
        href: link,
        target: "_blank",
        className: "text-gray-400 hover:text-gray-900 ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                className: "w-6 h-6",
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                viewBox: "0 0 25 24",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: iconPath
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "sr-only",
                children: name
            })
        ]
    });
};
/* harmony default export */ const socialMediaIcons = (/*#__PURE__*/(0,react_shared_subset.memo)(SocialMediaIcons));

;// CONCATENATED MODULE: ./src/components/footer.jsx




const Footer = (props)=>{
    let { quickLink, company, customerService, Shop } = {
        quickLink: {
            title: "Quick link",
            listItems: [
                {
                    id: 1,
                    item: "Home",
                    link: "/"
                },
                {
                    id: 2,
                    item: "FAQs",
                    link: "/faqs"
                },
                {
                    id: 3,
                    item: "Blog",
                    link: "/blog"
                },
                {
                    id: 4,
                    item: "Trade Enquiries",
                    link: "/trade"
                },
                {
                    id: 5,
                    item: "Career",
                    link: "/career"
                },
                {
                    id: 6,
                    item: "Sitemap",
                    link: "/sitemap"
                }
            ]
        },
        company: {
            title: "Company",
            listItems: [
                {
                    id: 1,
                    item: "About Us",
                    link: "https://www.google.com/"
                },
                {
                    id: 2,
                    item: "Testimonials",
                    link: "https://www.google.com/"
                }
            ]
        },
        customerService: {
            title: "Customer Service",
            listItems: [
                {
                    id: 1,
                    item: "Hoabcdef@gmail.comme"
                },
                {
                    id: 2,
                    item: "+91-12345-67891"
                }
            ]
        },
        Shop: {
            title: "Shop",
            listItems: [
                {
                    id: 1,
                    item: "Commercial Uniform",
                    link: "/Commercial Uniform"
                },
                {
                    id: 2,
                    item: "Industrial Clothing",
                    link: "http://localhost:3000/clp/industrial-clothing"
                },
                {
                    id: 3,
                    item: "Hospital Uniforms",
                    link: "/Hospital Uniforms"
                },
                {
                    id: 4,
                    item: "Corporate Uniform",
                    link: "http://localhost:3000/clp/corporate-uniforms"
                },
                {
                    id: 5,
                    item: "Hotel Uniforms",
                    link: "http://localhost:3000/clp/hotel-uniforms"
                }
            ]
        }
    };
    let socialMediaAccounts = [
        {
            id: "1",
            name: "twitter",
            link: "https://twitter.com/",
            iconPath: "M22.1094 5.875C21.3594 6.25 20.6094 6.375 19.7344 6.5C20.6094 6 21.2344 5.25 21.4844 4.25C20.7344 4.75 19.8594 5 18.8594 5.25C18.1094 4.5 16.9844 4 15.8594 4C13.7344 4 11.8594 5.875 11.8594 8.125C11.8594 8.5 11.8594 8.75 11.9844 9C8.60938 8.875 5.48438 7.25 3.48438 4.75C3.10938 5.375 2.98438 6 2.98438 6.875C2.98438 8.25 3.73438 9.5 4.85938 10.25C4.23438 10.25 3.60938 10 2.98438 9.75C2.98438 11.75 4.35938 13.375 6.23438 13.75C5.85938 13.875 5.48438 13.875 5.10938 13.875C4.85938 13.875 4.60938 13.875 4.35938 13.75C4.85938 15.375 6.35938 16.625 8.23438 16.625C6.85938 17.75 5.10938 18.375 3.10938 18.375C2.73438 18.375 2.48438 18.375 2.10938 18.375C3.98438 19.5 6.10938 20.25 8.35938 20.25C15.8594 20.25 19.9844 14 19.9844 8.625C19.9844 8.5 19.9844 8.25 19.9844 8.125C20.8594 7.5 21.6094 6.75 22.1094 5.875Z"
        },
        {
            id: "2",
            name: "FaceBook",
            link: "https://www.facebook.com/",
            iconPath: "M22.1094 12.0022C22.1098 10.091 21.5626 8.2198 20.5325 6.61003C19.5024 5.00026 18.0326 3.71938 16.2971 2.91906C14.5616 2.11874 12.6331 1.8325 10.7399 2.09422C8.84677 2.35595 7.06828 3.15468 5.61502 4.39585C4.16175 5.63701 3.09459 7.26863 2.53987 9.0975C1.98516 10.9264 1.96614 12.8759 2.48506 14.7152C3.00398 16.5546 4.03911 18.2067 5.46787 19.476C6.89664 20.7453 8.65921 21.5786 10.5469 21.8772V14.8922H8.00813V12.0022H10.5469V9.79843C10.4922 9.28399 10.5514 8.76382 10.7202 8.2748C10.889 7.78577 11.1633 7.33986 11.5236 6.96866C11.8839 6.59746 12.3215 6.31007 12.8053 6.12684C13.2891 5.94362 13.8073 5.86905 14.3231 5.90843C15.0732 5.91828 15.8215 5.98346 16.5619 6.10343V8.56718H15.3019C15.0873 8.53911 14.8691 8.55967 14.6634 8.62733C14.4578 8.69498 14.2701 8.80801 14.114 8.95804C13.958 9.10807 13.8377 9.29127 13.762 9.49408C13.6864 9.69689 13.6573 9.91411 13.6769 10.1297V12.0047H16.4506L16.0069 14.8947H13.6719V21.8834C16.0247 21.5112 18.1674 20.3114 19.7142 18.4999C21.261 16.6884 22.1104 14.3842 22.1094 12.0022Z"
        },
        {
            id: "3",
            name: "LinkedIn",
            link: "https://www.linkedin.com/",
            iconPath: "M21.2344 2H2.98438C2.48438 2 2.10938 2.375 2.10938 2.875V21.25C2.10938 21.625 2.48438 22 2.98438 22H21.3594C21.8594 22 22.2344 21.625 22.2344 21.125V2.875C22.1094 2.375 21.7344 2 21.2344 2ZM7.98438 19H5.10938V9.5H8.10938V19H7.98438ZM6.60938 8.25C5.60938 8.25 4.85938 7.375 4.85938 6.5C4.85938 5.5 5.60938 4.75 6.60938 4.75C7.60938 4.75 8.35938 5.5 8.35938 6.5C8.23438 7.375 7.48438 8.25 6.60938 8.25ZM19.1094 19H16.1094V14.375C16.1094 13.25 16.1094 11.875 14.6094 11.875C13.1094 11.875 12.8594 13.125 12.8594 14.375V19.125H9.85938V9.5H12.7344V10.75C13.1094 10 14.1094 9.25 15.4844 9.25C18.4844 9.25 18.9844 11.25 18.9844 13.75V19H19.1094Z"
        },
        {
            id: "4",
            name: "Pinterest",
            link: "https://in.pinterest.com/",
            iconPath: "M12.1094 2C6.60938 2 2.10938 6.5 2.10938 12C2.10938 16.25 4.73438 19.875 8.48438 21.25C8.35938 20.5 8.35938 19.25 8.48438 18.375C8.60938 17.625 9.60938 13.375 9.60938 13.375C9.60938 13.375 9.35938 12.875 9.35938 12C9.35938 10.625 10.2344 9.5 11.2344 9.5C12.1094 9.5 12.4844 10.125 12.4844 10.875C12.4844 11.75 11.9844 13 11.6094 14.25C11.3594 15.25 12.1094 16 13.1094 16C14.8594 16 16.2344 14.125 16.2344 11.375C16.2344 9 14.4844 7.25 12.1094 7.25C9.23438 7.25 7.60938 9.375 7.60938 11.625C7.60938 12.5 7.98438 13.375 8.35938 13.875C8.35938 14.125 8.35938 14.25 8.35938 14.375C8.23438 14.75 8.10938 15.375 8.10938 15.5C8.10938 15.625 7.98438 15.75 7.73438 15.625C6.48438 15 5.73438 13.25 5.73438 11.75C5.73438 8.625 7.98438 5.75 12.3594 5.75C15.8594 5.75 18.4844 8.25 18.4844 11.5C18.4844 15 16.3594 17.75 13.2344 17.75C12.2344 17.75 11.2344 17.25 10.9844 16.625C10.9844 16.625 10.4844 18.5 10.3594 19C10.1094 19.875 9.48438 21 9.10938 21.625C10.1094 21.875 11.1094 22 12.1094 22C17.6094 22 22.1094 17.5 22.1094 12C22.1094 6.5 17.6094 2 12.1094 2Z"
        },
        {
            id: "5",
            name: "instagram",
            link: "https://www.instagram.com/",
            iconPath: "M17.2908 8.06504C17.9536 8.06504 18.4908 7.52778 18.4908 6.86504C18.4908 6.2023 17.9536 5.66504 17.2908 5.66504C16.6281 5.66504 16.0908 6.2023 16.0908 6.86504C16.0908 7.52778 16.6281 8.06504 17.2908 8.06504Z M12.1094 17C9.35188 17 7.10938 14.7575 7.10938 12C7.10938 9.2425 9.35188 7 12.1094 7C14.8669 7 17.1094 9.2425 17.1094 12C17.1094 14.7575 14.8669 17 12.1094 17ZM12.1094 9.5C10.7307 9.5 9.60938 10.6213 9.60938 12C9.60938 13.3787 10.7307 14.5 12.1094 14.5C13.4881 14.5 14.6094 13.3787 14.6094 12C14.6094 10.6213 13.4881 9.5 12.1094 9.5Z M17.1094 22H7.10938C4.53938 22 2.10938 19.57 2.10938 17V7C2.10938 4.43 4.53938 2 7.10938 2H17.1094C19.6794 2 22.1094 4.43 22.1094 7V17C22.1094 19.57 19.6794 22 17.1094 22ZM7.10938 4.5C5.94062 4.5 4.60938 5.83125 4.60938 7V17C4.60938 18.1912 5.91813 19.5 7.10938 19.5H17.1094C18.2782 19.5 19.6094 18.1688 19.6094 17V7C19.6094 5.83125 18.2782 4.5 17.1094 4.5H7.10938Z"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mx-auto w-full px-12",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-2 gap-8 py-6 lg:py-8 md:grid-cols-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(footerList, {
                            contents: quickLink
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(footerList, {
                                contents: company
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mt-9",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(footerList, {
                                    contents: customerService
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(footerList, {
                            contents: Shop
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(footerNewsLetter, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "px-4 mt-16 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-lg text-gray-500 font-black dark:text-white ",
                        children: "Uniform on Web"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex mt-4 space-x-5 sm:justify-center md:mt-0",
                        children: socialMediaAccounts.map((accounts)=>/*#__PURE__*/ jsx_runtime_.jsx(socialMediaIcons, {
                                socialMedia: accounts
                            }, accounts.id))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: ./src/components/molecules/navbar.jsx

const navbar_proxy = (0,module_proxy.createProxy)(String.raw`D:\uniform-on-web-fe\src\components\molecules\navbar.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: navbar_esModule, $$typeof: navbar_$$typeof } = navbar_proxy;
const navbar_default_ = navbar_proxy.default;


/* harmony default export */ const navbar = (navbar_default_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
;// CONCATENATED MODULE: ./src/app/layout.js




function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: "bg-background overflow-x-hidden",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(navbar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "px-12",
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
            ]
        })
    });
}


/***/ }),

/***/ 2844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ NotFound)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/utils/labels/not-foundLabels.js
const notFoundLabels = {
    title: "Not Found",
    description: "Could not find requested resource",
    linkText: "Return Home"
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/app/not-found.js



function NotFound() {
    let { title, description, linkText } = notFoundLabels;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "  py-40  mx-auto max-w-screen-xl text-center ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-6xl font-medium mb-2",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: " text-3xl py-3",
                children: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: linkText
            })
        ]
    });
}


/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;