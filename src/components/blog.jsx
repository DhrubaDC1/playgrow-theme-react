const Blog = () => {
  const blogPosts = [
    {
      imgSrc: "/assets/blog 1.jpg",
      title: "Fun colourful cutlery for toddlers to more enjoy dining",
      description:
        "Pretium fusce id velit ut tortor. Euismod quis viverra nibh cras pulvinar mattis nunc. Arcu felis bibendum ut tristique et egestas ipsum. Sed risus ultricies tristique nulla aliquet.",
    },
    {
      imgSrc: "/assets/blog 2.jpg",
      title: "Fun childhood with furry toys ready for best cuddles",
      description:
        "Pretium fusce id velit ut tortor. Euismod quis viverra nibh cras pulvinar mattis nunc. Arcu felis bibendum ut tristique et egestas ipsum. Sed risus ultricies tristique nulla aliquet.",
    },
    {
      imgSrc: "/assets/blog 3.jpg",
      title: "Dotted design summertime swimsuit collection for toddlers",
      description:
        "Pretium fusce id velit ut tortor. Euismod quis viverra nibh cras pulvinar mattis nunc. Arcu felis bibendum ut tristique et egestas ipsum. Sed risus ultricies tristique nulla aliquet.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-8 gap-10 w-full">
      <div className="flex flex-col justify-center items-center gap-2 w-full md:max-w-[25%] px-4">
        <p className="text-2xl md:text-[28px]">READ OUR BLOG</p>
        <p className="text-base md:text-[18px] text-center">
          Dignissim enim sit amet venenatis urna convallis ae nean et tortor
          etiam non qu.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-10 px-4 md:px-[16%] text-start">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-start gap-4 w-full md:w-auto"
          >
            <img
              src={post.imgSrc}
              alt={`Blog ${index + 1}`}
              className="w-full object-cover transition-all duration-300 hover:scale-102"
            />
            <p className="text-xl md:text-[24px] font-semibold">{post.title}</p>
            <p className="text-sm md:text-[15px]">{post.description}</p>
            <button className="text-[#DB915E] font-semibold text-xs md:text-[14px] cursor-pointer">
              READ MORE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
