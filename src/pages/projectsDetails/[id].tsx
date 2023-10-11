import React, { useState } from "react";
import { useRouter } from "next/router";
import cardImageBg1 from "../../assets/images/Image.png";
import cardImageBg2 from "../../assets/images/Image-2.png";
import Carousel, { ReactElasticCarouselProps } from "react-elastic-carousel";
import ocean5 from "../../assets/images/a.png";
import ocean6 from "../../assets/images/b.png";
import ocean7 from "../../assets/images/c.png";
import ocean8 from "../../assets/images/Image-2.png";
import ocean9 from "../../assets/images/ab.png";
import volta from "../../assets/images/Image-6.png";
import volta1 from "../../assets/images/ghi.png";
import volta2 from "../../assets/images/abc.png";
import volta3 from "../../assets/images/def.png";
import volta4 from "../../assets/images/Image-8.png";
import rove from "../../assets/images/aa.png";
import rovea from "../../assets/images/bb.png";
import roveb from "../../assets/images/cc.png";
import rovec from "../../assets/images/dd.png";
import roved from "../../assets/images/ro2.png";
import rovee from "../../assets/images/ro3.png";
import Form from "@/components/form";
import ContactFormPopup from "@/components/ContactFormPopup";
import Amenities from "@/components/Amenities";

