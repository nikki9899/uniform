import Search from '@/components/atoms/Icons/Search'
import Wish from '@/components/atoms/Icons/Wish'
import { NavbarLabels } from '@/utils/labels/navbarLabels'

const Navbar = () => {
    let { Logo, Tabs, SearchLink, WishLink } = NavbarLabels
    return (
        <div className="h-[103px] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] bg-[#efefef] flex">
            <h3 className="pl-[60px] pt-[37px] pb-[38px] text-black text-[26.645px] not-italic font-black leading-[26.645px] tracking-[-1.066px] float-left">
                {Logo}
            </h3>
            <div className="inline-flex pl-[250px] h-[17.297px] items-start gap-[54px] shrink-0 pt-[40px] pb-[44px]">
                {Tabs.map(({ id, TabTitle, src }) => (
                    <div key={id} className="cursor-pointer">
                        <a
                            href={src}
                            className="text-[#1E1E1E] text-base not-italic font-medium leading-4 tracking-[-0.64px]"
                        >
                            {TabTitle}
                        </a>
                    </div>
                ))}
            </div>
            <div className="flex pl-[295px] gap-[10px] pt-[40px] pb-[44px]">
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
