"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import nexibgimg1 from "../../../public/home/backimg_1.png";
import nexibgimg2 from "../../../public/home/backimg_2.png";
import nexibgimg3 from "../../../public/home/bgimg_3.png";
import nexibgimg4 from "../../../public/home/bgimg_4.png";
import humanImage from "../../../public/home/human.png";
import cloudImage from "../../../public/home/cloud.png";
import birdImage from "../../../public/home/bird.png";
import birdImage1 from "../../../public/home/bird_1.png";
import butterfly1 from "../../../public/home/butterfly_1.png";
import butterfly2 from "../../../public/home/butterfly_2.png";
import butterfly3 from "../../../public/home/butterfly_3.png";
import butterfly4 from "../../../public/home/butterfly_4.png";
import butterflyFlap1 from "../../../public/home/butterfly_flap_1.png";
import butterflyFlap2 from "../../../public/home/butterfly_flap_2.png";
import line1 from "../../../public/home/line1.png";
import line2 from "../../../public/home/line2.png";
import line3 from "../../../public/home/line3.png";
import line4 from "../../../public/home/line4.png";
import line5 from "../../../public/home/line5.png";

const HeaderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isBirdFlapping, setIsBirdFlapping] = useState(false);
  const [isButterfliesFlapping, setIsButterfliesFlapping] = useState(false);


  const slides = [
    {
      bgImage: nexibgimg1,
      content: (
        <div className="absolute inset-0">
          <div className="absolute inset-0 flex justify-center mt-[5%] items-start animate-pulse">
            <div className="w-1/2 sm:w-1/3 h-1/3 animate-air-reverse relative z-10">
              <Image
                src={cloudImage}
                alt="Cloud Front"
                layout="responsive"
                width={300}
                height={300}
                objectFit="contain"
              />
            </div>
            <div className="w-1/2 sm:w-1/3 h-1/3 animate-air-reverse absolute mt-[10rem] mr-[30%] sm:mr-[60%] z-0">
              <Image
                src={cloudImage}
                alt="Cloud Back"
                layout="responsive"
                width={300}
                height={300}
                objectFit="contain"
              />
            </div>
          </div>
          <div className="absolute inset-0 flex justify-start ml-[5%] sm:ml-[10%] items-center pr-[5%] sm:pr-[10%]">
            <div className="w-[40%] sm:w-[28%] h-1/2 animate-float-delay-2">
              <Image
                src={isBirdFlapping ? birdImage : birdImage1}
                alt="Flying Bird"
                layout="responsive"
                width={100}
                height={100}
                objectFit="contain"
              />
            </div>
          </div>
          <div className="absolute bottom-[30%] sm:bottom-[40%] left-[10%] sm:left-[30%] text-center">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-black">
              Digital brand appeal. Perfected.
            </h2>
          </div>
        </div>
      ),
    },
    {
      bgImage: nexibgimg2,
      content: (
        <div className="absolute inset-0 flex justify-start items-center ml-[5%] sm:ml-[10%]">
          <div className="w-[80%] sm:w-[32%] h-[70%] relative">
            <Image
              src={humanImage}
              alt="Human"
              layout="fill"
              objectFit="contain"
              className="animate-fly-up z-50"
            />
            {/* <div className="absolute inset-0">
              <div className="absolute w-[10%] h-[10%] left-[30%]  animate-line-animation-1">
                <Image
                  src={line1}
                  alt="Line 1"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="absolute w-[10%] h-[10%] left-[40%]  animate-line-animation-4">
                <Image
                  src={line1}
                  alt="Line 1"
                  layout="fill"
                  objectFit="contain"
                />
              </div>          
              <div className="absolute w-[10%] h-[10%] left-[20%]  animate-line-animation-2">
                <Image
                  src={line2}
                  alt="Line 2"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="absolute w-[10%] h-[10%] right-[1%]  animate-line-animation-3">
                <Image
                  src={line3}
                  alt="Line 3"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="absolute w-[10%] h-[10%] right-[15%]  animate-line-animation-4">
                <Image
                  src={line4}
                  alt="Line 4"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div> */}
          </div>
          <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 p-4 rounded-md max-w-xl sm:max-w-4xl">
            <h2 className="text-xl sm:text-2xl pb-[0.5rem] font-bold text-white relative">
              Beautiful packaging for a beautiful planet
              <span className="block h-[2px] w-[58%] bg-white absolute bottom-[-4px] left-0"></span>
            </h2>
            <p className="text-base sm:text-lg mt-[0.5rem] text-white">
              Our digital printing is tested to give absolute packaging appeal.
              The beauty of it is not restricted to the shelf. We think outside
              the box to align our operations with a safer and more beautiful
              planet.
            </p>
          </div>
        </div>
      ),
    },
    {
      bgImage: nexibgimg3,
      content: (
        <div className="absolute inset-0 flex flex-col justify-end items-start p-8 sm:p-16">
          <div className="relative w-full h-full">
            <div className="absolute left-[5%] top-[10%] w-[4%] sm:w-[1%] animate-float">
              <Image src={butterfly1} alt="Butterfly 1" layout="responsive" />
            </div>
            <div className="absolute left-[10%] top-[8%] w-[8%] sm:w-[3%] animate-float-delay-1">
              <Image src={butterfly2} alt="Butterfly 2" layout="responsive" />
            </div>
            <div className="absolute left-[10%] top-[25%] w-[5%] sm:w-[2%] animate-float-delay-2">
              <Image src={butterfly3} alt="Butterfly 3" layout="responsive" />
            </div>
            <div className="absolute left-[18%] top-[25%] w-[5%] sm:w-[2%] animate-float-delay-3">
              <Image src={butterfly4} alt="Butterfly 4" layout="responsive" />
            </div>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-white mb-4 z-10 pb-2 border-b-2 border-white inline-block">
            Future of food processing and packaging
          </h2>
          <p className="text-base sm:text-xl text-white max-w-xl sm:max-w-2xl z-10">
            We match dedication with innovation. We embark on the future so that you are ahead of the future.
          </p>
        </div>
      ),
    },
    {
      bgImage: nexibgimg4,
      content: (
        <div className="absolute inset-0 flex flex-col justify-between items-start p-8">
          <div className="relative w-full h-full">
            <div className="absolute left-[38%] top-[3%] w-[3%]  animate-float">
              <Image
                src={isButterfliesFlapping ? butterflyFlap1 : butterflyFlap2}
                alt="Butterfly Flap 1"
                layout="responsive"
              />
            </div>
            <div className="absolute left-[40%] top-[18%] w-[5%]  animate-float-delay-2">
              <Image
                src={isButterfliesFlapping ? butterflyFlap2 : butterflyFlap1}
                alt="Butterfly Flap 2"
                layout="responsive"
              />
            </div>
          </div>
          <div className="text-start ml-[10%] z-10 max-w-4xl mt-auto">
            <h2 className="text-xl sm:text-3xl font-bold text-white mb-4 z-10 pb-2 border-b-2 border-white inline-block">
              Reaching out the new
            </h2>
            <p className="text-md text-white max-w-2xl ">
              Our Strategy touches the lives of our clients and employees. The imprint we leave always builds on
              happiness. The joy of running a company. The elation of buying. The harmony of a world packaged
              creatively to spin the best stories for every generation.
            </p>
          </div>
        </div>
      ),
    }
  ];

 
  useEffect(() => {
    const flapInterval = setInterval(() => {
      setIsBirdFlapping((prev) => !prev);
      setIsButterfliesFlapping((prev) => !prev);
    }, 300);
    return () => clearInterval(flapInterval);
  }, []);

  return (
    <div className="h-screen overflow-hidden relative">
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
        }
        .swiper-pagination-bullet {
          background: white !important;
        }
        .swiper-pagination-bullet-active {
          background: white !important;
        }
      `}</style>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <Image
                src={slide.bgImage}
                alt={`Background ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0">{slide.content}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeaderSection;