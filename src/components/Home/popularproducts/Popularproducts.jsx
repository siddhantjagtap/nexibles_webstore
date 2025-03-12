'use client'
import React from 'react';
import Link from 'next/link';
import popularproductData from './popularproductData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Popularproducts = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                },
            },
        ],
    };

    return (
        <div className='bg-white-1'>
            <div className='px-6 md:px-20 py-10'>
                <h2 className="text-4xl text-blue-1 font-bold text-center">Popular Products</h2>
                <br />
                <div>
                    <Slider {...settings}>
                        {popularproductData.map((product, index) => (
                            <div key={index} className='px-2 md:px-4'>
                                <div className="bg-white h-[400px] text-black rounded-xl overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-lg">
                                    <div className='h-48 md:h-56 bg-red-1 flex justify-center items-center rounded-t-xl'>
                                        <img
                                            src={product.imageSrc}
                                            alt={`product-${index + 1}`}
                                            className="h-36 md:h-44 w-36 md:w-44 rounded-full hover:scale-110 transition duration-300"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-2 md:gap-4 p-2 md:p-4">
                                        <p className="text-lg md:text-xl font-semibold">{product.categoryName}</p>
                                        <p className="text-center">{product.buyInfo}</p>
                                        <Link href={`/popularproduct/${index + 1}`}>
                                            <button className='bg-red-1 text-white text-md md:text-lg px-4 md:px-6 py-1 rounded-xl transition duration-300'>Read More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Popularproducts;
