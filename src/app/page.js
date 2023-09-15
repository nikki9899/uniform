import Popular from '@/components/molecules/popular'
import ImageCard from '../components/atoms/ImageCard'
import ShopByIndustries from '@/components/molecules/shopByIndustris'

export default function Home() {
    return (
        <div>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <Popular />
                <ImageCard
                    iconDisplay="flex"
                    classnames="w-[308px] h-[418px] rounded-2xl shrink-0 back ml-2"
                />
                <ShopByIndustries />
            </main>
        </div>
    )
}
