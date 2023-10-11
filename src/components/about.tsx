import Link from 'next/link';
import React from 'react';

export default function About({
  cardTitle1,
  cardTitle2,
  cardTitle3,
  cardSubText1,
  cardSubText2,
  cardSubText3,
}) {
  return (
    <div id="about-container" className="relative -pt-6 !mb-8">
      <div className="flex justify-center items-center">
        <button className="relative -mt-8 bg-blue-500 text-white hover:bg-blue-600 px-4 py-1 rounded-2xl  hover:text-white h-8 w-28 font-black text-xs uppercase cursor-pointer ">
          Our Story
        </button>
      </div>

      <div className="relative ">
        <div className="flex flex-col justify-center items-center mt-20">
          <p
            className="text-8xl  md:text-6xl mt-4 lg:text-10xl text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full uppercase dark:text-white
          "
          >
            OUR STORY
          </p>
          <p className="text-4xl text-blue-900 font-bold text-center z-20 relative mt-16 dark:text-gray-300">
            We Will Find the Best Option
          </p>
        </div>
      </div>

      <div className="relative flex justify-center items-center">
        <p className="font-medium text-base text-center mt-20  text-bluePText w-[900px]">
        {`Deyar AlJazeera is one of Dubai's most well-known and rapidly expanding residential and commercial real estate brokerage companies. 
        We are committed to providing our clients with a comprehensive package that covers total investment help, including property management and company establishment, unlike other brands on the market. 
        We provide a wide range of services, from business leasing to investment planning, courtesy of our professional and knowledgeable team. 
        Recognizing how fiercely competitive the Dubai real estate market is, we consistently work to go above and beyond for our customers.`}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-[50px] ml-[28px]">
        <div className="bg-white  py-35 px-10 h-[160px] w-[350px] mr-[30px] flex flex-col justify-center items-center rounded-[10px] shadow-md mb-5 dark:bg-slate-700">
          <p className="font-medium text-3xl leading-[50px] text-blueCardTitle capitalize dark:text-gray-100">
            {cardTitle1}
          </p>
          <p className="text-sm leading-8 text-center text-blueCardSubTitle dark:text-white">
            {cardSubText1}
          </p>
        </div>
        <div className="bg-white py-35 px-10 h-[160px] w-[350px] mr-[30px] flex flex-col justify-center items-center rounded-[10px] shadow-md mb-5 dark:bg-slate-700">
          <p className="font-medium text-3xl leading-[50px] text-blueCardTitle capitalize dark:text-gray-100">
            {cardTitle2}
          </p>
          <p className="text-sm leading-8 text-center text-blueCardSubTitle dark:text-white">
            {cardSubText2}
          </p>
        </div>
        <div className="bg-white py-35 px-10 h-[160px] w-[350px] mr-[30px] flex flex-col justify-center items-center rounded-[10px] shadow-md mb-5 dark:bg-slate-700">
          <p className="font-medium text-3xl leading-[50px] text-blueCardTitle capitalize dark:text-gray-100">
            {cardTitle3}
          </p>
          <p className="text-sm leading-8 text-center text-blueCardSubTitle dark:text-white">
            {cardSubText3}
          </p>
        </div>
      </div>
    </div>
  );
}
