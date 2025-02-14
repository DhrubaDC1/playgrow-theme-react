const Navbar = () => {
  return (
    <div className="bg-black flex flex-row justify-between text-white">
      <div id="col-1" className="flex flex-row px-4 gap-1">
        <p>icon</p>
        <p>NEWSLETTER</p>
      </div>
      <div id="col-2" className="flex flex-row px-4 gap-1">
        <p>HOME</p>
        <p>PAGES</p>
        <p>SHOP</p>
        <p>BLOG</p>
      </div>
      <div id="col-3" className="flex flex-row px-4 gap-4">
        <div className="flex flex-row gap-1">
          <p>icon</p>
          <p>SEARCH</p>
        </div>
        <div className="flex flex-row gap-1">
          <p>F</p>
          <p>I</p>
          <p>T</p>
          <p>P</p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
