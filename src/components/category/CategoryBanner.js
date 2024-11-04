import React from "react";
import { categoryBannerData } from "./categoryBannerData";

import Image from "next/image";

const CategoryIcon = ({ icon }) => {
  if (!icon) return null;
  return <Image src={icon} alt="Category Icon" width={80} height={80} />;
};


const CategoryBanner = ({ categoryName }) => {
  const getCategoryKey = (name) => {
    if (!name) return "diwali";

    const categoryMap = {
      "new beginnings": "new_beginnings",
      "new beginning": "new_beginnings",
      newbeginnings: "new_beginnings",
      newbeginning: "new_beginnings",
    };

    const normalizedInput = name.toLowerCase().trim();

    if (categoryMap[normalizedInput]) {
      return categoryMap[normalizedInput];
    }

    const cleanInput = normalizedInput.replace(/[^a-z0-9]/g, "");

    const matchingCategory = Object.keys(categoryBannerData).find((key) => {
      const cleanKey = key.toLowerCase().replace(/[^a-z0-9]/g, "");
      return cleanKey === cleanInput;
    });

    return matchingCategory || "new_beginnings";
  };

  const categoryKey = getCategoryKey(categoryName);
  const categoryData = categoryBannerData[categoryKey];

  const fallbackData = {
    title: "New Beginnings",
    description:
      "Start fresh with our specially curated collection for new beginnings and fresh starts.",
    bgColor: "#E0F4FF",
    textColor: "#1E3A8A",
    icon: {
      viewBox: "0 0 24 24",
      paths: [
        "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
        "M11 7h2v6h-2zm0 4h6v2h-6z",
      ],
    },
  };

  const displayData = categoryData || fallbackData;

  return (
    <div className="absolute left-0 right-0 w-full h-48 overflow-hidden">
      <div
        className="w-full h-full"
        style={{ backgroundColor: displayData.bgColor }}
      >
        <div className="max-w-7xl mx-auto h-full px-6 flex flex-col md:flex-row items-center justify-between relative">
          <div className="flex-1 text-center md:text-left mb-4 md:mb-0 z-10">
            <h2
              className="text-3xl font-bold mb-2 ml-[22rem]"
              style={{ color: displayData.textColor }}
            >
              {displayData.title}
            </h2>
            <p className="text-lg text-black font-semibold w-1/2 hidden md:block ml-[22rem]">
              {displayData.description}
            </p>
          </div>
          <div className="flex-shrink-0 p-4 rounded-full z-10">
            <CategoryIcon icon={displayData.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;

// import React from "react";
// import { categoryBannerData } from "./CategoryBannerData";

// const CategoryIcon = ({ icon }) => {
//   return (
//     <svg
//       viewBox={icon.viewBox}
//       className="w-16 h-16 text-[#124e66]"
//       aria-hidden="true"
//     >
//       {icon.paths.map((path, index) => (
//         <path key={index} fill="currentColor" d={path} />
//       ))}
//     </svg>
//   );
// };

// const CategoryBanner = ({ categoryName }) => {
//   const categoryData =
//     categoryBannerData[categoryName?.toLowerCase()] ||
//     categoryBannerData.diwali;

//   return (
//     <div
//       className="p-6 mb-8 rounded-lg shadow-lg transition-all duration-300"
//       style={{ backgroundColor: categoryData.bgColor }}
//     >
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
//         <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
//           <h2
//             className="text-3xl font-bold mb-2"
//             style={{ color: categoryData.textColor }}
//           >
//             {categoryData.title}
//           </h2>
//           <p className="text-lg text-gray-700 hidden md:block">
//             {categoryData.description}
//           </p>
//         </div>
//         <div className="flex-shrink-0 bg-white p-4 rounded-full">
//           <CategoryIcon icon={categoryData.icon} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryBanner;
