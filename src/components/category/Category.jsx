"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useFetchCategories from '../../app/usefetchcategories';

// Define pouches with sample images
const pouches = [
  { id: 1, name: "Pouch 1", image: "/Home/pouch-1.png" },
  { id: 2, name: "Pouch 2", image: "/Home/pouch-2.png" },
  { id: 3, name: "Pouch 3", image: "/Home/pouch-3.png" },
  { id: 4, name: "Pouch 4", image: "/Home/pouch-1.png" },
  { id: 5, name: "Pouch 5", image: "/Home/pouch-2.png" },
  { id: 6, name: "Pouch 6", image: "/Home/pouch-3.png" },
  { id: 7, name: "Pouch 7", image: "/Home/pouch-1.png" },
  { id: 8, name: "Pouch 8", image: "/Home/pouch-2.png" },
];

export default function CelebrationCategoryPage() {
  const token = 'irrv211vui9kuwn11efsb4xd4zdkuq';
  
  // Use the custom hook to fetch categories
  const { data: categoryData, loading, error } = useFetchCategories(token);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Set the first category as selected by default if data is available
  if (categoryData.length > 0 && !selectedCategory) {
    setSelectedCategory(categoryData[0]);
  }

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error fetching categories: {error}</p>;

  return (
    <div className="flex min-h-screen bg-[#fdf5e7] pt-[7rem] relative">
      {/* Sidebar for category icons */}
      <aside className="w-[20%] bg-[#f9a287] ml-[3rem] p-6 relative rounded-2xl z-10">
        {categoryData.map((category, index) => (
          <div
            key={index}
            className={`flex flex-col items-center mb-6 cursor-pointer transition-colors duration-200 ${
              selectedCategory?.name === category.name
                ? "bg-[#124e66] text-white rounded-lg"
                : "hover:bg-[#f9d3a2] rounded-lg"
            } p-4`}
            onClick={() => setSelectedCategory(category)}
          >
            <div className="rounded-full bg-white w-[90%] aspect-square p-4 flex justify-center items-center overflow-hidden">
              <img
                src={`https://nexiblesapp.barecms.com/uploads/${category.bg_Img}`}
                alt={category.name}
                className="object-contain w-full h-full"
              />
            </div>
            <p className="text-lg mt-4 text-center">{category.name}</p>
          </div>
        ))}
      </aside>

      {/* Main Content Section */}
      {selectedCategory && (
        <main className="w-[80%] p-6">
          {/* Full-width Category banner */}
          <div className="bg-[#f9d3a2] p-6 mb-8 rounded-lg shadow-lg flex justify-between items-center">
            <h2 className="text-3xl font-bold text-[#124e66]">
              {selectedCategory.name}
            </h2>
            <p className="text-lg hidden sm:block">{selectedCategory.description || "Celebrate with style!"}</p>
            <Image
              src={`https://nexiblesapp.barecms.com/uploads/${selectedCategory.bg_Img}`}
              alt={`${selectedCategory.name} Banner`}
              width={100}
              height={100}
              className="mr-4 rounded-full"
            />
          </div>

          {/* Pouch display grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Example static pouch images, you can update this section dynamically if needed */}
            {pouches.map((pouch) => (
              <div key={pouch.id} className="relative h-full pt-12">
                <div className="bg-[#f9e2b2] rounded-t-3xl rounded-b-[50%] h-80 flex items-center justify-center">
                  <div className="relative w-full h-full -mt-6">
                    <Image
                      src={pouch.image}
                      alt={pouch.name}
                      layout="fill"
                      objectFit="contain"
                      className="scale-110 transition-transform duration-300 hover:-translate-y-8 hover:scale-115"
                    />
                  </div>
                </div>
                <p className="text-[#db5c3c] mt-8 text-center px-6 py-1 rounded-full font-bold text-xl">
                  {pouch.name}
                </p>
                <Link href={`/productsize?pouchId=${pouch.id}`}>
                  <button className="bg-[#124e66] mt-4 text-white px-6 py-1 rounded-full font-bold text-xl mx-auto block">
                    Customise
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </main>
      )}
    </div>
  );
}
