// CardDetailsPage.js
import React from 'react';


const CardDetailsPage = ({ cardData }) => {
  return (
    <div>
      <h1>Card Details</h1>
      <img src={cardData.imageSrc} alt={cardData.title} />
      <h2>{cardData.title}</h2>
      <p>Price: {cardData.price}</p>
   
    </div>
  );
};

export default CardDetailsPage;
