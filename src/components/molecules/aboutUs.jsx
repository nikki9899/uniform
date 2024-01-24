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
        <div className="py-20 mx-auto max-w-screen-md text-center">
            <h3 className="text-4xl md:text-7xl font-medium mb-2 py-1 md:py-10">{title}</h3>
            <h4
                style={isOpen ? null : descriptionStyle}
                className="text-1xl leading-relaxed "
            >
                {description}
            </h4>

            <Button
                class="text-sky-800 py-2 px-4"
                onClick={() => setIsOpen(!isOpen)}
                addStyle='text-blue-500'
            >
                {isOpen ? 'Read Less...' : 'Read More...'}
            </Button>

            <div className="py-6">
                <Link href="/aboutUs/page.js">
                    <Button rounded="semi" variant="primary">
                        <h5 className="text-2xl font-light">{button.label}</h5>
                    </Button>
                </Link>
            </div>
        </div>
    )
}
export default AboutUs


// element.style {
//     color: blue;
//     top: 7161px;
//     left: 1110px;
//     position: absolute;
// }