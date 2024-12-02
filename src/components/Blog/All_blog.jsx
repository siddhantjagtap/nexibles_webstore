"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Butterflies5 from "../../../public/Home/Butterflies-5.svg";
import Butterflies6 from "../../../public/Home/Butterflies-6.svg";

const BlogCard = ({ title, imageSrc, index }) => {
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/--+/g, "-")
      .trim();
  };

  const backgroundColor = index % 2 === 0 ? "bg-[#db5c3c]" : "bg-[#197d8e]";
  const slug = createSlug(title);

  return (
    <div>
      <div
        className={`mt-20 md:mt-20 relative cursor-pointer ${backgroundColor} overflow-visible shadow-lg p-4 md:pt-24 pt-20 pb-6 h-60 w-36 md:h-80 md:w-60 flex flex-col justify-between`}
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              width={200}
              height={200}
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex flex-col flex-grow justify-between">
          <div className="text-center md:mt-4 px-2 flex-grow">
            <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-2 md:mb-4 font-gotham-book line-clamp-4 overflow-hidden text-ellipsis">
              {title}
            </h3>
          </div>
          <div className="text-center mt-auto">
            <Link
              href={`/blog/${slug}`}
              className="inline-block text-white font-gotham-medium text-xs sm:text-sm md:text-base lg:text-lg px-4 py-2 rounded-full hover:text-black transition duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Blogs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Check initial width
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePrev = useCallback(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  }, []);

  const handleNext = useCallback(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  }, []);

  const blogPosts = [
    {
      title: "Low MOQ,High Impact: Maximizing Limited-Edition Gifting With Custom Packaging",
      imageSrc: "/Blog Page/Assets/Blog 1 Circle.png",
    },
    {
      title: "Celebration in a Pouch: How Custom Packaging Can Tranform Festive Occassions",
      imageSrc: "/Blog Page/Assets/Blog 2 Circle.png",
    },
    {
      title: "Nostalgia in a Pouch: Curating Gifts that Spark Memories",
      imageSrc: "/Blog Page/Assets/Blog 3 Circle.png",
    },
    {
      title: "Unwrap the Joy: How Custom Packaging Makes Holiday Gifting Extra Special",
      imageSrc: "/Blog Page/Assets/Blog 4 Circle.png",
    },
    {
      title: "Pack Happiness: 7 Thoughtful Gifts to Pack in NexiGifting Pouches",
      imageSrc: "/Blog Page/Assets/Blog 5 Circle.png",
    },
  ];

  // Randomize blog posts for desktop view
  const getRandomBlogs = (count) => {
    const shuffled = [...blogPosts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Prevent hydration mismatch by rendering a placeholder during SSR
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div className="overflow-visible relative mt-[8rem] mb-10 md:my-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-16 max-w- overflow-visible ">
        <div className="flex items-center justify-center space-x-2 md:space-x-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-gotham-rounded-bold text-[#db5c3c] mx-2 sm:mx- my-2 md:mb-[14px] sm:my-6 ">
            Blogs
          </h2>
          <Image
            src="/Home/Blog Title Illustration.svg"
            alt="Blog Icon"
            width={30}
            height={30}
            className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px]"
          />
        </div>

        {isMobile ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-10 mt-4 px-2">
            {blogPosts.map((post, index) => (
              <div key={index} className="flex justify-center">
                <BlogCard index={index} {...post} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-24 max-w-6xl mx-auto">
              {getRandomBlogs(5).map((post, index) => (
                <div key={index} className="flex justify-center">
                  <BlogCard index={index} {...post} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;