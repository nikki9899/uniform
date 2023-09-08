import Search from "./Icons/Search";
import Wish from "./Icons/Wish";
const ImageCard = ({ iconDisplay, classnames }) => {
  return (
    <div className={classnames}>
      <Search
        width="24"
        height="24"
        fill="#1E1E1E"
        viewBox="0 0 24 24"
        classnames="float-right mr-2 mt-2 cursor-pointer"
      />
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
