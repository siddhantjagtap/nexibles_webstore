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
                {/* <h3 className="mb-6 font-bold text-2xl text-gray-900">Delivery</h3>
                <p className="text-gray-900 font-semibold text-lg mb-4">Saved Addresses</p>
                <div className="mt-4">
                    <button onClick={handleAddAddressClick} className="bg-[#30384E] rounded-md text-white px-7 py-3 flex items-center">
                        <FiPlus className="mr-2" />
                        Add a new address
                    </button>
                </div> */}
                {savedAddresses && savedAddresses.data && savedAddresses.data.length > 0 && (
                    <div className="flex flex-wrap gap-6 mt-6">
                        {savedAddresses.data.map((address, index) => (
                            <div
                                key={index}
                                className={`h-auto w-full border border-[#197d8e] rounded-3xl py-2 px-4`}
                            >

                                <div >
                                    <div className='flex justify-between'>
                                        <div>
                                            {address.isDefault === "1" && (
                                                <span className="text-sm text-gray-500">Default Address</span>
                                            )}
                                            <p className="text-gray-900 font-bold">{address.title}</p>
                                            <p className="text-gray-900">{address.address}</p>
                                            <p className="text-gray-900">{address.address2}</p>
                                            <p className="text-gray-900">{address.city}</p>
                                            <p className="text-gray-900">{address.state}</p>
                                            <p className="text-gray-900">{address.zip}</p>
                                            <p className="text-gray-900">{address.country}</p>
                                            <p className="text-gray-900">{address.phone}</p>
                                        </div>
                                        <div className="mt-2">
                                            <button
                                                onClick={() => handleEditAddress(address.id)}
                                                className="text-2xl place-self-end mb-2"
                                            >
                                                <BiSolidEdit />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteAddress(address.id)}
                                                className="text-2xl place-self-end text-red-600 mb-2"
                                            >
                                                <MdDelete />
                                            </button>
                                            {address.isDefault !== "1" && (
                                                <button
                                                    className="text-sm place-self-end text-blue-900 underline"
                                                    onClick={() => handleSetDefaultAddress(user?.result?.customerId || user?.customerId, address.id)}
                                                >
                                                    Make Default
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                </div>

                            </div>
                        ))}
                    </div>
                )}


                {showAddAddress && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <button onClick={handleCloseModal} className="absolute top-0 right-0 m-3">
                                <AiFillCloseSquare className="text-white mr-4 cursor-pointer" size={32} />
                            </button>
                            <AddAddress
                                setShowAddAddress={setShowAddAddress}
                            />
                        </div>
                    </div>
                )}
                {showUpdateAddress && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <button onClick={handleCloseModal} className="absolute top-0 right-0 m-3">
                                <AiFillCloseSquare className="text-white mr-4 cursor-pointer" size={32} />
                            </button>
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