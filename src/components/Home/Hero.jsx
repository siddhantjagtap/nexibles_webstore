"use client";
import Image from "next/image";
import Butterflies2 from "../../../public/Home/Butterflies-2.svg";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/Home/pouch-6.png",
    "/Home/pouch-1.png",
    "/Home/pouch-2.png",
    "/Home/pouch-3.png",
    "/Home/pouch-4.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen bg-[#197d8e]">
      {/* White circular container */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full bg-white rounded-b-[100%] md:rounded-b-[20rem]">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="pt-4 flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto">
              {/* Image Section */}
              <div className="relative w-full md:w-[30%] mt-16 md:mt-28 h-[35vh] md:h-[57vh] mb-4 md:mb-0 ml-8">
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
                <div className="flex justify-center mt-2 md:mt-4">
                  {images.map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full mx-1 cursor-pointer ${
                        i === currentSlide ? "bg-[#d88473]" : "bg-gray-400"
                      }`}
                      onClick={() => setCurrentSlide(i)}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Text Section */}
              <div className="md:w-[70%] text-center md:text-left px-4 md:px-8 md:mt-36">
                <div className="flex justify-center md:justify-start items-center">
                  <h1 className="text-pt-20 md:text-pt-45 lg:text-pt-52 md:py-0 py-4 text-[#0f1729] font-gotham-rounded-bold">
                    NEXI
                  </h1>
                  <h1 className="text-pt-20 md:text-pt-45 lg:text-pt-52 text-[#db5c3c] font-gotham-rounded-bold">
                    GIFTING
                  </h1>
                  <Image
                    src={Butterflies2}
                    alt="butterflies"
                    width={64}
                    height={64}
                    className="inline-block w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 mt-[-1rem] md:mt-[-3rem]"
                  />
                </div>

                <h2 className="text-lg md:text-2xl lg:text-pt-18 font-gotham-medium -mt-4">
                  {`India's First Personalised Stand-Up Pouches`}
                </h2>
                <p className="text-sm md:text-lg lg:text-pt-22 font-gotham-light mb-6 text-gray-500 mt-2">
                  {"Personalise, Pack, Present - The Future of Gifting"}
                </p>
                <Link
                  href={`/occasions`}
                  passHref
                  className="inline-block bg-[#197d8e] text-white font-bold py-2 px-6 rounded-full text-sm md:text-xl transition duration-300 hover:bg-[#156b7a]"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}









// 'use client';
// import Image from "next/image";
// import Butterflies2 from "../../../public/Home/Butterflies-2.svg";
// import { useState, useEffect } from "react";
// import Link from "next/link";

// export default function Hero() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const images = [
//     "/Home/pouch-6.png",
//     "/Home/pouch-1.png",
//     "/Home/pouch-2.png",
//     "/Home/pouch-3.png",
//     "/Home/pouch-4.png",

//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="relative h-screen bg-[#197d8e] ">
//       {/* White circular container */}
//       <div className="absolute inset-0 w-full h-full ">
//         <div className="relative w-full h-full bg-white rounded-b-[100%] md:rounded-b-[20rem] ">
//           <div className="pt-4 flex flex-col md:flex-row items-center justify-center">
//             {/* Image Section */}
//             <div className="relative w-full md:w-[30%] mt-24 h-[30vh] md:h-[57vh] mb-4 md:mt-48 md:mb-0">
//               <div className="overflow-hidden w-full h-full relative">
//                 {images.map((src, index) => (
//                   <Image
//                     key={index}
//                     src={src}
//                     alt={`Diwali Pouch ${index + 1}`}
//                     layout="fill"
//                     objectFit="contain"
//                     className={`absolute transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0"
//                       }`}
//                   />
//                 ))}
//               </div>
//               <div className="flex justify-center md:mt-4 ">
//                 {images.map((_, i) => (
//                   <div
//                     key={i}
//                     className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${i === currentSlide ? "bg-[#d88473]" : "bg-gray-400"
//                       }`}
//                     onClick={() => setCurrentSlide(i)}
//                   ></div>
//                 ))}
//               </div>
//             </div>

//             {/* Text Section */}
//             <div className="md:w-[70%] md:text-left px-4 md:mt-36">
//               <div className="flex justify-center md:justify-start">
//                 <h1 className="md:text-pt-75 text-pt-20 text-[#0f1729] font-gotham-rounded-bold mb-2">
//                   NEXI
//                 </h1>
//                 <h1 className="md:text-pt-75 text-pt-20 text-[#db5c3c] font-gotham-rounded-bold">
//                   GIFTING
//                 </h1>
//                 <Image
//                   src={Butterflies2}
//                   alt="butterflies"
//                   width={64}
//                   height={64}
//                   className="inline-block md:w-20 md:h-20 lg:w-24 lg:h-24 mt-[-3rem]"
//                 />
//               </div>

//               <h2 className="md:text-pt-30 text-pt-10 font-gotham-medium">
//                 {`India’s First Personalised Stand-Up Pouches`}
//               </h2>
//               <p className="md:text-pt-22 text-pt-5 font-gotham-light mb-6 text-gray-500">
//                 {"Personalise, Pack, Present - The Future of Gifting"}
//               </p>
//               <Link
//                 href={`/category`}
//                 passHref
//                 className="bg-[#197d8e] text-white font-bold py-2 px-6 md:px-6 rounded-full text-mx md:text-xl transition duration-300 hover:bg-[#156b7a]"
//               >
//                 Shop Now
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
