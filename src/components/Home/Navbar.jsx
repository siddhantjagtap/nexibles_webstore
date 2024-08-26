"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IoCartOutline,
  IoMenuOutline,
  IoCloseOutline,
  IoSearchOutline,
} from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

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

  const iconColor = hasScrolled ? "text-black" : "text-black";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled ? "bg-white shadow-xl" : "bg-white/[.4]"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-2 sm:px-6">
        <Link href="/" className="mr-auto">
          <div className="relative px-2 sm:px-4 py-2 sm:py-4 rounded-b-lg">
            <Image
              src="/home/nexible.gif"
              alt="Nexibles"
              width={100}
              height={30}
              className="sm:w-[150px] sm:h-[25px]"
              priority
            />
          </div>
        </Link>

        <div className="flex items-center space-x-4 sm:space-x-6">
          <Link
            href="/shop"
            className={`hidden sm:flex items-center ${iconColor}`}
          >
            <IoSearchOutline size={28} />
          </Link>
          <Link
            href="/my-cart"
            className={`relative flex items-center ${iconColor}`}
          >
            <IoCartOutline size={28} />
            {cartItemCount > 0 && (
              <span className="absolute  text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            
              </span>
            )}
          </Link>

          {/* Menu Icon and Label */}
          <button
            className={`flex items-center space-x-2 ${iconColor}`}
            onClick={toggleMenu}
          >
            <span className="text-lg mt-1">MENU</span>
            <IoMenuOutline size={30} />
          </button>
        </div>
      </div>

      {/* Full-screen menu with background image */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{
          backgroundImage: "url('/Home/nexibles-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full bg-white bg-opacity-75 p-6 md:p-8 flex items-center justify-end min-h-screen relative">
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














// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   IoCartOutline,
//   IoMenuOutline,
//   IoCloseOutline,
//   IoSearchOutline,
// } from "react-icons/io5";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [hasScrolled, setHasScrolled] = useState(false);
//   const [cartItemCount, setCartItemCount] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setHasScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     const uniqueProductsCount = cartItems.length;
//     setCartItemCount(uniqueProductsCount);
//   }, []);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const iconColor = hasScrolled ? "text-black" : "text-white";

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         hasScrolled ? "bg-white shadow-xl" : "bg-transparent"
//       }`}
//     >
//       <div className="flex items-center justify-between px-4 py-2 sm:px-6">
//         <Link href="/" className="mr-auto">
//           <div className="relative px-2 sm:px-4 py-2 sm:py-4 rounded-b-lg">
//             <Image
//               src="/home/nexible.gif"
//               alt="Nexibles"
//               width={100}
//               height={30}
//               className="sm:w-[150px] sm:h-[25px]"
//               priority
//             />
//           </div>
//         </Link>

//         <div className="flex items-center space-x-4 sm:space-x-6">
//           <Link
//             href="/search"
//             className={`hidden sm:flex items-center ${iconColor}`}
//           >
//             <IoSearchOutline size={28} />
//           </Link>
//           <Link
//             href="/my-cart"
//             className={`relative flex items-center ${iconColor}`}
//           >
//             <IoCartOutline size={28} />
//             {cartItemCount > 0 && (
//               <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-900 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                 {cartItemCount}
//               </span>
//             )}
//           </Link>

//           {/* Menu Icon and Label */}
//           <button
//             className={`flex items-center space-x-2 ${iconColor}`}
//             onClick={toggleMenu}
//           >
//             <span className="text-lg mt-1">MENU</span>
//             <IoMenuOutline size={30} />
//           </button>
//         </div>
//       </div>

//       {/* Full-screen menu with background image */}
//       <div
//         className={`fixed top-0 left-0 w-full h-full z-50 transform transition-transform duration-300 ease-in-out ${
//           isMenuOpen ? "translate-y-0" : "-translate-y-full"
//         }`}
//         style={{
//           backgroundImage: "url('/Home/nexibles-1.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="relative w-full h-full bg-white bg-opacity-75 p-6 md:p-8 flex flex-col items-center justify-between">
//           <div className="flex items-center justify-between w-full">
//             {/* Logo inside the menu */}
//             <Link href="/" onClick={toggleMenu}>
//               <Image
//                 src="/home/nexible.gif"
//                 alt="Nexibles"
//                 width={150}
//                 height={40}
//                 className="sm:w-[150px] sm:h-[40px]"
//                 priority
//               />
//             </Link>
//             <div className="flex items-center space-x-4 sm:space-x-6">
//               <Link
//                 href="/search"
//                 onClick={toggleMenu}
//                 className="text-black"
//               >
//                 <IoSearchOutline size={28} />
//               </Link>
//               <Link
//                 href="/my-cart"
//                 onClick={toggleMenu}
//                 className="relative text-black"
//               >
//                 <IoCartOutline size={28} />
//                 {cartItemCount > 0 && (
//                   <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-900 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                     {cartItemCount}
//                   </span>
//                 )}
//               </Link>
//               <button
//                 onClick={toggleMenu}
//                 className="text-black"
//               >
//                 <IoCloseOutline size={32} />
//               </button>
//             </div>
//           </div>

//           <ul className="text-black text-2xl md:text-4xl mt-12 space-y-6 text-center">
//             <li>
//               <Link href="/" onClick={toggleMenu}>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="/about" onClick={toggleMenu}>
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link href="/celebrations" onClick={toggleMenu}>
//                 Celebrations
//               </Link>
//             </li>
//             <li>
//               <Link href="/customisation" onClick={toggleMenu}>
//                 Customisation
//               </Link>
//             </li>
//             <li>
//               <Link href="/blog" onClick={toggleMenu}>
//                 Blog
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact" onClick={toggleMenu}>
//                 Contact Us
//               </Link>
//             </li>
//           </ul>

//           <button
//             className="flex items-center text-black mt-auto"
//             onClick={toggleMenu}
//           >
//             <span className="text-lg mt-1">MENU</span>
//             <IoMenuOutline size={30} />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

//export default Navbar;
