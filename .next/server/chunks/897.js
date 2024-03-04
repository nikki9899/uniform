exports.id = 897;
exports.ids = [897];
exports.modules = {

/***/ 6449:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 6610:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23))

/***/ }),

/***/ 5992:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4324));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8964))

/***/ }),

/***/ 4324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ footer)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
;// CONCATENATED MODULE: ./src/components/molecules/footerList.jsx



const FooterList = ({ contents })=>{
    const { title, listItems } = contents;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "md:text-lg text-[10px] font-semibold mb-2",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                children: listItems.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "mb-2",
                        children: title === "Shop" ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: `/clp/${item.slug}`,
                            className: `text-gray-800 hover:text-blue-500`,
                            onClick: (e)=>item.disabled && e.preventDefault(),
                            children: item.item
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: item.link,
                            className: `text-gray-800  ${item.disabled ? "text-gray-400 opacity-50 " : "text-gray-500 hover:text-blue-500"}`,
                            onClick: (e)=>item.disabled && e.preventDefault(),
                            children: item.item
                        })
                    }, item.id))
            })
        ]
    });
};
/* harmony default export */ const footerList = (FooterList);

;// CONCATENATED MODULE: ./src/utils/labels/footerLabels.js
const footerLabels = {
    newsLater: {
        title: "Uniform on Web Newsletter",
        subTitle: " Get highlights of the most important news delivered to your mail inbox",
        button: "Subscribe"
    }
};

