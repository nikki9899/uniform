"use strict";
exports.id = 477;
exports.ids = [477];
exports.modules = {

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
        className += "rounded-full font-medium text-xs py-2 px-4 border-gray-700 text-gray-900";
    } else if (rounded === "semi") {
        className += "rounded-lg ";
    }
    if (variant === "primary") {
        className += "text-24 font-normal border px-4 py-2 border-gray-700 text-gray-900";
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

/***/ 1905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HS: () => (/* binding */ fetchPopularSearches),
/* harmony export */   QH: () => (/* binding */ getProductDetailsByImage),
/* harmony export */   rh: () => (/* binding */ getProductDetailsById),
/* harmony export */   zj: () => (/* binding */ getSubCategories)
/* harmony export */ });
/* unused harmony exports getAPI, getProducts */
// const baseUrl = 'http://127.0.0.1:1337/api'
const baseUrl = "http://127.0.0.1:1337/api";
const getAPI = async (path)=>{
    // let url = `${baseUrl}/${path}?populate=deep`
    let url = "http://127.0.0.1:1337/api/home-page?populate=deep";
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