import starIcon from "/assets/star.svg";

const Reviews = () => {
  return (
    <div className="relative flex flex-col justify-center items-center py-[5%] gap-10 bg-[#FDF9F5]">
      <div className="flex flex-col justify-center items-center gap-2 max-w-[80%] lg:max-w-[25%] text-center">
        <p className="text-[24px] lg:text-[28px]">HAPPY CUSTOMERS</p>
      </div>

      {/* Desktop-only absolute positioned images */}
      <img
        src="/assets/jiraffe.png"
        className="hidden lg:block absolute lg:-left-4 lg:pb-[10%]"
      />
      <img
        src="/assets/bunny.png"
        className="hidden lg:block absolute lg:right-10 lg:pt-[21%]"
      />
      <img
        src="/assets/bunny_love.png"
        className="hidden lg:block absolute lg:right-10 lg:pt-[10%]"
      />

      <div className="flex flex-col lg:flex-row justify-center gap-10 px-[5%] lg:px-[16%] text-start">
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
            className="flex flex-col justify-center items-center gap-4 max-w-full lg:max-w-[30%] p-6"
          >
            <div className="flex justify-center lg:justify-start">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <img src={starIcon} className="w-6" key={i} />
                ))}
            </div>
            <p className="text-[18px] lg:text-[24px] text-center">
              "{review.text}"
            </p>
            <p className="text-gray-400 text-[13px]">{review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
