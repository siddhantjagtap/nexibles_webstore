import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";

const Productcategory = ({ categoryData }) => {
  const sliderRef = useRef(null);

  const NextArrow = ({ onClick }) => (
    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
      <button
        className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-200"
        onClick={onClick}
        aria-label="Next"
      >
        <GrFormNext
          className="text-gray-900 hover:text-red-500 transition-colors duration-200"
          size={24}
        />
      </button>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
      <button
        className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-200"
        onClick={onClick}
        aria-label="Previous"
      >
        <GrFormPrevious
          className="text-gray-900 hover:text-red-500 transition-colors duration-200"
          size={24}
        />
      </button>
    </div>
  );

  const sliderSettings = {
    dots: false,
    infinite: categoryData.length > 5, // Only enable infinite if more than 5 items
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: categoryData.length > 5, // Only enable autoplay if more than 5 items
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    if (categoryData.length > 5) {  // Only start interval if more than 5 items
      const interval = setInterval(() => {
        sliderRef.current?.slickNext();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [categoryData.length]);

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center mb-8">
        <hr className="flex-grow border-b border-gray-300 mr-4" />
        <h2 className="text-2xl sm:text-3xl text-black font-bold whitespace-nowrap">
          All Categories
        </h2>
        <hr className="flex-grow border-b border-gray-300 ml-4" />
      </div>

      <div className="relative">
        <Slider ref={sliderRef} {...sliderSettings}>
          {categoryData.map((category) => (
            <div key={category.name} className="px-2">
              <Link href={`/category/${category.cat_url}`} passHref>
                <div className="bg-white h-auto shadow-lg p-2 border hover:shadow-md transition-shadow duration-300 rounded-lg overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src={`https://nexiblesapp.barecms.com/uploads/${category.bg_Img}`}
                      width={400}
                      height={400}
                      alt={`Image for ${category.name}`}
                      quality={100}
                      className="w-full h-full object-contain rounded-t-lg"
                    />
                  </div>
                  <div className="pt-4 pl-2 pb-1">
                    <h2 className="text-gray-900 font-semibold text-sm truncate">
                      {category.name}
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>

        <div className="mt-3 flex justify-center">
          <Link href="/all-category">
            <button className="bg-gray-300 text-gray-700 p-3 rounded-lg font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span className="flex flex-col text-center">Show More</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Productcategory;