const cardData = [
  {
    id: "oceans",
    imageSrc: cardImageBg1,
    title: "Modern Glass House",
    price: "$1,11,000",
  },
  {
    id: "volta",
    imageSrc: cardImageBg2,
    title: "Modern Glass House",
    price: "$1,625,000",
  },
  {
    id: "rove",
    imageSrc: volta,
    title: "Modern Glass House",
    price: "$1,625,000",
  },
  {
    id: "masaar",
    imageSrc: volta2,
    title: "Modern Glass House",
    price: "$1,625,000",
  },
];
const NewData = [
  {
    id: "oceans",
    imageSrc: "ocean8",
    title: "OCEANZ BY DANUBE",
    description:" get ready to be mesmerized by sweeping ocean vistas and the opulent interiors and luxury furnishing by Tonino Lamborghini CASA.\n\nOceanz apartments boast a range of world-className amenities, including a state-of-the-art fitness center, swimming pool, and landscaped gardens, providing residents with opportunities for relaxation and recreation. The panoramic views of the Arabian Gulf from Oceanz are truly breathtaking, offering an oasis of tranquility in the heart of the city.\n\nLocated in Dubai Maritime City, Oceanz enjoys a strategic position that provides easy access to key business districts and leisure destinations, making it an ideal choice for those seeking a waterfront lifestyle with convenience and luxury. Discover the epitome of coastal elegance at Oceanz by the Danube.",
    price: "1.1M AED",
    desc: "Q1 - 2025",
    paragraph:
      "Inspired by the sea, Oceanz by Danube gracefully blends architectural sophistication with the enchanting allure of maritime charisma.Located in the heart of the thriving Maritime City community, ",
    points: [
      "Offers a range of apartments",
      "Located in the thriving community of Dubai Maritime",
      "Top-notch amenities and services",
      "Easy connectivity to all the key areas in Dubai",
      "Simple and easy payment plan",
      "High Capital Appreciations",
      "international cruise terminas",
      "largest marina in the Dubai",
      "Freehold Property",
    ],
  },

  {
    id: "volta",
    imageSrc: volta,

  title: "VOLTA BY DAMAC",
    price: "1.6M AED",
    desc: "Q1 - 2028",
    description: "renowned for their world-className developments infused with luxurious design and breathtaking exteriors and interiors. Standing tall at 65 stories, Volta by Damac offers an impressive range of 1&2 BR Apartments and 3&4BR Super Luxury Apartments.\n\nVolta by Damac provides convenient access to Dubai’s key attraction with its strategic location at one of the prominent highways of the UAE, Sheikh Zayed Road. Residents will enjoy a host of top-notch amenities, including state-of-the-art fitness facilities, swimming pools, landscaped gardens and dedicated parking spaces. Additionally, nearby amenities such as shopping malls, restaurants, arcades and parks are easily accessible and add to the convenience and quality of life for residents.\n\nKey Highlights:\nPrime Location on Sheikh Zayed Road\n1&2 BR Apartments and 3&4BR Super Luxury Apartments\nFlexible payment plan.\nWorld-Class Amenities and Luxury Living Experience.\nElegant Lobby & Amenities.\nRich Interiors and Striking Exteriors.\n\nVolta Apartments Amenities\nVolta amenities by DAMAC properties are top-notch. Indulge in a state-of-the-art fitness center to maintain your well-being. Unwind at the serene spa for ultimate relaxation. Explore meticulously landscaped gardens and communal spaces for social interactions and a sense of community. Volta offers a stunning infinity pool; kids’",
    paragraph:
      "Volta Apartments at Downtown, Dubai Sheikh Zayed Road is an innovative high-rise living development by Damac Properties with a premium series of luxurious homes. In the bustling region of the city, residents can experience a versatile living experience of serenity, convenient facilities, and entertainment sources for an active and exciting environment.\n\nNestled within the vibrant heart of Dubai,  VOLTA is an extraordinary masterpiece brought to you by DAMAC Properties.",
    points: [
      "Prime Location on Sheikh Zayed Road",
      "1&2 BR Apartments and 3&4BR Super Luxury Apartments",
      "1&2 BR Apartments and 3&4BR Super Luxury Apartments",
      "World-Class Amenities and Luxury Living Experience.",
      "Elegant Lobby & Amenities.",
      "Rich Interiors and Striking Exteriors",
    ],
  },
  {
    id: "rove",
    description:" With an array of life-enhancing amenities, this residence is more than just a home; it's an ecosystem designed for you to thrive.\n\nRove Home at Downtown Dubai is a remarkable residential masterpiece crafted by IRTH Developments. This urban oasis offers an array of spacious studios, as well as 1 and 2-bedroom apartments, thoughtfully designed for elegant living. IRTH Development proudly presents this architectural gem, boasting a sleek and modern glass façade that defines sophistication.\n\nEach Rove Home apartment is meticulously furnished and tastefully designed to create a harmonious living environment. Residents will enjoy effortless access to Downtown’s myriad attractions and amenities, making city living a breeze.\n\nRove Home at Downtown incorporates smart and contemporary features, promising a lifestyle that redefines elevated living experiences. Experience the perfect blend of simplicity and sophistication at Rove Home, where Dubai’s vibrant cityscape meets timeless elegance.\n\nKey Points\nStylish, spacious studios & 1–2-bedroom apartments\nModern, iconic glass façade\nWell-furnished, beautiful interiors\nClose to Downtown attractions & amenities\nEasy connectivity to all the top areas\nSimple and convenient payment plans.\n\nRove Home Amenities\nRove Home Downtown boasts a diverse range of amenities, elevating your lifestyle to new heights. Enjoy a refreshing swim in the pool, play a round of paddle tennis, or utilize co-working spaces for productivity. Relax in the park, savor BBQ moments, and let the kids play in their dedicated area. Convenient parking options, outdoor dining, and retail outlets complete the picture for a vibrant and fulfilling living experience.",
    imageSrc: cardImageBg2,
    title: "ROVE BY OCTA",
    price: "1.2M AED",
    desc: "Q2 -2026",

    paragraph:
      "Welcome to Rove Home Downtown, Dubai's first-ever residential project by Rove.A place where inspiring design, vibrant art installations, and fully-furnished apartments come together in an exceptional location. ",
    points: [
      " Stylish, spacious studios & 1–2-bedroom apartments",
      "Modern, iconic glass façade",
      "Well-furnished, beautiful interiors",
      "Close to Downtown attractions & amenities",
      "Easy connectivity to all the top areas",
      "Simple and convenient payment plans",
    ],
  },
  {
    id: "masaar",
    description:"Masaar by Arada, a newly launched development that offers a selection of  2 to 4-bedroom townhouses and 4 & 5-bedroom park villas at Sharjah,",
    imageSrc: cardImageBg2,
    title: "MASAAR BY ARADAA",
    price: "1.8m AED",
    desc: "Q4 - 2025",
    paragraph:
      " UAE. This limited edition home offers two different colour schemes as warm and cool type within the green forest community.\n\nThis green-hearted community is designed within its green environment, filled with various leisure and attraction facilities at its ease. Enjoy easy access to Sharjah National Park, Sharjah Museum of Islamic Civilization, Dubai International Airport, University City, Tilal City and many more.\n\nSendian villas and townhouse are one of its kind first development in the community that offers a connection to the eight gated districts linked by the signature landscape and walkable green spine. One of the main attractions of the community is its five-kilometres of looped cycling track that is being surrounded by resting spots and cafes.\n\nThese residences offer a variety of family size home with budget-friendly payment plan options ranging from two-bedroom townhouses to four-bedroom and five-bedroom Sendian villas and both of them offers a private swimming pool.\n\nMasaar is designed with a focus of forest heart that features an experience centre, Zad food truck, fully serviced fitness centre, skatepark, kids adventure ground, events and leisure spaces for family enjoyment.\n\nKey Highlights:\nNew development offering Townhouses and Villas\nEasy accessibility and mobility\nEasy and attractive payment plan\nActive park with outdoor sporting facilities\nLeisure and seating spots within green landscapes\nLush green landscapes with cafes and leisure spots\n\nLocation\n2 Minutes from Tilal Mall & Sharjah Mosque\n2 Mins from Sharjah Botanical Garden & Sharjah Convention center\n15 Mins from Sharjah International Airport Free Zone (SAIF)\n20 Mins from Dubai International Airport & Sharjah Corniche\n20 Mins from Aljada\nEasy Access to Emirates Road, Mleiha Road Khorfakan Road",

    points: [
      " New development offering Townhouses and Villas",
      "Easy accessibility and mobility",
      "Easy and attractive payment plan",
      "Close to Downtown attractions & amenities",
      "Leisure and seating spots within green landscapes",
      "Lush green landscapes with cafes and leisure spots",
    ],
  },
];

