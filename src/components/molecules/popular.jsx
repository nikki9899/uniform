import React from 'react'
import Button from '@/components/atoms/button'
import ImageCard from '@/components/atoms/ImageCard'
import { searchLabels } from '@/utils/labels/label'
import Link from 'next/link'
import './styles.css'

const Popular = ({
    popularSearches: { products: { data = [] } = { data: [] } } = { data: [] },
}) => {
    const items = data.map(
        ({ id, attributes: { Title, description, image, product_detail } }) => {
            const price = product_detail?.data?.attributes?.price
            return (
                <div className="me-7 w-3/4 md:w-full mb-8 pb-8 " key={id}>
                    <Link key={id} href={`/pdp/${id}`}>
                        <ImageCard
                            iconDisplay="flex"
                            classnames="w-[14rem] h-72 sm:w-64 sm:h-[346px] lg:w-[308px] lg:h-[418px] rounded-2xl shrink-0 back"
                            productImage={image.data.attributes.url}
                        />
                  
                    <div>
                        <div className="flex justify-between md:mr-6 ">
                            <h3 className="lg:text-sm sm:text-xs text-[10px] font-bold leading-5 sm:leading-6 lg:leading-7">
                                {Title}
                            </h3>
                            <h4 className="lg:text-sm sm:text-xs text-[10px] font-bold leading-5 sm:leading-6   ">
                                {price} INR
                            </h4>
                        </div>
                        <p className="sm:text-[10px] lg:text-xs lg:leading-6 sm:leading-5 text-[8px] leading-4 font-medium ml-2 text-start text-gray-500 ">
                            {description}
                        </p>
                        <div className="lg:w-28 lg:h-9 w-[74px] h-[1.5rem] sm:w-[6rem] sm:h-[2rem] text-left ml-2 my-2">
                            <Button variant="primary" rounded="full">
                                <h2 className="lg:text-xs text-[8px] sm:text-[10px] leading-3 leading-[11px] font-medium lg:leading-4">
                                    {searchLabels.buttontext}
                                </h2>
                            </Button>
                        </div>
                    </div>
                    </Link>
                </div>
            )
        }
    )

    return (
        <div className="pt-4 max-w-full max-w-screen-full text-center">
            <div className="text-[18px] leading-[26px] md:text-[34px] font-medium mb-2 text-left">
                {searchLabels.heading}
            </div>

            <div className="md:my-9  my-5 max-w-screen-full lg overflow-x-auto custom-scrollbar flex flex-nowrap">
                {items}
            </div>
        </div>
    )
}

export default Popular
