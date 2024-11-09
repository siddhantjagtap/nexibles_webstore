"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Butterflies2 from "../../../public/Home/Butterflies-2.svg";
import "swiper/css";

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
      className={`mt-40 relative cursor-pointer ${backgroundColor} overflow-visible shadow-lg p-4 pt-24 pb-6 h-80 w-60 flex flex-col justify-between`}
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
          <h3 className="text-white text-lg mb-4">{title}</h3>
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
        <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
        <Link href={`/blog/${slug}`} passHref>
          <span className="inline-block text-white px-4 py-2 rounded-full font-semibold text-sm border border-white hover:bg-white hover:text-black transition duration-300 cursor-pointer">
            Read More
          </span>
        </Link>
      </div>
    </div>
  );
};

const BlogCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);

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
      // title: "Small and Unique gift ideas for your next birthday bash",
      title:
        "Celebration in a Pouch: How Custom Packaging Can Tranform Festive Occassions",
      imageSrc: "/Blog Page/Assets/Blog 2 Circle.png",
    },
    {
      // title: "Customised pouches for your 50th anniversary party",
      title: "Nostalgia in a Pouch: Curating Gifts that Spark Memories",
      imageSrc: "/Blog Page/Assets/Blog 3 Circle.png",
    },
    {
      // title: "Announce your engagement in a special way",
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

  return (
    <section className="overflow-visible relative py-6 sm:py-10">
      <div className="container mx-auto px-4 overflow-visible">
        <div className="flex items-center justify-center mb-6">
          {" "}
          {/* Changed justify-between to justify-center */}
          {/* <h2 className="text-2xl sm:text-3xl font-bold text-orange-500">
            {" "}
            
            More topics you might be interested in
          </h2> */}
          <h2 className="font-gotham-bold text-xl sm:text-2xl md:text-pt-30 text-center text-black md:text-[#db5c3c] mt-4 sm:mt-6 md:mt-8 relative z-10">
            <Image
              src={Butterflies2}
              alt="butterflies"
              width={64}
              height={64}
              className="inline-block w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mt-[-2rem] sm:mt-[-2.5rem] md:mt-[-3rem]"
            />
            Personalise Your Celebration
          </h2>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={isMobile ? 16 : 10}
          slidesPerView={isMobile ? 1.2 : 1.5}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={
            isMobile
              ? {
                  480: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                }
              : {
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                  },
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                  },
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 0,
                  },
                }
          }
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide key={index}>
              {isMobile ? (
                <MobileBlogCard index={index} {...post} />
              ) : (
                <DesktopBlogCard index={index} {...post} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogCarousel;

//before update

// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// const DesktopBlogCard = ({ title, imageSrc, readMoreLink, index }) => {
//   const backgroundColor = index % 2 === 0 ? "bg-[#db5c3c]" : "bg-[#197d8e]";
//   const createSlug = (title) => {
//     return title
//       .toLowerCase()
//       .replace(/[^\w\s-]/g, "")
//       .replace(/\s+/g, "-")
//       .replace(/--+/g, "-")
//       .trim();
//   };
//   const slug = createSlug(title);
//   return (
//     <Link href={`/blog/${slug}`} passHref>
//       <div
//         className={`mt-40 relative cursor-pointer ${backgroundColor} overflow-visible shadow-lg p-4 pt-24 pb-6 h-80 w-60 flex flex-col justify-between`}
//       >
//         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//           <div className="w-48 h-48 rounded-full overflow-hidden">
//             <Image
//               src={imageSrc}
//               alt={title}
//               width={200}
//               height={200}
//               objectFit="cover"
//             />
//           </div>
//         </div>
//         <div className="flex flex-col flex-grow justify-between">
//           <div className="text-center mt-4 px-2">
//             <h3 className="text-white text-lg mb-4">{title}</h3>
//           </div>
//           <div className="text-center">
//             <span className="inline-block text-black px-4 py-2 rounded-full font-semibold text-xl hover:text-white transition duration-300">
//               Read More
//             </span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// const MobileBlogCard = ({ title, imageSrc, readMoreLink, index }) => {
//   const createSlug = (title) => {
//     return title
//       .toLowerCase()
//       .replace(/[^\w\s-]/g, "")
//       .replace(/\s+/g, "-")
//       .replace(/--+/g, "-")
//       .trim();
//   };
//   const slug = createSlug(title);
//   return (
//     <Link href={`/blog/${slug}`} passHref>
//       <div className="relative cursor-pointer overflow-hidden shadow-lg rounded-lg h-64">
//         <div className="absolute inset-0">
//           <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
//         </div>
//         <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
//           <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
//           <div className="text-center">
//             <span className="inline-block text-white px-4 py-2 rounded-full font-semibold text-sm border border-white hover:bg-white hover:text-black transition duration-300">
//               Read More
//             </span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// const BlogCarousel = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   useEffect(() => {
//     import("swiper/css");
//   }, []);

//   const blogPosts = [
//     {
//       title: "Perfect holiday gifting idea for your next party!",
//       imageSrc: "/Blog Page/Assets/Blog 1 Circle.png",
//       readMoreLink: "#",
//     },
//     {
//       title: "Small and Unique gift ideas for your next birthday bash",
//       imageSrc: "/Blog Page/Assets/Blog 2 Circle.png",
//       readMoreLink: "#",
//     },
//     {
//       title: "Customised pouches for your 50th anniversary party",
//       imageSrc: "/Blog Page/Assets/Blog 3 Circle.png",
//       readMoreLink: "#",
//     },
//     {
//       title: "Announce your engagement in a special way",
//       imageSrc: "/Blog Page/Assets/Blog 4 Circle.png",
//       readMoreLink: "#",
//     },
//     {
//       title: "Find the perfect diwali gift with NexiGifting stand up pouches",
//       imageSrc: "/Blog Page/Assets/Blog 5 Circle.png",
//       readMoreLink: "#",
//     },
//     {
//       title: "Baby shower return gifts to make your loved ones feel special",
//       imageSrc: "/Blog Page/Assets/Blog 6 Circle.png",
//       readMoreLink: "#",
//     },
//     {
//       title: "Unique weddings favours to make your special day memorable!",
//       imageSrc: "/Blog Page/Assets/Blog 7 Circle.png",
//       readMoreLink: "#",
//     },
//     {
//       title: "10 items to gift with the NexiGifting pouch",
//       imageSrc: "/Blog Page/Assets/Blog 8 Circle.png",
//       readMoreLink: "#",
//     },
//   ];

//   return (
//     <section className="overflow-visible relative py-6 sm:py-10">
//       <div className="container mx-auto px-4 overflow-visible">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-2xl sm:text-3xl font-bold text-[#0f1729]">
//             Read More
//           </h2>
//         </div>
//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={isMobile ? 16 : 10}
//           slidesPerView={isMobile ? 1.2 : 1.5}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//           }}
//           breakpoints={
//             isMobile
//               ? {
//                   480: {
//                     slidesPerView: 1.5,
//                     spaceBetween: 20,
//                   },
//                   640: {
//                     slidesPerView: 2,
//                     spaceBetween: 24,
//                   },
//                 }
//               : {
//                   480: {
//                     slidesPerView: 2,
//                     spaceBetween: 15,
//                   },
//                   640: {
//                     slidesPerView: 3,
//                     spaceBetween: 20,
//                   },
//                   1024: {
//                     slidesPerView: 4,
//                     spaceBetween: 25,
//                   },
//                   1280: {
//                     slidesPerView: 5,
//                     spaceBetween: 0,
//                   },
//                 }
//           }
//         >
//           {blogPosts.map((post, index) => (
//             <SwiperSlide key={index}>
//               {isMobile ? (
//                 <MobileBlogCard index={index} {...post} />
//               ) : (
//                 <DesktopBlogCard index={index} {...post} />
//               )}
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default BlogCarousel;
