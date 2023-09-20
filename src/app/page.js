
import Popular from '@/components/molecules/popular'
import ImageCard from '../components/atoms/ImageCard'
import ShopByIndustries from '@/components/molecules/shopByIndustris'
import AboutUs from '@/components/aboutUs';
// import Uniform from "@/components/uniform";
import PopularSubCatogires from '@/components/popularSubCatogries';
import Hero from '@/components/hero';
import PopularCategories from '@/components/molecules/PopularCategories';
import PopularProducts from '@/components/organisms/popularProducts';
import CommercialUniformSection from '@/components/uniform';

export default function Home() {


    return (
        <div>
            <main className="min-h-screen flex-col items-center justify-between p-12">
                <Hero />
               <PopularCategories />
                {/* <PopularSubCatogires /> */}
               <PopularProducts/>
                <ShopByIndustries />
                <CommercialUniformSection />
                {/* <Uniform /> */}
                <Popular />
                <AboutUs />
            </main>
        </div>
    )
}
