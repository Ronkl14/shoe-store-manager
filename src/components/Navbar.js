import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/products">Shoes</Link>
      <Link to="/add-shoe">Add New Shoe</Link>
    </div>
  );
};

export default Navbar;
