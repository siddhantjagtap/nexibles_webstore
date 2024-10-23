import React, { useState, useEffect } from "react";
import Celebration from "./Celebration";
import VersatileGifting from "./VersatileGifting";
import BrandValues from "./BrandValue";

export const VersatileAndCelebration = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div>
      <VersatileGifting />
      <div className="mt-[22rem]">
      <BrandValues />
      </div>
    </div>
  );
};

export default VersatileAndCelebration;





//without new changes..
// import React, { useState, useEffect } from "react";
// import Celebration from "./Celebration";
// import VersatileGifting from "./VersatileGifting";

// export const VersatileAndCelebration = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);

//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const containerStyle = {
//     backgroundImage: isMobile
//       ? "none"
//       : "url('/Homepage/Backgrounds/Background 3.svg')",
//     backgroundSize: "100% auto",
//     backgroundPosition: "center 100%",
//     backgroundRepeat: "no-repeat",
//     minHeight: "100vh",
//     width: "98.6vw",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//   };

//   return (
//     <div style={containerStyle}>
//       <VersatileGifting />
//       <Celebration />
//     </div>
//   );
// };

// export default VersatileAndCelebration;
// import React from "react";
// import Celebration from "./Celebration";
// import VersatileGifting from "./VersatileGifting";

// export const VersatileAndCelebration = () => {
//   return (
//     <>
//       <div
//         clas
//         style={{
//           backgroundImage: "url('/Homepage/Backgrounds/Background 3.svg')",
//           backgroundSize: "100% auto", // Ensures the image covers the width, adjusts height automatically
//           backgroundPosition: "center 100%", // Moves the image down by 20%
//           backgroundRepeat: "no-repeat", // Prevents repeating of the image
//           minHeight: "100vh", // Ensures the section takes at least full viewport height
//           width: "98.6vw", // Ensures the background spans the full width of the viewport
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center", // Centers content vertically
//           alignItems: "center", // Centers content horizontally
//         }}
//       >
//         <VersatileGifting />
//         <Celebration />
//       </div>
//     </>
//   );
// };
