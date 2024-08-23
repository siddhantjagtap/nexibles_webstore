"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoCartOutline, IoMenuOutline, IoCloseOutline, IoPersonOutline } from "react-icons/io5";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { CiFolderOn } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";
// import { useAuth } from "@/utils/authContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showPersonDropdown, setShowPersonDropdown] = useState(false);
//   const { user, logout } = useAuth();
  const [cartItemCount, setCartItemCount] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    // Count unique products
    const uniqueProductsCount = cartItems.length;
    setCartItemCount(uniqueProductsCount);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleToggleOpen = () => setShowPersonDropdown(!showPersonDropdown);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 containers  ${hasScrolled ? 'bg-white shadow-xl' : 'bg-transparent'}`}>
      <div className=" mx-auto  h-20 flex items-center justify-between">
        <Link href="/" className="mr-auto">
          <div className="relative px-2 sm:px-4 py-2 sm:py-4 rounded-b-lg ">
            <Image src="/home/nexible.gif" alt="Nexibles" width={100} height={30} className="sm:w-[150px] sm:h-[25px]" priority />
          </div>
        </Link>

        <div className="flex items-center space-x-2 sm:space-x-6">
          <Link href="/shop" className="hidden sm:flex items-center text-gray-900">
            <LuShoppingBag size={23} />
            <span className="ml-2 text-sm sm:text-base">Shop</span>
          </Link>
          <Link href="/my-cart" className="relative flex items-center text-gray-900">
            <div className="relative">
              <IoCartOutline size={24} />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-900 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </div>
            <span className="ml-2 text-sm sm:text-base hidden sm:inline">Cart</span>
          </Link>
          
            <Link href="/my-orderhistory" className="hidden sm:flex items-center text-gray-900">
              <CiFolderOn size={28} />
              <span className="ml-2">My Orders</span>
            </Link>
          
          {/* <div className="relative hidden sm:flex items-center" onClick={handleToggleOpen}>
            <IoPersonOutline size={24} />
            <span className="ml-2 cursor-pointer text-sm sm:text-base">
              {user ? `Hello, ${user?.result?.firstName || user?.firstName}` : "Sign In"}
            </span>
            {showPersonDropdown && (
              <div className="absolute mt-0 top-8 right-0 bg-white text-gray-900 p-4 shadow-md flex flex-col items-center w-40 rounded-md">
                {user ? (
                  <>
                    <Link href="/my-dashboard" className="text-white text-center px-4 py-2 w-full bg-[#30384E] rounded-md transition duration-300 ease-in-out mb-2">
                      Profile
                    </Link>
                    <button onClick={logout} className="text-white text-center px-4 py-2 w-full bg-[#30384E] rounded-md transition duration-300 ease-in-out">
                      Log out
                    </button>
                  </>
                ) : (
                  <Link href="/login" className="text-white px-2 text-center py-1 w-full bg-[#30384E] rounded-md transition duration-300 ease-in-out">
                    Sign In
                  </Link>
                )}
              </div>
            )}
          </div> */}
          <button className="text-gray-900" onClick={toggleMenu}>
            <IoMenuOutline size={24} />
          </button>
        </div>
      </div>

      {/* Full-screen menu */}
      <div className={`fixed top-0 left-0 w-full h-full z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col md:flex-row h-full">
          {/* Red half - only visible on larger screens */}
          <div className="hidden md:flex w-2/5 bg-red-700 p-8 flex-col justify-center items-center">
            <div className="text-center">
              <h2 className="text-white text-3xl font-bold mb-4">Meet With Us</h2>
              <p className="text-white text-xl mb-2">Art NEXT Pvt Ltd,</p>
              <p className="text-white text-xl mb-2">A/463, Ground Floor,</p>
              <p className="text-white text-xl mb-2">TTC Industrial Area,</p>
              <p className="text-white text-xl mb-2">Mahape, MIDC, Navi Mumbai,</p>
              <p className="text-white text-xl mb-4">Thane - 400710, MH, India</p>
              <h2 className="text-white text-3xl font-bold mb-2">Call US</h2>
              <p className="text-white text-xl">+91 9821045101</p>
            </div>
          </div>

          {/* White part - full screen on mobile */}
          <div className="w-full md:w-3/5 bg-white  p-6 md:p-8 flex md:text-start text-center items-center justify-center min-h-screen">
            <div className="w-full containers">
              <button onClick={toggleMenu} className="absolute top-8 right-20 text-black">
                <IoCloseOutline size={32} />
              </button>
              <ul className="text-black text-2xl md:text-4xl mt-12 md:mt-0">
                <li className="mb-6">
                  <Link href="/" onClick={toggleMenu}>Home</Link>
                </li>
                <li className="mb-6 relative">
                  <h2 onClick={toggleDropdown} className="flex md:text-start items-center md:justify-start justify-center">
                    What We Do
                    <span className="ml-2">{isDropdownOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}</span>
                  </h2>
                  {isDropdownOpen && (
                    <ul className="pl-4 mt-2 space-y-2 text-lg">
                      <li><Link href="/pouches-page" onClick={toggleMenu}>Nexi<sup>TM</sup> Pouches</Link></li>
                      <li><Link href="/sleeves-page" onClick={toggleMenu}>Nexi<sup>TM</sup> Sleeves</Link></li>
                      <li><Link href="/roll-stock-page" onClick={toggleMenu}>Nexi<sup>TM</sup> Roll Stock</Link></li>
                      <li><Link href="/labels-page" onClick={toggleMenu}>Nexi<sup>TM</sup> Labels</Link></li>
                    </ul>
                  )}
                </li>
                <li className="mb-6"><Link href="/about" onClick={toggleMenu}>About Nexibles</Link></li>
                <li className="mb-6"><Link href="/contact" onClick={toggleMenu}>Contact Us</Link></li>
                <li><Link href="/signin" onClick={toggleMenu}>Sign in</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;


