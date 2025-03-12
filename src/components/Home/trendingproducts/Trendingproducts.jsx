import React from 'react';
import trendingproductsData from './trendingproductData';
import Link from "next/link"

export default function Trendingproducts() {
  return (
    <div className="bg-white py-8">
      <div>
        <div className="px-2 mb-8">
          <h2 className="text-black font-bold text-2xl md:text-start text-center">Trending Products</h2>
        </div>
        <div className="flex flex-col md:flex-row px-2 justify-center md:justify-evenly md:space-x-4">
          {trendingproductsData.map((product) => (
            <div key={product.id} className="relative mb-4 md:mb-0">
              <img src={product.imageSrc} alt={product.alt} className="w-full h-auto rounded-lg" />
              <div className="absolute bottom-6 left-8 right-8 flex flex-col items-center md:flex-row md:justify-between">
                <p className="text-gray-900 font-bold text-lg md:text-xl mb-2 md:mb-0">{product.name}</p>
                <Link href={`/carddetails/${product.id}`}>
                <button className="bg-[#30384E] rounded-md text-sm md:text-base text-white py-2 px-6 uppercase mt-2 md:mt-0">order now</button>
                </Link>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
