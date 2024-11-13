// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import Image from "next/image";

// export default function QuantityReview() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const pouchId = searchParams.get("pouchId");
//   const size = searchParams.get("size");
//   const imageFileName = searchParams.get("image");
//   const [quantity, setQuantity] = useState("50");
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [customerName, setCustomerName] = useState("");
//   const [customMessage, setCustomMessage] = useState("");
//   const [uploadedPicture, setUploadedPicture] = useState("");
//   const [uploadedReceivers, setUploadedReceivers] = useState("");
//   const [agreeToTerms, setAgreeToTerms] = useState(false);
//   const [productDetails, setProductDetails] = useState({});
//   const [image2, setImage2] = useState(null);

//   const priceChart = {
//     nexismall: {
//       50: 65,
//       100: 55,
//       200: 45,
//       300: 35,
//     },
//     neximedium: {
//       50: 75,
//       100: 65,
//       200: 55,
//       300: 45,
//     },
//   };

//   useEffect(() => {
//     async function fetchProductImage() {
//       try {
//         const response = await fetch(
//           `https://nexiblesapp.barecms.com/api/productimages/${pouchId}`
//         );
//         const data = await response.json();
//         if (data.data.length > 0) {
//           setImage2(data.data[0].image_url);
//         }
//       } catch (error) {
//         console.error("Error fetching image2:", error);
//       }
//     }

//     if (pouchId) {
//       fetchProductImage();
//     }
//   }, [pouchId]);

//   useEffect(() => {
//     const initializeCart = () => {
//       const defaultQuantity = 50;
//       const defaultPrice = calculatePrice(defaultQuantity, size);
//       const pricePerUnit = defaultPrice / defaultQuantity;

//       const cart = JSON.parse(localStorage.getItem("cart")) || [];
//       const existingProductIndex = cart.findIndex(
//         (item) => item.id === Number(pouchId) && item.productSize === size
//       );

//       if (existingProductIndex !== -1) {
//         // Update existing product
//         cart[existingProductIndex] = {
//           ...cart[existingProductIndex],
//           quantity: defaultQuantity,
//           price: pricePerUnit,
//           totalPrice: defaultPrice,
//           productSize: size
//         };
//       } else {
//         // Add new product
//         cart.push({
//           id: Number(pouchId),
//           productSize: size,
//           quantity: defaultQuantity,
//           price: pricePerUnit,
//           totalPrice: defaultPrice,
//           name: productDetails.name || "Unnamed Product",
//           category: productDetails.category || "Uncategorized",
//           image: imageFileName
//         });
//       }

//       localStorage.setItem("cart", JSON.stringify(cart));
//       setQuantity(String(defaultQuantity));
//       setTotalPrice(defaultPrice);
//     };

//     initializeCart();
//   }, [pouchId, size]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const numQuantity = Number(quantity);
//     if (numQuantity < 50) {
//       alert("Quantity must be at least 50.");
//       return;
//     }

//     const cart = JSON.parse(localStorage.getItem("cart"));
//     const existingProductIndex = cart.findIndex(
//       (item) => item.id === Number(pouchId) && item.productSize === size
//     );

//     const updatedProduct = {
//       id: Number(pouchId),
//       name: productDetails.name || "Unnamed Product",
//       price: productDetails.price || "0",
//       category: productDetails.category || "Uncategorized",
//       quantity: numQuantity,
//       custom_message: customMessage,
//       customer_name: customerName,
//       image: imageFileName,
//       uploaded_picture: uploadedPicture || null,
//       uploaded_receivers: uploadedReceivers || null,
//       productSize: size,
//     };

//     if (existingProductIndex !== -1) {
//       cart[existingProductIndex] = {
//         ...cart[existingProductIndex],
//         ...updatedProduct,
//       };
//     } else {
//       cart.push(updatedProduct);
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));
//     router.push("/my-cart");
//   };

//   const calculatePrice = (qty, selectedSize) => {
//     const prices =
//       selectedSize === "nexismall"
//         ? priceChart.nexismall
//         : priceChart.neximedium;
//     let rate;

//     if (qty >= 300) rate = prices[300];
//     else if (qty >= 200) rate = prices[200];
//     else if (qty >= 100) rate = prices[100];
//     else if (qty >= 50) rate = prices[50];
//     else return 0;

//     return qty * rate;
//   };

//   const handleQuantityChange = (e) => {
//     const newQuantity = e.target.value;
//     setQuantity(newQuantity);

//     const newTotal = calculatePrice(Number(newQuantity), size);
//     setTotalPrice(newTotal);

