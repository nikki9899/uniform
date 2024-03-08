'use client'
import React, { useEffect, useState } from 'react'
import Categories from '@/components/organisms/categories'
import Pagination from '@/components/atoms/Pagination'
import Popular from '@/components/molecules/popular'
import IndustrialUniform from '@/components/industrialUniform'

import { getSubCategories, fetchPopularSearches } from '@/utils/api'




const Clp = ({ params: { category } }) => {
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [popularSearches, setPopularSearches] = useState([])

    useEffect(() => {
        fetchData(category, page)
        fetchPopular()
    }, [category, page])

    const fetchData = async (category, page) => {
        try {
            const {
                data: newData,
                meta: { pagination },
            } = await getSubCategories(category, page)
            setData(newData)
            setPageCount(pagination.pageCount)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    const fetchPopular = async () => {
        try {
            const data = await fetchPopularSearches()
            setPopularSearches(data)
        } catch (error) {
            console.error('Error fetching popular searches:', error)
        }
    }

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

    return (
        <div>
            <main className="flex min-h-screen flex-col items-center justify-between ">
                <IndustrialUniform heading={category} />
                <div className="h-px w-full mt-20 md:mt-40 bg-black border-0 "></div>
                <Categories data={data} />
                <Pagination
                    totalPage={pageCount}
                    currPage={page}
                    nextPageHandler={nextPageHandler}
                    prevPageHandler={prevPageHandler}
                />
                <div className="h-px w-full my-8 bg-black border-0 "></div>
                <Popular popularSearches={popularSearches} />
                {popularSearches?.products?.data?.length < 5 && (
                    <div className="hidden ml:block h-px w-full mb-[60px] bg-black border-0"></div>
                )}
            </main>
        </div>
    )
}

export default Clp
