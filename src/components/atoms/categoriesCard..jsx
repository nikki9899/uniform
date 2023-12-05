import Button from './button';

const CategoriesCard = ({ item: { Id, ImgSrc, Name } }) => {
    console.log('Rendering CategoriesCard for Id:', Id);
    console.log(Name)

  return (
    <div className='relative'>
      <img
        src={ImgSrc}
        className="w-full h-[25rem] rounded object-cover object-top"
        alt={`Category ${Name}`}
      />
      <Button
        rounded="full"
        variant="primary"
        addStyle='text-white border-1 border-white  bg-gray-200 absolute top-7 left-7'
        
      >
        <p className='text-base'>{Name}</p>
      </Button>
     
    </div>
  );
};

export default CategoriesCard;

