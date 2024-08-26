import React from "react";
import Image from "next/image";
import pouch1 from "../../../public/Home/pouch-1.png";
import pouch2 from "../../../public/Home/pouch-2.png";
import pouch3 from "../../../public/Home/pouch-3.png";
import pouch4 from "../../../public/Home/pouch-4.png";
import human from "../../../public/Home/human.png";
import BirdIllustration from '../../../public/Home/Bird-Illustration.svg';
import Butterflies2 from "../../../public/Home/Butterflies-2.svg";
import HomepageArch3 from "../../../public/Home/Homepage-Arch-3.svg";
import HomepageArch2 from "../../../public/Home/Homepage-Arch-2.svg";
import FlowerIllustration from "../../../public/Home/Flower-Illustration.svg";
import Butterflies4 from "../../../public/Home/Butterflies-4.svg";
import Butterflies3 from "../../../public/Home/Butterflies-3.svg";
import Butterflies5 from "../../../public/Home/Butterflies-5.svg";
import Butterflies6 from "../../../public/Home/Butterflies-6.svg";
import TestinomalImg from "../../../public/Home/TestinomalImg.png";

export default function Mid() {
  const celebrations = [
    { name: "Diwali", icon: "🪔" },
    { name: "Birthday", icon: "🎂" },
    { name: "Wedding", icon: "💐" },
    { name: "Graduation", icon: "🎓" },
  ];

  const pouches = [
    { name: "Pouch 1", image: pouch1 },
    { name: "Pouch 2", image: pouch2 },
    { name: "Pouch 3", image: pouch3 },
    { name: "Pouch 4", image: pouch4 },
  ];

  const celebrationCards = [
    { name: "Diwali", image: TestinomalImg },
    { name: "Birthday", image: TestinomalImg },
    { name: "Wedding", image: TestinomalImg },
    { name: "Find your Celebration", image: TestinomalImg },
  ];

  return (
    <div className="bg-[#464087] text-white pt-2  relative">
      {/* Add Homepage-Arch-3 here */}
      <div className="absolute end-0 h-full w-auto">
        <Image
          src={HomepageArch3}
          alt="Decorative Arch"
          layout="intrinsic"
          height={650} // match height of the uploaded image
          width={650} // match width of the uploaded image
          className=""
        />
      </div>

      <h2 className="text-6xl font-bold text-center text-[#ffda40] mt-8 relative z-10">
        <Image
          src={Butterflies2}
          alt="butterflies"
          width={128}
          height={128}
          className="inline-block"
        />
        Celebrate With Personalization
      </h2>

      <p className="text-center mb-12 text-3xl max-w-6xl mx-auto relative z-10">
        Make your moments unforgettable with uniquely designed stand-up pouches
        Crafted just for You!
      </p>

      {/* Celebration Icons */}
      <div className="flex justify-center space-x-4 mb-16 relative z-10">
        <Image
          src={Butterflies4}
          alt="butterflies"
          width={50}
          height={50}
          className="inline-block"
        />
        {celebrations.map((celebration, index) => (
          <div key={index} className="text-center">
            <div className="w-64 h-64 bg-[#f7eee5] rounded-full flex items-center justify-center mb-2">
              <span className="text-8xl">{celebration.icon}</span>
            </div>
            <p className="text-3xl mt-4 font-bold text-[#ffda40]">
              {celebration.name}
            </p>
          </div>
        ))}
        <Image
          src={Butterflies3}
          alt="butterflies"
          width={50}
          height={50}
          className="inline-block"
        />
      </div>

      <h3 className="text-5xl font-bold text-center text-[#ffda40] relative z-10">
        <Image
          src={FlowerIllustration}
          alt="flower illustration"
          width={128}
          height={128}
          className="inline-block"
        />
        Popular Products
        <Image
          src={Butterflies2}
          alt="butterflies"
          width={128}
          height={128}
          className="inline-block mb-[2rem]"
        />
      </h3>

      {/* Pouches */}
      <div className="flex flex-wrap justify-center gap-8 mb-8 relative z-10">
        <Image
          src={Butterflies6}
          alt="butterflies"
          width={50}
          height={50}
          className="inline-block"
        />
        {pouches.map((pouch, index) => (
          <div key={index} className="w-[14.9rem] relative pt-4">
            <div className="bg-[#f7eee5] rounded-t-3xl rounded-b-[50%] h-[20rem] flex items-center justify-center">
              <div className="relative w-full h-full -mt-6">
                <Image
                  src={pouch.image}
                  alt={pouch.name}
                  layout="fill"
                  objectFit="contain"
                  className="scale-110 transition-transform duration-300 hover:-translate-y-16 hover:scale-115"
                />
              </div>
            </div>
            <button className="bg-[#ffda40] text-[#464087] px-6 py-1 rounded-full font-bold text-xl absolute bottom-[-4rem] left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              Customise
            </button>
          </div>
        ))}
         <Image
          src={Butterflies5}
          alt="butterflies"
          width={50}
          height={50}
          className="inline-block"
        />
      </div>

      {/* Versatile Gifting section */}
      <div className="flex items-center relative z-10">
        <div className="">
        <div className="absolute left-[0px] top-0 ml-auto h-full w-auto">
        <Image
          src={HomepageArch2}
          alt="Decorative Arch"
          layout="intrinsic"
          height={1000} // match height of the uploaded image
          width={1180} // match width of the uploaded image
          className=""
        />
      </div>
      <div className="items-center ml-[2rem]">
          <h2 className="text-8xl font-bold text-white relative top-[-9rem]">
            Versatile 
          </h2><h2 className="text-8xl font-bold text-white relative top-[-9rem] mb-6">
           Gifting
          </h2>
          <p className="text-3xl mb-8 max-w-xl top-[-9rem] relative">
            Perfect Custom Pouches for gifting Chocolates, Coffee Beans, Dry
            Fruits and more
          </p>
          </div>
          <div className="flex items-center absolute">
            <div className="relative ml-20 bottom-[10rem]">
              <Image
                src={human}
                alt="Human"
                layout="intrinsic"
                height={400}
                width={400}                
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 relative">
          <div className="absolute top-24 right-28 flex space-x-20">
            <div className="w-28 h-28 bg-white rounded-full"></div>
            <div className="w-28 h-28 bg-white rounded-full"></div>
            <div className="w-28 h-28 bg-white rounded-full"></div>
          </div>
          <Image
            src={pouch2}
            alt="Large Pouch"
            width={800}
            height={1000}
            objectFit="contain"
            className="ml-auto mt-[10rem]"
          />
        </div>
      </div>

   {/* Celebrations section */}
   <div className="text-center mt-[6rem] relative z-10 pb-16">
        <h3 className="text-5xl font-bold text-[#ffda40] mb-12">
          Celebrations     
          <Image
            src={BirdIllustration}
            alt="Bird Illustration"
            width={300}
            height={300}
            className="inline-block ml-4"
          />  
        </h3>

        <div className="flex justify-center space-x-8">
          {celebrationCards.map((card, index) => (
            <div key={index} className="w-64 flex flex-col">
              <div className="bg-[#362c60] py-[4rem] px-4 text-[#ffda40] font-bold text-2xl rounded-t-3xl">
                {card.name}
              </div>
              <div className="flex-grow bg-white py-[8rem] flex items-center justify-center p-4">
                <Image
                  src={card.image}
                  alt={card.name}
                  width={150}
                  height={150}
                  objectFit="contain"
                />
              </div>
              <button className="bg-[#ffda40] text-[#464087] w-full py-2 font-bold text-xl rounded-full mt-4">
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}