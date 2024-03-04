"use strict";
exports.id = 355;
exports.ids = [355];
exports.modules = {

/***/ 4228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ atoms_ImageCard)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/components/atoms/Icons/Wish.jsx

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
/* harmony default export */ const Icons_Wish = ((/* unused pure expression or super */ null && (Wish)));

;// CONCATENATED MODULE: ./src/components/atoms/ImageCard.jsx


const ImageCard = ({ iconDisplay, classnames, productImage })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${classnames} relative overflow-hidden`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "w-full  h-full bg-center hover:scale-110 transition-all duration-700",
            style: {
                backgroundSize: "cover",
                backgroundImage: `url(${productImage})`
            }
        })
    });
};
/* harmony default export */ const atoms_ImageCard = (ImageCard);


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