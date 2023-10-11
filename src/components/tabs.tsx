import { useState } from 'react';
import Card from './card';
import CardDetailsPage from './CardDetails';
import cardImageBg1 from '../assets/images/Image.png';
import cardImageBg2 from '../assets/images/Image-2.png';
import cardImageBg3 from '../assets/images/Image-3.png';
import cardImageBg4 from '../assets/images/Image-4.png';
import cardImageBg5 from '../assets/images/Image-5.png';
import cardImageBg6 from '../assets/images/Image-6.png';
import cardImageBg7 from '../assets/images/Image-7.png';
import cardImageBg8 from '../assets/images/Image-8.png';
import cardImageBg9 from '../assets/images/Image-9.png';
import { useRouter } from 'next/navigation'
import Link from 'next/link';
const cardData = [
  { id: "volta", imageSrc: cardImageBg1, title: 'Modern Glass House', price: '$ 1,65525,000' },
  { id: "volta", imageSrc: cardImageBg2, title: 'Modern Glass House', price: '$ 1,625,000' },
  // Add more card data here...
];
const NewData = [
  {
    id:"oceans",imageSrc :cardImageBg5,title :'New Luxury Offices', price: '1.1m AED'},
      {id:"oceans",imageSrc :cardImageBg6,title :'New Luxury Offices', price: '1.1m AED'},
]
const HomeCardComponent = ({  }) => {
  return (
    <div className="flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-3 gap-5 m-5 p-5">
      {cardData.map((card, index) => (
        <Link key={card.id} href={`/projectsDetails/${card.id}`}>
          <Card
            imageSrc={card.imageSrc}
            title={card.title}
            price={card.price} onClick={undefined} cardData={undefined}          
          />
        </Link>
      ))}
    </div>
  );
};
const ApartmentCardComponent = ({}) => {
  return (
  <div className="flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-3 gap-5 m-5 p-5">
  {cardData.map((card, index) => (
    <Link key={card.id} href={`/projectsDetails/${card.id}`}>
      <Card
        imageSrc={card.imageSrc}
        title={card.title}
        price={card.price}
        onClick={undefined} cardData={undefined}
     
      />
    </Link>
  ))}
</div>
);
};
const OfficeCardComponent =()=> 
<div className="flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-3 gap-5 m-5 p-5">
{NewData.map((card, index) => (
  <Link key={card.id} href={`/projectsDetails/${card.id}`}>
    <Card
      imageSrc={card.imageSrc}
      title={card.title}
      price={card.price} onClick={undefined} cardData={undefined}     
   
    />
  </Link>
))}
</div>

const Tabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabs = [
    { label: 'Home', content: <HomeCardComponent />  },
    { label: 'Apartment', content: <ApartmentCardComponent /> },
    // { label: 'Office', content: <OfficeCardComponent /> },
    // { label: 'Warehouse', content: <ApartmentCardComponent /> },
    // { label: 'Parking', content: <HomeCardComponent /> },
    // { label: 'Commercial', content: <OfficeCardComponent/> },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`${
              idx === activeTabIndex
                ? 'border-b-2 border-orange-500 text-blue-500'
                : 'text-gray-500 hover:text-gray-700 dark:text-white dark:hover:text-blue-500'
            } px-2 font-normal  text-sm py-1 sm:px-6 sm:font-normal focus:outline-none ${
              idx === 3 ? 'hidden sm:flex' : ''
            }`}
            onClick={() => {
              setActiveTabIndex(idx);
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <>
      {tabs[activeTabIndex].content}</>
    </div>
  );
};

export default Tabs;