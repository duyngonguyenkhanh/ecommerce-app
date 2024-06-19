import React from 'react';

const SimpleBanner = ({text}) => {
    return (
      <div className="italic bg-gray-100 flex justify-between p-20 items-center">
        <p className="font-medium text-[50px]">{text}</p>
        <p className="text-primary">{text}</p>
      </div>
    );
  };

export default SimpleBanner;