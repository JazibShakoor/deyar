import Image from 'next/image';
import React from 'react';

import userImg from '../assets/images/user1.png';
import userImg1 from '../assets/images/user2.png';
import userImg2 from '../assets/images/user3.png';

const Review = () => {
  return (
    <div id="reviews" className="relative p-4 mb-4">
      <div className="flex justify-center items-center p-3">
        <button className="mt-[90px] mb-4 bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded-2xl text-white hover:text-white md:w-28 font-black text-xs uppercase cursor-pointer">
          reviews
        </button>
      </div>
      <div className="relative">
        <div className="flex flex-col justify-center items-center">
          <p className="text-7xl sm:text-6xl lg:text-10xl text-blue-700 font-black absolute top-0 left-0 w-full uppercase dark:text-white text-center z-0 opacity-10">
            reviews
          </p>
          <p className="text-2xl sm:text-4xl text-blue-900 font-bold text-center z-20 relative capitalize mt-3 sm:mt-14 dark:text-gray-300">
            Why Choose Deyar AlJazeera Real Estate?
          </p>
        </div>
      </div>

      <div className="relative flex justify-center items-center">
        <p className="font-medium text-base sm:text-lg text-center mt-10 sm:mt-20 text-bluePText w-[900px]">
          &quot;Deyar AlJazeera has carved a name for itself in Dubai real estate market by taking professionalism and customer service to a new level, 
          leading the company into being one of the fastest growing real estate companies in the region. Whether you’re looking to buy, 
          sell or lease, property management, or investment opportunities, our team at Deyar AlJazeera strives to provide 
          our clients with world-class services every step of the way, going beyond the ordinary.&quot;
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-6 sm:mt-12 ml-4 sm:ml-0 pr-3">
        <div className="flex flex-col mb-5 sm:mr-4 ">
          <div className="w-full sm:w-[350px] h-[160px] sm:h-[185px] flex items-start p-3 sm:p-4 gap-2 bg-white shadow-xl dark:bg-slate-700  rounded-[10px]">
            <p className="font-semibold text-sm sm:text-base leading-[25px] text-bluePText dark:text-white">
              Thank you very much for the house found. This is an ideal option
              for our family at the location and price. The company employs real
              professionals who will always
            </p>
          </div>
          <div className="flex items-start gap-3 w-auto h-[50px] mt-3 sm:mt-6">
            <Image
              src={userImg}
              alt="user"
              className="w-12 h-12 bg-[#8833FF4D] rounded-full"
            />
            <div className="flex flex-col justify-center items-start">
              <p className="font-bold text-sm sm:text-base leading-[30px] text-cardText capitalize dark:text-white">
                sami uddin
              </p>
              <p className="font-semibold text-xs sm:text-sm text-blueCardSubTitle leading-5">
                dubai
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-5 sm:mr-4">
          <div className="w-full sm:w-[350px] h-[160px] sm:h-[185px] flex items-start p-3 sm:p-4 gap-2 bg-white dark:bg-slate-700 shadow-xl rounded-[10px] ml-0 sm:ml-4">
            <p className="font-semibold text-sm sm:text-base leading-[25px] text-bluePText dark:text-white">
            Mr. Aziz and Deyar AlJazeera Real Estate Propertise made buying my dream home a breeze. Their expertise, dedication, and seamless process are unmatched.
            </p>
          </div>
          <div className="flex items-start gap-3 w-auto h-[50px] mt-3 sm:mt-6">
            <Image
              src={userImg1}
              alt="user"
              className="w-12 h-12 bg-[#CC74294D] rounded-full ml-0 sm:ml-4"
            />
            <div className="flex flex-col justify-center items-start">
              <p className="font-bold text-sm sm:text-base leading-[30px] text-cardText capitalize dark:text-white">
                alisarwar
              </p>
              <p className="font-semibold text-xs sm:text-sm text-blueCardSubTitle leading-5">
                pakistan
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-5">
          <div className="w-full sm:w-[350px] h-[160px] sm:h-[185px] flex items-start p-3 sm:p-4 gap-2 bg-white dark:bg-slate-700 shadow-xl rounded-[10px] ml-0 sm:ml-4">
            <p className="font-semibold text-sm sm:text-base leading-[25px] text-bluePText dark:text-white">
              For many of us, our very first experience of learning about the
              celestial bodies begins when we saw our first full moon in the
              sky. It is truly a magnificent view even
            </p>
          </div>
          <div className="flex items-start gap-3 w-auto h-[50px] mt-3 sm:mt-6">
            <Image
              src={userImg2}
              alt="user"
              className="w-12 h-12 bg-[#E62E7B4D] rounded-full ml-0 sm:ml-4"
            />
            <div className="flex flex-col justify-center items-start">
              <p className="font-bold text-sm sm:text-base leading-[30px] text-cardText capitalize dark:text-white">
                hania
              </p>
              <p className="font-semibold text-xs sm:text-sm text-blueCardSubTitle leading-5">
                india
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
