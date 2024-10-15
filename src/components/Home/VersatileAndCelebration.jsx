import React from "react";
import Celebration from "./Celebration";
import VersatileGifting from "./VersatileGifting";

export const VersatileAndCelebration = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/Homepage/Backgrounds/Background 3.svg')",
          backgroundSize: "100% auto",
          backgroundPosition: "center 100%",
          backgroundRepeat: "no-repeat",
        
          minHeight: "100vh",
          width: "98.6vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          "@media (max-width: 768px)": {
            backgroundSize: "100% 190%", // Increases the height of the background image on mobile
          },
        }}
      >
        <VersatileGifting />
        <Celebration />
      </div>
    </>
  );
};

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
