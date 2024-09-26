"use client";

<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useFetchCategories from '../../app/usefetchcategories';
import useFetchProducts from '../../app/fetchproduct';

export default function CelebrationCategoryPage() {
  const token = 'irrv211vui9kuwn11efsb4xd4zdkuq';

  const { data: categoryData, loading: categoriesLoading, error: categoriesError } = useFetchCategories(token);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { products, loading: productsLoading, error: productsError } = useFetchProducts(token, selectedCategory?.name);

  useEffect(() => {
    if (categoryData.length > 0 && !selectedCategory) {
      const diwaliCategory = categoryData.find(cat => cat.name.toLowerCase() === 'diwali');
      setSelectedCategory(diwaliCategory || categoryData[0]);
    }
  }, [categoryData, selectedCategory]);

  if (categoriesLoading || productsLoading) return <p>Loading...</p>;
  if (categoriesError) return <p>Error fetching categories: {categoriesError}</p>;
  if (productsError) return <p>Error fetching products: {productsError}</p>;
=======
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Define categories with their respective icons and banners
const categories = [
  {
    name: "Birthday",
    icon: "/Homepage/Category Icons/Birthday_Icon.svg",
    banner: "Celebrate another year with our festive birthday pouches!",
  },
  {
    name: "Wedding",
    icon: "/Homepage/Category Icons/Wedding_Icon.svg",
    banner: "Make your special day unforgettable with our wedding collection.",
  },
  {
    name: "Graduation",
    icon: "/Homepage/Category Icons/Graduation_Icon.svg",
    banner: "Commemorate academic achievements with our graduation pouches.",
  },
  {
    name: "Engagement",
    icon: "/Homepage/Category Icons/Engagement_Icon.svg",
    banner: "Pop the question in style with our engagement-themed pouches.",
  },
  {
    name: "Anniversary",
    icon: "/Homepage/Category Icons/Anniversary_Icon.svg",
    banner: "Cherish your love story with our anniversary collection.",
  },
  {
    name: "Baby Shower",
    icon: "/Homepage/Category Icons/Baby_Shower_Icon.svg",
    banner: "Welcome the little one with our adorable baby shower pouches.",
  },
  {
    name: "New Beginnings",
    icon: "/Homepage/Category Icons/New_Beginnings_Icon.png",
    banner: "Start fresh with our inspiring new beginnings collection.",
  },
  {
    name: "Pet Birthday",
    icon: "/Homepage/Category Icons/Pet_Birthday_Icon.svg",
    banner: "Pamper your furry friends with our pet birthday pouches.",
  },
];

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
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
>>>>>>> 5e401a5884675ea6cef3bab48d94ccc7a981b83b

  return (
    <div className="flex min-h-screen bg-[#fdf5e7] pt-[7rem] relative">
      {/* Sidebar for category icons */}
      <aside className="w-[20%] bg-[#f9a287] ml-[3rem] p-6 relative rounded-2xl z-10">
<<<<<<< HEAD
        {categoryData.map((category, index) => (
          <div
            key={index}
            className={`flex flex-col items-center mb-6 cursor-pointer transition-colors duration-200 ${selectedCategory?.name === category.name
              ? "bg-[#124e66] text-white rounded-lg"
              : "hover:bg-[#f9d3a2] rounded-lg"
              } p-4`}
=======
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex flex-col items-center mb-6 cursor-pointer transition-colors duration-200 ${
              selectedCategory.name === category.name
                ? "bg-[#124e66] text-white rounded-lg"
                : "hover:bg-[#f9d3a2] rounded-lg"
            } p-4`}
>>>>>>> 5e401a5884675ea6cef3bab48d94ccc7a981b83b
            onClick={() => setSelectedCategory(category)}
          >
            <div className="rounded-full bg-white w-[90%] aspect-square p-4 flex justify-center items-center overflow-hidden">
              <img
<<<<<<< HEAD
                src={`https://nexiblesapp.barecms.com/uploads/${category.bg_Img}`}
=======
                src={category.icon}
>>>>>>> 5e401a5884675ea6cef3bab48d94ccc7a981b83b
                alt={category.name}
                className="object-contain w-full h-full"
              />
            </div>
            <p className="text-lg mt-4 text-center">{category.name}</p>
          </div>
        ))}
      </aside>

      {/* Main Content Section */}
<<<<<<< HEAD
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

          {/* Product display grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product.id} className="relative h-full pt-12">
                  <div className="bg-[#f9e2b2] rounded-t-3xl rounded-b-[50%] h-80 flex items-center justify-center">
                    <div className="relative w-full h-full -mt-6">
                      <Image
                        src={`https://nexiblesapp.barecms.com/uploads/${product.image}`}
                        alt={product.name}
                        layout="fill"
                        objectFit="contain"
                        className="scale-110 transition-transform duration-300 hover:-translate-y-8 hover:scale-115"
                      />
                    </div>
                  </div>
                  <p className="text-[#db5c3c] mt-8 text-center px-6 py-1 rounded-full font-bold text-xl">
                    {product.name}
                  </p>
                  <Link href={`/productsize?pouchId=${product.id}&image=${encodeURIComponent(product.image.replace(/%20/g, '-'))}`}>
                    <button className="bg-[#124e66] mt-4 text-white px-6 py-1 rounded-full font-bold text-xl mx-auto block">
                      Customise
                    </button>
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-xl text-gray-600">No products found for this category.</p>
              </div>
            )}
          </div>
        </main>
      )}
    </div>
  );
}
=======
      <main className="w-[80%] p-6">
        {/* Full-width Category banner */}
        <div className="bg-[#f9d3a2] p-6 mb-8 rounded-lg shadow-lg flex justify-between items-center">
          <h2 className="text-3xl font-bold text-[#124e66]">
            {selectedCategory.name}
          </h2>
          <p className="text-lg hidden sm:block">{selectedCategory.banner}</p>
          <Image
            src={selectedCategory.icon}
            alt={`${selectedCategory.name} Banner`}
            width={100}
            height={100}
            className="mr-4"
          />
        </div>

        {/* Pouch display grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </div>
  );
}
>>>>>>> 5e401a5884675ea6cef3bab48d94ccc7a981b83b
