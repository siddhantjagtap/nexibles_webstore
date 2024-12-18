"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Instragram from "../../../public/Homepage/Social_Icons/Insta_Icon.svg";
import Whatsapp from "../../../public/Homepage/Social_Icons/Whatsapp_Icon.svg";
import Call from "../../../public/Homepage/Social_Icons/Call_Icon.svg";
import Mail from "../../../public/Homepage/Social_Icons/Mail_Icon.svg";
import { BsSendFill } from "react-icons/bs";
import { toast } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter a valid email.");
      return;
    }
    try {
      const response = await fetch(
        "https://nexiblesapp.barecms.com/api/subscribe",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "API-Key": "irrv211vui9kuwn11efsb4xd4zdkuq",
          },
          body: JSON.stringify({ email: email }),
        }
      );
      if (response.ok) {
        toast.success("Successfully subscribed!");
        setEmail("");
      } else {
        toast.error("Subscription failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <footer
        className="text-white p-4 sm:p-6 lg:p-8"
        style={{
          backgroundImage: "url('/Homepage/Backgrounds/Footer.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
            {/* Left Navigation */}
            <nav className="flex flex-col space-y-4 md:space-y-6 mt-6 lg:mt-10 text-center sm:text-left">
              <Link
                href="/"
                className="hover:underline font-gotham-book text-base sm:text-lg lg:text-pt-20"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:underline font-gotham-book text-base sm:text-lg lg:text-pt-20"
              >
                About Us
              </Link>
              <Link
                href="/occasions"
                className="hover:underline font-gotham-book text-base sm:text-lg lg:text-pt-20"
              >
                Occasions
              </Link>
              <Link
                href="/customise"
                className="hover:underline font-gotham-book text-base sm:text-lg lg:text-pt-20"
              >
                Customise
              </Link>
            </nav>

            {/* Newsletter Section */}
            <div className="mt-8 lg:mt-16 flex flex-col items-center">
              <h3 className="font-gotham-bold text-xl sm:text-2xl lg:text-pt-20 mb-4 text-center">
                Sign up for our Newsletter!
              </h3>
              <form
                className="w-full max-w-md flex items-center justify-between border border-1 rounded-full overflow-hidden"
                onSubmit={handleSubscribe}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@.com"
                  className="px-4 py-2 bg-transparent text-white text-sm flex-grow placeholder-white font-gotham-book lg:text-pt-20"
                  required
                />
                <button className="text-white mr-3 rounded-md px-2 py-1 focus:outline-none text-sm">
                  <BsSendFill />
                </button>
              </form>
              <div className="flex justify-center gap-4 my-6">
                <a
                  href="https://www.instagram.com"
                  className="transform hover:scale-110 transition-transform"
                >
                  <Image src={Instragram} alt="Instagram" />
                </a>
                <a
                  href="https://wa.me/919821045101"
                  className="transform hover:scale-110 transition-transform"
                >
                  <Image src={Whatsapp} alt="WhatsApp" />
                </a>
                <a
                  href="tel:+919821045101"
                  className="transform hover:scale-110 transition-transform"
                >
                  <Image src={Call} alt="Call" />
                </a>
                <a
                  href="mailto:sales@artnext.in"
                  className="transform hover:scale-110 transition-transform"
                >
                  <Image src={Mail} alt="Email" />
                </a>
              </div>
            </div>

            {/* Right Navigation */}
            <nav className="flex flex-col space-y-4 md:space-y-6 lg:mt-10 text-center sm:text-right">
              <Link
                href="/all-blog"
                className="hover:underline font-gotham-book text-base sm:text-lg lg:text-pt-20"
              >
                Blogs
              </Link>
              <Link
                href="/Contact-us"
                className="hover:underline font-gotham-book text-base sm:text-lg lg:text-pt-20"
              >
                Contact Us
              </Link>
              <Link
                href="/tracking"
                className="hover:underline font-gotham-book text-base sm:text-lg lg:text-pt-20"
              >
                Tracking Link
              </Link>
              <Link
                href="/faq"
                className="hover:underline font-gotham-book text-base sm:text-lg lg:text-pt-20"
              >
                {`FAQ's`}
              </Link>
            </nav>
          </div>
        </div>
      </footer>

      {/* Bottom Links */}
      <div className="text-center py-3 bg-white">
        <div className="flex flex-wrap justify-center items-center gap-2 font-gotham-light text-xs sm:text-sm">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <span className="mx-1">|</span>
          <Link href="/refund-return-policy" className="hover:underline">
            Return & Refunds
          </Link>
          <span className="mx-1">|</span>
          <Link
            href="/shipping-and-delivery-policy"
            className="hover:underline"
          >
            Shipping
          </Link>
          <span className="mx-1">|</span>
          <Link href="/terms-and-conditions" className="hover:underline">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;

// "use client";
// import Link from "next/link";
// import Image from 'next/image';
// import { useState } from "react";
// import Instragram from "../../../public/Homepage/Social_Icons/Insta_Icon.svg";
// import Whatsapp from "../../../public/Homepage/Social_Icons/Whatsapp_Icon.svg";
// // import Linkedin from "../../../public/Homepage/Social_Icons/Linkedin_Icon.svg";
// import Call from "../../../public/Homepage/Social_Icons/Call_Icon.svg";
// import Mail from "../../../public/Homepage/Social_Icons/Mail_Icon.svg";
// import { BsSendFill } from "react-icons/bs";
// import { toast } from "react-toastify";
// const Footer = () => {
//   const [email, setEmail] = useState('');

//   const handleSubscribe = async (e) => {
//     e.preventDefault();
//     if (!email) {
//       toast.error('Please enter a valid email.');
//       return;
//     }
//     try {
//       const response = await fetch('https://nexiblesapp.barecms.com/api/subscribe', {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json',
//           'API-Key': 'irrv211vui9kuwn11efsb4xd4zdkuq',
//         },
//         body: JSON.stringify({ email: email }),
//       });
//       if (response.ok) {
//         toast.success('Successfully subscribed!');
//         setEmail('');
//       } else {
//         toast.error('Subscription failed. Please try again.');
//       }
//     } catch (error) {
//       toast.error('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <>
//       <footer
//         className="text-white p-8"
//         style={{
//           backgroundImage: "url('/Homepage/Backgrounds/Footer.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="container mx-auto">
//           <div className="flex flex-wrap justify-between items-start">
//             <nav className="flex flex-col space-y-4 md:space-y-6 mt-10 text-xl">
//               <Link href="/" className="hover:underline font-gotham-book text-pt-20">
//                 Home
//               </Link>
//               <Link href="/about" className="hover:underline font-gotham-book text-pt-20">
//                 About Us
//               </Link>
//               <Link href="/occasions" className="hover:underline font-gotham-book text-pt-20">
//                 Occasions
//               </Link>
//               <Link href="/customise" className="hover:underline font-gotham-book text-pt-20">
//                 Customise
//               </Link>
//             </nav>
//             <div className="mt-16 md:my-46px">
//               <h3 className="font-gotham-bold text-pt-25 mb-2 text-center">
//                 Sign up for our Newsletter!
//               </h3>
//               <form className="flex items-center justify-between border border-1 rounded-full overflow-hidden" onSubmit={handleSubscribe}>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="john@.com"
//                   className="px-2 md:px-2 py-2 md:py-2 bg-transparent text-white text-sm flex-grow placeholder-white font-gotham-book text-pt-20 justify-center"
//                   required
//                 />
//                 <button className="text-white mr-1 rounded-md px-1 md:px-2 py-1 focus:outline-none text-sm">
//                   <BsSendFill />
//                 </button>
//               </form>
//               <div className="flex justify-center my-6">
//                 <a href="https://www.instagram.com" className="">
//                   <Image src={Instragram} alt="Instagram" />
//                 </a>
//                 <a href="https://wa.me/919821045101" className="">
//                   <Image src={Whatsapp} alt="WhatsApp" />
//                 </a>
//                 <a href="tel:+919821045101" className="">
//                   <Image src={Call} alt="Call" />
//                 </a>
//                 <a href="mailto:sales@artnext.in" className="">
//                   <Image src={Mail} alt="Email" />
//                 </a>
//               </div>
//             </div>

//             {/* Right Side Links (now in the middle) */}
//             <nav className="flex flex-col space-y-4 md:space-y-6 mt-10 text-xl text-end">
//               <Link href="/all-blog" className="hover:underline font-gotham-book text-pt-20">
//                 Blogs
//               </Link>
//               <Link href="/contact-us" className="hover:underline font-gotham-book text-pt-20">
//                 Contact Us
//               </Link>
//               <Link href="/tracking" className="hover:underline  font-gotham-book text-pt-20">
//                 Tracking Link
//               </Link>
//               <Link href="/faq" className="hover:underline font-gotham-book text-pt-20">
//                 FAQ’s
//               </Link>
//             </nav>
//           </div>
//         </div>
//       </footer>
//       {/* Bottom Links */}
//       <div className="text-center md:text-sm text-xs mt-2 bg-white font-gotham-light text-pt-10">
//         <Link href="/privacy-policy" className="hover:underline md:mx-2">
//           Privacy Policy
//         </Link>{" "}
//         |
//         <Link href="/refund-return-policy" className="hover:underline md:mx-2">
//           Return & Refunds
//         </Link>{" "}
//         |
//         <Link
//           href="/shipping-and-delivery-policy"
//           className="hover:underline md:mx-2"
//         >
//           Shipping
//         </Link>{" "}
//         |
//         <Link href="/terms-and-conditions" className="hover:underline md:mx-2">
//           Terms & Conditions
//         </Link>
//       </div>
//     </>
//   );
// };

// export default Footer;
