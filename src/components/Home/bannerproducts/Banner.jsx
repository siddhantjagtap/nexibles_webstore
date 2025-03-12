import React from 'react';
import bannerProductsData from './bannerproductsData';
import Link from "next/link"

export default function Banner({categoryData}) {
  const filterData = categoryData.filter(category=>category.id === 3 || category.id === 14);
  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row p-2 md:space-x-2 md:space-y-0 space-y-2 justify-center">
        {bannerProductsData.map((product) => (
          <div key={product.id} className="w-full md:w-1/2 relative">
            <img src={product.imageSrc} alt={product.name} className="h-auto w-full" />
            <div className="absolute md:bottom-6 bottom-0 left-4 md:left-10 right-4 md:right-0 py-6 flex flex-col">
              <p className="text-gray-900 font-bold text-lg md:text-2xl mb-2">{product.name}</p>
              <Link href={`/category/${product.cat_url}`}>
              <button className="bg-[#30384E] rounded-md text-sm md:text-base text-white w-auto md:w-44 py-2 px-6">Order now</button>
              </Link>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// import React from 'react';
// import bannerProductsData from './bannerproductsData';
// import Link from "next/link";

// export default function Banner({ categoryData }) {
//   console.log("categoryData in Banner", categoryData);
//   const filterData = categoryData.filter(category => category.id === 3 || category.id === 14);
//   console.log("filterData", filterData);

//   // Find the image source for the first product in filterData
//   const firstProductImageSrc = filterData.length > 0 ? bannerProductsData.find(product => product.id === filterData[0].id)?.imageSrc : null;
  
//   return (
//     <div className="bg-white">
//       <div className="flex flex-col md:flex-row p-2 md:space-x-2 md:space-y-0 space-y-2 justify-center">
//         <div className="w-full md:w-1/2 relative">
//           {firstProductImageSrc && (
//             <img src={firstProductImageSrc} alt={filterData[0].name} className="h-auto w-full" />
//           )}
//           <div className="absolute bottom-6 left-4 md:left-10 right-4 md:right-0 py-6 flex flex-col">
//             <p className="text-gray-900 font-bold text-lg md:text-2xl mb-2">{filterData[0].name}</p>
//             <Link href={`/category/${filterData[0].cat_url}`}>
//               <button className="bg-black text-sm md:text-base text-white w-full md:w-44 py-2 px-6 rounded-full uppercase">order now</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
