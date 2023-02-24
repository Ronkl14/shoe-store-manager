import React from "react";
import ShoeCard from "../components/ShoeCard";

const ShoeList = ({ allShoes }) => {
  return (
    <div>
      {allShoes.map((shoe) => (
        <ShoeCard shoeName={shoe.name} imgUrl={shoe.image} price={shoe.price} />
      ))}
    </div>
  );
};

export default ShoeList;