//     // Update cart in localStorage
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const existingProductIndex = cart.findIndex(
//       (item) => item.id === Number(pouchId) && item.productSize === size
//     );

//     const pricePerUnit = newTotal / Number(newQuantity);

//     if (existingProductIndex !== -1) {
//       cart[existingProductIndex] = {
//         ...cart[existingProductIndex],
//         quantity: Number(newQuantity),
//         price: pricePerUnit,
//         totalPrice: newTotal
//       };
//     } else {
//       cart.push({
//         id: Number(pouchId),
//         productSize: size,
//         quantity: Number(newQuantity),
//         price: pricePerUnit,
//         totalPrice: newTotal,
//         name: productDetails.name || "Unnamed Product",
//         category: productDetails.category || "Uncategorized",
//         image: imageFileName
//       });
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));
//   };

// //  const QuantitySelect = () => {
// //     const handleImageChange = (e) => {
// //       const file = e.target.files[0];
// //       if (file) {
// //         setUploadedPicture(file.name);
// //       }
// //     };
// //       const handleReceiverChange = (e) => {
// //         const file = e.target.files[0];
// //         if (file) {
// //           setUploadedReceivers(file.name);
// //         }
// //       };
// const QuantitySelect = () => {
//     const quantities = [50, 100, 200, 300];

//     return (
//       <div className="relative">
//         <select
//           value={quantity}
//           onChange={handleQuantityChange}
//           className="appearance-none w-48 h-12 pl-4 pr-10 bg-white border-2 border-[#ee6e73] text-[#124e66] rounded-full cursor-pointer hover:border-[#d1585a] transition-colors focus:outline-none focus:border-[#d1585a] font-gotham-light text-lg"
//         >
//           {quantities.map((qty) => (
//             <option key={qty} value={qty}>
//               {qty} pouches
//             </option>
//           ))}
//         </select>
//         <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
//           <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M1 1L7 7L13 1" stroke="#ee6e73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//         </div>
//       </div>
//     );
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setUploadedPicture(file.name);
//     }
//   };

//   const handleReceiverChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setUploadedReceivers(file.name);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white pt-16 lg:pt-24 px-4 md:py-8">
//       <button
//         onClick={() => router.back()}
//         className="text-[#124e66] ml-2 sm:ml-4 font-gotham-rounded-bold text-sm sm:text-base"
//       >
//         ← Back
//       </button>

//       <h1 className="text-2xl sm:text-3xl font-gotham-rounded-bold text-[#ee6e73] text-center mt-4 mb-6 sm:mt-6 sm:mb-8">
//         Quantity and Review
//       </h1>

//       <div className="max-w-6xl flex flex-col sm:flex-row sm:px-[10rem] px-4">
//         {/* Mobile Product Preview */}
//         <div className="flex flex-col items-center w-full sm:hidden mb-6">
//           {productDetails.image && (
//             <Image
//               src={`https://nexiblesapp.barecms.com/uploads/${productDetails.image}`}
//               alt={productDetails.name}
//               width={160}
//               height={240}
//               className="rounded max-w-[160px] max-h-[240px] object-contain"
//             />
//           )}
//           {image2 && (
//             <div className="flex flex-col items-center text-center mt-4">
//               <Image
//                 src={`https://nexiblesapp.barecms.com/uploads/${image2}`}
//                 alt="Back of Pouch"
//                 width={160}
//                 height={240}
//                 className="rounded max-w-[160px] max-h-[240px] object-contain"
//               />
//               <div className="text-[#ee6e73] text-xs mt-2">Back</div>
//             </div>
//           )}
//         </div>

//         <form onSubmit={handleSubmit} className="w-full sm:w-2/3 mb-8 sm:pr-8">
//           <div className="mb-6">
//             <div className="mb-4 sm:mb-6">
//               <label
//                 htmlFor="quantity"
//                 className="block text-[#ee6e73] text-pt-35 sm:text-2xl font-gotham-medium mb-2"
//               >
//                 Quantity
//               </label>
//               <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
//                 <QuantitySelect />
//                 <span className="text-[#d1585a] text-xs sm:text-sm font-gotham-light">
//                   (minimum order of 50 pouches)
//                 </span>
//               </div>
//             </div>

//             {quantity && Number(quantity) >= 50 && (
//               <div className="mb-6">
//                 <div className="flex flex-col gap-2">
//                   <div className="flex justify-between items-center p-2 bg-white rounded-lg border border-[#197d8e]">
//                     <span className="text-[#d1585a] font-gotham-medium text-sm sm:text-base">
//                       Rate per pouch
//                     </span>
//                     <span className="text-[#124e66] font-gotham-medium">
//                       ₹{totalPrice / Number(quantity)}
//                     </span>
//                   </div>

//                   <div className="flex justify-between items-center p-2 bg-[#ee6e73]/10 rounded-lg">
//                     <span className="text-[#d1585a] font-gotham-medium text-sm sm:text-base">
//                       Total Price
//                     </span>
//                     <span className="text-[#124e66] font-gotham-bold">
//                       ₹{totalPrice}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             )}

