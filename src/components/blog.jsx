const Blog = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[5%] gap-10">
      <div className="flex flex-col justify-center items-center gap-2 max-w-[25%]">
        <p className="text-[28px]">READ OUR BLOG</p>
        <p className="text-[18px]">
          Dignissim enim sit amet venenatis urna convallis ae nean et tortor
          etiam non qu.
        </p>
      </div>
      <div className="flex flex-row justify-center gap-10 px-[16%] text-start">
        <div className="flex flex-col justify-start items-start gap-4">
          <img src="../../public/assets/blog 1.jpg" />
          <p className="text-[24px]">
            Fun colourful cutlery for toddlers to more enjoy dining
          </p>
          <p className="text-[15px]">
            Pretium fusce id velit ut tortor. Euismod quis viverra nibh cras
            pulvinar mattis nunc. Arcu felis bibendum ut tristique et egestas
            ipsum. Sed risus ultricies tristique nulla aliquet.
          </p>
          <button className="text-[#DB915E] font-semibold text-[14px]">
            READ MORE
          </button>
        </div>
        <div className="flex flex-col justify-start items-start gap-4">
          <img src="../../public/assets/blog 2.jpg" />
          <p className="text-[24px]">
            Fun childhood with furry toys ready for best cuddles
          </p>
          <p className="text-[15px]">
            Pretium fusce id velit ut tortor. Euismod quis viverra nibh cras
            pulvinar mattis nunc. Arcu felis bibendum ut tristique et egestas
            ipsum. Sed risus ultricies tristique nulla aliquet.
          </p>
          <button className="text-[#DB915E] font-semibold text-[14px]">
            READ MORE
          </button>
        </div>
        <div className="flex flex-col justify-start items-start gap-4">
          <img src="../../public/assets/blog 3.jpg" />
          <p className="text-[24px]">
            Dotted design summertime swimsuit collection for toddlers
          </p>
          <p className="text-[15px]">
            Pretium fusce id velit ut tortor. Euismod quis viverra nibh cras
            pulvinar mattis nunc. Arcu felis bibendum ut tristique et egestas
            ipsum. Sed risus ultricies tristique nulla aliquet.
          </p>
          <button className="text-[#DB915E] font-semibold text-[14px]">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};
export default Blog;
