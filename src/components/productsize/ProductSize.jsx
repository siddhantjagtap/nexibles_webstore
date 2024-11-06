"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const sizes = [
  {
    name: "NexiSmall",
    dimensions: "130mm x 210mm + 80mm",
    capacity: "Can hold up to 200gms",
    width: 280,
    height: 380,
  },
  {
    name: "NexiMedium",
    dimensions: "160mm x 240mm + 90mm",
    capacity: "Can hold up to 300gms",
    width: 400,
    height: 570,
  },
];

export default function ProductSize() {
  const searchParams = useSearchParams();
  const pouchId = searchParams.get("pouchId");
  const imageFileName = searchParams.get("image");

  const handleSizeSelection = (size) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    console.log("Existing Cart:", existingCart);

    if (!Array.isArray(existingCart)) {
      console.error("Cart is not an array:", existingCart);
      return;
    }

    const updatedCart = existingCart.map((item) => {
      if (item.id === parseInt(pouchId, 10)) {
        return {
          ...item,
          productSize: size.name,
        };
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    window.location.href = `/message?size=${size.name
      }&pouchId=${pouchId}&image=${encodeURIComponent(imageFileName)}`;
  };

  return (
    <div className="h-full px-8 pt-28">
      <Link href="/occasions" className="text-[#124e66] font-bold">
        ← Back
      </Link>

      <h1 className="text-2xl md:text-4xl font-bold text-[#ee6e73] text-center">
        Choose Your Size
      </h1>

      <div className="flex justify-center items-center flex-wrap gap-10 lg:space-x-56">
        {sizes.map((size, index) => (
          <div
            key={index}
            className="text-center group cursor-pointer w-full lg:w-auto"
            onClick={() => handleSizeSelection(size)}
          >
            <div className="relative p-4 transition-all duration-300 group-hover:bg-gray-200 group-hover:border-gray-400">
              <Image
                src={`https://nexiblesapp.barecms.com/uploads/${imageFileName}`}
                alt={size.name}
                width={size.width}
                height={size.height}
                className="mx-auto"
              />
              <h2 className="text-2xl font-bold mt-4 mb-2">
                <span className="text-[#124e66]">Nexi</span>
                <span className="text-[#ee6e73]">
                  {size.name.replace("Nexi", "")}
                </span>
              </h2>
              <p className="text-gray-600 mb-1">{size.dimensions}</p>
              <p className="text-gray-600 mb-4">{size.capacity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

















//old

// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useSearchParams } from 'next/navigation';

// const sizes = [
//   {
//     name: "NexiSmall",
//     dimensions: "130mm x 210mm + 80mm",
//     capacity: "Can hold up to 200gms",
//     width: 280,
//     height: 380
//   },
//   {
//     name: "NexiMedium",
//     dimensions: "160mm x 240mm + 90mm",
//     capacity: "Can hold up to 300gms",
//     width: 400,
//     height: 570
//   },
// ];

// export default function ProductSize() {
//   const searchParams = useSearchParams();
//   const pouchId = searchParams.get('pouchId');
//   const imageFileName = searchParams.get('image');

//   const handleSizeSelection = (size) => {
//     // Retrieve the existing cart from localStorage
//     const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

//     // Debugging step: log the existing cart to ensure it's an array
//     console.log('Existing Cart:', existingCart);

//     // Ensure existingCart is an array before mapping
//     if (!Array.isArray(existingCart)) {
//       console.error('Cart is not an array:', existingCart);
//       return; // Exit early if it's not an array
//     }

//     // Find the product by pouchId and update it
//     const updatedCart = existingCart.map(item => {
//       if (item.id === parseInt(pouchId, 10)) { // Ensure IDs are compared as numbers
//         return {
//           ...item,
//           productSize: size.name // Add or update the productSize field
//         };
//       }
//       return item; // Return the item as is if it doesn't match
//     });

//     // Save the updated cart back to localStorage
//     localStorage.setItem('cart', JSON.stringify(updatedCart));

//     // Navigate to the message page after updating localStorage
//     window.location.href = `/message?size=${size.name}&pouchId=${pouchId}&image=${encodeURIComponent(imageFileName)}`;
//   };

//   return (
//     <div className="h-full px-8 pt-28">
//       <Link href="/category" className="text-[#124e66] font-bold">
//         ← Back
//       </Link>

//       <h1 className="text-4xl font-bold text-[#ee6e73] text-center">Choose Your Size</h1>

//       <div className="flex justify-center items-center space-x-56">
//         {sizes.map((size, index) => (
//           <div
//             key={index}
//             className="text-center group cursor-pointer"
//             onClick={() => handleSizeSelection(size)} // Update size on click
//           >
//             <div className="relative p-4 transition-all duration-300 group-hover:bg-gray-200 group-hover:border-gray-400">
//               <Image
//                 src={`https://nexiblesapp.barecms.com/uploads/${imageFileName}`} // Using the full absolute URL here
//                 alt={size.name}
//                 width={size.width}
//                 height={size.height}
//                 className="mx-auto"
//               />
//               <h2 className="text-2xl font-semibold text-[#124e66] mt-4 mb-2">
//                 {size.name}
//               </h2>
//               <p className="text-gray-600 mb-1">{size.dimensions}</p>
//               <p className="text-gray-600 mb-4">{size.capacity}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
