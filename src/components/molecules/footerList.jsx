import Link from "next/link";
import { memo } from "react";

const FooterList = (props) => {
    let { title, listItems  } =  props.contents;
    return (
      <div>
        <h2 className="mb-4 text-sm font-semibold text-gray-900 ">
          {title}
        </h2>
        <ul className="text-gray-700  font-normal">
          {listItems.map(({ item, id , link = "" }) => (
            <li key={id} className="mb-2">
               <Link href={link}> {item}</Link>
              {/* <a href="#" className=" hover:underline"> 
               
              </a> */}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default memo(FooterList) ;