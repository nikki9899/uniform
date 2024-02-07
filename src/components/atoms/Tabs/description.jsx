import React from 'react';

const Description = ({ data }) => {
  return (
    <div>
      <div className="description-container pt-8">
        <div className=" features flex list-none pt-3.5">
          <div className="heading md:w-1/6 text-lg font-semibold">
            <h3>Features :</h3>
          </div>
          <div className="feature ml-6 md:ml-0">
            {data.features
              .replace(/@/g, '\n')
              .split('\n')
              .filter(feature => feature.trim() !== '') 
              .map((feature, index) => (
                <p key={index}>{`${index + 1}. ${feature.trim()}`}</p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;


