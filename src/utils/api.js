const baseUrl = 'https://uniformonweb.onrender.com/api'

export const getAPI = async (path) => {
    let url = `${baseUrl}/${path}?populate=deep`

    try {
        const loadData = await fetch(url, { cache: 'force-cache' })

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
    let SubCategoryUrl = `sub-categories?polulate=*&filters[category][name][$eq]=${category}`
    return await getAPI(SubCategoryUrl)
}

export const getProducts = async (SubCategoryName) => {
    let page = 1
    let pageSize = 10

    let ProductUrl = `https://uniformonweb.onrender.com/api/products?pagination[page]=${page}&pagination[pageSize]=${pageSize}&filters[sub_category][name][$eq]=${SubCategoryName}&populate=*`
    try {
        const loadData = await fetch(ProductUrl, { cache: 'force-cache' })

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

//  get Product
// https://uniformonweb.onrender.com/api/products?pagination[page]=1&pagination[pageSize]=10&filters[sub_category][name][$eq]=reflective%20clothing&populate=*

