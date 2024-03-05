import Link from 'next/link'
import Grid from '@/components/molecules/grid'
import { categoriesLabels } from '@/utils/labels/categoriesLabels'
import ImageCard from '@/components/atoms/ImageCard'
import Button from '@/components/atoms/button'

const Subcategories = ({ data }) => {
    return (
        <div className=" w-full my-10">
            <div className=" w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3">
                {data.map((entry) => {
                    const { id, attributes } = entry
                    const { Title, description, image, name } = attributes
                    const subCategoryDescription =
                        attributes?.sub_category?.data?.attributes?.description
                    const price =
                        attributes?.product_detail?.data?.attributes?.price

                    return (
                        <Link key={id} href={`/pdp/${id}`}>
                            <div className="md:px-1 px-0 mt-9">
                                <div className="relative">
                                    <ImageCard
                                        iconDisplay="hidden"
                                        classnames={`w-full h-[18rem] sm:h-[346px] md:h-[355px] lg:h-[418px] h-96 rounded-2xl shrink-0 back `}
                                        productImage={image.data.attributes.url}
                                    />
                                    <div className="flex justify-between relative mt-2">
                                        <span className=" text-center text-[8px] sm:text-xs  lg:text-sm lg:leading-6 leading-[14px] font-bold sm:leading-[22px]">
                                            {Title}
                                        </span>
                                        <span className="text-right text-[8px] sm:text-xs  lg:text-sm lg:leading-6 leading-[14px] font-bold sm:leading-[22px] ">
                                            {price} INR
                                        </span>
                                    </div>
                                    <div className="w-full mb-2 text-[6px] sm:text-[10px] sm:leading-5 lg:text-xs lg:leading-6 font-medium leading-[14px] float-left mt-0 pt-0 text-slate-400">
                                        {subCategoryDescription}
                                    </div>
                                    <div className="h-6 w-[60px] sm:w-[92px] sm:h-9 lg:h-12 lg:w-28">
                                        <Button
                                            rounded="full"
                                            variant="primary"
                                        >
                                            <h2 className="text-[6px] leading-[8px] sm:text-[10px] sm:leading-3 lg:text-xs lg:leading-4 font-medium">
                                                enquire now
                                            </h2>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Subcategories
