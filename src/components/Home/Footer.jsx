
"use client";
import React from "react";
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
        className="text-white p-8"
        style={{
          fontSize: "14pt",
          backgroundImage: "url('/Homepage/Backgrounds/Footer.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-6">
            {/* Left Navigation */}
            <nav className="flex flex-col items-start space-y-6">
              <Link href="/" className="hover:underline font-gotham-book text-lg">
                Home
              </Link>
              <Link href="/about-us" className="hover:underline font-gotham-book text-lg">
                About Us
              </Link>
              <Link href="/occasions" className="hover:underline font-gotham-book text-lg">
                Occasions
              </Link>
              <Link href="/customise" className="hover:underline font-gotham-book text-lg">
                Customise
              </Link>
            </nav>


            {/* Right Navigation */}
            <nav className="flex flex-col items-end space-y-6">
              <Link href="/all-blog" className="hover:underline font-gotham-book text-lg">
                Blogs
              </Link>
              <Link href="/contact-us" className="hover:underline font-gotham-book text-lg">
                Contact Us
              </Link>
              <Link href="/tracking" className="hover:underline font-gotham-book text-lg">
                Tracking Link
              </Link>
              <Link href="/faq" className="hover:underline font-gotham-book text-lg">
                {`FAQs`}
              </Link>
            </nav>
          </div>
        </div>
        {/* Newsletter Section */}
        <div className="flex flex-col md:mt-0 mt-[2rem] items-center">
          <h3 className="font-gotham-bold text-2xl text-center mb-4">
            Sign up for our Newsletter!
          </h3>
          <form
            className="w-full max-w-sm flex items-center justify-between border border-1 rounded-full overflow-hidden"
            onSubmit={handleSubscribe}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@.com"
              className="px-4 py-2 w-full bg-transparent text-white placeholder-white font-gotham-book"
              required
            />
            <button className="text-white bg-primary rounded-r-full px-3 py-2 flex items-center justify-center">
              <BsSendFill />
            </button>
          </form>
          <div className="flex justify-center gap-6 my-6">
            <a
              href="https://www.instagram.com/nexigifting"
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

      </footer>

      {/* Bottom Links */}
      {/* <div className="bg-white text-center py-4">
        <div className="flex justify-center items-center gap-4 text-sm">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="/refund-return-policy" className="hover:underline">
            Return & Refunds
          </Link>
          <span>|</span>
          <Link href="/shipping-and-delivery-policy" className="hover:underline">
            Shipping
          </Link>
          <span>|</span>
          <Link href="/terms-and-conditions" className="hover:underline">
            Terms & Conditions
          </Link>
        </div> */}
        {/* Bottom Links */}
<div className="bg-white text-center py-4">
  <div className="flex flex-wrap justify-center items-center gap-3 text-sm">
    <Link href="/privacy-policy" className="hover:underline">
      Privacy Policy
    </Link>
    <span>|</span>
    <Link href="/refund-return-policy" className="hover:underline">
      Return & Refunds
    </Link>
    <span>|</span>
    <Link href="/shipping-and-delivery-policy" className="hover:underline">
      Shipping
    </Link>
    <span>|</span>
    <Link href="/terms-and-conditions" className="hover:underline">
      Terms & Conditions
    </Link>
  </div>
</div>

      {/* </div> */}
    </>
  );
};

export default Footer;
