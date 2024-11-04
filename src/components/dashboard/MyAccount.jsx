"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useAuth } from "@/utils/authContext";
import Image from "next/image";
import profile from "../../../public/Homepage/Header_Icon/Profile_Icon.svg";

export default function MyAccount() {
  const { user, logout } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="bg-white mt-4 md:mt-9">
      <div className="px-4 md:px-10 py-10 md:py-20">
        <div className="mb-4 py-4 md:py-6 px-4 border border-[#197d8e] rounded-3xl flex items-center">
          <Image
            src={profile.src}
            width={30}
            height={30}
            className="mr-4"
            alt="Profile"
          />
          <span className="text-[#db5c3c] text-lg md:text-xl font-bold">
            {user?.result?.firstName}
          </span>
        </div>
        <div className="border border-[#197d8e] rounded-3xl overflow-hidden">
          <button
            className="w-full border-b border-[#197d8e] py-3 md:py-4 px-4 flex justify-between items-center bg-white"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <Link href="my-dashboard" className="text-[#db5c3c] font-bold">
              My Profile
            </Link>
            {isProfileOpen ? (
              <ChevronUp className="text-[#db5c3c]" size={20} />
            ) : (
              <ChevronDown className="text-[#db5c3c]" size={20} />
            )}
          </button>
          {isProfileOpen && (
            <div className="px-4 py-2 flex flex-col">
              <Link href="my-dashboard" className="text-gray-500 text-sm py-1">
                Profile Details
              </Link>
              <Link href="all-addresses" className="text-gray-500 text-sm py-1">
                Address Book
              </Link>
            </div>
          )}
          <div className="py-3 md:py-2 px-4 border-b border-[#197d8e]">
            <Link href="my-orderhistory" className="text-[#db5c3c] font-bold">
              My Orders
            </Link>
          </div>
          <div className="py-3 md:py-2 px-4 border-b border-[#197d8e]">
            <Link href="contact" className="text-[#db5c3c] font-bold">
              Contact Us
            </Link>
          </div>
          <div className="py-3 md:py-2 px-4">
            <button onClick={logout} className="text-[#db5c3c] font-bold">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



// //old
// "use client";
// import Link from "next/link";
// import { FaChevronRight } from "react-icons/fa";
// import React, { useState } from 'react';
// import { ChevronDown, ChevronUp, User } from 'lucide-react';
// import { useAuth } from "@/utils/authContext";
// import Image from "next/image";
// import profile from "../../../public/Homepage/Header_Icon/Profile_Icon.svg";
// export default function MyAccount() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [selectedIndex, setSelectedIndex] = useState(null);

//   const handleMouseEnter = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(null);
//   };
//   const { user, logout } = useAuth();
//   const handleSelectItem = (index) => {
//     if (selectedIndex === index) {
//       setSelectedIndex(null); // Deselect if clicked again
//     } else {
//       setSelectedIndex(index);
//     }
//     setHoveredIndex(null); // Reset hoveredIndex when item is clicked
//   };
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   return (
//     <div className="bg-white mt-9">
//       <div className="px-10 py-20">
//         {/* <h3 className="text-[#db5c3c]gray-900 font-bold text-[#db5c3c]xl">My Account</h3> */}
//         <div className="">
//         <div className="mb-4 py-6 px-4 border border-[#197d8e] rounded-3xl flex items-center">
//         <Image src={profile.src} width={30} height={30} className="mr-4"/>
//         <span className="text-[#db5c3c] text-xl font-bold">{user?.result?.firstName}</span>
//       </div>
//       <div className="border border-[#197d8e] rounded-3xl overflow-hidden">
//         <button
//           className="w-full border-b border-[#197d8e] py-4 px-4 flex justify-between items-center bg-white"
//           onClick={() => setIsProfileOpen(!isProfileOpen)}
//         >
//           <Link href="my-dashboard" className="text-[#db5c3c] font-bold ">My Profile</Link>
//           {isProfileOpen ? <ChevronUp className="text-[#db5c3c] " size={20} /> : <ChevronDown className="text-[#db5c3c]gray-400" size={20} />}
//         </button>
//         {isProfileOpen && (
//           <div className="px-4 py-2 flex flex-col ">
//             <Link href="my-dashboard" className="text-gray-500 text-sm py-1">Profile Details</Link>
//             <Link href="my-dashboard" className="text-gray-500 text-sm py-1">Address Book</Link>
//           </div>
//         )}
//         <div className="mt-2 py-2 px-4 border-b border-[#197d8e]">
//         <Link href="my-orderhistory" className="text-[#db5c3c] font-bold">My Orders</Link>
//       </div>

//       <div className="mt-2 py-2 px-4 border-b border-[#197d8e]">
//         <Link href="contact" className="text-[#db5c3c] font-bold">Contact Us</Link>
//       </div>

//       <div className="mt-2 py-2 px-4">
//         <button onClick={logout} className="text-[#db5c3c] font-bold">Logout</button>
//       </div>
//       </div>
//         </div>
//       </div>
//     </div>
//   );
// }
