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
          backgroundSize: "100% 100%", // Ensures the full image is shown, fitting within the container
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents repeating of the image
          minHeight: "100vh", // Ensures the section takes at least full viewport height
          width: "100%", // Ensures the background spans the full width
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Centers content vertically
          alignItems: "center", // Centers content horizontally
        }}
      >
        <Celebration />
      </div>
    </>
  );
};
