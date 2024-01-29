import Pagination from '@/components/atoms/Pagination'
import IndustrialUniform from '@/components/industrialUniform'
import Image from 'next/image'
import Subcategories from '@/components/organisms/subcategory'
import Popular from '@/components/molecules/popular'
import { getProducts } from '@/utils/api'

const Plp = async ({ params: { subCategory } }) => {
    let {
        data = [],
        meta: {
            pagination: { page, pageSize, pageCount, total },
        },
    } = await getProducts(subCategory)
    console.log(subCategory)

    let filterData = [],
        finalData = []

    return (
        <div>
            <main className="flex min-h-screen flex-col items-center justify-between ">
                <IndustrialUniform heading={subCategory} />
                <div className="h-px w-full mt-40 bg-black border-0 "></div>
                <Subcategories data={data} />
                <Pagination totalPage={total} currPage={pageCount} />
                <div className="h-px w-full my-8 bg-black border-0 "></div>
                <Popular />
            </main>
        </div>
    )
}

export default Plp
