import Header from "../components/header";
import Carousel from "../components/carousel";
import Cribs from "../components/cribs";
import Blog from "../components/blog";
import Reviews from "../components/reviews";
import Newsletter from "../components/newsletter";
import NewArrival from "../components/newArrival";
import Categories from "../components/categories";
import Collections from "../components/collections";
import Gallery from "../components/gallery";
import { useEffect, useState } from "react";
import { getProducts } from "../helper/dbHelper";
const HomePage = () => {
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      let products = await getProducts();
      setCartData(products);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <Header cartData={cartData} setCartData={setCartData} />
      <Carousel />
      <Cribs cartData={cartData} setCartData={setCartData} />
      <Blog />
      <Reviews />
      <Newsletter />
      <NewArrival cartData={cartData} setCartData={setCartData} />
      <Categories />
      <Collections />
      <Gallery />
    </>
  );
};
export default HomePage;
