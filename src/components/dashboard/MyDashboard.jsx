'use client'
import React,{useState} from 'react'
import { useAuth } from '@/utils/authContext'
import { MdOutlineModeEdit } from "react-icons/md";
import Link from "next/link";
const MyDashboard = ({ savedAddresses }) => {
  const { user } = useAuth();
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  
  return (
    <div className="bg-white py-20 mt-10 px-10"> 
      {/* Profile Details Section */}
      <div className="border border-[#197d8e] rounded-3xl mb-8">
        <div className='border-b border-[#197d8e] flex justify-between'>
        <div className="text-[#db5c3c] font-semibold pl-6 pt-6 text-xl mb-4">Profile Details</div>
        <MdOutlineModeEdit size={60} className='text-[#197d8e] pr-6' />
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4 p-4">
          <div>
            <p className="text-gray-700 ">{user?.result?.firstName|| 'N/A'}</p>
          </div>
          <div>
            <p className="text-gray-700 ">{user?.result?.lastName || 'N/A'}</p>
          </div>
          <div>
            <p className="text-gray-700  ">{user?.result?.emailAddress || 'N/A'}</p>
          </div>
          <div>
            <p className="text-gray-700 ">{user?.result?.mobile || 'N/A'}</p>
          </div>
        </div>  
      </div>

      {/* Address Book Section */}

      {savedAddresses && savedAddresses.data && savedAddresses.data.length > 0 && (
  <div className="border border-[#197d8e] rounded-3xl ">
    <div className='border-b border-[#197d8e] flex justify-between'>
    <div className="text-[#db5c3c] font-semibold text-xl mb-4 pl-4 pt-4">Address Book</div>
    </div>
    <div className="flex flex-wrap gap-6 mt-6">
      {savedAddresses.data
        .filter((address) => address.isDefault === "1")
        .map((address, index) => (
          <div
            key={index}
            className="h-auto w-[20rem]"
          >
            <p className="text-gray-700 pl-4 font-bold">{address.title || 'N/A'}</p>
            <p className="text-gray-700 pl-4">{address.address || 'N/A'}</p>
            <p className="text-gray-700 pl-4">{address.address2 || 'N/A'}</p>
            <p className="text-gray-700 pl-4 ">{address.city || 'N/A'}</p>
            <p className="text-gray-700 pl-4">{address.state || 'N/A'}</p>
            <p className="text-gray-700  pl-4">{address.zip || 'N/A'}</p>
            <p className="text-gray-700  pl-4">{address.country || 'N/A'}</p>
            <p className="text-gray-700  pl-4">{address.phone || 'N/A'}</p>
          </div>
        ))}
    </div>
    <div className="flex justify-center">
      <Link href="/all-addresses" className="bg-[#db5c3c] text-white font-bold rounded-full px-6  mb-4 py-3 mt-4">View Addresses</Link>
    </div>
  </div>
)}
    </div>
  );
};

export default MyDashboard;
