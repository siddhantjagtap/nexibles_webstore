import React from "react";
import Image from "next/image"; // Assuming you use Next.js
import BirdIllustration from "../../../public/Home/Bird-Illustration.svg";

const BrandValues = () => {
  const values = [
    {
      icon: "/path-to-icons/lowest-moq-icon.svg", // Replace with the actual icon paths
      title: "Lowest MOQ",
    },
    {
      icon: "/path-to-icons/reusability-icon.svg",
      title: "Reusability",
    },
    {
      icon: "/path-to-icons/customisation-icon.svg",
      title: "Customisation",
    },
    {
      icon: "/path-to-icons/quality-icon.svg",
      title: "Quality",
    },
    {
      icon: "/path-to-icons/affordability-icon.svg",
      title: "Affordability",
    },
  ];

  return (
    <div className="bg-[#197d8e] pb-12 relative overflow-hidden mt-24">
      <div className="text-center mb-8 flex justify-center items-center space-x-4">
       <div className="w-[120px] h-[120px] relative mt-[-49px] z-50">
            <Image
            src={BirdIllustration}
            alt="Bird Illustration"
            layout="fill"
            objectFit="contain"
            className="z-50"  
            />
        </div>
        {/* Brand Values Heading */}
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
          Brand Values
        </h2>
      </div>

      {/* Grid for Values */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {values.map((value, index) => (
          <div key={index} className="flex flex-col items-center text-white">
            <Image
              src={value.icon}
              alt={`${value.title} Icon`}
              width={70}
              height={70}
              className="mb-4"
            />
            <p className="text-lg font-semibold">{value.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandValues;

// import React from "react";
// import Image from "next/image"; // Assuming you use Next.js, replace if not

// const BrandValues = () => {
//   const values = [
//     {
//       icon: "/path-to-icons/lowest-moq-icon.svg", // Replace with the actual icon paths
//       title: "Lowest MOQ",
//     },
//     {
//       icon: "/path-to-icons/reusability-icon.svg",
//       title: "Reusability",
//     },
//     {
//       icon: "/path-to-icons/customisation-icon.svg",
//       title: "Customisation",
//     },
//     {
//       icon: "/path-to-icons/quality-icon.svg",
//       title: "Quality",
//     },
//     {
//       icon: "/path-to-icons/affordability-icon.svg",
//       title: "Affordability",
//     },
//   ];

//   return (
//     <div className="bg-[#197d8e] py-12">
//       <div className="text-center mb-8">
//         {/* Brand Values Heading */}
//         <Image
//           src="/path-to-image/hummingbird-logo.svg" // Replace with actual image path
//           alt="Brand Logo"
//           width={80}
//           height={80}
//         />
//         <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold my-4">
//           Brand Values
//         </h2>
//       </div>

//       {/* Grid for Values */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
//         {values.map((value, index) => (
//           <div key={index} className="flex flex-col items-center text-white">
//             <Image
//               src={value.icon}
//               alt={`${value.title} Icon`}
//               width={70}
//               height={70}
//               className="mb-4"
//             />
//             <p className="text-lg font-semibold">{value.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BrandValues;
