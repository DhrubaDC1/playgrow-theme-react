const NewArrival = () => {
  const newArrivalData = [
    {
      img: "/assets/na_1.jpg",
      category: "CARRIAGE",
      title: "Baby Leather Carriage",
      price: "$320.00",
    },
    {
      img: "/assets/na_2.jpg",
      category: "CARRIAGE",
      title: "White Carriage",
      originalPrice: "$220.00",
      discountedPrice: "$190.00",
    },
    {
      img: "/assets/na_3.jpg",
      category: "CARRIAGE",
      title: "Brown Leather Carriage",
      price: "$420.00",
    },
    {
      img: "/assets/na_4.jpg",
      category: "CARRIAGE",
      title: "Baby Grey Carriage",
      price: "$320.00",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-[5%] gap-10 w-full bg-[#FDF9F5]">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center gap-2 max-w-[40%] text-center">
        <p className="text-[28px]">NEW ARRIVAL</p>
        <p className="text-[18px] text-gray-500 leading-relaxed">
          Consectetur adipiscing elit ut aliquam duis convallis tellus id
          interdum.
        </p>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10 w-full">
        {newArrivalData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center border-2 border-dotted rounded-2xl border-gray-200 p-6 shadow-md hover:shadow-lg transition bg-white"
          >
            {/* Product Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-60 object-cover rounded-lg hover:scale-110 transition duration-300 cursor-pointer"
            />

            {/* Category & Title */}
            <p className="text-[13px] text-gray-500 mt-4 cursor-pointer hover:text-orange-500">
              {item.category}
            </p>
            <p className="text-[20px] font-medium text-center cursor-pointer">
              {item.title}
            </p>

            {/* Price Display */}
            <div className="flex flex-row gap-2 mt-2">
              {item.discountedPrice && item.originalPrice ? (
                <>
                  <p className="text-[16px] text-gray-400 line-through">
                    {item.originalPrice}
                  </p>
                  <p className="text-[16px] font-semibold text-red-500">
                    {item.discountedPrice}
                  </p>
                </>
              ) : (
                <p className="text-[16px] font-semibold text-gray-700">
                  {item.price}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
