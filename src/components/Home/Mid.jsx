import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Butterflies2 from "../../../public/Home/Butterflies-2.svg";
import FlowerIllustration from "../../../public/Home/Flower-Illustration.svg";
import Butterflies5 from "../../../public/Home/Butterflies-5.svg";
import Butterflies6 from "../../../public/Home/Butterflies-6.svg";
import useFetchCategories from "../../app/usefetchcategories";

export default function Mid() {
  const personalizationSwiperRef = useRef(null);
  const productsSwiperRef = useRef(null);
  const token = "irrv211vui9kuwn11efsb4xd4zdkuq";
  const { data: categoryData, loading, error } = useFetchCategories(token);
  const [products, setProducts] = useState([]);

  // const handlePersonalizationPrev = useCallback(() => {
  //   if (
  //     personalizationSwiperRef.current &&
  //     personalizationSwiperRef.current.swiper
  //   ) {
  //     personalizationSwiperRef.current.swiper.slidePrev();
  //   }
  // }, []);

  // const handlePersonalizationNext = useCallback(() => {
  //   if (
  //     personalizationSwiperRef.current &&
  //     personalizationSwiperRef.current.swiper
  //   ) {
  //     personalizationSwiperRef.current.swiper.slideNext();
  //   }
  // }, []);

  const handleProductsPrev = useCallback(() => {
    if (productsSwiperRef.current && productsSwiperRef.current.swiper) {
      productsSwiperRef.current.swiper.slidePrev();
    }
  }, []);

  const handleProductsNext = useCallback(() => {
    if (productsSwiperRef.current && productsSwiperRef.current.swiper) {
      productsSwiperRef.current.swiper.slideNext();
    }
  }, []);

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
            (product) => product.origin?.toLowerCase() === "nexigifting"
          );
          setProducts(filteredProducts);
        } else {
          console.error("Failed to fetch products");
        }
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };
    fetchProducts();
  }, [token]);

  const handleCustomizeClick = (product) => {
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
  useEffect(() => {
    if (personalizationSwiperRef.current && categoryData) {
      personalizationSwiperRef.current.swiper.update();
    }
  }, [categoryData]);

  const handlePersonalizationPrev = useCallback(() => {
    if (
      personalizationSwiperRef.current &&
      personalizationSwiperRef.current.swiper
    ) {
      personalizationSwiperRef.current.swiper.slidePrev();
    }
  }, []);

  const handlePersonalizationNext = useCallback(() => {
    if (
      personalizationSwiperRef.current &&
      personalizationSwiperRef.current.swiper
    ) {
      personalizationSwiperRef.current.swiper.slideNext();
    }
  }, []);

  const ProductCard = ({ product }) => (
      <div className="w-full relative h-full pt-12">
      <div className="bg-[#f9e2b2] rounded-t-3xl rounded-b-[45%] h-64 flex items-center justify-center">
        <div className="relative w-full h-full mt-8">
          <Image
            src={`https://nexiblesapp.barecms.com/uploads/${product.image}`}
            alt={product.name}
            layout="fill"
            objectFit="contain"
            className="scale-110 transition-transform duration-300 hover:-translate-y-8 hover:scale-115 max-w-[75%] max-h-[83%] mx-auto"
          />
        </div>
      </div>
      <p className="text-white md:text-[#db5c3c] mt-4 text-center px-4 py-1 rounded-full font-bold text-lg md:text-xl whitespace-nowrap">
        {product.name}
      </p>
      <button
        onClick={() => handleCustomizeClick(product)}
        className="bg-[#124e66] mt-4 mx-auto block text-white px-4 py-1 rounded-full font-bold text-lg md:text-xl whitespace-nowrap mb-4"
      >
        Customise
      </button>
    </div>
  );

  return (
    // <div className="text-white pt-2 relative bg-[url('/Contact_Us_Page/Contact_Us_Background.jpg')] md:bg-[url('/Home/Background.svg')] bg-cover bg-center min-h-screen">
    // <div
    //   className=" text-white pt-2 relative bg-no-repeat"
    //   style={{
    //     backgroundImage: "url('/Home/Background.svg')",
    //     backgroundSize: "100% 115%",
    //   }}
    // >
    <div
      className="text-white pt-2 relative bg-no-repeat bg-[#4bb2bc] md:bg-transparent"
      style={{
        backgroundImage: "none",
      }}
    >
      <div
        className="hidden md:block absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/Home/Background.svg')",
          backgroundSize: "100% 115%",
          zIndex: -1,
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-black md:text-white mt-8 relative z-10">
          <Image
            src={Butterflies2}
            alt="butterflies"
            width={64}
            height={64}
            className="inline-block md:w-20 md:h-20 lg:w-24 lg:h-24"
          />
          Celebrate With Personalization
        </h2>
        <p className="text-center md:mb-12 text-lg md:text-2xl lg:text-3xl max-w-4xl mx-auto relative z-10 mt-4 text-black md:text-white">
          Make your moments unforgettable with uniquely designed stand-up
          pouches Crafted just for You!
        </p>

        <div className="relative z-10 max-w-7xl mx-auto md:mb-12">
          <div className="relative px-12 md:px-16">
            <button
              onClick={handlePersonalizationPrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
              aria-label="Previous slide"
            >
              <Image
                src={Butterflies6}
                alt="Previous"
                width={40}
                height={40}
                className="hover:scale-110 transition-transform duration-300"
              />
            </button>

            {/* Swiper Configuration */}
            {categoryData && (
              <Swiper
                ref={personalizationSwiperRef}
                modules={[Navigation]} // Use the same modules as 'Popular Products'
                spaceBetween={20} // Same spacing as 'Popular Products'
                slidesPerView={1} // Same logic for responsiveness
                breakpoints={{
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                  1280: { slidesPerView: 5 },
                }}
                loop={true} // Enable looping just like 'Popular Products'
              >
                {categoryData.map((category, index) => (
                  <SwiperSlide key={index}>
                    <div className="text-center w-full relative group pt-4 pb-8">
                      <div className="h-48 md:h-48 md:w-48 mx-auto flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 transform group-hover:-translate-y-4">
                        <div className="relative w-full h-full">
                          <Image
                            src={`https://nexiblesapp.barecms.com/uploads/${category.bg_Img}`}
                            alt={category.name}
                            layout="fill"
                            objectFit="contain"
                            className="transition-transform duration-300 group-hover:scale-115"
                          />
                        </div>
                      </div>
                      <p className="text-base md:text-xl lg:text-2xl font-bold text-white mt-2 transition-all duration-300 group-hover:-translate-y-4">
                        {category.name}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

            <button
              onClick={handlePersonalizationNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
              aria-label="Next slide"
            >
              <Image
                src={Butterflies5}
                alt="Next"
                width={40}
                height={40}
                className="hover:scale-110 transition-transform duration-300"
              />
            </button>
          </div>
        </div>

        <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black md:text-white relative z-10 mb-8">
          <Image
            src={FlowerIllustration}
            alt="flower illustration"
            width={40}
            height={40}
            // className="inline-block mr-2"
            className="inline-block md:w-30 md:h-30 lg:w-36 lg:h-36"
          />
          Popular Products
          <Image
            src={Butterflies2}
            alt="butterflies"
            width={60}
            height={60}
            className="inline-block ml-2"
          />
        </h3>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="relative px-12 md:px-16">
            <button
              onClick={handleProductsPrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
              aria-label="Previous slide"
            >
              <Image
                src={Butterflies6}
                alt="Previous"
                width={50}
                height={50}
                className="hover:scale-110 transition-transform duration-300"
              />
            </button>
            <Swiper
              ref={productsSwiperRef}
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 },
              }}
              loop={true}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              onClick={handleProductsNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer focus:outline-none"
              aria-label="Next slide"
              style={{ display: "block", pointerEvents: "auto" }} // Ensure it can be clicked
            >
              <Image
                src={Butterflies5}
                alt="Next"
                width={50}
                height={50}
                className="hover:scale-110 transition-transform duration-300"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


// working code

// import React, { useRef, useState, useEffect, useCallback } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import Butterflies2 from "../../../public/Home/Butterflies-2.svg";
// import FlowerIllustration from "../../../public/Home/Flower-Illustration.svg";
// import Butterflies5 from "../../../public/Home/Butterflies-5.svg";
// import Butterflies6 from "../../../public/Home/Butterflies-6.svg";
// import useFetchCategories from "../../app/usefetchcategories";

// export default function Mid() {
//   const personalizationSwiperRef = useRef(null);
//   const productsSwiperRef = useRef(null);
//   const token = "irrv211vui9kuwn11efsb4xd4zdkuq";
//   const { data: categoryData, loading, error } = useFetchCategories(token);
//   const [products, setProducts] = useState([]);

//   const handlePersonalizationPrev = useCallback(() => {
//     if (
//       personalizationSwiperRef.current &&
//       personalizationSwiperRef.current.swiper
//     ) {
//       personalizationSwiperRef.current.swiper.slidePrev();
//     }
//   }, []);

//   const handlePersonalizationNext = useCallback(() => {
//     if (
//       personalizationSwiperRef.current &&
//       personalizationSwiperRef.current.swiper
//     ) {
//       personalizationSwiperRef.current.swiper.slideNext();
//     }
//   }, []);

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

//   const ProductCard = ({ product }) => (
//     <div className="w-full relative h-full pt-12">
//       <div className="bg-[#f9e2b2] rounded-t-3xl rounded-b-[50%] h-64 flex items-center justify-center">
//         <div className="relative w-full h-full -mt-6">
//           <Image
//             src={`https://nexiblesapp.barecms.com/uploads/${product.image}`}
//             alt={product.name}
//             layout="fill"
//             objectFit="contain"
//             className="scale-110 transition-transform duration-300 hover:-translate-y-4 hover:scale-115"
//           />
//         </div>
//       </div>
//       <p className="text-[#db5c3c] mt-4 text-center px-4 py-1 rounded-full font-bold text-lg md:text-xl whitespace-nowrap">
//         {product.name}
//       </p>
//       <button
//         onClick={() => handleCustomizeClick(product)}
//         className="bg-[#124e66] mt-4 mx-auto block text-white px-4 py-1 rounded-full font-bold text-lg md:text-xl whitespace-nowrap"
//       >
//         Customise
//       </button>
//     </div>
//   );

//   return (
//     <div className="text-white pt-2 relative bg-[url('/Contact_Us_Page/Contact_Us_Background.jpg')] md:bg-[url('/Home/Background.svg')] bg-cover bg-center min-h-screen">
//       <div className="container mx-auto px-4 md:px-6 lg:px-8">
//         <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-black md:text-white mt-8 relative z-10">
//           <Image
//             src={Butterflies2}
//             alt="butterflies"
//             width={64}
//             height={64}
//             className="inline-block md:w-20 md:h-20 lg:w-24 lg:h-24"
//           />
//           Celebrate With Personalization
//         </h2>
//         <p className="text-center md:mb-12 text-lg md:text-2xl lg:text-3xl max-w-4xl mx-auto relative z-10 mt-4 text-black md:text-white">
//           Make your moments unforgettable with uniquely designed stand-up
//           pouches Crafted just for You!
//         </p>

//         <div className="relative z-10 max-w-7xl mx-auto mb-12">
//           <div className="relative px-12 md:px-16">
//             <button
//               onClick={handlePersonalizationPrev}
//               className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
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
//             <Swiper
//               ref={personalizationSwiperRef}
//               modules={[Navigation]}
//               spaceBetween={10}
//               slidesPerView={1}
//               breakpoints={{
//                 640: { slidesPerView: 2 },
//                 768: { slidesPerView: 3 },
//                 1024: { slidesPerView: 4 },
//                 1280: { slidesPerView: 5 },
//               }}
//               loop={true}
//             >
//               {categoryData.map((category, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="text-center w-full relative">
//                     <div className="h-48 md:h-64 flex items-center justify-center rounded-full overflow-hidden">
//                       <div className="relative w-full h-full">
//                         <Image
//                           src={`https://nexiblesapp.barecms.com/uploads/${category.bg_Img}`}
//                           alt={category.name}
//                           layout="fill"
//                           objectFit="contain"
//                           className="scale-110 transition-transform duration-300 hover:-translate-y-4 hover:scale-115"
//                         />
//                       </div>
//                     </div>
//                     <p className="text-base md:text-xl lg:text-2xl font-bold text-white mt-2">
//                       {category.name}
//                     </p>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//             <button
//               onClick={handlePersonalizationNext}
//               className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
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

//         <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white relative z-10 mb-8">
//           <Image
//             src={FlowerIllustration}
//             alt="flower illustration"
//             width={48}
//             height={48}
//             className="inline-block mr-2"
//           />
//           Popular Products
//           <Image
//             src={Butterflies2}
//             alt="butterflies"
//             width={48}
//             height={48}
//             className="inline-block ml-2"
//           />
//         </h3>

//         <div className="relative z-10 max-w-7xl mx-auto">
//           <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {products.slice(0, 4).map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//           <div className="hidden md:block relative">
//             <div className="relative px-12 md:px-16">
//               <button
//                 onClick={handleProductsPrev}
//                 className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
//                 aria-label="Previous slide"
//               >
//                 <Image
//                   src={Butterflies6}
//                   alt="Previous"
//                   width={50}
//                   height={50}
//                   className="hover:scale-110 transition-transform duration-300"
//                 />
//               </button>
//               <Swiper
//                 ref={productsSwiperRef}
//                 modules={[Navigation]}
//                 spaceBetween={20}
//                 slidesPerView={1}
//                 breakpoints={{
//                   768: { slidesPerView: 3 },
//                   1024: { slidesPerView: 4 },
//                   1280: { slidesPerView: 5 },
//                 }}
//                 loop={true}
//               >
//                 {products.map((product) => (
//                   <SwiperSlide key={product.id}>
//                     <ProductCard product={product} />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//               <button
//                 onClick={handleProductsNext}
//                 className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
//                 aria-label="Next slide"
//               >
//                 <Image
//                   src={Butterflies5}
//                   alt="Next"
//                   width={50}
//                   height={50}
//                   className="hover:scale-110 transition-transform duration-300"
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
