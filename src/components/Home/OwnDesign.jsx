import React from "react";
import Image from "next/image";

const Content = () => (
  <div className="flex flex-col items-center justify-between gap-4 lg:gap-8 lg:flex-row lg:items-center w-full">
    {/* Left Section - Improved */}
    <div className="flex flex-col sm:flex-row items-center gap-2 lg:gap-8 p-4 sm:p-6 md:p-8 lg:pl-[7%]">
      <div className="flex-shrink-0">
        <Image
          src="/Home/Want your own design illustration.svg"
          alt="Custom Design Illustration"
          width={200}
          height={180}
          className="w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 object-contain"
        />
      </div>

      <div className="flex flex-col font-gotham-bold text-center sm:text-left">
        <h2 className="md:text-pt-40 text-pt-16 text-[#197d8e] mb-3">
          Make It Yours
        </h2>
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2">
          <span className="text-[#e85d3d] md:text-pt-20 lg:text-2xl">
            Your Design Idea
          </span>
          <span className="text-[#e85d3d]  sm:inline md:text-pt-20 lg:text-2xl">
            +
          </span>
          <span className="text-[#e85d3d] md:text-pt-20 lg:text-2xl">
            Our Team
          </span>
        </div>
        <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
          <span className="text-[#e85d3d] md:text-pt-20 lg:text-2xl">=</span>
          <span className="text-[#e85d3d] md:text-pt-20 lg:text-2xl">
            Gifting Magic
          </span>
        </div>
      </div>
    </div>

    {/* Right Section - Kept Exactly as Original */}
    <div className="relative flex justify-end flex-1 sm:flex-[2]">
      <div className="absolute top-0 right-0 w-full h-full md:w-[536px] md:h-[230px]">
        <Image
          src="/Homepage/Backgrounds/Customisation Background1.svg"
          alt="Customisation Background"
          layout="fill"
          objectFit="contain"
          className="right-0"
        />
      </div>
      <div className="relative z-10 p-10 rounded-l-full text-white md:w-[500px] md:pl-0 pl-[5rem] w-full sm:w-auto">
        <p className="font-gotham-book md:text-pt-20 ">
          Reach out to us at{" "}
          <a
            href="mailto:sales@artnext.in"
            className="font-gotham-light hover:underline text-black"
          >
            sales@artnext.in
          </a>{" "}
          {`& we'll bring your idea to life for you, down to the tiniest detail!`}
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
//   <div className="flex flex-col items-center justify-between gap-4 lg:gap-8 lg:flex-row lg:items-center w-full">
//     {/* Left Section - Improved */}
//     <div className="flex flex-row sm:flex-row items-center gap-2 lg:gap-8 p-4 sm:p-6 md:p-8 lg:pl-[7%]">
//       <div className="flex-shrink-0">
//         <Image
//           src="/Home/Want your own design illustration.svg"
//           alt="Custom Design Illustration"
//           width={200}
//           height={180}
//           className="w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 object-contain"
//         />
//       </div>

//       <div className="flex flex-col font-gotham-bold text-center sm:text-left">
//         <h2 className="md:text-pt-40 text-pt-16 text-[#197d8e] mb-3">
//           Make It Yours
//         </h2>
//         <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2">
//           <span className="text-[#e85d3d] md:text-pt-20 lg:text-2xl">
//             Your Design Idea
//           </span>
//           <span className="text-[#e85d3d] hidden sm:inline md:text-pt-20 lg:text-2xl">
//             +
//           </span>
//           <span className="text-[#e85d3d] md:text-pt-20 lg:text-2xl">
//             Our Team
//           </span>
//         </div>
//         <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
//           <span className="text-[#e85d3d] md:text-pt-20 lg:text-2xl">=</span>
//           <span className="text-[#e85d3d] md:text-pt-20 lg:text-2xl">
//             Gifting Magic
//           </span>
//         </div>
//       </div>
//     </div>

//     {/* Right Section - Kept Exactly as Original */}
//     <div className="relative flex justify-end flex-[2]">
//       {" "}
//       <div className="absolute top-0 right-0 w-[300px] h-[180px] md:w-[536px] md:h-[230px]">
//         <Image
//           src="/Homepage/Backgrounds/Customisation Background1.svg"
//           alt="Customisation Background"
//           layout="fill"
//           objectFit="contain"
//           className="right-0"
//         />
//       </div>
//       <div className="relative z-10 p-10 rounded-l-full text-white md:w-[500px] md:pl-0 pl-[5rem] ">
//         <p className="font-gotham-book md:text-pt-20 ">
//           Reach out to us at{" "}
//           <a
//             href="mailto:sales@artnext.in"
//             className="font-gotham-light hover:underline text-black"
//           >
//             sales@artnext.in
//           </a>{" "}
//           {`& we'll bring your idea to life for you, down to the tiniest detail!`}
//         </p>
//       </div>
//     </div>
//   </div>
// );

// const OwnDesign = () => {
//   return (
//     <div className="w-full bg-white relative">
//       <div className="flex items-center justify-center h-full py-4 md:py-16 relative">
//         <Content />
//       </div>
//     </div>
//   );
// };

// export default OwnDesign;
