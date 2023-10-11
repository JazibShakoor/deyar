import React from "react";
import { useRouter } from "next/router";
import Card from "../../components/card";
import Link from 'next/link'

import cardImageBg1 from "../../assets/images/Image.png";
import cardImageBg2 from "../../assets/images/Image-2.png";
import cardImageBg3 from "../../assets/images/Image-3.png";
import cardImageBg4 from "../../assets/images/Image-4.png";

const Service = ({ service }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const services = [
    {
      imageSrc: cardImageBg1,
      title: "Service 1",
      price: "$10",
      id: "jsdjasd",
    },
    {
      imageSrc: cardImageBg2,
      title: "Service 2",
      price: "$20",
      id: "uejdnfk",
    },
  ];

  return (
    <div className="relative mt-16 ">
      <div className="flex flex-col justify-center items-center mt-32">
        <p className="text-8xl sm:text-10xl text-blue-700 opacity-5 font-black text-center z-0 absolute top-0 left-0 w-full uppercase dark:text-white">
          {service.title}
        </p>
        <p className="text-4xl text-blue-900 font-bold text-center z-20 relative mt-7 sm:mt-14 dark:text-gray-300">
          Services for Maximum Efficiency
        </p>
      </div>

      <div className="flex flex-col sm:grid md:grid-cols-2 xl:grid-cols-4 gap-5 m-5 p-2 mt-16">
        {services.map((service, index) => (
        <Link key={service.id} href={`/projectsDetails/${service.id}`}>
          <Card
              key={index}
              imageSrc={service.imageSrc}
              title={service.title}
              price={service.price} onClick={undefined} cardData={undefined}          />
          </Link>












        ))}
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: ["house", "office", "apartment", "warehouse"].map((category) => ({
      params: { category },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const serviceData = {
    house: {
      title: "House",
      imageSrc: cardImageBg1,
      price: "$1,625,000",
    },
    office: {
      title: "Office",
      imageSrc: cardImageBg2,
      price: "$2,500,000",
    },
    apartment: {
      title: "Apartment",
      imageSrc: cardImageBg3,
      price: "$950,000",
    },
    warehouse: {
      title: "Warehouse",
      imageSrc: cardImageBg4,
      price: "$3,200,000",
    },
  };

  const service = serviceData[params.category] || null;

  return {
    props: {
      service,
    },
  };
}

export default Service;
