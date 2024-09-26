"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import cart from "../../../public/Homepage/Header_Icon/Cart_Icon.svg";
import profile from "../../../public/Homepage/Header_Icon/Profile_Icon.svg";
import shop from "../../../public/Homepage/Header_Icon/Search_Button_Icon.svg";
// import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import {
  IoCartOutline,
  IoMenuOutline,
  IoCloseOutline,
  IoSearchOutline,
} from "react-icons/io5";

import { IoPersonOutline } from "react-icons/io5";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { CiFolderOn } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";
import { useAuth } from "@/utils/authContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [showPersonDropdown, setShowPersonDropdown] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const uniqueProductsCount = cartItems.length;
    setCartItemCount(uniqueProductsCount);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleToggleOpen = () => setShowPersonDropdown(!showPersonDropdown);

  const iconColor = hasScrolled ? "text-black" : "text-black";
  const handleProfileClick = () => {
    if (user) {
      // If user is logged in, redirect to profile page
      window.location.href = "/my-dashboard";
    } else {
      // If user is not logged in, redirect to login page
      window.location.href = "/login";
    }
  };


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasScrolled ? "bg-white shadow-xl" : ""
        }`}
    >
      <div className="flex flex-col justify-between px-4 py-2 sm:px-6">
        <div className="w-full flex justify-between">
          <Link href="/" className="mr-auto">
            <div className="relative px-2 sm:px-4 py-2 sm:py-4 rounded-b-lg">
              <Image
                src="/home/nexible.gif"
                alt="Nexibles"
                width={100}
                height={30}
                className="sm:w-[150px] sm:h-[25px]"
                priority
                layout=""
              />
            </div>
          </Link>

          <div className="flex items-center space-x-4 sm:space-x-6">
            <Link
              href="/shop"
              className={`hidden sm:flex items-center ${iconColor}`}
            >
              <Image
                src={shop}
                alt="Shop"
                width={23}
                height={23}
                className="sm:w-[30px] sm:h-[30px]"
              />
            </Link>
<<<<<<< HEAD

=======
            
>>>>>>> 34ad5f8cece771087819216dd6c6a422b86befb6
            <div
            className="relative hidden sm:flex text-black items-center cursor-pointer group"
            onClick={handleProfileClick}
          >
            <Image
              src={profile}
              width={23}
              height={23}
              alt="Profile"
              className="sm:w-[30px] sm:h-[30px]"
            />
            <div className="absolute p-4 top-10 right-0 font-bold bg-white border border-[#197d8e] rounded-xl w-[15rem] h-auto text-[#db5c3c] flex items-center  shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-wrap">
              Sign in to view your profile and track your orders.
            </div>
          </div>
            <Link
              href="/my-cart"
              className={`relative flex items-center ${iconColor}`}
            >
              <Image
                src={cart}
                alt="Cart"
                width={23}
                height={23}
                className="sm:w-[30px] sm:h-[30px]"
              />
              {cartItemCount > 0 && (
                <span className="absolute text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"></span>
              )}
            </Link>
            <button
              className={`flex items-center space-x-2 ${iconColor} md:hidden`}
              onClick={toggleMenu}
            >
              <IoMenuOutline size={30} />
            </button>
          </div>
        </div>

        {/* New line for navigation links */}
        {/* Updated navigation links */}
        <div className="hidden md:flex space-x-8 text-[#197d8e] text-2xl font-bold mt-2 justify-end">
          <Link href="/celebrations">Celebrations</Link>
          <Link href="/customisation">Customisations</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>
      </div>

      {/* Full-screen menu with background image */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        style={{
          backgroundImage: "url('/Home/nexibles-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full bg-transparent p-6 md:p-8 flex items-center justify-end min-h-screen relative">
          <button
            onClick={toggleMenu}
            className="absolute top-8 right-8 text-black"
          >
            <IoCloseOutline size={32} />
          </button>
          <ul className="text-black text-2xl md:text-4xl mt-12 md:mt-0 space-y-6 text-right">
            <li>
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/celebrations" onClick={toggleMenu}>
                Celebrations
              </Link>
            </li>
            <li>
              <Link href="/customisation" onClick={toggleMenu}>
                Customisation
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={toggleMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact-us" onClick={toggleMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;







