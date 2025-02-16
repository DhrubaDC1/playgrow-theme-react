import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = [
  { name: "Toys", image: "/assets/product-category-01.png" },
  { name: "Other", image: "/assets/Product-Category-02.png" },
  { name: "Carriage", image: "/assets/product-category-04.png" },
  { name: "New", image: "/assets/product-category-05.png" },
  { name: "Bottles", image: "/assets/product-category-06.png" },
  { name: "Cribs", image: "/assets/Product-Category-img-03.png" },
  { name: "Beds", image: "/assets/Product-Category-Img-07.png" },
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

const Categories = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="relative w-[70vw] py-4 px-4">
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center px-6"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover rounded-full overflow-hidden border-2 border-gray-300"
            />
            <p className="mt-2 text-sm">{category.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Categories;
