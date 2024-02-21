'use client'

import { footerLabels } from '@/utils/labels/footerLabels'
import { memo } from 'react'

const FooterNewsLetter = (props) => {
    const { title, subTitle, button } = footerLabels.newsLater

    const handelSubscribe = (event) => {}
    return (
        <div>
            <h2 className="mb-4 md:text-2xl md:leading-8 lg:text-[28px] lg:leading-9 text-gray-900  text-xl font-semibold leading-7">
                {title}
            </h2>

            <ul className="text-gray-900 font-normal text-xs md:text-sm md:leading-5 lg:text-xl lg:leading-6 leading-4 md:text-base ">
                <li className="mb-4  ">{subTitle}</li>
                <li className="mb-4">
                    <div className="grid  grid-cols-3 gap-2">
                        <div className="relative col-span-2 ">
                            <input
                                type="email"
                                className=" md:w-full sm:w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-[#efefef] w-full"
                                placeholder="e-mail"
                            />
                        </div>
                        <button
                            className="relative text-black w-fit shrink-0"
                            onClick={handelSubscribe}
                        >
                            {button}
                            <span className="z-[-1] absolute top-0 right-0 h-full w-[33%] bg-[#C46145]"></span>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default memo(FooterNewsLetter)
