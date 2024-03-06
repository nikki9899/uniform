'use client'
import React, { useEffect, useState } from 'react'
import Pagination from '@/components/atoms/Pagination'
import IndustrialUniform from '@/components/industrialUniform'
import Image from 'next/image'
import Subcategories from '@/components/organisms/subcategory'
import Popular from '@/components/molecules/popular'
import { getProducts, fetchPopularSearches } from '@/utils/api'

const Plp = ({ params: { subCategory } }) => {
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [popularSearches, setPopularSearches] = useState([])

    useEffect(() => {
        async function fetchData(category, page) {
            try {
                const {
                    data,
                    meta: { pagination },
                } = await getProducts(category, page)
                setData(data)
                setPageCount(pagination.pageCount)
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }

        async function fetchPopular() {
            try {
                const data = await fetchPopularSearches()
                setPopularSearches(data)
            } catch (error) {
                console.error('Error fetching popular searches:', error)
            }
        }

        fetchData(subCategory, page)
        fetchPopular()
    }, [subCategory, page])

    const nextPageHandler = (event) => {
        const nextPage = page + 1
        if (nextPage <= pageCount) {
            setPage(nextPage)
            event.preventDefault()
        }
    }

    const prevPageHandler = (event) => {
        const prevPage = page - 1
        if (prevPage >= 1) {
            setPage(prevPage)
            event.preventDefault()
        }
    }

    const popularSearchesLength =
        popularSearches &&
        popularSearches.products &&
        popularSearches.products.data
            ? popularSearches.products.data.length
            : 0

    return (
        <div>
            <main className="flex min-h-screen flex-col items-center justify-between ">
                <IndustrialUniform heading={subCategory} />
                <div className=" h-px w-full mt-20 md:mt-40 bg-black border-0 "></div>
                <Subcategories data={data} />
                <Pagination
                    totalPage={pageCount}
                    currPage={page}
                    nextPageHandler={nextPageHandler}
                    prevPageHandler={prevPageHandler}
                />
                <div className="h-px w-full my-8 bg-black border-0 "></div>

                <Popular popularSearches={popularSearches} />
                {popularSearchesLength < 5 && (
                    <div className="hidden ml:block h-px w-full mb-[60px] bg-black border-0"></div>
                )}
            </main>
        </div>
    )
}

export default Plp
