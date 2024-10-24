import React from "react";
import Image from "next/image";

// Content Component
const Content = () => (
  <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-center max-w-7xl mx-auto w-full px-4">
    {/* Left Section */}
    <div className="flex items-center gap-6 md:w-1/2">
      <div className="flex-shrink-0">
        <Image
          src="/Home/Want your own design illustration.svg"
          alt="Custom Design Illustration"
          width={200}
          height={180}
          className="w-32 h-32 md:w-48 md:h-48"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl md:text-4xl font-bold text-[#197d8e] mb-3">
          Make It Yours
        </h2>
        <div className="flex items-center gap-2 text-base md:text-lg text-gray-700">
          <span>Your Design Idea</span>
          <span className="text-[#e85d3d]">+</span>
          <span>Our Team</span>
        </div>
        <div className="flex items-center gap-2 text-base md:text-lg">
          <span>=</span>
          <span className="text-[#e85d3d]">Gifting Magic</span>
        </div>
      </div>
    </div>

    {/* Right Section with SVG Background */}
    <div className="relative md:w-1/2">
      {/* SVG Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Homepage/Backgrounds/Customisation Background.svg"
          alt="Customisation Background"
          layout="fill"
          objectFit="contain"
          className="h-22 w-22"
        />
      </div>

      {/* Colored Overlay with Content */}
      <div className="relative z-10 text-white p-8 rounded-l-full">
        <p className="text-lg md:text-xl leading-relaxed">
          Reach out to us at{" "}
          <a
            href="mailto:sales@artnext.in"
            className="font-semibold hover:underline"
          >
            sales@artnext.in
          </a>{" "}
          & we'll bring your idea to life for you, down to the tiniest detail!
        </p>
      </div>
    </div>
  </div>
);

// Main Component
const OwnDesign = () => {
  return (
    <div className="w-full min-h-[90vh] md:min-h-[80vh] bg-white">
      {/* Main Content */}
      <div className="flex items-center justify-center h-full py-8 md:py-16">
        <Content />
      </div>
    </div>
  );
};

export default OwnDesign;
//old designing

// import React from "react";
// import Image from "next/image";

// // Content Component
// const Content = () => (
//   <div className="flex flex-col items-center justify-center md:flex-row md:items-start">
//     <div className="flex-shrink-0 mb-8 md:mb-12">
//       <Image
//         src="/Home/Want your own design illustration.svg"
//         alt="Custom Design Illustration"
//         width={200}
//         height={180}
//         layout="intrinsic"
//         className="md:w-[280px] md:h-[250px]"
//       />
//     </div>
//     <div className="flex flex-col items-center text-center md:items-start md:text-left md:mt-4">
//       <h1 className="text-2xl font-bold text-[#197d8e] md:text-4xl lg:text-5xl md:mb-6 md:mr-[8rem]">
//         Want your own design?
//       </h1>
//       <div className="text-white text-base md:text-lg lg:text-2xl md:mr-[8rem] md:ml-4 md:mt-12 md:mb-0 mb-2">
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
//     <div className="relative w-full h-[90vh] md:h-[80vh] overflow-hidden">
//       {/* Background Image */}
//       <Image
//         src="/Home/Background 4.svg"
//         alt="Curved Background"
//         layout="fill"
//         objectFit="cover"
//         quality={100}
//       />

//       {/* Main Content */}
//       <div className="relative z-10 flex items-center justify-center h-full p-4 md:p-0">
//         <Content />
//       </div>
//     </div>
//   );
// };

// export default OwnDesign;
