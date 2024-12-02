import React from "react";
import Image from "next/image";
import HomepageArch2 from "../../../public/Home/Versatile Gifting Background.svg";

const VersatileGifting = () => {
  return (
    <div className="relative w-full overflow-hidden md:mt-10 ">
      {/* Container for the background and text */}
      <div className="relative flex items-center min-h-[192px] sm:min-h-[300px] md:min-h-[400px]">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-[363px] sm:w-[400px] md:w-[600px] lg:w-[900px] h-auto">
          <Image
            src={HomepageArch2}
            alt="Decorative Arch"
            layout="intrinsic"
            width={900}
            height={500}
            className="z-0"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-white px-2 w-full lg:w-auto flex flex-col items-start lg:items-start mt-[-3vh] md:mt-0 md:ml-2 mb-4 md:mb-0">
          <h2 className="font-gotham-rounded-bold text-lg sm:text-2xl md:text-4xl lg:text-6xl text-center lg:text-left md:mt-4 mt-8">
            Versatile & Sustainable
          </h2>
          <h2 className="font-gotham-rounded-bold text-lg sm:text-2xl md:text-4xl lg:text-6xl mt-1 md:mt-4 text-center lg:text-left">
            Gifting Solutions
          </h2>
          <p className="font-gotham-medium text-sm sm:text-lg md:text-xl lg:text-2xl mt-2 md:mt-4 lg:text-left max-w-2xl">
            <span className="block">From Treats to Treasures,</span>
            <span className="block">Sealed with Care</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VersatileGifting;









//final
// import React from "react";
// import Image from "next/image";
// import HomepageArch2 from "../../../public/Home/Versatile Gifting Background.svg";

// const VersatileGifting = () => {
//   return (
//     <div className="relative w-full overflow-hidden mt-10">
//       {/* Container for the background and text */}
//       <div className="relative flex min-h-[400px]">
//         {/* Background Image */}
//         <div className="relative w-[900px] h-auto">
//           <Image
//             src={HomepageArch2}
//             alt="Decorative Arch"
//             // width={900} // Keeps the image width fixed
//             height={500} // Adjust height proportionally
//             className="z-0"
//             priority
//           />
//         </div>
//         {/* Text Content */}
//         <div className="absolute z-10 text-white px-4 mt-28">
//           <h2 className="font-gotham-rounded-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
//             Versatile & Sustainable
//           </h2>
//           <h2 className="font-gotham-rounded-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl mt-2">
//             Gifting Solutions
//           </h2>
//           <p className="font-gotham-medium text-base sm:text-lg md:text-xl lg:text-2xl mt-4 max-w-2xl mx-auto">
//             <span className="block">From Treats to Treasures,</span>
//             <span className="block">Sealed with Care</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VersatileGifting;
