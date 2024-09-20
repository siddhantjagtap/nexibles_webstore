import React from "react";
import Celebration from "./Celebration";
import VersatileGifting from "./VersatileGifting";

export const VersatileAndCelebration = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/Homepage/Backgrounds/Background 3.svg')",
          backgroundSize: "100% auto", // Ensures the image covers the width, adjusts height automatically
          backgroundPosition: "center 100%", // Moves the image down by 20%
          backgroundRepeat: "no-repeat", // Prevents repeating of the image
          minHeight: "100vh", // Ensures the section takes at least full viewport height
          width: "98.6vw", // Ensures the background spans the full width of the viewport
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Centers content vertically
          alignItems: "center", // Centers content horizontally
        }}
      >
        <VersatileGifting />
        <Celebration />
      </div>
    </>
  );
};