//             <div className="space-y-4 sm:space-y-6">
//               <div>
//                 <label
//                   htmlFor="customerName"
//                   className="block text-[#ee6e73] text-pt-35 sm:text-2xl font-gotham-medium mb-2"
//                 >
//                   Add your name
//                 </label>
//                 <input
//                   type="text"
//                   id="customerName"
//                   value={customerName}
//                   onChange={(e) => setCustomerName(e.target.value)}
//                   className="w-full p-2 border border-[#197d8e] rounded-lg sm:rounded-3xl font-gotham-light"
//                   placeholder="eg. Karan & Jinal Doshi"
//                   required
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="customMessage"
//                   className="block text-[#ee6e73] text-pt-35 sm:text-2xl font-gotham-medium mb-2"
//                 >
//                   Add your message
//                 </label>
//                 <textarea
//                   id="customMessage"
//                   value={customMessage}
//                   onChange={(e) => setCustomMessage(e.target.value)}
//                   className="w-full p-2 border border-[#197d8e] rounded-lg sm:rounded-3xl font-gotham-light h-32 sm:h-60"
//                   placeholder="Your message here"
//                   maxLength={60}
//                   required
//                 />
//                 <p className="text-xs sm:text-sm text-[#ee6e73] mt-1 font-gotham-light">
//                   up to 60 words maximum
//                 </p>
//               </div>

//               <div>
//                 <h2 className="text-[#ee6e73] text-pt-35 sm:text-2xl font-gotham-medium mb-2">
//                   Add your picture
//                 </h2>
//                 <p className="text-xs text-[#d1585a] mb-2 font-gotham-light">
//                   (This adds another personalized touch. You can put a picture of family, pet, or yourself depending on the occasion. If not required, please leave it empty.)
//                 </p>
//                 <label className="relative w-full">
//                   <span className="block p-2 pl-4 border border-[#197d8e] rounded-lg sm:rounded-3xl text-gray-400 w-full cursor-pointer font-gotham-light">
//                     {uploadedPicture || "Upload here"}
//                   </span>
//                   <input
//                     type="file"
//                     accept=".jpeg,.jpg,.png,.heic,.svg"
//                     onChange={handleImageChange}
//                     className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                   />
//                 </label>
//                 <p className="text-xs sm:text-sm text-[#d1585a] mt-1 font-gotham-light">
//                   Acceptable picture formats: .jpeg, .jpg, .png, .heic, .svg
//                 </p>
//                 <p className="text-xs sm:text-sm text-[#d1585a] font-gotham-light">
//                   Please keep the size under 5MB
//                 </p>
//               </div>

//               <div>
//                 <h2 className="text-[#ee6e73] text-pt-35 sm:text-2xl font-gotham-medium mb-2">
//                   Add list of receivers
//                 </h2>
//                 <label className="relative w-full">
//                   <span className="block p-2 pl-4 border border-[#197d8e] rounded-lg sm:rounded-3xl text-gray-400 w-full cursor-pointer font-gotham-light">
//                     {uploadedReceivers || "Upload here"}
//                   </span>
//                   <input
//                     type="file"
//                     accept=".xlsx,.xls"
//                     onChange={handleReceiverChange}
//                     className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                   />
//                 </label>
//                 <p className="text-xs sm:text-sm text-[#d1585a] mt-1 font-gotham-light">
//                   Acceptable formats: Excel (.xlsx, .xls)
//                 </p>
//                 <p className="text-xs sm:text-sm text-[#d1585a] font-gotham-light">
//                   Please keep the size under 5MB
//                 </p>
//               </div>
//             </div>

//             <p className="text-[#ee6e73] font-gotham-rounded-bold text-sm sm:text-base mt-6 mb-4">
//               Please make sure you have uploaded the correct picture & document & there are no spelling errors anywhere!
//             </p>

//             <label className="flex items-center mb-6">
//               <input
//                 type="checkbox"
//                 checked={agreeToTerms}
//                 onChange={(e) => setAgreeToTerms(e.target.checked)}
//                 className="mr-2 form-checkbox border border-[#68a398] text-[#d1585a] focus:ring-[#68a398]"
//                 required
//               />
//               <span className="text-[#124e66] text-sm sm:text-base">
//                 I have reviewed and approved my design
//               </span>
//             </label>

//             <div className="flex items-center justify-end">
//               <Image
//                 src="/Home/Submit-Form-Illustration.svg"
//                 alt="Submit Illustration"
//                 width={60}
//                 height={60}
//                 className="mr-4"
//               />
//               <button
//                 type="submit"
//                 className="bg-[#124e66] text-white px-4 py-2 rounded-full font-gotham-rounded-bold text-sm sm:text-base hover:bg-[#0e3e51] transition duration-300"
//               >
//                 Add to cart
//               </button>
//             </div>
//           </div>
//         </form>

