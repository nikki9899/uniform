import Link from 'next/link'
import ImageCard from '@/components/atoms/ImageCard'
import Button from '@/components/atoms/button'
import Grid from '@/components/molecules/grid'
import { categoriesLabels } from '@/utils/labels/categoriesLabels'
import { getAPI } from '@/utils/api'

const Categories = ({ data }) => {
    const { linkText } = categoriesLabels

    const categories = data.map((entry) => {
        return {
            id: entry.id,
            name: entry.attributes.name,
            image: entry.attributes.image.data.attributes.url,
        }
    })

    return (
        <div className="container w-full my-10 ">
            <Grid cardsPerRow={2} cardsPerRowMd={4}>
                {categories.map(({ name, image, id }) => (
                    <Link key={id} href={`/plp/${name}`}>
                        <div className="px-1 mt-9">
                            <ImageCard
                                iconDisplay="hidden"
                                classnames={`w-full h-[18rem] sm:h-[346px] lg:h-[418px] h-96 rounded-2xl shrink-0 back `}
                                productImage={image}
                            />
                            <h5 className="mt-2 mb-2 font-bold text-[10px] leading-4 sm:text-sm sm:leading-5 lg:text-lg lg:leading-[26px]">
                                {name}
                            </h5>
                            <div className="h-6 w-[60px] sm:w-[92px] sm:h-9 lg:h-12 lg:w-28">
                                <Button rounded="full" variant="primary">
                                    <h2 className="text-[9px] leading-3 sm:text-sm sm:leading-4 lg:text-base lg:leading-5 font-medium">
                                        {' '}
                                        {linkText}
                                    </h2>
                                </Button>
                            </div>
                        </div>
                    </Link>
                ))}
            </Grid>
        </div>
    )
}

export default Categories
