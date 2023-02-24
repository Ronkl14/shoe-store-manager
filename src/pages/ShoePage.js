import React from "react";
import { getShoe } from "../utils/API";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { UpdateForm } from "../components";

const ShoePage = () => {
  const [shoe, setShoe] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getShoe(setShoe, id);
  }, [id, shoe]);

  return (
    <UpdateForm
      name={shoe.name}
      price={shoe.price}
      img={shoe.image}
      id={id}
      onShoeUpdate={setShoe}
    />
  );
};

export default ShoePage;
