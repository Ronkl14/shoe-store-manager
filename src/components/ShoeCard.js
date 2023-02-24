import React from "react";
import { ImgWrap, Card } from "../styled";

const ShoeCard = ({ shoeName, imgUrl, price }) => {
  return (
    <Card>
      <h3>{shoeName}</h3>
      <ImgWrap>
        <img src={imgUrl} alt="shoe" width="100%" height="100%" />
      </ImgWrap>
      <p>{price}$</p>
    </Card>
  );
};

export default ShoeCard;
