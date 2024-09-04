'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import pouch1 from "../../../public/Home/pouch-1.png";
import pouch2 from "../../../public/Home/pouch-2.png";
import pouch3 from "../../../public/Home/pouch-3.png";
import pouch4 from "../../../public/Home/pouch-4.png";
import Butterflies2 from "../../../public/Home/Butterflies-2.svg";
import FlowerIllustration from "../../../public/Home/Flower-Illustration.svg";


export default function Shop() {
  const pouches = [
    { name: "Festive Pouch", image: pouch1, price: "$9.99" },
    { name: "Birthday Pouch", image: pouch2, price: "$8.99" },
    { name: "Wedding Pouch", image: pouch3, price: "$10.99" },
    { name: "Graduation Pouch", image: pouch4, price: "$7.99" },
    { name: "Holiday Pouch", image: pouch1, price: "$11.99" },
    { name: "Anniversary Pouch", image: pouch2, price: "$12.99" },
  ];

  const banners = [
    { title: "Summer Sale!", image: pouch1, description: "Up to 50% off on selected items" },
    { title: "New Arrivals", image: pouch2, description: "Check out our latest designs" },
    { title: "Custom Orders", image: pouch3, description: "Create your unique pouch today" },
  ];

  return (
    <div className="bg-gradient-to-b from-[#464087] to-[#7a71c7] text-white min-h-screen  pb-16">
      {/* Banner Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="mb-12"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src={banner.image}
                alt={banner.title}
                layout="fill"
                objectFit="contain"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">{banner.title}</h2>
                <p className="text-xl md:text-2xl">{banner.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <h2 className="text-4xl md:text-6xl font-bold text-center text-[#ffda40] mt-8 mb-12 relative">
        <Image
          src={Butterflies2}
          alt="butterflies"
          width={128}
          height={128}
          className="inline-block mr-4"
        />
        Our Products
        <Image
          src={FlowerIllustration}
          alt="flower illustration"
          width={128}
          height={128}
          className="inline-block ml-4"
        />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {pouches.map((pouch, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="relative h-64">
              <Image
                src={pouch.image}
                alt={pouch.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="p-4 bg-[#f7eee5] text-[#464087]">
              <h3 className="text-xl font-bold mb-2">{pouch.name}</h3>
              <p className="text-lg mb-4">{pouch.price}</p>
             <Link
            href="/my-cart">
              <button className="bg-[#ffda40] text-[#464087] px-6 py-2 rounded-full font-bold text-lg transition-colors duration-300 hover:bg-[#ffc107]">
                Add to Cart
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}