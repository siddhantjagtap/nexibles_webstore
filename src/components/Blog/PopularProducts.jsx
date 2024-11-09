"use client";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import FlowerIllustration from "../../../public/Home/Flower-Illustration.svg";
import Butterflies2 from "../../../public/Home/Butterflies-2.svg";
import Butterflies5 from "../../../public/Home/Butterflies-5.svg";
import Butterflies6 from "../../../public/Home/Butterflies-6.svg";

// CustomCarousel component specifically for products
const ProductCarousel = ({ items = [], renderItem, slidesToShow = 5 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const validItems = items.filter((item) => item && typeof item === "object");

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getResponsiveSlidesToShow = useCallback(() => {
    if (windowWidth < 640) return 1;
    if (windowWidth < 768) return 2;
    if (windowWidth < 1024) return 3;
    if (windowWidth < 1280) return 4;
    return slidesToShow;
  }, [windowWidth, slidesToShow]);

  const next = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % validItems.length);
  }, [validItems.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? validItems.length - 1 : prevIndex - 1
    );
  }, [validItems.length]);

  const getVisibleItems = useCallback(() => {
    if (!validItems.length) return [];
    const visibleItems = [];
    const responsiveSlidesToShow = getResponsiveSlidesToShow();
    const numItemsToShow = Math.min(responsiveSlidesToShow, validItems.length);

    for (let i = 0; i < numItemsToShow; i++) {
      const index = (currentIndex + i) % validItems.length;
      visibleItems.push(validItems[index]);
    }
    return visibleItems;
  }, [currentIndex, validItems, getResponsiveSlidesToShow]);

  if (!validItems.length) return null;

  const responsiveSlidesToShow = getResponsiveSlidesToShow();

  return (
    <div className="relative px-4 sm:px-8 md:px-16 lg:px-20">
      {validItems.length > responsiveSlidesToShow && (
        <button
          onClick={prev}
          className="absolute left-0 sm:left-2 md:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
          aria-label="Previous"
        >
          <Image
            src={Butterflies6}
            alt="Previous"
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 hover:scale-110 transition-transform duration-300"
          />
        </button>
      )}

      <div className="flex gap-2 transition-transform duration-300 ease-in-out">
        {getVisibleItems().map((item, index) => (
          <div
            key={`${item.id || index}`}
            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
          >
            {renderItem(item)}
          </div>
        ))}
      </div>

      {validItems.length > responsiveSlidesToShow && (
        <button
          onClick={next}
          className="absolute right-0 sm:right-2 md:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
          aria-label="Next"
        >
          <Image
            src={Butterflies5}
            alt="Next"
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 hover:scale-110 transition-transform duration-300"
          />
        </button>
      )}
    </div>
  );
};

const PopularProducts = ({ token = "irrv211vui9kuwn11efsb4xd4zdkuq" }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://nexiblesapp.barecms.com/api/product/get_list/All",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "API-Key": "irrv211vui9kuwn11efsb4xd4zdkuq",
            },
          }
        );
        const result = await response.json();
        if (result.status === "success") {
          const filteredProducts = result.data.filter(
            (product) =>
              product && product.origin?.toLowerCase() === "nexigifting"
          );
          setProducts(filteredProducts);
        }
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };
    fetchProducts();
  }, [token]);

  const handleCustomizeClick = (product) => {
    if (!product) return;

    const productDetails = {
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      quantity: 1,
      image: product.image,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const productExists = existingCart.some((item) => item.id === product.id);

    if (!productExists) {
      existingCart.push(productDetails);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    window.location.href = `/productsize?pouchId=${product.id}&image=${product.image}`;
  };

  const renderProduct = (product) => {
    if (!product || !product.image || !product.name) return null;

    return (
      <div className="w-full relative h-full pt-6 sm:pt-8 md:pt-12">
        <div className="bg-[#f9e2b2] rounded-t-3xl rounded-b-[45%] h-40 sm:h-48 md:h-64 flex items-center justify-center">
          <div className="relative w-full h-full mt-4 sm:mt-6 md:mt-8">
            <Image
              src={`https://nexiblesapp.barecms.com/uploads/${product.image}`}
              alt={product.name}
              layout="fill"
              objectFit="contain"
              className="scale-110 transition-transform duration-300 hover:-translate-y-8 hover:scale-115 max-w-[75%] max-h-[83%] mx-auto"
              onError={(e) => {
                e.target.src = "/placeholder-image.jpg";
              }}
            />
          </div>
        </div>
        <p className="text-[#db5c3c] font-gotham-medium text-sm sm:text-base md:text-pt-20 mt-2 sm:mt-4 text-center px-2 sm:px-4 py-1 whitespace-nowrap overflow-hidden text-ellipsis">
          {product.name}
        </p>
        <button
          onClick={() => handleCustomizeClick(product)}
          className="bg-[#197d8e] text-sm sm:text-base md:text-pt-20 font-gotham-rounded-bold mt-2 sm:mt-4 mx-auto block text-white px-3 sm:px-4 py-1 rounded-full whitespace-nowrap mb-2 sm:mb-4"
        >
          Customise
        </button>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
      <h3 className="font-gotham-bold text-lg sm:text-xl md:text-pt-23 text-center text-black md:text-white relative z-10 mb-4 sm:mb-6 md:mb-8">
        <Image
          src={FlowerIllustration}
          alt="flower illustration"
          width={40}
          height={40}
          className="inline-block w-8 h-8 sm:w-12 sm:h-12 md:w-30 md:h-30 lg:w-36 lg:h-36"
        />
        Popular Products
        <Image
          src={Butterflies2}
          alt="butterflies"
          width={60}
          height={60}
          className="inline-block w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-20 lg:h-20 mt-[-2rem] sm:mt-[-2.5rem] md:mt-[-3rem]"
        />
      </h3>

      <div className="relative z-10 max-w-7xl mx-auto">
        {products.length > 0 && (
          <ProductCarousel
            items={products}
            renderItem={renderProduct}
            slidesToShow={5}
            variant="products"
          />
        )}
      </div>
    </div>
  );
};

export default PopularProducts;
