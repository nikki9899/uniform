import Categories from '@/components/organisms/categories'
import Pagination from '@/components/atoms/Pagination'
import Popular from '@/components/molecules/popular'
import IndustrialUniform from '@/components/industrialUniform'
import { getAPI, getSubCategories } from '@/utils/api'
import { industrialCategoryMockData } from '@/mockData/category'
export const metadata = {
    title: 'Categories',
}

const Clp =  async ( { params : {category}  } ) => {
   let  { data = [] , meta : { pagination : {  page  , pageSize ,pageCount , total}} } =  await getSubCategories(category) ;
if(data.length == 0 ) {
    data = industrialCategoryMockData 
}
    return (
        <div>
            <main className="flex min-h-screen flex-col items-center justify-between ">
                <IndustrialUniform heading={category} />
                <div className="h-px w-full mt-40 bg-black border-0 "></div>
                <Categories data={data} />
                <Pagination totalPage={total} currPage={pageCount} />
                <div className="h-px w-full my-8 bg-black border-0 "></div>
                <Popular />
            </main>
        </div>
    )
}

export default Clp
