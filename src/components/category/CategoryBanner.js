import React from "react";
import { categoryBannerData } from "./categoryBannerData";
import Image from "next/image";

const CategoryIcon = ({ icon }) => {
  if (!icon) return null;
  return <Image src={icon} alt="Category Icon" width={80} height={80} />;
};

const CategoryBanner = ({
  categoryName,
  categoryddescription,
  bannerPhoto,
}) => {
  // Default styling and fallback data
  const defaultData = {
    title: categoryName || "New Beginnings",
    description:
      categoryddescription ||
      "Start fresh with our specially curated collection.",
    bgColor: "#f9e2b2",
    textColor: "#db5c3c",
  };

  // Construct the banner image URL
  const bannerImageUrl = bannerPhoto
    ? `https://nexiblesapp.barecms.com/uploads/${bannerPhoto}`
    : null;

  return (
    <div className="absolute left-0 right-0 w-full md:h-52 h-48 overflow-hidden">
      <div
        className="w-full h-full"
        style={{ backgroundColor: defaultData.bgColor }}
      >
        <div className="max-w-7xl mx-auto h-full px-8 md:px-6 relative">
          {/* Mobile Layout (Flex) */}
          <div className="md:hidden w-full h-full flex flex-col items-center">
            <div className="flex items-center justify-center space-x-4 pt-4">
              <h2
                className="text-2xl font-gotham-rounded-bold"
                style={{ color: defaultData.textColor }}
              >
                {defaultData.title}
              </h2>
              {bannerImageUrl && (
                <div className="flex-shrink-0">
                  <div className="relative w-16 h-16">
                    <Image
                      src={bannerImageUrl}
                      alt={`${categoryName} Banner`}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
              )}
            </div>
            <p className="text-base text-black font-gotham-medium px-4 text-center mt-4">
              {defaultData.description}
            </p>
          </div>

          {/* Desktop Layout (Original) */}
          <div className="hidden md:flex flex-row items-center justify-between h-full">
            <div className="flex-1 text-left pt-0 mb-0 z-10 w-auto">
              <h2
                className="text-pt-25 font-gotham-bold mb-2 ml-[22rem]"
                style={{ color: defaultData.textColor }}
              >
                {defaultData.title}
              </h2>
              <p className="text-pt-15 text-black font-gotham-medium w-1/2 ml-[22rem]">
                {defaultData.description}
              </p>
            </div>
            {bannerImageUrl && (
              <div className="flex-shrink-0 p-8 rounded-full z-10">
                <div className="relative w-28 h-28">
                  <Image
                    src={bannerImageUrl}
                    alt={`${categoryName} Banner`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
