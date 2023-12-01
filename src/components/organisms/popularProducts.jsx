// import PopularCard from '@/components/molecules/PopularCard'
// import { popularProductsData } from '@/mockData/popularProductsData'
// import { popularLabels } from '@/utils/labels/popularLabels'

// const PopularProducts = ( { popularProducts = {} }) => {
//     let { heading } = popularLabels
//     return (
//         <div className="w-full">
//             <p className="text-left text-popularTextColor text-[34px] not-italic font-medium leading-[26.645px]">
//                 {heading}
//             </p>
//             <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-12">
//                 {popularProductsData.map(
//                     ({ id, productTitle, productType, productPrice, src }) => (
//                         <div key={id}>
//                             <PopularCard
//                                 productTitle={productTitle}
//                                 productType={productType}
//                                 productPrice={productPrice}
//                                 productImage={src}
//                             />
//                         </div>
//                     )
//                 )}
//             </div>
//         </div>
//     )
// }

// export default PopularProducts
import PopularCard from '@/components/molecules/PopularCard';
import { popularLabels } from '@/utils/labels/popularLabels';

const PopularProducts = ({ popularProducts = {} }) => {
  let { title, sub_categories } = popularProducts;

  return (
    <div className="w-full">
      <p className="text-left text-popularTextColor text-[34px] not-italic font-medium leading-[26.645px]">
        {title}
      </p>
      <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-12">
        {sub_categories?.data?.map(({ id, attributes }) => (
          <div key={id}>
            <PopularCard
              productTitle={attributes.name}
              productType={attributes.description}
              productImage={attributes.image?.data?.attributes?.url || ""} // Adjust the property access
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;



// import PopularCard from '@/components/molecules/PopularCard';
// import { popularLabels } from '@/utils/labels/popularLabels';

// const PopularProducts = ({ popularProducts }) => {
//   let { heading } = popularLabels;

//   if (!popularProducts || !popularProducts.length) {
//     // Handle the case when popularProducts is null or empty
//     return null; // or you can render a loading state or an empty state
//   }

//   return (
//     <div className="w-full">
//       <p className="text-left text-popularTextColor text-[34px] not-italic font-medium leading-[26.645px]">
//         {heading}
//       </p>
//       <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-12">
//         {popularProducts.map(
//           ({ id, productTitle, productType, productPrice, src }) => (
//             <div key={id}>
//               <PopularCard
//                 productTitle={productTitle}
//                 productType={productType}
//                 productPrice={productPrice}
//                 productImage={src}
//               />
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default PopularProducts;
