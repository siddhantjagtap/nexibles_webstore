"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Butterflies2 from "../../../public/Home/Butterflies-2.svg";
import "swiper/css";
import { usePathname } from "next/navigation";

const DesktopBlogCard = ({ title, imageSrc, index }) => {
  const backgroundColor = index % 2 === 0 ? "bg-[#db5c3c]" : "bg-[#197d8e]";
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/--+/g, "-")
      .trim();
  };
  const slug = createSlug(title);
  return (
    <div
      className={`mt-24 relative cursor-pointer ${backgroundColor} overflow-visible shadow-lg p-4 pt-24 pb-6 h-80 w-60 flex flex-col justify-between`}
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-48 h-48 rounded-full overflow-hidden">
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
        <div className="text-center mt-4 px-2">
          <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-2 md:mb-4 font-gotham-book line-clamp-4 overflow-hidden text-ellipsis">
            {title}
          </h3>
        </div>
        <div className="text-center">
          <Link href={`/blog/${slug}`} passHref>
            <span className="inline-block text-black px-4 py-2 rounded-full font-semibold text-xl hover:text-white transition duration-300 cursor-pointer">
              Read More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const MobileBlogCard = ({ title, imageSrc, index }) => {
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/--+/g, "-")
      .trim();
  };
  const slug = createSlug(title);
  return (
    <div className="relative cursor-pointer overflow-hidden shadow-lg rounded-lg h-64">
      <div className="absolute inset-0">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
        <h3 className="text-white text-lg font-gotham-book mb-2">{title}</h3>
        <Link href={`/blog/${slug}`} passHref>
          <span className="inline-block text-white px-4 py-2 rounded-full font-gotham-rounded-bold text-sm border border-white hover:bg-white hover:text-black transition duration-300 cursor-pointer">
            Read More
          </span>
        </Link>
      </div>
    </div>
  );
};

const BlogCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    import("swiper/css");
  }, []);

  const blogPosts = [
    {
      title:
        "Low MOQ,High Impact: Maximizing Limited-Edition Gifting With Custom Packaging",
      imageSrc: "/Blog Page/Assets/Blog 1 Circle.png",
    },
    {
      title:
        "Celebration in a Pouch: How Custom Packaging Can Tranform Festive Occassions",
      imageSrc: "/Blog Page/Assets/Blog 2 Circle.png",
    },
    {
      title: "Nostalgia in a Pouch: Curating Gifts that Spark Memories",
      imageSrc: "/Blog Page/Assets/Blog 3 Circle.png",
    },
    {
      title:
        "Unwrap the Joy: How Custom Packaging Makes Holiday Gifting Extra Special",
      imageSrc: "/Blog Page/Assets/Blog 4 Circle.png",
    },
    {
      title:
        "Pack Happiness: 7 Thoughtful Gifts to Pack in NexiGifting Pouches",
      imageSrc: "/Blog Page/Assets/Blog 5 Circle.png",
    },
  ];

  const filteredBlogPosts = blogPosts.filter((post) => {
    const postSlug = post.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/--+/g, "-")
      .trim();
    return postSlug !== currentSlug;
  });

  return (
    <section className="relative py-6 sm:py-10">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-center mb-6">
          <h2 className="font-gotham-bold text-xl sm:text-2xl md:text-3xl text-center text-[#db5c3c] mt-4 sm:mt-6 md:mt-8 relative z-10">
            <Image
              src={Butterflies2}
              alt="butterflies"
              width={64}
              height={64}
              className="inline-block font-gotham-rounded-bold w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mt-[-2rem] sm:mt-[-2.5rem] md:mt-[-3rem]"
            />
            More topics you might be interested in
          </h2>
        </div>

        {isMobile ? (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {filteredBlogPosts.map((post, index) => (
              <SwiperSlide key={index}>
                <MobileBlogCard {...post} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
            {filteredBlogPosts.map((post, index) => (
              <div
                key={index}
                className="w-[300px] sm:w-[240px] lg:w-[260px] flex-shrink-0"
              >
                <DesktopBlogCard {...post} index={index} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogCarousel;