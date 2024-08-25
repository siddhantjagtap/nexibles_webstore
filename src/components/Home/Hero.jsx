'use client';
import Image from 'next/image';

import { useState, useEffect } from 'react';



export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ['/Home/pouch-1.png', '/Home/pouch-2.png', '/Home/pouch-3.png', '/Home/pouch-4.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/Home/Main-Banner-Background.png')" }}>
     
      <div className=" pt-4 ">
        <div className="flex  items-center">
          <div className="md:w-1/2 mt-8 md:mt-0 relative">
            <div className="overflow-hidden w-full h-[90vh] relative">
              {images.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Diwali Pouch ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className={`absolute transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-center ">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
                    i === currentSlide ? 'bg-white' : 'bg-gray-400'
                  }`}
                  onClick={() => setCurrentSlide(i)}
                ></div>
              ))}
            </div>
          </div>
          <div className="text-white">
            <h1 className="text-8xl  font-extrabold mb-4">NEXIGIFTING</h1>
            <h2 className="text-2xl font-bold ">India's First Customized Stand-Up Pouch Gifting Platform</h2>
            <p className="text-xl mb-6">Start with just 50 pouches & scale up to 500 for all your gifting needs!</p>
            <button className="bg-yellow-400 text-[#464087] font-bold py-2 px-8 rounded-full text-2xl hover:bg-yellow-300 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
