import React from "react";

const ShoeCard = ({ shoeName, imgUrl, price }) => {
  return (
    <div>
      <h3>{shoeName}</h3>
      <div>
        <img src={imgUrl} alt="shoe" />
      </div>
      <p>{price}$</p>
    </div>
  );
};

export default ShoeCard;
