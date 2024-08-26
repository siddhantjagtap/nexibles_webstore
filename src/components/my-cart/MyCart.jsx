import React from "react";
import { BsCart3 } from "react-icons/bs";
import { FaCircleMinus } from "react-icons/fa6";
import Link from "next/link";

export default function MyCart() {
  // Mock data for demonstration
  const cartItems = [
    {
      name: "Product 1",
      image: "/path-to-image1.jpg",
      selectedOptions: {
        Size: { optionName: "Large", price: 100 },
        Color: { optionName: "Red", price: 50 }
      },
      quantity: 2,
      totalPrice: 300
    },
    // Add more mock items as needed
  ];

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.totalPrice, 0);
  };

  return (
    <div className="h-screen mt-[4rem]">
    <div className="md:flex bg-white ">
      <div className="md:w-1/2 w-full bg-white md:px-6 border-t">
        <h2 className="text-blue-3 py-4 px-8 font-bold md:text-3xl text-xl border-gray-200 flex">
          My Cart <BsCart3 className="ml-4" size={32} />
        </h2>
        <div className="flex flex-col space-y-4 py-2 px-4 md:px-6">
          {cartItems.map((item, index) => (
            <div key={index} className="w-full">
              <div className="flex md:items-start justify-between flex-col p-2 m-2 rounded-md border border-gray-400 items-center md:flex-row">
                <div className="flex justify-between">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-35 w-44"
                  />
                  <div className="px-2 md:px-4">
                    <div className="flex justify-between">
                      <p className="text-gray-900 font-bold md:text-xl text-base">
                        {item.name}
                      </p>
                    </div>
                    {Object.keys(item.selectedOptions).length > 0 && (
                      <div className="bg-white w-full">
                        <div className="flex justify-between items-center py-2">
                          <ul className="">
                            {Object.entries(item.selectedOptions).map(([key, option]) => (
                              <div key={key}>
                                <li className="text-gray-900">
                                  {key}: {option.optionName}
                                </li>
                                <li>
                                  Price: ₹ {option.price}
                                </li>
                              </div>
                            ))}
                            <div className="flex justify-between gap-8 font-semibold">
                              <li>
                                Quantity: {item.quantity}
                              </li>
                            </div>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <FaCircleMinus
                  className="text-gray-900 cursor-pointer"
                  size={32}
                />
              </div>
            </div>
          ))}
          <hr className="border border-gray-300" />
          <div className="flex justify-between px-4 md:px-6">
            <p className="text-gray-900 font-bold text-xl">Items Total</p>
            <p className="text-gray-900 font-bold text-xl">
              ₹ {calculateTotalPrice()}
            </p>
          </div>
          <hr className="border border-gray-300" />
          {cartItems.length === 0 && (
            <p className="text-gray-600 px-4 md:px-6 py-4 font-bold text-2xl">
              Your Cart is empty.
              <span className="font-bold underline">
                <Link href="/all-category">Continue Shopping</Link>
              </span>
            </p>
          )}
        </div>
      </div>

      <div className="md:w-1/2 w-full bg-gray-300 p-8">
        <div className="h-full w-full bg-white md:p-8 p-4">
          <h3 className="px-6 md:text-3xl text-xl font-bold text-gray-900">
            Order Summary
          </h3>
          <div className="flex mt-10 justify-between items-center px-6">
            <p className="text-gray-900 font-bold text-base">Sub Total</p>
            <p className="text-gray-900 font-bold text-base">
              ₹ {calculateTotalPrice()}
            </p>
          </div>
          <div className="px-6 py-4">
            <hr className="text-gray-500" />
          </div>
          <div className="md:flex flex-col justify-between items-start px-6">
            <p className="text-gray-900 md:text-xl text-base font-semibold mb-4">
              Apply Promo Code
            </p>
            <div className="md:flex md:space-x-4 spacex-x-0 md:space-y-0 space-y-4">
              <input
                type="text"
                className="md:w-96 w-full px-6 py-2 rounded-md border-2 border-gray-900 text-gray-900"
                placeholder="Enter Promo code"
              />
              <button className="px-10 py-2 uppercase bg-gray-900 text-white rounded-md">
                apply
              </button>
            </div>
          </div>
          <div className="mt-24 px-6">
            <button className="px-14 py-2 uppercase bg-gray-900 text-white rounded-md">
              checkout
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}