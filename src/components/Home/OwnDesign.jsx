import React from "react";
import Image from "next/image";

// Content Component
const Content = () => (
  <div className="flex flex-col items-center justify-center md:flex-row md:items-start">
    <div className="flex-shrink-0 mb-8 md:mb-12">
      <Image
        src="/Home/Want your own design illustration.svg"
        alt="Custom Design Illustration"
        width={200}
        height={180}
        layout="intrinsic"
        className="md:w-[280px] md:h-[250px]"
      />
    </div>
    <div className="flex flex-col items-center text-center md:items-start md:text-left md:mt-4">
      <h1 className="text-2xl font-bold text-[#197d8e] md:text-4xl lg:text-5xl md:mb-6 md:mr-[8rem]">
        Want your own design?
      </h1>
      <div className="text-white text-base md:text-lg lg:text-2xl md:mr-[8rem] md:ml-4 md:mt-6">
        Not finding what you want exactly?
        <br />
        Reach out to us at{" "}
        <a
          href="mailto:sales@artnext.in"
          className="font-semibold text-[#0f1729]"
        >
          sales@artnext.in
        </a>
        <br />
        and our designers will customise
        <br />
        the pouch as per your specific needs.
      </div>
    </div>
  </div>
);

// Main Component
const OwnDesign = () => {
  return (
    <div className="relative w-full h-[90vh] md:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Home/Background 4.svg"
        alt="Curved Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full p-4 md:p-0">
        <Content />
      </div>
    </div>
  );
};

export default OwnDesign;





// import React from "react";
// import Image from "next/image";

// // Content Component
// const Content = () => (
//   <div className="flex flex-col items-center justify-center md:flex-row md:items-start">
//     <div className="flex-shrink-0 mb-8 md:mb-36">
//       <Image
//         src="/Home/Want your own design illustration.svg"
//         alt="Custom Design Illustration"
//         width={200}
//         height={180}
//         layout="intrinsic"
//         className="md:w-[280px] md:h-[250px]"
//       />
//     </div>
//     <div className="flex flex-col items-center text-center md:items-start md:text-left md:mt-20">
//       <h1 className="text-2xl font-bold text-[#197d8e] md:text-4xl lg:text-5xl md:mb-16 md:mr-[12rem]">
//         Want your own design?
//       </h1>
//       <div className="text-white text-base md:text-lg lg:text-2xl md:mr-[15rem] md:ml-8">
//         Not finding what you want exactly?
//         <br />
//         Reach out to us at{" "}
//         <a
//           href="mailto:sales@artnext.in"
//           className="font-semibold text-[#0f1729]"
//         >
//           sales@artnext.in
//         </a>
//         <br />
//         and our designers will customise
//         <br />
//         the pouch as per your specific needs.
//       </div>
//     </div>
//   </div>
// );

// // Main Component
// const OwnDesign = () => {
//   return (
//     <div className="relative w-full min-h-screen overflow-hidden">
//       {/* Background Image */}
//       <Image
//         src="/Home/Background 4.svg"
//         alt="Curved Background"
//         layout="fill"
//         objectFit="cover"
//         quality={100}
//       />

//       {/* Main Content */}
//       <div className="relative z-10 flex items-center justify-center min-h-screen p-4 md:p-0">
//         <Content />
//       </div>
//     </div>
//   );
// };

// export default OwnDesign;

//old
// import React from "react";
// import Image from "next/image";

// // Content Component
// const Content = () => (
//   <div className="flex items-center justify-center">
//     <div className="flex-shrink-0 mb-36">
//       {" "}
//       {/* Space between the SVG and text */}
//       <Image
//         src="/Home/Want your own design illustration.svg"
//         alt="Custom Design Illustration"
//         width={280} // Smaller width
//         height={250} // Smaller height
//         layout="intrinsic"
//       />
//     </div>
//     <div className="flex flex-col items-center text-center">
//       <h1 className="text-4xl md:text-5xl font-bold text-[#197d8e] mb-16 mr-[12rem]">
//         Want your own design?
//       </h1>
//       <div className="text-white text-lg md:text-2xl mr-[15rem]">
//         Not finding what you want exactly?
//         <br />
//         Reach out to us at{" "}
//         <a
//           href="mailto:sales@artnext.in"
//           className="font-semibold text-[#0f1729]"
//         >
//           sales@artnext.in
//         </a>
//         <br />
//         and our designers will customise
//         <br />
//         the pouch as per your specific needs.
//       </div>
//     </div>
//   </div>
// );

// // Main Component
// const OwnDesign = () => {
//   return (
//     <div className="relative w-full min-h-screen overflow-hidden">
//       {/* Background Image */}
//       <Image
//         src="/Home/Background 4.svg"
//         alt="Curved Background"
//         layout="fill"
//         objectFit="cover"
//         quality={100}
//       />

//       {/* Main Content */}
//       <div className="relative z-10 flex items-center justify-center min-h-screen">
//         <Content />
//       </div>
//     </div>
//   );
// };

// export default OwnDesign;
