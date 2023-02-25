import React from "react";
import { HomeStyled } from "../styled";
import adibass from "../assets/img/artworks-000165688695-xnagve-t240x240.jpg";

const HomePage = () => {
  return (
    <HomeStyled>
      <img src={adibass} alt="logo" />
      <h1>Welcome to Adibass store management system</h1>
    </HomeStyled>
  );
};

export default HomePage;
