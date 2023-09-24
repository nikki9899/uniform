import Search from '@/components/atoms/Icons/Search'
import Wish from '@/components/atoms/Icons/Wish'
import { NavbarLabels } from '@/utils/labels/navbarLabels'

const Navbar = () => {
    let { Logo, Tabs, SearchLink, WishLink } = NavbarLabels
    return (
        <div className="h-24 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] bg-background flex w-full">
            <h1 className="pl-12 pt-9 pb-9 text-black text-2xl not-italic font-black leading-7 tracking-[-1.066px] float-left">
                {Logo}
            </h1>
            <div className="inline-flex pl-[20%] h-4 items-start gap-14 shrink-0 pt-10 pb-11">
                {Tabs.map(({ id, TabTitle, src }) => (
                    <div key={id} className="cursor-pointer">
                        <a
                            href={src}
                            className="text-textColor text-base not-italic font-medium leading-4 tracking-[-0.64px]"
                        >
                            {TabTitle}
                        </a>
                    </div>
                ))}
            </div>
            <div className="flex pl-[20%] gap-2.5 pt-9 pb-9 float-right">
                <div className='cursor-pointer'>
                    <a href = {SearchLink}>
                        <Search />
                    </a>
                </div>
                <div className='cursor-pointer'>
                    <a href = {WishLink}>
                        <Wish />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
