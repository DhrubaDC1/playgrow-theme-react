const NewArrival = () => {
  const newArrivalData = [
    {
      img: "/assets/na_1.jpg",
      category: "CARRIAGE",
      title: "Baby Lether Carriage",
      price: "$320.00",
    },
    {
      img: "/assets/na_2.jpg",
      category: "CARRIAGE",
      title: "White Carriage",
      originalPrice: "$190.00",
      discountedPrice: "$190.00",
    },
    {
      img: "/assets/na_3.jpg",
      category: "CARRIAGE",
      title: "Brown Lether Carriage",
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
    <div className="flex flex-col justify-center items-center py-[5%] gap-10 w-full">
      <div className="flex flex-col justify-center items-center gap-2 max-w-[25%]">
        <p className="text-[28px]">NEW ARRIVAL</p>
        <p className="text-[18px] text-gray-500">
          Consectetur adipiscing elit ut aliquam duis convalli convalli tellus
          id interdum ve.
        </p>
      </div>
      <div className="flex flex-row justify-center gap-10">
        {newArrivalData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center border-2 rounded-4xl border-gray-200 w-[18vw] py-10"
          >
            <img src={item.img} alt={item.title} />
            <p className="text-[13px] text-gray-500">{item.category}</p>
            <p className="text-[20px]">{item.title}</p>
            {item.discountedPrice ? (
              <div className="flex flex-row gap-2">
                <p className="text-[16px] pt-2 text-gray-300 line-through">
                  {item.originalPrice}
                </p>
                <p className="text-[16px] pt-2 text-gray-500">
                  {item.discountedPrice}
                </p>
              </div>
            ) : (
              <p className="text-[16px] pt-2 text-gray-500">{item.price}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
