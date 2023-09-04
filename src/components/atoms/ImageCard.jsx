import {Wish} from './Icons.jsx';
const ImageCard = (props) => {
    return (
        <div className = "w-[308px] h-[418px] rounded-2xl shrink-0 back ml-2">
            <Wish icon = {`${props.icon}`}/>
        </div>
    );
}
export default ImageCard;