const Collections = () => {
  return (
    <div className="w-full py-[7%] flex flex-row justify-center items-center gap-[3%]">
      <div className="flex flex-col items-center justify-center w-[22%] gap-3">
        <img src="/assets/h1-img-4.jpg" />
        <p className="text-[24px]">Best baby environment setting</p>
        <p className="text-[15px] text-gray-500">
          Metus aliquam eleifend mi in nulla cras sedo fel.
        </p>
        <button className="text-[#DB915E] font-semibold w-fit">
          VIEW COLLECTION
        </button>
      </div>
      <div className="flex flex-col items-center justify-center  w-[22%] gap-3">
        <img src="/assets/h1-img-5.jpg" />
        <p className="text-[24px]">Make a dreamy nursery</p>
        <p className="text-[15px] text-gray-500">
          Convallis a cras semper auctor neque vita teme.
        </p>
        <button className="text-[#DB915E] font-semibold w-fit">
          VIEW COLLECTION
        </button>
      </div>
    </div>
  );
};
export default Collections;
