import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import pouch1 from "../../../public/Home/pouch-1.png";
import pouch2 from "../../../public/Home/pouch-2.png";
import pouch3 from "../../../public/Home/pouch-3.png";
import pouch4 from "../../../public/Home/pouch-4.png";
import human from "../../../public/Home/human.png";
import BirdIllustration from '../../../public/Home/Bird-Illustration.svg';
import Butterflies2 from "../../../public/Home/Butterflies-2.svg";
import HomepageArch3 from "../../../public/Home/Homepage-Arch-3.svg";
import HomepageArch2 from "../../../public/Home/Background-3.svg";
import FlowerIllustration from "../../../public/Home/Flower-Illustration.svg";
import Butterflies4 from "../../../public/Home/Butterflies-4.svg";
import Butterflies3 from "../../../public/Home/Butterflies-3.svg";
import Butterflies5 from "../../../public/Home/Butterflies-5.svg";
import Butterflies6 from "../../../public/Home/Butterflies-6.svg";
import TestinomalImg from "../../../public/Home/TestinomalImg.png";
import kaju from "../../../public/Home/cashew.png";
import almonds from "../../../public/Home/almonds.png";
import pista from "../../../public/Home/pista.png";
import Diwali_Icon from "../../../public/Homepage/Category Icons/Diwali_Icon.svg";
import Anniversary from "../../../public/Homepage/Category Icons/Anniversary_Icon.svg";
import Baby_Shower_Icon from "../../../public/Homepage/Category Icons/Baby_Shower_Icon.svg";
import Birthday from "../../../public/Homepage/Category Icons/Birthday_Icon.svg";
import Engagement from "../../../public/Homepage/Category Icons/Engagement_Icon.svg";
import Graduation from "../../../public/Homepage/Category Icons/Graduation_Icon.svg";
import New_Beginnings_Icon from "../../../public/Homepage/Category Icons/New_Beginnings_Icon.png";
import Pet_Birthday_Icon from "../../../public/Homepage/Category Icons/Pet_Birthday_Icon.svg";
import Wedding_Icon from "../../../public/Homepage/Category Icons/Wedding_Icon.svg";

