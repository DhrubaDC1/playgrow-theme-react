const Cribs = () => {
  const cribData = [
    {
      img: "/assets/crib1.jpg",
      category: "BEDS",
      title: "Premium Bed Wooden",
      price: "$320.00",
    },
    {
      img: "/assets/crib2.jpg",
      category: "BEDS",
      title: "Premium Bed Wooden",
      originalPrice: "$250.00",
      discountedPrice: "$190.00",
    },
    {
      img: "/assets/crib3.jpg",
      category: "BEDS",
      title: "Premium Bed Wooden",
      price: "$420.00",
    },
    {
      img: "/assets/crib4.jpg",
      category: "BEDS",
      title: "Premium Bed Wooden",
      price: "$320.00",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-[5%] gap-10 w-full">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center gap-2 max-w-[40%] text-center">
        <p className="text-[28px]">CRIBS & BASKETS</p>
        <p className="text-[16px] text-gray-500 leading-relaxed">
          Explore our collection of premium wooden beds designed for comfort and
          elegance.
        </p>
      </div>

      {/* Grid Layout for Cribs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%]">
        {cribData.map((crib, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center border-2 border-dotted rounded-2xl border-gray-200 p-6 hover:shadow-lg"
          >
            <img
              src={crib.img}
              alt={crib.title}
              className="w-full rounded-lg transform transition-transform duration-300 hover:scale-105"
            />
            <p className="text-[13px] text-gray-500 mt-3">{crib.category}</p>
            <p className="text-[20px] font-medium">{crib.title}</p>

            {/* Price Display or Add to Cart Button on Hover */}
            <div className="flex flex-row gap-2">
              {crib.discountedPrice ? (
                <>
                  <div
                    className="flex flex-row gap-2"
                    id={`priceDiv-${index}`}
                    onMouseEnter={() => {
                      document.getElementById(
                        `cartButton-${index}`
                      ).style.display = "flex";
                      document.getElementById(
                        `priceDiv-${index}`
                      ).style.display = "none";
                    }}
                  >
                    <p className="text-[16px] pt-2 text-gray-400 line-through py-2">
                      {crib.originalPrice}
                    </p>
                    <p className="text-[16px] pt-2 text-red-500 font-semibold py-2">
                      {crib.discountedPrice}
                    </p>
                  </div>
                  <button
                    id={`cartButton-${index}`}
                    className="text-[16px] text-[#DB915E] font-semibold py-2 px-4 transition-all cursor-pointer"
                    onMouseOut={() => {
                      document.getElementById(
                        `cartButton-${index}`
                      ).style.display = "none";
                      document.getElementById(
                        `priceDiv-${index}`
                      ).style.display = "flex";
                    }}
                  >
                    Add to Cart
                  </button>
                </>
              ) : (
                <>
                  <p
                    className="text-[16px] pt-2 text-gray-500 font-medium py-2"
                    id={`price-${index}`}
                    onMouseEnter={() => {
                      document.getElementById(
                        `cartButton-${index}`
                      ).style.display = "block";
                      document.getElementById(`price-${index}`).style.display =
                        "none";
                    }}
                  >
                    {crib.price}
                  </p>
                  <button
                    id={`cartButton-${index}`}
                    style={{ display: "none" }}
                    onMouseOut={() => {
                      document.getElementById(
                        `cartButton-${index}`
                      ).style.display = "none";
                      document.getElementById(`price-${index}`).style.display =
                        "block";
                    }}
                    className="text-[16px] text-[#DB915E] font-semibold py-2 px-4 transition-all cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cribs;
