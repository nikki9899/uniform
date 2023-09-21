import Button from '@/components/atoms/button'
import React from 'react'
import product_card from '@/data/data'
import Wish from '@/components/atoms/Icons/Wish'
import { wish_list } from '@/utils/constants'
import ImageCard from '@/components/atoms/ImageCard'
import { searchLabels } from '@/utils/labels/label'

const Popular = (props) => {
    const items = product_card.map(
        ({ id, product_name, description, product_image, product_price }) => (
            <div className=" me-7 w-full mb-12" key={id}>
                <div className="w-72 relative">
                    <img src={product_image} alt="suit" />
                    <div className="absolute top-3 right-3">
                        <Wish />
                    </div>
                </div>
                {/* <ImageCard
                    iconDisplay="flex"
                    classnames="w-[280px] h-[380px] rounded-2xl shrink-0 back "
                    productImage={product_image}
                /> */}
                <div>
                    <div className="flex justify-between ">
                        <h3 className="text-sm font-semibold leading-7">
                            {product_name}
                        </h3>
                        <h4 className="text-sm font-semibold leading-7">
                            {product_price}
                        </h4>
                    </div>
                    <p className="text-xs font-medium text-start text-gray-500 leading-7">
                        {description}
                    </p>
                    <div className="text-left">
                        <Button variant="primary" rounded="full">
                            {searchLabels.buttontext}
                        </Button>
                    </div>
                </div>
            </div>
        )
    )
    return (
        <div className="py-5 max-w-full  max-w-screen-full text-center border border-gray-800 lg:py-7">
            <div className="text-3xl font-medium mb-2 text-left">
                {searchLabels.heading}
            </div>

            <div className="scrollbar my-9 w-calc(100% / 3) max-w-screen-full lg flex flex-nowrap overflow-x-auto  ">
                {items}
            </div>
        </div>
    )
}
export default Popular
