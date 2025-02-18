import axios from "axios";

async function getProducts() {
  let products = await axios
    .get("https://mern-interview-app.onrender.com/api/products")
    .then((res) => res.data);
  return products;
}
async function saveProduct(product) {
  console.log(product);
  try {
    const response = await axios.post(
      "https://mern-interview-app.onrender.com/api/save",
      product
    );
    return response.data;
  } catch (error) {
    console.error("Error saving product:", error);
    throw error;
  }
}

export { getProducts, saveProduct };
