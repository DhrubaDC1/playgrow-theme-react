import starIcon from "../../public/assets/star.svg";
const Reviews = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[5%] gap-10 bg-[#FDF9F5]">
      <div className="flex flex-col justify-center items-center gap-2 max-w-[25%] text-center">
        <p className="text-[28px]">HAPPY CUSTOMERS</p>
      </div>
      <img
        src="../../public/assets/jiraffe.png"
        className="absolute -left-4 pb-[10%]"
      />
      <img
        src="../../public/assets/bunny.png"
        className="absolute right-10 pt-[21%]"
      />
      <img
        src="../../public/assets/bunny_love.png"
        className="absolute right-10 pt-[10%]"
      />
      <div className="flex flex-row justify-center gap-10 px-[16%] text-start">
        {[
          {
            text: "Donec pretium vulputate sapien nec sagittis aliquam hac habitass platea dictumst quisque sagit.",
            name: "PAWEL, CHICAGO",
          },
          {
            text: "Facilisis magna etiam tempor orci eu lobortis elementum nibh. Id donec ultrices tincidunt aru.",
            name: "JASMINE, CALIFORNIA",
          },
          {
            text: "Massa eget egestas purus viverra a in nisl nisi. Ut tortor pretium viverra suspendise potenti tempor orc ed.",
            name: "LOLA, LONDON",
          },
        ].map((review, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-4 max-w-[30%] p-6"
          >
            <div className="flex justify-start">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <img src={starIcon} className="w-6" key={i} />
                ))}
            </div>
            <p className="text-[24px] text-center">"{review.text}"</p>
            <p className="text-gray-400 text-[13px]">{review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
