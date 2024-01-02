import React from 'react'
import Banner from '@/components/molecules/aboutUs/banner'
import Overview from '@/components/molecules/aboutUs/overview'
import SideImageText from '@/components/molecules/aboutUs/sideImageText'
import Description from '@/components/molecules/aboutUs/description'
import { getAPI } from '@/utils/api'
import Factsheet from '@/components/molecules/aboutUs/factsheet'
import UspHead from '@/components/molecules/aboutUs/companyUsp'
import StatutoryProfile from '@/components/molecules/aboutUs/statutory'
import HsnDescription from '@/components/molecules/aboutUs/hsnDescription'
import TeamMembers from '@/components/molecules/aboutUs/teamMembers'
import PaymentMode from '@/components/molecules/aboutUs/packingDetails'
import WhyUs from '@/components/molecules/aboutUs/whyUs'
import OurTeam from '@/components/molecules/aboutUs/ourTeam'

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
