import axios from "axios";

const APIUrl = "https://63f7767d833c7c9c6084bc9b.mockapi.io/shoes";

export async function getAllShoes(callBackFn) {
  try {
    const allShoes = await axios.get(APIUrl);
    if (!allShoes.statusText === "OK") {
      throw new Error("Could not get shoes");
    }
    callBackFn(allShoes.data);
  } catch (error) {
    console.error(error);
  }
}

export async function getShoe(callBackFn, id) {
  try {
    const shoe = await axios.get(`${APIUrl}/${id}`);
    if (!shoe.statusText === "OK") {
      throw new Error("Could not get shoe");
    }
    callBackFn(shoe.data);
  } catch (error) {
    console.error(error);
  }
}

export async function updateShoe(id, shoeName, shoePrice, shoeImg) {
  await axios.put(`${APIUrl}/${id}`, {
    name: shoeName,
    price: shoePrice,
    image: shoeImg,
  });
}
