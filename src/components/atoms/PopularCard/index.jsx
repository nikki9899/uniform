import ImageCard from '../ImageCard'
import Button from '../button'

const PopularCard = ({
    productTitle,
    productPrice,
    productType,
    productImage = '/Images/productImage1.png',
}) => {
    return (
        <div>
            <ImageCard
                iconDisplay="flex"
                classnames="w-[280px] h-[380px] rounded-2xl shrink-0 back ml-2 bg-[url('/Images/productImage1.png')]"
            />
            <div className="mt-2">
                <span className="pl-2 text-[#1E1E1E] text-center text-sm not-italic font-bold leading-[26.645px]">
                    {productTitle}
                </span>
                <span className="text-[#1E1E1E] text-center text-sm not-italic font-bold leading-[26.645px] float-right">
                    {productPrice}
                </span>
            </div>
            <div className="text-[#9A9B9C] w-[100%] mb-2 text-xs not-italic font-medium leading-[26.645px] float-left pl-2 mt-0 pt-0">
                {productType}
            </div>
            <div className="pl-2">
                <Button variant="enquire now" rounded="Full" />
            </div>
        </div>
    )
}
export default PopularCard
