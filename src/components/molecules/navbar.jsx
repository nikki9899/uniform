'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Search from '@/components/atoms/Icons/Search'
import { NavbarLabels } from '@/utils/labels/navbarLabels'
import Wish from '@/components/atoms/Icons/Wish'
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
    const [categories, setCategories] = useState([])
    const [corporateUniformData, setCorporateUniformData] = useState([])
    const [schoolUniformData, setSchoolUniformData] = useState([])
    const [hotelUniformData, setHotelUniformData] = useState([])
    // const[isdesktopmobile]

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
                    (category) => category.attributes.name === 'hoteluniform'
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

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
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
        setIsMobileMenuOpen(false );
    }
    return (
        <div className="px-4 sm:px-14  shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] bg-background md:w-full py-7 flex justify-between sm:items-center ">
            <Link href="/">
                <h1 className="text-black md:text-3xl not-italic font-black md:leading-7 tracking-[-1.066px] md:font-bold text-sm  md:mt-5 flex">
                    {Logo}
                </h1>
            </Link>
            <div className={`sm:hidden flex pl-[20%] gap-2.5 float-right`}>
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
                    <div className="sm:hidden absolute top-[75px] left-0 right-0 bg-white z-50">
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
                    </div>
                </>
            )}

            <div
                className={`hidden sm:inline-flex pl-[20%] h-4 items-start gap-14 shrink-0 text-gray-800 ${
                    isMobileMenuOpen ? 'block' : 'hidden sm:block'
                }`}
            >
                <div className="relative">
                    <Link
                        href={uniformbyProfessionSrc}
                        className={`cursor-pointer ${
                            isHovered ? 'text-black' : 'text-gray-800'
                        }`}
                        onClick={handleOnClick}
                    >
                        <span className="whitespace-nowrap inline-block font-made-outer-sans text-base font-normal leading-4 tracking-[-0.04em] text-left">
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
            {/* Search and Wish Icons (Desktop)
            <div className={`hidden sm:flex pl-[20%] gap-2.5 float-right`}>
                <div className="cursor-pointer">
                    <a href={SearchLink}>
                        <Search />
                    </a>
                </div>
                {/* <div className="cursor-pointer">
                    <a href={WishLink}>
                        <Wish />
                    </a>
                </div> */}
            {/* </div> */}
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
