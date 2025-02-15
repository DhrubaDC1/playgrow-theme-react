import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "/assets/slide 1.png",
  "/assets/slide 2.png",
  "/assets/slide 3.png",
];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <FaChevronRight
      className="absolute right-[-20px] top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 text-xl"
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <FaChevronLeft
      className="absolute left-[-20px] top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 text-xl"
      onClick={onClick}
    />
  );
};

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-full px-[10%] mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
