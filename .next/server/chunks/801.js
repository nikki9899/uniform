"use strict";
exports.id = 801;
exports.ids = [801];
exports.modules = {

/***/ 8003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

const CircularButton = ({ backgroundColor = "black", children, border = false, paddingValue = 4, ...restProps })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: `relative flex justify-center p-${paddingValue} w-fit rounded-full bg-${backgroundColor} ${border ? "border border-black hover:border-gray-500" : ""} hover:text-gray-500`,
        ...restProps,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CircularButton);


/***/ }),

/***/ 8128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  R0: () => (/* reexport */ carrot),
  UV: () => (/* reexport */ RightArrow),
  Rs: () => (/* reexport */ Rs),
  Ux: () => (/* reexport */ star)
});

// UNUSED EXPORTS: ChatIcon

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/components/svgs/carrot.svg
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCarrot = function SvgCarrot(props) {
  return /*#__PURE__*/react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 18 11",
    width: "1em",
    height: "1em"
  }, props), _path || (_path = /*#__PURE__*/react_.createElement("path", {
    stroke: "currentColor",
    d: "M2.042 9.191 9 2.234l6.957 6.957"
  })));
};
/* harmony default export */ const carrot = (SvgCarrot);
;// CONCATENATED MODULE: ./src/components/svgs/RightArrow.svg
var _g, _defs;
function RightArrow_extends() { RightArrow_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return RightArrow_extends.apply(this, arguments); }

var SvgRightArrow = function SvgRightArrow(props) {
  return /*#__PURE__*/react_.createElement("svg", RightArrow_extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em"
  }, props), _g || (_g = /*#__PURE__*/react_.createElement("g", {
    clipPath: "url(#RightArrow_svg__a)"
  }, /*#__PURE__*/react_.createElement("path", {
    fill: "currentColor",
    d: "M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657Z"
  }))), _defs || (_defs = /*#__PURE__*/react_.createElement("defs", null, /*#__PURE__*/react_.createElement("clipPath", {
    id: "RightArrow_svg__a"
  }, /*#__PURE__*/react_.createElement("path", {
    fill: "currentColor",
    d: "M0 0h24v24H0z"
  })))));
};
/* harmony default export */ const RightArrow = (SvgRightArrow);
;// CONCATENATED MODULE: ./src/components/svgs/chatIcon.svg
var chatIcon_path;
function chatIcon_extends() { chatIcon_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return chatIcon_extends.apply(this, arguments); }

var SvgChatIcon = function SvgChatIcon(props) {
  return /*#__PURE__*/React.createElement("svg", chatIcon_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), chatIcon_path || (chatIcon_path = /*#__PURE__*/React.createElement("path", {
    stroke: "#1E1E1E",
    d: "M19.326 5.778C20 6.787 20 8.19 20 11c0 2.809 0 4.213-.674 5.222a4.003 4.003 0 0 1-1.104 1.104c-.881.589-2.064.663-4.222.673V18l-1.106 2.211a1 1 0 0 1-1.788 0L10 18v-.001c-2.158-.01-3.34-.084-4.222-.673a4.002 4.002 0 0 1-1.104-1.104C4 15.213 4 13.81 4 11c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C6.787 4 8.19 4 11 4h2c2.809 0 4.213 0 5.222.674.437.292.812.667 1.104 1.104ZM9 9h6M9 13h3"
  })));
};
/* harmony default export */ const chatIcon = ((/* unused pure expression or super */ null && (SvgChatIcon)));
;// CONCATENATED MODULE: ./src/components/svgs/star.svg
var star_path;
function star_extends() { star_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return star_extends.apply(this, arguments); }

var SvgStar = function SvgStar(props) {
  return /*#__PURE__*/react_.createElement("svg", star_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 26 26"
  }, props), star_path || (star_path = /*#__PURE__*/react_.createElement("path", {
    d: "M10.989 7.18c.852-2.125 1.278-3.187 2.01-3.187.733 0 1.16 1.062 2.012 3.187l.04.099c.48 1.2.721 1.8 1.212 2.165.49.365 1.135.422 2.423.538l.232.02c2.108.19 3.162.284 3.388.954.225.67-.557 1.383-2.123 2.807l-.522.476c-.793.72-1.189 1.08-1.374 1.553a2.165 2.165 0 0 0-.085.27c-.122.493-.006 1.016.226 2.062l.073.326c.426 1.922.64 2.883.267 3.298-.14.154-.32.266-.52.32-.538.147-1.302-.474-2.828-1.718-1.002-.817-1.503-1.225-2.079-1.317a2.17 2.17 0 0 0-.683 0c-.575.092-1.076.5-2.079 1.317-1.526 1.244-2.29 1.865-2.827 1.719a1.083 1.083 0 0 1-.52-.321c-.373-.415-.16-1.376.267-3.298l.072-.326c.232-1.046.348-1.569.227-2.061a2.163 2.163 0 0 0-.086-.27c-.185-.473-.581-.833-1.373-1.554l-.523-.476c-1.565-1.424-2.348-2.136-2.123-2.807.226-.67 1.28-.765 3.388-.954l.233-.02c1.288-.116 1.932-.173 2.422-.538.49-.365.732-.965 1.213-2.165l.04-.1Z"
  })));
};
/* harmony default export */ const star = (SvgStar);
;// CONCATENATED MODULE: ./src/components/svgs/Rs.svg
var Rs_path;
function Rs_extends() { Rs_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Rs_extends.apply(this, arguments); }

var SvgRs = function SvgRs(props) {
  return /*#__PURE__*/react_.createElement("svg", Rs_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 31 31"
  }, props), Rs_path || (Rs_path = /*#__PURE__*/react_.createElement("path", {
    fill: "#1E1E1E",
    d: "m17.728 27.125-8.686-9.042V15.5h4.52c1.142 0 2.127-.372 2.956-1.115a4.544 4.544 0 0 0 1.5-2.76H7.75V9.042h9.881A4.665 4.665 0 0 0 16 7.184a4.264 4.264 0 0 0-2.438-.726H7.75V3.875h15.5v2.583h-4.198c.302.366.57.765.807 1.195.237.43.42.894.55 1.389h2.841v2.583h-2.616c-.172 1.83-.925 3.364-2.26 4.602-1.335 1.238-2.939 1.857-4.811 1.856h-.937l8.687 9.042h-3.585Z"
  })));
};
/* harmony default export */ const Rs = (SvgRs);
;// CONCATENATED MODULE: ./src/components/svgs/index.js







/***/ })

};
;