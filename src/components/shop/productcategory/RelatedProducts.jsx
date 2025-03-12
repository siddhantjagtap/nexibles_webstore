"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Styles for navigation buttons
const customStyles = {
  ".swiper-button-next, .swiper-button-prev": {
    backgroundColor: "white",
    borderRadius: "50%",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    color: "black",
    width: "40px",
    height: "40px",
  },
};

const products = [
  {
    id: 1,
    src: "/home/2sidesealpouch.png",
    name: "White Tent Card",
    material: "Cardboard",
  },
  {
    id: 2,
    src: "/home/whitetentcard.png",
    name: "White Tent Card",
    material: "Cardboard",
  },
  {
    id: 3,
    src: "/home/visitingcard.png",
    name: "White Tent Card",
    material: "Cardboard",
  },
  {
    id: 4,
    src: "/home/gussetpouch.png",
    name: "White Tent Card",
    material: "Cardboard",
  },
  {
    id: 5,
    src: "/home/standup.png",
    name: "White Tent Card",
    material: "Cardboard",
  },
];

export default function RelatedProducts() {
  return (
    <div className="p-5 max-w-screen-xl mx-auto">
      <h2 className="text-2xl font-bold mb-5">Related Products</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation // Enables navigation arrows
        pagination={{ clickable: true }} // Adds pagination dots
        autoplay={{ delay: 3000, reverseDirection: false }} // Autoplay with sliding direction left to right
        loop={true} // Loops the slides infinitely
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
        style={customStyles}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div
              className="text-left p-5 rounded-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-white 
            w-full sm:w-auto lg:w-64 xl:w-72"
            >
              <div className="relative w-full h-60 lg:h-72 xl:h-80 mb-4">
                <Image
                  src={product.src}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
              <p className="text-gray-600">{product.material}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
// import Image from 'next/image';

// const products = [
//   { id: 1, src: '/home/2sidesealpouch.png', name: 'White Tent Card', material: 'Cardboard' },
//   { id: 2, src: '/home/whitetentcard.png', name: 'White Tent Card', material: 'Cardboard' },
//   { id: 3, src: '/home/visitingcard.png', name: 'White Tent Card', material: 'Cardboard' },
//   { id: 4, src: '/home/gussetpouch.png', name: 'White Tent Card', material: 'Cardboard' },
//   { id: 5, src: '/home/standup.png', name: 'White Tent Card', material: 'Cardboard' },
// ];

// export default function RelatedProducts() {
//   return (
//     <div className="p-5">
//       <h2 className="text-2xl mb-5">Related products</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="text-left p-5 rounded-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 "
//           >
//             <Image
//               src={product.src}
//               alt={product.name}
//               width={180}
//               height={250} // Initial height
//               className="rounded-md transition-transform duration-300 hover:scale-105" // Increase height on hover
//             />
//             <p className="mt-4 ">{product.name}</p>
//             <p>{product.material}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
