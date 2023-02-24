import React from "react";
import ShoeCard from "../components/ShoeCard";
import { AllShoes } from "../styled";

const ShoeList = ({ allShoes }) => {
  return (
    <AllShoes>
      {allShoes.map((shoe) => (
        <ShoeCard
          key={shoe.id}
          id={shoe.id}
          shoeName={shoe.name}
          imgUrl={shoe.image}
          price={shoe.price}
        />
      ))}
    </AllShoes>
  );
};

export default ShoeList;
