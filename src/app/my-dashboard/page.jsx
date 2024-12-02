'use client'
import React from 'react'
import MyDashboard from '@/components/dashboard/MyDashboard'
import MyAccount from '@/components/dashboard/MyAccount'
//import RelatedCategory from '@/components/Home/unused/Relatedcategory'
import Navbar from '@/components/Home/Navbar'
import Footer from '@/components/Home/Footer'
import { useState, useEffect } from 'react'
import { useAuth } from '@/utils/authContext'
import Link from 'next/link'
const Mydashboard = () => {
    const [savedAddresses, setSavedAddresses] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!user) return;
                let customerId = user?.result?.customerId || user?.customerId;
                console.log("customerid in payment delivery", customerId);
                const response = await fetch('https://nexiblesapp.barecms.com/api/customerAddress/getData', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ customerId: customerId })
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log(data, "data");
                setSavedAddresses(data);
            } catch (error) {
                console.error("Error fetching Data", error);
            }
        }
        fetchData();
    }, [user]);


    if (!user) {
        return (
            <div>
                <Navbar />
                <div className="bg-white py-10 md:py-20 mt-4 md:mt-10 px-4 md:px-10 min-h-[60vh] flex items-center justify-center">
                    <div className="border border-[#197d8e] rounded-3xl p-8 w-full max-w-[800px]">
                        <div className="text-center space-y-6">
                            <h2 className="text-[#db5c3c] font-gotham-rounded-bold text-2xl md:text-3xl">
                                Please Login to View Your Dashboard
                            </h2>
                            <p className="text-gray-700 text-lg font-gotham-light">
                                Login to access your profile details and saved addresses
                            </p>
                            <Link
                                href="/login"
                                className="inline-block bg-[#db5c3c] text-white font-gotham-rounded-bold rounded-full px-8 py-4 text-lg hover:bg-[#c54e33] transition-all duration-200"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="md:flex bg-white containers">
                <div className="md:w-1/3 w-full">
                    <MyAccount />
                </div>
                <div className="md:w-full w-full">
                    <MyDashboard savedAddresses={savedAddresses} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Mydashboard