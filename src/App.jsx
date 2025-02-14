import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Carousel from "./components/carousel";
import Cribs from "./components/cribs";
import Blog from "./components/blog";
import Reviews from "./components/reviews";
import Newsletter from "./components/newsletter";
import NewArrival from "./components/newArrival";
import Categories from "./components/categories";
import Collections from "./components/collections";
import Gallery from "./components/gallery";
import About from "./components/about";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Carousel />
      <Cribs />
      <Blog />
      <Reviews />
      <Newsletter />
      <NewArrival />
      <Categories />
      <Collections />
      <Gallery />
      <About />
      <Footer />
    </>
  );
}

export default App;
