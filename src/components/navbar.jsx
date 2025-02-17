import searchIcon from "/assets/search.svg";
import fbIcon from "/assets/fb.svg";
import igIcon from "/assets/instagram.svg";
import twitterIcon from "/assets/twitter.svg";
import pinterestIcon from "/assets/pinterest.svg";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";

const Navbar = () => {
  const [showHomeLoader, setShowHomeLoader] = useState(false);
  const [showPagesLoader, setShowPagesLoader] = useState(false);
  const [showShopLoader, setShowShopLoader] = useState(false);
  const [showBlogLoader, setShowBlogLoader] = useState(false);
  return (
    <div className="bg-[#F7F3F0] flex flex-col md:flex-row justify-between items-center text-black px-5 w-full">
      <div
        id="col-1"
        className="cursor-pointer flex flex-row px-4 gap-2 py-3 justify-center items-center w-full md:w-auto"
      >
        <img
          src="assets/subscribe-icon.png"
          alt="Subscribe Icon"
          className="hover:translate-y-[-2px] transition-all duration-300"
        />
        <button className="cursor-pointer">NEWSLETTER</button>
      </div>
      <div
        id="col-2"
        className="flex flex-row px-4 gap-10 items-center justify-center w-full md:w-[25%] py-3 md:py-0"
      >
        <div
          className="flex flex-col relative h-[20px] justify-start items-center"
          onMouseEnter={() => setShowHomeLoader(true)}
          onMouseLeave={() => setShowHomeLoader(false)}
        >
          <button className="cursor-pointer">HOME</button>
          {showHomeLoader && (
            <ThreeDots
              visible={true}
              height="20px"
              width="20px"
              color="#DB915E"
              radius="9"
              ariaLabel="three-dots-loading"
            />
          )}
        </div>
        <div
          className="flex flex-col relative h-[20px] justify-start items-center"
          onMouseEnter={() => setShowPagesLoader(true)}
          onMouseLeave={() => setShowPagesLoader(false)}
        >
          <button className="cursor-pointer">PAGES</button>
          {showPagesLoader && (
            <ThreeDots
              visible={true}
              height="20px"
              width="20px"
              color="#DB915E"
              radius="9"
              ariaLabel="three-dots-loading"
            />
          )}
        </div>
        <div
          className="flex flex-col relative h-[20px] justify-start items-center"
          onMouseEnter={() => setShowShopLoader(true)}
          onMouseLeave={() => setShowShopLoader(false)}
        >
          <button className="cursor-pointer">SHOP</button>
          {showShopLoader && (
            <ThreeDots
              visible={true}
              height="20px"
              width="20px"
              color="#DB915E"
              radius="9"
              ariaLabel="three-dots-loading"
            />
          )}
        </div>
        <div
          className="flex flex-col relative h-[20px] justify-start items-center"
          onMouseEnter={() => setShowBlogLoader(true)}
          onMouseLeave={() => setShowBlogLoader(false)}
        >
          <button className="cursor-pointer">BLOG</button>
          {showBlogLoader && (
            <ThreeDots
              visible={true}
              height="20px"
              width="20px"
              color="#DB915E"
              radius="9"
              ariaLabel="three-dots-loading"
            />
          )}
        </div>
      </div>
      <div
        id="col-3"
        className="flex flex-row px-4 gap-4 py-3 justify-center w-full md:w-auto"
      >
        <div className="flex flex-row gap-1 items-center">
          <img src={searchIcon} className="w-5" alt="Search Icon" />
          <p>SEARCH</p>
        </div>
        <div className="flex flex-row gap-4 items-center cursor-pointer">
          <img
            src={fbIcon}
            className="w-5 hover:translate-y-[-2px] transition-all duration-300"
            alt="Facebook Icon"
          />
          <img
            src={igIcon}
            className="w-5 hover:translate-y-[-2px] transition-all duration-300"
            alt="Instagram Icon"
          />
          <img
            src={twitterIcon}
            className="w-5 hover:translate-y-[-2px] transition-all duration-300"
            alt="Twitter Icon"
          />
          <img
            src={pinterestIcon}
            className="w-5 hover:translate-y-[-2px] transition-all duration-300"
            alt="Pinterest Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
