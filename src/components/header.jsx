const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 px-4 md:px-[19%] w-full py-20">
      {/* Left Group: New In and About Us */}
      <div className="flex flex-row gap-10 md:gap-20 items-center">
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <img
            src="assets/rainbow.png"
            alt="New In"
            className="w-12 hover:translate-y-[-7px] transition-all duration-300"
          />
          <p className="text-sm">NEW IN</p>
        </div>
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <img
            src="assets/star.png"
            alt="About Us"
            className="w-12 hover:translate-y-[-7px] transition-all duration-300"
          />
          <p className="text-sm">ABOUT US</p>
        </div>
      </div>

      {/* Center: Logo */}
      <div className="flex flex-col items-center justify-center cursor-pointer">
        <img
          src="assets/logo-main-img.png"
          alt="Logo"
          className="w-3/4 md:w-[75%]"
        />
      </div>

      {/* Right Group: Wishlist and Cart */}
      <div className="flex flex-row gap-10 md:gap-20 items-center cursor-pointer">
        <div className="flex flex-col gap-2 items-center">
          <img
            src="assets/hearth.png"
            alt="Wishlist"
            className="w-12 hover:translate-y-[-7px] transition-all duration-300"
          />
          <p className="text-sm">WISHLIST</p>
        </div>
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <img
            src="assets/cart-empty-large.png"
            alt="Cart"
            className="w-12 hover:translate-y-[-7px] transition-all duration-300"
          />
          <p className="text-sm">CART</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
