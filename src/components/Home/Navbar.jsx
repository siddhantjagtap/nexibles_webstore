"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  IoMenuOutline,
  IoCloseOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { useAuth } from "@/utils/authContext";
import cart from "../../../public/Homepage/Header_Icon/Cart_Icon.svg";
import profile from "../../../public/Homepage/Header_Icon/Profile_Icon.svg";
import shop from "../../../public/Homepage/Header_Icon/Search_Button_Icon.svg";
import logo from "../../../public/Home/Nexigiting Logo Without Background.gif";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { user, logout } = useAuth();

  // Function to fetch categories
  const useFetchCategories = (token) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://nexiblesapp.barecms.com/api/category_master",
            {
              method: "GET",
              headers: {
                "Content-type": "application/json",
                "API-Key": token,
              },
            }
          );
          const result = await response.json();
          if (result.status === "success") {
            const filteredData = result.data.filter(
              (item) =>
                item.origin && item.origin.toLowerCase() === "nexigifting"
            );
            setData(filteredData);
          } else {
            setError(result.error);
          }
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, [token]);

    return { data, loading, error };
  };

  // Use the categories hook
  const { data: categories, loading: categoriesLoading } = useFetchCategories(
    "irrv211vui9kuwn11efsb4xd4zdkuq"
  );

  // Handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filtered = categories.filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  // Convert category name to URL-friendly slug with %20 for spaces
  const createSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/ /g, "%20")
      .replace(/[^a-z0-9%20]/g, "")
      .replace(/(^%20|%20$)/g, "");
  };

  // Handle search result click with %20 encoded URLs
  const handleSearchResultClick = (category) => {
    const slug = createSlug(category.name);
    router.push(`/occasions/${slug}`);
    setSearchQuery("");
    setSearchResults([]);
    setIsSearchFocused(false);
  };

  // Update cart count from localStorage
  const updateCartCount = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const filteredCart = cartItems.filter((item) => item.isFinalProduct);
    setCartItemCount(filteredCart.length);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cart count effect
  useEffect(() => {
    updateCartCount();
    const handleStorageChange = () => updateCartCount();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleProfileClick = () => {
    router.push(user ? "/my-dashboard" : "/login");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasScrolled ? "bg-white shadow-xl" : ""
        }`}
    >
      <div className="flex flex-col justify-between px-4 py-2 sm:px-6 font-gotham-light">
        {/* First Row - Logo and Navigation */}
        <div className="w-full flex flex-col md:flex-row md:items-center">
          {/* Top Section (Logo and Main Nav) */}
          <div className="w-full flex justify-between items-center">
            <Link href="/" className="mr-auto">
              <div className="relative px-2 sm:px-4 py-2 sm:py-4 rounded-b-lg">
                <Image
                  src={logo}
                  alt="Nexibles"
                  width={120}
                  height={30}
                  className="sm:w-[220px] sm:h-[40px]"
                  priority
                />
              </div>
            </Link>

            <div className="flex items-center space-x-2 sm:space-x-2">
              <div className="hidden md:flex space-x-8 text-[#197d8e] text-xl mt-2">
                <Link href="/occasions">Occasions</Link>
                <Link href="/customise">Customise</Link>
                <Link href="/about-us">About Us</Link>
                <Link href="/contact-us">Contact Us</Link>
              </div>

              {/* Desktop Search Bar */}
              <div className="hidden md:block relative mx-4 flex-grow max-w-xl">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search occasions..."
                    className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-[#197d8e] focus:outline-none focus:border-gray-300"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() =>
                      setTimeout(() => setIsSearchFocused(false), 200)
                    }
                  />
                  <IoSearchOutline
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#197d8e]"
                    size={20}
                  />
                </div>

                {/* Desktop Search Results Dropdown */}
                {isSearchFocused && searchResults.length > 0 && (
                  <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    {searchResults.map((result) => (
                      <div
                        key={result.id}
                        className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSearchResultClick(result)}
                      >
                        {result.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Profile Icon */}
              <div
                className="relative hidden sm:flex text-black items-center cursor-pointer group"
                onClick={handleProfileClick}
              >
                <Image
                  src={profile}
                  width={23}
                  height={23}
                  alt="Profile"
                  className="sm:w-[25px] sm:h-[25px]"
                />
                <span className="ml-1 md:block hidden text-[#197d8e] text-lg">
                  {user
                    ? `Hello, ${user?.result?.firstName || user?.firstName}`
                    : ""}
                </span>
                {!user && (
                  <div className="absolute p-4 top-10 right-0 font-gotham-book bg-white border border-[#197d8e] rounded-xl w-[15rem] h-auto text-[#db5c3c] flex items-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-wrap">
                    Sign in to view your profile and track your orders.
                  </div>
                )}
              </div>

              {/* Profile Icon in Mobile View with Hover Effect */}
              {user && user.result ? (
                <div
                  className="relative flex items-center text-black cursor-pointer sm:hidden mr-4 group"
                  onClick={handleProfileClick}
                >
                  <Image
                    src={profile}
                    width={23}
                    height={23}
                    alt="Profile"
                    className="w-[25px] h-[25px]"
                  />

                  {/* Tooltip to Show User's First Name */}
                  {user.result.firstName && (
                    <div className="absolute top-10 left-0 bg-white text-[#197d8e] text-sm font-medium p-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      Hello, {user.result.firstName}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href="/login"
                  className="md:hidden text-[#db5c3c] text-xs font-gotham-book border border-[#db5c3c] py-2 px-2 rounded-full hover:bg-[#db5c3c] hover:text-white transition duration-300"
                >
                  Login
                </Link>
              )}
              {/* Cart Icon */}
              <Link href="/my-cart" className="relative flex items-center">
                <Image
                  src={cart}
                  alt="Cart"
                  width={23}
                  height={23}
                  className="sm:w-[25px] sm:h-[25px]"
                />
                {cartItemCount > 0 && (
                  <span className="absolute text-white text-xs font-gotham-bold bg-red-500 rounded-full h-4 w-4 flex items-center justify-center top-[-5px] right-[-5px]">
                    {cartItemCount}
                  </span>
                )}
              </Link>


              {/* Mobile Menu Button */}
              <button
                className="flex items-center space-x-2 md:hidden"
                onClick={toggleMenu}
              >
                <IoMenuOutline size={30} />
              </button>
            </div>
          </div>

          {/* Mobile Search Bar - Second Row */}
          {!categoriesLoading && (
            <div className="md:hidden w-full mt-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search occasions..."
                  className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-[#197d8e] focus:outline-none focus:border-gray-300"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() =>
                    setTimeout(() => setIsSearchFocused(false), 200)
                  }
                />
                <IoSearchOutline
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#197d8e]"
                  size={20}
                />
              </div>

              {/* Mobile Search Results Dropdown */}
              {isSearchFocused && searchResults.length > 0 && (
                <div className="absolute w-[calc(100%-2rem)] mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  {searchResults.map((result) => (
                    <div
                      key={result.id}
                      className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSearchResultClick(result)}
                    >
                      {result.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        style={{ backgroundColor: "#197d8e" }}
      >
        <div className="w-full bg-transparent p-6 md:p-8 flex items-center justify-end min-h-screen relative">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white"
          >
            <IoCloseOutline size={32} />
          </button>
          <ul className="text-white text-2xl md:text-4xl mt-12 md:mt-0 space-y-6 text-right">
            <li>
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/occasions" onClick={toggleMenu}>
                Occasions
              </Link>
            </li>
            <li>
              <Link href="/customise" onClick={toggleMenu}>
                Customise
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
