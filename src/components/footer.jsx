'use client'
import React, { useState, useEffect } from 'react'
import FooterList from '@/components/molecules/footerList'
import FooterNewsLetter from '@/components/molecules/footerNewsLetter'
import SocialMediaIcons from '@/components/molecules/socialMediaIcons'
import { TRACE_OUTPUT_VERSION } from 'next/dist/shared/lib/constants'
import { getAPI } from '@/utils/api'

const Footer = (props) => {
    const [shopCategories, setShopCategories] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await getAPI('home-page')
                const popularCategories =
                    response?.data?.attributes?.popularCategories?.categories
                        ?.data
                setShopCategories(popularCategories)
            } catch (error) {
                console.log(error.message)
            }
        }

        fetchCategories()
    }, [])

    let { quickLink, company, customerService } = {
        quickLink: {
            title: 'Quick link',
            listItems: [
                { id: 1, item: 'Home', link: '/', disabled: false },
                { id: 2, item: 'FAQs', link: '/faqs', disabled: true },
                { id: 3, item: 'Blog', link: '/blog', disabled: true },
                {
                    id: 4,
                    item: 'Trade Enquiries',
                    link: '/trade',
                    disabled: true,
                },
                {
                    id: 5,
                    item: 'Career',
                    link: '/career',
                    disabled: TRACE_OUTPUT_VERSION,
                },
                { id: 6, item: 'Sitemap', link: '/sitemap', disabled: true },
            ],
        },

        company: {
            title: 'Company',
            listItems: [
                {
                    id: 1,
                    item: 'About Us',
                    link: '/aboutUs/page.js',
                    disabled: false,
                },
                {
                    id: 2,
                    item: 'Testimonials',
                    link: 'https://www.google.com/',
                    disabled: true,
                },
            ],
        },

        customerService: {
            title: 'Customer Service',
            listItems: [
                { id: 1, item: 'AJOY1969@gmail.com' },
                { id: 2, item: '+91-9891194126' },
            ],
        },

        Shop: {
            title: 'Shop',
            listItems: [
                {
                    id: 1,
                    item: 'School Uniform',
                    link: '/clp/school-uniform',
                    disabled: false,
                },
                {
                    id: 2,
                    item: 'Industrial Clothing',
                    link: 'http://localhost:3000/clp/industrial-clothing',
                    disabled: false,
                },
                {
                    id: 3,
                    item: 'Hospital Uniforms',
                    link: '/Hospital Uniforms',
                    disabled: false,
                },
                {
                    id: 4,
                    item: 'Corporate Uniform',
                    link: 'http://localhost:3000/clp/corporate-uniforms',
                    disabled: false,
                },
                {
                    id: 5,
                    item: 'Hotel Uniforms',
                    link: 'http://localhost:3000/clp/hotel-uniforms',
                    disabled: false,
                },
            ],
        },
    }

    let socialMediaAccounts = [
        {
            id: '1',
            name: 'twitter',
            link: 'https://twitter.com/',
            iconPath:
                'M22.1094 5.875C21.3594 6.25 20.6094 6.375 19.7344 6.5C20.6094 6 21.2344 5.25 21.4844 4.25C20.7344 4.75 19.8594 5 18.8594 5.25C18.1094 4.5 16.9844 4 15.8594 4C13.7344 4 11.8594 5.875 11.8594 8.125C11.8594 8.5 11.8594 8.75 11.9844 9C8.60938 8.875 5.48438 7.25 3.48438 4.75C3.10938 5.375 2.98438 6 2.98438 6.875C2.98438 8.25 3.73438 9.5 4.85938 10.25C4.23438 10.25 3.60938 10 2.98438 9.75C2.98438 11.75 4.35938 13.375 6.23438 13.75C5.85938 13.875 5.48438 13.875 5.10938 13.875C4.85938 13.875 4.60938 13.875 4.35938 13.75C4.85938 15.375 6.35938 16.625 8.23438 16.625C6.85938 17.75 5.10938 18.375 3.10938 18.375C2.73438 18.375 2.48438 18.375 2.10938 18.375C3.98438 19.5 6.10938 20.25 8.35938 20.25C15.8594 20.25 19.9844 14 19.9844 8.625C19.9844 8.5 19.9844 8.25 19.9844 8.125C20.8594 7.5 21.6094 6.75 22.1094 5.875Z',
        },
        {
            id: '2',
            name: 'FaceBook',
            link: 'https://www.facebook.com/',
            iconPath:
                'M22.1094 12.0022C22.1098 10.091 21.5626 8.2198 20.5325 6.61003C19.5024 5.00026 18.0326 3.71938 16.2971 2.91906C14.5616 2.11874 12.6331 1.8325 10.7399 2.09422C8.84677 2.35595 7.06828 3.15468 5.61502 4.39585C4.16175 5.63701 3.09459 7.26863 2.53987 9.0975C1.98516 10.9264 1.96614 12.8759 2.48506 14.7152C3.00398 16.5546 4.03911 18.2067 5.46787 19.476C6.89664 20.7453 8.65921 21.5786 10.5469 21.8772V14.8922H8.00813V12.0022H10.5469V9.79843C10.4922 9.28399 10.5514 8.76382 10.7202 8.2748C10.889 7.78577 11.1633 7.33986 11.5236 6.96866C11.8839 6.59746 12.3215 6.31007 12.8053 6.12684C13.2891 5.94362 13.8073 5.86905 14.3231 5.90843C15.0732 5.91828 15.8215 5.98346 16.5619 6.10343V8.56718H15.3019C15.0873 8.53911 14.8691 8.55967 14.6634 8.62733C14.4578 8.69498 14.2701 8.80801 14.114 8.95804C13.958 9.10807 13.8377 9.29127 13.762 9.49408C13.6864 9.69689 13.6573 9.91411 13.6769 10.1297V12.0047H16.4506L16.0069 14.8947H13.6719V21.8834C16.0247 21.5112 18.1674 20.3114 19.7142 18.4999C21.261 16.6884 22.1104 14.3842 22.1094 12.0022Z',
        },
        {
            id: '3',
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/',
            iconPath:
                'M21.2344 2H2.98438C2.48438 2 2.10938 2.375 2.10938 2.875V21.25C2.10938 21.625 2.48438 22 2.98438 22H21.3594C21.8594 22 22.2344 21.625 22.2344 21.125V2.875C22.1094 2.375 21.7344 2 21.2344 2ZM7.98438 19H5.10938V9.5H8.10938V19H7.98438ZM6.60938 8.25C5.60938 8.25 4.85938 7.375 4.85938 6.5C4.85938 5.5 5.60938 4.75 6.60938 4.75C7.60938 4.75 8.35938 5.5 8.35938 6.5C8.23438 7.375 7.48438 8.25 6.60938 8.25ZM19.1094 19H16.1094V14.375C16.1094 13.25 16.1094 11.875 14.6094 11.875C13.1094 11.875 12.8594 13.125 12.8594 14.375V19.125H9.85938V9.5H12.7344V10.75C13.1094 10 14.1094 9.25 15.4844 9.25C18.4844 9.25 18.9844 11.25 18.9844 13.75V19H19.1094Z',
        },
        {
            id: '4',
            name: 'Pinterest',
            link: 'https://in.pinterest.com/',
            iconPath:
                'M12.1094 2C6.60938 2 2.10938 6.5 2.10938 12C2.10938 16.25 4.73438 19.875 8.48438 21.25C8.35938 20.5 8.35938 19.25 8.48438 18.375C8.60938 17.625 9.60938 13.375 9.60938 13.375C9.60938 13.375 9.35938 12.875 9.35938 12C9.35938 10.625 10.2344 9.5 11.2344 9.5C12.1094 9.5 12.4844 10.125 12.4844 10.875C12.4844 11.75 11.9844 13 11.6094 14.25C11.3594 15.25 12.1094 16 13.1094 16C14.8594 16 16.2344 14.125 16.2344 11.375C16.2344 9 14.4844 7.25 12.1094 7.25C9.23438 7.25 7.60938 9.375 7.60938 11.625C7.60938 12.5 7.98438 13.375 8.35938 13.875C8.35938 14.125 8.35938 14.25 8.35938 14.375C8.23438 14.75 8.10938 15.375 8.10938 15.5C8.10938 15.625 7.98438 15.75 7.73438 15.625C6.48438 15 5.73438 13.25 5.73438 11.75C5.73438 8.625 7.98438 5.75 12.3594 5.75C15.8594 5.75 18.4844 8.25 18.4844 11.5C18.4844 15 16.3594 17.75 13.2344 17.75C12.2344 17.75 11.2344 17.25 10.9844 16.625C10.9844 16.625 10.4844 18.5 10.3594 19C10.1094 19.875 9.48438 21 9.10938 21.625C10.1094 21.875 11.1094 22 12.1094 22C17.6094 22 22.1094 17.5 22.1094 12C22.1094 6.5 17.6094 2 12.1094 2Z',
        },
        {
            id: '5',
            name: 'instagram',
            link: 'https://www.instagram.com/',
            iconPath:
                'M17.2908 8.06504C17.9536 8.06504 18.4908 7.52778 18.4908 6.86504C18.4908 6.2023 17.9536 5.66504 17.2908 5.66504C16.6281 5.66504 16.0908 6.2023 16.0908 6.86504C16.0908 7.52778 16.6281 8.06504 17.2908 8.06504Z M12.1094 17C9.35188 17 7.10938 14.7575 7.10938 12C7.10938 9.2425 9.35188 7 12.1094 7C14.8669 7 17.1094 9.2425 17.1094 12C17.1094 14.7575 14.8669 17 12.1094 17ZM12.1094 9.5C10.7307 9.5 9.60938 10.6213 9.60938 12C9.60938 13.3787 10.7307 14.5 12.1094 14.5C13.4881 14.5 14.6094 13.3787 14.6094 12C14.6094 10.6213 13.4881 9.5 12.1094 9.5Z M17.1094 22H7.10938C4.53938 22 2.10938 19.57 2.10938 17V7C2.10938 4.43 4.53938 2 7.10938 2H17.1094C19.6794 2 22.1094 4.43 22.1094 7V17C22.1094 19.57 19.6794 22 17.1094 22ZM7.10938 4.5C5.94062 4.5 4.60938 5.83125 4.60938 7V17C4.60938 18.1912 5.91813 19.5 7.10938 19.5H17.1094C18.2782 19.5 19.6094 18.1688 19.6094 17V7C19.6094 5.83125 18.2782 4.5 17.1094 4.5H7.10938Z',
        },
    ]

    return (
        <div className="mx-auto w-full px-4 sm:px-12">
            <div className="md:hidden ">
                <div className="flex">
                    <div className="mt-32">
                        <FooterNewsLetter />
                    </div>
                    <div className="flex-col">
                        <div className="ml-11 text-[9px] font-normal">
                            <FooterList contents={quickLink} />
                        </div>
                        <div className="ml-11 text-[9px] font-normal">
                            <FooterList
                                contents={{
                                    title: 'Shop',
                                    listItems: shopCategories.map(
                                        (category) => ({
                                            id: category.id,
                                            item: category.attributes.name,
                                            slug: category.attributes.slug,
                                        })
                                    ),
                                }}
                            />
                        </div>
                        <div className="ml-11 text-[9px] font-normal">
                            <FooterList contents={company} />
                        </div>
                        <div className="ml-11 text-[9px] font-normal">
                            <FooterList contents={customerService} />
                        </div>
                    </div>
                </div>
                <div className="px-4 mt-16 py-6 bg-gray-100  dark:bg-gray-100 flex items-center justify-between gap-x-4">
                    <span className="leading-4 tracking-tighter text-xs text-gray-500 font-black dark:text-gray-600">
                        Uniform on Web
                    </span>
                    <div className="flex mt-4 space-x-2.5 text-gray-600 ">
                        {socialMediaAccounts.map((accounts) => (
                            <SocialMediaIcons
                                key={accounts.id}
                                socialMedia={accounts}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="hidden md:block ">
                <div className="grid grid-cols-2 gap-8 py-6 lg:py-8 sm:grid-cols-4">
                    <div className="text-sm font-normal leading-6 lg:text-[18px] lg:leading-6">
                        <FooterList contents={quickLink} />
                    </div>
                    <div className="text-sm font-normal leading-6 lg:text-[18px] lg:leading-6">
                        <FooterList contents={company} />
                        <div className="mt-9">
                            <FooterList contents={customerService} />
                        </div>
                    </div>
                    <div className="text-sm font-normal leading-6 lg:text-[18px] lg:leading-6">
                        <FooterList
                            contents={{
                                title: 'Shop',
                                listItems: shopCategories.map((category) => ({
                                    id: category.id,
                                    item: category.attributes.name,
                                    slug: category.attributes.slug,
                                })),
                            }}
                        />
                    </div>
                    <div>
                        <FooterNewsLetter />
                    </div>
                </div>
                <div className="px-4 mt-16 py-6 bg-gray-100 dark:bg-gray-700 sm:flex md:items-center justify-between">
                    <span className="text-lg text-gray-500 font-black dark:text-white">
                        Uniform on Web
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        {socialMediaAccounts.map((accounts) => (
                            <SocialMediaIcons
                                key={accounts.id}
                                socialMedia={accounts}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
