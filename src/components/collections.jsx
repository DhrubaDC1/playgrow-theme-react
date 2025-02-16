const Collections = () => {
  const collectionsData = [
    {
      img: "/assets/h1-img-4.jpg",
      title: "Best baby environment setting",
      description: "Metus aliquam eleifend mi in nulla cras sedo fel.",
      buttonText: "VIEW COLLECTION",
    },
    {
      img: "/assets/h1-img-5.jpg",
      title: "Make a dreamy nursery",
      description: "Convallis a cras semper auctor neque vita teme.",
      buttonText: "VIEW COLLECTION",
    },
  ];

  return (
    <div className="w-full py-[7%] flex flex-row justify-center items-start gap-[3%]">
      {collectionsData.map((collection, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center w-[22%] gap-3"
        >
          <img src={collection.img} alt={collection.title} />
          <p className="text-[24px]">{collection.title}</p>
          <p className="text-[15px] text-gray-500">{collection.description}</p>
          <button className="text-[#DB915E] font-semibold w-fit">
            {collection.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Collections;
