"use strict";
exports.id = 845;
exports.ids = [845];
exports.modules = {

/***/ 713:
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
            className: "w-full h-full hover:scale-110 transition-all duration-700",
            style: {
                backgroundSize: "cover",
                backgroundImage: `url(${productImage})`
            }
        })
    });
};
/* harmony default export */ const atoms_ImageCard = (ImageCard);


/***/ }),

/***/ 8373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);


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


/***/ }),

/***/ 896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_atoms_ImageCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(713);
/* harmony import */ var _components_atoms_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8373);



const PopularCard = ({ productTitle, productPrice, productType, productImage })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atoms_ImageCard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                // iconDisplay="flex"
                classnames: "w-[190px] h-[250px] md:w-[280px] md:h-[390px] rounded-2xl shrink-0 back ",
                productImage: productImage
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-popularTextColor text-center text-[10px] md:text-sm not-italic font-bold leading-[10px] md:leading-[26.645px]",
                        children: productTitle
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-popularTextColor text-center text-sm not-italic font-bold leading-[26.645px] float-right pr-4",
                        children: productPrice
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full mb-2 text-xs not-italic font-medium leading-[26.645px] float-left mt-0 pt-0 text-slate-400",
                children: productType
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atoms_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    variant: "primary",
                    rounded: "full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-popularTextColor text-[10px] md:text-xs not-italic font-medium md:leading-[normal] lowercase",
                        children: "enquire now"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopularCard);


/***/ }),

/***/ 6101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ popular)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
// EXTERNAL MODULE: ./src/components/atoms/button.js
var atoms_button = __webpack_require__(8373);
// EXTERNAL MODULE: ./src/components/atoms/ImageCard.jsx + 1 modules
var ImageCard = __webpack_require__(713);
;// CONCATENATED MODULE: ./src/utils/labels/label.js
const searchLabels = {
    heading: "popular searches",
    buttontext: "enquire now"
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/molecules/popular.jsx






const Popular = ({ popularSearches: { products: { data = [] } = {
    data: []
} } = {
    data: []
} })=>{
    const items = data.map(({ id, attributes: { Title, description, image } })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "me-7 w-3/4 md:w-full mb-12",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/pdp/${id}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ImageCard/* default */.Z, {
                        iconDisplay: "flex",
                        classnames: "w-[14rem] h-[18rem] md:w-[19rem] md:h-[26rem] rounded-2xl shrink-0 back",
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


/***/ }),

/***/ 7393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kf: () => (/* binding */ getAPI),
/* harmony export */   Xp: () => (/* binding */ getProducts)
/* harmony export */ });
/* unused harmony exports getSubCategories, getProductDetailsById, getProductDetailsByImage, fetchPopularSearches */
// const baseUrl = 'http://127.0.0.1:1337/api'
const baseUrl = "http://3.110.30.53:1337/api";
const getAPI = async (path)=>{
    // let url = `${baseUrl}/${path}?populate=deep`
    let url = baseUrl + "/home-page?populate=deep";
    console.log(baseUrl);
    console.log(url);
    try {
        const loadData = await fetch(url, {
            cache: "no-cache"
        });
        if (loadData.ok) {
            let result = await loadData.json();
            console.log(result);
            return result;
        } else {
            return loadData;
        }
    } catch (error) {
        throw error;
    }
};
const getSubCategories = async (category)=>{
    // let SubCategoryUrl = baseUrl+"/"+`sub-categories?filters[category][slug][$eq]=${category}&populate=deep`
    const SubCategoryUrl = `${baseUrl}/sub-categories?filters[category][slug][$eq]=${category}&populate=deep`;
    console.log("Subcategory", SubCategoryUrl);
    try {
        const loadData = await fetch(SubCategoryUrl, {
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
const getProducts = async (SubCategoryName)=>{
    let page = 1;
    let pageSize = 10;
    // let ProductUrl = `https://uniformonweb.onrender.com/api/products?pagination[page]=${page}&pagination[pageSize]=${pageSize}&filters[sub_category][name][$eq]=${SubCategoryName}&populate=*`
    const ProductUrl = `${baseUrl}/products?pagination[page]=${page}&pagination[pageSize]=${pageSize}&filters[sub_category][name][$eq]=${SubCategoryName}&populate=*`;
    console.log("producturl", ProductUrl);
    try {
        const loadData = await fetch(ProductUrl, {
            cache: "force-cache"
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
const getProductDetailsById = async (productId)=>{
    // const productDetailsUrl = `https://uniformonweb.onrender.com/api/product-details?populate=*&filters[product][id][$eq]=${productId}`;
    const productDetailsUrl = `${baseUrl}/product-details?populate=*&filters[product][id][$eq]=${productId}`;
    console.log("deatils", productDetailsUrl);
    try {
        const response = await fetch(productDetailsUrl, {
            cache: "no-cache"
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
        } else {
            return response;
        }
    } catch (error) {
        throw error;
    }
};
const getProductDetailsByImage = async (productId)=>{
    // productId = 15;
    // productId = 15;
    // const productDetailsUrl = `https://uniformonweb.onrender.com/api/product-details?populate=*&filters[product][id][$eq]=${productId}`;
    const productDetailsUrl = `${baseUrl}/product-details?populate=*&filters[product][id][$eq]=${productId}`;
    console.log("productdetails", productDetailsUrl);
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
            console.log("Fetched image data:", imageMagnifierData);
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
        console.log(response.data.attributes.popularSearches);
    } catch (error) {
        console.error("Error fetching popular searches:", error);
        throw error;
    }
} // {Title}=response.data[0].attributes.product.data.attributes;
 // const productData = productDescriptionSubcategoryMockData.data[0].attributes;
 // const {price,rating}=data.data[0].attributes
 // https://uniformonweb.onrender.com/api/product-details?populate=*&filters[product][id][$eq]=10
 //  get Product
 // https://uniformonweb.onrender.com/api/products?pagination[page]=1&pagination[pageSize]=10&filters[sub_category][name][$eq]=reflective%20clothing&populate=*
 // utils/api.js
 // http://localhost:1337/api/products?pagination[page]=1&pagination[pageSize]=10&filters[sub_category][name][$eq]=reflective%20clothing&populate=*
;


/***/ })

};
;