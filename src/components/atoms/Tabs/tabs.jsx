'use client'
import React, { useState, useEffect } from 'react'
import Description from './description'
import Specifications from './specifications'
import QuestionAndAnswers from './question&Answers'
import { getProductDetailsById } from '@/utils/api'

const Tabs = ({ productId }) => {
    const [toggle, setToggle] = useState(1)
    const [underline, setUnderline] = useState(1)
    const [tabProductData, setTabProductData] = useState(null)

    useEffect(() => {
        getProductDetailsById(productId)
            .then((data) => {
                if (data && data.data && data.data[0]) {
                    const productData = data.data[0].attributes;
                    delete productData.fdprocessedid;
                    setTabProductData(data.data[0].attributes)
                }
            })
            .catch((error) => {
                console.error('Error fetching product details:', error)
            })
    }, [productId])

  

    if (!tabProductData) {
        return <div>Loading...</div>
    }
    

    const updateToggle = (id) => {
        setToggle(id)
    }

    const updateUnderline = (id) => {
        setUnderline(id)
    }

    return (
        <div>
            <div className="tab md:w-1/2">
                <ul className="flex justify-between">
                    <li
                        className="line cursor-pointer pb-5 lg:text-lg lg:leading-6 sm:text-sm sm:leading-5 xs:text-xs text-[10px] leading-3 font-semibold"
                        onClick={() => {
                            updateToggle(1), updateUnderline(1)
                        }}
                    >
                        <span
                            className={
                                underline === 1
                                    ? 'show-line border-b-[3px] border-orange-700 pb-5'
                                    : ''
                            }
                        >
                            Description
                        </span>
                    </li>
                    <li
                        className="line cursor-pointer pb-5 lg:text-lg lg:leading-6 sm:text-sm sm:leading-5 xs:text-xs text-[10px] leading-3 font-semibold"
                        onClick={() => {
                            updateToggle(2), updateUnderline(2)
                        }}
                    >
                        <span
                            className={
                                underline === 2
                                    ? 'show-line border-b-[3px] border-orange-700 pb-5'
                                    : ''
                            }
                        >
                            Specifications
                        </span>
                    </li>
                    {/* <li
                        className="line cursor-pointer pb-5 text-lg font-semibold"
                        onClick={() => {
                            updateToggle(3), updateUnderline(3)
                        }}
                    >
                        <span
                            className={underline === 3 ? 'show-line border-b-[3px] border-orange-700 pb-5' : ''}
                        >
                            Vendor Reviews
                        </span>
                    </li> */}
                    <li
                        className="line cursor-pointer pb-5  lg:text-lg lg:leading-6 sm:text-sm sm:leading-5 xs:text-xs text-[10px]  sm:text-base leading-3 font-semibold"
                        onClick={() => {
                            updateToggle(4), updateUnderline(4)
                        }}
                    >
                        <span
                            className={
                                underline === 4
                                    ? 'show-line border-b-[3px] border-orange-700 pb-5'
                                    : ''
                            }
                        >
                            Question & Answers
                        </span>
                    </li>
                </ul>
                <div className={toggle === 1 ? 'block' : 'hidden'}>
                    <Description data={tabProductData} />
                </div>
                <div className={toggle === 2 ? 'block' : 'hidden'}>
                    <Specifications data={tabProductData} />
                </div>
               
                <div className={toggle === 4 ? 'block' : 'hidden'}>
                    <QuestionAndAnswers data={tabProductData} />
                </div>
            </div>
        </div>
    )
}
export default Tabs
