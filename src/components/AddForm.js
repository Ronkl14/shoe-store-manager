import React from "react";
import { UForm } from "../styled";
import { addShoe } from "../utils/API";
import { useState } from "react";

const AddForm = () => {
  const [values, setValues] = useState({
    shoeName: "",
    shoePrice: "",
    shoeImg: "",
    shoeId: "",
  });

  function submitHandler(event) {
    event.preventDefault();
    addShoe(values.shoeName, values.shoePrice, values.shoeImg);
  }

  function changeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  }

  return (
    <UForm onSubmit={submitHandler}>
      <label>Name:</label>
      <input
        name="shoeName"
        type="text"
        value={values.shoeName || ""}
        onChange={changeHandler}
      />
      <label>Price:</label>
      <input
        name="shoePrice"
        type="text"
        value={values.shoePrice || ""}
        onChange={changeHandler}
      />
      <label>Image:</label>
      <input
        name="shoeImg"
        type="text"
        value={values.shoeImg || ""}
        onChange={changeHandler}
      />
      <button type="submit">Add</button>
    </UForm>
  );
};

export default AddForm;
