import React from "react";

export default function Checkout() {
  return (
    <div className="min-h-screen bg-[url('/Home/nexibles-1.png')] bg-cover bg-center bg-no-repeat flex justify-center py-10">
      <div className="bg-white w-full max-w-5xl rounded-xl p-8 shadow-lg max-w-6xl mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Shipping Information Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-600 mb-6">
              Shipping Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-xl mb-2 text-[#464087]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="eg JohnSmith@gmail.com"
                  className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] "
                  //                    className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] "
                />
                <label className="block font-semibold text-xl mt-2 text-[#464087]">
                  Shipping
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-2 text-[#464087]">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="eg John Smith"
                    className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] "
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2 text-[#464087]">
                    Number
                  </label>
                  <input
                    type="text"
                    placeholder="eg +91 88745 6xxxx"
                    className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] "
                  />
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-2 text-[#464087]">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="eg 1, Mumbai Road, Churchgate"
                  className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] "
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-2 text-[#464087]">
                    Flat Number
                  </label>
                  <input
                    type="text"
                    placeholder="eg 501 A-wing"
                    className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] "
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2 text-[#464087]">
                    Landmark
                  </label>
                  <input
                    type="text"
                    placeholder="eg near churchgate station"
                    className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] "
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block font-semibold mb-2 text-[#464087]">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="eg Mumbai"
                    className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] "
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2 text-[#464087]">
                    State
                  </label>
                  <input
                    type="text"
                    placeholder="eg Maharashtra"
                    className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] "
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2 text-[#464087]">
                    Pincode
                  </label>
                  <input
                    type="text"
                    placeholder="eg 400021"
                    className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] "
                  />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  id="saveInfo"
                  className="h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <label
                  htmlFor="saveInfo"
                  className="ml-2 block text-sm leading-5 text-[#464087]"
                >
                  Save this information for next time
                </label>
              </div>
              <h3 className="text-xl font-semibold text-[#464087] mt-6">
                Billing Address
              </h3>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Same as Shipping Address"
                  className="w-3/4 border border-[#464087] p-1 rounded-xl text-[#464087] my-2"
                />
                <input
                  type="text"
                  placeholder="Use a different Billing Address"
                  //   className="w-3/4 border border-[#464087] p-3 rounded-xl"
                  className="w-3/4  border border-[#464087] p-1 rounded-xl text-[#464087] "
                />
              </div>
            </div>
          </div>

          {/* Cart Section */}
          <div className="space-y-6 space-x-14">
            <h2 className="text-2xl ml-14 font-bold text-gray-600 mb-4 ">
              Cart
            </h2>

            <div>
              <div>
                <h3 className="text-xl font-semibold text-[#464087]">
                  Product Name
                </h3>
                <button className="border border-gray-400 py-1 px-3 rounded-xl text-sm">
                  Quantity
                </button>
              </div>

              <div className="flex justify-between items-start mt-4">
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-[#464087]">Details</h3>
                  <input
                    type="text"
                    placeholder="Size"
                    className="w-3/4 border border-[#464087] rounded-xl p-1 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Colour"
                    className="w-3/4 border border-[#464087] rounded-xl p-1 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Photo"
                    className="w-3/4 border border-[#464087] rounded-xl p-1 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Name (From)"
                    className="w-3/4 border border-[#464087] rounded-xl p-1 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Custom Message"
                    className="w-3/4 border border-[#464087] rounded-xl p-1 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="List Of Names (To)"
                    className="w-3/4 border border-[#464087] rounded-lg p-1 text-sm"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <div className="border border-[#464087] w-32 h-32 flex items-center justify-center rounded-xl">
                    <span className="text-[#464087]">Image Preview</span>
                  </div>
                  <button className="mt-2 border border-[#464087] px-4 py-1 rounded-xl text-sm text-[#464087] font-bold">
                    View Mockup
                  </button>
                </div>
              </div>
              <button className="p-4 border border-[#464087] py-1 text-md rounded-xl text-lg font-semibold text-[#464087] mt-4">
                Product Total
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Discount Code"
                  className="border border-[#464087] text-sm p-1 rounded-xl"
                />
                <button className="border border-[#464087] text-sm p-1 rounded-xl">
                  Apply
                </button>
              </div>
              <button className="bg-yellow-400 rounded-lg text-sm p-1 font-semibold text-white">
                Add more products
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  placeholder="Subtotal"
                  className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] font-semibold"
                />
              </div>

              <div className="flex justify-between items-center mt-2">
                <input
                  type="text"
                  placeholder="Shipping"
                  className="w-1/2 border border-[#464087] p-1 rounded-xl"
                />
                <input
                  type="text"
                  placeholder="Enter Shipping Address"
                  className="w-1/2 border border-[#464087] p-1 rounded-xl ml-2"
                />
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <img
                src="/Home/Proceed to Cart Illustration.svg"
                alt="SVG"
                className="w-28 h-40 "
              />
              <button className="bg-yellow-400 flex items-center px-4 py-2 rounded-full text-2xl font-bold text-[#464087] mr-[5rem] w-full mb-20">
                Proceed to Checkout
              </button>
              
            </div>
             <div className="w-full text-center">
                <p className="text-sm text-[#464087] mb-2">Available Payment Options</p>
                <div className="flex justify-center space-x-2">
                {[1, 2, 3, 4, 5].map((box) => (
                    <div key={box} className="w-8 h-8 border border-[#464087] rounded"></div>
                ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
