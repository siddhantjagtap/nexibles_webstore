import React from "react";
import Image from "next/image";
import BirdIllustration from "../../../public/Home/Bird-Illustration.svg";
import DiwaliImg from "../../../public/Home/pouch-3.png";
import BirthdayImg from "../../../public/Home/pouch-3.png";
import WeddingImg from "../../../public/Home/pouch-3.png";
import FindCelebrationImg from "../../../public/Home/pouch-3.png";
import DiwaliIcon from "../../../public/Home/pouch-3.png";
import BirthdayIcon from "../../../public/Home/pouch-3.png";
import WeddingIcon from "../../../public/Home/pouch-3.png";
import CelebrationIcon from "../../../public/Home/pouch-3.png";

const celebrationCards = [
  { name: "Diwali", image: DiwaliImg, icon: DiwaliIcon },
  { name: "Birthday", image: BirthdayImg, icon: BirthdayIcon },
  { name: "Wedding", image: WeddingImg, icon: WeddingIcon },
  {
    name: "Find your Celebration",
    image: FindCelebrationImg,
    icon: CelebrationIcon,
  },
];

export default function Celebration() {
  return (
    <div className="text-center relative z-10 pb-16 bg-no-repeat mt-44">
      <div className="flex items-center justify-center mb-12">
        <h3 className="text-4xl md:text-5xl font-bold text-[#0f1729] mt-20 ml-[10rem]">
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

      <div className="flex flex-wrap md:flex-nowrap justify-center md:space-x-4">
        {celebrationCards.map((card, index) => (
          <div
            key={index}
            className="w-full md:w-64 flex flex-col mb-8 md:mb-0"
          >
            <div
              className="bg-[#d88473] py-[3rem] px-2 text-[#fafafa] font-bold text-2xl md:text-3xl rounded-t-3xl flex items-center justify-center relative overflow-hidden"
              style={{ height: "150px" }}
            >
              <Image
                src={card.icon}
                alt={`${card.name} Icon`}
                layout="fill"
                objectFit="cover"
                className="opacity-20"
              />
              <span className="relative z-10">{card.name}</span>
            </div>
            <div className="flex-grow bg-white py-[5rem] flex items-center justify-center p-4">
              <Image
                src={card.image}
                alt={card.name}
                width={260}
                height={260}
                objectFit="contain"
              />
            </div>
            <div className="bg-white pb-[1rem] rounded-b-3xl">
              {/* <button className="bg-[#ffda40] text-[#464087] py-1 px-16 font-bold text-2xl md:text-3xl rounded-full mt-4">
                Explore
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
