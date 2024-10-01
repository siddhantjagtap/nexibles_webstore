"use client";

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

  const addToCart = (product) => {
    // Retrieve existing cart from localStorage or initialize a new one
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Create new product entry
    const newCartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      category: selectedCategory?.name,
      quantity: 1,  // Default quantity to 1
      image: product.image
    };

    // Check if the product already exists in the cart
    const existingItemIndex = existingCart.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      // If the product exists, update its quantity and ensure other details are current
      const existingItem = existingCart[existingItemIndex];

      // Update the quantity
      existingItem.quantity += 1;

      // Optional: Update other product details in case they have changed
      existingItem.name = product.name;
      existingItem.price = product.price;
      existingItem.category = selectedCategory?.name;
      existingItem.image = product.image;
    } else {
      // Otherwise, add the new product to the cart
      existingCart.push(newCartItem);
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));
};


  if (categoriesLoading || productsLoading) return <p>Loading...</p>;
  if (categoriesError) return <p>Error fetching categories: {categoriesError}</p>;
  if (productsError) return <p>Error fetching products: {productsError}</p>;

  return (
    <div className="flex min-h-screen bg-[#fdf5e7] pt-[7rem] relative">
      {/* Sidebar for category icons */}
      <aside className="w-[20%] bg-[#f9a287] ml-[3rem] p-6 relative rounded-2xl z-10">
        {categoryData.map((category, index) => (
          <div
            key={index}
            className={`flex flex-col items-center mb-6 cursor-pointer transition-colors duration-200 ${selectedCategory?.name === category.name
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
                    <button
                      className="bg-[#124e66] mt-4 text-white px-6 py-1 rounded-full font-bold text-xl mx-auto block"
                      onClick={() => addToCart(product)}
                    >
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