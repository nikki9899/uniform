import Carousel from '@/components/atoms/Crousel'
import Image from 'next/image'
import Button from '@/components/atoms/button'
import Link from 'next/link'
import '../../molecules/styles.css'

const PopularCategories = async ({
    popularCategories: {
        categories: { data = [] },
    },
}) => {
    return (
        <div className="w-full pb-8">
            <p className="text-left py-1 mb-2 md:mb-6 text-popularTextColor text-sm md:text-3xl not-italic font-normal leading-[26.645px]">
                Popular Categories
            </p>
            <div className="md:hidden mt-[20px] my-9 max-w-screen-full lg overflow-x-auto custom-scrollbar flex flex-nowrap">
                {data.map(
                    (
                        {
                            id,
                            attributes: {
                                name,
                                slug,
                                image: {
                                    data: {
                                        attributes: { url },
                                    },
                                },
                            },
                        },
                        index
                    ) => {
                        return (
                            <div
                            className={`${
                                (index + 1) % 3 === 0
                                    ? 'md:basis-[46%] basis-[50%]'
                                    : 'md:basis-[27%] basis-[50%]'
                            } grow-0 shrink-0 relative rounded-lg mx-1`} // Add my-4 for margin
                            key={id}
                        >
                            <Link href={`/clp/${slug}`}>
                                <Image
                                    className="mb-[20px] h-[26rem] w-full rounded-lg object-cover object-top"
                                    width={500}
                                    height={500}
                                    src={url}
                                    alt={name}
                                />
                                <Button
                                    rounded="full"
                                    variant="primary"
                                    addStyle={
                                        ' text-white text-base border-1 border-white bg-slate-800 bg-opacity-30 absolute top-2.5 md:top-7 left-2 md:left-7'
                                    }
                                >
                                    <p className="text-[7.89px] md:text-base ">
                                        {name}
                                    </p>
                                </Button>
                                </Link>
                            </div>
                        )
                    }
                )}
                {/* </div> */}
            </div>
            <div className="hidden md:block">
                <Carousel
                    options={{
                        dragFree: true,
                        containScroll: 'trimSnaps',
                    }}
                    navigationButtons={true}
                >
                    {data.map(
                        (
                            {
                                id,
                                attributes: {
                                    name,
                                    slug,
                                    image: {
                                        data: {
                                            attributes: { url },
                                        },
                                    },
                                },
                            },
                            index
                        ) => {
                            return (
                                <div
                                    className={`${
                                        (index + 1) % 3 === 0
                                            ? 'md:basis-[46%] basis-[50%]'
                                            : 'md:basis-[27%] basis-[50%]'
                                    } grow-0 shrink-0 relative rounded-lg`}
                                    key={id}
                                >
                                    <Link href={`/clp/${slug}`}>
                                        <Image
                                            className="mb-[20px] h-[26rem] w-full rounded-lg object-cover object-top"
                                            width={500}
                                            height={500}
                                            src={url}
                                            alt={name}
                                        />
                                        <Button
                                            rounded="full"
                                            variant="primary"
                                            addStyle={
                                                ' text-white text-base border-1 border-white bg-slate-800 bg-opacity-30 absolute top-2.5 md:top-7 left-2 md:left-7'
                                            }
                                        >
                                            <p className="text-[7.89px] md:text-base ">
                                                {name}
                                            </p>
                                        </Button>
                                    </Link>
                                </div>
                            )
                        }
                    )}
                </Carousel>
            </div>
        </div>
    )
}

export default PopularCategories
