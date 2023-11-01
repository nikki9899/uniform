"use client"
import { getProductDetailsById } from '@/utils/api'
import Line from '@/components/atoms/horizontal-line'
import ProductDetails from '@/components/molecules/productDetails'
import Tabs from '@/components/atoms/Tabs/tabs'
import React, { useState, useEffect } from 'react'
import { getAPI } from '@/utils/api'
import Popular from '@/components/molecules/popular'  

const Pdp = async({ params: { productId } }) => {
    const { data: { attributes : { popularSearches } } } = await getAPI("home-page");
    
    // console.log(productId, "pdp");
    const heading = 'related products';

    return (
        <div>
            <ProductDetails  />
            <Line />
            <Tabs />
            <Line />
            <Popular popularSearches={popularSearches} />
        </div>
    )
}

export default Pdp
