import Wish from '@/components/atoms/Icons/Wish'
const ImageCard = ({ iconDisplay, classnames, productImage }) => {
    return (
      <div className={`${classnames} relative overflow-hidden`}>
        <div
            className='w-full  h-full hover:scale-110 transition-all duration-700'
            style={{ 
              backgroundSize:"cover",
              backgroundImage: `url(${productImage})`, 
            }}
        >
    </div>
    {/* <Wish
        width="24"
        height="24"
        stroke="#1E1E1E"
        viewBox="0 0 24 24"
        classnames={`${iconDisplay} cursor-pointer absolute right-2 top-2`}
      /> */}
    </div>
  );
};
export default ImageCard;
