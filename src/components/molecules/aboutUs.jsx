'use client'

import Link from 'next/link'
import Button from '../atoms/button'
import { getAPI } from '@/utils/api'
import { useState } from 'react'

const descriptionStyle = {
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
}

const AboutUs = ({ aboutUs }) => {
    const { title, description, button } = aboutUs
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="py-16 mx-auto max-w-screen text-center  md:px-52 xs:px-10 px-5">
            <h3 className="text-4xl sm:text-7xl sm:leading-[75px] lg:text-[84px] lg:leading-[114px] font-bold leading-10 mb-2 py-1 sm:pt-10">
                {title}
            </h3>
            <h4
                style={isOpen ? null : descriptionStyle}
                className="text-sm sm:text-3xl mt-[30px]  sm:leading-10 lg:text-[28px] lg:leading-[45px] text-justify font-normal leading-5 "
            >
                {description}
            </h4>

            <Button
                class="text-sky-800 py-2 px-4"
                onClick={() => setIsOpen(!isOpen)}
                addStyle="text-blue-500"
            >
                {isOpen ? 'Read Less...' : 'Read More...'}
            </Button>
            <div className="flex justify-center item-center sm:hidden lg:flex ">
                <div className="py-6 w-[73px] lg:w-[166px] lg:h-14 h-[25px] flex justify-center item-center">
                    <Link href="/aboutUs/page.js">
                        <Button rounded="semi" variant="primary" >
                            <h5 className="text-[10px] font-normal lg:text-2xl lg:leading-6 md:p-2 ">
                                {button.label}
                            </h5>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default AboutUs
