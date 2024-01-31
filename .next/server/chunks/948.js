"use strict";
exports.id = 948;
exports.ids = [948];
exports.modules = {

/***/ 9478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ tabs)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/components/atoms/Tabs/description.jsx


const Description = ({ data })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "description-container pt-8",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: " features flex list-none pt-3.5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "heading md:w-1/6 text-lg font-semibold",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Features :"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "feature ml-6 md:ml-0",
                        children: data.features.replace(/@/g, "\n").split("\n").filter((feature)=>feature.trim() !== "").map((feature, index)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: `${index + 1}. ${feature.trim()}`
                            }, index))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const description = (Description);

;// CONCATENATED MODULE: ./src/components/atoms/Tabs/specifications.jsx


const Specifications = ({ data })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("table", {
            className: "table-auto",
            children: /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                children: [
                    {
                        key: "Style",
                        value: data.Style
                    },
                    {
                        key: "Industry",
                        value: data.Industry
                    },
                    {
                        key: "Material",
                        value: data.Material
                    },
                    {
                        key: "MPN",
                        value: data.MPN
                    },
                    {
                        key: "SKU",
                        value: data.SKU
                    },
                    {
                        key: "Department",
                        value: data.Department
                    }
                ].map(({ key, value })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                className: "pr-4 font-semibold",
                                children: key
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                children: typeof value === "object" ? JSON.stringify(value) : String(value)
                            })
                        ]
                    }, key))
            })
        })
    });
};
/* harmony default export */ const specifications = (Specifications);

;// CONCATENATED MODULE: ./src/components/atoms/Tabs/vendorReviews.jsx


const VendorReviews = ()=>{
    const vendorReviews = [
        {
            vendorReview: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem"
        }
    ];
    const vendorReviewFeatures = [
        {
            id: 1,
            venderAndReviewFeature: "1. lorem ipsum lorem ipsum lorem ipsum lorem"
        },
        {
            id: 2,
            venderAndReviewFeature: "2. lorem ipsum lorem ipsum lorem ipsum lorem"
        },
        {
            id: 3,
            venderAndReviewFeature: "3. lorem ipsum lorem ipsum lorem ipsum lorem"
        },
        {
            id: 4,
            venderAndReviewFeature: "4. lorem ipsum lorem ipsum lorem ipsum lorem"
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "vendorReviews-container pt-8",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "description",
                    children: vendorReviews.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: item.vendorReview
                        }, item.id))
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "vendorReviewsFeatures flex list-none pt-3.5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "heading w-1/6 text-lg font-semibold",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "Features :"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "feature",
                            children: vendorReviewFeatures.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: item.venderAndReviewFeature
                                }, item.id))
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const vendorReviews = (VendorReviews);

;// CONCATENATED MODULE: ./src/components/atoms/Tabs/question&Answers.jsx


const QuestionAndAnswers = ({ data })=>{
    const [qAndA, setQAndA] = (0,react_.useState)([]);
    (0,react_.useEffect)(()=>{
        if (data && data.QnA) {
            setQAndA(data.QnA);
        }
    }, [
        data
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "qAndA-container  flex pt-8",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "description",
                children: qAndA.map((qa, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "font-semibold",
                                        children: "Question:"
                                    }),
                                    " ",
                                    qa.Question
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "font-semibold",
                                        children: "Answer:"
                                    }),
                                    " ",
                                    qa.Answer
                                ]
                            })
                        ]
                    }, index))
            })
        })
    });
};
/* harmony default export */ const question_Answers = (QuestionAndAnswers);

// EXTERNAL MODULE: ./src/utils/api.js
var api = __webpack_require__(1905);
;// CONCATENATED MODULE: ./src/components/atoms/Tabs/tabs.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const Tabs = ({ productId })=>{
    const [toggle, setToggle] = (0,react_.useState)(1);
    const [underline, setUnderline] = (0,react_.useState)(1);
    const [tabProductData, setTabProductData] = (0,react_.useState)(null);
    (0,react_.useEffect)(()=>{
        (0,api/* getProductDetailsById */.rh)(productId).then((data)=>{
            if (data && data.data && data.data[0]) {
                setTabProductData(data.data[0].attributes);
            }
        }).catch((error)=>{
            console.error("Error fetching product details:", error);
        });
    }, [
        productId
    ]);
    if (!tabProductData) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "Loading..."
        });
    }
    console.log(tabProductData);
    const updateToggle = (id)=>{
        setToggle(id);
    };
    const updateUnderline = (id)=>{
        setUnderline(id);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "tab md:w-1/2",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "flex justify-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "line cursor-pointer pb-5 text-lg font-semibold",
                            onClick: ()=>{
                                updateToggle(1), updateUnderline(1);
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: underline === 1 ? "show-line border-b-[3px] border-orange-700 pb-5" : "",
                                children: "Description"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "line cursor-pointer pb-5 text-lg font-semibold",
                            onClick: ()=>{
                                updateToggle(2), updateUnderline(2);
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: underline === 2 ? "show-line border-b-[3px] border-orange-700 pb-5" : "",
                                children: "Specifications"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "line cursor-pointer pb-5 text-lg font-semibold",
                            onClick: ()=>{
                                updateToggle(4), updateUnderline(4);
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: underline === 4 ? "show-line border-b-[3px] border-orange-700 pb-5" : "",
                                children: "Question & Answers"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: toggle === 1 ? "block" : "hidden",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(description, {
                        data: tabProductData
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: toggle === 2 ? "block" : "hidden",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(specifications, {
                        data: tabProductData
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: toggle === 3 ? "block" : "hidden",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(vendorReviews, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: toggle === 4 ? "block" : "hidden",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(question_Answers, {
                        data: tabProductData
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const tabs = (Tabs);


/***/ }),

/***/ 2231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Button({ variant, rounded, onClick, children, addStyle }) {
    let className = "font-manrope ";
    if (rounded === "full") {
        className += "rounded-full font-medium text-xs py-1 px-2 md:py-2 md:px-4 border-gray-700 text-gray-900";
    } else if (rounded === "semi") {
        className += "rounded-lg ";
    }
    if (variant === "primary") {
        className += "text-24 font-normal border py-1 px-2 md:py-2 md:px-4 border-gray-700 text-gray-900";
    } else if (variant === "secondary") {
        className += "text-white text-24 font-normal bg-customBrown border-none p-4 space-x-2";
    }
    className += ` ${addStyle || ""}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: className,
        onClick: onClick,
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ })

};
;