// const baseUrl = 'http://127.0.0.1:1337/api'
const baseUrl = process.env.BASE_URL

export const getAPI = async (path) => {
    // let url = `${baseUrl}/${path}?populate=deep`
    let url = baseUrl+'/home-page?populate=deep'
    console.log(baseUrl)

    console.log(url)
    try {
        const loadData = await fetch(url, { cache: 'no-cache' })

        if (loadData.ok) {
            let result = await loadData.json()
            console.log(result)
            return result
        } else {
            return loadData
        }
    } catch (error) {
        throw error
    }
}

export const getSubCategories = async (category) => {
    // let SubCategoryUrl = baseUrl+"/"+`sub-categories?filters[category][slug][$eq]=${category}&populate=deep`
    const SubCategoryUrl = `${baseUrl}/sub-categories?filters[category][slug][$eq]=${category}&populate=deep`
    console.log('Subcategory', SubCategoryUrl)
    try {
        const loadData = await fetch(SubCategoryUrl, { cache: 'no-cache' })

        if (loadData.ok) {
            let result = await loadData.json()

            return result
        } else {
            return loadData
        }
    } catch (error) {
        throw error
    }
}

export const getProducts = async (SubCategoryName) => {
    let page = 1
    let pageSize = 10
    // let ProductUrl = `https://uniformonweb.onrender.com/api/products?pagination[page]=${page}&pagination[pageSize]=${pageSize}&filters[sub_category][name][$eq]=${SubCategoryName}&populate=*`
    const ProductUrl = `${baseUrl}/products?pagination[page]=${page}&pagination[pageSize]=${pageSize}&filters[sub_category][name][$eq]=${SubCategoryName}&populate=*`
    console.log('producturl', ProductUrl)

    try {
        const loadData = await fetch(ProductUrl, { cache: 'force-cache' })

        if (loadData.ok) {
            let result = await loadData.json()

            return result
        } else {
            return loadData
        }
    } catch (error) {
        throw error
    }
}

export const getProductDetailsById = async (productId) => {
    // const productDetailsUrl = `https://uniformonweb.onrender.com/api/product-details?populate=*&filters[product][id][$eq]=${productId}`;
    const productDetailsUrl = `${baseUrl}/product-details?populate=*&filters[product][id][$eq]=${productId}`
    console.log('deatils', productDetailsUrl)
    try {
        const response = await fetch(productDetailsUrl, { cache: 'no-cache' })

        if (response.ok) {
            const data = await response.json()
            console.log(data)

            return data
        } else {
            return response
        }
    } catch (error) {
        throw error
    }
}

export const getProductDetailsByImage = async (productId) => {
    // productId = 15;
    // productId = 15;
    // const productDetailsUrl = `https://uniformonweb.onrender.com/api/product-details?populate=*&filters[product][id][$eq]=${productId}`;
    const productDetailsUrl = `${baseUrl}/product-details?populate=*&filters[product][id][$eq]=${productId}`
    console.log("productdetails",productDetailsUrl)

    try {
        const response = await fetch(productDetailsUrl, { cache: 'no-cache' })

        if (response.ok) {
            const data = await response.json()
            const imageMagnifierData = data.data[0].attributes.images.data.map(
                (image, index) => ({
                    id: index + 10,
                    smallImageSrc: image.attributes.url,
                    largeImageSrc: image.attributes.url,
                    alt: 'Product Image',
                })
            )
            console.log('Fetched image data:', imageMagnifierData)
            return imageMagnifierData
        } else {
            return response
        }
    } catch (error) {
        throw error
    }
}

export const fetchPopularSearches = async () => {
    try {
        const response = await getAPI('home-page')
        return response.data.attributes.popularSearches
        console.log(response.data.attributes.popularSearches)
    } catch (error) {
        console.error('Error fetching popular searches:', error)
        throw error
    }
}

// {Title}=response.data[0].attributes.product.data.attributes;

// const productData = productDescriptionSubcategoryMockData.data[0].attributes;
// const {price,rating}=data.data[0].attributes

// https://uniformonweb.onrender.com/api/product-details?populate=*&filters[product][id][$eq]=10

//  get Product
// https://uniformonweb.onrender.com/api/products?pagination[page]=1&pagination[pageSize]=10&filters[sub_category][name][$eq]=reflective%20clothing&populate=*

// utils/api.js
// http://localhost:1337/api/products?pagination[page]=1&pagination[pageSize]=10&filters[sub_category][name][$eq]=reflective%20clothing&populate=*