;// CONCATENATED MODULE: ./src/components/molecules/footerNewsLetter.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const FooterNewsLetter = (props)=>{
    const { title, subTitle, button } = footerLabels.newsLater;
    const handelSubscribe = (event)=>{};
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "mb-4 md:text-2xl md:leading-8 lg:text-[28px] lg:leading-9 text-gray-900  text-xl font-semibold leading-7",
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "text-gray-900 font-normal text-xs md:text-sm md:leading-5 lg:text-xl lg:leading-6 leading-4 md:text-base ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "mb-4  ",
                        children: subTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "mb-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid  grid-cols-3 gap-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative col-span-2 ",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "email",
                                        className: " md:w-full sm:w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-[#efefef] w-full",
                                        placeholder: "e-mail"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: "relative text-black w-fit shrink-0",
                                    onClick: handelSubscribe,
                                    children: [
                                        button,
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "z-[-1] absolute top-0 right-0 h-full w-[33%] bg-[#C46145]"
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
/* harmony default export */ const socialMediaIcons = (/*#__PURE__*/(0,react_.memo)(SocialMediaIcons));

// EXTERNAL MODULE: external "next/dist/shared/lib/constants"
var constants_ = __webpack_require__(2887);
// EXTERNAL MODULE: ./src/utils/api.js
var api = __webpack_require__(1905);
;// CONCATENATED MODULE: ./src/components/footer.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const Footer = (props)=>{
    const [shopCategories, setShopCategories] = (0,react_.useState)([]);
    (0,react_.useEffect)(()=>{
        const fetchCategories = async ()=>{
            try {
                const response = await (0,api/* getAPI */.Kf)("home-page");
                const popularCategories = response?.data?.attributes?.popularCategories?.categories?.data;
                setShopCategories(popularCategories);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchCategories();
    }, []);
    let { quickLink, company, customerService } = {
        quickLink: {
            title: "Quick link",
            listItems: [
                {
                    id: 1,
                    item: "Home",
                    link: "/",
                    disabled: false
                },
                {
                    id: 2,
                    item: "FAQs",
                    link: "/faqs",
                    disabled: true
                },
                {
                    id: 3,
                    item: "Blog",
                    link: "/blog",
                    disabled: true
                },
                {
                    id: 4,
                    item: "Trade Enquiries",
                    link: "/trade",
                    disabled: true
                },
                {
                    id: 5,
                    item: "Career",
                    link: "/career",
                    disabled: constants_.TRACE_OUTPUT_VERSION
                },
                {
                    id: 6,
                    item: "Sitemap",
                    link: "/sitemap",
                    disabled: true
                }
            ]
        },
        company: {
            title: "Company",
            listItems: [
                {
                    id: 1,
                    item: "About Us",
                    link: "/aboutUs/page.js",
                    disabled: false
                },
                {
                    id: 2,
                    item: "Testimonials",
                    link: "https://www.google.com/",
                    disabled: true
                }
            ]
        },
        customerService: {
            title: "Customer Service",
            listItems: [
                {
                    id: 1,
                    item: "AJOY1969@gmail.com"
                },
                {
                    id: 2,
                    item: "+91-9891194126"
                }
            ]
        },
        Shop: {
            title: "Shop",
            listItems: [
                {
                    id: 1,
                    item: "School Uniform",
                    link: "/clp/school-uniform",
                    disabled: false
                },
                {
                    id: 2,
                    item: "Industrial Clothing",
                    link: "http://localhost:3000/clp/industrial-clothing",
                    disabled: false
                },
                {
                    id: 3,
                    item: "Hospital Uniforms",
                    link: "/Hospital Uniforms",
                    disabled: false
                },
                {
                    id: 4,
                    item: "Corporate Uniform",
                    link: "http://localhost:3000/clp/corporate-uniforms",
                    disabled: false
                },
                {
                    id: 5,
                    item: "Hotel Uniforms",
                    link: "http://localhost:3000/clp/hotel-uniforms",
                    disabled: false
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
        className: "mx-auto w-full px-4 sm:px-12",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "md:hidden ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mt-32",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(footerNewsLetter, {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex-col",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "ml-11 text-[9px] font-normal",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(footerList, {
                                            contents: quickLink
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "ml-11 text-[9px] font-normal",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(footerList, {
                                            contents: {
                                                title: "Shop",
                                                listItems: shopCategories.map((category)=>({
                                                        id: category.id,
                                                        item: category.attributes.name,
                                                        slug: category.attributes.slug
                                                    }))
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "ml-11 text-[9px] font-normal",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(footerList, {
                                            contents: company
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "ml-11 text-[9px] font-normal",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(footerList, {
                                            contents: customerService
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "px-4 mt-16 py-6 bg-gray-100  dark:bg-gray-100 flex items-center justify-between gap-x-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "leading-4 tracking-tighter text-xs text-gray-500 font-black dark:text-gray-600",
                                children: "Uniform on Web"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex mt-4 space-x-2.5 text-gray-600 ",
                                children: socialMediaAccounts.map((accounts)=>/*#__PURE__*/ jsx_runtime_.jsx(socialMediaIcons, {
                                        socialMedia: accounts
                                    }, accounts.id))
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "hidden md:block ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-2 gap-8 py-6 lg:py-8 sm:grid-cols-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-sm font-normal leading-6 lg:text-[18px] lg:leading-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(footerList, {
                                    contents: quickLink
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-sm font-normal leading-6 lg:text-[18px] lg:leading-6",
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
                                className: "text-sm font-normal leading-6 lg:text-[18px] lg:leading-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(footerList, {
                                    contents: {
                                        title: "Shop",
                                        listItems: shopCategories.map((category)=>({
                                                id: category.id,
                                                item: category.attributes.name,
                                                slug: category.attributes.slug
                                            }))
                                    }
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(footerNewsLetter, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "px-4 mt-16 py-6 bg-gray-100 dark:bg-gray-700 sm:flex md:items-center justify-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-lg text-gray-500 font-black dark:text-white",
                                children: "Uniform on Web"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex mt-4 space-x-5 sm:justify-center sm:mt-0",
                                children: socialMediaAccounts.map((accounts)=>/*#__PURE__*/ jsx_runtime_.jsx(socialMediaIcons, {
                                        socialMedia: accounts
                                    }, accounts.id))
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const footer = (Footer);


/***/ }),

/***/ 8964:
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
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/utils/labels/navbarLabels.js
const NavbarLabels = {
    Logo: "Uniform On Web",
    uniformbyProfessionTitle: "Uniform by Profession",
    uniformbyProfessionSrc: "",
    Tabs: [
        {
            id: "001",
            TabTitle: "About",
            src: "/aboutUs/page.js"
        }
    ],
    SearchLink: "",
    WishLink: ""
};

;// CONCATENATED MODULE: ./src/utils/labels/dropdownLables.js
const dropdownLables_dropdownLabels = {
    industrialClothingHead: "Industrial Clothing",
    securityGuardUniformHead: "Security Guard Uniform",
    commercialUniformHead: "Commercial  Uniforms",
    corporateUniformHead: "Corporate Uniform",
    hospitalUniformHead: "Hospital Uniforms",
    hotelUniformHead: "Hotel Uniforms",
    schoolUniformHead: "School Uniforms"
};
const dropdownLables_industrialClothing = [
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
const dropdownLables_securityGuardUniform = [
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
const dropdownLables_commercialUniform = [
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
const dropdownLables_hospitalUniform = [
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
    return /*#__PURE__*/ _jsxs("div", {
        children: [
            /*#__PURE__*/ _jsx(Link, {
                href: "",
                children: /*#__PURE__*/ _jsx("h3", {
                    className: "font-bold text-sm leading-5 mb-2",
                    children: industrialClothingHead
                })
            }),
            industrialClothing.map((item)=>/*#__PURE__*/ _jsx(Link, {
                    href: "",
                    children: /*#__PURE__*/ _jsx("li", {
                        className: "list-none font-medium text-xs leading-4",
                        children: item.name
                    })
                }, item.id))
        ]
    });
};
/* harmony default export */ const Dropdown_industrialClothing = ((/* unused pure expression or super */ null && (IndustrialClothing)));

;// CONCATENATED MODULE: ./src/components/molecules/Dropdown/securityGuardUniform.jsx





const SecurityGuardUniform = ()=>{
    let { securityGuardUniformHead } = dropdownLabels;
    return /*#__PURE__*/ _jsxs("div", {
        children: [
            /*#__PURE__*/ _jsx(Link, {
                href: "",
                children: /*#__PURE__*/ _jsx("h3", {
                    className: "font-bold text-sm leading-5 mb-2",
                    children: securityGuardUniformHead
                })
            }),
            securityGuardUniform.map((item)=>/*#__PURE__*/ _jsx(Link, {
                    href: "",
                    children: /*#__PURE__*/ _jsx("li", {
                        className: "list-none font-medium text-xs leading-4",
                        children: item.name
                    })
                }, item.id))
        ]
    });
};
/* harmony default export */ const Dropdown_securityGuardUniform = ((/* unused pure expression or super */ null && (SecurityGuardUniform)));

;// CONCATENATED MODULE: ./src/components/molecules/Dropdown/commercialUniforms.jsx





const CommercialUniforms = ()=>{
    let { commercialUniformHead } = dropdownLabels;
    return /*#__PURE__*/ _jsxs("div", {
        children: [
            /*#__PURE__*/ _jsx(Link, {
                href: "",
                children: /*#__PURE__*/ _jsx("h3", {
                    className: "font-bold text-sm leading-5 mb-2",
                    children: commercialUniformHead
                })
            }),
            commercialUniform.map((item)=>/*#__PURE__*/ _jsx(Link, {
                    href: "",
                    children: /*#__PURE__*/ _jsx("li", {
                        className: "list-none font-medium text-xs leading-4",
                        children: item.name
                    })
                }, item.id))
        ]
    });
};
/* harmony default export */ const commercialUniforms = ((/* unused pure expression or super */ null && (CommercialUniforms)));

;// CONCATENATED MODULE: ./src/components/molecules/Dropdown/corporateUniform.jsx




const CorporateUniform = ({ data, handleOnClick })=>{
    let { corporateUniformHead } = dropdownLables_dropdownLabels;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "font-bold text-sm leading-5 mb-2",
                children: corporateUniformHead
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "mt-2",
                children: data.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "list-none font-medium text-xs leading-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `/plp/${item.attributes.name}`,
                            onClick: handleOnClick,
                            children: item.attributes.name
                        })
                    }, item.id))
            })
        ]
    });
};
/* harmony default export */ const Dropdown_corporateUniform = (CorporateUniform);

;// CONCATENATED MODULE: ./src/components/molecules/Dropdown/hospitalUniforms.jsx




const HospitalUniforms = ()=>{
    let { hospitalUniformHead } = dropdownLabels;
    return /*#__PURE__*/ _jsxs("div", {
        children: [
            /*#__PURE__*/ _jsx(Link, {
                href: "",
                children: /*#__PURE__*/ _jsx("h3", {
                    className: "font-bold text-sm leading-5 mb-2",
                    children: hospitalUniformHead
                })
            }),
            hospitalUniform.map((item)=>/*#__PURE__*/ _jsx(Link, {
                    href: "",
                    children: /*#__PURE__*/ _jsx("li", {
                        className: "list-none font-medium text-xs leading-4",
                        children: item.name
                    })
                }, item.id))
        ]
    });
};
/* harmony default export */ const hospitalUniforms = ((/* unused pure expression or super */ null && (HospitalUniforms)));

;// CONCATENATED MODULE: ./src/components/molecules/Dropdown/hotelUniforms.jsx




const HotelUniforms = ({ data, handleOnClick })=>{
    let { hotelUniformHead } = dropdownLables_dropdownLabels;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: "font-bold text-sm leading-5 mb-2",
                    children: hotelUniformHead
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "mt-2",
                children: data.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "list-none font-medium text-xs leading-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `/plp/${item.attributes.name}`,
                            onClick: handleOnClick,
                            children: item.attributes.name
                        })
                    }, item.id))
            })
        ]
    });
};
/* harmony default export */ const hotelUniforms = (HotelUniforms);

