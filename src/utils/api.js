const baseUrl = process.env.BASE_URL

export const getAPI = async (path) => {
    let url = baseUrl + '/home-page?populate=deep'

    console.log(url)
    try {
        const loadData = await fetch(url, { cache: 'no-cache' })

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

export const getSubCategories = async (category) => {
    const SubCategoryUrl = `${baseUrl}/sub-categories?filters[category][slug][$eq]=${category}&populate=deep`

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

    const ProductUrl = `${baseUrl}/products?pagination[page]=${page}&pagination[pageSize]=${pageSize}&filters[sub_category][name][$eq]=${SubCategoryName}&populate=*`

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
    const productDetailsUrl = `${baseUrl}/product-details?populate=*&filters[product][id][$eq]=${productId}`

    try {
        const response = await fetch(productDetailsUrl, { cache: 'no-cache' })

        if (response.ok) {
            const data = await response.json()

            return data
        } else {
            return response
        }
    } catch (error) {
        throw error
    }
}

export const getProductDetailsByImage = async (productId) => {
    const productDetailsUrl = `${baseUrl}/product-details?populate=*&filters[product][id][$eq]=${productId}`

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
    } catch (error) {
        console.error('Error fetching popular searches:', error)
        throw error
    }
}
