"use client";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineEdit } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "@/utils/authContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';

export default function Shipping({ defaultAddress, addresses }) {
  const token = process.env.NEXT_PUBLIC_API_KEY;
  const APIURL = process.env.NEXT_PUBLIC_API_URL;
  const [discountAmount, setDiscountAmount] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromoCode, setAppliedPromoCode] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [loading2, setLoading2] = useState(false);
  const [isProcessingOrder, setIsProcessingOrder] = useState(false);
  const { user } = useAuth();
  const router = useRouter();
  const [showAddressForm, setShowAddressForm] = useState(false);
  const searchParams = useSearchParams();
  const status = searchParams.get('status');
  const message = searchParams.get('message');
  useEffect(() => {
    if (status) {
      switch (status) {
        case 'success':
          toast.success('Payment completed successfully!');
          break;
        case 'cancelled':
          toast.error('Payment was cancelled. Please try again.');
          break;
        case 'failed':
          toast.error('Payment failed. Please try again or use a different payment method.');
          break;
        case 'error':
          toast.error('Payment failed. Please try again');
          break;
        default:
          toast.error('Payment was not completed. Please try again.');
      }
    }
  }, [status, message]);
  const [formData, setFormData] = useState({
    customerId: "",
    location: "",
    serviceArea: "",
    title: "",
    houseno: "",
    floor: "",
    address: "",
    address2: "",
    state: "",
    city: "",
    zip: "",
    country: "",
    phone: "",
    mobile: "",
    addressType: "",
    company: "",
    addedon: new Date().toISOString(),
    latlong: "",
    street_no: "",
    isDefault: "1",
  });

  useEffect(() => {
    // Wrap localStorage operations in a function to ensure they only run client-side
    const initializeClientData = () => {
      try {
        const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const storedPromoCode = JSON.parse(localStorage.getItem("appliedCoupon")) || null;
        setCartItems(storedCartItems);
        setAppliedPromoCode(storedPromoCode);

        // Calculate subtotal
        let newSubTotal = 0;
        storedCartItems.forEach((item) => {
          newSubTotal += parseFloat(item.totalPrice) || 0;
        });
        setSubTotal(newSubTotal.toFixed(2));

        // Calculate discount if promo code is applied
        let newDiscountAmount = 0;
        if (storedPromoCode) {
          storedCartItems.forEach((item) => {
            const discount = (item.totalPrice * storedPromoCode.discount) / 100;
            newDiscountAmount += Math.min(discount, storedPromoCode.max_discount);
          });
          setDiscountAmount(newDiscountAmount.toFixed(2));
        }

        // Calculate final total after discount
        const newTotalPrice = (newSubTotal - newDiscountAmount).toFixed(2);
        setTotalPrice(newTotalPrice);
      } catch (error) {
        console.error('Error initializing client data:', error);
        // Set default values in case of error
        setCartItems([]);
        setSubTotal(0);
        setDiscountAmount(0);
        setTotalPrice(0);
      }
    };

    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      initializeClientData();
    }

    // Set default address if available
    if (addresses && addresses.length > 0) {
      const defaultAddr = addresses.find(addr => addr.isDefault === "1") || addresses[0];
      //setSelectedAddress(defaultAddr);
    }
  }, [addresses]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!user) return;
      let customerId = user?.result?.customerId || user?.customerId;
      const formDataWithCustomerId = { ...formData, customerId };
      const response = await fetch(
        `${APIURL}/api/customerAddress`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataWithCustomerId),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to insert address");
      }
      const data = await response.json();
      console.log("Address inserted successfully:", data);

      if (typeof window !== 'undefined') {
        window.location.reload();
      }
    } catch (error) {
      console.error("Error inserting address:", error);
    }
  };

  const getOrderDetailsFromLocalStorage = () => {
    if (typeof window === 'undefined') return [];

    try {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

      return cartItems.map((product) => {
        const selectedOptions = product.selectedOptions || {};

        const flattenedOptions = Object.keys(selectedOptions).reduce((acc, optionKey) => {
          const option = selectedOptions[optionKey];
          return {
            ...acc,
            [`${optionKey}OptionName`]: option.optionName,
            [`${optionKey}Price`]: option.price,
          };
        }, {});

        const optionKeys = Object.keys(selectedOptions);
        const productConfigId = optionKeys.length > 0 ? optionKeys[0] : null;
        const productOptionId = optionKeys.length > 0 ? selectedOptions[optionKeys[0]].optionName : null;

        return {
          id: product.id,
          name: product.name,
          price: parseFloat(product.totalPrice || 0).toFixed(2),
          quantity: product.quantity || product.totalQuantity || 1,
          payment_status: 'pending',
          discountAmount: parseFloat(product.discountAmount || 0).toFixed(2),
          discountPercentage: parseFloat(product.discountPercentage || 0).toFixed(2),
          discountedPrice: parseFloat(product.discountedPrice || product.totalPrice || 0).toFixed(2),
          product_option_id: productOptionId,
          product_config_id: productConfigId,
          origin: "Nexibles",
        };
      });
    } catch (error) {
      console.error('Error getting order details:', error);
      return [];
    }
  };

  const intamount = parseInt(totalPrice) * 100;

  const createOrder = async () => {
    console.log("Creating order. Applied coupon:", appliedPromoCode);
    if (isProcessingOrder) {
      console.log("Order is already being processed");
      return false;
    }
    setIsProcessingOrder(true);

    try {
      if (!user) {
        console.log("User not logged in, redirecting to login page");
        toast.error("You need to login first");
        router.push("/login");
        return false;
      }

      const orderNo = `ORDER-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
      const orderDate = new Date().toISOString();
      const addressDetails = defaultAddress?.data || {};

      const requestBody = {
        orderNo,
        orderDate,
        pmtMethod: "",
        customerID: user?.result?.customerId || user?.customerId,
        salutation: "",
        firstName: user?.result?.firstName || user?.firstName,
        lastName: user?.result?.lastName || user?.lastName,
        mobile: addressDetails.phone || user?.result?.mobile,
        eMail: user?.result?.emailAddress || user?.email,
        street: addressDetails.floor || "",
        address: (addressDetails.address || "") + "," + (addressDetails.address2 || ""),
        city: addressDetails.city || "",
        state: addressDetails.state || "",
        company: addressDetails.title || "",
        zipcode: addressDetails.zip || "",
        country: addressDetails.country || "",
        remark: "",
        coupon: appliedPromoCode?.coupon_code || "",
        currency: "",
        invamt: totalPrice,
        tax: "0",
        ordstatus: "",
        discount: discountAmount,
        disamt: discountAmount,
        promoDiscount: appliedPromoCode ? appliedPromoCode.discount : "0",
        minDeliveryAmt: totalPrice,
        orderCharge: "0",
        ipAddress: "",
        confirm_status: "0",
        orderDetails: getOrderDetailsFromLocalStorage(),
      };

      console.log("Sending order creation request:", requestBody);

      const response = await fetch(`${APIURL}/api/createorder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "API-Key": "irrv211vui9kuwn11efsb4xd4zdkuq"
        },
        body: JSON.stringify(requestBody),
      });
      const responseData = await response.json();
      console.log("Order creation API response:", responseData);

      if (responseData.success === true) {
        if (typeof window !== 'undefined') {
          localStorage.setItem("orderNo", responseData.orderNo);
        }
        return true;
      } else {
        throw new Error(responseData.message || "Failed to create order");
      }
    } catch (error) {
      console.error("Error in createOrder:", error);
      return false;
    } finally {
      setIsProcessingOrder(false);
    }
  };

  const makePayment = async (e) => {
    e.preventDefault();
    setLoading2(true);

    try {
      // First create the order
      const orderCreated = await createOrder();
      if (!orderCreated) {
        setLoading2(false);
        return;
      }

      // Then proceed with payment
      var baseUrl = `${APIURL}`;
      if (typeof window !== 'undefined') {
        baseUrl = window.location.origin;
      }

      const transactionId = "T" + Date.now();
      const orderNo = typeof window !== 'undefined' ? localStorage.getItem("orderNo") : null;

      const data = {
        orderNo: orderNo,
        name: user?.result?.firstName ?? user?.firstName,
        number: user?.result?.mobile ?? user?.mobile,
        MUID: user?.result?.customerId ?? user?.customerId,
        amount: intamount,
        transactionId: transactionId,
        redirectUrl: `${baseUrl}/api/check-status?transactionId=${transactionId}&url=${baseUrl}`
      };

      const paymentResponse = await axios.post(`${APIURL}/api/payment`, data);
      console.log("paymentResponse.data: ", paymentResponse.data);

      if (typeof window !== 'undefined') {
        window.location.href = paymentResponse.data.url;
      }

    } catch (error) {
      setLoading2(false);
      console.error('Error processing payment:', error);
      toast.error("Failed to process payment");
    }
  };

  return (
    <div className="bg-white h-auto mt-20">
      <div className="md:flex border rounded-md">
        <div className="md:w-1/2 w-full bg-white px-8 py-4">
          {defaultAddress &&
            defaultAddress.data &&
            defaultAddress.data.isDefault ? (
            <>
              <div className="">
                <div className="flex space-x-8 justify-start items-center">
                  <h3 className="md:text-3xl text-xl text-gray-900 font-bold mb-4">
                    Shipping
                  </h3>
                  <LiaShippingFastSolid className="text-gray-900" size={48} />
                </div>
                <hr className="border border-gray-300" />
                <div className="flex justify-between mt-4 mb-4">
                  <div className="flex flex-col">
                    <p className="text-gray-900 text-2xl font-bold">
                      {user?.result?.firstName ?? user?.firstName} {user?.result?.lastName ?? user?.lastName}
                    </p>
                    {defaultAddress?.data && Object.entries(defaultAddress.data).map(([key, value]) => {
                      if (value !== null && value !== undefined && value !== "") {
                        const displayedKey = key === "title" ? "Company Name" : key;
                        if (displayedKey !== "customerId" && displayedKey !== "isDefault" && displayedKey !== "id") {
                          return (
                            <p className="text-gray-900" key={key}>
                              <span className="font-bold">
                                {displayedKey.charAt(0).toUpperCase() + displayedKey.slice(1)}:
                              </span>{" "}
                              {key === "addedon" ? new Date(value).toLocaleString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit',
                                hour12: false
                              }) : value}
                            </p>
                          );
                        }
                      }
                      return null;
                    })}
                  </div>
                  <div>
                    <Link href="/manageaddress">
                      <p className="text-gray-900 underline uppercase text-sm font-bold cursor-pointer">
                        change address
                      </p>
                    </Link>
                  </div>
                </div>

                <hr className="border border-gray-300" />
                <div className="mt-4 flex items-start justify-between">
                  <div className="flex flex-col">
                    <div className="flex mb-4">
                      <p className="text-gray-900 font-bold md:text-xl text-base">
                        Choose Shipping
                      </p>
                    </div>
                    <div className="h-auto w-72 border-2 border-gray-900 rounded-3xl p-4 flex flex-col justify-start items-start">
                      <input
                        type="radio"
                        id="radioButton"
                        name="radioButton"
                        className="h-6 w-6 cursor-pointer"
                        checked
                      />
                      <label
                        htmlFor="radioButton"
                        className="text-gray-900 font-semibold mt-2"
                      >
                        Standard
                      </label>
                      <p className="text-gray-900">
                        Estimated Delivery in 7 Days.
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-gray-900 uppercase underline text-sm font-bold cursor-pointer">
                      view shipping details
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-gray-900 font-bold text-3xl px-6">
                Delivery Address
              </h2>
              <form onSubmit={handleSubmit} action="" className="py-4 px-8">
                <div className="flex flex-col space-y-4">
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="border-2 rounded-full text-gray-900 px-4 py-1 outline-none"
                    placeholder="Company Name (required for business addresses)"
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
                    name="floor"
                    value={formData.floor}
                    onChange={handleChange}
                    className="border-2 rounded-full text-gray-900 px-4 py-1 outline-none"
                    placeholder="Floor"
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
                    placeholder="zip"
                    required
                    maxLength={6}
                  />
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    id=""
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
                    maxLength={10}
                  />
                  <div className="ml-2"></div>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="bg-[#30384E] rounded-md text-white px-8 py-2 "
                  >
                    Save Address
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
        <hr />
        {/* order summary Section */}
        <div className="md:w-1/2 w-full bg-gray-300 p-8">
          <div className="bg-white h-full w-full">
            <div className="md:px-20 px-8 py-8">
              <h3 className="text-gray-900 font-bold text-2xl">
                Order Summary
              </h3>
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-900 text-sm font-bold">Sub Total</p>
                  <p className="text-gray-900 text-sm font-bold">
                    ₹{subTotal}
                  </p>
                </div>
                <hr />
                <div className="flex justify-between items-center mt-2">
                  <p className="text-gray-900 text-sm font-bold">
                    Shipping : Standard
                  </p>
                  <p className="text-green-500 text-sm font-bold uppercase">
                    Free
                  </p>
                </div>
                <div className="flex justify-between items-center py-2">
                  <p className="text-gray-900 text-sm font-bold uppercase">
                    igst
                  </p>
                  <p className="text-gray-900 text-sm font-bold uppercase">
                    00.00
                  </p>
                </div>
                <hr />
                {appliedPromoCode ? (
                  <div className="flex justify-between items-center">
                    <p className="text-gray-900 text-sm font-bold">Promo Code</p>
                    <p className="text-red-500 uppercase text-sm font-bold">
                      -₹{discountAmount}
                    </p>
                  </div>
                ) : (
                  <div className="flex justify-between items-center">
                    <p className="text-gray-900 text-sm font-bold">Promocode</p>
                    <p className="text-red-500 uppercase text-sm font-bold">₹00.00</p>
                  </div>
                )}
                <hr />
                <div className="flex justify-between items-center py-2">
                  <p className="text-gray-900 text-sm font-bold">Total</p>
                  <p className="text-gray-900 uppercase text-sm font-bold">
                    ₹{totalPrice}
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-gray-500 text-sm mt-1">
                    For Business Use Only, Company Name and state listed in GST
                    registration must match billing address.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* payment gateway */}
      <div className="bg-white md:flex h-auto p-10">
        <div className="md:w-1/2 w-full">
          <h2 className="text-gray-900 text-2xl font-bold mb-4">
            Payment Method
          </h2>
          <div className="border border-gray-900 h-auto w-1/2 rounded-lg flex items-center justify-start p-2">
            <input
              type="radio"
              id="phonePeRadio"
              name="paymentMethod"
              value="phonePe"
              className="cursor-pointer"
              checked
            />
            <label for="phonePeRadio" class="ml-2 flex items-start">
              <img
                src="/phonepe.svg"
                alt="PhonePe Logo"
                className="h-10 mr-2 cursor-pointer"
              />
            </label>
          </div>

          <div className="relative top-6">
            <button
              className="bg-black text-white px-8 md:px-20 py-2 rounded-full uppercase w-full md:w-auto"
              onClick={makePayment}
              disabled={loading2 || isProcessingOrder}
            >
              {loading2 ? 'Processing...' : `Pay ${totalPrice}`}
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className="text-gray-900 text-2xl font-bold">Your Items</h3>
          <div className="flex py-4">
            <div className="px-8">
              <div className="px-8">
                {cartItems.map((item) => (
                  <div className="flex py-4" key={item.id}>
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-28 w-48 object-contain"
                      />
                    </div>
                    <div className="px-8">
                      <h2 className="text-gray-900 font-bold text-lg mb-4">
                        {item.name}
                      </h2>
                      <div className="flex space-x-12 justify-center items-center">
                        <p className="text-gray-900 text-md font-bold">
                          {item.quantity} QTY
                        </p>
                        <p className="text-gray-900 text-md font-bold">
                          Rs. {item.totalPrice}
                        </p>
                        <div >
                          {item?.selectedOptions && Object.entries(item.selectedOptions).map(([key, option]) => (
                            <p key={key} className="text-gray-900 text-md font-bold">
                              {key}: {option.optionName}
                            </p>
                          ))}
                        </div>
                      </div>

                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}