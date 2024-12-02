"use client";
import React, { useState } from "react";
import { useAuth } from "@/utils/authContext";
import { MdOutlineModeEdit } from "react-icons/md";
import Link from "next/link";
import AddAddress from "./AddAddress";

const MyDashboard = ({ savedAddresses }) => {
  const [showAddAddress, setShowAddAddress] = useState(false);
  const { user } = useAuth();
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const handleAddAddressClick = () => {
    setShowAddAddress(true);
  };
  return (
    <div className="bg-white md:py-20 md:mt-10 px-4 md:px-10">
      {/* Profile Details Section */}
      <div className="border border-[#197d8e] rounded-3xl mb-8">
        <div className="border-b border-[#197d8e] flex justify-between items-center p-4 md:p-6">
          <div className="text-[#db5c3c] font-gotham-rounded-bold text-lg md:text-xl">
            Profile Details
          </div>
          {/* <MdOutlineModeEdit size={40} className="text-[#197d8e]" /> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div>
            <p className="text-gray-700 font-gotham-book ">{user?.result?.firstName || "N/A"}</p>
          </div>
          <div>
            <p className="text-gray-700 font-gotham-book">{user?.result?.lastName || "N/A"}</p>
          </div>
          <div>
            <p className="text-gray-700 font-gotham-book">
              {user?.result?.emailAddress || "N/A"}
            </p>
          </div>
          <div>
            <p className="text-gray-700 font-gotham-book">{user?.result?.mobile}</p>
          </div>
        </div>
      </div>

      {/* Address Book Section */}
      {savedAddresses?.data?.length > 0 ? (
        <div className="border border-[#197d8e] rounded-3xl md:mb-0 mb-8">
          <div className="border-b border-[#197d8e] p-4 md:p-6">
            <div className="text-[#db5c3c] font-gotham-rounded-bold text-lg md:text-xl">
              Address Book
            </div>
          </div>
          <div className="flex flex-wrap gap-6 p-4 md:p-6 font-gotham-book ">
            {savedAddresses.data
              .filter((address) => address.isDefault === "1")
              .map((address, index) => (
                <div key={index} className="w-full md:w-[20rem] mb-4 md:mb-0">
                  <p className="text-gray-700 text-pt-18 font-gotham-book">
                    {address.title || "N/A"}
                  </p>
                  <p className="text-gray-700">{address.address || "N/A"}</p>
                  <p className="text-gray-700">{address.address2 || "N/A"}</p>
                  <p className="text-gray-700">{address.city || "N/A"}</p>
                  <p className="text-gray-700">{address.state || "N/A"}</p>
                  <p className="text-gray-700">{address.zip || "N/A"}</p>
                  <p className="text-gray-700">{address.country || "N/A"}</p>
                  <p className="text-gray-700">{address.phone || "N/A"}</p>
                </div>
              ))}
          </div>
          <div className="flex justify-center pb-6">
            <Link
              href="/all-addresses"
              className="bg-[#db5c3c] text-white font-gotham-bold rounded-full px-6 py-3 text-sm md:text-base"
            >
              View Addresses
            </Link>
          </div>
        </div>
      ) : (
        <div className="border border-[#197d8e] rounded-3xl p-8">
          <div className="text-center space-y-4">
            <h2 className="text-[#db5c3c] font-gotham-rounded-bold text-lg md:text-xl mb-4">
              No Addresses Found
            </h2>
            <p className="text-gray-700 mb-6 font-gotham-light">
              {`You haven't added any addresses yet. Add your first address to get started.`}
            </p>
            <button
              onClick={handleAddAddressClick}
              className="inline-block bg-[#db5c3c] text-white font-gotham-rounded-bold rounded-full px-6 py-3 text-sm md:text-base"
            >
              Add New Address
            </button>
          </div>
        </div>
      )}

      {showAddAddress && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <AddAddress
              setShowAddAddress={setShowAddAddress}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyDashboard;

