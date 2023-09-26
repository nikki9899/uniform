
import Popular from '@/components/molecules/popular'
import ImageCard from '../components/atoms/ImageCard'
import ShopByIndustries from '@/components/molecules/shopByIndustris'
import AboutUs from '@/components/aboutUs';
import PopularSubCatogires from '@/components/popularSubCatogries';
import Hero from '@/components/hero';
import PopularCategories from '@/components/molecules/PopularCategories';
import PopularProducts from '@/components/organisms/popularProducts';
import CommercialUniformSection from '@/components/uniform';
import Line from '@/components/atoms/horizontal-line';
import { getAPI } from '@/utils/api';

 const Home =  async () => {  
    const {data} = await getAPI("home-page");

    const popSubCatImg = data.attributes.popularSubCategories.sub_categories.data.map((entry) => {
      return {
        Id: entry.id,
        ImgSrc: entry.attributes?.image?.data?.attributes?.url || '',
        Name: entry.attributes?.name || '',
      };
    });


    return (
        <div>
            <main className="min-h-screen flex-col items-center justify-between">
                <Hero />
                <Line />
               <PopularCategories />
               <Line />
                <PopularSubCatogires popSubCatImg={popSubCatImg} />
                <Line />
               <PopularProducts/>
               <Line />
                {/* <ShopByIndustries />
                <Line /> */}
                <CommercialUniformSection />
                <Line />
                <Popular />
                <AboutUs />
            </main>
        </div>
    )
}

export default  Home 
