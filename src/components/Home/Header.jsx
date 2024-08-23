'use client';
import Image from 'next/image';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 8);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/Home/nexibles-1.png')" }}>
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mt-8 md:mt-0 relative">
            <div className="overflow-hidden w-full h-[600px] relative">
              {[...Array(8)].map((_, index) => (
                <Image
                  key={index}
                  src="/Home/pouch-1.png"
                  alt={`Diwali Pouch ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className={`absolute transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="  text-white">
            <h1 className="text-5xl font-bold mb-4">NEXIGIFTING</h1>
            <h2 className="text-3xl mb-4">India's First Customized Stand-Up Pouch Gifting Platform</h2>
            <p className="text-xl mb-6">Start with just 50 pouches & scale up to 500 for all your gifting needs!</p>
            <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-full text-xl hover:bg-yellow-300 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          {[...Array(8)].map((_, i) => (
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
    </div>
  );
}