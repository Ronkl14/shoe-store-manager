import React from "react";
import { ImgWrap, Card } from "../styled";
import { Link } from "react-router-dom";

const ShoeCard = ({ shoeName, imgUrl, price, id }) => {
  return (
    <Card>
      <Link to={`/shoe-page/${id}`}>{shoeName}</Link>
      <ImgWrap>
        <img src={imgUrl} alt="shoe" width="100%" height="100%" />
      </ImgWrap>
      <p>{price}$</p>
    </Card>
  );
};

export default ShoeCard;
