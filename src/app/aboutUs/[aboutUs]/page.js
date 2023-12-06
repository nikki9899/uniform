import React from 'react'
import Banner from '@/components/atoms/aboutUs/banner'
import Overview from '@/components/atoms/aboutUs/overview'
import SideImageText from '@/components/atoms/aboutUs/sideImageText'
import Description from '@/components/atoms/aboutUs/description'
import { getAPI } from '@/utils/api'
import Factsheet from '@/components/atoms/aboutUs/factsheet'
import UspHead from '@/components/atoms/aboutUs/companyUsp'
import StatutoryProfile from '@/components/atoms/aboutUs/statutory'
import HsnDescription from '@/components/atoms/aboutUs/hsnDescription'
import TeamMembers from '@/components/atoms/aboutUs/teamMembers'
import PaymentMode from '@/components/atoms/aboutUs/packingDetails'
import WhyUs from '@/components/atoms/aboutUs/whyUs'
import OurTeam from '@/components/atoms/aboutUs/ourTeam'

const Page = () => {
    return (
        <div>
            <Banner />
            <Overview />
            <SideImageText />
            <Description />
            <Factsheet />
            <UspHead />
            <StatutoryProfile />
            <HsnDescription />
            <OurTeam />
            <TeamMembers />
            <PaymentMode />
            <WhyUs />
        </div>
    )
}

export default Page
