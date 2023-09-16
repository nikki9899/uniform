import PopularCard from '@/components/molecules/PopularCard'
import { popularProductsData } from '@/mockData/popularProductsData'
import { popularLabels } from '@/utils/labels/popularLabels'

const PopularProducts = () => {
    let { heading } = popularLabels
    return (
        <div className="w-full">
            <p className="text-left pl-2 text-popularTextColor text-[34px] not-italic font-medium leading-[26.645px]">
                {heading}
            </p>
            <div class="grid grid-cols-4 grid-rows-2 gap-8 mt-14">
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
