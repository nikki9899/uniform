import PopularCard from '@/components/molecules/PopularCard'
import { popularLabels } from '@/utils/labels/popularLabels'
import Link from 'next/link'

const PopularProducts = ({ popularProducts = {} }) => {
    let { title, sub_categories } = popularProducts

    return (
        <div className="w-full">
            <p className="text-left text-popularTextColor text-sm md:text-[34px] not-italic font-medium leading-[26.645px]">
                {title}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-3 mt-4 md:mt-12">
                {sub_categories?.data?.map(({ id, attributes }) => (
                    <Link
                        key={id}
                        href={`/pdp/${attributes.products.data[0]?.id}`}
                    >
                        <div key={id}>
                            <PopularCard
                                productTitle={attributes.name}
                                productType={attributes.description}
                                productImage={
                                    attributes.image?.data?.attributes?.url ||
                                    ''
                                }
                                productPrice={
                                    attributes.products.data[0]?.attributes
                                        ?.product_detail?.data?.attributes
                                        ?.price
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
