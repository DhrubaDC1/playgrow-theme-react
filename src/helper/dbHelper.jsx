import axios from "axios";

async function getProducts() {
  let products = await axios
    .get("http://localhost:3001/api/products")
    .then((res) => res.data);
  return products;
}
async function saveProduct(product) {
  console.log(product);
  try {
    const response = await axios.post(
      "http://localhost:3001/api/save",
      product
    );
    return response.data;
  } catch (error) {
    console.error("Error saving product:", error);
    throw error;
  }
}

export { getProducts, saveProduct };
