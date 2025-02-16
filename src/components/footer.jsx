import fbIcon from "/assets/fb.svg";
import igIcon from "/assets/instagram.svg";
import twitterIcon from "/assets/twitter.svg";
import pinterestIcon from "/assets/pinterest.svg";
import phoneIcon from "/assets/phone.svg";
import mailIcon from "/assets/mail.svg";
const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 px-6 border-t border-gray-200 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-start">
        {/* Company Section */}
        <div>
          <h3 className="text-lg mb-3">COMPANY</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-black">
                About PlayGrow
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Our Experts
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Services & Prices
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Latest News
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Customers Section */}
        <div>
          <h3 className="text-lg mb-3">CUSTOMERS</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-black">
                Read Our Advice
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Get In Touch
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Online Store
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Ask Away
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg mb-3">SOCIAL MEDIA</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-black flex flex-row gap-2">
                <img src={twitterIcon} className="w-3" /> Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black flex flex-row gap-2">
                <img src={igIcon} className="w-3" /> Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black flex flex-row gap-2">
                <img src={fbIcon} className="w-3" /> Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black flex flex-row gap-2">
                <img src={pinterestIcon} className="w-3" /> Pinterest
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg mb-3">CONTACT</h3>
          <p>Monday to Friday 9 a.m. - 5 p.m.</p>
          <ul className="mt-2 space-y-2">
            <li className="flex flex-row gap-2">
              <img src={phoneIcon} className="w-3" /> 012 34 567 8912
            </li>
            <li className="flex flex-row gap-2">
              <img src={phoneIcon} className="w-3" /> 123 45 678 9123
            </li>
            <li className="flex flex-row gap-2">
              <img src={mailIcon} className="w-3" />
              <a
                href="mailto:playgrow@qodeinteractive.com"
                className="hover:text-black"
              >
                playgrow@qodeinteractive.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center pt-6 w-full">
        {/* Logo and Copyright */}
        <div className="flex flex-row gap-5">
          <img src="/assets/footer-logo-img-1.png" className="w-[25%]" />
          <p className="text-sm text-gray-500 mt-4 md:mt-0 pt-6">
            © 2023 Qode Interactive, All Rights Reserved
          </p>
        </div>

        {/* Payment Methods */}
        <img
          src="/assets/footer-img-1.png"
          className="w-[20%]"
          alt="Payment Methods"
        />
      </div>

      {/* Back to Top Button */}
      <div
        className="fixed bottom-5 right-5 bg-[#DB915E] text-white w-15 h-15 flex justify-center items-center rounded-full shadow-lg cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        TOP
      </div>
    </footer>
  );
};

export default Footer;
