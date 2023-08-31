import { memo } from "react";

const FooterList = (props) => {
    let { title, listItems } =  props.contents;
    return (
      <div>
        <h2 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
        <ul className="text-gray-700 dark:text-gray-400  font-normal">
          {listItems.map(({ item, id }) => (
            <li key={id} className="mb-2">
              <a href="#" className=" hover:underline"> 
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default memo(FooterList) ;