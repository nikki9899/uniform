import Carousel from '@/components/atoms/Crousel'
import Image from 'next/image'
import Button from '@/components/atoms/button'
import Link from 'next/link'

const PopularCategories = async ({
    popularCategories: {
        categories: { data = [] },
    },
}) => {
    return (
        <div className="w-full pb-8">
            <p className="text-left py-1 mb-6 text-popularTextColor text-3xl not-italic font-normal leading-[26.645px]">
                Popular Categories
            </p>

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
                                        ? 'basis-[46%]'
                                        : 'basis-[27%]'
                                } grow-0 shrink-0 relative rounded-lg`}
                                key={id}
                            >
                                <Link href={`/clp/${slug}`}>
                                    <Image
                                        className="h-[26rem] w-full rounded-lg object-cover object-top"
                                        width={500}
                                        height={500}
                                        src={url}
                                        alt={name}
                                    />
                                    <Button
                                        rounded="full"
                                        variant="primary"
                                        addStyle={
                                            ' text-white text-base border-1 border-white bg-slate-800 bg-opacity-30 absolute top-7 left-7'
                                        }
                                    >
                                        <p className="text-base ">{name}</p>
                                    </Button>
                                </Link>
                            </div>
                        )
                    }
                )}
            </Carousel>
        </div>
    )
}

export default PopularCategories
