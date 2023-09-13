import ImageCard from '@/components/atoms/ImageCard'
import Button from '@/components/atoms/button'
import { categories } from '@/mockData/categories'

const Categories = () => {
    return (
        <div className="w-full h-full grid grid-cols-4 gap-4">
            {categories.map(({ title, image }) => (
                <div className="">
                    <ImageCard
                        iconDisplay="hidden"
                        classnames={`w-64 h-80 rounded-2xl shrink-0 back  bg-[url('/Images/productImage1.png')]`}
                    />
                    <h5 className="mt-2 mb-2">{title}</h5>
                    {/* need to discuss about explore button Link */}
                    <Button rounded="semi" variant="explore" />
                </div>
            ))}
        </div>
    )
}

export default Categories
