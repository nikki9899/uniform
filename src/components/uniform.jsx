// import React from 'react'
// import { commercialLabels } from '@/utils/labels/commercialLabels'

// import Button from './atoms/button'

// const CommercialUniformSection = () => {
//     let { heading, heading1, text, text1, text2, caption, caption1 } =
//         commercialLabels
//     return (
//         <div className=" relative py-9 ">
//             <div className='flex justify-between'>
//                 <div className="w-[143px] h-14 sm:w-[282px] sm:h-28 text-black text-xl font-semibold leading-7 tracking-[-1px] sm:text-[41px] sm:font-semibold sm:leading-[56px] sm:tracking-[-2px] ">
//                     <h2>
//                         {heading} <br /> {heading1}
//                     </h2>
//                 </div>

//                 <div className=" w-[164px] h-12 lg:w-1/3 pt-1 text-[8px] sm:w-[368px] sm:h-14 sm:text-sm sm:font-normal sm:leading-4  sm:tracking-[-1px] font-medium text-black text-right  lg:text-base  leading-[10px] lg:tracking-[-0.64px] font-manrope ">
//                     <p>
//                         {text}
                      
//                     </p>
//                 </div>
//             </div>

//             <div className="justify-center w-[344px] text-center pt-56 flex text-black text-2xl font-medium  tracking-[-2px] leading-8 sm:w-[1095px] sm:justify-center sm:text-center sm:text-6xl sm:font-medium sm:leading-[81px] sm:tracking-[-4px]">
//                 <div className=" w-[180px] -z-10 absolute my-[-160px]  ml-[-8px] sm:w-[298px] sm:my-[-240px] ">
//                     <img src="/Images/Mask group.png" />
//                 </div>
//                 <p>
//                     {caption}
//                     <br /> {caption1}
//                 </p>
//             </div>
//             <div className="text-center sm:text-center  mt-5   ">
//                 <Button variant="primary" rounded="full"
//                 addStyle={`bg-slate-300 sm:w-28 sm:h-9 sm:text-sm sm:font-medium sm:leading-4 text-gray-400 border-gray-900 opacity-50`}>
//                     <p>shop now</p>
//                 </Button>
//             </div>
//         </div>
//     )
// }

// export default CommercialUniformSection


import React from 'react'
import { commercialLabels } from '@/utils/labels/commercialLabels'

import Button from './atoms/button'

const CommercialUniformSection = () => {
    let { heading, heading1, text, text1, text2, caption, caption1 } =
        commercialLabels
    return (
        <div className=" relative ">
            <div className='flex justify-between'>
                <div className="w-36 h-14 lg:w-1/2 text-black text-xl sm:w-1/2  sm:text-4xl sm:leading-[56px]  lg:text-5xl lg:leading-[68.3px] font-semibold leading-7 tracking-[-2px] lg:tracking-[-2px] ">
                    <h2>
                        {heading} <br /> {heading1}
                    </h2>
                </div>

                <div className=" w-[10rem] h-12 lg:w-1/3 pt-1 text-[8px] font-medium text-black text-right sm:text-sm sm:font-normal sm:leading-4 sm:w-[363px] sm:h-[59px] sm:tracking-[-1px] lg:text-base  leading-[10px] lg:font-normal lg:tracking-[-0.64px] font-manrope ">
                    <p>
                        {text}
                      
                    </p>
                </div>
            </div>

            <div className="justify-center  text-center text-3xl  font-medium leading-8 tracking-[-2.123px] pt-56 sm:pt-[350px]  lg:pt-[350px]  flex text-black  ">
                <div className=" w-[180px]  sm:w-[300px] -z-10 absolute my-[-160px] sm:my-[-220px] lg:w-[360px] ml-[-8px]  ">
                    <img src="/Images/Mask group.png" />
                </div>
                <p className="sm:text-6xl">
                    {caption}
                    <br /> {caption1}
                </p>
            </div>
            {/* <div className="text-center mt-5 sm:mt-14  ">
                <Button variant="primary" rounded="full"
                addStyle={`bg-slate-300  text-gray-400 border-gray-900 opacity-50`}>
                    <p>shop now</p>
                </Button>
            </div> */}
        </div>
    )
}

export default CommercialUniformSection


