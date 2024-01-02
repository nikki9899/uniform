"use strict";
exports.id = 7;
exports.ids = [7];
exports.modules = {

/***/ 2507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 2627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_atoms_Icons_Wish__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1954);


const ImageCard = ({ iconDisplay, classnames, productImage })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${classnames} relative overflow-hidden`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full h-full hover:scale-110 transition-all duration-700",
            style: {
                backgroundSize: "cover",
                backgroundImage: `url(${productImage})`
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageCard);


/***/ }),

/***/ 8976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
// EXTERNAL MODULE: ./src/components/atoms/ImageCard.jsx
var ImageCard = __webpack_require__(2627);
;// CONCATENATED MODULE: ./src/utils/labels/label.js
const searchLabels = {
    heading: "popular searches",
    buttontext: "enquire now"
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/molecules/popular.jsx






const Popular = ({ popularSearches: { products: { data = [] } = {
    data: []
} } = {
    data: []
} })=>{
    const items = data.map(({ id, attributes: { Title, description, image } })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "me-7 w-full mb-12",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/pdp/${id}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ImageCard/* default */.Z, {
                        iconDisplay: "flex",
                        classnames: "w-[19rem] h-[26rem] rounded-2xl shrink-0 back",
                        productImage: image.data.attributes.url
                    })
                }, id),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex justify-between my-1 ml-2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "text-sm font-semibold leading-7",
                                children: Title
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-xs font-medium ml-2 text-start text-gray-500 leading-7",
                            children: description
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-left ml-2 my-2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(atoms_button/* default */.Z, {
                                variant: "primary",
                                rounded: "full",
                                children: searchLabels.buttontext
                            })
                        })
                    ]
                })
            ]
        }, id));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "py-4 max-w-full  max-w-screen-full text-center ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-3xl font-normal mb-2 text-left",
                children: searchLabels.heading
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "scrollbar my-9 max-w-screen-full lg flex flex-nowrap overflow-x-scroll  ",
                children: items
            })
        ]
    });
};
/* harmony default export */ const popular = (Popular);


/***/ })

};
;