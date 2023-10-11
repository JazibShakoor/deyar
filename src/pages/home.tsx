import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Home from '@/components/Home';
import About from '../components/about';
import Deals from '../components/deals';
import Services from '../components/services';
import Review from '../components/review';
import Insta from '../components/insta';
import Form from '../components/form';
import scrollIcon from '../assets/icons/topArrowIcon.png';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import ContactFormPopup from '../components/ContactFormPopup'

import Footer from '@/components/footer';
import Hero from '@/components/hero';

const HomePage = () => {
  const [showButton, setShowButton] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

   
    const timeoutId = setTimeout(() => {
      setShowContactForm(true);
    }, 5000);
   
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId); // Clear the timeout if the component unmounts
    };
  }, []);
  const closePopup = () => {
    console.log("dfsdrfgsdfgdfsgdsfgdf")
    setShowContactForm(false)
  };
  return (
    <>
      <Head>
        <title>Deyar AlJazeera Real Estate</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/static/DJ_page-0001.svg" />
      </Head>
      <div className="bg-bgCol dark:bg-bgDark text-bold">
        <div className="font-vh text-lg">
          <Hero
            // className="font-bold !text-6xl"
            address=" The Exchange Tower Bussiness Bay, Dubai"
            phone="+971 54 299 8863"
            phone2="+971 54 299 8865"
            email="info@deyaraljazeera.com"
          />
        </div>

        <About
          cardTitle1="15 years"
          cardSubText1="in business"
          cardTitle2="$1 billion"
          cardSubText2="property brokered"
          cardTitle3="10,000"
          cardSubText3="transactions"
        />

         {showContactForm && (
          <div className="popup-form">
           
            <ContactFormPopup onClose={closePopup}/>
          </div>
        )}

        <Services />
        <Deals />
        <Review />
        <Insta />
        <Form/>
       
        <div className="App">
          <FloatingWhatsApp
            phoneNumber="971542998863"
            accountName="Deyar Al-Jazeera Admin"
            allowEsc
            allowClickAway
            notification
            notificationSound
          />
        </div>
        
        {showButton && (
          <div className="fixed bottom-24 right-10 z-50">
            <button
              onClick={handleScrollToTop}
              className="bg-slate-100 rounded shadow-xl overflow-visible"
            >
              <Image src={scrollIcon} alt="scroll button" />
            </button>
          </div>
        )}
 
      </div>
    </>
  );
};

export default HomePage;