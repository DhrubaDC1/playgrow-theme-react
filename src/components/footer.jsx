const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 px-6 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Company Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">COMPANY</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About PlayGrow
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Experts
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services & Prices
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Latest News
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Customers Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">CUSTOMERS</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Read Our Advice
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Get In Touch
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Online Store
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Ask Away
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">SOCIAL MEDIA</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                🐦 Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                📸 Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                📘 Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                📌 Pinterest
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">CONTACT</h3>
          <p>Monday to Friday 9 a.m. - 5 p.m.</p>
          <ul className="mt-2 space-y-2">
            <li>📞 012 34 567 8912</li>
            <li>📞 123 45 678 9123</li>
            <li>
              ✉️{" "}
              <a
                href="mailto:playgrow@qodeinteractive.com"
                className="hover:underline"
              >
                playgrow@qodeinteractive.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center pt-6">
        {/* Logo and Copyright */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-orange-600">
            PLAY<span className="text-gray-700">GROW</span>
          </span>
          <span className="text-sm text-gray-500">BABY EQUIPMENT</span>
        </div>
        <p className="text-sm text-gray-500 mt-4 md:mt-0">
          © 2023 Qode Interactive, All Rights Reserved
        </p>

        {/* Payment Methods */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <img src="/visa.png" alt="Visa" className="h-6" />
          <img src="/mastercard.png" alt="MasterCard" className="h-6" />
          <img src="/amex.png" alt="American Express" className="h-6" />
          <img src="/paypal.png" alt="PayPal" className="h-6" />
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-5 right-5 bg-orange-400 text-white px-4 py-2 rounded-full shadow-lg cursor-pointer">
        TOP
      </div>
    </footer>
  );
};

export default Footer;
