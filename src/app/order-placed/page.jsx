'use client';
import React, { useEffect, useState, Suspense } from 'react';
import Navbar from '@/components/shop/Navbar';
import Footer from '@/components/shop/Footer';
import OrderPlaced from '@/components/shipping/OrderPlaced';
import { useAuth } from '@/utils/authContext';
import { useRouter } from 'next/navigation';
import SearchParamsHandler from '../../components/Search'; // Adjust path if needed

const Orderplaced = () => {
  const [orderDetails, setOrderDetails] = useState([]);
  const [defaultAddress, setDefaultAddress] = useState();
  const { user } = useAuth();
  const router = useRouter();
  const token = process.env.NEXT_PUBLIC_API_KEY;
  const APIURL = process.env.NEXT_PUBLIC_API_URL;

  const fetchOrderDetails = async () => {
    try {
      if (!user) return;

      const customerId = user?.result?.customerId || user?.customerId;
      const token = typeof window !== "undefined" ? localStorage.getItem('token') : null;
      const orderNo = typeof window !== "undefined" ? localStorage.getItem('orderNo') : null;

      if (!orderNo) {
        router.push('/');
        return;
      }

      const response = await fetch(`${APIURL}/api/getorderdetails/${customerId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      console.log("order details response:", data);

      if (data.status === "success") {
        const relevantOrder = data.orderDetails.filter(order => order.orderNo === orderNo);

        if (relevantOrder.length > 0) {
          setOrderDetails(relevantOrder);
          if (typeof window !== 'undefined') {
            localStorage.removeItem('cartItems');
            localStorage.removeItem('appliedCoupon');
          }
        } else {
          router.push('/');
        }
      } else {
        console.error("Failed to fetch order details:", data.message);
        router.push('/');
      }
    } catch (error) {
      console.error("Error fetching order details:", error);
      router.push('/');
    }
  };

  useEffect(() => {
    if (user) {
      fetchOrderDetails();
    }
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!user) return;
        let id = user?.result?.customerId || user?.customerId;
        const response = await fetch(`${APIURL}/api/customerAddress/default/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data, "DefaultAddress");
        setDefaultAddress(data);
      } catch (error) {
        console.error("Error fetching Data", error);
      }
    }
    fetchData();
  }, [user]);

  if (orderDetails.length === 0) {
    return (
      <div>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <SearchParamsHandler />
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              Loading order details...
            </div>
          </div>
        </Suspense>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <SearchParamsHandler />
        <OrderPlaced
          productDetails={orderDetails}
          defaultAddress={defaultAddress}
          transactionId={orderDetails[0]?.transaction_id}
        />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Orderplaced;
