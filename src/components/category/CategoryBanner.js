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
        <div className="max-w-7xl mx-auto h-full px-4 md:px-6 flex flex-col md:flex-row items-center justify-between relative">
          <div className="flex-1 text-center md:text-left pt-4 md:pt-0 md:mb-0 z-10 w-full md:w-auto">
            <h2
              className="text-2xl md:text-pt-25 font-gotham-bold mb-2 mx-auto md:ml-[22rem] md:mx-0 max-w-[90%] md:max-w-none"
              style={{ color: displayData.textColor }}
            >
              {displayData.title}
            </h2>
            <p className="text-base md:text-pt-15 text-black font-gotham-medium w-full md:w-1/2 block md:ml-[22rem] px-4 md:px-0">
              {displayData.description}
            </p>
          </div>
          <div className="flex-shrink-0 p-2 md:p-4 rounded-full z-10 mt-2 md:mt-0">
            <CategoryIcon icon={displayData.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
