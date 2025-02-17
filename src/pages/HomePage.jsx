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
import { useState } from "react";

const HomePage = () => {
  const [cartData, setCartData] = useState([]);
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
