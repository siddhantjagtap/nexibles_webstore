import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Butterflies2 from "../../../public/Home/Butterflies-2.svg";
import HomepageArch3 from "../../../public/Home/Homepage-Arch-3.svg";
import FlowerIllustration from "../../../public/Home/Flower-Illustration.svg";
import Butterflies5 from "../../../public/Home/Butterflies-5.svg";
import Butterflies6 from "../../../public/Home/Butterflies-6.svg";
import useFetchCategories from '../../app/usefetchcategories';
import { useRouter } from 'next/navigation';

export default function Mid() {
  const personalizationSwiperRef = useRef(null);
  const productsSwiperRef = useRef(null);
  const router = useRouter();

  const token = 'irrv211vui9kuwn11efsb4xd4zdkuq';
  const { data: categoryData, loading, error } = useFetchCategories(token);

  const handlePersonalizationPrev = () => {
    if (
      personalizationSwiperRef.current &&
      personalizationSwiperRef.current.swiper
    ) {
      personalizationSwiperRef.current.swiper.slidePrev();
    }
  };

  const handlePersonalizationNext = () => {
    if (
      personalizationSwiperRef.current &&
      personalizationSwiperRef.current.swiper
    ) {
      personalizationSwiperRef.current.swiper.slideNext();
    }
  };

  const handleProductsPrev = () => {
    if (productsSwiperRef.current && productsSwiperRef.current.swiper) {
      productsSwiperRef.current.swiper.slidePrev();
    }
  };

  const handleProductsNext = () => {
    if (productsSwiperRef.current && productsSwiperRef.current.swiper) {
      productsSwiperRef.current.swiper.slideNext();
    }
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://nexiblesapp.barecms.com/api/product/get_list/All', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'API-Key': 'irrv211vui9kuwn11efsb4xd4zdkuq',
          },
        });
        const result = await response.json();
        if (result.status === "success") {
          const filteredProducts = result.data.filter(product =>
            product.origin?.toLowerCase() === 'nexigifting'
          );
          setProducts(filteredProducts);
        } else {
          setError('Failed to fetch products');
        }
      } catch (err) {
        setError('Error fetching products');
      } finally {
        //setLoading(false);
      }
    };

    fetchProducts();
  }, [token]);

  const handleCustomizeClick = (product) => {
    // Prepare product details
    const productDetails = {
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      quantity: 1,
      image: product.image,
    };

    // Retrieve the existing cart from localStorage, or initialize as an empty array
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const productExists = existingCart.some(item => item.id === product.id);

    if (!productExists) {
      // Add the new product to the cart if it doesn't exist
      existingCart.push(productDetails);
    }

    // Save the updated cart array to localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart));

    // Redirect to the product size page with product details in the URL
    window.location.href = `/productsize?pouchId=${product.id}&image=${product.image}`;
  };


  return (
    <div className="text-white pt-2 relative bg-no-repeat" style={{
      backgroundImage: "url('/Home/Background.svg')",
      backgroundSize: "100% 120%",
    }}>
      {/* Homepage-Arch-3 */}
      <div className="absolute end-0 h-full w-auto hidden md:block">
        <Image
          src={HomepageArch3}
          alt="Decorative Arch"
          layout="intrinsic"
          height={650}
          width={650}
          className=""
        />
      </div>

      <h2 className="text-4xl md:text-6xl font-bold text-center text-white mt-8 relative z-10">
        <Image
          src={Butterflies2}
          alt="butterflies"
          layout=""
          width={128}
          height={128}
          className="inline-block"
        />
        Celebrate With Personalization
      </h2>

      <p className="text-center mb-12 text-xl md:text-3xl max-w-6xl mx-auto relative z-10 px-4 md:px-0">
        Make your moments unforgettable with uniquely designed stand-up pouches
        Crafted just for You!
      </p>

      {/* Celebration Icons */}
      <div className="relative z-10 max-w-7xl mx-auto mb-12 px-4 md:px-12 lg:px-0">
        <button
          onClick={handlePersonalizationPrev}
          className="absolute left-0 md:left-[-2rem] lg:left-[-5rem] top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
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
        <Swiper
          ref={personalizationSwiperRef}
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          loop={true}
          className="px-4 sm:px-16"
        >
          {categoryData.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="text-center w-[90%] relative cursor-pointer" onClick={() => router.push(`/category`)} >
                <div className="h-[15rem] sm:h-[20rem] flex items-center justify-center">
                  <div className="relative w-full ml-4 h-full">
                    <Image
                      src={`https://nexiblesapp.barecms.com/uploads/${category.bg_Img}`}
                      alt={category.name}
                      layout="fill"
                      objectFit="contain"
                      className="scale-110 transition-transform duration-300 hover:-translate-y-16 hover:scale-115"
                    />
                  </div>
                </div>
                <p className="text-base sm:text-xl md:text-3xl mt-4 font-bold text-white">
                  {category.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={handlePersonalizationNext}
          className="absolute right-0 md:right-[-2rem] lg:right-[-5rem] top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
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
      <h3 className="text-xl sm:text-3xl md:text-5xl font-bold text-center text-white relative z-10">
        <Image
          src={FlowerIllustration}
          alt="flower illustration"
          width={64}
          height={64}
          className="inline-block"
        />
        Popular Products
        <Image
          src={Butterflies2}
          alt="butterflies"
          width={64}
          height={64}
          className="inline-block mb-[1.5rem] sm:mb-[2rem]"
        />
      </h3>

      {/* Pouches */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 lg:px-0">
        <button
          onClick={handleProductsPrev}
          className="absolute left-0 md:left-[-2rem] lg:left-[-5rem] top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
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
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          loop={true}
          className="px-4 sm:px-16"
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id}>
              <div className="w-[90%] relative h-full pt-12">
                <div className="bg-[#f9e2b2] rounded-t-3xl rounded-b-[50%] h-[20rem] flex items-center justify-center">
                  <div className="relative w-full h-full -mt-6">
                    <Image
                      src={`https://nexiblesapp.barecms.com/uploads/${product.image}`}
                      alt={product.name}
                      layout="fill"
                      objectFit="contain"
                      className="scale-110 transition-transform duration-300 hover:-translate-y-16 hover:scale-115"
                    />
                  </div>
                </div>
                <p className="text-[#db5c3c] mt-8 text-center px-6 py-1 rounded-full font-bold text-xl whitespace-nowrap">
                  {product.name}
                </p>
                {/* <p className="text-[#124e66] text-center">Price: ₹{product.price}</p> */}
                <button
                  onClick={() => handleCustomizeClick(product)}
                  className="bg-[#124e66] mt-4 mx-auto block text-white px-6 py-1 rounded-full font-bold text-xl whitespace-nowrap"
                >
                  Customise
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={handleProductsNext}
          className="absolute right-0 md:right-[-2rem] lg:right-[-5rem] top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
          aria-label="Next slide"
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
  );
}






//old


// import React, { useRef, useState, useEffect } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import pouch1 from "../../../public/Home/pouch-1.png";
// import pouch2 from "../../../public/Home/pouch-2.png";
// import pouch3 from "../../../public/Home/pouch-3.png";
// import pouch4 from "../../../public/Home/pouch-4.png";
// import human from "../../../public/Home/human.png";
// import BirdIllustration from '../../../public/Home/Bird-Illustration.svg';
// import Butterflies2 from "../../../public/Home/Butterflies-2.svg";
// import HomepageArch3 from "../../../public/Home/Homepage-Arch-3.svg";
// import HomepageArch2 from "../../../public/Home/Background-3.svg";
// import FlowerIllustration from "../../../public/Home/Flower-Illustration.svg";
// import Butterflies4 from "../../../public/Home/Butterflies-4.svg";
// import Butterflies3 from "../../../public/Home/Butterflies-3.svg";
// import Butterflies5 from "../../../public/Home/Butterflies-5.svg";
// import Butterflies6 from "../../../public/Home/Butterflies-6.svg";
// import TestinomalImg from "../../../public/Home/TestinomalImg.png";
// import kaju from "../../../public/Home/cashew.png";
// import almonds from "../../../public/Home/almonds.png";
// import pista from "../../../public/Home/pista.png";
// import Diwali_Icon from "../../../public/Homepage/Category Icons/Diwali_Icon.svg";
// import Anniversary from "../../../public/Homepage/Category Icons/Anniversary_Icon.svg";
// import Baby_Shower_Icon from "../../../public/Homepage/Category Icons/Baby_Shower_Icon.svg";
// import Birthday from "../../../public/Homepage/Category Icons/Birthday_Icon.svg";
// import Engagement from "../../../public/Homepage/Category Icons/Engagement_Icon.svg";
// import Graduation from "../../../public/Homepage/Category Icons/Graduation_Icon.svg";
// import New_Beginnings_Icon from "../../../public/Homepage/Category Icons/New_Beginnings_Icon.png";
// import Pet_Birthday_Icon from "../../../public/Homepage/Category Icons/Pet_Birthday_Icon.svg";
// import Wedding_Icon from "../../../public/Homepage/Category Icons/Wedding_Icon.svg";
// import useFetchCategories from '../../app/usefetchcategories';
// export default function Mid() {
//   const personalizationSwiperRef = useRef(null);
//   const productsSwiperRef = useRef(null);
//   const token = 'irrv211vui9kuwn11efsb4xd4zdkuq';

//   // Use the custom hook to fetch category data
//   const { data: categoryData, loading, error } = useFetchCategories(token);

//   const handlePersonalizationPrev = () => {
//     if (
//       personalizationSwiperRef.current &&
//       personalizationSwiperRef.current.swiper
//     ) {
//       personalizationSwiperRef.current.swiper.slidePrev();
//     }
//   };

//   const handlePersonalizationNext = () => {
//     if (
//       personalizationSwiperRef.current &&
//       personalizationSwiperRef.current.swiper
//     ) {
//       personalizationSwiperRef.current.swiper.slideNext();
//     }
//   };

//   const handleProductsPrev = () => {
//     if (productsSwiperRef.current && productsSwiperRef.current.swiper) {
//       productsSwiperRef.current.swiper.slidePrev();
//     }
//   };

//   const handleProductsNext = () => {
//     if (productsSwiperRef.current && productsSwiperRef.current.swiper) {
//       productsSwiperRef.current.swiper.slideNext();
//     }
//   };

//   const pouches = [
//     { name: "Pouch 1", image: pouch1 },
//     { name: "Pouch 2", image: pouch2 },
//     { name: "Pouch 3", image: pouch3 },
//     { name: "Pouch 4", image: pouch4 },
//     { name: "Pouch 1", image: pouch1 },
//     { name: "Pouch 2", image: pouch2 },
//     { name: "Pouch 3", image: pouch3 },
//     { name: "Pouch 4", image: pouch4 },
//     { name: "Pouch 1", image: pouch1 },
//     { name: "Pouch 2", image: pouch2 },
//     { name: "Pouch 3", image: pouch3 },
//     { name: "Pouch 4", image: pouch4 },
//   ];

//   const celebrationCards = [
//     { name: "Diwali", image: TestinomalImg },
//     { name: "Birthday", image: TestinomalImg },
//     { name: "Wedding", image: TestinomalImg },
//     { name: "Find your Celebration", image: TestinomalImg },
//   ];

//   return (
//     <div className=" text-white pt-2 relative bg-no-repeat" style={{
//       backgroundImage: "url('/Home/Background.svg')",
//       backgroundSize: "100% 120%",
//     }}>
//       {/* Homepage-Arch-3 */}
//       <div className="absolute end-0 h-full w-auto hidden md:block">
//         <Image
//           src={HomepageArch3}
//           alt="Decorative Arch"
//           layout="intrinsic"
//           height={650}
//           width={650}
//           className=""
//         />
//       </div>

//       <h2 className="text-4xl md:text-6xl font-bold text-center text-white mt-8 relative z-10">
//         <Image
//           src={Butterflies2}
//           alt="butterflies"
//           layout=""
//           width={128}
//           height={128}
//           className="inline-block"
//         />
//         Celebrate With Personalization
//       </h2>

//       <p className="text-center mb-12 text-xl md:text-3xl max-w-6xl mx-auto relative z-10 px-4 md:px-0">
//         Make your moments unforgettable with uniquely designed stand-up pouches
//         Crafted just for You!
//       </p>

//       {/* Celebration Icons */}
//       <div className="relative z-10 max-w-7xl mx-auto mb-12">
//         <button
//           onClick={handlePersonalizationPrev}
//           className="absolute left-[-2rem] sm:left-[-5rem] top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
//           aria-label="Previous slide"
//         >
//           <Image
//             src={Butterflies6}
//             alt="Previous"
//             width={40} // Adjust size for smaller screens
//             height={40}
//             className="hover:scale-110 transition-transform duration-300"
//           />
//         </button>
//         <Swiper
//           ref={personalizationSwiperRef}
//           modules={[Navigation]}
//           spaceBetween={10}
//           slidesPerView={1} // Adjust for mobile views
//           breakpoints={{
//             640: { slidesPerView: 3 }, // Small screens (tablet)
//             768: { slidesPerView: 4 }, // Medium screens
//             1024: { slidesPerView: 5 }, // Large screens
//           }}
//           loop={true}
//           className="px-4 sm:px-16"
//         >
//           {categoryData.map((category, index) => (
//             <SwiperSlide key={index}>
//               <div className="text-center w-[90%] relative">
//                 <div className="h-[15rem] sm:h-[20rem] flex items-center justify-center">
//                   <div className="relative w-full h-full">
//                     <Image
//                       src={`https://nexiblesapp.barecms.com/uploads/${category.bg_Img}`}
//                       alt={category.name}
//                       layout="fill"
//                       objectFit="contain"
//                       className="scale-110 transition-transform duration-300 hover:-translate-y-16 hover:scale-115"
//                     />
//                   </div>
//                 </div>
//                 <p className="text-base sm:text-xl md:text-3xl mt-4 font-bold text-white">
//                   {category.name}
//                 </p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <button
//           onClick={handlePersonalizationNext}
//           className="absolute right-[-2rem] sm:right-[-5rem] top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
//           aria-label="Next slide"
//         >
//           <Image
//             src={Butterflies5}
//             alt="Next"
//             width={40} // Adjust size for smaller screens
//             height={40}
//             className="hover:scale-110 transition-transform duration-300"
//           />
//         </button>
//       </div>
//       <h3 className="text-xl sm:text-3xl md:text-5xl font-bold text-center text-white relative z-10">
//         <Image
//           src={FlowerIllustration}
//           alt="flower illustration"
//           width={64} // Smaller size for mobile
//           height={64}
//           className="inline-block"
//         />
//         Popular Products
//         <Image
//           src={Butterflies2}
//           alt="butterflies"
//           width={64} // Smaller size for mobile
//           height={64}
//           className="inline-block mb-[1.5rem] sm:mb-[2rem]"
//         />
//       </h3>

//       {/* Pouches */}
//       <div className="relative z-10 max-w-7xl mx-auto">
//         <button
//           onClick={handleProductsPrev}
//           className="absolute left-[-5rem] top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
//           aria-label="Previous slide"
//         >
//           <Image
//             src={Butterflies6}
//             alt="Previous"
//             width={50}
//             height={50}
//             className="hover:scale-110 transition-transform duration-300"
//           />
//         </button>
//         <Swiper
//           ref={productsSwiperRef}
//           modules={[Navigation]}
//           spaceBetween={10}
//           slidesPerView={5}
//           loop={true}
//           className="px-16"
//         >
//           {pouches.map((pouch, index) => (
//             <SwiperSlide key={index}>
//               <div className="w-[90%] relative h-full pt-12">
//                 <div className="bg-[#f9e2b2] rounded-t-3xl rounded-b-[50%] h-[20rem]  flex items-center justify-center">
//                   <div className="relative w-full h-full -mt-6">
//                     <Image
//                       src={pouch.image}
//                       alt={pouch.name}
//                       layout="fill"
//                       objectFit="contain"
//                       className="scale-110 transition-transform duration-300 hover:-translate-y-16 hover:scale-115"
//                     />
//                   </div>
//                 </div>
//                 <p className="text-[#db5c3c] mt-8 ml-[5.5rem]  px-6 py-1 rounded-full font-bold text-xl bottom-[-4rem] left-1/2 transform -translate-x-1/2 whitespace-nowrap">
//                   Product Name
//                 </p>
//                 <button className="bg-[#124e66] mt-4 ml-[7.6rem] text-white px-6 py-1 rounded-full font-bold text-xl bottom-[-4rem] left-1/2 transform -translate-x-1/2 whitespace-nowrap">
//                   Customise
//                 </button>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <button
//           onClick={handleProductsNext}
//           className="absolute right-[-5rem] top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
//           aria-label="Next slide"
//         >
//           <Image
//             src={Butterflies5}
//             alt="Next"
//             width={50}
//             height={50}
//             className="hover:scale-110  transition-transform duration-300"
//           />
//         </button>
//       </div>
//     </div>
//   );
// }
