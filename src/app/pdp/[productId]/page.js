'use client'
import React from 'react'
import { fetchPopularSearches } from '@/utils/api'
import Line from '@/components/atoms/horizontal-line'
import ProductDetails from '@/components/molecules/productDetails'
import Tabs from '@/components/atoms/Tabs/tabs'
import Popular from '@/components/molecules/popular'

const Pdp = ({ params: { productId } }) => {
    const heading = 'related products'

    const [popularSearches, setPopularSearches] = React.useState([])

    React.useEffect(() => {
        fetchPopularSearches()
            .then((data) => setPopularSearches(data))
            .catch((error) => {
                console.error('Error in Pdp component:', error)
            })
    }, [])

    return (
        <div>
            <ProductDetails productId={productId} />
            <Line />
            <Tabs productId={productId} />
            <Line />
            <Popular popularSearches={popularSearches} />
        </div>
    )
}

export default Pdp