//         {/* Desktop/Tablet Product Preview */}
//         <div className="hidden sm:flex w-1/3 flex-col items-center mt-8">
//           <div className="flex items-center justify-between w-full">
//             {productDetails.image && (
//               <div className="text-center">
//                 <Image
//                   src={`https://nexiblesapp.barecms.com/uploads/${productDetails.image}`}
//                   alt={productDetails.name}
//                   width={250}
//                   height={350}
//                   className="rounded max-w-[250px] max-h-[350px] object-contain"
//                 />
//                 <div className="text-[#ee6e73] font-gotham-light text-xs sm:text-sm mt-2">Front</div>
//               </div>
//             )}
//             {image2 && (
//               <div className="text-center ml-4">
//                 <Image
//                   src={`https://nexiblesapp.barecms.com/uploads/${image2}`}
//                   alt="Back of Pouch"
//                   width={250}
//                   height={350}
//                   className="rounded max-w-[250px] max-h-[350px] object-contain"
//                 />
//                 <div className="text-[#ee6e73] font-gotham-light text-xs sm:text-sm mt-2">Back</div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

















// // // // old
// // 'use client';
// // import React, { useState, useEffect } from 'react';
// // import { useRouter, useSearchParams } from 'next/navigation';
// // import Image from 'next/image';

// // export default function QuantityReview() {
// //   const router = useRouter();
// //   const searchParams = useSearchParams();
// //   const pouchId = searchParams.get('pouchId');
// //   const size = searchParams.get('size');
// //   const imageFileName = searchParams.get('image');

// //   // State variables
// //   const [quantity, setQuantity] = useState('');
// //   const [customerName, setCustomerName] = useState('');
// //   const [customMessage, setCustomMessage] = useState('');
// //   const [uploadedPicture, setUploadedPicture] = useState('');
// //   const [uploadedReceivers, setUploadedReceivers] = useState('');
// //   const [agreeToTerms, setAgreeToTerms] = useState(false);
// //   const [productDetails, setProductDetails] = useState({});

// //   // Load cart data from localStorage when the component mounts
// //   useEffect(() => {
// //     const cart = JSON.parse(localStorage.getItem('cart')) || [];

// //     // Find the specific product in the cart using pouchId and size
// //     const existingProduct = cart.find(
// //       (item) => item.id === Number(pouchId) && item.productSize === size
// //     );

// //     if (existingProduct) {
// //       // Populate the form fields with its details
// //       setQuantity(existingProduct.quantity || '');
// //       setCustomerName(existingProduct.customer_name || '');
// //       setCustomMessage(existingProduct.custom_message || '');
// //       setUploadedPicture(existingProduct.uploaded_picture || '');
// //       setUploadedReceivers(existingProduct.uploaded_receivers || '');
// //       setProductDetails(existingProduct);
// //     }
// //   }, [pouchId, size]);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     const numQuantity = Number(quantity);
// //     if (numQuantity < 50) {
// //       alert("Quantity must be at least 50.");
// //       return;
// //     }

// //     // Get existing cart from localStorage
// //     const cart = JSON.parse(localStorage.getItem('cart'));

// //     // Find existing product in the cart
// //     const existingProductIndex = cart.findIndex(
// //       (item) => item.id === Number(pouchId) && item.productSize === size
// //     );

// //     // Prepare updated product data
// //     const updatedProduct = {
// //       id: Number(pouchId),
// //       name: productDetails.name || "Unnamed Product", // Use dynamic name or default
// //       price: productDetails.price || "0", // Use dynamic price or default
// //       category: productDetails.category || "Uncategorized", // Use dynamic category or default
// //       quantity: numQuantity,
// //       custom_message: customMessage,
// //       customer_name: customerName,
// //       image: imageFileName,
// //       uploaded_picture: uploadedPicture || null,
// //       uploaded_receivers: uploadedReceivers || null,
// //       productSize: size,
// //     };

// //     if (existingProductIndex !== -1) {
// //       // Update existing product in the cart
// //       cart[existingProductIndex] = {
// //         ...cart[existingProductIndex],
// //         ...updatedProduct,
// //       };
// //     } else {
// //       // Add new product to the cart
// //       cart.push(updatedProduct);
// //     }

// //     // Update cart in localStorage
// //     localStorage.setItem('cart', JSON.stringify(cart));

// //     // Redirect to the cart page
// //     router.push('/my-cart');
// //   };

// //   const handleQuantityChange = (e) => {
// //     const value = e.target.value;
// //     if (value === '' || /^\d+$/.test(value)) {
// //       setQuantity(value);
// //     }
// //   };

//   // const handleImageChange = (e) => {
//   //   const file = e.target.files[0];
//   //   if (file) {
//   //     setUploadedPicture(file.name);
//   //   }
//   // };

//   // const handleReceiverChange = (e) => {
//   //   const file = e.target.files[0];
//   //   if (file) {
//   //     setUploadedReceivers(file.name);
//   //   }
//   // };

