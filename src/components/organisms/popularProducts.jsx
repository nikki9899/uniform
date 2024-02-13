import PopularCard from '@/components/molecules/PopularCard'
import { popularLabels } from '@/utils/labels/popularLabels'
import Link from 'next/link'

const PopularProducts = ({ popularProducts = {} }) => {
    let { title, sub_categories } = popularProducts

    return (
        <div className="w-full">
            <p className="text-left text-popularTextColor text-sm sm:text-[34px] lg:text-[34px] not-italic font-medium leading-[26.645px]">
                {title}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4  lg:grid-cols-4 grid-rows-2 sm:gap-2 lg:gap-2 gap-2 mt-4  lg:mt-12 sm:mt-12">
                {sub_categories?.data?.map(({ id, attributes }) => (
                    <Link
                        key={id}
                        href={`/pdp/${attributes.products.data[0].id}`}
                    >
                        <div key={id}>
                            <PopularCard
                                productTitle={attributes.name}
                                productType={attributes.description}
                                productImage={
                                    attributes.image?.data?.attributes?.url ||
                                    ''
                                }
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default PopularProducts
