import ImageCard from '@/components/atoms/ImageCard'
import Grid from '@/components/molecules/grid'
import Button from '@/components/atoms/button'
import { subCategories } from '@/mockData/subCategories'

const SubCategories = () => {
    return (
        <Grid cardPerRow={4}>
            {subCategories.map(({ title, image }) => {
                ;<div className="flex flex-col justify-between">
                    <ImageCard
                        iconDisplay="flex"
                        classnames={`w-[308px] h-[418px] rounded-2xl shrink-0 back ml-2 bg-[url('${image}')]`}
                    />
                    <h5>{title}</h5>
                    <Link>
                        <Button rounded="semi" onClick={handleClick} variant="explore"/>
                    </Link>
                </div>
            })}
        </Grid>
    )
};

export default subCategories;
