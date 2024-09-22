import React from "react";
import Image from "next/image";

// Content Component
const Content = () => (
  <div className="flex items-center justify-center">
    <div className="flex-shrink-0 mb-36">
      {" "}
      {/* Space between the SVG and text */}
      <Image
        src="/Home/Want your own design illustration.svg"
        alt="Custom Design Illustration"
        width={280} // Smaller width
        height={250} // Smaller height
        layout="intrinsic"
      />
    </div>
    <div className="flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-[#197d8e] mb-16 mr-[12rem]">
        Want your own design?
      </h1>
      <div className="text-white text-lg md:text-2xl mr-[15rem]">
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
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Home/Background 4.svg"
        alt="Curved Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
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
//   <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-4 py-12">
//     <div className="md:w-1/4 mb-8 md:mb-0 mb-28">
//       <Image
//         src="/Home/Want your own design illustration.svg"
//         alt="Custom Design Illustration"
//         width={100}
//         height={100}
//         layout="responsive"
//       />
//     </div>
//     <div className="md:w-2/3 md:pl-12 text-left">
//       <h1 className="text-4xl md:text-5xl font-bold text-[#197d8e] mb-28">
//         Want your own design?
//       </h1>
//       <p className="text-white text-lg md:text-xl">
//         Not finding what you want exactly?
//         <br />
//         Reach out to us at{" "}
//         <a href="mailto:sales@artnext.in" className="font-semibold">
//           sales@artnext.in
//         </a>
//         <br />
//         and our designers will customise
//         <br />
//         the pouch as per your specific needs.
//       </p>
//     </div>
//   </div>
// );

// // Main Component
// const OwnDesign = () => {
//   return (
//     <div className="relative w-full min-h-screen overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <Image
//           src="/Home/Background 4.svg"
//           alt="Curved Background"
//           layout="fill"
//           objectFit="cover"
//           quality={100}
//         />
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex items-center justify-center min-h-screen">
//         <Content />
//       </div>
//     </div>
//   );
// };

// export default OwnDesign;
