'use client'
import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useAuth } from '@/utils/authContext';
import { useRouter } from 'next/navigation';
import { FiDownload } from "react-icons/fi";
import { Link } from 'lucide-react';


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
                const filteredOrders = data.orderDetails.filter(order => order.origin === "Nexigifting");
                console.log("data", data);
                console.log("data.orderdetails", data.orderDetails);
                const sortedOrders = filteredOrders.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));
                setOrders(sortedOrders);
            } catch (error) {
                console.error('Error fetching order history:', error);
            }
        };
        fetchOrderHistory();
    }, [user]);
    const handleAddToCart = (orderNo) => {
        console.log("orderNo", orderNo);
        const ordersToAdd = orders.filter(order => order.orderNo === orderNo);
        if (ordersToAdd.length === 0) {
            console.error('Orders not found.');
            return;
        }

        // Extract products from the filtered orders
        const productsToAdd = ordersToAdd.flatMap(order => {
            return {
                id: order.product_id,
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
    const [visibleOrder, setVisibleOrder] = useState(null); // State to track visible order details

    const toggleOrderDetails = (orderNo) => {
        // Toggle the visibility of order details
        setVisibleOrder(visibleOrder === orderNo ? null : orderNo);
    };

    return (
        <div>
            <div className="bg-white mt-10 py-20 px-10">
                {/* <h2 className="mb-6 font-bold md:text-2xl text-gray-900">Order History & Re-Order</h2> */}


                <div className="space-y-6">
                    {orders.length === 0 ? (
                        <div className="border border-[#197d8e] rounded-3xl py-8 px-6 text-center">
                            <svg
                                className="mx-auto h-12 w-12 text-[#197d8e] mb-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                />
                            </svg>
                            <h3 className="text-[#db5c3c] font-gotham-rounded-bold text-lg mb-2">No Orders Found</h3>
                            <p className="text-gray-600 mb-6">{`You haven't placed any orders yet.`}</p>
                            {/* <Link
                                href="/occasions"
                                className="bg-[#197d8e]  text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all inline-block"
                            >
                                Start Shopping
                            </Link> */}
                        </div>
                    ) : (
                        Object.entries(groupOrdersByOrderNo()).map(([orderNo, orderGroup]) => (
                            <div key={orderNo} className="w-full">
                                <div className="h-auto border border-[#197d8e] rounded-3xl">
                                    <div className="font-bold text-xl text-[#db5c3c] border-b border-[#197d8e] p-6">All Orders</div>
                                    {orderGroup.map(order => (
                                        <div key={order.id} className="flex flex-col p-4 lg:flex-row lg:space-x-10 py-2 md:py-2">
                                            {/* Order Info */}
                                            <div className="text-gray-900">
                                                <div className="space-y-2 mt-2">
                                                    <p><span className="text-sm">Order Number:</span> </p>
                                                    <p className="font-bold text-md">#{order.orderNo}</p>
                                                    <p className="text-sm">Status</p>
                                                    <p className="font-bold text-[#db5c3c]">{order.payment_status}</p>

                                                    {/* Order Details & Track Shipment buttons */}
                                                    <div className='flex flex-col space-y-4 w-auto'>
                                                        <button
                                                            className='bg-[#db5c3c] p-3 md:w-[20rem] font-bold rounded-full text-white'
                                                            onClick={() => toggleOrderDetails(orderNo)}
                                                        >
                                                            {visibleOrder === orderNo ? "Hide Details" : "Order Details"}
                                                        </button>
                                                        {/* <button className='bg-[#0f1729] p-3 md:w-[20rem] font-bold rounded-full text-white'>
                                                            Track Shipment
                                                        </button> */}
                                                    </div>

                                                    {/* Order details - Show image, price, and name if visible */}
                                                    {visibleOrder === orderNo && (
                                                        <div className="mt-4 p-4 ">
                                                            {/* Image */}
                                                            <img
                                                                src={`https://nexiblesapp.barecms.com/uploads/${order.image}`}
                                                                alt={order.product_name}
                                                                className="h-52 w-full object-cover lg:h-[20rem] lg:w-[15rem]"
                                                            />
                                                            {/* Name & Price */}
                                                            <h2 className="font-bold text-md mt-4">{order.product_name}</h2>
                                                            <p className="font-bold text-md mt-2">Price: ₹{order.price}</p>
                                                            <p className="font-bold text-md mt-2">Quantity: {order.quantity}</p>
                                                            <p className="font-bold text-md mt-2">
                                                                Ordered Date: {new Date(order.orderDate).toLocaleDateString('en-GB', {
                                                                    day: '2-digit',
                                                                    month: '2-digit',
                                                                    year: 'numeric',
                                                                })}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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
