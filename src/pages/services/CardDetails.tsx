// In the PageData component file (../projectsDetails/[id].tsx)
import React from 'react';

interface PageDataProps {
  cardData: {
    title: string;
    price: string;
    imageSrc: string;
  };
  newData: {
    title: string;
    price: string;
    imageSrc: string;
  };
}

const CardDetails: React.FC<PageDataProps> = ({ cardData, newData }) => {
  return (
    <div className="container mx-auto mt-10">
      {/* <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-2xl font-semibold">{newData.title}</h1>
        <p className="text-lg text-gray-700">{newData.price}</p>
        <h1 className="text-2xl font-semibold">{cardData.title}</h1>
        <p className="text-lg text-gray-700">{cardData.price}</p>
        <div className="mt-4">
          <img src={cardData.imageSrc} alt={cardData.title} className="w-full" />
          <img src={newData.imageSrc} alt={newData.title} className="w-full" />
        </div>
      </div> */}
    </div>
  );
};

export default CardDetails;

