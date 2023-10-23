'use client';

import { footerLabels } from "@/utils/labels/footerLabels";
import { memo } from "react";


const FooterNewsLetter = (props) => {
  const { title, subTitle, button } = footerLabels.newsLater;

  const  handelSubscribe  = (event) => {

  }
  return (
    <div>
      <h2 className="mb-4 text-2xl font-medium text-gray-900  dark:text-white">
        {title}
      </h2>
      <ul className="text-gray-900 dark:text-gray-400 font-normal">
        <li className="mb-4">{subTitle}</li>
        <li className="mb-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="relative col-span-2 ">
              <input
                type="email"
                className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-[#efefef]"
                placeholder="e-mail"
              />
            </div>
            <button className="relative py-3 text-black" onClick={handelSubscribe} >
              {button}
              <span className=" z-[-1] absolute my-2 inset-y-0 right-0 h-8 w-8 bg-red-900"></span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default memo(FooterNewsLetter);
