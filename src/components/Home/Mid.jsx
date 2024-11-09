import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Butterflies2 from "../../../public/Home/Butterflies-2.svg";
import TreeIllustration from "../../../public/Home/Tree Illustration.svg";
import FlowerIllustration from "../../../public/Home/Flower-Illustration.svg";
import Butterflies5 from "../../../public/Home/Butterflies-5.svg";
import Butterflies6 from "../../../public/Home/Butterflies-6.svg";
import useFetchCategories from "../../app/usefetchcategories";

const CustomCarousel = ({ items = [], renderItem, slidesToShow = 5 }) => {
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

      <div className="flex gap-2  transition-transform duration-300 ease-in-out">
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
          className="absolute right-0 sm:right-2 md:right-0 lg:right-0 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
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

export default function Mid() {
  const token = "irrv211vui9kuwn11efsb4xd4zdkuq";
  const { data: categoryData, loading, error } = useFetchCategories(token);
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

  const renderCategory = (category) => {
    if (!category || !category.bg_Img || !category.name) return null;

    return (
      <Link href="/occasions">
        <div className="text-center w-full relative group pt-2 sm:pt-4 pb-4 sm:pb-">
          <div className="h-32 sm:h-40 md:h-48 w-32 sm:w-40 md:w-48 mx-auto flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 transform group-hover:-translate-y-4">
            <div className="relative w-full h-[86%]">
              <Image
                src={`https://nexiblesapp.barecms.com/uploads/${category.bg_Img}`}
                alt={category.name}
                layout="fill"
                objectFit="contain"
                className="transition-transform duration-300 group-hover:scale-115"
                onError={(e) => {
                  e.target.src = "/placeholder-image.jpg";
                }}
              />
            </div>
          </div>
          <p className="text-[#f9e2b2] text-sm sm:text-base md:text-xl lg:text-2xl font-bold mt-2 transition-all duration-300 group-hover:-translate-y-4">
            {category.name}
          </p>
        </div>
      </Link>
    );
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
    <div className="text-white pt-2 relative bg-no-repeat bg-[#197d8e] md:bg-transparent">
      <div
        className="hidden md:block absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/Home/Background.svg')",
          backgroundSize: "100% 102%",
          zIndex: -1,
        }}
      />

      <div className="container text-center px-4 sm:px-6 md:px-8 lg:px-16">
        <div>
          <h2 className="font-gotham-bold text-xl sm:text-2xl md:text-pt-30 text-center text-black md:text-white mt-4 sm:mt-6 md:mt-8 relative z-10">
            <Image
              src={Butterflies2}
              alt="butterflies"
              width={64}
              height={64}
              className="inline-block w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mt-[-2rem] sm:mt-[-2.5rem] md:mt-[-3rem]"
            />
            Personalise Your Celebration
          </h2>
          <p className=" md:mb-12 text-sm sm:text-base md:text-xl lg:text-xl max-w-4xl mx-auto relative z-10 text-black md:text-white">
            From design to details, add your personal touch to every pouch.
          </p>
          <Image
            src={TreeIllustration}
            alt="tree illustration"
            width={44}
            height={44}
            className="inline-block w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24  sm:mt-[-1.5rem] md:mt-[-2rem] lg:mt-[-.5rem]"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto md:mb-12">
          {categoryData && categoryData.length > 0 && (
            <CustomCarousel
              items={categoryData}
              renderItem={renderCategory}
              slidesToShow={5}
              variant="default"
            />
          )}
        </div>

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
            <CustomCarousel
              items={products}
              renderItem={renderProduct}
              slidesToShow={5}
              variant="products"
            />
          )}
        </div>
      </div>
    </div>
  );
}

// import React, { useRef, useState, useEffect, useCallback } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import Butterflies2 from "../../../public/Home/Butterflies-2.svg";
// import TreeIllustration from "../../../public/Home/Tree Illustration.svg";
// import FlowerIllustration from "../../../public/Home/Flower-Illustration.svg";
// import Butterflies5 from "../../../public/Home/Butterflies-5.svg";
// import Butterflies6 from "../../../public/Home/Butterflies-6.svg";
// import useFetchCategories from "../../app/usefetchcategories";
// import Link from "next/link";

// export default function Mid() {
//   const personalizationSwiperRef = useRef(null);
//   const productsSwiperRef = useRef(null);
//   const token = "irrv211vui9kuwn11efsb4xd4zdkuq";
//   const { data: categoryData, loading, error } = useFetchCategories(token);
//   const [products, setProducts] = useState([]);

//   // const handlePersonalizationPrev = useCallback(() => {
//   //   if (
//   //     personalizationSwiperRef.current &&
//   //     personalizationSwiperRef.current.swiper
//   //   ) {
//   //     personalizationSwiperRef.current.swiper.slidePrev();
//   //   }
//   // }, []);

