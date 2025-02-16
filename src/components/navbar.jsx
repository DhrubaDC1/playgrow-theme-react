import searchIcon from "/assets/search.svg";
import fbIcon from "/assets/fb.svg";
import igIcon from "/assets/instagram.svg";
import twitterIcon from "/assets/twitter.svg";
import pinterestIcon from "/assets/pinterest.svg";

const Navbar = () => {
  return (
    <div className="bg-[#F7F3F0] flex flex-col md:flex-row justify-between items-center text-black px-5 w-full">
      <div
        id="col-1"
        className="flex flex-row px-4 gap-2 py-3 justify-center items-center w-full md:w-auto"
      >
        <img src="assets/subscribe-icon.png" alt="Subscribe Icon" />
        <button className="cursor-pointer">NEWSLETTER</button>
      </div>
      <div
        id="col-2"
        className="flex flex-row px-4 gap-1 items-center justify-center w-full md:w-[25%] py-3 md:py-0"
      >
        <button className="cursor-pointer">HOME</button>
        <button className="cursor-pointer">PAGES</button>
        <button className="cursor-pointer">SHOP</button>
        <button className="cursor-pointer">BLOG</button>
      </div>
      <div
        id="col-3"
        className="flex flex-row px-4 gap-4 py-3 justify-center w-full md:w-auto"
      >
        <div className="flex flex-row gap-1 items-center">
          <img src={searchIcon} className="w-5" alt="Search Icon" />
          <p>SEARCH</p>
        </div>
        <div className="flex flex-row gap-4 cursor-pointer items-center">
          <img src={fbIcon} className="w-5" alt="Facebook Icon" />
          <img src={igIcon} className="w-5" alt="Instagram Icon" />
          <img src={twitterIcon} className="w-5" alt="Twitter Icon" />
          <img src={pinterestIcon} className="w-5" alt="Pinterest Icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
