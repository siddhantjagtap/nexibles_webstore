"use client";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Butterflies2 from "../../../public/Home/Butterflies-2.svg";
import TreeIllustration from "../../../public/Home/Tree Illustration.svg";
import FlowerIllustration from "../../../public/Home/Flower-Illustration.svg";
import Butterflies5 from "../../../public/Home/Butterflies-5.svg";
import Butterflies6 from "../../../public/Home/Butterflies-6.svg";
import useFetchCategories from "../../app/usefetchcategories";

// Category Carousel - Shows 5 items
const CategoryCarousel = ({ items = [], renderItem }) => {
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
    return 5; // Maximum 5 items for categories
  }, [windowWidth]);

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
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 hover:scale-110 transition-transform duration-300 "
          />
        </button>
      )}

      <div className="flex  transition-transform duration-300 ease-in-out">
        {getVisibleItems().map((item, index) => (
          <div
            key={`${item.id || index}`}
            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/5"
          >
            {renderItem(item)}
          </div>
        ))}
      </div>

      {validItems.length > responsiveSlidesToShow && (
        <button
          onClick={next}
          className="absolute right-0 sm:right-2 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
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

// Product Carousel - Shows 6 items with full width
const ProductCarousel = ({ items = [], renderItem }) => {
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
    return 6; // Maximum 6 items for products
  }, [windowWidth]);

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
    <div className="relative px-2 sm:px-4 md:px-6 lg:px-4">
      {validItems.length > responsiveSlidesToShow && (
        <button
          onClick={prev}
          className="absolute left-[-1rem] sm:left-[-2rem] md:left-[-2rem] top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
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
      <div className="flex gap-1 transition-transform duration-300 ease-in-out">
        {getVisibleItems().map((item, index) => (
          <div
            key={`${item.id || index}`}
            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/6"
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
      {validItems.length > responsiveSlidesToShow && (
        <button
          onClick={next}
          className="absolute right-[-1rem] sm:right-[-2rem] md:right-[-3rem] top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
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

  // return (
  //   <div className="relative px-2 sm:px-4 md:px-6 lg:px-4">
  //     {" "}
  //     {/* Reduced padding for products */}
  //     {validItems.length > responsiveSlidesToShow && (
  //       <button
  //         onClick={prev}
  //         className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
  //         aria-label="Previous"
  //       >
  //         <Image
  //           src={Butterflies6}
  //           alt="Previous"
  //           width={40}
  //           height={40}
  //           className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 hover:scale-110 transition-transform duration-300 mr-[15rem]"
  //         />
  //       </button>
  //     )}
  //     <div className="flex gap-1 transition-transform duration-300 ease-in-out">
  //       {" "}
  //       {/* Reduced gap for products */}
  //       {getVisibleItems().map((item, index) => (
  //         <div
  //           key={`${item.id || index}`}
  //           className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/6"
  //         >
  //           {renderItem(item)}
  //         </div>
  //       ))}
  //     </div>
  //     {validItems.length > responsiveSlidesToShow && (
  //       <button
  //         onClick={next}
  //         className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
  //         aria-label="Next"
  //       >
  //         <Image
  //           src={Butterflies5}
  //           alt="Next"
  //           width={40}
  //           height={40}
  //           className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 hover:scale-110 transition-transform duration-300"
  //         />
  //       </button>
  //     )}
  //   </div>
  // );
};


export default function Mid() {
  const token = "irrv211vui9kuwn11efsb4xd4zdkuq";
  const { data: categoryData, loading, error } = useFetchCategories(token);
  const [products, setProducts] = useState([]);
  const allowedProducts = [
    "Safar",
    "Shaadi",
    "Bone Appetit",
    "Bark Bash",
    "Aangan",
    "Utsav",
    "Party On",
    "Cake Pop",
    "Giggles",
    "Berry Baby"
  ];
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
              product &&
              product.origin?.toLowerCase() === "nexigifting" &&
              allowedProducts.includes(product.name)
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
    const formattedImage = encodeURIComponent(product.image);
    window.location.href = `/productsize?pouchId=${product.id}&image=${formattedImage}`;
  };

  const renderCategory = (category) => {
    if (!category || !category.bg_Img || !category.name) return null;

    return (
      <Link href="/category">
        <div className="text-center w-full relative group pt-2 sm:pt-4 pb-4 sm:pb-8">
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
          className="bg-[#197d8e] text-sm sm:text-base md:text-pt-18 font-gotham-rounded-bold mt-2 sm:mt-4 mx-auto block text-white px-3 sm:px-4 py-1 rounded-full whitespace-nowrap mb-2 sm:mb-4"
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

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Personalise Your Celebration Section */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-4 sm:mt-6 md:mt-8 relative z-10 space-x-0 md:space-x-6">
          {/* Heading and Paragraph Container */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="font-gotham-bold text-xl sm:text-2xl md:text-pt-30 text-black md:text-white relative">
              <Image
                src={Butterflies2}
                alt="butterflies"
                width={64}
                height={64}
                className="inline-block w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mt-[-2rem] sm:mt-[-2.5rem] md:mt-[-3rem]"
              />
              Personalise Your Celebration
            </h2>
            <p className="md:mb-12 text-sm sm:text-base md:text-xl lg:text-xl max-w-4xl mx-auto relative text-black md:text-white md:ml-[5rem]">
              From design to details, add your personal touch to every pouch.
            </p>
          </div>

          {/* Tree Illustration */}
          <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-6">
            <Image
              src={TreeIllustration}
              alt="tree illustration"
              width={44}
              height={44}
              className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 md:mt-[-4rem]"
            />
          </div>
        </div>

        {/* Categories Section */}
        <div className="relative z-10 max-w-5xl mx-auto md:mb-12">
          {categoryData && categoryData.length > 0 && (
            <CategoryCarousel
              items={categoryData}
              renderItem={renderCategory}
            />
          )}
        </div>

        {/* Popular Products Section */}
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

        {/* Products Section */}
        <div className="relative z-10 w-full mx-auto">
          {products.length > 0 && (
            <ProductCarousel items={products} renderItem={renderProduct} />
          )}
        </div>
      </div>
    </div>
  );
}

// in this code that butterfly of next overlap with card i want to shift that butterfly more to right side so that cannot overlap with product card in product..



// //old one final

// "use client";
// import React, { useState, useCallback, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Butterflies2 from "../../../public/Home/Butterflies-2.svg";
// import TreeIllustration from "../../../public/Home/Tree Illustration.svg";
// import FlowerIllustration from "../../../public/Home/Flower-Illustration.svg";
// import Butterflies5 from "../../../public/Home/Butterflies-5.svg";
// import Butterflies6 from "../../../public/Home/Butterflies-6.svg";
// import useFetchCategories from "../../app/usefetchcategories";

// const CustomCarousel = ({ items = [], renderItem, slidesToShow = 5 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [windowWidth, setWindowWidth] = useState(0);
//   const validItems = items.filter((item) => item && typeof item === "object");

//   useEffect(() => {
//     setWindowWidth(window.innerWidth);
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const getResponsiveSlidesToShow = useCallback(() => {
//     if (windowWidth < 640) return 1;
//     if (windowWidth < 768) return 2;
//     if (windowWidth < 1024) return 3;
//     if (windowWidth < 1280) return 4;
//     return slidesToShow;
//   }, [windowWidth, slidesToShow]);

//   const next = useCallback(() => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % validItems.length);
//   }, [validItems.length]);

//   const prev = useCallback(() => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? validItems.length - 1 : prevIndex - 1
//     );
//   }, [validItems.length]);

//   const getVisibleItems = useCallback(() => {
//     if (!validItems.length) return [];
//     const visibleItems = [];
//     const responsiveSlidesToShow = getResponsiveSlidesToShow();
//     const numItemsToShow = Math.min(responsiveSlidesToShow, validItems.length);

//     for (let i = 0; i < numItemsToShow; i++) {
//       const index = (currentIndex + i) % validItems.length;
//       visibleItems.push(validItems[index]);
//     }
//     return visibleItems;
//   }, [currentIndex, validItems, getResponsiveSlidesToShow]);

//   if (!validItems.length) return null;

//   const responsiveSlidesToShow = getResponsiveSlidesToShow();

//   return (
//     <div className="relative px-4 sm:px-8 md:px-16 lg:px-20">
//       {validItems.length > responsiveSlidesToShow && (
//         <button
//           onClick={prev}
//           className="absolute left-0 sm:left-2 md:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
//           aria-label="Previous"
//         >
//           <Image
//             src={Butterflies6}
//             alt="Previous"
//             width={40}
//             height={40}
//             className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 hover:scale-110 transition-transform duration-300"
//           />
//         </button>
//       )}

//       <div className="flex gap-2  transition-transform duration-300 ease-in-out">
//         {getVisibleItems().map((item, index) => (
//           <div
//             key={`${item.id || index}`}
//             className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
//           >
//             {renderItem(item)}
//           </div>
//         ))}
//       </div>

//       {validItems.length > responsiveSlidesToShow && (
//         <button
//           onClick={next}
//           className="absolute right-0 sm:right-2 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
//           aria-label="Next"
//         >
//           <Image
//             src={Butterflies5}
//             alt="Next"
//             width={40}
//             height={40}
//             className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 hover:scale-110 transition-transform duration-300"
//           />
//         </button>
//       )}
//     </div>
//   );
// };

// export default function Mid() {
//   const token = "irrv211vui9kuwn11efsb4xd4zdkuq";
//   const { data: categoryData, loading, error } = useFetchCategories(token);
//   const [products, setProducts] = useState([]);

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
//             (product) =>
//               product && product.origin?.toLowerCase() === "nexigifting"
//           );
//           setProducts(filteredProducts);
//         }
//       } catch (err) {
//         console.error("Error fetching products", err);
//       }
//     };
//     fetchProducts();
//   }, [token]);

//   const handleCustomizeClick = (product) => {
//     if (!product) return;

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

//   const renderCategory = (category) => {
//     if (!category || !category.bg_Img || !category.name) return null;

//     return (
//       <Link href="/category">
//         <div className="text-center w-full relative group pt-2 sm:pt-4 pb-4 sm:pb-8">
//           <div className="h-32 sm:h-40 md:h-48 w-32 sm:w-40 md:w-48 mx-auto flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 transform group-hover:-translate-y-4">
//             <div className="relative w-full h-[86%]">
//               <Image
//                 src={`https://nexiblesapp.barecms.com/uploads/${category.bg_Img}`}
//                 alt={category.name}
//                 layout="fill"
//                 objectFit="contain"
//                 className="transition-transform duration-300 group-hover:scale-115"
//                 onError={(e) => {
//                   e.target.src = "/placeholder-image.jpg";
//                 }}
//               />
//             </div>
//           </div>
//           <p className="text-[#f9e2b2] text-sm sm:text-base md:text-xl lg:text-2xl font-bold mt-2 transition-all duration-300 group-hover:-translate-y-4">
//             {category.name}
//           </p>
//         </div>
//       </Link>
//     );
//   };

//   const renderProduct = (product) => {
//     if (!product || !product.image || !product.name) return null;

//     return (
//       <div className="w-full relative h-full pt-6 sm:pt-8 md:pt-12">
//         <div className="bg-[#f9e2b2] rounded-t-3xl rounded-b-[45%] h-40 sm:h-48 md:h-64 flex items-center justify-center">
//           <div className="relative w-full h-full mt-4 sm:mt-6 md:mt-8">
//             <Image
//               src={`https://nexiblesapp.barecms.com/uploads/${product.image}`}
//               alt={product.name}
//               layout="fill"
//               objectFit="contain"
//               className="scale-110 transition-transform duration-300 hover:-translate-y-8 hover:scale-115 max-w-[75%] max-h-[83%] mx-auto"
//               onError={(e) => {
//                 e.target.src = "/placeholder-image.jpg";
//               }}
//             />
//           </div>
//         </div>
//         <p className="text-[#db5c3c] font-gotham-medium text-sm sm:text-base md:text-pt-20 mt-2 sm:mt-4 text-center px-2 sm:px-4 py-1 whitespace-nowrap overflow-hidden text-ellipsis">
//           {product.name}
//         </p>
//         <button
//           onClick={() => handleCustomizeClick(product)}
//           className="bg-[#197d8e] text-sm sm:text-base md:text-pt-18 font-gotham-rounded-bold mt-2 sm:mt-4 mx-auto block text-white px-3 sm:px-4 py-1 rounded-full whitespace-nowrap mb-2 sm:mb-4"
//         >
//           Customise
//         </button>
//       </div>
//     );
//   };

//   return (
//     <div className="text-white pt-2 relative bg-no-repeat bg-[#197d8e] md:bg-transparent">
//       <div
//         className="hidden md:block absolute inset-0 bg-no-repeat"
//         style={{
//           backgroundImage: "url('/Home/Background.svg')",
//           backgroundSize: "100% 102%",
//           zIndex: -1,
//         }}
//       />

//       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
//         <div>
//           <h2 className="font-gotham-bold text-xl sm:text-2xl md:text-pt-30 text-center text-black md:text-white mt-4 sm:mt-6 md:mt-8 relative z-10">
//             <Image
//               src={Butterflies2}
//               alt="butterflies"
//               width={64}
//               height={64}
//               className="inline-block w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mt-[-2rem] sm:mt-[-2.5rem] md:mt-[-3rem]"
//             />
//             Personalise Your Celebration
//           </h2>
//           <p className="text-center md:mb-12 text-sm sm:text-base md:text-xl lg:text-xl max-w-4xl mx-auto relative z-10 text-black md:text-white">
//             From design to details, add your personal touch to every pouch.
//             <Image
//               src={TreeIllustration}
//               alt="butterflies"
//               width={44}
//               height={44}
//               className="inline-block w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 md:mt-[-3rem] md:mr-[-10rem]"
//             />
//           </p>
//         </div>

//         <div className="relative z-10 max-w-6xl mx-auto md:mb-12">
//           {categoryData && categoryData.length > 0 && (
//             <CustomCarousel
//               items={categoryData}
//               renderItem={renderCategory}
//               slidesToShow={5}
//               variant="default"
//             />
//           )}
//         </div>

//         <h3 className="font-gotham-bold text-lg sm:text-xl md:text-pt-23 text-center text-black md:text-white relative z-10 mb-4 sm:mb-6 md:mb-8">
//           <Image
//             src={FlowerIllustration}
//             alt="flower illustration"
//             width={40}
//             height={40}
//             className="inline-block w-8 h-8 sm:w-12 sm:h-12 md:w-30 md:h-30 lg:w-36 lg:h-36"
//           />
//           Popular Products
//           <Image
//             src={Butterflies2}
//             alt="butterflies"
//             width={60}
//             height={60}
//             className="inline-block w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-20 lg:h-20 mt-[-2rem] sm:mt-[-2.5rem] md:mt-[-3rem]"
//           />
//         </h3>

//         <div className="relative z-10 max-w-7xl mx-auto">
//           {products.length > 0 && (
//             <CustomCarousel
//               items={products}
//               renderItem={renderProduct}
//               slidesToShow={5}
//               variant="products"
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// //old one

// "use client";
// import React, { useState, useCallback, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Butterflies2 from "../../../public/Home/Butterflies-2.svg";
// import TreeIllustration from "../../../public/Home/Tree Illustration.svg";
// import FlowerIllustration from "../../../public/Home/Flower-Illustration.svg";
// import Butterflies5 from "../../../public/Home/Butterflies-5.svg";
// import Butterflies6 from "../../../public/Home/Butterflies-6.svg";
// import useFetchCategories from "../../app/usefetchcategories";

// const CustomCarousel = ({ items = [], renderItem, slidesToShow = 5 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [windowWidth, setWindowWidth] = useState(0);
//   const validItems = items.filter((item) => item && typeof item === "object");

//   useEffect(() => {
//     setWindowWidth(window.innerWidth);
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const getResponsiveSlidesToShow = useCallback(() => {
//     if (windowWidth < 640) return 1;
//     if (windowWidth < 768) return 2;
//     if (windowWidth < 1024) return 3;
//     if (windowWidth < 1280) return 4;
//     return slidesToShow;
//   }, [windowWidth, slidesToShow]);

//   const next = useCallback(() => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % validItems.length);
//   }, [validItems.length]);

//   const prev = useCallback(() => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? validItems.length - 1 : prevIndex - 1
//     );
//   }, [validItems.length]);

//   const getVisibleItems = useCallback(() => {
//     if (!validItems.length) return [];
//     const visibleItems = [];
//     const responsiveSlidesToShow = getResponsiveSlidesToShow();
//     const numItemsToShow = Math.min(responsiveSlidesToShow, validItems.length);

//     for (let i = 0; i < numItemsToShow; i++) {
//       const index = (currentIndex + i) % validItems.length;
//       visibleItems.push(validItems[index]);
//     }
//     return visibleItems;
//   }, [currentIndex, validItems, getResponsiveSlidesToShow]);

//   if (!validItems.length) return null;

//   const responsiveSlidesToShow = getResponsiveSlidesToShow();

//   return (
//     <div className="relative px-4 sm:px-8 md:px-16 lg:px-20">
//       {validItems.length > responsiveSlidesToShow && (
//         <button
//           onClick={prev}
//           className="absolute left-0 sm:left-2 md:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
//           aria-label="Previous"
//         >
//           <Image
//             src={Butterflies6}
//             alt="Previous"
//             width={40}
//             height={40}
//             className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 hover:scale-110 transition-transform duration-300"
//           />
//         </button>
//       )}

//       <div className="flex gap-2  transition-transform duration-300 ease-in-out">
//         {getVisibleItems().map((item, index) => (
//           <div
//             key={`${item.id || index}`}
//             className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
//           >
//             {renderItem(item)}
//           </div>
//         ))}
//       </div>

//       {validItems.length > responsiveSlidesToShow && (
//         <button
//           onClick={next}
//           className="absolute right-0 sm:right-2 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
//           aria-label="Next"
//         >
//           <Image
//             src={Butterflies5}
//             alt="Next"
//             width={40}
//             height={40}
//             className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 hover:scale-110 transition-transform duration-300"
//           />
//         </button>
//       )}
//     </div>
//   );
// };

// export default function Mid() {
//   const token = "irrv211vui9kuwn11efsb4xd4zdkuq";
//   const { data: categoryData, loading, error } = useFetchCategories(token);
//   const [products, setProducts] = useState([]);

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
//             (product) =>
//               product && product.origin?.toLowerCase() === "nexigifting"
//           );
//           setProducts(filteredProducts);
//         }
//       } catch (err) {
//         console.error("Error fetching products", err);
//       }
//     };
//     fetchProducts();
//   }, [token]);

//   const handleCustomizeClick = (product) => {
//     if (!product) return;

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

//   const renderCategory = (category) => {
//     if (!category || !category.bg_Img || !category.name) return null;

//     return (
//       <Link href="/category">
//         <div className="text-center w-full relative group pt-2 sm:pt-4 pb-4 sm:pb-8">
//           <div className="h-32 sm:h-40 md:h-48 w-32 sm:w-40 md:w-48 mx-auto flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 transform group-hover:-translate-y-4">
//             <div className="relative w-full h-[86%]">
//               <Image
//                 src={`https://nexiblesapp.barecms.com/uploads/${category.bg_Img}`}
//                 alt={category.name}
//                 layout="fill"
//                 objectFit="contain"
//                 className="transition-transform duration-300 group-hover:scale-115"
//                 onError={(e) => {
//                   e.target.src = "/placeholder-image.jpg";
//                 }}
//               />
//             </div>
//           </div>
//           <p className="text-[#f9e2b2] text-sm sm:text-base md:text-xl lg:text-2xl font-bold mt-2 transition-all duration-300 group-hover:-translate-y-4">
//             {category.name}
//           </p>
//         </div>
//       </Link>
//     );
//   };

//   const renderProduct = (product) => {
//     if (!product || !product.image || !product.name) return null;

//     return (
//       <div className="w-full relative h-full pt-6 sm:pt-8 md:pt-12">
//         <div className="bg-[#f9e2b2] rounded-t-3xl rounded-b-[45%] h-40 sm:h-48 md:h-64 flex items-center justify-center">
//           <div className="relative w-full h-full mt-4 sm:mt-6 md:mt-8">
//             <Image
//               src={`https://nexiblesapp.barecms.com/uploads/${product.image}`}
//               alt={product.name}
//               layout="fill"
//               objectFit="contain"
//               className="scale-110 transition-transform duration-300 hover:-translate-y-8 hover:scale-115 max-w-[75%] max-h-[83%] mx-auto"
//               onError={(e) => {
//                 e.target.src = "/placeholder-image.jpg";
//               }}
//             />
//           </div>
//         </div>
//         <p className="text-[#db5c3c] font-gotham-medium text-sm sm:text-base md:text-pt-20 mt-2 sm:mt-4 text-center px-2 sm:px-4 py-1 whitespace-nowrap overflow-hidden text-ellipsis">
//           {product.name}
//         </p>
//         <button
//           onClick={() => handleCustomizeClick(product)}
//           className="bg-[#197d8e] text-sm sm:text-base md:text-pt-18 font-gotham-rounded-bold mt-2 sm:mt-4 mx-auto block text-white px-3 sm:px-4 py-1 rounded-full whitespace-nowrap mb-2 sm:mb-4"
//         >
//           Customise
//         </button>
//       </div>
//     );
//   };

//   return (
//     <div className="text-white pt-2 relative bg-no-repeat bg-[#197d8e] md:bg-transparent">
//       <div
//         className="hidden md:block absolute inset-0 bg-no-repeat"
//         style={{
//           backgroundImage: "url('/Home/Background.svg')",
//           backgroundSize: "100% 102%",
//           zIndex: -1,
//         }}
//       />

//       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
//         <div>
//           <h2 className="font-gotham-bold text-xl sm:text-2xl md:text-pt-30 text-center text-black md:text-white mt-4 sm:mt-6 md:mt-8 relative z-10">
//             <Image
//               src={Butterflies2}
//               alt="butterflies"
//               width={64}
//               height={64}
//               className="inline-block w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mt-[-2rem] sm:mt-[-2.5rem] md:mt-[-3rem]"
//             />
//             Personalise Your Celebration
//           </h2>
//           <p className="text-center md:mb-12 text-sm sm:text-base md:text-xl lg:text-xl max-w-4xl mx-auto relative z-10 text-black md:text-white">
//             From design to details, add your personal touch to every pouch.
//             <Image
//               src={TreeIllustration}
//               alt="butterflies"
//               width={44}
//               height={44}
//               className="inline-block w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 md:mt-[-3rem] md:mr-[-10rem]"
//             />
//           </p>
//         </div>

//         <div className="relative z-10 max-w-6xl mx-auto md:mb-12">
//           {categoryData && categoryData.length > 0 && (
//             <CustomCarousel
//               items={categoryData}
//               renderItem={renderCategory}
//               slidesToShow={5}
//               variant="default"
//             />
//           )}
//         </div>

//         <h3 className="font-gotham-bold text-lg sm:text-xl md:text-pt-23 text-center text-black md:text-white relative z-10 mb-4 sm:mb-6 md:mb-8">
//           <Image
//             src={FlowerIllustration}
//             alt="flower illustration"
//             width={40}
//             height={40}
//             className="inline-block w-8 h-8 sm:w-12 sm:h-12 md:w-30 md:h-30 lg:w-36 lg:h-36"
//           />
//           Popular Products
//           <Image
//             src={Butterflies2}
//             alt="butterflies"
//             width={60}
//             height={60}
//             className="inline-block w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-20 lg:h-20 mt-[-2rem] sm:mt-[-2.5rem] md:mt-[-3rem]"
//           />
//         </h3>

//         <div className="relative z-10 max-w-7xl mx-auto">
//           {products.length > 0 && (
//             <CustomCarousel
//               items={products}
//               renderItem={renderProduct}
//               slidesToShow={5}
//               variant="products"
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

//new changes
// import React, { useState, useCallback, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Butterflies2 from "../../../public/Home/Butterflies-2.svg";
// import TreeIllustration from "../../../public/Home/Tree Illustration.svg";
// import FlowerIllustration from "../../../public/Home/Flower-Illustration.svg";
// import Butterflies5 from "../../../public/Home/Butterflies-5.svg";
// import Butterflies6 from "../../../public/Home/Butterflies-6.svg";
// import useFetchCategories from "../../app/usefetchcategories";

// const CustomCarousel = ({ items = [], renderItem, slidesToShow = 5 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [windowWidth, setWindowWidth] = useState(0);
//   const validItems = items.filter((item) => item && typeof item === "object");

//   useEffect(() => {
//     setWindowWidth(window.innerWidth);
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const getResponsiveSlidesToShow = useCallback(() => {
//     if (windowWidth < 640) return 1;
//     if (windowWidth < 768) return 2;
//     if (windowWidth < 1024) return 3;
//     if (windowWidth < 1280) return 4;
//     return slidesToShow;
//   }, [windowWidth, slidesToShow]);

//   const next = useCallback(() => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % validItems.length);
//   }, [validItems.length]);

//   const prev = useCallback(() => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? validItems.length - 1 : prevIndex - 1
//     );
//   }, [validItems.length]);

//   const getVisibleItems = useCallback(() => {
//     if (!validItems.length) return [];
//     const visibleItems = [];
//     const responsiveSlidesToShow = getResponsiveSlidesToShow();
//     const numItemsToShow = Math.min(responsiveSlidesToShow, validItems.length);

//     for (let i = 0; i < numItemsToShow; i++) {
//       const index = (currentIndex + i) % validItems.length;
//       visibleItems.push(validItems[index]);
//     }
//     return visibleItems;
//   }, [currentIndex, validItems, getResponsiveSlidesToShow]);

//   if (!validItems.length) return null;

//   const responsiveSlidesToShow = getResponsiveSlidesToShow();

//   return (
//     <div className="relative px-4 sm:px-8 md:px-16 lg:px-20">
//       {validItems.length > responsiveSlidesToShow && (
//         <button
//           onClick={prev}
//           className="absolute left-0 sm:left-2 md:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
//           aria-label="Previous"
//         >
//           <Image
//             src={Butterflies6}
//             alt="Previous"
//             width={40}
//             height={40}
//             className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 hover:scale-110 transition-transform duration-300"
//           />
//         </button>
//       )}

//       <div className="flex gap-2  transition-transform duration-300 ease-in-out">
//         {getVisibleItems().map((item, index) => (
//           <div
//             key={`${item.id || index}`}
//             className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
//           >
//             {renderItem(item)}
//           </div>
//         ))}
//       </div>

//       {validItems.length > responsiveSlidesToShow && (
//         <button
//           onClick={next}
//           className="absolute right-0 sm:right-2 md:right-0 lg:right-0 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer focus:outline-none"
//           aria-label="Next"
//         >
//           <Image
//             src={Butterflies5}
//             alt="Next"
//             width={40}
//             height={40}
//             className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 hover:scale-110 transition-transform duration-300"
//           />
//         </button>
//       )}
//     </div>
//   );
// };

// export default function Mid() {
//   const token = "irrv211vui9kuwn11efsb4xd4zdkuq";
//   const { data: categoryData, loading, error } = useFetchCategories(token);
//   const [products, setProducts] = useState([]);

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
//             (product) =>
//               product && product.origin?.toLowerCase() === "nexigifting"
//           );
//           setProducts(filteredProducts);
//         }
//       } catch (err) {
//         console.error("Error fetching products", err);
//       }
//     };
//     fetchProducts();
//   }, [token]);

//   const handleCustomizeClick = (product) => {
//     if (!product) return;

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

//   const renderCategory = (category) => {
//     if (!category || !category.bg_Img || !category.name) return null;

//     return (
//       <Link href="/occasions">
//         <div className="text-center w-full relative group pt-2 sm:pt-4 pb-4 sm:pb-">
//           <div className="h-32 sm:h-40 md:h-48 w-32 sm:w-40 md:w-48 mx-auto flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 transform group-hover:-translate-y-4">
//             <div className="relative w-full h-[86%]">
//               <Image
//                 src={`https://nexiblesapp.barecms.com/uploads/${category.bg_Img}`}
//                 alt={category.name}
//                 layout="fill"
//                 objectFit="contain"
//                 className="transition-transform duration-300 group-hover:scale-115"
//                 onError={(e) => {
//                   e.target.src = "/placeholder-image.jpg";
//                 }}
//               />
//             </div>
//           </div>
//           <p className="text-[#f9e2b2] text-sm sm:text-base md:text-xl lg:text-2xl font-bold mt-2 transition-all duration-300 group-hover:-translate-y-4">
//             {category.name}
//           </p>
//         </div>
//       </Link>
//     );
//   };

//   const renderProduct = (product) => {
//     if (!product || !product.image || !product.name) return null;

//     return (
//       <div className="w-full relative h-full pt-6 sm:pt-8 md:pt-12">
//         <div className="bg-[#f9e2b2] rounded-t-3xl rounded-b-[45%] h-40 sm:h-48 md:h-64 flex items-center justify-center">
//           <div className="relative w-full h-full mt-4 sm:mt-6 md:mt-8">
//             <Image
//               src={`https://nexiblesapp.barecms.com/uploads/${product.image}`}
//               alt={product.name}
//               layout="fill"
//               objectFit="contain"
//               className="scale-110 transition-transform duration-300 hover:-translate-y-8 hover:scale-115 max-w-[75%] max-h-[83%] mx-auto"
//               onError={(e) => {
//                 e.target.src = "/placeholder-image.jpg";
//               }}
//             />
//           </div>
//         </div>
//         <p className="text-[#db5c3c] font-gotham-medium text-sm sm:text-base md:text-pt-20 mt-2 sm:mt-4 text-center px-2 sm:px-4 py-1 whitespace-nowrap overflow-hidden text-ellipsis">
//           {product.name}
//         </p>
//         <button
//           onClick={() => handleCustomizeClick(product)}
//           className="bg-[#197d8e] text-sm sm:text-base md:text-pt-20 font-gotham-rounded-bold mt-2 sm:mt-4 mx-auto block text-white px-3 sm:px-4 py-1 rounded-full whitespace-nowrap mb-2 sm:mb-4"
//         >
//           Customise
//         </button>
//       </div>
//     );
//   };

//   return (
//     <div className="text-white pt-2 relative bg-no-repeat bg-[#197d8e] md:bg-transparent">
//       <div
//         className="hidden md:block absolute inset-0 bg-no-repeat"
//         style={{
//           backgroundImage: "url('/Home/Background.svg')",
//           backgroundSize: "100% 102%",
//           zIndex: -1,
//         }}
//       />

//       <div className="container text-center px-4 sm:px-6 md:px-8 lg:px-16">
//         <div>
//           <h2 className="font-gotham-bold text-xl sm:text-2xl md:text-pt-30 text-center text-black md:text-white mt-4 sm:mt-6 md:mt-8 relative z-10">
//             <Image
//               src={Butterflies2}
//               alt="butterflies"
//               width={64}
//               height={64}
//               className="inline-block w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mt-[-2rem] sm:mt-[-2.5rem] md:mt-[-3rem]"
//             />
//             Personalise Your Celebration
//           </h2>
//           <div className="flex items-center justify-center space-x-4">
//             <p className="text-sm sm:text-base md:text-xl lg:text-xl max-w-4xl text-black md:text-white">
//               From design to details, add your personal touch to every pouch.
//             </p>
//             <Image
//               src={TreeIllustration}
//               alt="tree illustration"
//               width={44}
//               height={44}
//               className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
//             />
//           </div>
//         </div>

//         <div className="relative z-10 max-w-6xl mx-auto md:mb-12">
//           {categoryData && categoryData.length > 0 && (
//             <CustomCarousel
//               items={categoryData}
//               renderItem={renderCategory}
//               slidesToShow={5}
//               variant="default"
//             />
//           )}
//         </div>

//         <h3 className="font-gotham-bold text-lg sm:text-xl md:text-pt-23 text-center text-black md:text-white relative z-10 mb-4 sm:mb-6 md:mb-8">
//           <Image
//             src={FlowerIllustration}
//             alt="flower illustration"
//             width={40}
//             height={40}
//             className="inline-block w-8 h-8 sm:w-12 sm:h-12 md:w-30 md:h-30 lg:w-36 lg:h-36"
//           />
//           Popular Products
//           <Image
//             src={Butterflies2}
//             alt="butterflies"
//             width={60}
//             height={60}
//             className="inline-block w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-20 lg:h-20 mt-[-2rem] sm:mt-[-2.5rem] md:mt-[-3rem]"
//           />
//         </h3>

//         <div className="relative z-10 max-w-7xl mx-auto">
//           c
//           {products.length > 0 && (
//             <CustomCarousel
//               items={products}
//               renderItem={renderProduct}
//               slidesToShow={5}
//               variant="products"
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
