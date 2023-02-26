import React from "react";
import notFound from "../assets/img/pulp-fiction-john-travolta.gif";
import { HomeStyled } from "../styled";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <HomeStyled>
      <img src={notFound} alt="not found" />
      <h2>
        Can't find what you're looking for buddy <Link to="/">Back Home</Link>
      </h2>
    </HomeStyled>
  );
};

export default ErrorPage;
