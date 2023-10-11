import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// import heroBg1 from '../assets/images/heroBackground.png';

;
import heroBg6 from '../assets/images/cover12.jpg';
import heroBg1 from '../assets/images/cover8.jpg';
import palmJumeirah from "../Picx/Picx/palmJumeirah.jpg";

import arrowIcon from '../assets/icons/arrow.png';
import phoneIcon from '../assets/icons/contact.png';
import mailIcon from '../assets/icons/mail.png';

const Hero = ({ address, phone, phone2, email }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [heroBg1,heroBg6]; 
  const delay = 5000; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const showMoreBtn = () => {
    document.getElementById('about-container').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-auto lg:h-screen4 -top-24 ">
    {/* Background Image */}
    <Image
      src={palmJumeirah}
      alt="bg image"
      layout="fill"
      objectFit="cover"
      className="rounded-b-4xl opacity-90"
    />
      <div className="w-full h-auto lg:h-screen relative">
        <div className="relative h-screen text-center flex flex-col justify-center items-center">
          <button className="hidden lg:block bg-blue-600 hover:bg-blue-500 px-2 py-1 rounded-2xl text-white text-xs uppercase cursor-pointer absolute top-2 left-2">
            Real Estate
          </button>
          <h1 className="font-normal text-4xl lg:text-7xl text-center mt-20 text-white shadow-2xl capitalize opacity-80 rounded-2xl cursor-pointer  ">
   
            Leading Real Estate
            <br /> in Dubai
          </h1>
          {/* Icons and Text under Heading */}
          <div className="hidden sm:flex mt-16 justify-center items-center">
  <div className="flex mr-11">
    <Image
      src={arrowIcon}
      alt="arrow icon"
      className="w-5 h-5 mx-2 sm:mx-2 self-center"
    />
    <p className="text-white text-xl py-2 ">{address}</p>
  </div>

  <div className="flex ml-5 sm:ml-20 sm:mr-20">
    <Image
      src={phoneIcon}
      alt="phone icon"
      className="w-5 h-5 mx-2 sm:mx-2 self-center"
    />
    <div className='flex items-center flex-col'>
    <p className="text-white text-xl py-2 w-[195px]">{phone}</p>
    <p className="text-white text-xl py-2 w-[195px]">{phone2}</p>
    </div>
  </div>

  <div className="flex relative left-[-26px] ml-5 sm:ml-20">
    <Image
      src={mailIcon}
      alt="mail icon"
      className="w-5 h-5 mx-2 sm:mx-2 self-center"
    />
    <p className="text-white text-xl py-2">{email}</p>
  </div>
</div>


          {/* Show more button  */}
          <div className="absolute bottom-8 w-full text-center">
            <button
              onClick={showMoreBtn}
              className="text-blue-900 text-xl capitalize shadow-lg bg-white hover:bg-blue-500 hover:text-white px-4 py-1 rounded-3xl h-14 w-36"
            >
              show more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
