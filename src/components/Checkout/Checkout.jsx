// //old

"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/utils/authContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

export default function Checkout({ defaultAddress }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [orderNo, setOrderNo] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const router = useRouter();
  const [loading2, setLoading2] = useState(false);
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
    const loadCartData = () => {
      if (typeof window !== "undefined") {
        try {
          const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
          const storedOrderNo = localStorage.getItem("orderNo");
          const storedSubtotal = localStorage.getItem("subtotal");

          let total = parseFloat(storedSubtotal) || 0;
          if (isNaN(total)) {
            total = storedItems.reduce(
              (sum, item) => sum + (parseFloat(item.price) || 0),
              0
            );
          }

          setCartItems(storedItems);
          setTotalPrice(total.toFixed(2));
          setOrderNo(storedOrderNo);
        } catch (error) {
          console.error("Error loading cart data:", error);
        }
      }
    };

    loadCartData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!user) {
        throw new Error("User not authenticated");
      }
      let customerId = user?.result?.customerId || user?.customerId;
      const formDataWithCustomerId = { ...formData, customerId };
      const response = await fetch(
        "https://nexiblesapp.barecms.com/api/customerAddress",
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
      router.reload();
    } catch (error) {
      console.error("Error inserting address:", error);
    } finally {
      setLoading(false);
    }
  };

  const makePayment = async (e) => {
    e.preventDefault();
    setLoading2(true);
    const intamount = Math.round(totalPrice * 100);
    const data = {
      orderNo: orderNo,
      name: user?.result?.firstName ?? user?.firstName,
      number: user?.result?.mobile ?? user?.mobile,
      MUID: user?.result?.customerId ?? user?.customerId,
      amount: intamount,
      transactionId: "G" + Date.now(),
    };

    try {
      const paymentResponse = await axios.post(
        "https://nexiblesapp.barecms.com/api/payment",
        data
      );
      const {
        url: paymentUrl,
        transactionId,
        merchantId,
      } = paymentResponse.data;
      window.location.href = paymentUrl;
      window.addEventListener("message", async function (event) {
        if (
          event.origin === "https://nexiblesapp.barecms.com" &&
          event.data.paymentComplete
        ) {
          try {
            const statusResponse = await axios.post(
              `https://nexiblesapp.barecms.com/api/status/${transactionId}/${merchantId}`
            );
            const { redirectUrl } = statusResponse.data;
            if (redirectUrl) {
              window.location.href = redirectUrl;
            } else {
              console.error("No redirect URL provided in the status response");
            }
          } catch (statusError) {
            console.error("Error checking payment status:", statusError);
          }
        }
      });
    } catch (error) {
      console.error("Error initiating payment:", error);
    } finally {
      setLoading2(false);
    }
  };

  return (
    <div className="min-h-screen bg-[url('/Contact_Us_Page/Contact_Us_Background.jpg')] bg-cover bg-center bg-no-repeat flex justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white w-full max-w-5xl rounded-xl p-4 sm:p-8 shadow-lg mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Shipping Information Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-600 mb-6">
              Shipping Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-lg sm:text-xl mb-2 text-[#464087]">
                  Email
                </label>
                <h3 className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] text-sm sm:text-base">
                  {user?.result?.emailAddress}
                </h3>
                <label className="block font-semibold text-lg sm:text-xl mt-2 text-[#464087]">
                  Shipping
                </label>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {defaultAddress &&
                defaultAddress.data &&
                defaultAddress.data.isDefault ? (
                  <>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <p className="text-[#464087] uppercase text-xl md:text-2xl font-bold">
                            {user?.result?.firstName ?? user?.firstName}{" "}
                            {user?.result?.lastName ?? user?.lastName}
                          </p>
                        </div>
                        {Object.entries(defaultAddress.data).map(
                          ([key, value]) => {
                            if (
                              value !== null &&
                              value !== undefined &&
                              value !== ""
                            ) {
                              const displayedKey =
                                key === "title" ? "Company Name" : key;
                              if (
                                displayedKey !== "customerId" &&
                                displayedKey !== "isDefault" &&
                                displayedKey !== "id"
                              ) {
                                let displayValue = value;

                                if (
                                  key === "addedon" &&
                                  typeof value === "string"
                                ) {
                                  const date = new Date(value);
                                  displayValue = date
                                    .toISOString()
                                    .split("T")[0];
                                }

                                return (
                                  <p className="text-[#464087]" key={key}>
                                    <span className="font-bold">
                                      {displayedKey.charAt(0).toUpperCase() +
                                        displayedKey.slice(1)}
                                      :
                                    </span>{" "}
                                    {displayValue}
                                  </p>
                                );
                              }
                            }
                            return null;
                          }
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold mb-2 text-[#464087]">
                          Name
                        </label>
                        <input
                          type="text"
                          name="title"
                          placeholder="eg John Smith"
                          value={formData.title}
                          onChange={handleChange}
                          className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-2 text-[#464087]">
                          Number
                        </label>
                        <input
                          type="text"
                          name="phone"
                          placeholder="eg +91 88745 6xxxx"
                          className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] text-sm sm:text-base"
                          maxLength="9"
                          pattern="[0-9]{9}"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-semibold mb-2 text-[#464087]">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="eg 1, Mumbai Road, Churchgate"
                        className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] text-sm sm:text-base"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold mb-2 text-[#464087]">
                          Flat Number
                        </label>
                        <input
                          type="text"
                          name="floor"
                          value={formData.floor}
                          onChange={handleChange}
                          placeholder="eg 501 A-wing"
                          className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-2 text-[#464087]">
                          Landmark
                        </label>
                        <input
                          type="text"
                          name="address2"
                          value={formData.address2}
                          onChange={handleChange}
                          placeholder="eg near churchgate station"
                          className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] text-sm sm:text-base"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block font-semibold mb-2 text-[#464087]">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="eg Mumbai"
                          className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-2 text-[#464087]">
                          State
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          placeholder="eg Maharashtra"
                          className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-2 text-[#464087]">
                          Pincode
                        </label>
                        <input
                          type="text"
                          name="zip"
                          value={formData.zip}
                          onChange={handleChange}
                          placeholder="eg 400021"
                          className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] text-sm sm:text-base"
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={handleSubmit}
                        className="border border-[#464087] p-1 rounded-xl text-[#464087] text-sm sm:text-base"
                      >
                        SAVE
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Cart Section */}
          <div className="space-y-6 space-x-0 sm:space-x-14">
            <h2 className="text-xl sm:text-2xl ml-0 sm:ml-14 font-bold text-gray-600 mb-4">
              Cart
            </h2>

            <div>
              {cartItems.map((item, index) => (
                <div key={index} className="mb-8">
                  <div className="mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#464087]">
                      {item.name}
                    </h3>
                    <button className="border border-gray-400 py-1 px-3 rounded-xl text-sm">
                      {item.quantity}
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start mt-4">
                    <div className="flex-1 space-y-2 w-full sm:w-auto mb-4 sm:mb-0">
                      <h3 className="font-semibold text-[#464087]">Details</h3>
                      <h3 className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
                        {item.productSize}
                      </h3>
                      <h3 className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
                        {item.customer_name}
                      </h3>
                      <h3 className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
                        {item.custom_message}
                      </h3>
                    </div>
                    <div className="flex flex-col items-center w-full sm:w-auto">
                      <div className="w-full sm:w-32 h-32 flex items-center justify-center rounded-xl">
                        {item.uploaded_picture ? (
                          <img
                            src={`https://nexiblesapp.barecms.com/uploads/${item.uploaded_picture}`}
                            alt="Product"
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <span className="text-[#464087]">Image Preview</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button className="w-full sm:w-auto p-4 border border-[#464087] py-1 text-md rounded-xl text-lg font-semibold text-[#464087] mt-4">
                    Product Total {`₹ ${item.price}`}
                  </button>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="Discount Code"
                  className="border border-[#464087] text-sm p-1 rounded-xl w-full sm:w-auto"
                />
                <button className="border border-[#464087] text-sm p-1 rounded-xl">
                  Apply
                </button>
              </div>
              <Link
                href="/category"
                className="bg-yellow-400 rounded-lg text-md p-1 font-semibold text-white w-full sm:w-auto text-center"
              >
                Add more products
              </Link>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] font-semibold text-sm sm:text-base">
                  Product Total {`₹ ${totalPrice}`}
                </h3>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
              <img
                src="/Home/Proceed to Cart Illustration.svg"
                alt="SVG"
                className="w-28 h-40 mb-4 sm:mb-0"
              />
              <button
                onClick={makePayment}
                disabled={loading2}
                className="bg-yellow-400 flex items-center px-4 py-2 rounded-full text-xl sm:text-2xl font-bold text-[#464087] w-full sm:w-auto sm:mr-[5rem] mb-4 sm:mb-20 justify-center"
              >
                {loading2 ? "Processing..." : "Proceed To Pay"}
              </button>
            </div>
            <div className="w-full text-center">
              <p className="text-sm text-[#464087] mb-2">
                Available Payment Options
              </p>
              <div className="flex justify-center space-x-2">
                {[1, 2, 3, 4, 5].map((box) => (
                  <div
                    key={box}
                    className="w-6 h-6 sm:w-8 sm:h-8 border border-[#464087] rounded"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





// // //old

// "use client";
// import React, { useState, useEffect } from "react";
// import { useAuth } from "@/utils/authContext";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import axios from "axios";

// export default function Checkout({ defaultAddress }) {
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [cartItems, setCartItems] = useState([]);
//   const [orderNo, setOrderNo] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const { user } = useAuth();
//   const router = useRouter();
//   const [loading2, setLoading2] = useState(false);
//   const [formData, setFormData] = useState({
//     customerId: "",
//     location: "",
//     serviceArea: "",
//     title: "",
//     houseno: "",
//     floor: "",
//     address: "",
//     address2: "",
//     state: "",
//     city: "",
//     zip: "",
//     country: "",
//     phone: "",
//     mobile: "",
//     addressType: "",
//     company: "",
//     addedon: new Date().toISOString(),
//     latlong: "",
//     street_no: "",
//     isDefault: "1",
//   });

//   useEffect(() => {
//     const loadCartData = () => {
//       if (typeof window !== 'undefined') {
//         try {
//           const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
//           const storedOrderNo = localStorage.getItem("orderNo");
//           const storedSubtotal = localStorage.getItem("subtotal");

//           let total = parseFloat(storedSubtotal) || 0;
//           if (isNaN(total)) {
//             total = storedItems.reduce((sum, item) => sum + (parseFloat(item.price) || 0), 0);
//           }

//           setCartItems(storedItems);
//           setTotalPrice(total.toFixed(2));
//           setOrderNo(storedOrderNo);
//         } catch (error) {
//           console.error("Error loading cart data:", error);
//         }
//       }
//     };

//     loadCartData();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       if (!user) {
//         throw new Error("User not authenticated");
//       }
//       let customerId = user?.result?.customerId || user?.customerId;
//       const formDataWithCustomerId = { ...formData, customerId };
//       const response = await fetch(
//         "https://nexiblesapp.barecms.com/api/customerAddress",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formDataWithCustomerId),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to insert address");
//       }
//       const data = await response.json();
//       console.log("Address inserted successfully:", data);
//       router.reload();
//     } catch (error) {
//       console.error("Error inserting address:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const makePayment = async (e) => {
//     e.preventDefault();
//     setLoading2(true);
//     const intamount = Math.round(totalPrice * 100);
//     const data = {
//       orderNo: orderNo,
//       name: user?.result?.firstName ?? user?.firstName,
//       number: user?.result?.mobile ?? user?.mobile,
//       MUID: user?.result?.customerId ?? user?.customerId,
//       amount: intamount,
//       transactionId: "G" + Date.now(),
//     };

//     try {
//       const paymentResponse = await axios.post("https://nexiblesapp.barecms.com/api/payment", data);
//       const { url: paymentUrl, transactionId, merchantId } = paymentResponse.data;

//       // Redirect to the payment URL
//       window.location.href = paymentUrl;

//       // Set up a listener for the payment completion
//       window.addEventListener('message', async function (event) {
//         if (event.origin === "https://nexiblesapp.barecms.com" && event.data.paymentComplete) {
//           try {
//             const statusResponse = await axios.post(`https://nexiblesapp.barecms.com/api/status/${transactionId}/${merchantId}`);
//             const { redirectUrl } = statusResponse.data;
//             if (redirectUrl) {
//               window.location.href = redirectUrl;
//             } else {
//               console.error('No redirect URL provided in the status response');
//             }
//           } catch (statusError) {
//             console.error('Error checking payment status:', statusError);
//           }
//         }
//       });
//     } catch (error) {
//       console.error('Error initiating payment:', error);
//     } finally {
//       setLoading2(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[url('/Contact_Us_Page/Contact_Us_Background.jpg')] bg-cover bg-center bg-no-repeat flex justify-center py-10">
//       <div className="bg-white w-full max-w-5xl rounded-xl p-8 shadow-lg  mt-24">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Shipping Information Section */}
//           <div>
//             <h2 className="text-2xl font-bold text-gray-600 mb-6">
//               Shipping Information
//             </h2>
//             <div className="space-y-4">
//               <div>
//                 <label className="block font-semibold text-xl mb-2 text-[#464087]">
//                   Email
//                 </label>
//                 <h3 class="w-full border border-[#464087] p-1 rounded-xl text-[#464087]">
//                   {user?.result?.emailAddress}
//                 </h3>
//                 <label className="block font-semibold text-xl mt-2 text-[#464087]">
//                   Shipping
//                 </label>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {defaultAddress && defaultAddress.data && defaultAddress.data.isDefault ? (
//                   <>
//                     <div className="space-y-4">
//                       <div className="space-y-2">
//                         <div className="flex justify-between items-center">
//                           <p className="text-[#464087] uppercase text-xl md:text-2xl font-bold">
//                             {user?.result?.firstName ?? user?.firstName}{" "}
//                             {user?.result?.lastName ?? user?.lastName}
//                           </p>
//                         </div>
//                         {Object.entries(defaultAddress.data).map(([key, value]) => {
//                           if (value !== null && value !== undefined && value !== "") {
//                             const displayedKey = key === "title" ? "Company Name" : key;
//                             if (
//                               displayedKey !== "customerId" &&
//                               displayedKey !== "isDefault" &&
//                               displayedKey !== "id"
//                             ) {
//                               let displayValue = value;

//                               if (key === "addedon" && typeof value === "string") {
//                                 const date = new Date(value);
//                                 displayValue = date.toISOString().split("T")[0];
//                               }

//                               return (
//                                 <p className="text-[#464087]" key={key}>
//                                   <span className="font-bold">
//                                     {displayedKey.charAt(0).toUpperCase() +
//                                       displayedKey.slice(1)}
//                                     :
//                                   </span>{" "}
//                                   {displayValue}
//                                 </p>
//                               );
//                             }
//                           }
//                           return null;
//                         })}
//                       </div>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block font-semibold mb-2 text-[#464087]">Name</label>
//                         <input
//                           type="text"
//                           name="title"
//                           placeholder="eg John Smith"
//                           value={formData.title}
//                           onChange={handleChange}
//                           className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] "
//                         />
//                       </div>
//                       <div>
//                         <label className="block font-semibold mb-2 text-[#464087]">Number</label>
//                         <input
//                           type="text"
//                            name="phone"
//                           placeholder="eg +91 88745 6xxxx"
//                           className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] "
//                           maxlength="9"
//                           pattern="[0-9]{9}"
//                           value={formData.phone}
//                           onChange={handleChange}
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <label className="block font-semibold mb-2 text-[#464087]">Address</label>
//                       <input
//                         type="text"
//                          name="address"
//                         value={formData.address}
//                         onChange={handleChange}
//                         placeholder="eg 1, Mumbai Road, Churchgate"
//                         className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] "
//                       />
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block font-semibold mb-2 text-[#464087]">Flat Number</label>
//                         <input
//                           type="text"
//                              name="floor"
//                           value={formData.floor}
//                           onChange={handleChange}
//                           placeholder="eg 501 A-wing"
//                           className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] "
//                         />
//                       </div>
//                       <div>
//                         <label className="block font-semibold mb-2 text-[#464087]">Landmark</label>
//                         <input
//                           type="text"
//                            name="address2"
//                           value={formData.address2}
//                           onChange={handleChange}
//                           placeholder="eg near churchgate station"
//                           className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] "
//                         />
//                       </div>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                       <div>
//                         <label className="block font-semibold mb-2 text-[#464087]">City</label>
//                         <input
//                           type="text"
//                            name="city"
//                           value={formData.city}
//                           onChange={handleChange}
//                           placeholder="eg Mumbai"
//                           className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] "
//                         />
//                       </div>
//                       <div>
//                         <label className="block font-semibold mb-2 text-[#464087]">State</label>
//                         <input
//                           type="text"
//                           name="state"
//                           value={formData.state}
//                           onChange={handleChange}
//                           placeholder="eg Maharashtra"
//                           className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] "
//                         />
//                       </div>
//                       <div>
//                         <label className="block font-semibold mb-2 text-[#464087]">Pincode</label>
//                         <input
//                           type="text"
//                           name="zip"
//                           value={formData.zip}
//                           onChange={handleChange}
//                           placeholder="eg 400021"
//                           className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] "
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <button onClick={handleSubmit} className="border border-[#464087] p-1 rounded-xl text-[#464087] ">
//                         SAVE
//                       </button>
//                     </div>
//                     {/* <div className="flex items-center mt-4">
//         <input
//           type="checkbox"
//           id="saveInfo"
//           className="h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
//         />
//         <label
//           htmlFor="saveInfo"
//           className="ml-2 block text-sm leading-5 text-[#464087]"
//         >
//           Save this information for next time
//         </label>
//       </div> */}
//                   </>
//                 )}
//               </div>

//               {/* <h3 className="text-xl font-semibold text-[#464087] mt-6">
//                 Billing Address
//               </h3>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   placeholder="Same as Shipping Address"
//                   className="w-3/4 border border-[#464087] p-1 rounded-xl text-[#464087] my-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Use a different Billing Address"
//                   //   className="w-3/4 border border-[#464087] p-3 rounded-xl"
//                   className="w-3/4  border border-[#464087] p-1 rounded-xl text-[#464087] "
//                 />
//               </div> */}
//             </div>
//           </div>

//           {/* Cart Section */}
//           <div className="space-y-6 space-x-14">
//             <h2 className="text-2xl ml-14 font-bold text-gray-600 mb-4 ">
//               Cart
//             </h2>

//             <div>
//               {cartItems.map((item, index) => (
//                 <div key={index}>
//                   <div  className="mb-4">
//                     <h3 className="text-xl font-semibold text-[#464087]">
//                       {item.name}
//                     </h3>
//                     <button className="border border-gray-400 py-1 px-3 rounded-xl text-sm">
//                       {item.quantity}
//                     </button>
//                   </div>

//                   <div className="flex justify-between items-start mt-4">
//                     <div className="flex-1 space-y-2">
//                       <h3 className="font-semibold text-[#464087]">Details</h3>
//                       <h3 className="w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
//                         {item.productSize}
//                       </h3>
//                       {/* <h3 className="w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
//                         Colour
//                       </h3> */}
//                       {/* <h3 className="w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
//                         Photo
//                       </h3> */}
//                       <h3 className="w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
//                         {item.customer_name}
//                       </h3>
//                       <h3 className="w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
//                         {item.custom_message}
//                       </h3>
//                       {/* <h3 className="w-3/4 border border-[#464087] rounded-lg p-1 text-sm">
//                         List Of Names (To)
//                       </h3> */}
//                     </div>
//                     <div className="flex flex-col items-center">
//                       <div className=" w-32 h-32 flex items-center justify-center rounded-xl">
//                         {item.uploaded_picture ? (
//                           <img
//                             src={`https://nexiblesapp.barecms.com/uploads/${item.uploaded_picture}`}
//                             alt="Product"
//                             className="object-cover w-full h-full"
//                           />
//                         ) : (
//                           <span className="text-[#464087]">Image Preview</span>
//                         )}
//                       </div>
//                     </div>

//                   </div>
//                   <button className="p-4 border border-[#464087] py-1 text-md rounded-xl text-lg font-semibold text-[#464087] mt-4">
//                     Product Total {`₹ ${item.price}`}
//                   </button>
//                 </div>
//               ))}
//             </div>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-2">
//                 <input
//                   type="text"
//                   placeholder="Discount Code"
//                   className="border border-[#464087] text-sm p-1 rounded-xl"
//                 />
//                 <button className="border border-[#464087] text-sm p-1 rounded-xl">
//                   Apply
//                 </button>
//               </div>
//               <Link href="/category" className="bg-yellow-400 rounded-lg text-md p-1 font-semibold text-white">
//                 Add more products
//               </Link>
//             </div>

//             <div className="space-y-4">
//               <div className="flex justify-between items-center">
//                 <h3 className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] font-semibold">
//                 Product Total {`₹ ${totalPrice}`}
//                 </h3>
//               </div>

//               {/* <div className="flex justify-between items-center mt-2">
//                 <h3 className="w-1/2 border border-[#464087] p-1 rounded-xl">
//                   Shipping
//                 </h3>
//                 <h3 className="w-1/2 border border-[#464087] p-1 rounded-xl ml-2">
//                   Enter Shipping Address
//                 </h3>
//               </div> */}
//             </div>

//             <div className="flex justify-between items-center mt-4">
//               <img
//                 src="/Home/Proceed to Cart Illustration.svg"
//                 alt="SVG"
//                 className="w-28 h-40 "
//               />
//               <button  onClick={makePayment}  disabled={loading2} className="bg-yellow-400 flex items-center px-4 py-2 rounded-full text-2xl font-bold text-[#464087] mr-[5rem] w-full mb-20">
//               {loading2 ? 'Processing...' : 'Proceed To Pay'}
//               </button>

//             </div>
//             <div className="w-full text-center">
//               <p className="text-sm text-[#464087] mb-2">Available Payment Options</p>
//               <div className="flex justify-center space-x-2">
//                 {[1, 2, 3, 4, 5].map((box) => (
//                   <div key={box} className="w-8 h-8 border border-[#464087] rounded"></div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
