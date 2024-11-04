import React from "react";
import Image from "next/image";

const Content = () => (
  <div className="flex flex-col items-center justify-between gap-4 md:gap-8 md:flex-row md:items-center w-full">
    {/* Left Section */}
    <div className="flex items-center gap-3 md:gap-6 flex-grow md:pl-[7%] px-4 md:px-0">
      <div className="flex-shrink-0">
        <Image
          src="/Home/Want your own design illustration.svg"
          alt="Custom Design Illustration"
          width={200}
          height={180}
          className="w-24 h-24 md:w-52 md:h-52"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-xl md:text-4xl font-bold text-[#197d8e] mb-2 md:mb-3">
          Make It Yours
        </h2>
        <div className="flex items-center gap-2 text-sm md:text-lg text-[#e85d3d]">
          <span>Your Design Idea</span>
          <span>+</span>
          <span>Our Team</span>
        </div>
        <div className="flex items-center gap-2 text-sm md:text-lg">
          <span className="text-[#e85d3d]">=</span>
          <span className="text-[#e85d3d]">Gifting Magic</span>
        </div>
      </div>
    </div>

    {/* Right Section - Keeping desktop view exactly the same */}
    <div className="relative flex justify-end flex-[2]">
      <div className="absolute top-0 right-0 w-[300px] h-[180px] md:w-[536px] md:h-[230px]">
        <Image
          src="/Homepage/Backgrounds/Customisation Background1.svg"
          alt="Customisation Background"
          layout="fill"
          objectFit="cover"
          className="right-0"
        />
      </div>
      <div className="relative z-10 p-6 md:p-10 rounded-l-full text-white md:w-[500px]">
        <p className="text-base md:text-2xl leading-relaxed md:mt-[2rem]">
          Reach out to us at{" "}
          <a
            href="mailto:sales@artnext.in"
            className="font-semibold hover:underline text-black"
          >
            sales@artnext.in
          </a>{" "}
          & we'll bring your idea to life for you, down to the tiniest detail!
        </p>
      </div>
    </div>
  </div>
);

const OwnDesign = () => {
  return (
    <div className="w-full bg-white relative">
      <div className="flex items-center justify-center h-full py-4 md:py-16 relative">
        <Content />
      </div>
    </div>
  );
};

export default OwnDesign;




// import React from "react";
// import Image from "next/image";

// const Content = () => (
//   <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-center w-full ">
//     {/* Left Section */}
//     <div className="flex items-center gap-6 flex-grow pl-[7%] ">
//       <div className="flex-shrink-0">
//         <Image
//           src="/Home/Want your own design illustration.svg"
//           alt="Custom Design Illustration"
//           width={200}
//           height={180}
//           className="w-32 h-32 md:w-52 md:h-52"
//         />
//       </div>
//       <div className="flex flex-col">
//         <h2 className="text-2xl md:text-4xl font-bold text-[#197d8e] mb-3">
//           Make It Yours
//         </h2>
//         <div className="flex items-center gap-2 text-base md:text-lg text-[#e85d3d] text-gray-700">
//           <span className="text-[#e85d3d]">Your Design Idea </span>
//           <span className="text-[#e85d3d]">+</span>
//           <span className="text-[#e85d3d]">Our Team</span>
//         </div>
//         <div className="flex items-center gap-2 text-base md:text-lg">
//           <span className="text-[#e85d3d]">=</span>
//           <span className="text-[#e85d3d]">Gifting Magic</span>
//         </div>
//       </div>
//     </div>

//     {/* Right Section */}
//     <div className="relative flex justify-end flex-[2]">
//       {" "}
//       {/* Increased flexibility for right section */}
//       {/* Background aligned to the right edge */}
//       <div className="absolute top-0 right-0 w-[400px] h-[220px] md:w-[536px] md:h-[230px]">
//         <Image
//           src="/Homepage/Backgrounds/Customisation Background1.svg"
//           alt="Customisation Background"
//           layout="fill"
//           objectFit="cover"
//           className="right-0"
//         />
//       </div>
//       <div className="relative z-10 p-10 rounded-l-full text-white md:w-[500px] ">
//         <p className="text-lg md:text-2xl leading-relaxed md:mt-[2rem] ">
//           Reach out to us at{" "}
//           <a
//             href="mailto:sales@artnext.in"
//             className="font-semibold hover:underline text-black"
//           >
//             sales@artnext.in
//           </a>{" "}
//           & we’ll bring your idea to life for you, down to the tiniest detail!
//         </p>
//       </div>
//     </div>
//   </div>
// );

// const OwnDesign = () => {
//   return (
//     <div className="w-full bg-white relative">
//       <div className="flex items-center justify-center h-full py-8 md:py-16 relative">
//         <Content />
//       </div>
//     </div>
//   );
// };

// export default OwnDesign;
