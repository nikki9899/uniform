import Popular from '@/components/molecules/popular'
import ImageCard from '../components/atoms/ImageCard'
import ShopByIndustries from '@/components/molecules/shopByIndustris'
import AboutUs from '@/components/molecules/aboutUs'
import PopularSubCatogires from '@/components/popularSubCatogries'
import Hero from '@/components/hero'
import PopularCategories from '@/components/molecules/PopularCategories'
import PopularProducts from '@/components/organisms/popularProducts'
import CommercialUniformSection from '@/components/uniform'
import Line from '@/components/atoms/horizontal-line'
import { getAPI } from '@/utils/api'
import Tabs from '@/components/atoms/Tabs/tabs'
import Page from './aboutUs/[aboutUs]/page'

const Home = async () => {
    const {
        data: {
            attributes: {
                hero,
                popularCategories,
                popularProducts,
                shopByCategory,
                popularSearches,
                aboutUs,
                popularSubCategories,
            },
        },
    } = await getAPI()

    return (
        <div>
            <main className="min-h-screen flex-col items-center justify-between">
                <Hero hero={hero} />
                <Line />
                <PopularCategories popularCategories={popularCategories} />
                <div className="hidden md:block">
                    <Line />
                </div>
                <PopularSubCatogires
                    popularSubCategories={popularSubCategories}
                />
                <Line />
                <PopularProducts popularProducts={popularProducts} />
                <Line />
                <ShopByIndustries shopByCategory={shopByCategory} />
                <Line />
                <CommercialUniformSection />
                <Line />
                <Popular popularSearches={popularSearches} />
                <div className="hidden md:block">
                    <Line />
                </div>

                <AboutUs aboutUs={aboutUs} />
                <div className="md:hidden">
                    <Line />
                </div>
            </main>
        </div>
    )
}

export default Home
