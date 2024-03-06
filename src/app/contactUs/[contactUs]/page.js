'use client'

import Banner from '@/components/molecules/contactUs/banner'
import { getContactUsData } from '@/utils/api'
import React, { useEffect, useState } from 'react'


const Page = () => {
    const [contactUsData, setContactUsData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getContactUsData()
                setContactUsData(response.data.attributes)
            } catch (error) {
                console.log('error fetching contact us data', error)
            }
        }
        fetchData()
    }, [])

    console.log('contact data', contactUsData)

    return (
        <div className=''>
            <div className=' w-full'><Banner contactUsData={contactUsData} /></div>
             
        </div>
    )
}

export default Page