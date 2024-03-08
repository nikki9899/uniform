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

    const popularSearchesLength = popularSearches && popularSearches.products && popularSearches.products.data
    ? popularSearches.products.data.length
    : 0;

    return (
        <div className="px-4 md:px-12">
            <ProductDetails productId={productId} />
            <Line />
            <Tabs productId={productId} />
            <Line />
            <Popular popularSearches={popularSearches} />
            {popularSearchesLength < 5 && (
                    <div className="hidden ml:block h-px w-full mb-[60px] bg-black border-0"></div>
                )}
        </div>
    )
}

export default Pdp
