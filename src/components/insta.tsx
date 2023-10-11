import React from 'react';
import Image from 'next/image';

import instaImg1 from '../assets/images/insta1.png';
import instaImg2 from '../assets/images/insta2.png';
import instaImg3 from '../assets/images/insta3.png';
import instaImg4 from '../assets/images/insta4.png';
import instaImg5 from '../assets/images/insta5.png';
import instaImg6 from '../assets/images/insta6.png';
import instaImg7 from '../assets/images/insta7.png';
import instaImg8 from '../assets/images/insta8.png';
import instaIcon from '../assets/icons/instaIcon.png';
import Link from 'next/link';

import oc2 from "../Picx/Picx/oc2.jpg";
import oc3 from "../Picx/Picx/oc3.jpg";
import vo1 from "../Picx/Picx/vo1.jpg";
import vo4 from "../Picx/Picx/vo4.png";
import vo5 from "../Picx/Picx/vo5.png";
import vo9 from "../Picx/Picx/vo9.png";
import ro4 from "../Picx/Picx/ro4.png";
import vo7 from "../Picx/Picx/vo7.png";

const Insta = () => {
  return (
    <div className="p-4 mb-4">
      <div className="flex justify-center items-center p-3">
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded-2xl text-white hover:text-white md:w-28 font-black text-xs uppercase cursor-pointer">
          Our Work
        </button>
      </div>
      <div className="relative">
        <div className="flex flex-col justify-center items-center">
          <div className=''>
          <p className="text-[56px]  sm:text-6xl lg:text-10xl text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full uppercase dark:text-white">
            instagram
          </p>
          </div>
          <p className="text-2xl sm:text-4xl text-blue-900 font-bold text-center z-20 relative capitalize mt-3 sm:mt-14 dark:text-gray-300">
            checkout what our customers shared{' '}
            <span className="normal-case">#homes</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 pr-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-5 p-5 mt-10 max-w-[1100px]">
          <Image
            src={oc2}
            alt="instagram image"
            className="mx-5 my-3 w-full md:w-[255px] h-[255px] rounded-lg hover:scale-110 ease-in-out duration-300"
          />
          <Image
            src={oc3}
            alt="instagram image"
            className="mx-5 my-3 w-full md:w-[255px] h-[255px] rounded-lg hover:scale-110 ease-in-out duration-300"
          />
          <div className="relative">
            <Image
              src={vo1}
              alt="instagram image"
              className="mx-5 my-3 w-full md:w-[255px] h-[255px] rounded-lg hover:scale-110 ease-in-out duration-300"
            />
            <div className="absolute top-0 left-0 mt-0 ml-0 p-2 md:p-3 flex justify-center items-center">
              <div className="flex justify-center items-center  p-3 md:p-4 gap-2 w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-[120px]">
                {/* <Image src={instaIcon} alt="insta icon" className="w-6 h-6 md:w-8 md:h-8" /> */}
              </div>
            </div>
          </div>
          <Image
            src={vo5}
            alt="instagram image"
            className="mx-5 my-3 w-full md:w-[255px] h-[255px] rounded-lg hover:scale-110 ease-in-out duration-1000"
          />
          <Image
            src={vo9}
            alt="instagram image"
            className="mx-5 my-3 w-full md:w-[255px] h-[255px] rounded-lg hover:scale-110 ease-in-out duration-1000"
          />
          <Image
            src={vo4}
            alt="instagram image"
            className="mx-5 my-3 w-full md:w-[255px] h-[255px] rounded-lg hover:scale-110 ease-in-out duration-1000"
          />
          <Image
            src={ro4}
            alt="instagram image"
            className="mx-5 my-3 w-full md:w-[255px] h-[255px] rounded-lg hover:scale-110 ease-in-out duration-1000"
          />
          <Image
            src={vo7}
            alt="instagram image"
            className="mx-5 my-3 w-full md:w-[255px] h-[255px] rounded-lg hover:scale-110 ease-in-out duration-1000"
          />
        </div>
      </div>
    </div>
  );
};

export default Insta;
