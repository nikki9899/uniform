import Categories from '@/components/organisms/categories'
import Pagination from '@/components/atoms/Pagination'
import Popular from '@/components/popular'

export const metadata = {
    title: 'Categories',
}

const Category = () => {
    return (
        <div>
            <main className="flex min-h-screen flex-col items-center justify-between p-16">
                <div className="h-px w-full  bg-black border-0 "></div>
                <Categories />
                <Pagination totalPage={10} currPage={1} />
                <div className="h-px w-full my-8 bg-black border-0 "></div>
                <Popular />
            </main>
        </div>
    )
}

export default Category