// //   return (
// //     <div className="min-h-screen bg-white mt-[5rem] px-4 py-8">
// //       <button onClick={() => router.back()} className="text-[#124e66] ml-[1rem] font-bold">
// //         ← Back
// //       </button>

// //       <h1 className="text-4xl font-bold text-[#ee6e73] text-center mt-6 mb-8">Quantity and Review</h1>

// //       <div className="max-w-4xl mx-auto flex">
// //         <form onSubmit={handleSubmit} className="w-2/3 pr-8">
// //           <div className="mb-6">
// //             <label htmlFor="quantity" className="block text-[#ee6e73] text-xl font-bold mb-2">
// //               Quantity
// //             </label>
// //             <input
// //               type="text"
// //               id="quantity"
// //               value={quantity}
// //               onChange={handleQuantityChange}
// //               className="w-full p-2 border border-[#68a398] rounded-3xl"
// //               placeholder="Enter quantity"
// //               required
// //             />
// //           </div>

// //           <h2 className="text-2xl font-bold text-[#ee6e73] mb-4">Yay youre done!</h2>
// //           <p className="text-gray-600 mb-4">Lets review everything once so your pouches are perfect!</p>

// //           <div className="mb-6">
// //             <label htmlFor="customerName" className="block text-[#ee6e73] text-xl font-bold mb-2">
// //               Add your name
// //             </label>
// //             <input
// //               type="text"
// //               id="customerName"
// //               value={customerName}
// //               onChange={(e) => setCustomerName(e.target.value)}
// //               className="w-full p-2 border border-[#68a398] rounded-3xl"
// //               placeholder="eg. Karan & Jinal Doshi"
// //               required
// //             />
// //           </div>
// //           <div className="mb-6">
// //             <label htmlFor="customMessage" className="block text-[#ee6e73] text-xl font-bold mb-2">
// //               Add your message
// //             </label>
// //             <textarea
// //               id="customMessage"
// //               value={customMessage}
// //               onChange={(e) => setCustomMessage(e.target.value)}
// //               className="w-full p-2 border border-[#68a398] rounded-3xl h-32"
// //               placeholder="Your message here"
// //               maxLength={60}
// //               required
// //             />
// //             <p className="text-sm text-[#d1585a] mt-1">up to 60 words maximum</p>
// //           </div>

// //           <div className="mb-6">
// //             <h2 className="text-xl font-bold text-[#ee6e73] mb-2">Add your picture</h2>
// //             <input
// //               type="file"
// //               accept=".jpeg,.jpg,.png,.heic,.svg"
// //               onChange={handleImageChange}
// //               className="mb-2 w-full p-2 border border-[#68a398] rounded-3xl"
// //             />
// //             {uploadedPicture ? (
// //               <p className="text-gray-600">Uploaded image: {uploadedPicture}</p>
// //             ) : (
// //               <p className="text-gray-600">No image uploaded</p>
// //             )}
// //             <p className="text-sm text-[#d1585a] mt-1">Acceptable picture formats: .jpeg, .jpg, .png, .heic, .svg</p>
// //             <p className="text-sm text-[#d1585a]">Please keep the size under 5MB</p>
// //           </div>

// //           <div className="mb-6">
// //             <h2 className="text-xl font-bold text-[#ee6e73] mb-2">Add list of receivers</h2>
// //             <input
// //               type="file"
// //               accept=".xlsx,.xls"
// //               onChange={handleReceiverChange}
// //               className="mb-2 w-full p-2 border border-[#68a398] rounded-3xl"
// //             />
// //             {uploadedReceivers ? (
// //               <p className="text-gray-600">Uploaded file: {uploadedReceivers}</p>
// //             ) : (
// //               <p className="text-gray-600">No file uploaded</p>
// //             )}
// //             <p className="text-sm text-[#d1585a] mt-1">Acceptable formats: Excel (.xlsx, .xls)</p>
// //             <p className="text-sm text-[#d1585a]">Please keep the size under 5MB</p>
// //           </div>

// //           <p className="text-[#ee6e73] font-bold mb-4">
// //             Please make sure you have uploaded the correct picture & document & there are no spelling errors anywhere!
// //           </p>

// //           <label className="flex items-center mb-6">
// //             <input
// //               type="checkbox"
// //               checked={agreeToTerms}
// //               onChange={(e) => setAgreeToTerms(e.target.checked)}
// //               className="mr-2"
// //               required
// //             />
// //             <span className="text-gray-700">I have reviewed and approved my design</span>
// //           </label>
// //           <div className="flex items-center justify-end">
// //             <Image
// //               src="/Home/Submit-Form-Illustration.svg"
// //               alt="Submit Illustration"
// //               width={80}
// //               height={80}
// //             />
// //             <button
// //               type="submit"
// //               className="bg-[#ee6e73] text-white px-6 py-2 rounded-full hover:bg-[#124e66] transition duration-300"
// //             >
// //               Continue
// //             </button>
// //           </div>
// //         </form>

