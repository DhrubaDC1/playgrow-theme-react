const Newsletter = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img
        src="/assets/room_new.png"
        className="w-full h-[80vh] object-cover"
      />

      {/* Centered Newsletter Card */}
      <div className="absolute top-1/2 sm:left-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[90%] sm:w-[60%] md:w-[40%] lg:w-[22%] h-auto sm:h-[60%] flex flex-col gap-4 py-10 px-6 justify-center shadow-lg rounded-lg">
        <div className="flex flex-col text-center">
          <p className="text-[28px] font-semibold">NEWSLETTER</p>
          <p className="text-gray-500 text-[18px]">Stay updated with us</p>
        </div>
        <div className="flex flex-col px-4 justify-center gap-4">
          <input
            className="border-gray-400 border p-2 pl-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB915E]"
            placeholder="Your Name"
            id="name"
          />
          <input
            className="border-gray-400 border p-2 pl-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DB915E]"
            placeholder="Your Email"
            id="email"
          />
          <div className="text-center">
            <button className="bg-[#DB915E] hover:bg-[#C57D4D] text-white px-4 py-3 w-full rounded-md font-medium transition-all">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
