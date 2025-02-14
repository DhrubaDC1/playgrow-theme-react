const Header = () => {
  return (
    <div className="flex flex-row justify-between gap-10 h-[27vh] items-center px-[19%]">
      <div className="flex flex-col gap-3">
        <img src="assets/rainbow.png" />
        <p>NEW IN</p>
      </div>
      <div className="flex flex-col gap-3">
        <img src="assets/star.png" />
        <p>ABOUT US</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src="assets/logo-main-img.png" className="w-[75%]" />
      </div>
      <div className="flex flex-col gap-3">
        <img src="assets/hearth.png" />
        <p>WISHLIST</p>
      </div>
      <div className="flex flex-col gap-3">
        <img src="assets/cart-empty-large.png" />
        <p>CART</p>
      </div>
    </div>
  );
};
export default Header;
