'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { NavbarLabels } from '@/utils/labels/navbarLabels'
import Dropdown from './Dropdown'
import { getAPI } from '@/utils/api'

const Navbar = () => {
    let {
        Logo,
        Tabs,
        SearchLink,
        uniformbyProfessionSrc,
        uniformbyProfessionTitle,
        WishLink,
    } = NavbarLabels
    const [isHovered, setIsHovered] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [categories, setCategories] = useState([])
    const [corporateUniformData, setCorporateUniformData] = useState([])
    const [schoolUniformData, setSchoolUniformData] = useState([])
    const [hotelUniformData, setHotelUniformData] = useState([])
    const dropdownRef = useRef(null)

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await getAPI('home-page')
                const popularCategories =
                    response?.data?.attributes?.popularCategories?.categories
                        ?.data
                setCategories(popularCategories)

                const corporateUniform = popularCategories.find(
                    (category) =>
                        category.attributes.name === 'Corporate uniform'
                )
                const schoolUniform = popularCategories.find(
                    (category) => category.attributes.name === 'School Uniform'
                )
                const hotelUniform = popularCategories.find(
                    (category) => category.attributes.name === 'Hotel Uniform'
                )

                if (corporateUniform) {
                    setCorporateUniformData(
                        corporateUniform.attributes.sub_categories.data
                    )
                }
                if (schoolUniform) {
                    setSchoolUniformData(
                        schoolUniform.attributes.sub_categories.data
                    )
                }
                if (hotelUniform) {
                    setHotelUniformData(
                        hotelUniform.attributes.sub_categories.data
                    )
                }
            } catch (error) {
                console.log(error.message)
            }
        }

        fetchCategories()
    }, [])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsHovered(false)
                setIsMobileMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [dropdownRef])

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
        if (isHovered) {
            setIsHovered(false)
        }
    }

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    const handleOnClick = () => {
        if (isHovered) {
            setIsHovered(false)
        } else {
            setIsHovered(true)
        }
    }

    const handleOnMobileClick = () => {
        if (isHovered) {
            setIsHovered(false)
            setIsMobileMenuOpen(false)
        } else {
            setIsHovered(true)
        }
    }

    const handleAboutUs = () => {
        setIsMobileMenuOpen(false)
    }
    return (
        <div className="sticky left-0 top-0 z-10 px-4 md:px-14  shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] bg-background w-full py-6 flex justify-between md:items-center ">
            <Link href="/">
                <h1 className="text-black md:text-3xl  font-black md:leading-7 tracking-[-0.5px] md:font-bold text-sm  md:mt-4 flex">
                    {Logo}
                </h1>
            </Link>
            <div className={`md:hidden flex pl-[20%] gap-2.5 float-right`}>
                <div
                    className="cursor-pointer"
                    onClick={handleMobileMenuToggle}
                >
                    <div className="bg-black h-1 w-6 mb-1"></div>
                    <div className="bg-black h-1 w-6 mb-1"></div>
                    <div className="bg-black h-1 w-6"></div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <>
                    <div
                        ref={dropdownRef}
                        className="md:hidden absolute top-[68px] left-0 right-0 bg-background z-50"
                    >
                        <Link
                            href={uniformbyProfessionSrc}
                            className="block p-3 border-b border-gray-300  "
                            onClick={handleOnClick}
                        >
                            <span>{uniformbyProfessionTitle}</span>
                        </Link>
                        {isHovered && (
                            <Dropdown
                                corporateUniformData={corporateUniformData}
                                schoolUniformData={schoolUniformData}
                                hotelUniformData={hotelUniformData}
                                handleOnClick={handleOnMobileClick}
                            />
                        )}

                        <Link
                            href="/aboutUs/page.js"
                            className="block p-3 border-b border-gray-300"
                            onClick={handleAboutUs}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/contactUs/page.js"
                            className="block p-3 border-b border-gray-300"
                            onClick={handleAboutUs}
                        >
                            Contact Us
                        </Link>
                    </div>
                </>
            )}

            <div
                className={`hidden md:flex pl-[20%] h-4 items-start gap-14 shrink-0 text-gray-800 ${
                    isMobileMenuOpen ? 'block' : 'hidden md:block'
                }`}
            >
                <div className=" hidden md:inline-flex relative">
                    <Link
                        href={uniformbyProfessionSrc}
                        className={`cursor-pointer ${
                            isHovered ? 'text-black' : 'text-gray-800'
                        }`}
                        onClick={handleOnClick}
                    >
                        <span className="whitespace-nowrap inline-block font-made-outer-sans lg:text-base sm:text-sm font-normal sm:leading-3 lg:leading-4 tracking-[-0.04em] text-left">
                            {uniformbyProfessionTitle}
                        </span>
                    </Link>
                </div>
                {Tabs.map(({ id, TabTitle, src }) => (
                    <div key={id} className="cursor-pointer">
                        <Link
                            href={src}
                            className="text-base not-italic font-normal leading-4 tracking-[-0.64px]"
                        >
                            {TabTitle}
                        </Link>
                    </div>
                ))}
            </div>

            {isHovered && !isMobileMenuOpen && (
                <Dropdown
                    corporateUniformData={corporateUniformData}
                    schoolUniformData={schoolUniformData}
                    hotelUniformData={hotelUniformData}
                    handleOnClick={handleOnClick}
                />
            )}
        </div>
    )
}

export default Navbar
