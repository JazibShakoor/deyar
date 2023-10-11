// pages/services/apartment.js
import React from 'react';
import { useState } from 'react';
import Card from '../components/card';


import cardImageBg1 from '../assets/images/Image.png';
import cardImageBg2 from '../assets/images/Image-2.png';
import cardImageBg3 from '../assets/images/Image-3.png';
import cardImageBg4 from '../assets/images/Image-4.png';
import cardImageBg5 from '../assets/images/Image-5.png';
import cardImageBg6 from '../assets/images/Image-6.png';
import cardImageBg7 from '../assets/images/Image-7.png';
import cardImageBg8 from '../assets/images/Image-8.png';
import cardImageBg9 from '../assets/images/Image-9.png';

const apartment = () => {
  return (
    <div className="relative mt-16 ">
    <div className="flex flex-col justify-center items-center mt-32">
      <p className=" text-8xl sm:text-10xl text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full uppercase  dark:text-white">
    Apartment
      </p>
      <p className="text-4xl text-blue-900 font-bold text-center z-20 relative mt-7 sm:mt-14 dark:text-gray-300">
        Services for Maximum Efficiency
      </p>
    </div>
  
 
    <div className="flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-5 gap-5 m-5 p-8 mt-16">
     
    <Card
        imageSrc={cardImageBg4}
        title="Modern Glass apartment"
        price="$ 2,500,000"
      />
      <Card
        imageSrc={cardImageBg5}
        title="Modern Glass apartment"
        price="$ 2,500,000"
      />
      <Card
        imageSrc={cardImageBg6}
        title="Modern Glass apartment"
        price="$ 2,500,000"
      />
      <Card
        imageSrc={cardImageBg7}
        title="Modern Glass apartment"
        price="$ 2,500,000"
      />
      <Card
        imageSrc={cardImageBg8}
        title="Modern Glass apartment"
        price="$ 2,500,000"
      />
      <Card
        imageSrc={cardImageBg9}
        title="Modern Glass apartment"
        price="$ 2,500,000"
      />

      <Card
        imageSrc={cardImageBg1}
        title="Modern Glass apartment"
        price="$ 2,500,000"
      />
      <Card
        imageSrc={cardImageBg2}
        title="Modern Glass apartment"
        price="$ 2,500,000"
      />
      <Card
        imageSrc={cardImageBg3}
        title="Modern Glass apartment"
        price="$ 2,500,000"
      />
    </div>
   
    </div>
  );
};


const tabs = [
  { label: 'Home', content: <apartment/> },



];

const Tabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center  ">
      <div className="flex ">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`${
              idx === activeTabIndex
                ? 'border-b-2 border-orange-500 text-orange-500 '
                : 'text-gray-500 hover:text-gray-700 dark:text-white dark:hover:text-gray-500'
            } px-2 font-normal py-4 sm:px-6 sm:font-medium focus:outline-none ${
              idx === 3 && 'hidden sm:flex'
            }`}
            onClick={() => setActiveTabIndex(idx)}
          >
            {tab.label}
          </button>
        ))}
     
      </div>
     
      <div className="mt-4">{tabs[activeTabIndex].content}</div>
    
    </div>
  
  );
};

export default apartment;
