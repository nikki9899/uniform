import Carousel from '@/components/atoms/Crousel'
import Image from 'next/image'
import Button from '@/components/atoms/button'

const PopularCategories = async ({ popularCategories : {  categories : {  data = [] } }}) => {
  
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
                        className="grow-0 shrink-0 basis-[calc(100%/3)] relative rounded-lg"
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
                )}
            )}
        </Carousel>

        </div>
    )
}

export default PopularCategories