export default function Mid() {
  const personalizationSwiperRef = useRef(null);
  const productsSwiperRef = useRef(null);

  const handlePersonalizationPrev = () => {
    if (
      personalizationSwiperRef.current &&
      personalizationSwiperRef.current.swiper
    ) {
      personalizationSwiperRef.current.swiper.slidePrev();
    }
  };

  const handlePersonalizationNext = () => {
    if (
      personalizationSwiperRef.current &&
      personalizationSwiperRef.current.swiper
    ) {
      personalizationSwiperRef.current.swiper.slideNext();
    }
  };

  const handleProductsPrev = () => {
    if (productsSwiperRef.current && productsSwiperRef.current.swiper) {
      productsSwiperRef.current.swiper.slidePrev();
    }
  };

  const handleProductsNext = () => {
    if (productsSwiperRef.current && productsSwiperRef.current.swiper) {
      productsSwiperRef.current.swiper.slideNext();
    }
  };

  const celebrations = [
    { name: "Diwali", icon: Diwali_Icon },
    { name: "Birthday", icon: Birthday },
    { name: "Wedding", icon: Wedding_Icon },
    { name: "Graduation", icon: Graduation },
    { name: "Anniversary", icon: Anniversary },
    { name: "Baby Shower", icon: Baby_Shower_Icon },
    { name: "Pet Birthday", icon: Pet_Birthday_Icon },
    { name: "Inaugration", icon: New_Beginnings_Icon },
    { name: "Engagement", icon: Engagement },
  ];

  const pouches = [
    { name: "Pouch 1", image: pouch1 },
    { name: "Pouch 2", image: pouch2 },
    { name: "Pouch 3", image: pouch3 },
    { name: "Pouch 4", image: pouch4 },
    { name: "Pouch 1", image: pouch1 },
    { name: "Pouch 2", image: pouch2 },
    { name: "Pouch 3", image: pouch3 },
    { name: "Pouch 4", image: pouch4 },
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
    <div className=" text-white pt-2 relative bg-no-repeat" style={{
      backgroundImage: "url('/Home/Background.svg')",
      backgroundSize: "100% 118%", // Increase the size of the background image
    }}>
      {/* Homepage-Arch-3 */}
      <div className="absolute end-0 h-full w-auto hidden md:block">
        <Image
          src={HomepageArch3}
          alt="Decorative Arch"
          layout="intrinsic"
          height={650}
          width={650}
          className=""
        />
      </div>

      <h2 className="text-4xl md:text-6xl font-bold text-center text-white mt-8 relative z-10">
        <Image
          src={Butterflies2}
          alt="butterflies"
          layout=""
          width={128}
          height={128}
          className="inline-block"
        />
        Celebrate With Personalization
      </h2>

      <p className="text-center mb-12 text-xl md:text-3xl max-w-6xl mx-auto relative z-10 px-4 md:px-0">
        Make your moments unforgettable with uniquely designed stand-up pouches
        Crafted just for You!
      </p>

      {/* Celebration Icons */}
      <div className="relative z-10 max-w-7xl mx-auto mb-12">
        <button
          onClick={handlePersonalizationPrev}
          className="absolute left-[-5rem] top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
          aria-label="Previous slide"
        >
          <Image
            src={Butterflies6}
            alt="Previous"
            width={50}
            height={50}
            className="hover:scale-110 transition-transform duration-300"
          />
        </button>
        <Swiper
          ref={personalizationSwiperRef}
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={5} // Adjust as needed
          loop={true}
          className="px-16"
        >
          {celebrations.map((celebration, index) => (
            <SwiperSlide key={index}>
              <div className="text-center w-[90%] relative h-full pt-12">
                <div className=" h-[20rem] flex items-center justify-center">
                  <div className="relative w-full h-full -mt-6">
                    <Image
                      src={celebration.icon}
                      alt={celebration.name}
                      layout="fill"
                      objectFit="contain"
                      className="scale-110 transition-transform duration-300 hover:-translate-y-16 hover:scale-115"
                    />
                  </div>
                </div>
                <p className="text-xl md:text-3xl mt-4 font-bold text-white">
                  {celebration.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={handlePersonalizationNext}
          className="absolute right-[-5rem] top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
          aria-label="Next slide"
        >
          <Image
            src={Butterflies5}
            alt="Next"
            width={50}
            height={50}
            className="hover:scale-110 transition-transform duration-300"
          />
        </button>
      </div>

      <h3 className="text-3xl md:text-5xl font-bold text-center text-white relative z-10">
        <Image
          src={FlowerIllustration}
          alt="flower illustration"
          width={128}
          height={128}
          layout=""
          className="inline-block"
        />
        Popular Products
        <Image
          src={Butterflies2}
          alt="butterflies"
          width={128}
          layout=""
          height={128}
          className="inline-block mb-[2rem]"
        />
      </h3>

      {/* Pouches */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <button
          onClick={handleProductsPrev}
          className="absolute left-[-5rem] top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
          aria-label="Previous slide"
        >
          <Image
            src={Butterflies6}
            alt="Previous"
            width={50}
            height={50}
            className="hover:scale-110 transition-transform duration-300"
          />
        </button>
        <Swiper
          ref={productsSwiperRef}
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={5}
          loop={true}
          className="px-16"
        >
          {pouches.map((pouch, index) => (
            <SwiperSlide key={index}>
              <div className="w-[90%] relative h-full pt-12">
                <div className="bg-[#f9e2b2] rounded-t-3xl rounded-b-[50%] h-[20rem]  flex items-center justify-center">
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
                <p className="text-[#db5c3c] mt-8 ml-[5.5rem]  px-6 py-1 rounded-full font-bold text-xl bottom-[-4rem] left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  Product Name
                </p>
                <button className="bg-[#124e66] mt-4 ml-[7.6rem] text-white px-6 py-1 rounded-full font-bold text-xl bottom-[-4rem] left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  Customise
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={handleProductsNext}
          className="absolute right-[-5rem] top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
          aria-label="Next slide"
        >
          <Image
            src={Butterflies5}
            alt="Next"
            width={50}
            height={50}
            className="hover:scale-110  transition-transform duration-300"
          />
        </button>
      </div>

      {/* Versatile Gifting section */}
      {/* <div className="flex flex-col md:flex-row items-center relative z-10">
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
            <p className="text-xl md:text-3xl mb-8 max-w-xl md:top-[-9rem] md:relative">
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
      </div> */}


      {/* Celebrations section old one*/}
      {/* <div className="text-center  relative z-10 pb-16 bg-no-repeat" style={{
        backgroundImage: "url('/Home/Background-4.svg')",
        backgroundSize: "100% 100%"
      }}>
        <h3 className="text-3xl md:text-6xl font-bold text-[#0f1729] mb-12">
          Celebrations
          <Image
            src={BirdIllustration}
            alt="Bird Illustration"
            width={300}
            height={300}
            className="inline-block ml-4"
          />
        </h3>

        <div className="flex flex-wrap md:flex-nowrap justify-center md:space-x-8" >
          {celebrationCards.map((card, index) => (
            <div key={index} className="w-full md:w-64 flex flex-col mb-8 md:mb-0" >
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
              <div className="bg-white pb-[1rem] rounded-b-3xl" >
                <button className="bg-[#ffda40] text-[#464087] py-1 px-16 font-bold text-2xl rounded-full mt-4">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[600px]" style={{
        backgroundImage: "url('/Home/Background-5.svg')",
        backgroundSize: "100% 100%"
      }}></div>
    </div>
  );
} */}

      {/* Celebrations section */}
      {/* <div className="text-center relative overflow-hidden">

        <div
          className="absolute inset-0 w-full h-full"
          style={{
            zIndex: -1,
            top: "50%", // Adjust this value to move the background up or down
            transform: "translateY(-50%)",
          }}
        >
          <Image
            src="/Homepage/Backgrounds/Background-3.svg"
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
        </div> */}

        {/* Content */}
        {/* <div className="relative z-10">
          <h3 className="text-3xl md:text-6xl font-bold text-[#0f1729] mb-12">
            Celebrations
            <Image
              src={BirdIllustration}
              alt="Bird Illustration"
              width={300}
              height={300}
              className="inline-block ml-4"
            />
          </h3>

          <div
            className="flex flex-wrap md:flex-nowrap justify-center md:space-x-8 px-4 md:px-16 relative"
            style={{ maxWidth: "1200px", margin: "0 auto" }}
          >
            {celebrationCards.map((card, index) => (
              <div
                key={index}
                className="w-full md:w-1/4 flex flex-col mb-8 md:mb-0"
              >
                <div className="bg-[#362c60] py-6 px-4 text-[#ffda40] font-bold text-xl rounded-t-3xl">
                  {card.name}
                </div>
                <div className="flex-grow bg-white py-12 flex items-center justify-center p-4">
                  <Image
                    src={card.image}
                    alt={card.name}
                    width={200}
                    height={200}
                    objectFit="contain"
                  />
                </div>
                <div className="bg-white pb-6 rounded-b-3xl">
                  <button className="bg-[#ffda40] text-[#464087] py-2 px-12 font-bold text-xl rounded-full mt-4 hover:bg-[#ffd000] transition-colors duration-300">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

    </div>
  );
}
