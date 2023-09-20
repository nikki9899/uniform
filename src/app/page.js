
import Popular from '@/components/molecules/popular'
import ImageCard from '../components/atoms/ImageCard'
import ShopByIndustries from '@/components/molecules/shopByIndustris'
// import Hero from "@/components/hero";
import AboutUs from '@/components/aboutUs';
// import Uniform from "@/components/uniform";
import PopularSubCatogires from '@/components/popularSubCatogries';

export default function Home() {


    return (
        <div>
            <main className="min-h-screen flex-col items-center justify-between p-24">

                {/* <Hero /> */}
                <Popular />
                <PopularSubCatogires />
                <ImageCard
                    iconDisplay="flex"
                    classnames="w-[308px] h-[418px] rounded-2xl shrink-0 back ml-2"
                />
                <ShopByIndustries />
                {/* <Uniform /> */}
                <AboutUs />
            </main>
        </div>
    )
}
