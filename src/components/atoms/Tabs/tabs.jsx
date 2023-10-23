'use client'

import React, { useState } from 'react'
import './tabs.css'
import Description from './description'
import Specifications from './specifications'
import VendorReviews from './vendorReviews'
import QuestionAndAnswers from './question&Answers'

const Tabs = () => {

    const tabs = [{
        id: 1,
        tab: "Description"
    },
    {
        id: 2,
        tab: "Description"
    },
    {
        id: 3,
        tab: "Description"
    },
    {
        id: 4,
        tab: "Description"
    }]
    
    const [toggle, setToggle] = useState(1)
    const [underline, setUnderline] = useState(1)

    function updateToggle(id) {
        setToggle(id)
    }

    function updateUnderline(id) {
        setUnderline(id)
    }

    return (
        <div>
            <div className="tab w-1/2">
                <ul className="flex justify-between">
                    <li
                        className="line cursor-pointer pb-5 text-lg font-semibold"
                        onClick={() => {
                            updateToggle(1), updateUnderline(1)
                        }}
                    >
                        <span
                            className={underline === 1 ? 'show-line border-b-[3px] border-orange-700 pb-5' : ''}
                        >
                            Description
                        </span>
                    </li>
                    <li
                        className="line cursor-pointer pb-5 text-lg font-semibold"
                        onClick={() => {
                            updateToggle(2), updateUnderline(2)
                        }}
                    >
                        <span
                            className={underline === 2 ? 'show-line border-b-[3px] border-orange-700 pb-5' : ''}
                        >
                            Specifications
                        </span>
                    </li>
                    <li
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
                    </li>
                    <li
                        className="line cursor-pointer pb-5 text-lg font-semibold"
                        onClick={() => {
                            updateToggle(4), updateUnderline(4)
                        }}
                    >
                        <span
                            className={underline === 4 ? 'show-line border-b-[3px] border-orange-700 pb-5' : ''}
                        >
                            Question & Answers
                        </span>
                    </li>
                </ul>
                <div className={toggle === 1 ? 'show-content' : 'content'}>
                    <Description />
                </div>
                <div className={toggle === 2 ? 'show-content' : 'content'}>
                    <Specifications />
                </div>
                <div className={toggle === 3 ? 'show-content' : 'content'}>
                    <VendorReviews />
                </div>
                <div className={toggle === 4 ? 'show-content' : 'content'}>
                    <QuestionAndAnswers />
                </div>
            </div>
        </div>
    )
}
export default Tabs