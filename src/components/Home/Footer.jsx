import Link from "next/link";
import Image from 'next/image';
import Instragram from "../../../public/Homepage/Social_Icons/Insta_Icon.svg";
import Whatsapp from "../../../public/Homepage/Social_Icons/Whatsapp_Icon.svg";
// import Linkedin from "../../../public/Homepage/Social_Icons/Linkedin_Icon.svg";
import Call from "../../../public/Homepage/Social_Icons/Call_Icon.svg";
import Mail from "../../../public/Homepage/Social_Icons/Mail_Icon.svg";
const Footer = () => {
  return (
    <>
      <footer
        className="text-white p-8"
        style={{
          backgroundImage: "url('/Homepage/Backgrounds/Footer_Background.png')",
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
              <Link href="/customisation" className="hover:underline">
                Customisation
              </Link>
            </nav>
            {/* Newsletter Signup (now on the right) */}
            <div className="mt-16 md:my-46px">
              <h3 className="text-xl font-semibold mb-2 text-center">
                Sign up for our Newsletter!
              </h3>
              <input
                type="email"
                placeholder="eg JohnSmith@gmail.com"
                className="p-2 rounded-full w-full text-gray-800"
              />
              <div className="flex justify-center my-6">
                <a href="#" className="hover:text-gray-300">
                  <Image src={Instragram} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Image src={Whatsapp} />
                </a>
                {/* <a href="#" className="hover:text-gray-300">
                  <Image src={Linkedin} />
                </a> */}
                <a href="#" className="hover:text-gray-300">
                  <Image src={Call} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Image src={Mail} />
                </a>
              </div>
            </div>

            {/* Right Side Links (now in the middle) */}
            <nav className="flex flex-col space-y-4 md:space-y-6 mt-10 text-xl text-start">
              <Link href="/all-blog" className="hover:underline">
                Blog
              </Link>
              <Link href="/contact-us" className="hover:underline">
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
      <div className="text-center md:text-sm text-xs mt-2 bg-white ">
        <Link href="/privacy-policy" className="hover:underline md:mx-2">
          Privacy Policy
        </Link>{" "}
        |
        <Link href="/refund-return-policy" className="hover:underline md:mx-2">
          Return & Refunds
        </Link>{" "}
        |
        <Link
          href="/shipping-and-delivery-policy"
          className="hover:underline md:mx-2"
        >
          Shipping
        </Link>{" "}
        |
        <Link href="/terms-and-conditions" className="hover:underline md:mx-2">
          Terms & Conditions
        </Link>
      </div>
    </>
  );
};

export default Footer;