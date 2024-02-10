import ImageCard from '@/components/atoms/ImageCard'
import Button from '@/components/atoms/button'

const PopularCard = ({
    productTitle,
    productPrice,
    productType,
    productImage,
}) => {
    return (
        <div className="relative ">
            <ImageCard
                // iconDisplay="flex"
                classnames="w-[180px] h-[250px] md:w-[280px] md:h-[390px] rounded-2xl shrink-0 back "
                productImage={productImage}
            />
            <div className=" flex relative mt-2">
                <span className=" text-popularTextColor text-center text-[10px] md:text-sm not-italic font-bold leading-[10px] md:leading-[26.645px]">
                    {productTitle}
                </span>
                
                {/* <span className="absolute text-popularTextColor text-center text-sm not-italic font-bold leading-[26.645px] ml-24  pr-4">
                    {productPrice}
                </span> */}
                
                <span className="absolute text-popularTextColor text-center text-sm not-italic font-bold leading-[26.645px] ml-64 pr-4">
                    {productPrice}
                </span>
           
            </div>
            <div className="w-full mb-2 text-xs not-italic font-medium leading-[26.645px] float-left mt-0 pt-0 text-slate-400">
                {productType}
            </div>
            <div className="">
                <Button variant="primary" rounded="full" >
                    <p className='text-popularTextColor text-[10px] md:text-xs not-italic font-medium md:leading-[normal] lowercase'>enquire now</p>
                </Button>
            </div>
        </div>
    )
}
export default PopularCard
