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
    <div className="flex flex-col justify-center items-center py-[5%] gap-10 w-full">
      <div className="flex flex-col justify-center items-center gap-2 max-w-[25%]">
        <p className="text-[28px]">READ OUR BLOG</p>
        <p className="text-[18px]">
          Dignissim enim sit amet venenatis urna convallis ae nean et tortor
          etiam non qu.
        </p>
      </div>
      <div className="flex flex-row justify-center gap-10 px-[16%] text-start">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-start gap-4"
          >
            <img src={post.imgSrc} alt={`Blog ${index + 1}`} />
            <p className="text-[24px]">{post.title}</p>
            <p className="text-[15px]">{post.description}</p>
            <button className="text-[#DB915E] font-semibold text-[14px]">
              READ MORE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