//   // const handlePersonalizationNext = useCallback(() => {
//   //   if (
//   //     personalizationSwiperRef.current &&
//   //     personalizationSwiperRef.current.swiper
//   //   ) {
//   //     personalizationSwiperRef.current.swiper.slideNext();
//   //   }
//   // }, []);

//   const handleProductsPrev = useCallback(() => {
//     if (productsSwiperRef.current && productsSwiperRef.current.swiper) {
//       productsSwiperRef.current.swiper.slidePrev();
//     }
//   }, []);

//   const handleProductsNext = useCallback(() => {
//     if (productsSwiperRef.current && productsSwiperRef.current.swiper) {
//       productsSwiperRef.current.swiper.slideNext();
//     }
//   }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(
//           "https://nexiblesapp.barecms.com/api/product/get_list/All",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "API-Key": "irrv211vui9kuwn11efsb4xd4zdkuq",
//             },
//           }
//         );
//         const result = await response.json();
//         if (result.status === "success") {
//           const filteredProducts = result.data.filter(
//             (product) => product.origin?.toLowerCase() === "nexigifting"
//           );
//           setProducts(filteredProducts);
//         } else {
//           console.error("Failed to fetch products");
//         }
//       } catch (err) {
//         console.error("Error fetching products", err);
//       }
//     };
//     fetchProducts();
//   }, [token]);

//   const handleCustomizeClick = (product) => {
//     const productDetails = {
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       category: product.category,
//       quantity: 1,
//       image: product.image,
//     };

//     const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
//     const productExists = existingCart.some((item) => item.id === product.id);

//     if (!productExists) {
//       existingCart.push(productDetails);
//     }

//     localStorage.setItem("cart", JSON.stringify(existingCart));
//     window.location.href = `/productsize?pouchId=${product.id}&image=${product.image}`;
//   };
//   useEffect(() => {
//     if (personalizationSwiperRef.current && categoryData) {
//       personalizationSwiperRef.current.swiper.update();
//     }
//   }, [categoryData]);

// const handlePersonalizationPrev = useCallback(() => {
//   if (
//     personalizationSwiperRef.current &&
//     personalizationSwiperRef.current.swiper
//   ) {
//     console.log("Going to previous slide");
//     personalizationSwiperRef.current.swiper.slidePrev();
//   } else {
//     console.log("Swiper instance is not defined");
//   }
// }, []);

// const handlePersonalizationNext = useCallback(() => {
//   if (
//     personalizationSwiperRef.current &&
//     personalizationSwiperRef.current.swiper
//   ) {
//     console.log("Going to next slide");
//     personalizationSwiperRef.current.swiper.slideNext();
//   } else {
//     console.log("Swiper instance is not defined");
//   }
// }, []);

//   const ProductCard = ({ product }) => (
//     <div className="w-full relative h-full pt-12">
//       <div className="bg-[#f9e2b2] rounded-t-3xl rounded-b-[45%] h-64 flex items-center justify-center">
//         <div className="relative w-full h-full mt-8">
//           <Image
//             src={`https://nexiblesapp.barecms.com/uploads/${product.image}`}
//             alt={product.name}
//             layout="fill"
//             objectFit="contain"
//             className="scale-110 transition-transform duration-300 hover:-translate-y-8 hover:scale-115 max-w-[75%] max-h-[83%] mx-auto"
//           />
//         </div>
//       </div>
//       <p className="text-white md:text-[#db5c3c] mt-4 text-center px-4 py-1 rounded-full font-bold text-lg md:text-xl whitespace-nowrap">
//         {product.name}
//       </p>
//       <button
//         onClick={() => handleCustomizeClick(product)}
//         className="bg-[#197d8e] mt-4 mx-auto block text-white px-4 py-1 rounded-full font-bold text-lg md:text-xl whitespace-nowrap mb-4"
//       >
//         Customise
//       </button>
//     </div>
//   );

//   return (
//     <div
//       className="text-white pt-2 relative bg-no-repeat bg-[#4bb2bc] md:bg-transparent"
//       style={{
//         backgroundImage: "none",
//       }}
//     >
//       <div
//         className="hidden md:block absolute inset-0 bg-no-repeat"
//         style={{
//           backgroundImage: "url('/Home/Background.svg')",
//           backgroundSize: "100% 102%",
//           zIndex: -1,
//         }}
//       ></div>

//       <div className="container mx-auto px-8 md:px-12 lg:px-16">
//         <div>
//           <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center text-black md:text-white mt-8 relative z-10">
//             <Image
//               src={Butterflies2}
//               alt="butterflies"
//               width={64}
//               height={64}
//               className="inline-block md:w-20 md:h-20 lg:w-24 lg:h-24 mt-[-3rem]"
//             />
//             {/* Celebrate With Personalization */}
//             Personalise Your Celebration
//           </h2>
//           <p className="text-center md:mb-12 text-base md:text-xl lg:text-xl max-w-4xl mx-auto relative z-10 mt- text-black md:text-white">
//             {/* Make your moments unforgettable with uniquely designed stand-up
//           pouches Crafted just for You! */}
//             {"From design to details, add your personal touch to every pouch."}
//             <Image
//               src={TreeIllustration}
//               alt="butterflies"
//               width={44}
//               height={44}
//               className="inline-block md:w-20 md:h-20 lg:w-24 lg:h-24 md:mt-[-3rem] md:mr-[-10rem]"
//             />
//           </p>
//         </div>

