import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
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
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  /*************  ✨ Codeium Command ⭐  *************/
  /**
   * Opens the modal with the given image.
   * @param {string} src - The src of the image to be shown in the modal.
   */
  /******  b2ae152c-f9f0-4941-bdfb-5458769d6dc9  *******/
  const openModal = (src) => {
    setSelectedImage(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
          <div
            key={index}
            className="relative w-full h-full group cursor-pointer"
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:scale-105"
              onClick={() => openModal(src)}
            />
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Gallery Image Modal"
      >
        <img src={selectedImage} alt="Gallery Image" />
      </Modal>
    </div>
  );
};

export default Gallery;
