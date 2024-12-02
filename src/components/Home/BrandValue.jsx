
import React from "react";
import Image from "next/image";
import BirdIllustration from "../../../public/Home/Bird-Illustration.svg";
import { X } from "lucide-react";

const BrandValues = () => {
  const values = [
    {
      icon: "/Homepage/Brand_icons/Brand Value 5.svg",
      title: "Lowest MOQ",
      content:
        "Starting at just 50 pouches, we offer the flexibility you desire. Whether it's for a small gathering, a personal event or a big brand launch, there's no large commitments, just pouches that fit your scale.",
    },
    {
      icon: "/Homepage/Brand_icons/Brand Value 4.svg",
      title: "Reusability",
      content:
        "Offering eco-friendly & reusable options, we cater to an increasingly environmentally conscious market.",
    },
    {
      icon: "/Homepage/Brand_icons/Brand Value 3.svg",
      title: "Customisation",
      content:
        "At NexiGifting, customisation is a two-way street. Every detail can be tailored to your vision to ensure a very unique experience.",
    },
    {
      icon: "/Homepage/Brand_icons/Brand Value 2.svg",
      title: "Quality",
      content:
        "Our digital printing services & team ensure that quality is never compromised, no matter the order.",
    },
    {
      icon: "/Homepage/Brand_icons/Brand Value 1.svg",
      title: "Affordability",
      content:
        "Digitally printed, low-MOQ pouches offer a cost-effective solution that help us deliver high-quality customisation at smaller quantities without the expense of traditional methods.",
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <div className="relative">
        {/* <div className="absolute -top-1 left-1/4 transform -translate-x-1/2 z-10 ml-[-10rem]">
          <Image
            src={BirdIllustration}
            alt="Bird Illustration"
            className="bird-illustration ml-[16rem] md:ml-[20rem] md:w-[10rem] md:h-[8rem] w-[6rem] h-[8rem]"
          />
        </div> */}
      </div>

      {/* <div className="relative pb-12 overflow-hidden mt-12 z-0 min-h-[300px] lg:min-h-[480px]">
        <Image
          src="/Homepage/Brand_icons/Brand Values Bakground.svg"
          alt="Background"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="flex items-center justify-center mb-8 px-4 md:px-0">
          <div>
            <h2 className="text-white font-gotham-bold text-pt-18 md:text-pt-30 max-w-xl mt-12 md:ml-0 text-center md:text-left">
              The Nexigifting Advantage
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto px-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-white mt-4 cursor-pointer"
              onClick={() => handleClick(index)}
            >
              <Image
                src={value.icon}
                alt={`${value.title} Icon`}
                width={85}
                height={85}
                className="mb-4 w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] md:w-[85px] md:h-[85px]"
              />
              <p className="font-gotham-bold text-center text-pt-14 md:text-pt-18">
                {value.title}
              </p>
            </div>
          ))}
        </div>
      </div> */}
      <div className="relative pb-12 overflow-hidden md:mt-12 z-0 min-h-[300px] lg:min-h-[480px] bg-[#197d8e] sm:bg-transparent">
        {/* Background Image - Hidden on Small Screens */}
        <div className="hidden sm:block">
          <Image
            src="/Homepage/Brand_icons/Brand Values Bakground.svg"
            alt="Background"
            fill
            className="object-cover object-center -z-10"
            priority
          />
        </div>

        <div className="flex items-center justify-center mb-8 px-4 md:px-0">
          <div>
            <h2 className="text-white font-gotham-bold text-pt-18 md:text-pt-30 max-w-xl mt-12 md:ml-0 text-center md:text-left">
              The Nexigifting Advantage
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto px-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-white mt-4 cursor-pointer"
              onClick={() => handleClick(index)}
            >
              <Image
                src={value.icon}
                alt={`${value.title} Icon`}
                width={85}
                height={85}
                className="mb-4 w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] md:w-[85px] md:h-[85px]"
              />
              <p className="font-gotham-bold text-center text-pt-14 md:text-pt-18">
                {value.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
          <div className="bg-[#db5c3c] p-6 md:p-8 rounded-md shadow-md max-w-lg md:max-w-2xl w-full relative">
            <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2">
              <Image
                src={values[activeIndex].icon}
                alt={`${values[activeIndex].title} Icon`}
                width={50}
                height={50}
                className="mt-12"
              />
            </div>
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-700"
              onClick={() => setActiveIndex(null)}
            >
              <X size={24} />
            </button>
            <div className="flex items-center mb-4 mt-8 text-white text-center">
              <h3 className="text-xl md:text-2xl font-gotham-book md:mt-0 mt-4">
                {values[activeIndex].title}
              </h3>
            </div>
            <p className="text-white text-sm md:text-base ">
              {values[activeIndex].content}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default BrandValues;

