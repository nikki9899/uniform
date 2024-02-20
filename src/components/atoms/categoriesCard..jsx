import Button from './button'

const CategoriesCard = ({ item: { Id, ImgSrc, Name } }) => {
    return (
        <div className="relative">
            <img
                src={ImgSrc}
                className="w-full h-[25rem] rounded object-cover object-top"
                alt={`Category ${Name}`}
            />
            <Button
                rounded="full"
                variant="primary"
                addStyle="text-white text-base border-1 border-white bg-slate-800 bg-opacity-30 absolute top-7 left-7"
            >
                <p className="text-[10px] md:text-base ">{Name}</p>
            </Button>
        </div>
    )
}

export default CategoriesCard
