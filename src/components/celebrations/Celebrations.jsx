"use client";
import React from "react";
import Image from "next/image";
import useFetchCategories from "../../app/usefetchcategories"; // Import your custom hook
import WhiteBackground from "../../../public/Celebrations_Page/White_Textured_Background.png";
import BlueBackground from "../../../public/Celebrations_Page/Blue_Wavy_Backgrond.svg";

export default function CelebrationsContent() {
  const token = "irrv211vui9kuwn11efsb4xd4zdkuq"; // Your API token
  const { data: celebrations, loading, error } = useFetchCategories(token); // Use the custom hook to fetch celebrations

  if (loading) return <p>Loading celebrations...</p>; // Loading state
  if (error) return <p>Error fetching celebrations: {error}</p>; // Error handling

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* White Background Section */}
      <div
        className="relative w-full bg-[#197d8e]"
        style={{ position: "relative", zIndex: "1" }}
      >
        {/* White Background Image - Visible only on medium screens and above */}
        <Image
          src={WhiteBackground}
          alt="White Textured Background"
          layout="fill"
          objectFit="contain"
          className="hidden md:block h-[50vh]" // Hidden on mobile, shown on larger screens
          style={{ position: "absolute", top: -22, left: 0, zIndex: "-1" }}
        />

        {/* Main Content */}
        <main className="relative z-10 pt-12 md:pt-24 px-4 pb-12 md:pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-6xl font-bold text-gray-800 mb-4">
              Celebrations
            </h1>
            <h2 className="text-xl md:text-3xl font-semibold text-orange-500 mb-6">
              Make Every Gift Unforgettable
            </h2>
            <p className="text-gray-300 md:text-gray-600 text-base md:text-lg mb-8 md:mb-12">
              Explore our collection of custom stand-up pouches, perfect for
              adding a personal touch to any celebration. Each pouch is uniquely
              designed to reflect your style and make your moments memorable.
              Whatever the celebration, our bespoke pouches are crafted with
              care just for you. Explore our options and create a one-of-a-kind
              experience for your loved ones!
            </p>
          </div>
        </main>
      </div>

      {/* Blue Wavy Background with Celebration Icons */}
      <div className="relative min-h-[50vh] md:min-h-screen w-full">
        <div className="absolute bottom-0 left-0 right-0 hidden md:block">
          {" "}
          {/* Hide on mobile */}
          <Image
            src={BlueBackground}
            alt="Blue Wavy Background"
            layout="responsive"
            width={1920}
            height={400}
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto flex justify-center items-center px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-8">
            {celebrations.map((celebration, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white p-4 mb-2 shadow-lg">
                  <Image
                    src={`https://nexiblesapp.barecms.com/uploads/${celebration.bg_Img}`}
                    alt={celebration.name}
                    width={100}
                    height={100}
                    layout="responsive"
                    objectFit="contain"
                    className="w-16 h-16 sm:w-16 sm:h-16 md:w-60 md:h-60 lg:w-64 lg:h-64" // Larger sizes for desktop
                  />
                </div>

                <p className="md:text-white text-black text-sm sm:text-lg font-semibold mt-2">
                  {celebration.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



//old
// "use client";
// import React from 'react';
// import Image from 'next/image';
// import useFetchCategories from '../../app/usefetchcategories'; // Import your custom hook
// // Import your images here
// import WhiteBackground from '../../../public/Celebrations_Page/White_Textured_Background.png';
// import BlueBackground from '../../../public/Celebrations_Page/Blue_Wavy_Backgrond.svg';

// export default function CelebrationsContent() {
//   const token = 'irrv211vui9kuwn11efsb4xd4zdkuq'; // Your API token
//   const { data: celebrations, loading, error } = useFetchCategories(token); // Use the custom hook to fetch celebrations

//   if (loading) return <p>Loading celebrations...</p>; // Loading state
//   if (error) return <p>Error fetching celebrations: {error}</p>; // Error handling

//   return (
//     <div className="relative w-full h-full overflow-hidden">
//       {/* White Background Section */}
//       <div className="relative w-full bg-[#197d8e] " style={{ position: 'relative', zIndex: '1' }}>
//         <Image
//           src={WhiteBackground}
//           alt="White Textured Background"
//           layout="fill"
//           objectFit="contain"
//           style={{ position: 'absolute', top: -22, left: 0, zIndex: '-1' }}
//         />

//         {/* Main Content */}
//         <main className="relative z-10 pt-24 px-4 pb-24">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-6xl font-bold text-gray-800 mb-4">Celebrations</h1>
//             <h2 className="text-3xl font-semibold text-orange-500 mb-6">Make Every Gift Unforgettable</h2>
//             <p className="text-gray-600 text-lg mb-12">
//               Explore our collection of custom stand-up pouches, perfect for adding a personal touch to any celebration.
//               Each pouch is uniquely designed to reflect your style and make your moments memorable. Whatever the
//               celebration, our bespoke pouches are crafted with care just for you. Explore our options and create a
//               one-of-a-kind experience for your loved ones!
//             </p>
//           </div>
//         </main>
//       </div>

//       {/* Blue Wavy Background with Celebration Icons */}
//       <div className="relative h-screen w-full">
//         <div className="absolute bottom-0 left-0 right-0">
//           <Image
//             src={BlueBackground}
//             alt="Blue Wavy Background"
//             layout="responsive"
//             width={1920}
//             height={400}
//           />
//         </div>
//         <div className="relative z-10 max-w-6xl mx-auto flex justify-center items-center px-4">
//           <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
//             {celebrations.map((celebration, index) => (
//               <div key={index} className="flex flex-col items-center ">
//                 <div className="bg-white p-4 mb-2 shadow-lg " style={{ width: '200px', height: '200px' }}>
//                   <Image
//                     src={`https://nexiblesapp.barecms.com/uploads/${celebration.bg_Img}`} // Assuming this is the image URL structure
//                     alt={celebration.name}
//                     width={80}
//                     height={80}
//                     layout="responsive"
//                     objectFit="contain"
//                   />
//                 </div>
//                 <p className="text-white text-lg font-semibold mt-2">{celebration.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