;// CONCATENATED MODULE: ./src/components/molecules/Dropdown/schoolUniforms.jsx




const SchoolUniforms = ({ data, handleOnClick })=>{
    let { schoolUniformHead } = dropdownLables_dropdownLabels;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "font-bold text-sm leading-5 mb-2",
                children: schoolUniformHead
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "mt-2",
                children: data.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "list-none font-medium text-xs leading-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `/plp/${item.attributes.name}`,
                            onClick: handleOnClick,
                            children: item.attributes.name
                        })
                    }, item.id))
            })
        ]
    });
};
/* harmony default export */ const schoolUniforms = (SchoolUniforms);

;// CONCATENATED MODULE: ./src/components/molecules/Dropdown/index.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 










const Dropdown = ({ corporateUniformData, schoolUniformData, hotelUniformData, handleOnClick })=>{
    console.log("corporate", corporateUniformData);
    console.log("school", schoolUniformData);
    console.log("hotel", hotelUniformData);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex md:flex-row flex-col justify-between absolute md:top-24 top-12 left-0 bg-white z-10 w-full p-2.5",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Dropdown_corporateUniform, {
                        data: corporateUniformData,
                        handleOnClick: handleOnClick
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx(hotelUniforms, {
                    data: hotelUniformData,
                    handleOnClick: handleOnClick
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx(schoolUniforms, {
                    data: schoolUniformData,
                    handleOnClick: handleOnClick
                })
            })
        ]
    });
};
/* harmony default export */ const molecules_Dropdown = (Dropdown);

