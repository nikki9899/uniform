'use client'

import Page from '@/app/aboutUs/[aboutUs]/page'
import Search from '@/components/atoms/Icons/Search'
import Wish from '@/components/atoms/Icons/Wish'
import { NavbarLabels } from '@/utils/labels/navbarLabels'
import Link from 'next/link'
import { useState } from 'react'
import Dropdown from './Dropdown'

const Navbar = () => {
    let { Logo, Tabs, SearchLink, uniformbyProfessionSrc, uniformbyProfessionTitle, WishLink } = NavbarLabels

    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    return (
        <div className=" px-14 h-24 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] bg-background flex w-full py-7">
            <Link href="/">
                <h1 className="text-black text-3xl not-italic font-black leading-7 tracking-[-1.066px] float-left font-bold ">
                    {Logo}
                </h1>
            </Link>
            <div className="inline-flex pl-[20%] h-4 items-start gap-14 shrink-0 text-gray-800">
                <div className="relative">
                    <Link
                        href={uniformbyProfessionSrc}
                        className="cursor-pointer"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {uniformbyProfessionTitle}
                    </Link>
                </div>
                {Tabs.map(({ id, TabTitle, src }) => (
                    <div key={id} className="cursor-pointer">
                        <Link href={src}   className="text-base not-italic font-normal leading-4 tracking-[-0.64px]"  > {TabTitle}</Link>
                    </div>
                ))}
            </div>
            <div className="flex pl-[20%] gap-2.5  float-right">
                <div className='cursor-pointer'>
                    <a href = {SearchLink}>
                        <Search />
                    </a>
                </div>
                <div className="cursor-pointer">
                    {/* <a href = {WishLink}>
                        <Wish />
                    </a> */}
                </div>
            </div>
            {isHovered && <Dropdown />}
        </div>
    )
}

export default Navbar
