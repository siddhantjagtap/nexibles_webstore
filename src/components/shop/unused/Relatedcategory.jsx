'use client'
import React, { useMemo, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Link from 'next/link';
import Image from 'next/image';

const RelatedCategory = ({ relatedProducts }) => {
  const [sliderRef, setSliderRef] = useState(null);

  const products = Array.isArray(relatedProducts) ? relatedProducts.flat() : [];

  const filteredProducts = useMemo(() => {
    // First, filter by origin
    const nexiblesProducts = products.filter(product =>
      product.origin && product.origin.toLowerCase() === 'nexibles'
    );

    // Then, remove duplicates based on product id
    const uniqueProducts = Array.from(new Map(nexiblesProducts.map(item => [item.id, item])).values());

    return uniqueProducts;
  }, [products]);

  useEffect(() => {
    if (sliderRef) {
      // Force a re-render of the slider
      sliderRef.slickGoTo(0);
    }
  }, [filteredProducts, sliderRef]);

  if (!relatedProducts || filteredProducts.length === 0) {
    return null;
  }

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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
        <hr className="flex-grow mr-4" />
        <h2 className="text-3xl text-blue-1 font-bold">Related Products</h2>
        <hr className="flex-grow ml-4" />
      </div>
      <br />
      <div className="relative">
        <Slider ref={setSliderRef} {...sliderSettings}>
          {filteredProducts.map((product) => (
            <div key={product.id} className="ml-1">
              <Link href={`/carddetails/${product.id}`} passHref>
                <div className="flex justify-center items-center py-2">
                  <div className="bg-gray-100 h-80 w-64 hover:shadow-[0.2px_2px_5px_0.2px_#4a5568] rounded-lg overflow-hidden mb-4">
                    <div>
                      <Image
                        src={`https://nexiblesapp.barecms.com/uploads/${product.image}`}
                        alt={`Image for ${product.name}`}
                        width={256}
                        height={256}
                        className="w-full h-64 rounded-t-lg object-cover"
                      />
                    </div>
                    <div className="flex justify-start items-center py-5 ml-2">
                      <h2 className="text-gray-900 text-base font-semibold">{product.name}</h2>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RelatedCategory;