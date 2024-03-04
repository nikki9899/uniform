"use strict";
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 3126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ atoms_Pagination)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./src/components/atoms/CircularButton/index.jsx
var CircularButton = __webpack_require__(8003);
;// CONCATENATED MODULE: ./src/components/atoms/Pagination/button.jsx



const Button = ({ children, caption, ...restProps })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CircularButton/* default */.Z, {
        backgroundColor: "white",
        paddingValue: 2,
        border: true,
        ...restProps,
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "absolute bottom-0 left-0 right-0 translate-y-[100%] pt-1 mx-auto text-xs font-medium",
                children: caption
            })
        ]
    });
};
/* harmony default export */ const Pagination_button = (Button);

// EXTERNAL MODULE: ./src/components/atoms/Icons/Carrot.jsx
var Carrot = __webpack_require__(2507);
;// CONCATENATED MODULE: ./src/components/atoms/Pagination/index.jsx




const PrevButton = ({ onClick })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Pagination_button, {
        caption: "back",
        onClick: onClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Carrot/* default */.Z, {
            className: "-rotate-90 text-xl"
        })
    });
};
const NextButton = ({ onClick })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Pagination_button, {
        caption: "next",
        onClick: onClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Carrot/* default */.Z, {
            className: "rotate-90 text-xl"
        })
    });
};
const Pagination = ({ totalPage, currPage, nextPageHandler, prevPageHandler, CustomPrevButton = null, CustomNextButton = null })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center gap-x-4",
        children: [
            CustomPrevButton === null ? /*#__PURE__*/ jsx_runtime_.jsx(PrevButton, {
                onClick: prevPageHandler
            }) : /*#__PURE__*/ jsx_runtime_.jsx(CustomPrevButton, {
                onClick: prevPageHandler
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-base font-medium font-manrope",
                children: [
                    currPage,
                    " of ",
                    totalPage
                ]
            }),
            CustomNextButton === null ? /*#__PURE__*/ jsx_runtime_.jsx(NextButton, {
                onClick: nextPageHandler
            }) : /*#__PURE__*/ jsx_runtime_.jsx(CustomNextButton, {
                onClick: nextPageHandler
            })
        ]
    });
};
/* harmony default export */ const atoms_Pagination = (Pagination);


/***/ }),

/***/ 7972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const IndustrialUniform = ({ heading, description })=>{
    let HeadingString = decodeURIComponent(heading);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-16 md:mt-32",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "md:mb-[44px] text-center text-black text-[30px] xs:text-[40px] sm:text-6xl lg:text-[112px] lg:leading-[80px] font-medium leading-7 md:leading-[66px] xs:tracking-[-1.5px] md:tracking-[-3px]  capitalize",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: HeadingString
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " mt-5 text-center text-gray-700  text-xs xs:text-sm sm:text-[28px] leading-3  lg:text-3xl lg:leading-7 font-normal sm:leading-[22.645px] lowercase font-Poppins;",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: description ?? `BUY customized ${HeadingString} workwear`
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndustrialUniform);


/***/ }),

/***/ 6952:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Grid = ({ cardsPerRow, cardsPerRowMd, children })=>{
    return /*#__PURE__*/ _jsx("div", {
        className: `grid grid-cols-${cardsPerRow} md:grid-cols-${cardsPerRowMd} gap-4`,
        children: children
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Grid)));


/***/ }),

/***/ 9035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   categoriesLabels: () => (/* binding */ categoriesLabels)
/* harmony export */ });
const categoriesLabels = {
    linkText: "explore"
};


/***/ })

};
;