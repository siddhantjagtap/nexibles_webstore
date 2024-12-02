'use client'
import React from "react";
import loading from "../../../public/Loading/Loading gif New Without Background.gif";
import Image from "next/image";
const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen w-full backdrop-blur-[1px] bg-opacity-10 bg-black z-50">
            <Image src={loading} alt="loader" className="w-[20%] sm:w-[15%] md:w-[10%] lg:w-[8%] xl:w-[6%] h-auto" />
        </div>

    );
};

export default Loader;
