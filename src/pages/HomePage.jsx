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

const HomePage = () => {
  return (
    <>
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
    </>
  );
};
export default HomePage;
