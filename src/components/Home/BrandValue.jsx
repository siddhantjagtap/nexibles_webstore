import React from "react";
import Image from "next/image";
import BirdIllustration from "../../../public/Home/Bird-Illustration.svg";

const BrandValues = () => {
  const values = [
    {
      icon: "/Homepage/Brand_icons/Brand Value 5.svg",
      title: "Lowest MOQ",
    },
    {
      icon: "/Homepage/Brand_icons/Brand Value 4.svg",
      title: "Reusability",
    },
    {
      icon: "/Homepage/Brand_icons/Brand Value 3.svg",
      title: "Customisation",
    },
    {
      icon: "/Homepage/Brand_icons/Brand Value 2.svg",
      title: "Quality",
    },
    {
      icon: "/Homepage/Brand_icons/Brand Value 1.svg",
      title: "Affordability",
    },
  ];

  return (
    <>
      {/* Bird Illustration */}
      <div className="relative">
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 z-10 ml-[-10rem]">
          <Image
            src={BirdIllustration}
            alt="Bird Illustration"
            width={140}
            height={140}
            className="bird-illustration"
          />
        </div>
      </div>

      {/* Brand Values Section */}
      <div className="relative pb-12 overflow-hidden mt-12 z-0 min-h-[300px] lg:min-h-[380px]">
        {/* Background Image using Next.js Image component */}
        <Image
          src="/Homepage/Brand_icons/Brand Values Bakground.svg"
          alt="Background"
          fill
          className="object-cover -z-10"
          priority
        />

        <div className="flex items-center justify-center mb-12">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mt-12">
            Brand Values
          </h2>
        </div>

        {/* Grid for Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center text-white mt-4">
              <Image
                src={value.icon}
                alt={`${value.title} Icon`}
                width={85}
                height={85}
                className="mb-4"
              />
              <p className="text-lg font-semibold">{value.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
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
