"use client";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";
import { useAuth } from "../../utils/authContext";
import { toast } from "react-toastify";
import jwt from "jsonwebtoken";
import { BsCart3 } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { user, logout } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();
  const [shippingCost, setShippingCost] = useState(50);

  const isLoggedIn = () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      return !!token;
    }
    return false;
  };

  useEffect(() => {
    // Load cart items from localStorage on client-side only
    const loadCartItems = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(cart);
    };

    loadCartItems();
  }, []);

  const calculateSubtotal = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + Number(item.price),
      0
    );
    if (typeof window !== "undefined") {
      localStorage.setItem("subtotal", subtotal.toString());
    }
    return subtotal;
  };

  useEffect(() => {
    calculateSubtotal();
  }, [cartItems]);

  const calculateTotal = () => {
    return calculateSubtotal() + parseFloat(shippingCost || 50);
  };

  const handleRemoveItem = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const getOrderDetailsFromLocalStorage = () => {
    return cartItems.map((product) => ({
      id: product.id,
      name: product.name,
      image: product.picture,
      price: product.price,
      quantity: product.quantity,
      category: product.category,
      size: product.productSize,
      custom_message: product.custom_message,
      customer_name: product.customer_name,
      uploaded_receivers: product.uploaded_receivers,
      uploaded_picture: product.uploaded_picture,
      origin:"Nexigifting"
    }));
  };

  const createOrder = async (e) => {
    e.preventDefault();
    try {
      if (!isLoggedIn()) {
        toast.success("You need to login first");
        router.push("/login");
        return;
      }

      let userDetails;
      if (typeof window !== "undefined") {
        const authToken = localStorage.getItem("token");
        if (authToken) {
          const decodedToken = jwt.decode(authToken);
          userDetails = decodedToken;
        }
      }

      if (userDetails && userDetails.result) {
        const orderNo = `ORDER-${Date.now()}-${Math.floor(
          Math.random() * 1000
        )}`;
        const orderDate = new Date().toISOString();
        const orderDetails = getOrderDetailsFromLocalStorage();

        const requestBody = {
          orderNo: orderNo,
          orderDate: orderDate,
          pmtMethod: "",
          customerID: userDetails.result.customerId || "",
          salutation: userDetails.result.salutation || "",
          firstName: userDetails?.result?.firstName || "",
          lastName: userDetails.result.lastName || "",
          mobile: userDetails.result.mobile || "",
          eMail: userDetails.result.emailAddress || "",
          street: userDetails.result.street || "",
          address: userDetails.result.address || "",
          city: userDetails.result.city || "",
          state: userDetails.result.state || "",
          company: userDetails.result.company || "",
          zipcode: userDetails.result.zip || "",
          country: userDetails.result.country || "",
          remark: "",
          coupon: "",
          currency: "",
          invamt: "",
          tax: "",
          ordstatus: "",
          discount: "",
          disamt: "",
          promoDiscount: "",
          minDeliveryAmt: "",
          orderCharge: "",
          ipAddress: "",
          confirm_status: "",
          orderDetails: orderDetails,
        };

        const response = await fetch(
          "https://nexiblesapp.barecms.com/api/createorder",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "API-Key": "irrv211vui9kuwn11efsb4xd4zdkuq",
            },
            body: JSON.stringify(requestBody),
          }
        );

        const responseData = await response.json();
        if (typeof window !== "undefined") {
          localStorage.setItem("orderNo", responseData.orderNo);
        }

        if (responseData.success === true) {
          router.push("/checkout");
          toast.success("ORDER CREATED SUCCESSFULLY");
        }
      } else {
        console.error("User details are not available");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-[url('/Cart/cart.jpg')] bg-cover bg-center bg-no-repeat flex justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white w-full max-w-5xl rounded-xl p-4 sm:p-8 shadow-lg mt-20 sm:mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cart Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#db5c3c] mb-4 text-center lg:text-left lg:ml-14">
              Cart
            </h2>
            {cartItems.map((item, index) => (
              <div
                className="border border-[#db5c3c] p-4 rounded-xl"
                key={index}
              >
                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                    <h3 className="text-xl font-semibold text-[#db5c3c]">
                      {item.name || "Product Name"}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <button className="border border-gray-400 py-1 px-3 rounded-xl text-lg font-semibold text-[#db5c3c]">
                        {item.quantity || "Quantity"}
                      </button>
                      <button
                        onClick={() => handleRemoveItem(index)}
                        className="text-red-600"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start mt-4 space-y-4 sm:space-y-0">
                    <div className="flex-1 space-y-2 w-full sm:w-auto">
                      <h3 className="font-semibold text-[#db5c3c]">Details</h3>
                      <h3 className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
                        {item.productSize || "Size"}
                      </h3>
                      <h3 className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
                        {item.customer_name || "Name (From)"}
                      </h3>
                      <h3 className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
                        {item.custom_message || "Custom Message"}
                      </h3>
                      <h3 className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
                        {item.uploaded_picture || "Uploaded Picture"}
                      </h3>
                      <h3 className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
                        {item.uploaded_receivers || "Uploaded Receivers"}
                      </h3>

                    </div>
                    <div className="flex flex-col items-center w-full sm:w-auto">
                      <div className="w-full sm:w-32 h-32 flex items-center justify-center rounded-xl">
                        {item.uploaded_picture &&
                        item.uploaded_picture !== "Not uploaded" ? (
                          <img
                            src={`https://nexiblesapp.barecms.com/uploads/${item.uploaded_picture}`}
                            alt="Product"
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <span className="text-[#464087]">No Image</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button className="w-full sm:w-auto p-4 border border-[#464087] py-1 text-md rounded-xl text-lg font-semibold text-[#db5c3c] mt-4">
                    Product Total : ₹ {item.price}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Information Section */}
          <div className="mt-8 lg:mt-0">
            <h2 className="text-2xl font-bold text-[#db5c3c] mb-6">Summary</h2>
            <h2 className="text-xl font-bold text-[#db5c3c] mb-4 border border-[#464087] p-1 rounded-xl">
              Subtotal: ₹{calculateSubtotal()}
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h3 className="w-full border border-[#464087] p-1 rounded-xl text-[#464087]">
                    Shipping Cost : {shippingCost || "Shipping"}
                  </h3>
                </div>
              </div>
              <h2 className="text-xl font-bold text-[#db5c3c] mb-4 border border-[#464087] p-1 rounded-xl">
                Total: ₹{calculateTotal()}
              </h2>
              <div className="flex justify-between items-center mt-4">
                <img
                  src="/Home/Proceed to Cart Illustration.svg"
                  alt="SVG"
                  className="w-28 h-40 "
                />
                <button
                  onClick={createOrder}
                  className="bg-[#197d8e] flex items-center px-4 py-2 rounded-full md:text-2xl font-bold text-white md:mr-[5rem] w-full mb-20"
                >
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




// // // old
// "use client";
// import React, { useEffect, useState } from "react";
// import { FaTrash } from "react-icons/fa";
// import Link from 'next/link';
// import { useAuth } from '../../utils/authContext';
// import { toast } from "react-toastify";
// import jwt from "jsonwebtoken";
// import { BsCart3 } from "react-icons/bs";
// import { MdDelete } from "react-icons/md";
// import { useRouter } from "next/navigation";

// const Cart = () => {
//   const { user, logout } = useAuth();
//   const [cartItems, setCartItems] = useState([]);
//   const router = useRouter();
//   const [shippingCost, setShippingCost] = useState(50);

//   const isLoggedIn = () => {
//     if (typeof window !== "undefined") {
//       const token = localStorage.getItem("token");
//       return !!token;
//     }
//     return false;
//   };

//   useEffect(() => {
//     // Load cart items from localStorage on client-side only
//     const loadCartItems = () => {
//       const cart = JSON.parse(localStorage.getItem("cart")) || [];
//       setCartItems(cart);
//     };

//     loadCartItems();
//   }, []);

//   const calculateSubtotal = () => {
//     const subtotal = cartItems.reduce(
//       (total, item) => total + Number(item.price),
//       0
//     );
//     if (typeof window !== "undefined") {
//       localStorage.setItem("subtotal", subtotal.toString());
//     }
//     return subtotal;
//   };

//   useEffect(() => {
//     calculateSubtotal();
//   }, [cartItems]);

//   const calculateTotal = () => {
//     return calculateSubtotal() + parseFloat(shippingCost || 50);
//   };

//   const handleRemoveItem = (indexToRemove) => {
//     const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
//     setCartItems(updatedCart);
//     if (typeof window !== "undefined") {
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//     }
//   };

//   const getOrderDetailsFromLocalStorage = () => {
//     return cartItems.map((product) => ({
//       id: product.id,
//       name: product.name,
//       image: product.picture,
//       price: product.price,
//       quantity: product.quantity,
//       category: product.category,
//       size: product.productSize,
//       custom_message: product.custom_message,
//       customer_name: product.customer_name,
//       uploaded_receivers: product.uploaded_receivers,
//       uploaded_picture: product.uploaded_picture
//     }));
//   };

//   const createOrder = async (e) => {
//     e.preventDefault();
//     try {
//       if (!isLoggedIn()) {
//         toast.success("You need to login first");
//         router.push("/login");
//         return;
//       }

//       let userDetails;
//       if (typeof window !== "undefined") {
//         const authToken = localStorage.getItem("token");
//         if (authToken) {
//           const decodedToken = jwt.decode(authToken);
//           userDetails = decodedToken;
//         }
//       }

//       if (userDetails && userDetails.result) {
//         const orderNo = `ORDER-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
//         const orderDate = new Date().toISOString();
//         const orderDetails = getOrderDetailsFromLocalStorage();

//         const requestBody = {
//           orderNo: orderNo,
//           orderDate: orderDate,
//           pmtMethod: "",
//           customerID: userDetails.result.customerId || "",
//           salutation: userDetails.result.salutation || "",
//           firstName: userDetails?.result?.firstName || "",
//           lastName: userDetails.result.lastName || "",
//           mobile: userDetails.result.mobile || "",
//           eMail: userDetails.result.emailAddress || "",
//           street: userDetails.result.street || "",
//           address: userDetails.result.address || "",
//           city: userDetails.result.city || "",
//           state: userDetails.result.state || "",
//           company: userDetails.result.company || "",
//           zipcode: userDetails.result.zip || "",
//           country: userDetails.result.country || "",
//           remark: "",
//           coupon: "",
//           currency: "",
//           invamt: "",
//           tax: "",
//           ordstatus: "",
//           discount: "",
//           disamt: "",
//           promoDiscount: "",
//           minDeliveryAmt: "",
//           orderCharge: "",
//           ipAddress: "",
//           confirm_status: "",
//           orderDetails: orderDetails,
//         };

//         const response = await fetch("https://nexiblesapp.barecms.com/api/createorder", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "API-Key": "irrv211vui9kuwn11efsb4xd4zdkuq",
//           },
//           body: JSON.stringify(requestBody),
//         });

//         const responseData = await response.json();
//         if (typeof window !== "undefined") {
//           localStorage.setItem("orderNo", responseData.orderNo);
//         }

//         if (responseData.success === true) {
//           router.push("/checkout");
//           toast.success("ORDER CREATED SUCCESSFULLY");
//         }
//       } else {
//         console.error("User details are not available");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   return (
//     <div className="min-h-screen bg-[url('/Cart/cart.jpg')] bg-cover bg-center bg-no-repeat flex justify-center py-10">
//       <div className="bg-white w-full max-w-5xl rounded-xl p-8 shadow-lg mt-28">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Cart Section */}
//           <div className="space-y-6 space-x-14">
//             <h2 className="text-2xl ml-14 font-bold text-[#db5c3c] mb-4 ">
//               Cart
//             </h2>
//             {cartItems.map((item, index) => (
//               <div className="border border-[#db5c3c] p-4 rounded-xl" key={index}>
//                 <div>
//                   <div className="flex justify-between items-center">
//                     <h3 className="text-xl font-semibold text-[#db5c3c]">
//                       {item.name || "Product Name"}
//                     </h3>
//                     <button
//                       className="border border-gray-400 py-1 px-3 rounded-xl text-lg font-semibold text-[#db5c3c]"
//                     >
//                       {item.quantity || "Quantity"}
//                     </button>
//                     {/* Delete button */}
//                     <button
//                       onClick={() => handleRemoveItem(index)}
//                       className="text-red-600"
//                     >
//                       <FaTrash /> {/* Trash icon for delete */}
//                     </button>
//                   </div>

//                   <div className="flex justify-between items-start mt-4">
//                     <div className="flex-1 space-y-2">
//                       <h3 className="font-semibold text-[#db5c3c]">Details</h3>
//                       <h3 className="w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
//                         {item.productSize || "Size"}
//                       </h3>
//                       <h3 className="w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
//                         {item.customer_name || "Name (From)"}
//                       </h3>
//                       <h3 className="w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
//                         {item.custom_message || "Custom Message"}
//                       </h3>
//                     </div>
//                     <div className="flex flex-col items-center">
//                       <div className=" w-32 h-32 flex items-center justify-center rounded-xl">
//                         {item.uploaded_picture && item.uploaded_picture !== "Not uploaded" ? (
//                           <img
//                             src={`https://nexiblesapp.barecms.com/uploads/${item.uploaded_picture}`}
//                             alt="Product"
//                             className="object-cover w-full h-full"
//                           />
//                         ) : (
//                           <span className="text-[#464087]">No Image</span>
//                         )}

//                       </div>
//                     </div>
//                   </div>
//                   <button className="p-4 border border-[#464087] py-1 text-md rounded-xl text-lg font-semibold text-[#db5c3c] mt-4">
//                     Product Total : ₹ {item.price}
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Summary Information Section */}
//           <div>
//             <h2 className="text-2xl font-bold text-[#db5c3c] mb-6">Summary</h2>
//             <h2 className="text-xl font-bold text-[#db5c3c] mb-4 border border-[#464087] p-1 rounded-xl ">
//               Subtotal: ₹{calculateSubtotal()}
//             </h2>
//             <div className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <h3 className="w-full border border-[#464087] p-1 rounded-xl text-[#464087]">
//                     Shipping Cost : {shippingCost || "Shipping"}
//                   </h3>
//                 </div>
//                 {/* <div>
//                   <input
//                     type="text"
//                     placeholder="Enter Pincode"
//                     className="w-full border border-[#464087] p-1 rounded-xl text-[#464087] "
//                   />
//                 </div> */}
//               </div>
//               <h2 className="text-xl font-bold text-[#db5c3c] mb-4 border border-[#464087] p-1 rounded-xl ">
//                 Total: ₹{calculateTotal()} {/* Subtotal + Shipping */}
//               </h2>
              // <div className="flex justify-between items-center mt-4">
              //   <img
              //     src="/Home/Proceed to Cart Illustration.svg"
              //     alt="SVG"
              //     className="w-28 h-40 "
              //   />
              //   <button
              //     onClick={createOrder}
              //     className="bg-yellow-400 flex items-center px-4 py-2 rounded-full text-2xl font-bold text-[#464087] mr-[5rem] w-full mb-20"
              //   >
              //     Proceed to Checkout
              //   </button>
              // </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
