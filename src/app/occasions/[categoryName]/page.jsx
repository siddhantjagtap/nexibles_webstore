"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRouter, usePathname } from "next/navigation";
import useFetchCategories from "../../../app/usefetchcategories";
import useFetchProducts from "../../../app/fetchproduct";
import Loader from "../../../components/comman/Loader";
import CategoryBanner from "../../../components/category/CategoryBanner";
import Footer from "../../../components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

export default function DynamicCategoryPage() {
  const router = useRouter();
  const pathname = usePathname();
  const token = "irrv211vui9kuwn11efsb4xd4zdkuq";

  // Normalize the category name from the URL
  const getNormalizedCategoryName = (urlPath) => {
    const rawName = urlPath?.split("/").pop() || "";
    return decodeURIComponent(rawName)
      .toLowerCase()
      .replace(/%20/g, " ")
      .replace(/\+/g, " ")
      .trim();
  };

  const categoryName = getNormalizedCategoryName(pathname);

  const {
    data: categoryData,
    loading: categoriesLoading,
    error: categoriesError,
  } = useFetchCategories(token);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const {
    products,
    loading: productsLoading,
    error: productsError,
  } = useFetchProducts(token, selectedCategory?.name);

  // Normalize category name for comparison
  const normalizeCategoryName = (name) => {
    return name.toLowerCase().trim();
  };

  useEffect(() => {
    if (categoryData.length > 0) {
      if (categoryName) {
        const currentCategory = categoryData.find(
          (cat) =>
            normalizeCategoryName(cat.name) ===
            normalizeCategoryName(categoryName)
        );
        if (currentCategory) {
          setSelectedCategory(currentCategory);
        } else {
          // If no matching category is found, redirect to the first category
          const firstCategory = categoryData[0];
          const encodedName = encodeURIComponent(
            firstCategory.name.toLowerCase()
          );
          router.push(`/${encodedName}`);
          setSelectedCategory(firstCategory);
        }
      } else {
        // Default to first category if no category name in URL
        setSelectedCategory(categoryData[0]);
      }
    }
  }, [categoryData, categoryName, router]);

  const handleCategoryClick = (category) => {
    const encodedName = encodeURIComponent(category.name.toLowerCase());
    router.push(`/occasions/${encodedName}`);
    setSelectedCategory(category);
  };

  const addToCart = (product) => {
    try {
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      const newCartItem = {
        id: product.id,
        name: product.name,
        // price: product.price,
        category: selectedCategory?.name,
        // quantity: 1,
        image: product.image,
        placeholder: selectedCategory?.placeholder,
      };

      const existingItemIndex = existingCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingItemIndex !== -1) {
        const existingItem = existingCart[existingItemIndex];
        // existingItem.quantity += 1;
        existingItem.name = product.name;
        // existingItem.price = product.price;
        existingItem.category = selectedCategory?.name;
        existingItem.image = product.image;
        existingItem.placeholder = selectedCategory?.placeholder;
      } else {
        existingCart.push(newCartItem);
      }
      localStorage.setItem("cart", JSON.stringify(existingCart));
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  if (categoriesLoading || productsLoading) return <Loader />;
  if (categoriesError)
    return <p>Error fetching categories: {categoriesError}</p>;
  if (productsError) return <p>Error fetching products: {productsError}</p>;

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row min-h-screen bg-white pt-[7rem] md:pt-[4rem] relative">
        {/* Mobile Swiper Categories */}
        <div className="md:hidden sticky top-[7rem] bg-white z-20 shadow-md">
          <div className="py-4">
            <Swiper
              slidesPerView="auto"
              spaceBetween={12}
              className="!pb-4"
              freeMode={true}
            >
              {categoryData.map((category, index) => (
                <SwiperSlide key={index} style={{ width: "auto" }}>
                  <div
                    className={`flex flex-col items-center cursor-pointer px-2
                      ${selectedCategory?.name === category.name ? "" : ""}`}
                    onClick={() => handleCategoryClick(category)}
                  >
                    <div className="relative rounded-full bg-[#d88473] w-16 h-16 p-2 flex justify-center items-center overflow-hidden">
                      <img
                        src={`https://nexiblesapp.barecms.com/uploads/${category.bg_Img}`}
                        alt={category.name}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <p
                      className={`text-sm font-gotham-book text-center mt-2
                      ${
                        selectedCategory?.name === category.name
                          ? "text-[#d88473] font-bold"
                          : "text-gray-600"
                      }`}
                    >
                      {category.name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-[12%] bg-[#d88473] ml-[3rem] mt-6 rounded-[2.5rem] z-10">
          <div className="p-6">
            {categoryData.map((category, index) => (
              <div
                key={index}
                className={`flex flex-col items-center mb-6 cursor-pointer
                transition-all duration-300
                ${
                  selectedCategory?.name === category.name
                    ? "bg-transparent text-white"
                    : "hover:bg-transparent"
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                <div className="relative rounded-full bg-white w-[120%] aspect-square p-4 flex justify-center items-center overflow-hidden transform transition-transform duration-300 hover:scale-105">
                  <img
                    src={`https://nexiblesapp.barecms.com/uploads/${category.bg_Img}`}
                    alt={category.name}
                    className="object-contain w-full h-full"
                  />
                </div>
                <p className="text-lg font-gotham-book text-center text-[#f9e2b2] mt-4">
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content Section */}
        {selectedCategory && (
          <main className="w-full md:w-[80%] md:p-6">
            <CategoryBanner
              className="w-full bg-[#f9e2b2]"
              categoryName={selectedCategory.name}
              categoryddescription={selectedCategory.description}
              bannerPhoto={selectedCategory.bannerphoto}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-12 lg:gap-16 mx-auto md:ml-16 md:mt-[22%] mt-8 max-w-[90%] md:max-w-none mt-[13rem]">
              {products.length > 0 ? (
                products.map((product) => (
                  <div
                    key={product.id}
                    className="relative flex flex-col items-center h-full pt-8 transform transition-transform duration-300 hover:scale-105"
                  >
                    <div className="bg-[#f9e2b2] rounded-t-3xl rounded-b-[46%] w-full max-w-[220px] h-[240px] flex items-center justify-center shadow-lg">
                      <div className="relative w-full h-full mt-4">
                        <Image
                          src={`https://nexiblesapp.barecms.com/uploads/${product.image}`}
                          alt={product.name}
                          layout="fill"
                          objectFit="contain"
                          className="scale-110 transition-transform duration-300 hover:scale-115 max-w-[83%] max-h-[83%] mx-auto mt-2"
                        />
                      </div>
                    </div>
                    <p className="text-[#db5c3c] mt-4 text-center px-6 py-1 rounded-full font-gotham-medium text-pt-16">
                      {product.name}
                    </p>
                    <Link
                      href={`/productsize?pouchId=${
                        product.id
                      }&image=${encodeURIComponent(
                        product.image.replace(/%20/g, "-")
                      )}`}
                    >
                      <button
                        className="bg-[#197d8e] mt-2 text-white px-6 py-2 rounded-full font-gotham-rounded-bold text-pt-16
                        transform transition-all duration-300 hover:bg-[#156c7b] hover:scale-105 active:scale-95
                        shadow-md hover:shadow-lg"
                        onClick={() => addToCart(product)}
                      >
                        Customise
                      </button>
                    </Link>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-xl text-gray-600">
                    No products found for this category.
                  </p>
                </div>
              )}
            </div>
          </main>
        )}
      </div>
      <div className="mt-[4rem]">
        <Footer />
      </div>
    </>
  );
}
