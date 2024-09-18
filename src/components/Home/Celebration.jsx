import React from "react";
import Image from "next/image";
import BirdIllustration from "../../../public/Home/Bird-Illustration.svg";
import TestinomalImg from "../../../public/Home/TestinomalImg.png";

const celebrationCards = [
  { name: "Diwali", image: TestinomalImg },
  { name: "Birthday", image: TestinomalImg },
  { name: "Wedding", image: TestinomalImg },
  { name: "Find your Celebration", image: TestinomalImg },
];

export default function Celebration() {
  return (
    <div
      className="text-center relative z-10 pb-16 bg-no-repeat mt-44"
      // style={{
      //   backgroundImage: "url('/Home/Background-4.svg')",
      //   backgroundSize: "100% 100%",
      // }}
    >
      <div className="flex items-center justify-center mb-12">
        <h3 className="text-3xl md:text-6xl font-bold text-[#0f1729] mt-20">
          Celebrations
          </h3>
       <Image
          src={BirdIllustration}
          alt="Bird Illustration"
          width={300}
          height={300}
          className="inline-block "
        />
      </div>
      {/* <h3 className="text-3xl md:text-6xl font-bold text-[#0f1729] mt-10">
        Celebrations
        <Image
          src={BirdIllustration}
          alt="Bird Illustration"
          width={300}
          height={300}
          className="inline-block ml-4"
        />
      </h3> */}

      <div className="flex flex-wrap md:flex-nowrap justify-center md:space-x-8">
        {celebrationCards.map((card, index) => (
          <div
            key={index}
            className="w-full md:w-64 flex flex-col mb-8 md:mb-0"
          >
            <div className="bg-[#362c60] py-[4rem] px-4 text-[#ffda40] font-bold text-xl rounded-t-3xl">
              {card.name}
            </div>
            <div className="flex-grow bg-white py-[6rem] flex items-center justify-center p-4">
              <Image
                src={card.image}
                alt={card.name}
                width={260}
                height={260}
                objectFit="contain"
              />
            </div>
            <div className="bg-white pb-[1rem] rounded-b-3xl">
              <button className="bg-[#ffda40] text-[#464087] py-1 px-16 font-bold text-2xl rounded-full mt-4">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
