import React from "react";

const Cart = () => {
  return (
    <div className="min-h-screen bg-[url('/Home/nexibles-1.png')] bg-cover bg-center bg-no-repeat flex justify-center py-10">
      <div className="bg-white w-full max-w-5xl rounded-xl p-8 shadow-lg max-w-6xl mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cart Section */}
          <div className="space-y-6 space-x-14">
            <h2 className="text-2xl ml-14 font-bold text-[#db5c3c] mb-4 ">
              Cart
            </h2>

            <div>
              <div>
                <h3 className="text-xl font-semibold text-[#db5c3c]">
                  Product Name
                </h3>
                <button className="border border-gray-400 py-1 px-3 rounded-xl text-lg font-semibold text-[#db5c3c]">
                  Quantity
                </button>
              </div>

              <div className="flex justify-between items-start mt-4">
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-[#db5c3c]">Details</h3>
                  <input
                    type="text"
                    placeholder="Size"
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
              <button className="p-4 border border-[#464087] py-1 text-md rounded-xl text-lg font-semibold text-[#db5c3c] mt-4">
                Product Total
              </button>
            </div>
            {/* <div className="flex justify-between items-center mt-4">
              <img
                src="/Home/Proceed to Cart Illustration.svg"
                alt="SVG"
                className="w-28 h-40 "
              />
              <button className="bg-yellow-400 flex items-center px-4 py-2 rounded-full text-2xl font-bold text-[#464087] mr-[5rem] w-full mb-20">
                Proceed to Checkout
              </button>
            </div> */}
          </div>
          {/* Summary Information Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#db5c3c] mb-6">Summary</h2>
            <h2 className="text-xl font-bold text-[#db5c3c] mb-4 border border-[#464087] p-1 rounded-xl ">
              Subtotal
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Shipping"
                    className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] "
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Pincode"
                    className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] "
                  />
                </div>
              </div>
              <h2 className="text-xl font-bold text-[#db5c3c] mb-4 border border-[#464087] p-1 rounded-xl ">
                Total
              </h2>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
