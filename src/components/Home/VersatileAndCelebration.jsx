import React, { useState, useEffect } from "react";
import Celebration from "./Celebration";
import VersatileGifting from "./VersatileGifting";
// import BrandValues from "./BrandValue";

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
    </div>
  );
};

export default VersatileAndCelebration;



