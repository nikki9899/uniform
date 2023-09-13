import PopularCard from '../atoms/PopularCard'
import { popularProductsData } from '@/mockData/popularProductsData'

const PopularProducts = () => {
    return (
        <div className="w-full">
            <p className="text-left pl-2 text-[#1E1E1E] text-[34px] not-italic font-medium leading-[26.645px] lowercase">
                popular Products
            </p>
            <div class="grid grid-cols-4 grid-rows-2 gap-8 mt-14">
                {popularProductsData.map(
                    ({ productTitle, productType, productPrice }) => (
                        <div>
                            <PopularCard
                                productTitle={productTitle}
                                productType={productType}
                                productPrice={productPrice}
                            />
                        </div>
                    )
                )}
                {/* <div>
                    <PopularCard productTitle="Black Full body suit" productType="full body resistance" productPrice="5000 INR" productImage="/src/Image/productImage1.png"/>
                </div> */}
                {/* <div>
                    <PopularCard productTitle="Black Full body suit" productType="full body resistance" productPrice="5000 INR" productImage = ""/>
                </div>
                <div>
                    <PopularCard productTitle="Black Full body suit" productType="full body resistance" productPrice="5000 INR" productImage=""/>
                </div>
                <div>
                    <PopularCard productTitle="Black Full body suit" productType="full body resistance" productPrice="5000 INR" productImage=""/>
                </div>
                <div>
                    <PopularCard productTitle="Black Full body suit" productType="full body resistance" productPrice="5000 INR" productImage=""/>
                </div>
                <div>
                    <PopularCard productTitle="Black Full body suit" productType="full body resistance" productPrice="5000 INR" productImage=""/>
                </div>
                <div>
                    <PopularCard productTitle="Black Full body suit" productType="full body resistance" productPrice="5000 INR" productImage=""/>
                </div>
                <div>
                    <PopularCard productTitle="Black Full body suit" productType="full body resistance" productPrice="5000 INR" productImage=""/>
                </div> */}
            </div>
        </div>
    )
}

export default PopularProducts
