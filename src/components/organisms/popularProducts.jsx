import PopularCard from '@/components/molecules/PopularCard'
import { popularLabels } from '@/utils/labels/popularLabels'
import Link from 'next/link'

const PopularProducts = ({ popularProducts = {} }) => {
    let { title, sub_categories } = popularProducts

    return (
        <div className="w-full">
            <p className="text-left text-popularTextColor text-[34px] not-italic font-medium leading-[26.645px]">
                {title}
            </p>
            <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-12">
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
