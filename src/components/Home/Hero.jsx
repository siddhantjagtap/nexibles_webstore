"use client";
import Image from "next/image";
import Butterflies2 from "../../../public/Home/Butterflies-2.svg";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/Home/pouch-1.png",
    "/Home/pouch-2.png",
    "/Home/pouch-3.png",
    "/Home/pouch-4.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="h-screen bg-[#197d8e] bg-cover bg-center bg-[url('/Homepage/Backgrounds/Banner_Background.png')]">
      <div className="pt-4 flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-[50vh] md:h-[90vh] mb-4 md:mb-0">
          <div className="overflow-hidden w-full h-full relative">
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Diwali Pouch ${index + 1}`}
                layout="fill"
                objectFit="contain"
                className={`absolute transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <div className="flex justify-center md:mt-4">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
                  i === currentSlide ? "bg-white" : "bg-gray-400"
                }`}
                onClick={() => setCurrentSlide(i)}
              ></div>
            ))}
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left px-4">
          <div className="flex justify-center md:justify-start">
            <h1 className="text-4xl md:text-6xl text-[#0f1729] font-extrabold md:mb-4 mb-2">
              NEXI
            </h1>
            <h1 className="text-4xl md:text-6xl text-[#db5c3c] font-extrabold">
              GIFTING
            </h1>
            <Image
              src={Butterflies2}
              alt="butterflies"
              width={64}
              height={64}
              className="inline-block md:w-20 md:h-20 lg:w-24 lg:h-24 mt-[-3rem] "
            />
          </div>

          <h2 className="text-xl md:text-2xl font-bold">
            {`India's First of Its kind`}
          </h2>
          <p className="text-mx md:text-lg mb-6 text-gray-500">
            {"Personalise, Pack, Present - The Future of Gifting"}
          </p>
          <Link
            href={`/category`}
            passHref
            className="bg-[#197d8e] text-white font-bold py-2 px-6 md:px-6 rounded-full text-mx md:text-xl transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}



//old

// 'use client';
// import Image from 'next/image';
// import { useState, useEffect } from 'react';
// import Link from "next/link";
// export default function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const images = ['/Home/pouch-1.png', '/Home/pouch-2.png', '/Home/pouch-3.png', '/Home/pouch-4.png'];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [images.length]);
//   return (
//     <div className="h-screen

//     bg-[#197d8e]  bg-cover bg-center"  style={{ backgroundImage: "url('/Homepage/Backgrounds/Banner_Background.png')" }}>
//       <div className=" pt-4 " >
//         <div className="flex  items-center">
//           <div className="md:w-1/2 mt-8 md:mt-0 relative">
//             <div className="overflow-hidden w-full h-[90vh] relative">
//               {images.map((src, index) => (
//                 <Image
//                   key={index}
//                   src={src}
//                   alt={`Diwali Pouch ${index + 1}`}
//                   layout="fill"
//                   objectFit="contain"
//                   className={`absolute transition-opacity duration-500 ${
//                     index === currentSlide ? 'opacity-100' : 'opacity-0'
//                   }`}
//                 />
//               ))}
//             </div>
//             <div className="flex justify-center ">
//               {images.map((_, i) => (
//                 <div
//                   key={i}
//                   className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
//                     i === currentSlide ? 'bg-white' : 'bg-gray-400'
//                   }`}
//                   onClick={() => setCurrentSlide(i)}
//                 ></div>
//               ))}
//             </div>
//           </div>
//           <div className="" >
//             <div className='flex'>
//             <h1 className="text-8xl text-[#0f1729] font-extrabold mb-4">NEXI</h1>
//             <h1 className="text-8xl text-[#db5c3c] font-extrabold ">GIFTING</h1>
//             </div>
//             <h2 className="text-2xl font-bold ">Indias First Customized Stand-Up Pouch Gifting Platform</h2>
//             <p className="text-xl mb-6">Start with just 50 pouches & scale up to 500 for all your gifting needs!</p>
//             <Link href={`/shop`} passHref  className="bg-[#124e66] text-white font-bold py-2 px-8 rounded-full text-2xl transition duration-300" >
//               Shop Now
//             </Link>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }
