'use client'
import React, { useEffect, useState } from 'react'
import Categories from '@/components/organisms/categories'
import Pagination from '@/components/atoms/Pagination'
import Popular from '@/components/molecules/popular'
import IndustrialUniform from '@/components/industrialUniform'
import { getAPI, getSubCategories } from '@/utils/api'
import { fetchPopularSearches } from '@/utils/api'
  

const Clp = ({ params: { category } }) => {
    const [data, setData] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [total, setTotal] = useState(0)
    const [popularSearches, setPopularSearches] = useState([])

    useEffect(() => {
        async function fetchData(category) {
            try {
                const {
                    data: newData = [],
                    meta: {
                        pagination: { page, pageSize, pageCount, total },
                    },
                } = await getSubCategories(category)

                if (newData.length === 0) {
                    setData(industrialCategoryMockData)
                } else {
                    setData(newData)
                    setPageCount(pageCount)
                    setTotal(total)
                }
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

       

        async function fetchPopular() {
            try {
                const data = await fetchPopularSearches();
                setPopularSearches(data);
            } catch (error) {
                console.error('Error fetching popular searches:', error);
            }
        }

        fetchData(category);
        fetchPopular();
    }, [category])

    return (
        <div>
            <main className="flex min-h-screen flex-col items-center justify-between ">
                <IndustrialUniform heading={category} />
                <div className="h-px w-full mt-20 md:mt-40 bg-black border-0 "></div>
                <Categories data={data} />
                <Pagination totalPage={total} currPage={pageCount} />
                <div className="h-px w-full my-8 bg-black border-0 "></div>
                <Popular popularSearches={popularSearches} />
            </main>
        </div>
    )
}

export default Clp