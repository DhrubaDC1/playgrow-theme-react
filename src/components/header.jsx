import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ cartData, setCartData }) => {
  const [cartModalOpen, setCartModalOpen] = useState(false);

  useEffect(() => {
    console.log(cartData);
  }, [cartData]);

  const modalVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.3 } },
    exit: { x: "100%", transition: { duration: 0.3 } },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

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
            className="w-12 h-12 hover:translate-y-[-7px] transition-all duration-300"
          />
          <p className="text-sm">WISHLIST</p>
        </div>
        <div
          className="flex flex-col gap-2 items-center cursor-pointer relative"
          onClick={() => setCartModalOpen(true)}
        >
          <img
            src="assets/cart-empty-large.png"
            alt="Cart"
            className="w-12 h-12 hover:translate-y-[-7px] transition-all duration-300"
          />
          <p className="text-sm">CART</p>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
            {cartData.length}
          </span>
        </div>
      </div>

      {/* Backdrop and Sliding Modal */}
      <AnimatePresence>
        {cartModalOpen && (
          <motion.div
            className="fixed inset-0 z-50"
            onClick={() => setCartModalOpen(false)}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={backdropVariants}
          >
            <motion.div
              className="absolute top-0 right-0 w-full md:w-1/3 h-full bg-white shadow-lg"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Content */}
              <div className="p-4 pt-10 overflow-y-auto h-[80vh] modalScroll">
                <h2 className="text-2xl mb-4">SHOPPING CART</h2>
                {cartData.length === 0 ? (
                  <p className="text-md text-gray-600 pt-10 pl-4 text-start">
                    No products in the cart.
                  </p>
                ) : (
                  Object.values(
                    cartData.reduce((acc, item) => {
                      if (!acc[item.title]) {
                        acc[item.title] = { ...item, quantity: 0 };
                      }
                      acc[item.title].quantity += 1;
                      return acc;
                    }, {})
                  ).map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-row justify-between items-center py-4 px-4 border-t border-gray-300"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-20 h-20 object-cover"
                      />
                      <div className="flex flex-col justify-center">
                        <p className="text-md">{item.title}</p>
                        <p className="text-sm text-gray-600">
                          Unit Price: {item.price}
                        </p>
                      </div>
                      <div className="flex flex-col justify-center">
                        <p className="text-md">
                          Total Selected: {item.quantity}
                        </p>
                        <p className="text-sm text-gray-600">
                          Total Price: $
                          {parseFloat(item.price.replace("$", "")) *
                            item.quantity}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="pt-4">
                <div className="flex flex-row justify-between text-md border-t-1 border-b-1 py-4 border-gray-400 mx-16 px-3">
                  <p>TOTAL:</p>
                  <p className="text-gray-500">
                    $
                    {cartData.reduce((acc, item) => {
                      return (
                        acc +
                        parseFloat(item.price.replace("$", "")) *
                          cartData.filter((i) => i.title === item.title).length
                      );
                    }, 0)}
                  </p>
                </div>
                <div className="flex justify-evenly items-center mt-6 text-lg">
                  <button className="bg-[#DB915E] text-white px-10 py-4 hover:bg-[#af7c5a] transition cursor-pointer">
                    VIEW CART
                  </button>
                  <button className="bg-[#B1CECA] text-white px-10 py-4 hover:bg-[#89a8a5] transition cursor-pointer">
                    CHECKOUT
                  </button>
                </div>
              </div>
              <button
                className="absolute top-4 right-4"
                onClick={() => setCartModalOpen(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
