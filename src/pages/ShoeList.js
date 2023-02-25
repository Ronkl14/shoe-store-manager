import React from "react";
import ShoeCard from "../components/ShoeCard";
import { AllShoes } from "../styled";
import { useState, useEffect } from "react";
import { getAllShoes } from "../utils/API";

const ShoeList = ({ allShoes }) => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    getAllShoes(setShoes);
  }, [shoes]);

  return (
    <AllShoes>
      {shoes.map((shoe) => (
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
