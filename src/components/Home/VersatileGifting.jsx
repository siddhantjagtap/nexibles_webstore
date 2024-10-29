import React from "react";
import Image from "next/image";
import HomepageArch2 from "../../../public/Home/Versatile Gifting Background.svg";
import pouch2 from "../../../public/Home/pouch-2.png";
import kaju from "../../../public/Home/cashew.png";
import almonds from "../../../public/Home/almonds.png";
import pista from "../../../public/Home/pista.png";

const VersatileGifting = () => {
  return (
    <div className="relative w-full overflow-hidden mt-10">
      <div className="flex items-center">
        {/* Left Section (3/4) */}
        <div className="w-3/4 relative">
          <div className="relative">
            <Image
              src={HomepageArch2}
              alt="Decorative Arch"
              width={900}
              height={400}
              className="hidden md:block"
              priority
            />
            {/* Content positioned over the background */}
            <div className="absolute top-12 left-12 z-10">
              <h2 className="text-4xl md:text-7xl font-Mochiy text-white">
                Versatile
              </h2>
              <h2 className="text-4xl md:text-7xl font-Mochiy text-white mb-4 md:mt-8">
                Gifting
              </h2>
              <p className="text-lg md:text-2xl max-w-md text-white md:mt-8">
                <span className="block">Perfect Custom Pouches</span>
                <span className="block">for gifting Chocolates,</span>
                <span className="block">Coffee Beans, Dry Fruits & more</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section (1/4) */}
        <div className="w-1/4 relative">
          {/* Dry Fruits Circles */}
          <div className="absolute -left-8 flex space-x-4 z-20">
            <div className="w-14 h-14 bg-[#BAE6FD] rounded-full flex items-center justify-center p-2">
              <Image
                src={kaju}
                alt="Kaju"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="w-14 h-14 bg-[#BAE6FD] rounded-full flex items-center justify-center p-2">
              <Image
                src={almonds}
                alt="Almonds"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="w-14 h-14 bg-[#BAE6FD] rounded-full flex items-center justify-center p-2">
              <Image
                src={pista}
                alt="Pista"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </div>

          {/* Large Pouch */}
          <div className="mt-8">
            <Image
              src={pouch2}
              alt="Diwali gift pouch"
              width={300}
              height={400}
              className="-ml-20"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VersatileGifting;


// import React from "react";
// import Image from "next/image";
// // import human from "../../../public/Home/human.png";
// import HomepageArch2 from "../../../public/Home/Versatile Gifting Background.svg";
// import pouch2 from "../../../public/Home/pouch-2.png";
// import kaju from "../../../public/Home/cashew.png";
// import almonds from "../../../public/Home/almonds.png";
// import pista from "../../../public/Home/pista.png";

// const VersatileGifting = () => {
//   return (
//     <div className="relative w-full overflow-hidden">
//       {/* Coral Background Shape */}
//       <div className="absolute top-0 left-0 w-2/3 h-full " />

//       <div className="relative z-10 flex flex-col md:flex-row items-center container mx-auto px-4">
//         {/* Left Section */}
//         <div className="w-full md:w-1/2 relative">
//           <Image
//             src={HomepageArch2}
//             alt="Decorative Arch"
//             layout="intrinsic"
//             height={1000}
//             width={1000}
//             className="absolute left-[-100px] top-0 ml-auto h-full w-auto hidden md:block"
//           />
//           <div className="md:mt-20 mt-16 md:ml-8">
//             {/* Versatile Gifting Text */}
//             <h2 className="text-5xl md:text-6xl font-Mochiy text-black md:text-black">
//               Versatile
//             </h2>
//             <h2 className="text-5xl md:text-6xl font-Mochiy text-black md:text-white mb-6">
//               Gifting
//             </h2>
//             <p className="text-xl md:text-2xl mb-8 max-w-xl text-black md:text-white">
//               Perfect Custom Pouches for gifting Chocolates, Coffee Beans, Dry
//               Fruits & more
//             </p>
//           </div>

//           {/* Human Image */}
//           {/* <div className="hidden md:block relative ml-8">
//             <Image
//               src={human}
//               alt="Human illustration"
//               width={300}
//               height={300}
//               objectFit="contain"
//               className="mt-8"
//             />
//           </div> */}
//         </div>

//         {/* Right Section */}
//         <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
//           {/* Dry Fruits Circles */}
//           <div className="absolute top-0 right-4 md:right-8 flex space-x-4 md:space-x-8">
//             {/* Kaju Circle */}
//             <div className="w-16 h-16 md:w-24 md:h-24 bg-[#BAE6FD] rounded-full flex items-center justify-center p-2">
//               <Image
//                 src={kaju}
//                 alt="Kaju"
//                 width={80}
//                 height={80}
//                 className="object-contain"
//               />
//             </div>

//             {/* Almonds Circle */}
//             <div className="w-16 h-16 md:w-24 md:h-24 bg-[#BAE6FD] rounded-full flex items-center justify-center p-2">
//               <Image
//                 src={almonds}
//                 alt="Almonds"
//                 width={80}
//                 height={80}
//                 className="object-contain"
//               />
//             </div>

//             {/* Pista Circle */}
//             <div className="w-16 h-16 md:w-24 md:h-24 bg-[#BAE6FD] rounded-full flex items-center justify-center p-2">
//               <Image
//                 src={pista}
//                 alt="Pista"
//                 width={80}
//                 height={80}
//                 className="object-contain"
//               />
//             </div>
//           </div>

//           {/* Large Pouch */}
//           <div className="mt-24 md:mt-32">
//             <Image
//               src={pouch2}
//               alt="Diwali gift pouch"
//               width={500}
//               height={600}
//               objectFit="contain"
//               className="ml-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VersatileGifting;

//old

// import React from "react";
// import Image from "next/image";
// import HomepageArch2 from "../../../public/Home/Background-3.svg";
// import human from "../../../public/Home/human.png";
// import pouch2 from "../../../public/Home/pouch-2.png";
// import kaju from "../../../public/Home/cashew.png";
// import almonds from "../../../public/Home/almonds.png";
// import pista from "../../../public/Home/pista.png";

// const VersatileGifting = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center relative z-10">
//       <div className="w-full md:w-1/2">
//         <div className="absolute left-[-40px] top-0 ml-auto h-full w-auto hidden md:block">
//           <Image
//             src={HomepageArch2}
//             alt="Decorative Arch"
//             layout="intrinsic"
//             height={1000}
//             width={1000}
//             className=""
//           />
//         </div>
//         <div className="items-center mt-[10rem] md:ml-[2rem] ">
//           <h2 className="text-5xl md:text-7xl font-Mochiy  text-white md:relative md:top-[-9rem]">
//             Versatile
//           </h2>
//           <h2 className="text-5xl md:text-7xl font-Mochiy text-white md:relative md:top-[-9rem] mb-6">
//             Gifting
//           </h2>
//           <p className="text-xl md:text-3xl mb-8 max-w-xl md:top-[-9rem] md:relative text-white">
//             Perfect Custom Pouches for gifting Chocolates, Coffee Beans, Dry
//             Fruits and more
//           </p>
//         </div>
//         <div className="flex items-center md:absolute">
//           <div className="relative ml-4 md:ml-20 md:bottom-[10rem]">
//             <Image
//               src={human}
//               alt="Human"
//               layout="intrinsic"
//               height={200}
//               width={200}
//               objectFit="contain"
//               className="md:h-[400px] md:w-[400px]"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
//         <div className="absolute top-24 right-[10rem] hidden md:flex space-x-20">
//           <div className="w-28 h-28 bg-[#bae6fd] rounded-full">
//             <Image
//               className="ml-1 h-30 w-40"
//               src={kaju}
//               alt="Small Pouch"
//               width={100}
//               height={100}
//             />
//           </div>
//           <div className="w-28 h-28 bg-[#bae6fd] rounded-full">
//             <Image
//               className=""
//               src={almonds}
//               alt="Small Pouch"
//               width={100}
//               height={100}
//             />
//           </div>
//           <div className="w-28 h-28 bg-[#bae6fd] rounded-full">
//             <Image
//               className="mt-2 ml-1"
//               src={pista}
//               alt="Small Pouch"
//               width={100}
//               height={100}
//             />
//           </div>
//         </div>
//         <Image
//           src={pouch2}
//           alt="Large Pouch"
//           width={800}
//           height={1000}
//           objectFit="contain"
//           className="ml-auto mt-[10rem]"
//         />
//       </div>
//     </div>
//   );
// };

// export default VersatileGifting;
