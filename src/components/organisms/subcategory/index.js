import Link from 'next/link'
import Grid from '@/components/molecules/grid'
import { categoriesLabels } from '@/utils/labels/categoriesLabels'
import PopularCard from '@/components/molecules/PopularCard'

const Subcategories = ({ data }) => {
    return (
        <div className="container w-full my-10">
            <Grid cardsPerRow={4}>
                {data.map((entry) => {
                    const { id, attributes } = entry
                    const { Title, description, image, name } = attributes

                    return (
                        <Link key={id} href={`/pdp/${id}`}>
                            <div className="px-1 mt-9">
                                <PopularCard
                                    productTitle={Title}
                                    productPrice="NA"
                                    productType={description}
                                    productImage={image.data.attributes.url}
                                />
                                <h5 className="mt-2 mb-2 font-semibold text-lg">
                                    {name}
                                </h5>
                            </div>
                        </Link>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Subcategories
