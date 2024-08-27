"use client"
import React, { useState } from 'react';
import { useEffect } from 'react';
const UpdatedAddress = ({addressId,setShowUpdateAddress}) => {
    console.log("addressID",addressId);
    const [formData, setFormData] = useState({
        title: '',
        address: '',
        address2: '',
        city: '',
        state: 'Maharashtra',
        zip: '',
        country: 'India',
        phone: '',
    });
    console.log("formData",formData);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://nexiblesapp.barecms.com/api/customerAddress/${addressId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to update address');
            }
            console.log('Address updated successfully');
            setShowUpdateAddress(false);
            window.location.reload();
        } catch (error) {
            console.error('Error updating address:', error);
        }
    };


    useEffect(() => {
        const fetchAddress = async () => {
            try {
                if (addressId) {
                    const response = await fetch(`https://nexiblesapp.barecms.com/api/customerAddress/${addressId}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch address');
                    }
                    const responseData = await response.json();
                    if (responseData.success === 1 && responseData.data && responseData.data.length > 0) {
                        const addressData = responseData.data[0];
                        console.log('Address Data:', addressData);
                        setFormData({
                            title: addressData.title,
                            address: addressData.address,
                            address2: addressData.address2,
                            city: addressData.city,
                            state: addressData.state,
                            zip: addressData.zip,
                            country: addressData.country,
                            phone: addressData.phone,
                            isDefault: addressData.isDefault
                        });
                    } else {
                        console.error('No data found for addressId:', addressId);
                    }
                }
            } catch (error) {
                console.error('Failed to fetch address:', error);
            }
        };

        fetchAddress();
    }, [addressId]);

    return (
        <div className="bg-white py-10">
        <div>
            <h2 className="text-gray-900 font-bold text-3xl px-8">Update Your Address</h2>
        </div>
        <form onSubmit={handleSubmit} className="py-4 px-8">
            <div className="flex flex-col space-y-4">
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="border-2 rounded-full text-gray-900 px-4 py-1 outline-none"
                    placeholder="Company Name"
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
                    className="border-2 rounded-full text-gray-900 px-4 py-1 outline-none"
                >
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Delhi">Dehli</option>
                </select>
                <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className="border-2 rounded-full text-gray-900 px-4 py-1 outline-none"
                    placeholder="ZIP"
                    required
                />
                <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="border-2 rounded-full text-gray-900 px-4 py-1 outline-none"
                >
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

export default UpdatedAddress;
