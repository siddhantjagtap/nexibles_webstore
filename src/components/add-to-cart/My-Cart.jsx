"use client";
import { useState, useEffect, useCallback } from "react";
import { BsCart3 } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import jwt from "jsonwebtoken";
import { useNavigate } from "react-router-dom";
export default function MyCart() {
  const [cartItems, setCartItems] = useState([]);
  const [promoCode, setPromoCode] = useState("");
  const [couponError, setCouponError] = useState("");
  const router = useRouter();
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const token = process.env.NEXT_PUBLIC_API_KEY;
  const APIURL = process.env.NEXT_PUBLIC_API_URL;
  const [isProcessingOrder, setIsProcessingOrder] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const applyStoredCoupon = useCallback((coupon) => {
    const total = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
    if (total >= coupon.min_amount) {
      const updatedCartItems = cartItems.map(item => {
        const discount = Math.min((item.totalPrice * coupon.discount) / 100, coupon.max_discount);
        return {
          ...item,
          discountedPrice: item.totalPrice - discount,
          discountAmount: discount,
          discountPercentage: coupon.discount
        };
      });
      setCartItems(updatedCartItems);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localStorageCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const localStorageAppliedCoupon = JSON.parse(localStorage.getItem("appliedCoupon"));

      setCartItems(localStorageCartItems);
      setAppliedCoupon(localStorageAppliedCoupon);

      if (localStorageAppliedCoupon) {
        applyStoredCoupon(localStorageAppliedCoupon);
      }
    }
  }, []);

  useEffect(() => {
    if (appliedCoupon) {
      const total = calculateSubTotal();
      if (total < appliedCoupon.min_amount) {
        removeCoupon();
        setCouponError(`Cart amount is less than ₹${appliedCoupon.min_amount}, so coupon was removed.`);
      } else {
        applyStoredCoupon(appliedCoupon);
      }
    }
  }, [cartItems]);

  const removeCartItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  const calculateSubTotal = () => {
    return cartItems.reduce((total, item) => total + item.totalPrice, 0);
  };

  const calculateTotalAfterDiscount = () => {
    return cartItems.reduce((total, item) => total + (item.discountedPrice || item.totalPrice), 0);
  };

  const calculateTotalSavings = () => {
    const totalSavings = calculateSubTotal() - calculateTotalAfterDiscount();
    return totalSavings.toFixed(2);
  };

  const applyPromoCode = async () => {
    console.log("Applying promo code:", promoCode);
    if (!promoCode) {
      setCouponError("Please enter a promo code.");
      return;
    }
    try {
      const response = await fetch(`${APIURL}/api/coupon/promo_code/${promoCode}`, {
        headers: {
          "Content-Type": "application/json",
          "API-Key": token,
        },
      });
      const data = await response.json();
      console.log("Coupon API response:", data);

      if (data.status === "success" && data.data.length > 0) {
        const coupon = data.data[0];
        const total = calculateSubTotal();

        const validityDate = new Date(coupon.validity_date);
        const currentDate = new Date();
        if (validityDate < currentDate) {
          setCouponError("Coupon has expired");
          return;
        }

        if (total >= coupon.min_amount) {
          const updatedCartItems = cartItems.map(item => {
            const discount = Math.min((item.totalPrice * coupon.discount) / 100, coupon.max_discount);
            return {
              ...item,
              discountedPrice: item.totalPrice - discount,
              discountAmount: discount,
              discountPercentage: coupon.discount
            };
          });
          setCartItems(updatedCartItems);
          setAppliedCoupon(coupon);
          if (typeof window !== "undefined") {
            localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
            localStorage.setItem("appliedCoupon", JSON.stringify(coupon));
          }
          setCouponError("");
          //console.log("Coupon applied successfully:", coupon);
          //toast.success("Coupon applied successfully!");
        } else {
          setCouponError(`Minimum order amount for this coupon is ₹${coupon.min_amount}.`);
        }
      } else {
        setCouponError("Invalid promo code.");
      }
    } catch (error) {
      console.error("Error applying coupon:", error);
      setCouponError("An error occurred while applying the promo code.");
    }
  };

  const removeCoupon = () => {
    console.log("Removing coupon");
    const updatedCartItems = cartItems.map(item => ({
      ...item,
      discountedPrice: undefined,
      discountAmount: undefined,
      discountPercentage: undefined
    }));

    setCartItems(updatedCartItems);
    setAppliedCoupon(null);

    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      localStorage.removeItem("appliedCoupon");
    }
    //console.log("Coupon removed successfully");
    //toast.success("Coupon removed successfully!");
  };

  const getOrderDetailsFromLocalStorage = () => {
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
  };

  const orderDetails = getOrderDetailsFromLocalStorage();
  const isLoggedIn = () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      return !!token;
    }
    return false;
  };

  const createOrder = async (e) => {
    e.preventDefault();
    if (!isLoggedIn()) {
      //console.log("User not logged in, redirecting to login page");
      toast.error("You need to login first");
      router.push("/login");
    } else {
      router.push("/shipping");
    }
  };

  return (
    <div className="bg-white mt-20 md:flex">
      <div className="w-full md:w-1/2 bg-white border-t">
        <h2 className="text-blue-3 py-4 px-4 md:px-8 font-bold text-2xl md:text-3xl border-gray-200 flex items-center">
          My Cart <BsCart3 className="ml-2 md:ml-4" size={24} />
        </h2>
        <div className="flex flex-col space-y-4 py-2 px-4">
          {cartItems.map((item, index) => (
            <div key={index} className="w-full">
              <div className="flex flex-col md:flex-col justify-between p-2 m-2 rounded-md border border-gray-400">
                <div className="flex w-full md:w-auto">
                  <Link href={`/carddetails/${item.id}`} className="cursor-pointer">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 md:h-40 md:w-44 object-contain"
                    />
                  </Link>
                  <div className="px-2 md:px-2 flex-grow">
                    <div className="flex justify-between items-start">
                      <Link href={`/carddetails/${item.id}`} className="cursor-pointer">
                        <p className="text-gray-900 font-bold text-lg md:text-xl mb-2 ">
                          {item.name}
                        </p>
                      </Link>
                      <MdDelete
                        className="text-gray-900 cursor-pointer"
                        size={24}
                        onClick={() => removeCartItem(index)}
                      />
                    </div>
                    {item?.selectedOptions && Object.keys(item.selectedOptions).length > 0 ? (
                      <div className="bg-white w-full">
                        <ul className="text-sm md:text-base">
                          {item?.selectedOptions && Object.entries(item.selectedOptions).map(([key, option]) => (
                            <li key={key} className="text-gray-700">
                              {key}: {option.optionName}
                              <h1 className="mt-1">Price: ₹{option.price}</h1>
                            </li>
                          ))}
                          <li className="font-semibold mt-1">
                            Quantity: {item.quantity}
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <>
                        <li className="font-semibold mt-1 list-none">
                          Quantity: {item.quantity}
                        </li>
                        <li className="mt-1 list-none">Price: ₹ {item.price}</li>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="px-4 py-2 border-t border-gray-300">
          <div className="flex justify-between items-center">
            <p className="text-gray-900 font-bold text-lg md:text-xl">Items Total</p>
            <p className="text-gray-900 font-bold text-lg md:text-xl">
              ₹ {calculateSubTotal()}
            </p>
          </div>
        </div>
        {cartItems.length === 0 && (
          <p className="text-gray-600 px-4 py-4 font-bold text-xl md:text-2xl">
            Your Cart is empty.{" "}
            <Link href="/all-category" className="underline">
              Continue Shopping
            </Link>
          </p>
        )}
      </div>

      <div className="w-full md:w-1/2 bg-gray-100 p-4 md:p-8">
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Order Summary
          </h3>
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-900 font-bold md:text-lg text-md">Sub Total</p>
            <p className="text-gray-900 font-bold md:text-lg text-md">
              ₹ {calculateSubTotal()}
            </p>
          </div>
          <hr className="border-gray-300 my-4" />
          <div className="mb-6">
            <p className="text-gray-900 font-bol md:text-lg text-md mb-2">
              Apply Coupon
            </p>
            <div className="flex flex-col sm:flex-row">
              <input
                type="text"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-t-md sm:rounded-t-none sm:rounded-l-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter coupon code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button
                onClick={applyPromoCode}
                className="px-4 py-2 bg-black text-white rounded-b-md sm:rounded-b-none sm:rounded-r-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-black"
              >
                Apply
              </button>
            </div>
            {couponError && <p className="text-red-500 mt-2">{couponError}</p>}
          </div>
          {appliedCoupon && (
            <div className="mt-4">
              <p className="text-green-600 font-semibold md:text-lg text-md">
                Coupon applied! You saved ₹{calculateTotalSavings()}.
              </p>
              <div className="flex justify-between items-center mt-2 mb-2">
                <p className="text-gray-900 font-bold md:text-lg text-md">Discount</p>
                <p className="text-gray-900 font-bold md:text-lg text-md">
                  - ₹{calculateTotalSavings()}
                </p>
              </div>
              <button
                onClick={removeCoupon}
                className="text-red-600 underline hover:text-red-800 focus:outline-none"
              >
                Remove Coupon
              </button>
            </div>
          )}
          <div className="flex justify-between items-center mt-4 mb-6">
            <p className="text-gray-900 font-bold text-xl md:text-2xl">Total</p>
            <p className="text-gray-900 font-bold text-xl md:text-2xl">
              ₹ {calculateTotalAfterDiscount()}
            </p>
          </div>
          <button
            className="w-full px-6 py-3 bg-black text-white rounded-md uppercase font-bold text-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            onClick={createOrder}
            disabled={isProcessingOrder}
          >
            {isProcessingOrder ? "Processing..." : "Proceed to Checkout"}
          </button>
        </div>
      </div>

    </div>
  );
}