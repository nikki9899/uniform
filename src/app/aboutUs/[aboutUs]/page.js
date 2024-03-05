'use client'
import React,{useState,useEffect} from 'react'
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
import { getAboutUsData } from '@/utils/api'



const Page = () => {

    const [aboutUsData, setAboutUsData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAboutUsData();
                setAboutUsData(response.data.attributes);
            } catch (error) {
                console.error('Error fetching about us data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
           
             {aboutUsData && (
                <>
                    <Banner aboutUsBanner={aboutUsData.AboutUsBanner} />
                    <Overview data={aboutUsData.Overview} />
                    <SideImageText data={aboutUsData.Overview} />
                    <Description />
                    <Line />
                    <Factsheet factSheet={aboutUsData.factSheet} />
                    <Line />
                    <UspHead data={aboutUsData.CompanyUSP} />
                    <Line />
                    <StatutoryProfile  />
                    <HsnDescription />
                    <OurTeam data={aboutUsData.OurTeam} />
                    <TeamMembers teamNames={aboutUsData.OurTeam.teamNames} />
                    <Line />
                    <PaymentMode data={aboutUsData.PnP} />
                    <Line />
                    <WhyUs data={aboutUsData.WhyUs} />
                    <Line />
                </>
            )}
        </div>
    )
}

export default Page