// EXTERNAL MODULE: ./src/utils/api.js
var api = __webpack_require__(1905);
;// CONCATENATED MODULE: ./src/components/molecules/navbar.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const Navbar = ()=>{
    let { Logo, Tabs, SearchLink, uniformbyProfessionSrc, uniformbyProfessionTitle, WishLink } = NavbarLabels;
    const [isHovered, setIsHovered] = (0,react_.useState)(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0,react_.useState)(false);
    const [isDropdownOpen, setIsDropdownOpen] = (0,react_.useState)(false);
    const [categories, setCategories] = (0,react_.useState)([]);
    const [corporateUniformData, setCorporateUniformData] = (0,react_.useState)([]);
    const [schoolUniformData, setSchoolUniformData] = (0,react_.useState)([]);
    const [hotelUniformData, setHotelUniformData] = (0,react_.useState)([]);
    const dropdownRef = (0,react_.useRef)(null);
    (0,react_.useEffect)(()=>{
        const fetchCategories = async ()=>{
            try {
                const response = await (0,api/* getAPI */.Kf)("home-page");
                const popularCategories = response?.data?.attributes?.popularCategories?.categories?.data;
                setCategories(popularCategories);
                const corporateUniform = popularCategories.find((category)=>category.attributes.name === "Corporate uniform");
                const schoolUniform = popularCategories.find((category)=>category.attributes.name === "School Uniform");
                const hotelUniform = popularCategories.find((category)=>category.attributes.name === "hoteluniform");
                if (corporateUniform) {
                    setCorporateUniformData(corporateUniform.attributes.sub_categories.data);
                }
                if (schoolUniform) {
                    setSchoolUniformData(schoolUniform.attributes.sub_categories.data);
                }
                if (hotelUniform) {
                    setHotelUniformData(hotelUniform.attributes.sub_categories.data);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchCategories();
    }, []);
    (0,react_.useEffect)(()=>{
        const handleClickOutside = (event)=>{
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsHovered(false);
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        dropdownRef
    ]);
    const handleMobileMenuToggle = ()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (isHovered) {
            setIsHovered(false);
        }
    };
    const handleMouseEnter = ()=>{
        setIsHovered(true);
    };
    const handleMouseLeave = ()=>{
        setIsHovered(false);
    };
    const handleOnClick = ()=>{
        if (isHovered) {
            setIsHovered(false);
        } else {
            setIsHovered(true);
        }
    };
    const handleOnMobileClick = ()=>{
        if (isHovered) {
            setIsHovered(false);
            setIsMobileMenuOpen(false);
        } else {
            setIsHovered(true);
        }
    };
    const handleAboutUs = ()=>{
        setIsMobileMenuOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "px-4 md:px-14  shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] bg-background w-full py-7 flex justify-between md:items-center ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-black md:text-3xl  font-black md:leading-7 tracking-[-0.5px] md:font-bold text-sm  md:mt-5 flex",
                    children: Logo
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `md:hidden flex pl-[20%] gap-2.5 float-right`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "cursor-pointer",
                    onClick: handleMobileMenuToggle,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "bg-black h-1 w-6 mb-1"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "bg-black h-1 w-6 mb-1"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "bg-black h-1 w-6"
                        })
                    ]
                })
            }),
            isMobileMenuOpen && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    ref: dropdownRef,
                    className: "md:hidden absolute top-[75px] left-0 right-0 bg-white z-50",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: uniformbyProfessionSrc,
                            className: "block p-3 border-b border-gray-300  ",
                            onClick: handleOnClick,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: uniformbyProfessionTitle
                            })
                        }),
                        isHovered && /*#__PURE__*/ jsx_runtime_.jsx(molecules_Dropdown, {
                            corporateUniformData: corporateUniformData,
                            schoolUniformData: schoolUniformData,
                            hotelUniformData: hotelUniformData,
                            handleOnClick: handleOnMobileClick
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/aboutUs/page.js",
                            className: "block p-3 border-b border-gray-300",
                            onClick: handleAboutUs,
                            children: "About Us"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `hidden md:flex pl-[20%] h-4 items-start gap-14 shrink-0 text-gray-800 ${isMobileMenuOpen ? "block" : "hidden md:block"}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: " hidden md:inline-flex relative",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: uniformbyProfessionSrc,
                            className: `cursor-pointer ${isHovered ? "text-black" : "text-gray-800"}`,
                            onClick: handleOnClick,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "whitespace-nowrap inline-block font-made-outer-sans lg:text-base sm:text-sm font-normal sm:leading-3 lg:leading-4 tracking-[-0.04em] text-left",
                                children: uniformbyProfessionTitle
                            })
                        })
                    }),
                    Tabs.map(({ id, TabTitle, src })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "cursor-pointer",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: src,
                                className: "text-base not-italic font-normal leading-4 tracking-[-0.64px]",
                                children: TabTitle
                            })
                        }, id))
                ]
            }),
            isHovered && !isMobileMenuOpen && /*#__PURE__*/ jsx_runtime_.jsx(molecules_Dropdown, {
                corporateUniformData: corporateUniformData,
                schoolUniformData: schoolUniformData,
                hotelUniformData: hotelUniformData,
                handleOnClick: handleOnClick
            })
        ]
    });
};
/* harmony default export */ const navbar = (Navbar);


/***/ }),

/***/ 1905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HS: () => (/* binding */ fetchPopularSearches),
/* harmony export */   Kf: () => (/* binding */ getAPI),
/* harmony export */   QH: () => (/* binding */ getProductDetailsByImage),
/* harmony export */   Xp: () => (/* binding */ getProducts),
/* harmony export */   rh: () => (/* binding */ getProductDetailsById),
/* harmony export */   zj: () => (/* binding */ getSubCategories)
/* harmony export */ });
const baseUrl = "http://13.232.103.119:1337/api";
const getAPI = async (path)=>{
    let url = baseUrl + "/home-page?populate=deep";
    try {
        const loadData = await fetch(url, {
            cache: "no-cache"
        });
        if (loadData.ok) {
            let result = await loadData.json();
            return result;
        } else {
            return loadData;
        }
    } catch (error) {
        throw error;
    }
};
// export const getSubCategories = async (category) => {
//     const SubCategoryUrl = `${baseUrl}/sub-categories?filters[category][slug][$eq]=${category}&populate=deep`
//     try {
//         const loadData = await fetch(SubCategoryUrl, { cache: 'no-cache' })
//         if (loadData.ok) {
//             let result = await loadData.json()
//             return result
//         } else {
//             return loadData
//         }
//     } catch (error) {
//         throw error
//     }
// }
const getSubCategories = async (category)=>{
    const SubCategoryUrl = `${baseUrl}/sub-categories?filters[category][slug][$eq]=${category}&populate=deep`;
    try {
        const loadData = await fetch(SubCategoryUrl, {
            cache: "no-cache"
        });
        if (loadData.ok) {
            let result = await loadData.json();
            console.log("result", result);
            return result;
        } else {
            return loadData;
        }
    } catch (error) {
        throw error;
    }
};
const getProducts = async (SubCategoryName)=>{
    let page = 1;
    let pageSize = 10;
    const ProductUrl = `${baseUrl}/products?pagination[page]=${page}&pagination[pageSize]=${pageSize}&filters[sub_category][name][$eq]=${SubCategoryName}&populate=*`;
    try {
        const loadData = await fetch(ProductUrl, {
            cache: "force-cache"
        });
        if (loadData.ok) {
            let result = await loadData.json();
            console.log("result", result);
            return result;
        } else {
            return loadData;
        }
    } catch (error) {
        throw error;
    }
};
const getProductDetailsById = async (productId)=>{
    const productDetailsUrl = `${baseUrl}/product-details?populate=*&filters[product][id][$eq]=${productId}`;
    try {
        const response = await fetch(productDetailsUrl, {
            cache: "no-cache"
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            return response;
        }
    } catch (error) {
        throw error;
    }
};
const getProductDetailsByImage = async (productId)=>{
    const productDetailsUrl = `${baseUrl}/product-details?populate=*&filters[product][id][$eq]=${productId}`;
    try {
        const response = await fetch(productDetailsUrl, {
            cache: "no-cache"
        });
        if (response.ok) {
            const data = await response.json();
            const imageMagnifierData = data.data[0].attributes.images.data.map((image, index)=>({
                    id: index + 10,
                    smallImageSrc: image.attributes.url,
                    largeImageSrc: image.attributes.url,
                    alt: "Product Image"
                }));
            return imageMagnifierData;
        } else {
            return response;
        }
    } catch (error) {
        throw error;
    }
};
const fetchPopularSearches = async ()=>{
    try {
        const response = await getAPI("home-page");
        return response.data.attributes.popularSearches;
    } catch (error) {
        console.error("Error fetching popular searches:", error);
        throw error;
    }
};


/***/ }),

/***/ 4283:
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
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/components/footer.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\nikki\Desktop\unifrom\uniform\src\components\footer.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const footer = (__default__);
;// CONCATENATED MODULE: ./src/components/molecules/navbar.jsx

const navbar_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\nikki\Desktop\unifrom\uniform\src\components\molecules\navbar.jsx`)

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
            className: " w-full  lg:w-full bg-background overflow-x-hidden",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(navbar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "px-4 md:px-12",
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