// import React from 'react';
// import Image from 'next/image';

// // Import your images here
// import WhiteBackground from '../../../public/Celebrations_Page/White_Textured_Background.png';
// import BlueBackground from '../../../public/Celebrations_Page/Blue_Wavy_Backgrond.svg';
// import Diwali_Icon from "../../../public/Homepage/Category Icons/Diwali_Icon.svg";
// import Birthday from "../../../public/Homepage/Category Icons/Birthday_Icon.svg";
// import Wedding_Icon from "../../../public/Homepage/Category Icons/Wedding_Icon.svg";
// import Graduation from "../../../public/Homepage/Category Icons/Graduation_Icon.svg";
// import Engagement from "../../../public/Homepage/Category Icons/Engagement_Icon.svg";
// import Anniversary from "../../../public/Homepage/Category Icons/Anniversary_Icon.svg";
// import Baby_Shower_Icon from "../../../public/Homepage/Category Icons/Baby_Shower_Icon.svg";
// import New_Beginnings_Icon from "../../../public/Homepage/Category Icons/New_Beginnings_Icon.png";
// import Pet_Birthday_Icon from "../../../public/Homepage/Category Icons/Pet_Birthday_Icon.svg";

// const celebrations = [
//   { name: "Diwali", icon: Diwali_Icon },
//   { name: "Birthday", icon: Birthday },
//   { name: "Wedding", icon: Wedding_Icon },
//   { name: "Graduation", icon: Graduation },
//   { name: "Engagement", icon: Engagement },
//   { name: "Anniversary", icon: Anniversary },
//   { name: "Baby Shower", icon: Baby_Shower_Icon },
//   { name: "New Beginnings", icon: New_Beginnings_Icon },
//   { name: "Pet Birthday", icon: Pet_Birthday_Icon },
// ];

// export default function CelebrationsContent() {
//   return (
//     <div className="relative w-full h-full overflow-hidden">
//       {/* White Background Section */}
//       <div className="relative w-full  bg-[#197d8e]  " style={{ position: 'relative', zIndex: '1' }}>
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
//         <div className="relative z-10 max-w-6xl mx-auto flex justify-center items-center px-4  ">
//           <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
//             {celebrations.map((celebration, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <div className="bg-white  p-4 mb-2 shadow-lg" style={{ width: '200px', height: '200px' }}>
//                   <Image
//                     src={celebration.icon}
//                     alt={celebration.name}
//                     width={80}
//                     height={80}
//                     layout="responsive"
//                     objectFit="contain"
//                     className=''
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
"use client";
import React from 'react';
import Image from 'next/image';
import useFetchCategories from '../../app/usefetchcategories'; // Import your custom hook
// Import your images here
import WhiteBackground from '../../../public/Celebrations_Page/White_Textured_Background.png';
import BlueBackground from '../../../public/Celebrations_Page/Blue_Wavy_Backgrond.svg';

export default function CelebrationsContent() {
  const token = 'irrv211vui9kuwn11efsb4xd4zdkuq'; // Your API token
  const { data: celebrations, loading, error } = useFetchCategories(token); // Use the custom hook to fetch celebrations

  if (loading) return <p>Loading celebrations...</p>; // Loading state
  if (error) return <p>Error fetching celebrations: {error}</p>; // Error handling

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* White Background Section */}
      <div className="relative w-full bg-[#197d8e] " style={{ position: 'relative', zIndex: '1' }}>
        <Image
          src={WhiteBackground}
          alt="White Textured Background"
          layout="fill"
          objectFit="contain"
          style={{ position: 'absolute', top: -22, left: 0, zIndex: '-1' }}
        />

        {/* Main Content */}
        <main className="relative z-10 pt-24 px-4 pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">Celebrations</h1>
            <h2 className="text-3xl font-semibold text-orange-500 mb-6">Make Every Gift Unforgettable</h2>
            <p className="text-gray-600 text-lg mb-12">
              Explore our collection of custom stand-up pouches, perfect for adding a personal touch to any celebration.
              Each pouch is uniquely designed to reflect your style and make your moments memorable. Whatever the
              celebration, our bespoke pouches are crafted with care just for you. Explore our options and create a
              one-of-a-kind experience for your loved ones!
            </p>
          </div>
        </main>
      </div>

      {/* Blue Wavy Background with Celebration Icons */}
      <div className="relative h-screen w-full">
        <div className="absolute bottom-0 left-0 right-0">
          <Image
            src={BlueBackground}
            alt="Blue Wavy Background"
            layout="responsive"
            width={1920}
            height={400}
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto flex justify-center items-center px-4">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
            {celebrations.map((celebration, index) => (
              <div key={index} className="flex flex-col items-center ">
                <div className="bg-white p-4 mb-2 shadow-lg " style={{ width: '200px', height: '200px' }}>
                  <Image
                    src={`https://nexiblesapp.barecms.com/uploads/${celebration.bg_Img}`} // Assuming this is the image URL structure
                    alt={celebration.name}
                    width={80}
                    height={80}
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
                <p className="text-white text-lg font-semibold mt-2">{celebration.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
