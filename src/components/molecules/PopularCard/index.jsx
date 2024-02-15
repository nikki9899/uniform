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
                classnames="h-56 w-full   sm:h-[346px] lg:h-[418px] rounded-2xl shrink-0 back "
                productImage={productImage}
            />
            <div className=" flex relative mt-2">
                <span className=" text-center text-[7px]  lg:text-sm sm:text-xs sm:leading-6  font-bold leading-4 lg:leading-[26.645px]">
                    {productTitle}
                </span>
                
                {/* <span className="absolute text-popularTextColor text-center text-sm not-italic font-bold leading-[26.645px] ml-24  pr-4">
                    {productPrice}
                </span> */}
                
                <span className="absolute  text-center text-[7px] sm:text-xs sm:leading-6 leading-4 font-bold lg:text-sm lg:leading-[26.645px] ml-64 pr-4">
                    {productPrice}
                </span>
           
            </div>
            <div className="w-full mb-2 text-[6px] sm:text-[10px] sm:leading-6 font-medium leading-4 lg:leading-[26.645px] lg:text-xs float-left mt-0 pt-0 text-slate-400">
            Full body resistance 
            </div>
            <div className="w-[61px] h-5 sm:w-24 sm:h-8 md:w-28 md:h-[39px] mb-9">
                <Button variant="primary" rounded="full" >
                    <p className='  text-[6px] md:text-xs sm:text-[10px] sm:leading-3 font-medium md:leading-4 lowercase'>enquire now</p>
                </Button>
            </div>
        </div>
    )
}
export default PopularCard
