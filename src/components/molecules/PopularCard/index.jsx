import ImageCard from '@/components/atoms/ImageCard'
import Button from '@/components/atoms/button'

const PopularCard = ({
    productTitle,
    productPrice,
    productType,
    productImage,
}) => {
    return (
        <div>
            <ImageCard
                iconDisplay="flex"
                classnames="w-[280px] h-[380px] rounded-2xl shrink-0 back ml-2"
                productImage={productImage}
            />
            <div className="mt-2">
                <span className="pl-2 text-popularTextColor text-center text-sm not-italic font-bold leading-[26.645px]">
                    {productTitle}
                </span>
                <span className="text-popularTextColor text-center text-sm not-italic font-bold leading-[26.645px] float-right">
                    {productPrice}
                </span>
            </div>
            <div className="text-popularType w-full mb-2 text-xs not-italic font-medium leading-[26.645px] float-left pl-2 mt-0 pt-0">
                {productType}
            </div>
            <div className="pl-2">
                <Button variant="primary" rounded="full" >
                    <p className='text-popularTextColor text-xs not-italic font-medium leading-[normal] lowercase'>enquire now</p>
                </Button>
            </div>
        </div>
    )
}
export default PopularCard
