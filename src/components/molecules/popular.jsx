import React from 'react'
import Button from '@/components/atoms/button'
import ImageCard from '@/components/atoms/ImageCard'
import { searchLabels } from '@/utils/labels/label'
import Link from 'next/link'

const Popular =  ({ popularSearches : { products : { data = [] } = { data : [] } }  =   {  data : [] }  } ) => {
     
   
    const items = data.map(({ id , attributes : {  Title  ,description , image } }) =>  (
        <div className="me-7 w-3/4 md:w-full mb-12" key={id}>
        <Link key={id} href={`/pdp/${id}`}>
            <ImageCard
                iconDisplay="flex"
                classnames="w-[14rem] h-[18rem] md:w-[19rem] md:h-[26rem] rounded-2xl shrink-0 back"
                productImage={image.data.attributes.url}
            />
            </Link>
            <div>
            
                <div className="flex justify-between my-1 ml-2">
                    <h3 className="text-sm font-semibold leading-7">{Title}</h3>
                    {/* <h4 className="text-sm font-semibold leading-7">
                        INR 5000
                    </h4> */}
                </div>
                <p className="text-xs font-medium ml-2 text-start text-gray-500 leading-7">
                    {description}
                </p>
                <div className="text-left ml-2 my-2">
                    <Button variant="primary" rounded="full">
                        {searchLabels.buttontext}
                    </Button>
                </div>
            </div>
        </div>
    ))
    return (
        <div className="py-4 max-w-full  max-w-screen-full text-center ">
            <div className="text-3xl font-normal mb-2 text-left">
                {searchLabels.heading}
            </div>

            <div className="scrollbar my-9 max-w-screen-full lg flex flex-nowrap overflow-x-scroll  ">
                {items}
            </div>
        </div>
    )
}
export default Popular