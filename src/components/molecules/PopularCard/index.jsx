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
                classnames="w-[280px] h-[390px] rounded-2xl shrink-0 back "
                productImage={productImage}
            />
            <div className="mt-2">
                <span className="text-popularTextColor text-center text-sm not-italic font-bold leading-[26.645px]">
                    {productTitle}
                </span>
                <span className="text-popularTextColor text-center text-sm not-italic font-bold leading-[26.645px] float-right pr-4">
                    {productPrice}
                </span>
            </div>
            <div className="w-full mb-2 text-xs not-italic font-medium leading-[26.645px] float-left mt-0 pt-0 text-slate-400">
                {productType}
            </div>
            <div className="">
                <Button variant="primary" rounded="full" >
                    <p className='text-popularTextColor text-xs not-italic font-medium leading-[normal] lowercase'>enquire now</p>
                </Button>
            </div>
        </div>
    )
}
export default PopularCard
