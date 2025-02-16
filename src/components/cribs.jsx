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
      originalPrice: "$190.00",
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
      <div className="flex flex-col justify-center items-center gap-2 max-w-[25%]">
        <p className="text-[28px]">CRIBS & BASKETS</p>
        <p className="text-[18px] text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod temp.
        </p>
      </div>
      <div className="flex flex-row justify-center gap-10">
        {cribData.map((crib, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center border-2 rounded-4xl border-gray-200 w-[18vw] py-10"
          >
            <img src={crib.img} alt={crib.title} />
            <p className="text-[13px] text-gray-500">{crib.category}</p>
            <p className="text-[20px]">{crib.title}</p>
            {crib.discountedPrice ? (
              <div className="flex flex-row gap-2">
                <p className="text-[16px] pt-2 text-gray-300 line-through">
                  {crib.originalPrice}
                </p>
                <p className="text-[16px] pt-2 text-gray-500">
                  {crib.discountedPrice}
                </p>
              </div>
            ) : (
              <p className="text-[16px] pt-2 text-gray-500">{crib.price}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cribs;
