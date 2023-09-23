import axios from "axios";

export const getProducts = async (callback) => {
  await axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
