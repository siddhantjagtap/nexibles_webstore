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
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    logout();
    setShowLogoutConfirm(false);
  };

  return (
    <div className="bg-white mt-24 md:mt-9">
      <div className="px-4 md:px-10 py-10 md:py-20 w-full max-w-[400px]">
        <div className="mb-4 py-4 md:py-6 px-4 border border-[#197d8e] rounded-3xl flex items-center">
          <Image
            src={profile.src}
            width={30}
            height={30}
            className="mr-4"
            alt="Profile"
          />
          <span className="text-[#db5c3c] text-lg md:text-xl font-gotham-rounded-bold">
            {user?.result?.firstName}
          </span>
        </div>
        <div className="border border-[#197d8e] rounded-3xl overflow-hidden">
          {/* Your existing menu items */}
          <button
            className="w-full border-b border-[#197d8e] py-3 md:py-4 px-4 flex justify-between items-center bg-white"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <Link href="my-dashboard" className="text-[#db5c3c] font-gotham-rounded-bold">
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
              <Link href="my-dashboard" className="text-gray-500 text-sm  font-gotham-light py-1">
                Profile Details
              </Link>
              <Link href="all-addresses" className="text-gray-500  font-gotham-light text-sm py-1">
                Address Book
              </Link>
            </div>
          )}
          <div className="py-3 md:py-2 px-4 border-b border-[#197d8e]">
            <Link href="my-orderhistory" className="text-[#db5c3c] font-gotham-rounded-bold">
              My Orders
            </Link>
          </div>
          <div className="py-3 md:py-2 px-4 border-b border-[#197d8e]">
            <Link href="contact" className="text-[#db5c3c] font-gotham-rounded-bold">
              Contact Us
            </Link>
          </div>
          <div className="py-3 md:py-2 px-4">
            <button
              onClick={handleLogoutClick}
              className="text-[#db5c3c] font-gotham-rounded-bold"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-3xl shadow-lg max-w-md w-full mx-4">
            <div className="text-center space-y-4">
              <h2 className="text-[#db5c3c] font-gotham-rounded-bold text-xl">
                Confirm Logout
              </h2>
              <p className="text-gray-700 font-gotham-light">
                Are you sure you want to logout?
              </p>
              <div className="flex gap-4 justify-center mt-6">
                <button
                  onClick={() => setShowLogoutConfirm(false)}
                  className="px-6 py-2 rounded-full font-gotham-book text-[#197d8e] bg-[#197d8e]/10 
                  hover:bg-[#197d8e]/20 transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmLogout}
                  className="px-6 py-2 rounded-full font-gotham-rounded-bold text-white bg-[#db5c3c] 
                  hover:bg-[#c54e33] transition-all duration-200"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}