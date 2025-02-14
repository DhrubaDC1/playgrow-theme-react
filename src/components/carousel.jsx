import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/path-to-image1.png",
  "/path-to-image2.png",
  "/path-to-image3.png",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Carousel Images */}
      <div className="overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="Carousel Slide"
          className="w-full rounded-lg transition-all duration-500"
        />
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow-lg"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow-lg"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots for Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex ? "bg-orange-500 w-4" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
