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
    width: 220,
    height: 290,
    mobileWidth: 130,
    mobileHeight: 170,
  },
  {
    name: "NexiMedium",
    dimensions: "160mm x 240mm + 90mm",
    capacity: "Can hold up to 300gms",
    width: 260,
    height: 320,
    mobileWidth: 170,
    mobileHeight: 230,
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

    let price;
    const updatedCart = existingCart.map((item) => {
      if (item.id === parseInt(pouchId, 10)) {
        return {
          ...item,
          productSize: size.name,
          price: price,
        };
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    window.location.href = `/message?size=${
      size.name
    }&pouchId=${pouchId}&image=${encodeURIComponent(imageFileName)}`;
  };

  return (
    <div className="h-full px-4 sm:px-8 pt-28">
      <Link href="/occasions" className="text-[#124e66] font-gotham-bold">
        ← Back
      </Link>

      <h1 className="text-xl sm:text-2xl md:text-3xl font-gotham-bold text-[#ee6e73] text-center md:mb-8">
        Choose Your Size
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 lg:space-x-56 md:mb-24 md:mt-24">
        {sizes.map((size, index) => (
          <div
            key={index}
            className="text-center group cursor-pointer w-[80%] sm:w-[45%] md:w-[30%] lg:w-auto hover:shadow-lg transition-all"
            onClick={() => handleSizeSelection(size)}
          >
            {/* Responsive Image Container */}
            <div className="relative flex justify-center items-end h-[240px] sm:h-[270px] md:h-[300px]">
              <Image
                src={`https://nexiblesapp.barecms.com/uploads/${imageFileName}`}
                alt={size.name}
                width={size.mobileWidth}
                height={size.mobileHeight}
                className="sm:hidden transition-transform group-hover:scale-105 object-contain "
              />
              <Image
                src={`https://nexiblesapp.barecms.com/uploads/${imageFileName}`}
                alt={size.name}
                width={size.width}
                height={size.height}
                className="hidden sm:block transition-transform group-hover:scale-105 object-contain"
              />
            </div>

            {/* Text Below Image */}
            <div className="md:mb-2 mb-">
              <h2 className="text-lg sm:text-xl md:text-2xl font-gotham-bold md:mt-4">
                <span className="text-[#124e66]">Nexi</span>
                <span className="text-[#ee6e73]">
                  {size.name.replace("Nexi", "")}
                </span>
              </h2>
              <p className="text-gray-600 mb-1 font-gotham-light text-sm sm:text-base">
                {size.dimensions}
              </p>
              <p className="text-gray-600 mb-4 font-gotham-light text-sm sm:text-base">
                {size.capacity}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useSearchParams } from "next/navigation";

// const sizes = [
//   {
//     name: "NexiSmall",
//     dimensions: "130mm x 210mm + 80mm",
//     capacity: "Can hold up to 200gms",
//     width: 280,
//     height: 380,
//   },
//   {
//     name: "NexiMedium",
//     dimensions: "160mm x 240mm + 90mm",
//     capacity: "Can hold up to 300gms",
// width: 400,
// height: 570,
//   },
// ];

// export default function ProductSize() {
//   const searchParams = useSearchParams();
//   const pouchId = searchParams.get("pouchId");
//   const imageFileName = searchParams.get("image");

//   const handleSizeSelection = (size) => {
//     const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

//     console.log("Existing Cart:", existingCart);

//     if (!Array.isArray(existingCart)) {
//       console.error("Cart is not an array:", existingCart);
//       return;
//     }

//     let price;
//     const updatedCart = existingCart.map((item) => {
//       if (item.id === parseInt(pouchId, 10)) {
//         return {
//           ...item,
//           productSize: size.name,
//           price: price
//         };
//       }
//       return item;
//     });

//     localStorage.setItem("cart", JSON.stringify(updatedCart));

//     window.location.href = `/message?size=${size.name}&pouchId=${pouchId}&image=${encodeURIComponent(imageFileName)}`;
//   };

//   return (
//     <div className="h-full px-8 pt-28">
//       <Link href="/occasions" className="text-[#124e66] font-gotham-bold">
//         ← Back
//       </Link>

//       <h1 className="text-2xl md:text-pt-30 font-gotham-bold text-[#ee6e73] text-center">
//         Choose Your Size
//       </h1>

//       <div className="flex justify-center items-center flex-wrap gap-10 lg:space-x-56">
//         {sizes.map((size, index) => (
//           <div
//             key={index}
//             className="text-center group cursor-pointer w-full lg:w-auto"
//             onClick={() => handleSizeSelection(size)}
//           >
//             <div className="relative p-4 transition-all duration-300  group-hover:border-gray-400">
//               <Image
//                 src={`https://nexiblesapp.barecms.com/uploads/${imageFileName}`}
//                 alt={size.name}
//                 width={size.width}
//                 height={size.height}
//                 className="mx-auto"
//               />
//               <h2 className="text-pt-20 font-gotham-bold mt-4 mb-2">
//                 <span className="text-[#124e66]">Nexi</span>
//                 <span className="text-[#ee6e73]">
//                   {size.name.replace("Nexi", "")}
//                 </span>
//               </h2>
// <p className="text-gray-600 mb-1 font-gotham-light text-pt-10">{size.dimensions}</p>
// <p className="text-gray-600 mb-4 font-gotham-light text-pt-10">{size.capacity}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
