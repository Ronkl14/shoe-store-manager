import React from "react";
import { ImgWrap, UForm } from "../styled";
import { useState, useEffect } from "react";
import { updateShoe, getShoe, deleteShoe } from "../utils/API";

const UpdateForm = ({ name, price, img, id, onShoeUpdate }) => {
  const [values, setValues] = useState({});

  useEffect(() => {
    setValues({
      shoeName: name,
      shoePrice: price,
      shoeImg: img,
      shoeId: id,
    });
  }, [name, price, img, id]);

  async function submitHandler(event) {
    event.preventDefault();
    try {
      await updateShoe(
        values.shoeId,
        values.shoeName,
        values.shoePrice,
        values.shoeImg
      );
      const updatedShoe = await getShoe(values.shoeId);
      setValues({
        shoeName: updatedShoe.name,
        shoePrice: updatedShoe.price,
        shoeImg: updatedShoe.image,
        shoeId: updatedShoe.id,
      });
      onShoeUpdate(updatedShoe);
    } catch (error) {
      console.error(error);
    }
  }

  function changeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  }

  function deleteHandler() {
    deleteShoe(values.shoeId);
  }

  return (
    <UForm onSubmit={submitHandler}>
      <ImgWrap>
        <img src={img} alt="shoe" width="100%" />
      </ImgWrap>
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
      <button type="submit">Edit</button>
      <button onClick={deleteHandler}>Delete</button>
    </UForm>
  );
};

export default UpdateForm;
