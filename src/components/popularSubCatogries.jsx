import React from 'react';
import ImageCard from './atoms/ImageCard';
import popSubCatImg from '@/mockData/popSubCatImage';
import Button from './atoms/button';

function PopularSubCatogires() {
  const reverseImg = [...popSubCatImg].reverse(); 
  const buttonTexts = ["reflective clothing", "safety suits", "Rubber suits"];
  return (
    <div>
      <h2 className="text-gray-900 font-manrope font-medium text-4xl lowercase px-10">
        popular sub-categories
      </h2>
      <div className="flex gap-3 pt-8 justify-center">
        {popSubCatImg.map((item, index) => (
          <div key={item.id} className={`w-${index >= 1 ? '3/12' : '5/12'} h-96 relative`}>
            <ImageCard
              iconDisplay="hidden"
              classnames=" w-full h-full rounded shink-0"
              productImage={item.ImgSrc}
            />
            <Button
              rounded="full"
              variant="primary"
              addStyle={item.id === 2 ? 'text-black border-2 border-black absolute top-2 left-2' : 'text-white border-2 border-white absolute top-2 left-2'}
            >
              <p>{buttonTexts[index]}</p>
            </Button>
          </div>
        ))}
        
      </div>
      <div className="flex gap-3 pt-3 justify-center">
        {reverseImg.map((item, index) => (
          <div key={item.id} className={`w-${index <= 1 ? '3/12' : '5/12'} h-96 relative`}>
            <ImageCard
              iconDisplay="hidden"
              classnames="w-full h-full rounded shink-0"
              productImage={item.ImgSrc}
            />
            <Button
              rounded="full"
              variant='primary'
              addStyle={item.id === 2 ? 'text-black border-2 border-black absolute top-2 left-2' : 'text-white border-2 border-white absolute top-2 left-2'}
            >
              <p>{buttonTexts[index]}</p>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularSubCatogires;
