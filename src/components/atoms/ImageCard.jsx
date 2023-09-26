import Wish from '@/components/atoms/Icons/Wish'
const ImageCard = ({ iconDisplay, classnames, productImage }) => {
    return (
        <div
            className={classnames}
            style={{ "backgroundImage": `url(${productImage})` }}
        >
      <Wish
        width="24"
        height="24"
        stroke="#1E1E1E"
        viewBox="0 0 24 24"
        classnames={`${iconDisplay} float-right mr-2 mt-2 cursor-pointer`}
      />
    </div>
  );
};
export default ImageCard;
