import React from "react";
import Celebration from "./Celebration";
import VersatileGifting from "./VersatileGifting";

export const VersatileAndCelebration = () => {
  return (
    <>
      <VersatileGifting />
      <div
        style={{
          backgroundImage: "url('/Homepage/Backgrounds/Background 3.svg')",
          backgroundSize: "100% 110%", // Ensures the full image is shown, fitting within the container
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents repeating of the image
          // Ensures the section takes at least full viewport height
          // Ensures the background spans the full width
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Centers content vertically
          alignItems: "center", // Centers content horizontally
        }}
        className="pt-[15rem] "
      >
        <Celebration />
      </div>
    </>
  );
};