// //         <div className="w-1/3">
// //           <h2 className="text-2xl font-bold text-[#ee6e73] mb-4">Product Preview</h2>
// //           <div className="border p-4 rounded-lg">
// //             {productDetails.image && (
// //               <Image
// //                 src={`https://nexiblesapp.barecms.com/uploads/${productDetails.image}`}
// //                 alt={productDetails.name}
// //                 width={200}
// //                 height={200}
// //                 className="mb-4"
// //               />
// //             )}

// //             <p className="font-bold text-lg">{productDetails.name || "Unnamed Product"}</p>
// //             <p className="text-gray-700">Category: {productDetails.category || "Uncategorized"}</p>
// //             <p className="text-gray-700">Price: ₹{productDetails.price || "0"}</p>

// //             {productDetails.uploaded_picture && productDetails.uploaded_picture !== "Not uploaded" ? (
// //               <div>
// //                 <p className='text-gray-700'>Uploaded Picture</p>
// //                 <Image
// //                   src={`https://nexiblesapp.barecms.com/uploads/${productDetails.uploaded_picture}`}
// //                   alt={productDetails.name}
// //                   width={200}
// //                   height={200}
// //                   className="mb-4"
// //                 />
// //               </div>
// //             ) : (
// //               <p className='text-[#d1585a]'>No picture uploaded</p>
// //             )}

// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

