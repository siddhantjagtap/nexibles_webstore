import React from 'react';
import WhiteBackground from '../../../public/Celebrations_Page/White_Textured_Background.png';
import BlueBackground from '../../../public/Celebrations_Page/Blue_Wavy_Backgrond.svg';

export default function Celebrations() {
  return (
    <div className="relative w-screen h-[100vh] bg-[#197d8e]">
      {/* White Background (Top Part) */}
      <div className="absolute inset-x-0 top-0 h-2/3">
        <img 
          src={WhiteBackground.src} 
          alt="White Textured Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 pt-20 pb-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Celebrations</h1>
            <h2 className="text-2xl font-semibold text-orange-500 mb-6">Make Every Gift Unforgettable</h2>
            <p className="text-gray-600 text-sm">
              Explore our collection of custom stand-up pouches, perfect for adding a personal touch to any celebration. 
              Each pouch is uniquely designed to reflect your style and make your moments memorable. Whatever the 
              celebration, our bespoke pouches are crafted with care just for you. Explore our options and create a 
              one-of-a-kind experience for your loved ones!
            </p>
          </div>
        </div>
      </div>

      {/* Blue Wavy Background (Bottom Part) */}
      <div className="absolute inset-x-0 bottom-0 h-1/3">
        <img 
          src={BlueBackground.src} 
          alt="Blue Wavy Background" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
