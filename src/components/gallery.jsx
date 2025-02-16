import React from "react";

const images = [
  "/assets/h1-img-10.jpg",
  "/assets/h1-img-11.jpg",
  "/assets/h1-img-12.jpg",
  "/assets/h1-img-13.jpg",
  "/assets/h1-img-14.jpg",
  "/assets/h1-img-15.jpg",
  "/assets/h1-img-16.jpg",
  "/assets/h1-img-17.jpg",
  "/assets/h1-img-18.jpg",
  "/assets/h1-img-19.jpg",
  "/assets/h1-img-20.jpg",
  "/assets/h1-img-21.jpg",
];

const Gallery = () => {
  return (
    <div className="bg-[#F7F3F0] text-black p-10 flex flex-col justify-center items-center w-full h-[100vh]">
      <div className="text-center mb-10">
        <h2 className="text-[28px]">CHECK OUT OUR GALLERY</h2>
        <p className="text-gray-500 text-[18px] mt-2">
          Iaculis nunc sed augue lacus viverra vitae congue. Vitae congue eu
          consequat ac.
        </p>
      </div>
      <img
        src="/assets/main-img-27.png"
        className="absolute left-10 pt-[41%] hidden md:block"
      />
      <img
        src="/assets/main-img-24.png"
        className="absolute right-10 pb-[39%] hidden md:block"
      />
      <div className="grid md:grid-cols-6 grid-cols-3 gap-4 w-[70%]">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-full">
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
