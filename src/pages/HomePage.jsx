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
      <div className="h-4"></div>
      <Carousel />
      <div className="h-4"></div>
      <Cribs />
      <div className="h-4"></div>
      <Blog />
      <div className="h-4"></div>
      <Reviews />
      <div className="h-4"></div>
      <Newsletter />
      <div className="h-4"></div>
      <NewArrival />
      <div className="h-4"></div>
      <Categories />
      <div className="h-4"></div>
      <Collections />
      <div className="h-4"></div>
      <Gallery />
    </>
  );
};
export default HomePage;
