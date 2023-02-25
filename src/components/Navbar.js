import React from "react";
import { Link } from "react-router-dom";
import { NavStyled } from "../styled";

const Navbar = () => {
  return (
    <NavStyled>
      <Link to="/">Home</Link>
      <Link to="/products">Shoes</Link>
      <Link to="/add-shoe">Add New Shoe</Link>
    </NavStyled>
  );
};

export default Navbar;
