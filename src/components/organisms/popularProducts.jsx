import PopularCard from '@/components/molecules/PopularCard'
import { popularProductsData } from '@/mockData/popularProductsData'
import { popularLabels } from '@/utils/labels/popularLabels'

const PopularProducts = () => {
    let { heading } = popularLabels
    return (
        <div className="w-full">
            <p className="text-left text-popularTextColor text-[34px] not-italic font-medium leading-[26.645px]">
                {heading}
            </p>
            <div className="grid grid-cols-4 grid-rows-2 gap-6 mt-12">
                {popularProductsData.map(
                    ({ id, productTitle, productType, productPrice, src }) => (
                        <div key={id}>
                            <PopularCard
                                productTitle={productTitle}
                                productType={productType}
                                productPrice={productPrice}
                                productImage={src}
                            />
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default PopularProducts
