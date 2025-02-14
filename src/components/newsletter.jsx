const Newsletter = () => {
  return (
    <div className="bg-black p-10">
      <div className="bg-white w-[25%] flex flex-col gap-4 py-4">
        <div className="flex flex-col">
          <p>NEWSLETTER</p>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="flex flex-col px-4 justify-center gap-4">
          <textarea
            className="border-1 place-content-center pl-4 resize-none"
            placeholder="Your Name"
            id="name"
          ></textarea>
          <textarea
            className="border-1 place-content-center pl-4 resize-none"
            placeholder="Your Email"
            id="email"
          ></textarea>
        </div>
        <div>
          <button className="bg-black text-white">Send Message</button>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