const PageData = ({ card }) => {
  const [image, setImage] = useState(1);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  if (!card) {
    return <div className="mt-10 p-4 text-center">Card not found</div>;
  }
  {
    /* <img src={card.imageSrc.src} alt={card.title} className="w-64 h-64 mx-auto rounded-lg shadow-lg" /> */
  }
  const carouselProps: ReactElasticCarouselProps = {
    itemsToShow: 4,
    isRTL: false,
  };

  const allImages = {
    oceans: [ocean5, ocean6, ocean7, ocean9],
    volta: [volta1, volta2, volta3, volta4],
    masaar: [cardImageBg1, cardImageBg2],
    rove: [rove, roved, rovee],
  };

  const Images = allImages[card.id];

  const prevImage = () => {
    setImage((prevIndex) =>
      prevIndex === 0 ? Images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setImage((prevIndex) =>
      prevIndex === Images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const visibleImages = Images.slice(image, image + 4);

  const amenities = [
    {
      name: "BBQ Area",
      image: "https://v.fastcdn.co/u/2df8e88d/64465302-0-BBQ-Areas.webp",
    },
    {
      name: "BBQ Area",
      image: "https://v.fastcdn.co/u/2df8e88d/64465302-0-BBQ-Areas.webp",
    },
    {
      name: "BBQ Area",
      image: "https://v.fastcdn.co/u/2df8e88d/64465302-0-BBQ-Areas.webp",
    },
    {
      name: "BBQ Area",
      image: "https://v.fastcdn.co/u/2df8e88d/64465302-0-BBQ-Areas.webp",
    },
    {
      name: "BBQ Area",
      image: "https://v.fastcdn.co/u/2df8e88d/64465302-0-BBQ-Areas.webp",
    },
    {
      name: "BBQ Area",
      image: "https://v.fastcdn.co/u/2df8e88d/64465302-0-BBQ-Areas.webp",
    },
  ];



  

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-36 bg-bgCol">
      <div className="flex flex-col md:flex-row -mx-4">
        <div className="md:flex-1 px-4">
          <div className="h-64 md:h-80 overflow-hidden rounded-lg bg-gray-100 mb-4">
            <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
              <span className="text-5xl">
                <img className="h-full" src={Images[image].src} />
              </span>
            </div>
          </div>

          <div className="flex -mx-2 mb-4">
            <Carousel {...carouselProps}>
              {Images.map((i, index) => (
                <div className="flex-1 px-2" key={index}>
                  <div
                    onClick={() => setImage(index)}
                    className={`focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ${
                      index === image ? "ring-2 ring-indigo-300 ring-inset" : ""
                    }`}
                  >
                    <img
                      src={i.src}
                      className="w-full h-full"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-8 gap-4 p-2 rounded-lg text-white">
            <button
              onClick={openPopup}
              className="btn-primary bg-blue-600 py-4 rounded-lg"
            >
              Get Quote
            </button>
            <button
              onClick={openPopup}
              className="btn-primary bg-blue-600 py-4 rounded-lg"
            >
              Get Mortgage
            </button>
            <button
              onClick={openPopup}
              className="btn-primary bg-blue-600 py-4 rounded-lg"
            >
              Get Brochure
            </button>
            <button
              onClick={openPopup}
              className="btn-primary bg-blue-600 py-4 rounded-lg"
            >
              Send Request
            </button>
          </div>
          
{/*    
          <div className="flex justify-center w-full items-center mt-16"> */}
          {/* <div className="flex flex-wrap max-w-2xl  gap-3">
            {amenities.map((item) => (
              <Amenities item={item} />
            ))}
          </div> */}
            
        {/* </div> */}
         
        </div>
        

        

        <div className="md:flex-1 px-4">
          <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
            {card.title}
          </h2>
          <p className="text-gray-500 text-sm">
            By{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Deyar Al Jazeera Real Estate
            </a>
          </p>

          <div className="flex items-center space-x-4 my-4">
            <div>
              <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                <span className="text-indigo-400 mr-1 mt-1"></span>
                <span className="font-bold text-indigo-600 text-3xl">
                  {card.price}
                </span>
              </div>
            </div>
            <div className="flex-1">
              {/* <p className="">Q1-2027</p> */}
              <p className="text-green-500 text-xl font-semibold">
                {card.desc}
              </p>

              <p className="text-gray-400 text-sm">Handover</p>
            </div>
          </div>

          <p className="text-gray-500">{card.paragraph}</p>
          <div className="text-gray-600 mt-8">
            <h1 className="font-bold text-2xl ">Key Point OF Location</h1>
            {card.points.map((point, index) => (
              <p key={index} className="mb-2 mt-4 font-semibold">
                • {point}
              </p>
            ))}
          </div>
          <div>

         
          </div>
      
    
          <div className="flex py-4 space-x-4"></div>
        </div>
      </div>
      {isPopupOpen && <ContactFormPopup onClose={closePopup} />}
     
      <section className="flex items-center py-20 bg-gray-100 font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap items-center">
                <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 md:w-1/2">
                     
                            <img src="https://www.binayah.com/wp-content/uploads/2023/08/Volta-by-Damac-Banner.jpg" alt=""
                                className="object-cover w-full mb-6 rounded-lg h-80"/>
                            <img src="https://i0.wp.com/investindxb.com/wp-content/uploads/2020/06/Olivz-by-Danube-investindxb-08-scaled.jpg?fit=2560%2C1810&ssl=1" alt=""
                                className="object-cover w-full rounded-lg h-80"/>
                        </div>
                        <div className="w-full px-4 md:w-1/2 xl:mt-11 pt-6">
                            <img src="https://static.propsearch.ae/dubai-locations/olivz-by-danube-20123_xl.jpg" alt=""
                                className="object-cover w-full mb-6 rounded-lg h-80"/>
                            <img src="https://www.binayah.com/wp-content/uploads/2023/08/Volta-by-Damac-Banner.jpg" alt=""
                                className="object-cover w-full rounded-lg h-80"/>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8">
                    <span className="text-5xl font-bold text-blue-500 dark:text-blue-400">{card.title}</span>
                    <h2 className="mt-2 mb-4 text-2xl font-bold text-gray-700 dark:text-gray-300">
                        We are providing a better facility
                    </h2>
                    <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                    {card.paragraph}
                    </p>
                    <ul className="mb-10">
                        {/* <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                            <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-6 h-6 bi bi-1-circle-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                                </svg>
                            </span>
                        
                        </li> */}
                        <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                            <span className="mr-3 text-blue-500 dark:text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-6 h-6 bi bi-1-circle-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                                </svg>
                            </span>
                            The purpose of lorem create a natural looking block of text
                        </li>
                        <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                            <span className="mr-3 text-blue-500 dark:text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-6 h-6 bi bi-2-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z" />
                                </svg>
                            </span>
                            The passage experienced in popularity during the 1960s
                        </li>
                        <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                            <span className="mr-3 text-blue-500 dark:text-blue-400 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-6 h-6 bi bi-3-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z" />
                                </svg>
                            </span>
                            esktop publishers bundled the text with their software.
                        </li>
                    </ul>
                    <a href="#"
                        className="px-4 py-2 text-gray-100 bg-blue-500 rounded-md dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-600">
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    </section>












      <section className="relative">
   
{/* Section background (needs .relative className on parent and next sibling elements) */}
<div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0  pointer-events-none" aria-hidden="true"></div>
<div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
  <div className="py-12 md:py-20">

    {/* Section header */}
    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
      <h2 className="h1 mb-4 text-5xl"> Benefits {card.title}</h2>
      {/* <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p> */}
    </div>

    {/* Items */}
    <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

      {/* 1st item */}
      <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
        <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
            <g strokeWidth="2">
              <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
              <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
              <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
              <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
            </g>
          </g>
        </svg>
        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 dark:text-black">High Return
On Investment</h4>
        {/* <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </div>

      {/* 2nd item */}
      <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
        <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
            <g strokeWidth="2" transform="translate(19.429 20.571)">
              <circle className="stroke-current text-white" strokeLinecap="square" cx="12.571" cy="12.571" r="1.143" />
              <path className="stroke-current text-white" d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696" />
              <path className="stroke-current text-blue-300" d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835" />
            </g>
          </g>
        </svg>
        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 dark:text-black"> Payment
Plan</h4>
        {/* <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </div>

      {/* 3rd item */}
      <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
        <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
            <g strokeLinecap="square" strokeWidth="2">
              <path className="stroke-current text-blue-300" d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207" />
              <path className="stroke-current text-white" d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285" />
            </g>
          </g>
        </svg>
        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 dark:text-black">Stable
Currency</h4>
        {/* <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </div>

      {/* 4th item */}
      <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
        <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
            <g transform="translate(22.857 19.429)" strokeWidth="2">
              <path className="stroke-current text-white" strokeLinecap="square" d="M12.571 4.571V0H0v25.143h12.571V20.57" />
              <path className="stroke-current text-white" d="M16 12.571h8" />
              <path className="stroke-current text-white" strokeLinecap="square" d="M19.429 8L24 12.571l-4.571 4.572" />
              <circle className="stroke-current text-blue-300" strokeLinecap="square" cx="12.571" cy="12.571" r="3.429" />
            </g>
          </g>
        </svg>              
        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 dark:text-black">Prime
Location</h4>
        {/* <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </div>

      {/* 5th item */}
      <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
        <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
            <g strokeLinecap="square" strokeWidth="2">
              <path className="stroke-current text-white" d="M20.571 20.571h13.714v17.143H20.571z" />
              <path className="stroke-current text-blue-300" d="M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58" />
            </g>
          </g>
        </svg>
        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 dark:text-black">Freehold
Ownership</h4>
        {/* <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </div>

      {/* 6th item */}
      <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
        <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
            <g strokeWidth="2">
              <path className="stroke-current text-white" d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714" />
              <path className="stroke-current text-white" d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286" />
              <path className="stroke-current text-white" d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286" />
              <path className="stroke-current text-blue-300" d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572" strokeLinecap="square" />
            </g>
          </g>
        </svg>
        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 dark:text-black">Develop & Launch</h4>
        {/* <p className="text-gray-600 text-center">Which is redefining luxury living since its inception.</p> */}
      </div>

    </div>

  </div>
</div>
</section>

<Form />
  
  </div>  
  );
};

export async function getStaticPaths() {
  const cardPaths = cardData.map((card) => ({
    params: { id: card.id },
  }));

  const newDataPaths = NewData.map((card) => ({
    params: { id: card.id },
  }));

  const paths = [...cardPaths, ...newDataPaths];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  // const card = cardData.find((item) => item.id === id);
  const newDataItem = NewData.find((item) => item.id === id);

  // const data = card || newDataItem;
  const data = newDataItem;

  return {
    props: {
      card: data,
    },
  };
}

export default PageData;
