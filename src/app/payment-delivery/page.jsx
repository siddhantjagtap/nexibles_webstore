"use client"
import React, { useState } from 'react'
import Navbar from '@/components/Home/Navbar'
import Footer from '@/components/Home/Footer'
import MyAccount from '@/components/dashboard/MyAccount'
import { PaymentDelivery } from '@/components/dashboard/PaymentDelivery'
//import RelatedCategory from '@/components/Home/unused/Relatedcategory'
import { useEffect } from 'react'
import { useAuth } from '@/utils/authContext'

const Page = () => {
    const [savedAddresses, setSavedAddresses] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!user) return;
                let customerId = user?.result?.customerId || user?.customerId;
                console.log("customerid in payment delivery",customerId);
                const response = await fetch('https://nexiblesapp.barecms.com/api/customerAddress/getData',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ customerId :customerId })
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log(data,"data");
                setSavedAddresses(data);
            } catch (error) {
                console.error("Error fetching Data",error);
            }
        }
        fetchData();
    }, [user]);
    return (
        <div>
            <Navbar />
            <div className="md:flex bg-white">
                <div className="containers md:w-1/3 w-full">
                    <MyAccount />
                </div>
                <div className="md:w-full w-full">
                <PaymentDelivery savedAddresses={savedAddresses} />
                </div>
            </div>
            {/* <RelatedCategory /> */}
            <Footer />
        </div>
    )
}
export default Page