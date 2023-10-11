import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import searchIcon from '../../src/assets/icons/search.png';
import logo from "../Picx/Picx/logo-removebg-preview.png";

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import ThemeChanger from './themeChanger';

const Header = () => {
  const [header, setHeader] = useState(false);
  const [headerColor, setHeaderColor] = useState('transparent');
  const [headerText, setHeaderText] = useState('white');

  const handleHeader = () => {
    setHeader(!header);
  };

  const handleMobileHeader = () => {
    setHeader(false);
  };

  useEffect(() => {
    const handleColorChange = () => {
      if (window.scrollY >= 250) {
        setHeaderColor('linear-gradient(to right, #4a00e0, #4a00e0)');
        setHeaderText('#ffffff');
      } else {
        setHeaderColor('bg-gradient-to-r from-purple-700 to-indigo-900');
       
        setHeaderText('#ffffff');
      }
    };
    window.addEventListener('scroll', handleColorChange);
  }, []);

  return (
    <div
      className="bg-navCol fixed top-0 left-0 w-full h-20 shadow-2xl flex justify-between items-center z-40  ease-out duration-200"
    >
      {/* Menu + Name */}

     
      <div onClick={handleHeader} className="block sm:hidden p-4 z-10">
        {header ? (
          <AiOutlineClose size={30} style={{ color: `${headerText}` }} />
        ) : (
          <AiOutlineMenu size={30} style={{ color: `${headerText}` }} />
        )}
      </div>
      {/* Search */}

      {/* <div className=" hidden sm:flex pl-4 z-20">
        <Image src={searchIcon} alt="Menu" className="w-4 h-4 self-center" />
        <input
          type="text"
          placeholder="Search"
          maxLength={15}
          className="w-40 bg-transparent outline-none placeholder-gray-300 mx-4 py-2 text-white capitalize"
        />
      </div> */}
      <div className="max-w-[1240px] flex justify-between items-center p-4">
        <Link href="/">
          <h1
            style={{ color: `${headerText}` }}
            className="py-2 text-base sm:text-2xl font-semibold  hover:text-blue-500 flex items-center"
          >
          <Image src={logo} alt='' width={25} height={15} className='mr-3' />  
          Deyar AlJazeera Real Estate
          </h1>
        </Link>
      </div>
      {/* navbar Links */}

      <ul
        style={{ color: `${headerText}` }}
        className="text-sm font-bold hidden sm:flex
      "
      >
        <li className=" p-4 hover:text-blue-500">
          <Link href="/#about-container">About</Link>
        </li>
        <li className=" p-4 hover:text-blue-500">
          <Link href="/#services">Projects</Link>
        </li>
        <li className=" p-4 hover:text-blue-500">
          <Link href="/#reviews">Reviews</Link>
        </li>
        <li className=" p-4 hover:text-blue-500">
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>

      <p
        style={{ color: `${headerText}` }}
        className="hidden sm:flex text-sm font-bold ml-10 mr-5 hover:text-blue-500 cursor-pointer"
      >
        Get In Touch
      </p>
      <div className="mr-3">
        <ThemeChanger />
      </div>

      {/* Mobile hamburgerMenu */}
    
     
      <div
        className={
          header
            ? 'sm:hidden absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-[#020308ea] text-center ease-in duration-300'
            : 'sm:hidden absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-[#020308ea] text-center ease-in duration-300'
        }
      >
        <ul
          style={{ color: `${headerText}` }}
          className="text-sm font-bold 
      "
        >
          <li className="mx-7 py-4 text-4xl hover:text-blue-500">
            <Link href="/#about-container" onClick={handleMobileHeader}>
              About
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-blue-500">
            <Link href="/#services" onClick={handleMobileHeader}>
              Services
            </Link>
          </li>
          {/* <li className="mx-7 py-4 text-4xl hover:text-blue-500">
            <Link href="/#deals" onClick={handleMobileHeader}>
              Deals
            </Link>
          </li> */}
          <li className="mx-7 py-4 text-4xl hover:text-blue-500">
            <Link href="/#reviews" onClick={handleMobileHeader}>
              Reviews
            </Link>
          </li>
          <li className="mx-7 py-4 text-4xl hover:text-blue-500">
            <Link href="/#contact" onClick={handleMobileHeader}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
     
    </div>
    
  );
};

export default Header;
