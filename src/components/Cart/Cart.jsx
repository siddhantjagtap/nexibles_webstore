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
  const [modalImage, setModalImage] = useState(null); // New state for modal image
  const [isModalOpen, setIsModalOpen] = useState(false); // New state for modal visibility
  const router = useRouter();
  const [shippingCost, setShippingCost] = useState(0);
  const [isProcessingOrder, setIsProcessingOrder] = useState(false);

  const isLoggedIn = () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      return !!token;
    }
    return false;
  };

  useEffect(() => {
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
    return calculateSubtotal() + parseFloat(shippingCost);
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
      image: product.image,
      price: product.price,
      quantity: product.quantity,
      category: product.category,
      size: product.productSize,
      custom_message: product.custom_message,
      customer_name: product.customer_name,
      uploaded_receivers: product.uploaded_receivers,
      origin: "Nexigifting",
    }));
  };

  const createOrder = async (e) => {
    e.preventDefault();
    if (!isLoggedIn()) {
      toast.error("You need to login first");
      router.push("/login");
    } else {
      router.push("/checkout");
    }
  };

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };
  return (
    <div className="min-h-screen bg-[url('/Cart/cart.jpg')] bg-cover bg-center bg-no-repeat flex justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white w-full max-w-5xl rounded-xl p-4 sm:p-8 shadow-lg mt-20 sm:mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                      <div className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
                        {item.productSize || "Size"}
                      </div>
                      <div className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
                        {item.customer_name || "Name (From)"}
                      </div>
                      <div className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
                        {item.custom_message || "Custom Message"}
                      </div>
                      <div className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
                        {item.uploaded_picture || "Not Uploaded Picture"}
                      </div>
                      <div className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
                        {item.uploaded_receivers || "Not Uploaded Excel"}
                      </div>
                    </div>
                    <div className="flex flex-col items-center w-full sm:w-auto">
                      <div className="w-full sm:w-48 h-48 flex items-center justify-center rounded-xl overflow-hidden">
                        {item.image ? (
                          <img
                            src={`https://nexiblesapp.barecms.com/uploads/${item.image}`}
                            alt="Product"
                            className="object-contain w-full h-full"
                          />
                        ) : (
                          <span className="text-[#464087]">No Image</span>
                        )}
                      </div>
                      {/* <button
                        className="mt-2 bg-[#db5c3c] text-white px-4 py-2 rounded-full font-semibold"
                        onClick={() => openModal(item.image)}
                      >
                        View Mockup
                      </button> */}
                    </div>
                  </div>
                  <button className="w-full sm:w-auto p-4 border border-[#464087] py-1 text-md rounded-xl text-lg font-semibold text-[#db5c3c] mt-4">
                    Product Total : ₹ {item.price}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 lg:mt-0">
            <h2 className="text-2xl font-bold text-[#db5c3c] mb-6">Summary</h2>
            <h2 className="text-xl font-bold text-[#db5c3c] mb-4 border border-[#464087] p-1 rounded-xl">
              Subtotal: ₹{calculateSubtotal()}
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h3 className="w-full border border-[#464087] p-1 rounded-xl text-[#464087]">
                    Shipping Cost : {shippingCost || "Free"}
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
                  className="w-28 h-40 hidden sm:block"
                />
                <button
                  onClick={createOrder}
                  className="bg-[#197d8e] flex items-center px-4 py-2 rounded-full md:text-2xl font-bold text-white md:mr-[5rem] w-full mb-20"
                  disabled={isProcessingOrder}
                >
                  {isProcessingOrder ? "Processing..." : "Proceed to Checkout"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-50 mt-8"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-[25rem] h-auto bg-white rounded-lg p-6 mt-14"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
            {modalImage ? (
              <div className="relative w-full h-auto flex items-center justify-center text-center mx-auto">
                <img
                  src={`https://nexiblesapp.barecms.com/uploads/${modalImage}`}
                  alt="Enlarged Product"
                  className="object-cover w-full max-h-[500px] rounded-md"
                />
                <div className="absolute top-32 bg-opacity-60 text-white text-3xl font-semibold px-4 py-1 rounded">
                  <div>
                    {cartItems.find((item) => item.image === modalImage)
                      ?.customer_name || "Unknown"}
                  </div>
                  <div className="text-lg px-12 mt-4">
                    {cartItems.find((item) => item.image === modalImage)
                      ?.custom_message || "Unknown"}
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-center text-gray-500">No image to display</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

// "use client";
// import React, { useEffect, useState } from "react";
// import { FaTrash } from "react-icons/fa";
// import Link from "next/link";
// import { useAuth } from "../../utils/authContext";
// import { toast } from "react-toastify";
// import jwt from "jsonwebtoken";
// import { BsCart3 } from "react-icons/bs";
// import { MdDelete } from "react-icons/md";
// import { useRouter } from "next/navigation";

// const Cart = () => {
//   const { user, logout } = useAuth();
//   const [cartItems, setCartItems] = useState([]);
//   const [modalImage, setModalImage] = useState(null); // New state for modal image
//   const [isModalOpen, setIsModalOpen] = useState(false); // New state for modal visibility
//   const router = useRouter();
//   const [shippingCost, setShippingCost] = useState(0);
//   const [isProcessingOrder, setIsProcessingOrder] = useState(false);

//   const isLoggedIn = () => {
//     if (typeof window !== "undefined") {
//       const token = localStorage.getItem("token");
//       return !!token;
//     }
//     return false;
//   };

//   useEffect(() => {
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
//     return calculateSubtotal() + parseFloat(shippingCost);
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
//       uploaded_picture: product.uploaded_picture,
//       origin: "Nexigifting"
//     }));
//   };

//   const createOrder = async (e) => {
//     e.preventDefault();
//     if (!isLoggedIn()) {
//       toast.error("You need to login first");
//       router.push("/login");
//     } else {
//       router.push("/checkout");
//     }
//   };

//   const openModal = (image) => {
//     setModalImage(image);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setModalImage(null);
//   };

//   return (
//     <div className="min-h-screen bg-[url('/Cart/cart.jpg')] bg-cover bg-center bg-no-repeat flex justify-center py-10 px-4 sm:px-6 lg:px-8">
//       <div className="bg-white w-full max-w-5xl rounded-xl p-4 sm:p-8 shadow-lg mt-20 sm:mt-28">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <div className="space-y-6">
//             <h2 className="text-2xl font-bold text-[#db5c3c] mb-4 text-center lg:text-left lg:ml-14">
//               Cart
//             </h2>
//             {cartItems.map((item, index) => (
//               <div
//                 className="border border-[#db5c3c] p-4 rounded-xl"
//                 key={index}
//               >
//                 <div>
//                   <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
//                     <h3 className="text-xl font-semibold text-[#db5c3c]">
//                       {item.name || "Product Name"}
//                     </h3>
//                     <div className="flex items-center space-x-2">
//                       <button className="border border-gray-400 py-1 px-3 rounded-xl text-lg font-semibold text-[#db5c3c]">
//                         {item.quantity || "Quantity"}
//                       </button>
//                       <button
//                         onClick={() => handleRemoveItem(index)}
//                         className="text-red-600"
//                       >
//                         <FaTrash />
//                       </button>
//                     </div>
//                   </div>
//                   <div className="flex flex-col sm:flex-row justify-between items-start mt-4 space-y-4 sm:space-y-0">
//                     <div className="flex-1 space-y-2 w-full sm:w-auto">
//                       <h3 className="font-semibold text-[#db5c3c]">Details</h3>
//                       <h3 className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
//                         {item.productSize || "Size"}
//                       </h3>
//                       <h3 className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
//                         {item.customer_name || "Name (From)"}
//                       </h3>
//                       <h3 className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
//                         {item.custom_message || "Custom Message"}
//                       </h3>
//                       <h3 className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
//                         {item.uploaded_picture || "Uploaded Picture"}
//                       </h3>
//                       <h3 className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
//                         {item.uploaded_receivers || "Uploaded Receivers"}
//                       </h3>
//                     </div>
//                     <div className="flex flex-col items-center w-full sm:w-auto">
//                       <div className="w-full sm:w-32 h-48 flex items-center justify-center rounded-xl">
//                         {item.uploaded_picture &&
//                         item.uploaded_picture !== "Not uploaded" ? (
//                           <img
//                             src={`https://nexiblesapp.barecms.com/uploads/${item.uploaded_picture}`}
//                             alt="Product"
//                             className="object-cover w-full h-full"
//                           />
//                         ) : (
//                           <span className="text-[#464087]">No Image</span>
//                         )}
//                       </div>
//                       <button
//                         className="mt-2 bg-[#db5c3c] text-white px-4 py-2 rounded-full font-semibold"
//                         onClick={() => openModal(item.uploaded_picture)}
//                       >
//                         View Mockup
//                       </button>
//                     </div>
//                   </div>
//                   <button className="w-full sm:w-auto p-4 border border-[#464087] py-1 text-md rounded-xl text-lg font-semibold text-[#db5c3c] mt-4">
//                     Product Total : ₹ {item.price}
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="mt-8 lg:mt-0">
//             <h2 className="text-2xl font-bold text-[#db5c3c] mb-6">Summary</h2>
//             <h2 className="text-xl font-bold text-[#db5c3c] mb-4 border border-[#464087] p-1 rounded-xl">
//               Subtotal: ₹{calculateSubtotal()}
//             </h2>
//             <div className="space-y-4">
//               <div className="grid grid-cols-1 gap-4">
//                 <div>
//                   <h3 className="w-full border border-[#464087] p-1 rounded-xl text-[#464087]">
//                     Shipping Cost : {shippingCost || "Free"}
//                   </h3>
//                 </div>
//               </div>
//               <h2 className="text-xl font-bold text-[#db5c3c] mb-4 border border-[#464087] p-1 rounded-xl">
//                 Total: ₹{calculateTotal()}
//               </h2>
//               <div className="flex justify-between items-center mt-4">
//                 <img
//                   src="/Home/Proceed to Cart Illustration.svg"
//                   alt="SVG"
//                   className="w-28 h-40"
//                 />
//                 {/* <button
//                   onClick={createOrder}
//                   className="bg-[#197d8e] flex items-center px-4 py-2 rounded-full md:text-2xl font-bold text-white md:mr-14"
//                 >

//                   Proceed to Checkout
//                 </button> */}

//                 <button
//                   onClick={createOrder}
//                   className="bg-[#197d8e] flex items-center px-4 py-2 rounded-full md:text-2xl font-bold text-white md:mr-[5rem] w-full mb-20"
//                   disabled={isProcessingOrder}
//                 >
//                   {isProcessingOrder ? "Processing..." : "Proceed to Checkout"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* {isModalOpen && (
//         <div
//           className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-50 mt-8"
//           onClick={closeModal}
//         >
//           <div
//             className="relative w-[25rem] h-[38rem] bg-white rounded-lg p-6" // Adjusted width and height
//             onClick={(e) => e.stopPropagation()} // Prevents closing the modal when clicking inside it
//           >
//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
//             >
//               &times;
//             </button>
//             {modalImage ? (
//               <img
//                 src={`https://nexiblesapp.barecms.com/uploads/${modalImage}`}
//                 alt="Enlarged Product"
//                 className="object-cover w-full h-full rounded-md" // Ensures image fits the popup size
//               />
//             ) : (
//               <p className="text-center text-gray-500">No image to display</p>
//             )}
//           </div>
//         </div>

//       )} */}
//       {isModalOpen && (
//         <div
//           className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-50 mt-8"
//           onClick={closeModal}
//         >
//           <div
//             className="relative w-[25rem] h-[35rem] bg-white rounded-lg p-6 mt-14"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
//             >
//               &times;
//             </button>
//             {modalImage ? (
//               <div className="relative w-full h-full flex items-center justify-center text-center mx-auto">
//                 <img
//                   src={`https://nexiblesapp.barecms.com/uploads/${modalImage}`}
//                   alt="Enlarged Product"
//                   className="object-cover w-full h-full rounded-md"
//                 />
//                 <div className="absolute top-32 bg-opacity-60 text-white text-3xl font-semibold px-4 py-1 rounded">
//                   {/* Name: */}
//                   <div>
//                     {cartItems.find(
//                       (item) => item.uploaded_picture === modalImage
//                     )?.customer_name || "Unknown"}
//                   </div>

//                   {/* Message: */}
//                   <div className=" text-lg px-12 mt-4">
//                     {cartItems.find(
//                       (item) => item.uploaded_picture === modalImage
//                     )?.custom_message || "Unknown"}
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <p className="text-center text-gray-500">No image to display</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

// "use client";
// import React, { useEffect, useState } from "react";
// import { FaTrash } from "react-icons/fa";
// import Link from "next/link";
// import { useAuth } from "../../utils/authContext";
// import { toast } from "react-toastify";
// import jwt from "jsonwebtoken";
// import { BsCart3 } from "react-icons/bs";
// import { MdDelete } from "react-icons/md";
// import { useRouter } from "next/navigation";

// const Cart = () => {
//   const { user, logout } = useAuth();
//   const [cartItems, setCartItems] = useState([]);
//   const router = useRouter();
//   const [shippingCost, setShippingCost] = useState(0);
//   const [isProcessingOrder, setIsProcessingOrder] = useState(false);
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
//     return calculateSubtotal() + parseFloat(shippingCost);
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
//       uploaded_picture: product.uploaded_picture,
//       origin: "Nexigifting"
//     }));
//   };

//   const createOrder = async (e) => {
//     e.preventDefault();
//     if (!isLoggedIn()) {
//       toast.error("You need to login first");
//       router.push("/login");
//     } else {
//       router.push("/checkout");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[url('/Cart/cart.jpg')] bg-cover bg-center bg-no-repeat flex justify-center py-10 px-4 sm:px-6 lg:px-8">
//       <div className="bg-white w-full max-w-5xl rounded-xl p-4 sm:p-8 shadow-lg mt-20 sm:mt-28">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Cart Section */}
//           <div className="space-y-6">
//             <h2 className="text-2xl font-bold text-[#db5c3c] mb-4 text-center lg:text-left lg:ml-14">
//               Cart
//             </h2>
//             {cartItems.map((item, index) => (
//               <div
//                 className="border border-[#db5c3c] p-4 rounded-xl"
//                 key={index}
//               >
//                 <div>
//                   <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
//                     <h3 className="text-xl font-semibold text-[#db5c3c]">
//                       {item.name || "Product Name"}
//                     </h3>
//                     <div className="flex items-center space-x-2">
//                       <button className="border border-gray-400 py-1 px-3 rounded-xl text-lg font-semibold text-[#db5c3c]">
//                         {item.quantity || "Quantity"}
//                       </button>
//                       <button
//                         onClick={() => handleRemoveItem(index)}
//                         className="text-red-600"
//                       >
//                         <FaTrash />
//                       </button>
//                     </div>
//                   </div>

//                   <div className="flex flex-col sm:flex-row justify-between items-start mt-4 space-y-4 sm:space-y-0">
//                     <div className="flex-1 space-y-2 w-full sm:w-auto">
//                       <h3 className="font-semibold text-[#db5c3c]">Details</h3>
//                       <h3 className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
//                         {item.productSize || "Size"}
//                       </h3>
//                       <h3 className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
//                         {item.customer_name || "Name (From)"}
//                       </h3>
//                       <h3 className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
//                         {item.custom_message || "Custom Message"}
//                       </h3>
//                       <h3 className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
//                         {item.uploaded_picture || "Uploaded Picture"}
//                       </h3>
//                       <h3 className="w-full sm:w-3/4 border border-[#464087] rounded-xl p-1 text-sm">
//                         {item.uploaded_receivers || "Uploaded Receivers"}
//                       </h3>
//                     </div>
//                     <div className="flex flex-col items-center w-full sm:w-auto">
//                       <div className="w-full sm:w-32 h-48 flex items-center justify-center rounded-xl">
//                         {item.uploaded_picture &&
//                         item.uploaded_picture !== "Not uploaded" ? (
//                           <img
//                             src={`https://nexiblesapp.barecms.com/uploads/${item.uploaded_picture}`}
//                             alt="Product"
//                             className="object-cover w-full h-full"
//                           />
//                         ) : (
//                           <span className="text-[#464087]">No Image</span>
//                         )}
//                       </div>
//                       {/* New Button Below Uploaded Image */}
//                       <button
//                         className="mt-2 bg-[#db5c3c] text-white px-4 py-2 rounded-full font-semibold"
//                         onClick={() => {
//                           /* Add your button click handler logic here */
//                         }}
//                       >
//                         Action Button
//                       </button>
//                     </div>
//                   </div>
//                   <button className="w-full sm:w-auto p-4 border border-[#464087] py-1 text-md rounded-xl text-lg font-semibold text-[#db5c3c] mt-4">
//                     Product Total : ₹ {item.price}
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Summary Information Section */}
//           <div className="mt-8 lg:mt-0">
//             <h2 className="text-2xl font-bold text-[#db5c3c] mb-6">Summary</h2>
//             <h2 className="text-xl font-bold text-[#db5c3c] mb-4 border border-[#464087] p-1 rounded-xl">
//               Subtotal: ₹{calculateSubtotal()}
//             </h2>
//             <div className="space-y-4">
//               <div className="grid grid-cols-1 gap-4">
//                 <div>
//                   <h3 className="w-full border border-[#464087] p-1 rounded-xl text-[#464087]">
//                     Shipping Cost : {shippingCost || "Free"}
//                   </h3>
//                 </div>
//               </div>
//               <h2 className="text-xl font-bold text-[#db5c3c] mb-4 border border-[#464087] p-1 rounded-xl">
//                 Total: ₹{calculateTotal()}
//               </h2>
//               <div className="flex justify-between items-center mt-4">
//                 <img
//                   src="/Home/Proceed to Cart Illustration.svg"
//                   alt="SVG"
//                   className="w-28 h-40 "
//                 />
// <button
//   onClick={createOrder}
//   className="bg-[#197d8e] flex items-center px-4 py-2 rounded-full md:text-2xl font-bold text-white md:mr-[5rem] w-full mb-20"
//   disabled={isProcessingOrder}
// >
//   {isProcessingOrder ? "Processing..." : "Proceed to Checkout"}
// </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

// // in this code we can Add your picture here upload one photo and go to the next page
