import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [cartModalOpen, setCartModalOpen] = useState(false);

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
            className="w-12 hover:translate-y-[-7px] transition-all duration-300"
          />
          <p className="text-sm">WISHLIST</p>
        </div>
        <div
          className="flex flex-col gap-2 items-center cursor-pointer"
          onClick={() => setCartModalOpen(true)}
        >
          <img
            src="assets/cart-empty-large.png"
            alt="Cart"
            className="w-12 hover:translate-y-[-7px] transition-all duration-300"
          />
          <p className="text-sm">CART</p>
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
              <div className="p-4 pt-10">
                <h2 className="text-2xl mb-4">SHOPPING CART</h2>
                <p className="text-md text-gray-600 pt-10 pl-4 text-start">
                  No products in the cart.
                </p>
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
