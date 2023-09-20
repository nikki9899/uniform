import Link from 'next/link'
import ImageCard from '@/components/atoms/ImageCard'
import Button from '@/components/atoms/button'
import Grid from '@/components/molecules/grid'
import { categoriesLabels } from '@/utils/labels/categoriesLabels'

// all Categories API: https://uniformonweb.onrender.com/api/categories?populate=image

const Categories = async () => {
    const { linkText } = categoriesLabels;
    const response = await fetch(
        'https://uniformonweb.onrender.com/api/categories?populate=image'
    );
    const { data } = await response.json()
    const categories = data.map((entry) => {
        return {
            id: entry.id,
            name: entry.attributes.name,
            image: entry.attributes.image.data.attributes.url,
        }
    })

    return (
        <div className="container my-20">
            <Grid cardsPerRow={4}>
                {categories.map(({ name, image, id }) => (
                    <div key={id}>
                        <ImageCard
                            iconDisplay="hidden"
                            classnames={`w-64 h-80 rounded-2xl shrink-0 back `}
                            productImage={image}
                        />
                        <h5 className="mt-2 mb-2">{name}</h5>
                        <Link href="#">
                            <Button rounded="full" variant="primary">
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
