import React from 'react'
import Button from '@/components/atoms/button'
import ImageCard from '@/components/atoms/ImageCard'
import { searchLabels } from '@/utils/labels/label'
import Link from 'next/link'
import "./style.css"
const Popular =  ({ popularSearches : { products : { data = [] } = { data : [] } }  =   {  data : [] }  } ) => {
     
   
    const items = data.map(({ id , attributes : {  Title  ,description , image } }) =>  (
        <div className="me-7 w-3/4 md:w-full mb-12" key={id}>
        <Link key={id} href={`/pdp/${id}`}>
            <ImageCard
                iconDisplay="flex"
                classnames="w-[13rem] h-[18rem] md:w-64 md:h-[346px] lg:h-[418px] lg:w-[19rem] rounded-2xl shrink-0 back"
                productImage={image.data.attributes.url}
            />
            </Link>
            <div>
            
                <div className="flex justify-between my-1 ml-2">
                    <h3 className="text-[9px] font-bold leading-4 sm:text-sm sm:leading-5 lg:text-sm lg:leading-6">{Title}</h3>
                    <h4 className="text-[10px] sm:text-xs sm:leading-5 lg:text-sm lg:leading-5 font-bold leading-4">
                        INR 5000
                    </h4>
                </div>
                <p className="text-xs text-[8px] leading-4 sm:text-[10px] sm:leading-5 lg:text-xs lg:leading-7 font-medium ml-2 text-start text-gray-500 ">
                   hii
                </p>
                <div className="text-left w-[74px] h-6 sm:w-24 sm:h-8 lg:w-28 lg:h-10 ml-2 my-2">
                    <Button variant="primary" rounded="full">
                        <h2 className="text-[8px] sm:text-[10px] sm:leading-3 lg:text-xs lg:leading-4 font-medium leading-[10px]">{searchLabels.buttontext}</h2>
                    </Button>
                </div>
            </div>
        </div>
    ))
    return (
        <div className="py-4 max-w-full  max-w-screen-full text-center ">
            <div className="sm:text-3xl lg:text-4xl text-lg font-medium leading-7  mb-2 text-left">
                {searchLabels.heading}
            </div>

            <div className=" my-9 max-w-screen-full lg overflow-x-auto custom-scrollbar flex flex-nowrap ">
                {items}
            </div>
        </div>
    )
}
export default Popular