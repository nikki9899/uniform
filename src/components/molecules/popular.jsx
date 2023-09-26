import Button from '@/components/atoms/button'
import React from 'react'
import ImageCard from '@/components/atoms/ImageCard'
import { searchLabels } from '@/utils/labels/label'
import { getAPI } from '@/utils/api'

const Popular = async (props) => {
    const { data } = await getAPI('products')
    const products = data.map((entry) => {
        return {
            id: entry.id,
            title: entry.attributes.Title,
            image: entry.attributes.image.data.attributes.url,
            description: entry.attributes.description,
        }
    })
    const items = products.map(({ title, image, id, description }) => (
        <div className=" me-7 w-full mb-12" key={id}>
            <ImageCard
                iconDisplay="flex"
                classnames="w-[19rem] h-[26rem] rounded-2xl shrink-0 back ml-2"
                productImage={image}
            />
            <div>
                <div className="flex justify-between my-1 ml-2">
                    <h3 className="text-sm font-semibold leading-7">{title}</h3>
                    <h4 className="text-sm font-semibold leading-7">
                        INR 5000
                    </h4>
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
        <div className="py-5 max-w-full  max-w-screen-full text-center lg:py-7">
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
