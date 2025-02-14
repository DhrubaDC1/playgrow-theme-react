const Gallery = () => {
  return (
    <div className="bg-black text-white p-10 flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <p>CHECK OUT OUR GALLERY</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod temp.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-4">
        <div className="flex flex-row justify-center gap-10">
          <p>Product 1</p>
          <p>Product 2</p>
          <p>Product 3</p>
          <p>Product 4</p>
          <p>Product 5</p>
          <p>Product 6</p>
        </div>
        <div className="flex flex-row justify-center gap-10">
          <p>Product 1</p>
          <p>Product 2</p>
          <p>Product 3</p>
          <p>Product 4</p>
          <p>Product 5</p>
          <p>Product 6</p>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
