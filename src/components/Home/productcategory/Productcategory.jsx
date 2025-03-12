import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import productCategoryData from './productcategoryData';
import Link from 'next/link';

const Productcategory = ({categoryData}) => {
  console.log("productdata in home",categoryData);
  const NextArrow = ({ onClick }) => (
    <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
      <button
        className="bg-white rounded-full p-3 shadow-md"
        onClick={onClick}
        aria-label="Next"
      >
        <GrFormNext className="text-gray-900 duration-200 hover:text-red-1 text-2xl" size={32} />
      </button>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="absolute top-1/2 left-8 transform -translate-y-1/2 z-10">
      <button
        className="bg-white rounded-full p-3 shadow-md"
        onClick={onClick}
        aria-label="Previous"
      >
        <GrFormPrevious className="text-gray-900 duration-200 hover:text-red-1 text-2xl" size={32} />
      </button>
    </div>
  );

  const settingsWithCustomArrows = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2100,
    pauseOnHover: true,
    draggable: false,
    swipeToSlide: true,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className='bg-white h-auto py-8'>
      <div className="flex items-center px-2">
        <hr className="flex-grow border-b border-gray-300 mr-4" />
        <h2 className="text-3xl text-blue-1 font-bold">All Categories</h2>
        <hr className="flex-grow border-b border-gray-300 ml-4" />
      </div>
      <br />
      <div className=" relative">
        <Slider {...sliderSettings} {...settingsWithCustomArrows}>
          {categoryData.slice(0, 7).map((categoryData) => (
              <div key={categoryData.name} className="md:ml-2 ml-10">
                <Link href={`/category/${categoryData.cat_url}`} passHref>
                <div className="bg-white h-86 w-64 hover:duration-300 hover:shadow-[0.2px_2px_5px_0.2px_#4a5568] rounded-lg overflow-hidden mb-4 mt-4">
                  <div>
                    <img 
                    src={`https://nexiblesapp.barecms.com/uploads/${categoryData.bg_Img}`} 
                    alt={`Image for ${categoryData.name}`} 
                    className="w-full h-72 rounded-t-lg object-cover" />
                  </div>
                  <div className="flex flex-col justify-start items-start px-4 py-3">
                    <h2 className="text-gray-900 font-semibold text-sm">{categoryData.name}</h2>
                    {/* <p className="text-gray-900 font-bold text-sm">Rs.{categoryData.price}</p> */}
                  </div>
                </div>
              </Link>
            </div>
          ))}
          <div className="py-32 ml-8">
            <Link href="/all-category">
              <button className="bg-gray-300 text-gray-700 font-bold py-5 px-6 rounded-full hover:underline hover:shadow-xl">
                <span className="flex flex-col">Show</span><span>More</span>
              </button>
            </Link>
          </div>
        </Slider>
      </div>
    </div>

  );
};

export default Productcategory;
