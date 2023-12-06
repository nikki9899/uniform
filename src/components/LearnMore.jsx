// import { useState } from "react";

// const LearnMore = ({ text }) => {
//   const [showAll, setShowAll] = useState(false);

//   const toggleShowAll = () => {
//     setShowAll(!showAll);
//   };

//   return (
//     <div>
//       <div className={`paragraph ${showAll} ? 'show-all' : ''}`}>
//         {text}
//       </div>
//       {!showAll && (
//         <button onClick={toggleShowAll} className="learn-more-button">
//           Learn More
//         </button>
//       )}
//     </div>
//   );
// };

// export default LearnMore;

import React from 'react'

const LearnMore = () => {
  return (
    <div>
    <div className=' '>
      <p className='h-12 overflow-hidden'> If you want to know about modern design, comfortable corporate and
          industrial staff working uniforms price near me or looking to buy
          custom men and women corporate uniform In India you are at the right
          place. We have 20+ years of experience & expertise in manufacturing
          unique and extraordinary uniforms for different streams. We make
          extraordinary designs by blending the right concepts, color, methods
          and fabrics which is later metamorphosed to extraordinary uniforms. We
          have a range of products waiting to be used by our valuable customers.
          We are specialized corporate and industry custom design uniform
          manufacturers in India</p>
          <button>Read More</button>
    </div>
    </div>
  )
}

export default LearnMore

