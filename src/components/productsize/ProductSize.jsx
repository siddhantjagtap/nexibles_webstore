'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
<<<<<<< HEAD
import { useSearchParams } from 'next/navigation';

=======
import { useSearchParams } from 'next/navigation'; // Import useSearchParams to get query params

// Same image used for different sizes
>>>>>>> 5e401a5884675ea6cef3bab48d94ccc7a981b83b
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

<<<<<<< HEAD
export default function ProductSize() {
  const searchParams = useSearchParams();
  const pouchId = searchParams.get('pouchId');
  const imageFileName = searchParams.get('image')?.replace(/%20/g, '-');  // Replace %20 with -

  // Construct the full image URL using the server URL
  const imageUrl = `https://nexiblesapp.barecms.com/uploads/${imageFileName}`;

  if (!imageFileName) {
    return <div>Product image not found</div>;
=======
// Pouches data
const pouches = [
  { id: 1, name: "Pouch 1", image: "/Home/pouch-1.png" }, // Example image
  { id: 2, name: "Pouch 2", image: "/Home/pouch-2.png" },
  { id: 3, name: "Pouch 3", image: "/Home/pouch-3.png" },
  { id: 4, name: "Pouch 4", image: "/Home/pouch-1.png" },
  { id: 5, name: "Pouch 5", image: "/Home/pouch-2.png" },
  { id: 6, name: "Pouch 6", image: "/Home/pouch-3.png" },
  { id: 7, name: "Pouch 7", image: "/Home/pouch-1.png" },
  { id: 8, name: "Pouch 8", image: "/Home/pouch-2.png" },
];

export default function ProductSize() {
  const searchParams = useSearchParams(); // Get search params
  const pouchId = searchParams.get('pouchId'); // Extract pouchId from query string
  const selectedPouch = pouches.find(pouch => pouch.id === parseInt(pouchId));

  if (!selectedPouch) {
    return <div>Pouch not found</div>;
>>>>>>> 5e401a5884675ea6cef3bab48d94ccc7a981b83b
  }

  return (
    <div className="h-full px-8 pt-28">
<<<<<<< HEAD
      <Link href="/category" className="text-[#124e66] font-bold">
=======
      <Link href="/" className="text-[#124e66] font-bold">
>>>>>>> 5e401a5884675ea6cef3bab48d94ccc7a981b83b
        ← Back
      </Link>
      
      <h1 className="text-4xl font-bold text-[#ee6e73] text-center">Choose Your Size</h1>
      
<<<<<<< HEAD
      <div className="flex justify-center items-center space-x-56">
        {sizes.map((size, index) => (
          <Link 
            key={index} 
            href={`/message?size=${size.name}&id=${pouchId}&image=${encodeURIComponent(imageUrl)}`}
            className="text-center group"
          >
            <div className="relative p-4 transition-all duration-300 group-hover:bg-gray-200 group-hover:border-gray-400">
              <Image
                src={imageUrl} // Using the full absolute URL here
=======
      <div className="flex justify-center items-center space-x-56"> {/* Spacing between the pouches */}
        {sizes.map((size, index) => (
          <Link 
            key={index} 
            href={`/customize/${pouchId}/message?size=${size.name}`} 
            className="text-center group" // Group class for hover effect
          >
            <div className="relative p-4  transition-all duration-300 group-hover:bg-gray-200 group-hover:border-gray-400">
              {/* Render the same image but change the width and height dynamically */}
              <Image
                src={selectedPouch.image}  // Use the same image for both sizes
>>>>>>> 5e401a5884675ea6cef3bab48d94ccc7a981b83b
                alt={size.name}
                width={size.width}
                height={size.height}
                className="mx-auto"
              />
              <h2 className="text-2xl font-semibold text-[#124e66] mt-4 mb-2">
                {size.name}
<<<<<<< HEAD
=======
                <span className="text-[#ee6e73]">{size.name.includes("Small") ? "Small" : "Medium"}</span>
>>>>>>> 5e401a5884675ea6cef3bab48d94ccc7a981b83b
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
