const Newsletter = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img
        src="/assets/room_new.png"
        className="w-full h-[80vh] object-cover"
      />

      {/* Centered Newsletter Card */}
      <div className="absolute top-1/2 left-[27%] transform -translate-x-1/2 -translate-y-1/2 bg-white w-[22%] h-[60%] flex flex-col gap-4 py-10 px-6 justify-around">
        <div className="flex flex-col text-center">
          <p className="text-[28px]">NEWSLETTER</p>
          <p className="text-gray-500 text-[18px]">
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="flex flex-col px-4 justify-center gap-4">
          <textarea
            className="border-gray-500 border p-2 pl-4 resize-none place-content-center"
            placeholder="Your Name"
            id="name"
          ></textarea>
          <textarea
            className="border-gray-500 border p-2 pl-4 resize-none place-content-center"
            placeholder="Your Email"
            id="email"
          ></textarea>
          <div className="text-center">
            <button className="bg-[#DB915E] hover:bg-[#DB915E] text-white px-4 py-4 w-full">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
