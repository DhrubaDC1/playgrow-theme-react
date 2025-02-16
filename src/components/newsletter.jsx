const Newsletter = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img
        src="/assets/room_new.png"
        className="w-full h-[80vh] object-cover"
      />

      {/* Centered Newsletter Card */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] h-auto flex flex-col gap-6 py-10 px-6 shadow-lg rounded-xl">
        {/* Header */}
        <div className="flex flex-col text-center">
          <p className="text-[28px] font-semibold">NEWSLETTER</p>
          <p className="text-gray-500 text-[18px]">
            Stay updated with our latest news
          </p>
        </div>

        {/* Input Fields */}
        <div className="flex flex-col px-4 justify-center gap-4">
          <input
            className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#DB915E] outline-none"
            placeholder="Your Name"
            id="name"
            type="text"
          />
          <input
            className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#DB915E] outline-none"
            placeholder="Your Email"
            id="email"
            type="email"
          />

          {/* Submit Button */}
          <button className="bg-[#DB915E] hover:bg-[#C4794D] text-white px-4 py-3 w-full rounded-md transition">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
