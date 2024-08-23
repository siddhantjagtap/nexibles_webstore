import Link from "next/link";
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaRss,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer
        className="text-white p-8"
        style={{
          backgroundImage: "url('/Home/nexibles-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between items-start">
            {/* Navigation Links */}
            <nav className="flex flex-col space-y-4 md:space-y-6 mt-10 text-xl">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
              <Link href="/celebrations" className="hover:underline">
                Celebrations
              </Link>
              <Link href="/customization" className="hover:underline">
                Customization
              </Link>
            </nav>

            {/* Newsletter Signup */}
            <div className="mt-16 md:my-46px">
              <h3 className="text-xl font-semibold mb-2">
                Sign up for our Newsletter!
              </h3>
              <input
                type="email"
                placeholder="eg JohnSmith@gmail.com"
                className="p-2 rounded-full w-full text-gray-800"
              />
              <div className="flex justify-center space-x-6 my-6">
                <a href="#" className="hover:text-gray-300">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaWhatsapp size={24} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaLinkedin size={24} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaRss size={24} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>

            {/* Right Side Links */}
            <nav className="flex flex-col space-y-4 md:space-y-6 mt-10 text-xl text-end">
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
              <Link href="/tracking" className="hover:underline">
                Tracking Link
              </Link>
              <Link href="/faqs" className="hover:underline">
                FAQs
              </Link>
            </nav>
          </div>
        </div>
      </footer>
      {/* Bottom Links */}
      <div className="text-center text-sm mt-2 bg-white">
        <Link href="/privacy" className="hover:underline">
          Privacy Policy
        </Link>{" "}
        |
        <Link href="/returns" className="hover:underline">
          Return & Refunds
        </Link>{" "}
        |
        <Link href="/shipping" className="hover:underline">
          Shipping
        </Link>{" "}
        |
        <Link href="/terms" className="hover:underline">
          Terms & Conditions
        </Link>
      </div>
    </>
  );
};

export default Footer;
