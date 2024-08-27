"use client"
import React, { useState } from 'react';
import { useAuth } from '@/utils/authContext';

const AddAddress = (props) => {
    const {user} = useAuth();
    console.log("userINaddress",user);
    const [formData, setFormData] = useState({
        customerId: '',
        location: '',
        serviceArea: '',
        title: '',
        houseno: '',
        floor: '',
        address: '',
        address2: '',
        state: '',
        city: '',
        prov: '',
        zip: '',
        country: '',
        phone: '',
        mobile: '',
        addressType: '',
        company: '',
        addedon: '',
        latlong: '',
        street_no: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         if (!user) return;
    //         let customerId = user?.result?.customerId || user?.customerId;
    //         const formDataWithCustomerId = { ...formData, customerId };
    //         const response = await fetch('https://nexiblesapp.barecms.com/api/customerAddress', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(formDataWithCustomerId)
    //         });

    //         if (!response.ok) {
    //             throw new Error('Failed to insert address');
    //         }
    //         const data = await response.json();
    //         console.log('Address inserted successfully:', data);
    //         props.setShowAddAddress(false);
    //         window.location.reload();
    //     } catch (error) {
    //         console.error("Error inserting address:", error);
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!user) return;
            let customerId = user?.result?.customerId || user?.customerId;
            const formDataWithCustomerId = { ...formData, customerId };
            formDataWithCustomerId.addedon = new Date().toISOString();

            const response = await fetch('https://nexiblesapp.barecms.com/api/customerAddress', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formDataWithCustomerId)
            });

            if (!response.ok) {
                throw new Error('Failed to insert address');
            }
            const data = await response.json();
            console.log('Address inserted successfully:', data);
            props.setShowAddAddress(false);
            window.location.reload();
        } catch (error) {
            console.error("Error inserting address:", error);
        }
    };

    return (
        <div className="bg-white py-10">
            <div className="">
                <h2 className="text-gray-900 font-bold text-3xl px-8">Enter Your New Address</h2>
            </div>
            <form onSubmit={handleSubmit} action="" className="py-4 px-8">
                <div className="flex flex-col space-y-4">
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="border-2 rounded-full text-gray-900 px-4 py-1 outline-none"
                        placeholder="title (required for business addresses)"
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="border-2 rounded-full text-gray-900 px-4 py-1 outline-none"
                        placeholder="Address 1"
                        required
                    />
                    <input
                        type="text"
                        name="address2"
                        value={formData.address2}
                        onChange={handleChange}
                        className="border-2 rounded-full text-gray-900 px-4 py-1 outline-none"
                        placeholder="Address 2"
                    />
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="border-2 rounded-full text-gray-900 px-4 py-1 outline-none"
                        placeholder="City/Town"
                        required
                    />
                    <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        id=""
                        className="border-2 rounded-full text-gray-900 px-4 py-1 outline-none">
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Delhi">Dehli</option>
                    </select>
                    <input
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        className="border-2 rounded-full text-gray-900 px-4 py-1 outline-none"
                        placeholder="zip"
                        required
                    />
                    <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        id=""
                        className="border-2 rounded-full text-gray-900 px-4 py-1 outline-none">
                        <option value="India">India</option>
                        <option value="Germany">Germany</option>
                    </select>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-2 rounded-full text-gray-900 px-4 py-1 outline-none"
                        placeholder="Phone"
                        required
                    />
                    <div className="ml-2">
                    </div>
                </div>
                <div className="mt-4">
                <button type="submit" className="bg-[#30384E] rounded-md text-white px-8 py-2 ">
                    Use this address
                </button>

                </div>
            </form>
        </div>
    );
};

export default AddAddress;
