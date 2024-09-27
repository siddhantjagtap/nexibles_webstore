'use client';

import React ,{useEffect,useState}from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const sizes = [
  {
    name: "NexiSmall",
    dimensions: "130mm x 210mm + 80mm",
    capacity: "Can hold up to 200gms",
    width: 280,
    height: 380
  },
  {
    name: "NexiMedium",
    dimensions: "160mm x 240mm + 90mm",
    capacity: "Can hold up to 300gms",
    width: 400,
    height: 570
  },
];

export default function ProductSize() {
  const searchParams = useSearchParams();
  const pouchId = searchParams.get('pouchId');
  const imageFileName = searchParams.get('image');
  const productName = searchParams.get('name');

  useEffect(() => {
    if (pouchId && productName) {
      // Store productId and productName in localStorage
      localStorage.setItem('productId', pouchId);
      localStorage.setItem('productName', productName);
    }
  }, [pouchId, productName]);

  const handleSizeSelection = (size) => {
    // Store selected size in localStorage
    localStorage.setItem('productSize', size.name);
  };

  if (!imageFileName) {
    return <div>Product image not found</div>;
  }

  return (
    <div className="h-full px-8 pt-28">
      <Link href="/category" className="text-[#124e66] font-bold">
        ← Back
      </Link>

      <h1 className="text-4xl font-bold text-[#ee6e73] text-center">Choose Your Size</h1>

      <div className="flex justify-center items-center space-x-56">
        {sizes.map((size, index) => (
          <Link
            key={index}
            href={`/message?size=${size.name}&pouchId=${pouchId}&image=${encodeURIComponent(imageFileName)}`}
            className="text-center group"
            onClick={() => handleSizeSelection(size)}
          >
            <div className="relative p-4 transition-all duration-300 group-hover:bg-gray-200 group-hover:border-gray-400">
              <Image
                src={`https://nexiblesapp.barecms.com/uploads/${imageFileName}`}
                alt={size.name}
                width={size.width}
                height={size.height}
                className="mx-auto"
              />
              <h2 className="text-2xl font-semibold text-[#124e66] mt-4 mb-2">
                {size.name}
              </h2>
              <p className="text-gray-600 mb-1">{size.dimensions}</p>
              <p className="text-gray-600 mb-4">{size.capacity}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
