import Button from './button'

const CategoriesCard = ({ item : { Id, ImgSrc , Name  } }) => {
    return (
        <div className='relative' >
            <img
                src={ImgSrc}
                className="w-full h-[25rem] rounded  object-cover object-top"
                alt={`Category ${Name}`}
            />
            <Button
                rounded="full"
                variant="primary"
                addStyle={
                    Id === 6
                        ? 'text-black border-1 border-black absolute top-7 left-7'
                        : 'text-white border-1 border-white absolute top-7 left-7'
                }
            >
                <p className='text-base '>{Name}</p>
            </Button>
        </div>
    )
}
export default CategoriesCard
