import React from "react";
import Image from "next/image";
import HomepageArch2 from "../../../public/Home/Background-3.svg";
import human from "../../../public/Home/human.png";
import pouch2 from "../../../public/Home/pouch-2.png";
import kaju from "../../../public/Home/cashew.png";
import almonds from "../../../public/Home/almonds.png";
import pista from "../../../public/Home/pista.png";

const VersatileGifting = () => {
  return (
    <div className="flex flex-col md:flex-row items-center relative z-10">
      <div className="w-full md:w-1/2">
        <div className="absolute left-[-40px] top-0 ml-auto h-full w-auto hidden md:block">
          <Image
            src={HomepageArch2}
            alt="Decorative Arch"
            layout="intrinsic"
            height={1000}
            width={1000}
            className=""
          />
        </div>
        <div className="items-center mt-[10rem] md:ml-[2rem] ">
          <h2 className="text-5xl md:text-7xl font-Mochiy  text-white md:relative md:top-[-9rem]">
            Versatile
          </h2>
          <h2 className="text-5xl md:text-7xl font-Mochiy text-white md:relative md:top-[-9rem] mb-6">
            Gifting
          </h2>
          <p className="text-xl md:text-3xl mb-8 max-w-xl md:top-[-9rem] md:relative text-white">
            Perfect Custom Pouches for gifting Chocolates, Coffee Beans, Dry
            Fruits and more
          </p>
        </div>
        <div className="flex items-center md:absolute">
          <div className="relative ml-4 md:ml-20 md:bottom-[10rem]">
            <Image
              src={human}
              alt="Human"
              layout="intrinsic"
              height={200}
              width={200}
              objectFit="contain"
              className="md:h-[400px] md:w-[400px]"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
        <div className="absolute top-24 right-[10rem] hidden md:flex space-x-20">
          <div className="w-28 h-28 bg-[#bae6fd] rounded-full">
            <Image
              className="ml-1 h-30 w-40"
              src={kaju}
              alt="Small Pouch"
              width={100}
              height={100}
            />
          </div>
          <div className="w-28 h-28 bg-[#bae6fd] rounded-full">
            <Image
              className=""
              src={almonds}
              alt="Small Pouch"
              width={100}
              height={100}
            />
          </div>
          <div className="w-28 h-28 bg-[#bae6fd] rounded-full">
            <Image
              className="mt-2 ml-1"
              src={pista}
              alt="Small Pouch"
              width={100}
              height={100}
            />
          </div>
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
  );
};

export default VersatileGifting;
