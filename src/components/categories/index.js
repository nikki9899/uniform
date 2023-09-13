import ImageCard from '@/components/atoms/ImageCard'
import Grid from '@/components/molecules/grid'
import Button from '@/components/atoms/button'
import { categories } from '@/mockData/categories'

const Categories = () => {
    return (
        <Grid cardsPerRow={4}>
            {categories.map(({ title, image }) => {
                <div className="flex flex-col justify-between">
                    <ImageCard
                        iconDisplay="flex"
                        classnames={`w-auto h-auto rounded-2xl shrink-0 back ml-2 bg-[url(${image})]`}
                    />
                    <h5>{title}</h5>
                    <Button rounded="semi" variant="explore" />
                </div>
            })}
        </Grid>
    )
}

export default Categories
