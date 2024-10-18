import React from "react";
import Image from "next/image";

// Import your images here
import WhiteBackground from "../../../public/Celebrations_Page/White_Textured_Background.png";
import BlueBackground from "../../../public/Celebrations_Page/Find your celebration bg.svg";
import Graduation from "../../../public/Homepage/Category Icons/Graduation_Icon.svg";
import Engagement from "../../../public/Homepage/Category Icons/Engagement_Icon.svg";
import Anniversary from "../../../public/Homepage/Category Icons/Anniversary_Icon.svg";
import Baby_Shower_Icon from "../../../public/Homepage/Category Icons/Baby_Shower_Icon.svg";
import New_Beginnings_Icon from "../../../public/Homepage/Category Icons/New_Beginnings_Icon.png";
import Pet_Birthday_Icon from "../../../public/Homepage/Category Icons/Pet_Birthday_Icon.svg";

const celebrations = [
  { name: "Graduation", icon: Graduation },
  { name: "Engagement", icon: Engagement },
  { name: "New Beginnings", icon: New_Beginnings_Icon },
  { name: "Anniversary", icon: Anniversary },
  { name: "Baby Shower", icon: Baby_Shower_Icon },
  { name: "Pet Birthday", icon: Pet_Birthday_Icon },
];

export default function FindYourCelebration() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* White Background Section */}
      <div
        className="relative w-full bg-[#d88473]"
        style={{ position: "relative", zIndex: "1" }}
      >
        <div className="hidden md:block">
          <Image
            src={WhiteBackground}
            alt="White Textured Background"
            layout="fill"
            objectFit="contain"
            style={{ position: "absolute", top: -52, left: 0, zIndex: "-1" }}
          />
        </div>

        {/* Main Content */}
        <main className="relative z-10 pt-12 md:pt-24 px-4 pb-12 md:pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mt">
              Find Your Celebrations
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-[#197d8e] mb-6">
              Make Every Gift Unforgettable
            </h2>
            <p className="text-gray-100 md:text-gray-600 text-base md:text-lg mb-12">
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
      <div className="relative md:h-screen w-full bg-[#197d8e] md:bg-transparent">
        <div className="absolute bottom-0 left-0 right-0 hidden md:block">
          <Image
            src={BlueBackground}
            alt="Blue Wavy Background"
            layout="responsive"
            width={1920}
            height={400}
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-0">
          {/* Updated grid for 2 rows of 3 icons */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {celebrations.map((celebration, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white rounded-full p-4 mb-2 shadow-lg w-[120px] h-[120px] md:w-[200px] md:h-[200px]">
                  <Image
                    src={celebration.icon}
                    alt={celebration.name}
                    layout="responsive"
                    objectFit="contain"
                    className="w-[80px] h-[80px] md:w-[180px] md:h-[180px]"
                  />
                </div>
                <p className="text-white text-sm md:text-lg font-semibold mt-2 text-center">
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





// import React from "react";
// import Image from "next/image";

// // Import your images here
// import WhiteBackground from "../../../public/Celebrations_Page/White_Textured_Background.png";
// import BlueBackground from "../../../public/Celebrations_Page/Find your celebration bg.svg";
// import Graduation from "../../../public/Homepage/Category Icons/Graduation_Icon.svg";
// import Engagement from "../../../public/Homepage/Category Icons/Engagement_Icon.svg";
// import Anniversary from "../../../public/Homepage/Category Icons/Anniversary_Icon.svg";
// import Baby_Shower_Icon from "../../../public/Homepage/Category Icons/Baby_Shower_Icon.svg";
// import New_Beginnings_Icon from "../../../public/Homepage/Category Icons/New_Beginnings_Icon.png";
// import Pet_Birthday_Icon from "../../../public/Homepage/Category Icons/Pet_Birthday_Icon.svg";

// const celebrations = [
//   { name: "Graduation", icon: Graduation },
//   { name: "Engagement", icon: Engagement },
//   { name: "New Beginnings", icon: New_Beginnings_Icon },
//   { name: "Anniversary", icon: Anniversary },
//   { name: "Baby Shower", icon: Baby_Shower_Icon },
//   { name: "Pet Birthday", icon: Pet_Birthday_Icon },
// ];

// export default function FindYourCelebration() {
//   return (
//     <div className="relative w-full h-full overflow-hidden">
//       {/* White Background Section */}
//       <div
//         className="relative w-full bg-[#d88473]"
//         style={{ position: "relative", zIndex: "1" }}
//       >
//         <Image
//           src={WhiteBackground}
//           alt="White Textured Background"
//           layout="fill"
//           objectFit="contain"
//           style={{ position: "absolute", top: -52, left: 0, zIndex: "-1" }}
//         />

//         {/* Main Content */}
//         <main className="relative z-10 pt-24 px-4 pb-24 ">
//           <div className="max-w-4xl mx-auto text-center ">
//             <h1 className="text-5xl font-bold text-gray-800 mb-4 ">
//               Find Your Celebrations
//             </h1>
//             <h2 className="text-3xl font-bold text-[#197d8e] mb-6">
//               Make Every Gift Unforgettable
//             </h2>
//             <p className="text-gray-600 text-lg mb-12">
//               Explore our collection of custom stand-up pouches, perfect for
//               adding a personal touch to any celebration. Each pouch is uniquely
//               designed to reflect your style and make your moments memorable.
//               Whatever the celebration, our bespoke pouches are crafted with
//               care just for you. Explore our options and create a one-of-a-kind
//               experience for your loved ones!
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
//         <div className="relative z-10 max-w-6xl mx-auto px-4">
//           {/* Updated grid for 2 rows of 3 icons */}
//           <div className="grid grid-cols-3 gap-4">
//             {" "}
//             {/* Reduced gap */}
//             {celebrations.map((celebration, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <div
//                   className="bg-white rounded-full p-4 mb-2 shadow-lg"
//                   style={{ width: "180px", height: "180px" }} // Increased size
//                 >
//                   <Image
//                     src={celebration.icon}
//                     alt={celebration.name}
//                     width={120}
//                     height={120}
//                     layout="responsive"
//                     objectFit="contain"
//                   />
//                 </div>
//                 <p className="text-white text-lg font-semibold mt-2">
//                   {celebration.name}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