export default function QuantityReview() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pouchId = searchParams.get("pouchId");
  const size = searchParams.get("size");
  const imageFileName = searchParams.get("image");
  const [quantity, setQuantity] = useState("50"); // Change from "" to "50"
  const [customerName, setCustomerName] = useState("");
  const [customMessage, setCustomMessage] = useState("");
  const [uploadedPicture, setUploadedPicture] = useState("");
  const [uploadedReceivers, setUploadedReceivers] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [productDetails, setProductDetails] = useState({});
  const [image2, setImage2] = useState(null);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const initialPrice = calculatePrice(50, size);
    setTotalPrice(initialPrice);
  }, []);

  const priceChart = {
    nexismall: {
      50: 65,
      100: 55,
      200: 45,
      300: 35,
    },
    neximedium: {
      50: 75,
      100: 65,
      200: 55,
      300: 45,
    },
  };

  useEffect(() => {
    // Retrieve `image2` from the product images API based on `pouchId`
    async function fetchProductImage() {
      try {
        const response = await fetch(
          `https://nexiblesapp.barecms.com/api/productimages/${pouchId}`
        );
        const data = await response.json();
        if (data.data.length > 0) {
          setImage2(data.data[0].image_url); // Assuming `imageFileName` is the correct field
        }
      } catch (error) {
        console.error("Error fetching image2:", error);
      }
    }

    if (pouchId) {
      fetchProductImage();
    }
  }, [pouchId]);

  // Load cart data from localStorage when the component mounts
  useEffect(() => {
    
    const initialPrice = calculatePrice(50, size);
  setTotalPrice(initialPrice);
    
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find(
      (item) => item.id === Number(pouchId) && item.productSize === size
    );

    const pricePerUnit = initialPrice / 50;
    
    if (existingProduct) {
      setQuantity(existingProduct.quantity || "");
      setCustomerName(existingProduct.customer_name || "");
      setCustomMessage(existingProduct.custom_message || "");
      setUploadedPicture(existingProduct.uploaded_picture || "");
      setUploadedReceivers(existingProduct.uploaded_receivers || "");
      setProductDetails(existingProduct);
    }

    const existingProductIndex = cart.findIndex(
      (item) => item.id === Number(pouchId) && item.productSize === size
    );
  
  
    if (existingProductIndex !== -1) {
      cart[existingProductIndex] = {
        ...cart[existingProductIndex],
        quantity: 50,
        price: pricePerUnit,
        totalPrice: initialPrice,
      };
    } else {
      cart.push({
        id: Number(pouchId),
        productSize: size,
        quantity: 50,
        price: pricePerUnit,
        totalPrice: initialPrice,
        ...productDetails,
      });
    }
  }, [pouchId, size]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const numQuantity = Number(quantity);
    if (numQuantity < 50) {
      alert("Quantity must be at least 50.");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart"));
    const existingProductIndex = cart.findIndex(
      (item) => item.id === Number(pouchId) && item.productSize === size
    );

    const updatedProduct = {
      id: Number(pouchId),
      name: productDetails.name || "Unnamed Product",
      price: productDetails.price || "0",
      category: productDetails.category || "Uncategorized",
      quantity: numQuantity,
      custom_message: customMessage,
      customer_name: customerName,
      image: imageFileName,
      uploaded_picture: uploadedPicture || null,
      uploaded_receivers: uploadedReceivers || null,
      productSize: size,
    };

    if (existingProductIndex !== -1) {
      cart[existingProductIndex] = {
        ...cart[existingProductIndex],
        ...updatedProduct,
      };
    } else {
      cart.push(updatedProduct);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    router.push("/my-cart");
  };

  const calculatePrice = (qty, selectedSize) => {
    const prices =
      selectedSize === "nexismall"
        ? priceChart.nexismall
        : priceChart.neximedium;
    let rate;

    if (qty >= 300) rate = prices[300];
    else if (qty >= 200) rate = prices[200];
    else if (qty >= 100) rate = prices[100];
    else if (qty >= 50) rate = prices[50];
    else return 0;

    return qty * rate;
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    setQuantity(value);
    if (value) {
      const newTotal = calculatePrice(Number(value), size);
      setTotalPrice(newTotal);
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingProductIndex = cart.findIndex(
        (item) => item.id === Number(pouchId) && item.productSize === size
      );

      const pricePerUnit = newTotal / Number(value);

      if (existingProductIndex !== -1) {
        cart[existingProductIndex] = {
          ...cart[existingProductIndex],
          quantity: Number(value),
          price: pricePerUnit,
          totalPrice: newTotal,
        };
      } else {
        cart.push({
          id: Number(pouchId),
          productSize: size,
          quantity: Number(value),
          price: pricePerUnit,
          totalPrice: newTotal,
          ...productDetails,
        });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedPicture(file.name);
    }
  };
  const handleReceiverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedReceivers(file.name);
    }
  };
  const QuantitySelect = () => {
    const quantities = [50, 100, 200, 300];

    return (
      <div className="relative">
        <select
          value={quantity}
          onChange={handleQuantityChange}
          className="w-full sm:w-48 h-10 sm:h-12 pl-4 pr-10 bg-white border border-[#197d8e] text-[#124e66] rounded-lg sm:rounded-full cursor-pointer hover:border-[#d1585a] transition-colors focus:outline-none focus:border-[#d1585a] font-gotham-light text-sm sm:text-lg appearance-none"
          required
        >
          {quantities.map((qty) => (
            <option key={qty} value={qty}>
              {qty} pouches
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L13 1" stroke="#ee6e73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-24 px-4 md:py-8">
      <button
        onClick={() => router.back()}
        className="text-[#124e66] ml-2 sm:ml-4 font-gotham-rounded-bold text-sm sm:text-base"
      >
        ← Back
      </button>

      <h1 className="text-2xl sm:text-3xl font-gotham-rounded-bold text-[#ee6e73] text-center mt-4 mb-6 sm:mt-6 sm:mb-8">
        Quantity and Review
      </h1>

      <div className="max-w-6xl flex flex-col sm:flex-row sm:px-[10rem] px-4">
        {/* Mobile Product Preview */}
        <div className="flex flex-col items-center w-full sm:hidden mb-6">
          {productDetails.image && (
            <Image
              src={`https://nexiblesapp.barecms.com/uploads/${productDetails.image}`}
              alt={productDetails.name}
              width={160}
              height={240}
              className="rounded max-w-[160px] max-h-[240px] object-contain"
            />
          )}
          {image2 && (
            <div className="flex flex-col items-center text-center mt-4">
              <Image
                src={`https://nexiblesapp.barecms.com/uploads/${image2}`}
                alt="Back of Pouch"
                width={160}
                height={240}
                className="rounded max-w-[160px] max-h-[240px] object-contain"
              />
              <div className="text-[#ee6e73] text-xs mt-2">Back</div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="w-full sm:w-2/3 mb-8 sm:pr-8">
          <div className="mb-6">
            <div className="mb-4 sm:mb-6">
              <label
                htmlFor="quantity"
                className="block text-[#ee6e73] text-pt-35 sm:text-2xl font-gotham-medium mb-2"
              >
                Quantity
              </label>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <QuantitySelect />
                <span className="text-[#d1585a] text-xs sm:text-sm font-gotham-light">
                  (minimum order of 50 pouches)
                </span>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center p-2 bg-white rounded-lg border border-[#197d8e]">
                  <span className="text-[#d1585a] font-gotham-medium text-sm sm:text-base">
                    Rate per pouch
                  </span>
                  <span className="text-[#124e66] font-gotham-medium">
                    ₹{totalPrice / Number(quantity)}
                  </span>
                </div>

                <div className="flex justify-between items-center p-2 bg-[#ee6e73]/10 rounded-lg">
                  <span className="text-[#d1585a] font-gotham-medium text-sm sm:text-base">
                    Total Price
                  </span>
                  <span className="text-[#124e66] font-gotham-bold">
                    ₹{totalPrice}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="customerName"
                  className="block text-[#ee6e73] text-pt-35 sm:text-2xl font-gotham-medium mb-2"
                >
                  Add your name
                </label>
                <input
                  type="text"
                  id="customerName"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full p-2 border border-[#197d8e] rounded-lg sm:rounded-3xl font-gotham-light"
                  placeholder="eg. Karan & Jinal Doshi"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="customMessage"
                  className="block text-[#ee6e73] text-pt-35 sm:text-2xl font-gotham-medium mb-2"
                >
                  Add your message
                </label>
                <textarea
                  id="customMessage"
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  className="w-full p-2 border border-[#197d8e] rounded-lg sm:rounded-3xl font-gotham-light h-32 sm:h-60"
                  placeholder="Your message here"
                  maxLength={60}
                  required
                />
                <p className="text-xs sm:text-sm text-[#ee6e73] mt-1 font-gotham-light">
                  up to 60 words maximum
                </p>
              </div>

              <div>
                <h2 className="text-[#ee6e73] text-pt-35 sm:text-2xl font-gotham-medium mb-2">
                  Add your picture
                </h2>
                <p className="text-xs text-[#d1585a] mb-2 font-gotham-light">
                  (This adds another personalized touch. You can put a picture
                  of family, pet, or yourself depending on the occasion. If not
                  required, please leave it empty.)
                </p>
                <label className="relative w-full">
                  <span className="block p-2 pl-4 border border-[#197d8e] rounded-lg sm:rounded-3xl text-gray-400 w-full cursor-pointer font-gotham-light">
                    {uploadedPicture || "Upload here"}
                  </span>
                  <input
                    type="file"
                    accept=".jpeg,.jpg,.png,.heic,.svg"
                    onChange={handleImageChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </label>
                <p className="text-xs sm:text-sm text-[#d1585a] mt-1 font-gotham-light">
                  Acceptable picture formats: .jpeg, .jpg, .png, .heic, .svg
                </p>
                <p className="text-xs sm:text-sm text-[#d1585a] font-gotham-light">
                  Please keep the size under 5MB
                </p>
              </div>

              <div>
                <h2 className="text-[#ee6e73] text-pt-35 sm:text-2xl font-gotham-medium mb-2">
                  Add list of receivers
                </h2>
                <label className="relative w-full">
                  <span className="block p-2 pl-4 border border-[#197d8e] rounded-lg sm:rounded-3xl text-gray-400 w-full cursor-pointer font-gotham-light">
                    {uploadedReceivers || "Upload here"}
                  </span>
                  <input
                    type="file"
                    accept=".xlsx,.xls"
                    onChange={handleReceiverChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </label>
                <p className="text-xs sm:text-sm text-[#d1585a] mt-1 font-gotham-light">
                  Acceptable formats: Excel (.xlsx, .xls)
                </p>
                <p className="text-xs sm:text-sm text-[#d1585a] font-gotham-light">
                  Please keep the size under 5MB
                </p>
              </div>
            </div>

            <p className="text-[#ee6e73] font-gotham-rounded-bold text-sm sm:text-base mt-6 mb-4">
              Please make sure you have uploaded the correct picture & document
              & there are no spelling errors anywhere!
            </p>

            <label className="flex items-center mb-6">
              <input
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="mr-2 form-checkbox border border-[#68a398] text-[#d1585a] focus:ring-[#68a398]"
                required
              />
              <span className="text-[#124e66] text-sm sm:text-base">
                I have reviewed and approved my design
              </span>
            </label>

            <div className="flex items-center justify-end">
              <Image
                src="/Home/Submit-Form-Illustration.svg"
                alt="Submit Illustration"
                width={60}
                height={60}
                className="mr-4"
              />
              <button
                type="submit"
                className="bg-[#124e66] text-white px-4 py-2 ml-[-1.3rem] mb-[1.2rem] rounded-full font-gotham-rounded-bold text-sm sm:text-base hover:bg-[#0e3e51] transition duration-300"
              >
                Add to cart
              </button>
            </div>
          </div>
        </form>

        {/* Desktop/Tablet Product Preview */}
        <div className="hidden sm:flex w-1/3 flex-col items-center mt-8">
          <div className="flex items-center justify-between w-full">
            {productDetails.image && (
              <div className="text-center">
                <Image
                  src={`https://nexiblesapp.barecms.com/uploads/${productDetails.image}`}
                  alt={productDetails.name}
                  width={250}
                  height={350}
                  className="rounded max-w-[250px] max-h-[350px] object-contain"
                />
                <div className="text-[#ee6e73] font-gotham-light text-xs sm:text-sm mt-2">
                  Front
                </div>
              </div>
            )}
            {image2 && (
              <div className="text-center ml-4">
                <Image
                  src={`https://nexiblesapp.barecms.com/uploads/${image2}`}
                  alt="Back of Pouch"
                  width={250}
                  height={350}
                  className="rounded max-w-[250px] max-h-[350px] object-contain"
                />
                <div className="text-[#ee6e73] font-gotham-light text-xs sm:text-sm mt-2">
                  Back
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}