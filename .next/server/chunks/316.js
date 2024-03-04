exports.id = 316;
exports.ids = [316];
exports.modules = {

/***/ 8003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

const CircularButton = ({ backgroundColor = "black", children, border = false, paddingValue = 4, ...restProps })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: `relative flex justify-center p-${paddingValue} w-fit rounded-full bg-white ${border ? "border border-black hover:border-gray-500" : ""} hover:text-gray-500`,
        ...restProps,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CircularButton);


/***/ }),

/***/ 2507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const Carrot = ({ width = 24, height = 24, className = "", viewBox = "0 0 18 11", fill = "none" })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            className: className,
            width: 24,
            height: 24,
            src: "/svgs/carrot.svg",
            alt: "Carrot "
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carrot);


/***/ }),

/***/ 8976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ popular)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./src/components/atoms/button.js
var atoms_button = __webpack_require__(2231);
// EXTERNAL MODULE: ./src/components/atoms/ImageCard.jsx + 1 modules
var ImageCard = __webpack_require__(4228);
;// CONCATENATED MODULE: ./src/utils/labels/label.js
const searchLabels = {
    heading: "popular searches",
    buttontext: "enquire now"
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/molecules/styles.css
var styles = __webpack_require__(3847);
;// CONCATENATED MODULE: ./src/components/molecules/popular.jsx







const Popular = ({ popularSearches: { products: { data = [] } = {
    data: []
} } = {
    data: []
} })=>{
    const items = data.map(({ id, attributes: { Title, description, image, product_detail } })=>{
        const price = product_detail?.data?.attributes?.price;
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "me-7 w-3/4 md:w-full mb-12",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/pdp/${id}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ImageCard/* default */.Z, {
                        iconDisplay: "flex",
                        classnames: "w-[14rem] h-72 sm:w-64 sm:h-[346px] lg:w-[308px] lg:h-[418px] rounded-2xl shrink-0 back",
                        productImage: image.data.attributes.url
                    })
                }, id),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-between md:mr-6 ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "lg:text-sm sm:text-xs text-[10px] font-bold leading-5 sm:leading-6 lg:leading-7",
                                    children: Title
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                    className: "lg:text-sm sm:text-xs text-[10px] font-bold leading-5 sm:leading-6   ",
                                    children: [
                                        price,
                                        " INR"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "sm:text-[10px] lg:text-xs lg:leading-6 sm:leading-5 text-[8px] leading-4 font-medium ml-2 text-start text-gray-500 ",
                            children: description
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "lg:w-28 lg:h-9 w-[74px] h-[1.5rem] sm:w-[6rem] sm:h-[2rem] text-left ml-2 my-2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(atoms_button/* default */.Z, {
                                variant: "primary",
                                rounded: "full",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "lg:text-xs text-[8px] sm:text-[10px] leading-3 leading-[11px] font-medium lg:leading-4",
                                    children: searchLabels.buttontext
                                })
                            })
                        })
                    ]
                })
            ]
        }, id);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "py-4 max-w-full max-w-screen-full text-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-[18px] leading-[26px] md:text-[34px] font-medium mb-2 text-left",
                children: searchLabels.heading
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "md:my-9  my-5 max-w-screen-full lg overflow-x-auto custom-scrollbar flex flex-nowrap",
                children: items
            })
        ]
    });
};
/* harmony default export */ const popular = (Popular);


/***/ }),

/***/ 3847:
/***/ (() => {



/***/ })

};
;