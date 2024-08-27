'use client'
import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useAuth } from '@/utils/authContext';
import { useRouter } from 'next/navigation';
import { FiDownload } from "react-icons/fi";


const MyOrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        const fetchOrderHistory = async () => {
            try {
                if (!user) return;
                let customerID = user?.result?.customerId || user?.customerId;
                console.log("customerID", customerID);
                const token = typeof window !== "undefined" ? localStorage.getItem('token') : null;
                const response = await fetch(`https://nexiblesapp.barecms.com/api/getorderdetails/${customerID}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch order history');
                }
                const data = await response.json();
                console.log("data", data);
                console.log("data.orderdetails", data.orderDetails);
                setOrders(data.orderDetails);
            } catch (error) {
                console.error('Error fetching order history:', error);
            }
        };
        fetchOrderHistory();
    }, [user]);
    const handleAddToCart = (orderNo) => {
        console.log("orderNo",orderNo);
        const ordersToAdd = orders.filter(order => order.orderNo === orderNo);
        if (ordersToAdd.length === 0) {
            console.error('Orders not found.');
            return;
        }

        // Extract products from the filtered orders
        const productsToAdd = ordersToAdd.flatMap(order => {
            return {
                id: order.product_id, // Use product_id as the actual product ID
                name: order.product_name,
                image: order.image,
                price: order.price,
                size: order.quantity || null,
                type: order.type || null,
                typeName: order.typeName || null,
            };
        });
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
     existingCartItems.push(...productsToAdd);
     localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
     router.push('/my-cart');
    };


        const groupOrdersByOrderNo = () => {
        const groupedOrders = {};
        orders.forEach(order => {
            if (!groupedOrders[order.orderNo]) {
                groupedOrders[order.orderNo] = [order];
            } else {
                groupedOrders[order.orderNo].push(order);
            }
        });
        return groupedOrders;
    };

    const handleKeylineDownload = async (productId) => {
        try {
           if (!user) return;
           const order = orders[0];
          const response = await fetch("https://nexiblesapp.barecms.com/api/keylineimage", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              product_id: productId,
              customer_id: user?.result?.customerId || user?.customerId,
              order_id: order.orderNo,
            }),
          });
          if (!response.ok) {
            throw new Error(`Failed to get keyline PDF URL: ${response.statusText}`);
          }
          const data = await response.json();
          const pdfUrl = data;
          const downloadLink = document.createElement('a');
          downloadLink.href = pdfUrl;
          downloadLink.download = "keyline.pdf";
          downloadLink.click();

        } catch (error) {
          console.error("Error downloading keyline PDF:", error);
          alert("Failed to download keyline PDF. Please try again later.");
        }
      };

    return (
        <div>
            <div className="bg-white mt-4 py-20 px-10">
                <h2 className="mb-6 font-bold md:text-2xl text-gray-900">Order History & Re-Order</h2>
                <div className="text-gray-900 flex md:justify-end items-center mb-4 space-x-2">
                    {/* <FiChevronLeft />
                    <p className="">1 of 2</p>
                    <FiChevronRight /> */}
                    {/* <select name="" id="" className="border-2 border-gray-900 rounded-full md:px-6 py-2 cursor-pointer">
                        <option value="1">5 per page</option>
                        <option value="2">2 per page</option>
                        <option value="3">4 per page</option>
                    </select> */}
                </div>

                <div className="space-y-6">
                    {orders.length === 0 ? (
                        <p className="text-gray-900">No orders found.</p>
                    ) : (
                        Object.entries(groupOrdersByOrderNo()).map(([orderNo, orderGroup]) => (
                            <div key={orderNo} className="w-full">
                                <div className="h-auto border border-gray-500 rounded-lg p-6">
                                    <h2 className="font-bold text-xl">Order #{orderNo}</h2>
                                    {orderGroup.map(order => (
                                        <div key={order.id} className="flex flex-col lg:flex-row lg:space-x-10 py-2 md:py-2">
                                            <div className="lg:w-[350px]">
                                                <img src={`https://nexiblesapp.barecms.com/uploads/${order.image}`} alt="image" className="h-52 w-full object-cover lg:h-auto lg:w-[350px]" />
                                            </div>
                                            <div className="text-gray-900">
                                                <h2 className="font-bold text-xl">{order.product_name}</h2>
                                                <div className="space-y-2 mt-2">
                                                    <p><span className="font-bold">Order Date:</span> {order.orderDate}</p>
                                                    <p><span className="font-bold">Status:</span> {order.payment_status}</p>
                                                    <p><span className="font-bold">Order #:</span> {order.orderNo}</p>
                                                    <p><span className="font-bold">Total Paid: &#8377; {order.price}</span></p>
                                                </div>
                                                <button className="mt-2 bg-[#30384E] rounded-md text-white uppercase px-6 py-2 flex items-center" onClick={() => handleKeylineDownload(order.product_id)}>
                                              <FiDownload className="mr-2" size={20} />
                                              keyline
                                              </button>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="flex justify-end mt-4">
                                        <button className="bg-[#30384E] rounded-md text-white px-8 py-2 uppercase " onClick={() => handleAddToCart(orderNo)}>add to cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default MyOrderHistory;
