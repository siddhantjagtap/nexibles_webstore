"use client"
import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";
import AddAddress from './AddAddress';
import { AiFillCloseSquare } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import UpdatedAddress from './UpdateAddress';
import { useAuth } from '@/utils/authContext';
import { toast } from 'react-toastify';
import { SiTicktick } from "react-icons/si";
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
export const PaymentDelivery = ({ savedAddresses }) => {
    const [showAddAddress, setShowAddAddress] = useState(false);
    const [showUpdateAddress, setShowUpdateAddress] = useState(false);
    const [selectedAddressId, setSelectedAddressId] = useState(null);
    const { user } = useAuth();
    const handleAddAddressClick = () => {
        setShowAddAddress(true);
    };
    const handleEditAddress = (id) => {
        setShowUpdateAddress(true);
        setSelectedAddressId(id);
    };

    const handleCloseModal = () => {
        setShowAddAddress(false);
        setShowUpdateAddress(false);
    };

    const handleDeleteAddress = async (id) => {
        console.log("indexindeleteaddress", handleDeleteAddress);
        try {
            const response = await fetch(`https://nexiblesapp.barecms.com/api/customerAddress/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to delete address');
            }
            const data = await response.json();
            console.log('Address deleted successfully:', data);
            toast.success("Address deleted successfully");
            window.location.reload();
        } catch (error) {
            console.error('Failed to delete address:', error);
        }
    };

    const handleSetDefaultAddress = async (customerId, addressId) => {
        console.log("customeridin Default address", customerId);
        console.log("addressid in default function", addressId);
        try {
            const response = await fetch(`https://nexiblesapp.barecms.com/api/customerAddress/default/${customerId}/${addressId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Failed to set address as default');
            }
            const data = await response.json();
            window.location.reload();
            toast.success("Address set as default successfully");
            console.log('Address set as default successfully:', data);
        } catch (error) {
            console.error('Failed to set address as default:', error);
        }
    };


    return (
        <div>
            <div className="bg-white py-8 px-10 mt-20 ">
                <p className="text-[#db5c3c] font-gotham-book text-pt-20 mb-4">Saved Addresses</p>
                {savedAddresses?.data?.length > 0 ? (
                    <div className="grid gap-6 mt-6">
                        {savedAddresses.data.map((address, index) => (
                            <div
                                key={index}
                                className="group h-auto w-full border-2 border-[#197d8e]/30 hover:border-[#197d8e] rounded-3xl p-6 
                    hover:shadow-[0_0_30px_rgba(25,125,142,0.1)] transition-all duration-300 bg-white 
                    hover:bg-gradient-to-r hover:from-white hover:to-[#197d8e]/5"
                            >
                                <div className="flex justify-between">
                                    <div className="space-y-3">
                                        {address.isDefault === "1" && (
                                            <span className="inline-flex items-center gap-1 bg-gradient-to-r from-[#197d8e] to-[#155f6c] 
                                text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
                                                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                                Default Address
                                            </span>
                                        )}
                                        <p className="text-gray-900 font-bold text-xl tracking-tight group-hover:text-[#197d8e] 
                            transition-colors">{address.title}</p>
                                        <div className="text-gray-600 space-y-1.5">
                                            <p className="font-medium">{address.address}</p>
                                            {address.address2 && <p>{address.address2}</p>}
                                            <div className="flex gap-2 items-center text-sm">
                                                <p>{address.city},</p>
                                                <p>{address.state}</p>
                                                <p className="font-medium">{address.zip}</p>
                                            </div>
                                            <p className="font-medium text-[#197d8e]">{address.country}</p>
                                            <p className="flex items-center gap-2 text-gray-700 mt-3">
                                                <span className="w-8 h-8 rounded-full bg-[#197d8e]/10 flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-[#197d8e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                </span>
                                                {address.phone}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-end gap-3">
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleEditAddress(address.id)}
                                                className="p-2.5 hover:bg-[#197d8e]/10 rounded-full transition-all duration-200 
                                    hover:scale-110 group/btn"
                                                title="Edit Address"
                                            >
                                                <BiSolidEdit className="text-2xl text-[#197d8e] group-hover/btn:rotate-12 transition-transform" />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteAddress(address.id)}
                                                className="p-2.5 hover:bg-red-50 rounded-full transition-all duration-200 
                                    hover:scale-110 group/btn"
                                                title="Delete Address"
                                            >
                                                <MdDelete className="text-2xl text-[#db5c3c] group-hover/btn:-rotate-12 transition-transform" />
                                            </button>
                                        </div>
                                        {address.isDefault !== "1" && (
                                            <button
                                                className="text-sm bg-[#197d8e]/10 text-[#197d8e] px-4 py-2 rounded-full 
                                    hover:bg-[#197d8e] hover:text-white font-medium transition-all duration-200"
                                                onClick={() => handleSetDefaultAddress(user?.result?.customerId || user?.customerId, address.id)}
                                            >
                                                Make Default
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="border border-[#197d8e] rounded-3xl p-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-[#db5c3c] font-gotham-rounded-bold text-lg md:text-xl mb-4">
                                No Addresses Found
                            </h2>
                            <p className="text-gray-700 mb-6 font-gotham-light ">
                                {`You haven't added any addresses yet. Add your first address to get started.`}
                            </p>
                            <button
                                onClick={handleAddAddressClick}
                                className="inline-block bg-[#db5c3c] text-white font-bold rounded-full px-6 py-3 text-sm md:text-base"
                            >
                                Add New Address
                            </button>
                        </div>
                    </div>
                )}


                {showAddAddress && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            {/* <button onClick={handleCloseModal} className="absolute top-0 right-0 m-3">
                                <AiFillCloseSquare className="text-white mr-4 cursor-pointer" size={32} />
                            </button> */}
                            <AddAddress
                                setShowAddAddress={setShowAddAddress}
                            />
                        </div>
                    </div>
                )}
                {showUpdateAddress && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            {/* <button onClick={handleCloseModal} className="absolute top-0 right-0 m-3">
                                <AiFillCloseSquare className="text-white mr-4 cursor-pointer" size={32} />
                            </button> */}
                            <UpdatedAddress
                                setShowUpdateAddress={setShowUpdateAddress}
                                addressId={selectedAddressId}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}