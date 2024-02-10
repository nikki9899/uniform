import Link from 'next/link'
import Grid from '@/components/molecules/grid'
import { categoriesLabels } from '@/utils/labels/categoriesLabels'
import ImageCard from '@/components/atoms/ImageCard'
import Button from '@/components/atoms/button'

const Subcategories = ({ data }) => {
    return (
        <div className="container w-full my-10">
            <Grid cardsPerRow={2} cardsPerRowMd={4}>
                {data.map((entry) => {
                    const { id, attributes } = entry
                    const { Title, description, image, name } = attributes

                    return (
                        <Link key={id} href={`/pdp/${id}`}>
                            <div className="md:px-1 px-0 mt-9">
                                <div className="relative">
                                    <ImageCard
                                        iconDisplay="hidden"
                                        classnames="w-full md:h-96 h-80 rounded-2xl shrink-0 back"
                                        productImage={image.data.attributes.url}
                                    />
                                    <div className="flex relative mt-2">
                                        <span className="text-popularTextColor text-center text-[10px] md:text-sm not-italic font-bold leading-[10px] md:leading-[26.645px]">
                                            {Title}
                                        </span>
                                        <span className="absolute text-popularTextColor text-center text-sm not-italic font-bold leading-[26.645px] md:ml-64 ml-28 pr-4">
                                            NA
                                        </span>
                                    </div>
                                    <div className="w-full mb-2 text-xs not-italic font-medium leading-[26.645px] float-left mt-0 pt-0 text-slate-400">
                                        {description}
                                    </div>
                                    <div>
                                        <Button
                                            variant="primary"
                                            rounded="full"
                                        >
                                            <p className="text-popularTextColor text-[10px] md:text-xs not-italic font-medium md:leading-[normal] lowercase">
                                                enquire now
                                            </p>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Subcategories
