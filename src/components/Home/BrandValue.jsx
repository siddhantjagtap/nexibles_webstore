import React from "react";
import Image from "next/image";
import BirdIllustration from "../../../public/Home/Bird-Illustration.svg";

const BrandValues = () => {
  const values = [
    {
      icon: "/Homepage/Brand_icons/Brand Value 5.svg",
      title: "Lowest MOQ",
    },
    {
      icon: "/Homepage/Brand_icons/Brand Value 4.svg",
      title: "Reusability",
    },
    {
      icon: "/Homepage/Brand_icons/Brand Value 3.svg",
      title: "Customisation",
    },
    {
      icon: "/Homepage/Brand_icons/Brand Value 2.svg",
      title: "Quality",
    },
    {
      icon: "/Homepage/Brand_icons/Brand Value 1.svg",
      title: "Affordability",
    },
  ];

  return (
    <>
      <div className="relative">
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 z-10 ml-[-10rem]">
          <Image
            src={BirdIllustration}
            alt="Bird Illustration"
            width={140}
            height={140}
            className="bird-illustration"
          />
        </div>
      </div>

      <div className="relative pb-12 overflow-hidden mt-12 z-0 min-h-[300px] lg:min-h-[380px]">
        <Image
          src="/Homepage/Brand_icons/Brand Values Bakground.svg"
          alt="Background"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="flex items-center justify-center mb-12">
          <div>
          <h2 className="text-white font-gotham-bold md:text-pt-36 mt-12">
            Brand Values
          </h2>
          <h2 className="text-white font-gotham-bold md:text-pt-20 mt-2">
          The Nexigifting Advantage 
          </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center text-white mt-4">
              <Image
                src={value.icon}
                alt={`${value.title} Icon`}
                width={85}
                height={85}
                className="mb-4"
              />
              <p className="font-gotham-bold md:text-pt-20">{value.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BrandValues;