//         <div className="relative z-10 max-w-6xl mx-auto md:mb-12">
//           <div className="relative px-16 md:px-20">
//             <button
//               onClick={handlePersonalizationPrev}
//               className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
//               aria-label="Previous slide"
//             >
//               <Image
//                 src={Butterflies6}
//                 alt="Previous"
//                 width={40}
//                 height={40}
//                 className="hover:scale-110 transition-transform duration-300"
//               />
//             </button>

//             {categoryData && (
//               <Swiper
//                 ref={personalizationSwiperRef}
//                 modules={[Navigation]}
//                 spaceBetween={20} // Default spacing for mobile
//                 slidesPerView={1}
//                 breakpoints={{
//                   640: {
//                     slidesPerView: 2,
//                     spaceBetween: 20,
//                   },
//                   768: {
//                     slidesPerView: 3,
//                     spaceBetween: 15, // Reduced spacing for tablet
//                   },
//                   1024: {
//                     slidesPerView: 4,
//                     spaceBetween: 10, // Further reduced spacing for desktop
//                   },
//                   1280: {
//                     slidesPerView: 5,
//                     spaceBetween: 5, // Minimal spacing for large desktop
//                   },
//                 }}
//                 loop={true}
//               >
//                 {categoryData.map((category, index) => (
//                   <SwiperSlide key={index}>
//                     <Link href={`/category`}>
//                       <div className="text-center w-full relative group pt-4 pb-8">
//                         <div className="h-48 md:h-48 md:w-48 mx-auto flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 transform group-hover:-translate-y-4">
//                           <div className="relative w-full h-[86%]">
//                             <Image
//                               src={`https://nexiblesapp.barecms.com/uploads/${category.bg_Img}`}
//                               alt={category.name}
//                               layout="fill"
//                               objectFit="contain"
//                               className="transition-transform duration-300 group-hover:scale-115"
//                             />
//                           </div>
//                         </div>
//                         <p className="text-[#f9e2b2] md:text-xl lg:text-2xl font-bold mt-2 transition-all duration-300 group-hover:-translate-y-4">
//                           {category.name}
//                         </p>
//                       </div>
//                     </Link>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             )}

//             <button
//               onClick={handlePersonalizationNext}
//               className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
//               aria-label="Next slide"
//             >
//               <Image
//                 src={Butterflies5}
//                 alt="Next"
//                 width={40}
//                 height={40}
//                 className="hover:scale-110 transition-transform duration-300"
//               />
//             </button>
//           </div>
//         </div>

//         <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center text-black md:text-white relative z-10 mb-8">
//           <Image
//             src={FlowerIllustration}
//             alt="flower illustration"
//             width={40}
//             height={40}
//             // className="inline-block mr-2"
//             className="inline-block md:w-30 md:h-30 lg:w-36 lg:h-36"
//           />
//           Popular Products
//           <Image
//             src={Butterflies2}
//             alt="butterflies"
//             width={60}
//             height={60}
//             // className="inline-block ml-2"
//             className="inline-block md:w-20 md:h-20 lg:w-20 lg:h-20 mt-[-3rem]"
//           />
//         </h3>

//         <div className="relative z-10 max-w-7xl mx-auto">
//           <div className="relative px-12 md:px-16">
//             <button
//               onClick={handleProductsPrev}
//               className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
//               aria-label="Previous slide"
//             >
//               <Image
//                 src={Butterflies6}
//                 alt="Previous"
//                 width={50}
//                 height={50}
//                 className="hover:scale-110 transition-transform duration-300"
//               />
//             </button>
//             <Swiper
//               ref={productsSwiperRef}
//               modules={[Navigation]}
//               spaceBetween={20}
//               slidesPerView={1}
//               breakpoints={{
//                 640: { slidesPerView: 2 },
//                 768: { slidesPerView: 3 },
//                 1024: { slidesPerView: 4 },
//                 1280: { slidesPerView: 5 },
//               }}
//               loop={true}
//             >
//               {products.map((product) => (
//                 <SwiperSlide key={product.id}>
//                   <ProductCard product={product} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//             <button
//               onClick={handleProductsNext}
//               className="absolute right-0 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer focus:outline-none"
//               aria-label="Next slide"
//               style={{ display: "block", pointerEvents: "auto" }} // Ensure it can be clicked
//             >
//               <Image
//                 src={Butterflies5}
//                 alt="Next"
//                 width={50}
//                 height={50}
//                 className="hover:scale-110 transition-transform duration-300"
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
