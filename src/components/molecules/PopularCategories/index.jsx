import Carousel from '@/components/atoms/Crousel'
import Image from 'next/image'
import { getAPI } from '@/utils/api'
import Button from '@/components/atoms/button'

const PopularCategories = async () => {
    const data = await getAPI('home-page')
    const products = data.data.attributes.popularCategories.categories.data
    return (
        <Carousel
            options={{
                dragFree: true,
                containScroll: 'trimSnaps',
            }}
            navigationButtons={true}
        >
            {products.map(
                (
                    {
                        id,
                        attributes: {
                            name,
                            image: {
                                data: {
                                    attributes: { url },
                                },
                            },
                        },
                    },
                    index
                ) => (
                    <div
                        className="grow-0 shrink-0 basis-[calc(100%/3)] px-2 relative rounded-lg"
                        key={id}
                    >
                        <Image
                            className="h-[26rem] w-full rounded-lg"
                            width={500}
                            height={500}
                            src={url}
                            alt={name}
                        />
                        <Button
                            rounded={'full'}
                            addStyle={
                                'absolute top-4 left-6 border border-white px-6 py-2 text-white'
                            }
                        >
                            {name}
                        </Button>
                    </div>
                )
            )}
        </Carousel>
    )
}

export default PopularCategories
