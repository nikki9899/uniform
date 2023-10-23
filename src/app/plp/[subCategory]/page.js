import Pagination from "@/components/atoms/Pagination"
import IndustrialUniform from "@/components/industrialUniform"
import Filter from "@/components/molecules/Filter"
import { industrialCategoryMockData } from "@/mockData/category"
import { getSubCategories } from "@/utils/api"
import Image from "next/image"

const Plp =  async ( { params : {subCategory}  } ) => {
    let  { data = [] , meta : { pagination : {  page  , pageSize ,pageCount , total}} } =  await getSubCategories(subCategory) ;

let filterData = [] , finalData = []

    return (
        <div>
        <main className="flex min-h-screen flex-col items-center justify-between ">
            <IndustrialUniform heading={subCategory} />
            <div className="h-px w-full mt-40 bg-black border-0 "></div>
            <Filter filterData={filterData}/>
            <div className="flex flex-col ">
                {finalData.map(({ title, id, image }) => (
                    <div>
                        <h1>{title}</h1>
                        <Image src={image} alt="img" width={150} height={300} />
                    </div>
                ))}
            </div>
            <Pagination totalPage={total} currPage={pageCount} />
            <div className="h-px w-full my-8 bg-black border-0 "></div>
          
        </main>
    </div>


    )
}

export default Plp
