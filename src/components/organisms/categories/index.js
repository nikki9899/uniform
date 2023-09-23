import Link from 'next/link'
import ImageCard from '@/components/atoms/ImageCard'
import Button from '@/components/atoms/button'
import Grid from '@/components/molecules/grid'
import { categoriesLabels } from '@/utils/labels/categoriesLabels'
import { getAPI } from '@/utils/api'

const Categories = async () => {
    const { linkText } = categoriesLabels
    const { data } = await getAPI('categories')

    const categories = data.map((entry) => {
        return {
            id: entry.id,
            name: entry.attributes.name,
            image: entry.attributes.image.data.attributes.url,
        }
    })

    return (
        <div className="container w-full my-10">
            <Grid cardsPerRow={4}>
                {categories.map(({ name, image, id }) => (
                    <div key={id} className='px-1 mt-9'>
                        <ImageCard
                            iconDisplay="hidden"
                            classnames={`w-full h-96 rounded-2xl shrink-0 back `}
                            productImage={image}
                        />
                        <h5 className="mt-2 mb-2 font-semibold text-lg">{name}</h5>
                        <Link href="#">
                            <Button rounded="full" variant="primary" addStyle="py-3 px-7 text-xl ">
                                {linkText}
                                
                            </Button>
                        </Link>
                    </div>
                ))}
            </Grid>
        </div>
    )
}

export default Categories
