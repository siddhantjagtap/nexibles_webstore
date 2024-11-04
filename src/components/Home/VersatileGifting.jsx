import React from "react";
import Image from "next/image";
import HomepageArch2 from "../../../public/Home/Versatile Gifting Background.svg";
import pouch2 from "../../../public/Home/pouch-2.png";
import kaju from "../../../public/Home/cashew.png";
import almonds from "../../../public/Home/almonds.png";
import pista from "../../../public/Home/pista.png";

const VersatileGifting = () => {
  return (
    <div className="relative w-full overflow-hidden mt-10">
      <div className="flex items-center">
        <div className="w-3/4 relative">
          <div className="relative">
            <Image
              src={HomepageArch2}
              alt="Decorative Arch"
              width={900}
              height={400}
              className="hidden md:block"
              priority
            />
            <div className="absolute top-12 left-12 z-10 ">
              <h2 className="md:text-pt-45 font-gotham-rounded-bold text-white mt-14">
                Versatile & Sustainable
              </h2>
              <h2 className="md:text-pt-45 font-gotham-rounded-bold text-white">
                Gifting Solutions
              </h2>
              <p className="font-gotham-medium md:text-pt-20 max-w-md text-white">
                <span className="block">From Treats to Treasures, </span>
                <span className="block">Sealed with Care</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VersatileGifting;
