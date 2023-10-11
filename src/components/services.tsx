import React from 'react';
import Image from 'next/image';
import apartmentIcon from '../assets/icons/apartment.png';
import officeIcon from '../assets/icons/office.png';
import houseIcon from '../assets/icons/house.png';
import warehouseIcon from '../assets/icons/warehouse.png';
import Link from 'next/link';
import Card from './card';
import cardImageBg1 from '../assets/images/Image.png';
import cardImageBg2 from '../assets/images/Image-2.png';
import cardImageBg3 from '../assets/images/Image-3.png';
import cardImageBg4 from '../assets/images/Image-4.png';
import cardImageBg5 from '../assets/images/Image-5.png';
import cardImageBg6 from '../assets/images/a.png';
import cardImageBg7 from '../assets/images/b.png';
import cardImageBg8 from '../assets/images/c.png';
import cardImageBg9 from '../assets/images/d.png';
const cardData = [
  { id: "jsdjasd", imageSrc: cardImageBg1,cardImageBg5,cardImageBg6,cardImageBg7, title: 'Modern Glass House', price: '$ 1,65525,000' },

  // Add more card data here...
];
const NewData = [
  {
    id:"abcd",imageSrc :cardImageBg5,title :'New Luxury Offices', price: '$199'},

]
const Services = () => {
  return (
    <div id="services" className="p-2 -mb-8 md:mb-0 md:rounded-full -mt-10">
      <div className="flex justify-center items-center">
        <button className=" md:mt-24 bg-blue-500 text-white hover:bg-blue-600 px-4 py-1 rounded-2xl hover:text-white md:w-28 font-black text-xs uppercase cursor-pointer">
       Projects
        </button>
      </div>
      <div className="-mt-6 md:mt-6 relative ">
        <div className="flex flex-col justify-center items-center">
          <p className="text-7xl  md:text-6xl mt-2 lg:text-10xl text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full uppercase dark:text-white">
          Projects
          </p>
          <p className="text-2xl md:text-4xl text-blue-900 font-bold text-center z-20 relative mt-7 sm:mt-14 dark:text-gray-300">
          Latest Off Plan Projects in Dubai
          </p>
        </div>
      </div>

      <div className="mt-2 md:mt-10 relative flex justify-center items-center">
        <p className="font-medium text-sm md:text-lg text-center text-bluePText w-[900px]">
        {`Dubai's latest off-plan real estate projects promise competitive pricing and flexible payments, 
        providing an opportunity to customize your dream home while potentially securing long-term value. 
        Explore options like Skyline Residences, Beachfront Villas, Smart Homes, eco-friendly developments, and family-focused communities. 
        Dubai's global connectivity, tax advantages, cultural diversity, and exceptional quality of life make it an ideal choice for investing in your future. 
        Start exploring Dubai's off-plan projects today. Your future home or investment awaits.`}
        </p>
      </div>

      <div className="grid grid-cols-2  gap-6 md:grid-cols-2 lg:flex justify-center items-center mt-8 md:mt-16 ml-4 md:ml-0 !md:rounded-full rounded-full">
        <div className="flex flex-col justify-center mt-4 items-center md:mr-4 lg:mr-8 hover:scale-125 ease-in duration-200 rounded-full">
        {NewData.map((card, index) => (
        <Link key={card.id} href={`/projectsDetails/oceans`}>
            <div className="bg-white h-32 w-32 md:h-36 md:w-36 lg:h-64 lg:w-64 flex flex-col justify-center items-center !rounded-md  shadow-xl p-4 md:p-8 mb-5 dark:bg-gray-700">
              <Image src={houseIcon} alt="house" className="w-full h-full md:w-full md:h-full lg:w-full lg:h-full rounded-lg" />
              <p className="font-semibold text-[12px] md:text-lg leading-6 text-center text-blueCardTitle dark:text-gray-200">
           OCEANZ By Danube
              </p>
              <span className='text-[8px] font-bold text-ellipsis text-center '>
              Dubai Maritime city 2 Lusury Skyscrapers

              </span>
            </div>
          </Link>
             ))}
        </div>
        <div className="flex flex-col  mt-4 md:mr-4 lg:mr-8 hover:scale-125 ease-in duration-200">
        {cardData.map((card, index) => (
        <Link key={card.id} href={`/projectsDetails/volta`}>
            <div className="bg-white h-32 w-[123px]  md:h-36 md:w-36 lg:h-64 lg:w-64 flex flex-col justify-center items-center rounded-lg shadow-xl p-4 md:p-8 mb-5 dark:bg-gray-700">
              <Image src={officeIcon} alt="office" className="w-36 h-80 md:w-14 rounded-lg md:h-14 lg:w-full lg:h-full" />
              <p className=" font-semibold  text-[12px] md:text-lg leading-6 text-center text-blueCardTitle dark:text-gray-200">
           VOLTA By DAMAC
              </p>
              <span className='text-[8px] font-bold text-ellipsis text-center '>
              Luxury apartments on Sheikh Zayed Road

              </span>
            </div>
          </Link>
               ))}
        </div>
       
        <div className=" flex flex-col justify-center mt-4 items-center md:mr-4 lg:mr-8 hover:scale-125 ease-in duration-200">
        {cardData.map((card, index) => (
        <Link key={card.id} href={`/projectsDetails/rove`}>
            <div className="bg-white h-32 w-32 md:h-36 md:w-36 lg:h-64 lg:w-64 flex flex-col rounded-lg justify-center items-center  shadow-xl p-4 md:p-8 mb-5 dark:bg-gray-700">
              <Image src={apartmentIcon} alt="apartment" className="w-full h-full md:w-full md:h-full lg:w-full lg:h-full rounded-lg" />
              <p className="font-semibold text-[12px] md:text-lg leading-6 text-center text-blueCardTitle dark:text-gray-200">
                ROVE By Octa
              </p>
              <span className='text-[8px] font-bold text-ellipsis text-center '>
              Rove Home at Downtown Dubai- 5
     </span>
            </div>
          </Link>
               ))}
        </div>

      

        <div className="flex flex-col md:mr-4 lg:mr-8 hover:scale-125 ease-in duration-200">
        {cardData.map((card, index) => (
        <Link key={card.id} href={`/projectsDetails/masaar`}>
            <div className="bg-white h-36  w-32 md:h-36 md:w-36 lg:h-64 lg:w-64 flex flex-col justify-center rounded-lg items-center shadow-xl p-4 md:p-8 mb-5 dark:bg-gray-700">
              <Image src={warehouseIcon} alt="warehouse" className="w-full h-36 rounded-lg mt-4 md:w-14 md:h-14 lg:w-full lg:h-full" />
              <p className="font-semibold text-[12px] md:text-lg leading-6 text-center text-blueCardTitle dark:text-gray-200">
               MASAAR
              </p>
              <span className='text-[8px] font-bold text-ellipsis text-center '>
              Masaar Home at Downtown Dubai 
     </span>
            </div>
          </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
