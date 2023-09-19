import Link from 'next/link'
import ImageCard from '@/components/atoms/ImageCard'
import Button from '@/components/atoms/button'
import Grid from '@/components/molecules/grid'
import { categories } from '@/mockData/categories'
import { categoriesLabels } from '@/utils/labels/categoriesLabels'

const Categories = () => {
    const { linkText } = categoriesLabels
    return (
        <div className="container my-20">
            <Grid cardsPerRow={4}>
                {categories.map(({ title, image, id }) => (
                    <div key={id}>
                        <ImageCard
                            iconDisplay="hidden"
                            classnames={`w-64 h-80 rounded-2xl shrink-0 back `}
                            productImage={image}
                        />
                        <h5 className="mt-2 mb-2">{title}</h5>
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
