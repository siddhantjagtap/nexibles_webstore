"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import useFetchCategories from "../../app/usefetchcategories";
import useFetchProducts from "../../app/fetchproduct";
import Loader from "../comman/Loader";
import CategoryBanner from "./CategoryBanner";
import Footer from "../Home/Footer";

export default function CelebrationCategoryPage() {
  const token = "irrv211vui9kuwn11efsb4xd4zdkuq";

  const {
    data: categoryData,
    loading: categoriesLoading,
    error: categoriesError,
  } = useFetchCategories(token);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const {
    products,
    loading: productsLoading,
    error: productsError,
  } = useFetchProducts(token, selectedCategory?.name);

  useEffect(() => {
    if (categoryData.length > 0 && !selectedCategory) {
      const diwaliCategory = categoryData.find(
        (cat) => cat.name.toLowerCase() === "diwali"
      );
      setSelectedCategory(diwaliCategory || categoryData[0]);
    }
  }, [categoryData, selectedCategory]);

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const newCartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      category: selectedCategory?.name,
      quantity: 1,
      image: product.image,
    };
    const existingItemIndex = existingCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      const existingItem = existingCart[existingItemIndex];
      existingItem.quantity += 1;
      existingItem.name = product.name;
      existingItem.price = product.price;
      existingItem.category = selectedCategory?.name;
      existingItem.image = product.image;
    } else {
      existingCart.push(newCartItem);
    }
    localStorage.setItem("cart", JSON.stringify(existingCart));
  };

  if (categoriesLoading || productsLoading)
    return (
      <p>
        <Loader />
      </p>
    );
  if (categoriesError)
    return <p>Error fetching categories: {categoriesError}</p>;
  if (productsError) return <p>Error fetching products: {productsError}</p>;

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen bg-white pt-[3rem] relative my-4">
        {/* Mobile menu button */}
        <button
          className="md:hidden fixed top-20 right-4 mt-[-1rem] z-20 bg-[#] p-2 rounded-full shadow-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Sidebar */}
        <aside
          className={`w-full md:w-[15%] bg-[#d88473] md:ml-[3rem] md:mt-6 p-4 md:p-6 fixed md:static top-0 left-0 h-full md:h-auto overflow-y-auto transition-transform duration-300 ease-in-out z-10 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 rounded-[2.5rem]`}
        >
          {categoryData.map((category, index) => (
            <div
              key={index}
              className={`flex md:flex-col items-center mb-4 md:mb-6 cursor-pointer transition-colors duration-200 ${
                selectedCategory?.name === category.name
                  ? // ? "bg-[#124e66] text-white rounded-lg"
                    " text-white rounded-lg"
                  : "hover:bg-[#] rounded-lg"
              } p-2 md:p-4`}
              onClick={() => {
                setSelectedCategory(category);
                setIsMobileMenuOpen(false);
              }}
            >
              <div className="rounded-full bg-white w-12 h-12 md:w-[120%] md:h-auto md:aspect-square p-2 md:p-4 flex justify-center items-center overflow-hidden">
                <img
                  src={`https://nexiblesapp.barecms.com/uploads/${category.bg_Img}`}
                  alt={category.name}
                  className="object-contain w-full h-full"
                />
              </div>
              <p className="text-sm md:text-lg font-semibold ml-3 md:ml-0 md:mt-4 text-center text-[#f9e2b2]">
                {category.name}
              </p>
            </div>
          ))}
        </aside>

        {/* Main Content Section */}
        {selectedCategory && (
          <main className="w-full md:w-[80%] p-6 md:mt-0">
            {/* Replace the existing banner with CategoryBanner */}
            <CategoryBanner
              className="w-[100%] bg-[#f9e2b2]"
              categoryName={selectedCategory.name}
            />

            {/* Product display grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 ml-16 md:mt-[22%]">
              {products.length > 0 ? (
                products.map((product) => (
                  <div key={product.id} className="relative h-full pt-12">
                    <div className="bg-[#f9e2b2] rounded-t-3xl rounded-b-[46%] h-80 w-22 flex items-center justify-center">
                      <div className="relative w-full h-full mt-4">
                        <Image
                          src={`https://nexiblesapp.barecms.com/uploads/${product.image}`}
                          alt={product.name}
                          layout="fill"
                          objectFit="contain"
                          className="scale-110 transition-transform duration-300 hover:-translate-y-12 hover:scale-115 max-w-[83%] max-h-[83%] mx-auto mt-2"
                        />
                      </div>
                    </div>
                    <p className="text-[#db5c3c] mt-8 text-center px-6 py-1 rounded-full font-bold text-2xl">
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
                        className="bg-[#197d8e] mt-4 text-white px-6 py-1 rounded-full font-bold text-xl mx-auto block"
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
      <Footer />
    </>
  );
}

// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import useFetchCategories from "../../app/usefetchcategories";
// import useFetchProducts from "../../app/fetchproduct";
// import Loader from "../comman/Loader";
// import CategoryBanner from "./CategoryBanner";

// export default function CelebrationCategoryPage() {
//   const token = "irrv211vui9kuwn11efsb4xd4zdkuq";

//   const {
//     data: categoryData,
//     loading: categoriesLoading,
//     error: categoriesError,
//   } = useFetchCategories(token);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const {
//     products,
//     loading: productsLoading,
//     error: productsError,
//   } = useFetchProducts(token, selectedCategory?.name);

//   useEffect(() => {
//     if (categoryData.length > 0 && !selectedCategory) {
//       const diwaliCategory = categoryData.find(
//         (cat) => cat.name.toLowerCase() === "diwali"
//       );
//       setSelectedCategory(diwaliCategory || categoryData[0]);
//     }
//   }, [categoryData, selectedCategory]);

//   const addToCart = (product) => {
//     const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

//     const newCartItem = {
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       category: selectedCategory?.name,
//       quantity: 1,
//       image: product.image,
//     };
//     const existingItemIndex = existingCart.findIndex(
//       (item) => item.id === product.id
//     );

//     if (existingItemIndex !== -1) {
//       const existingItem = existingCart[existingItemIndex];
//       existingItem.quantity += 1;
//       existingItem.name = product.name;
//       existingItem.price = product.price;
//       existingItem.category = selectedCategory?.name;
//       existingItem.image = product.image;
//     } else {
//       existingCart.push(newCartItem);
//     }
//     localStorage.setItem("cart", JSON.stringify(existingCart));
//   };

//   if (categoriesLoading || productsLoading)
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <Loader />
//       </div>
//     );
//   if (categoriesError)
//     return (
//       <p className="text-center p-4">
//         Error fetching categories: {categoriesError}
//       </p>
//     );
//   if (productsError)
//     return (
//       <p className="text-center p-4">
//         Error fetching products: {productsError}
//       </p>
//     );

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-white pt-16 md:pt-[3rem] relative my-4">
//       {/* Mobile menu button */}
//       <button
//         className="md:hidden fixed top-20 right-4 z-50 bg-[#d88473] p-2 rounded-full shadow-lg"
//         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//       >
//         {isMobileMenuOpen ? (
//           <X size={24} className="text-white" />
//         ) : (
//           <Menu size={24} className="text-white" />
//         )}
//       </button>

//       {/* Sidebar */}
//       <aside
//         className={`w-64 md:w-[15%] bg-[#d88473] md:ml-[3rem] md:mt-6 p-4 md:p-6 fixed md:static top-0 left-0 h-full md:h-auto overflow-y-auto transition-transform duration-300 ease-in-out z-40 ${
//           isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 rounded-[2.5rem]`}
//       >
//         <div className="flex flex-col space-y-4">
//           {categoryData.map((category, index) => (
//             <div
//               key={index}
//               className={`flex md:flex-col items-center cursor-pointer transition-colors duration-200 ${
//                 selectedCategory?.name === category.name
//                   ? "bg-[] text-white"
//                   : ""
//               } rounded-lg p-3 md:p-4`}
//               onClick={() => {
//                 setSelectedCategory(category);
//                 setIsMobileMenuOpen(false);
//               }}
//             >
//               <div className="rounded-full bg-white w-12 h-12 md:w-[120%] md:h-auto md:aspect-square p-2 md:p-4 flex justify-center items-center overflow-hidden">
//                 <img
//                   src={`https://nexiblesapp.barecms.com/uploads/${category.bg_Img}`}
//                   alt={category.name}
//                   className="object-contain w-full h-full"
//                 />
//               </div>
//               <p className="text-sm md:text-lg font-semibold ml-3 md:ml-0 md:mt-4 text-center text-[#f9e2b2]">
//                 {category.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </aside>

//       {/* Main Content Section */}
//       {selectedCategory && (
//         <main className="flex-1 w-full md:w-[80%] p-4 md:p-6 mt-16 md:mt-0">
//           {/* Category Banner */}
//           <div className="w-full">
//             <CategoryBanner
//               className="w-full bg-[#f9e2b2]"
//               categoryName={selectedCategory.name}
//             />
//           </div>

//           {/* Product Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-24 mt-8 md:mt-[22%] mx-auto max-w-6xl px-4 md:px-16">
//             {products.length > 0 ? (
//               products.map((product) => (
//                 <div key={product.id} className="relative h-full pt-12">
//                   <div className="bg-[#f9e2b2] rounded-t-3xl rounded-b-[46%] h-64 md:h-80 w-full flex items-center justify-center">
//                     <div className="relative w-full h-full mt-4">
//                       <Image
//                         src={`https://nexiblesapp.barecms.com/uploads/${product.image}`}
//                         alt={product.name}
//                         layout="fill"
//                         objectFit="contain"
//                         className="scale-110 transition-transform duration-300 hover:-translate-y-12 hover:scale-115 max-w-[83%] max-h-[83%] mx-auto mt-2"
//                       />
//                     </div>
//                   </div>
//                   <p className="text-[#db5c3c] mt-6 md:mt-8 text-center px-4 md:px-6 py-1 rounded-full font-bold text-xl md:text-2xl">
//                     {product.name}
//                   </p>
//                   <Link
//                     href={`/productsize?pouchId=${
//                       product.id
//                     }&image=${encodeURIComponent(
//                       product.image.replace(/%20/g, "-")
//                     )}`}
//                   >
//                     <button
//                       className="bg-[#197d8e] mt-4 text-white px-4 md:px-6 py-1 rounded-full font-bold text-lg md:text-xl mx-auto block w-3/4 md:w-auto"
//                       onClick={() => addToCart(product)}
//                     >
//                       Customise
//                     </button>
//                   </Link>
//                 </div>
//               ))
//             ) : (
//               <div className="col-span-full text-center py-8">
//                 <p className="text-xl text-gray-600">
//                   No products found for this category.
//                 </p>
//               </div>
//             )}
//           </div>
//         </main>
//       )}
//     </div>
//   );
// }
