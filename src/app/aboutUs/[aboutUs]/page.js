import React from 'react'
import Banner from '@/components/molecules/aboutUs/banner'
import Overview from '@/components/molecules/aboutUs/overview'
import SideImageText from '@/components/molecules/aboutUs/sideImageText'
import Description from '@/components/molecules/aboutUs/description'
import Factsheet from '@/components/molecules/aboutUs/factsheet'
import UspHead from '@/components/molecules/aboutUs/companyUsp'
import StatutoryProfile from '@/components/molecules/aboutUs/statutory'
import HsnDescription from '@/components/molecules/aboutUs/hsnDescription'
import TeamMembers from '@/components/molecules/aboutUs/teamMembers'
import PaymentMode from '@/components/molecules/aboutUs/packingDetails'
import WhyUs from '@/components/molecules/aboutUs/whyUs'
import OurTeam from '@/components/molecules/aboutUs/ourTeam'
import Line from '@/components/atoms/horizontal-line'
import AboutUsLine from '@/components/atoms/aboutUs-horizontal-line'

const Page = () => {
    return (
        <div>
            <Banner />
            <Overview />
            <SideImageText />
            <Description />
            <AboutUsLine />
            <Factsheet />
            <AboutUsLine />
            <UspHead />
            <AboutUsLine />
            <StatutoryProfile />
            <HsnDescription />
            <OurTeam />
            <TeamMembers />
            <AboutUsLine />
            <PaymentMode />
            <AboutUsLine />
            <WhyUs />
            <AboutUsLine />
        </div>
    )
}

export default Page
