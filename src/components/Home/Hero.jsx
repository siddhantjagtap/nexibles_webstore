"use client";
import Image from "next/image";
import Butterflies2 from "../../../public/Home/Butterflies-2.svg";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/Home/pouch-6.png",
    "/Home/pouch-1.png",
    "/Home/pouch-2.png",
    "/Home/pouch-3.png",
    "/Home/pouch-4.png",
  ];

  // Refs for touch tracking
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Touch event handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const diffX = touchStartX.current - touchEndX.current;
      
      // Swipe threshold (adjust as needed)
      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          // Swiped left, go to next slide
          setCurrentSlide((prev) => (prev + 1) % images.length);
        } else {
          // Swiped right, go to previous slide
          setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
        }
      }
      
      // Reset touch coordinates
      touchStartX.current = null;
      touchEndX.current = null;
    }
  };

  return (
    <div 
      className="w-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* White circular container */}
      <div className="w-full bg-[#197d8e] sm:h-auto">
        <div className="relative w-full bg-white rounded-b-[10%] sm:rounded-b-[20%] md:rounded-b-[20rem] overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto py-8 sm:py-12 md:py-16 lg:py-20">
              {/* Image Section */}
              <div className="relative w-full md:w-[40%] mt-20 md:mt- h-[35vh] md:h-[57vh] mb-4 md:mb-0 md:ml-8 mt-[rem]">
                <div className="overflow-hidden w-full md:h-full h-[78%] md:mt-0 mt-8 relative">
                  {images.map((src, index) => (
                    <Image
                      key={index}
                      src={src}
                      alt={`Diwali Pouch ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                      className={`absolute object-contain transition-opacity duration-500 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex justify-center mt-4">
                  {images.map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mx-1 cursor-pointer hidden sm:block ${
                        i === currentSlide ? "bg-[#d88473]" : "bg-gray-400"
                      }`}
                      onClick={() => setCurrentSlide(i)}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full md:w-[60%] text-center md:text-left px-4">
                <div className="flex justify-center md:justify-start items-center flex-wrap">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0f1729] font-gotham-rounded-bold mr-2">
                    NEXI
                  </h1>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#db5c3c] font-gotham-rounded-bold mr-2">
                    GIFTING
                  </h1>
                  <Image
                    src={Butterflies2}
                    alt="butterflies"
                    width={64}
                    height={64}
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mt-[-0.5rem] sm:mt-[-1rem] md:mt-[-2rem]"
                  />
                </div>

                <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl font-gotham-medium mt-2 sm:mt-4">
                  {`India's First Personalised Stand-Up Pouches`}
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-gotham-light mb-4 text-gray-500 mt-2">
                  Personalise, Pack, Present - The Future of Gifting
                </p>
                <Link
                  href="/occasions"
                  className="inline-block bg-[#197d8e] text-white font-gotham-rounded-bold py-2 px-4 sm:px-6 rounded-full text-sm sm:text-base md:text-lg transition duration-300 hover:bg-[#156b7a]"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}