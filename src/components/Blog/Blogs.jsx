"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const BlogCard = ({ title, imageSrc, readMoreLink, index }) => {
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
  };
  const backgroundColor = index % 2 === 0 ? "bg-[#db847d]" : "bg-[#66C1C2]";
  const slug = createSlug(title);
  return (

    <Link href={`/blog/${slug}`} passHref>
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
            <Link
              href={readMoreLink}
              className="inline-block text-black px-4 py-2 rounded-full font-semibold text-xl hover:text-white transition duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};
const Blogs = () => {
  const blogPosts = [
    {
      title:"Perfect holiday gifting idea for your next party!",
      imageSrc: "/Blog Page/Assets/Blog 1 Circle.png",
      readMoreLink: "#",
    },
    {
      title: "Small and Unique gift ideas for your next birthday bash",
      imageSrc: "/Blog Page/Assets/Blog 2 Circle.png",
      readMoreLink: "#",
    },
    {
      title: "Customised pouches for your 50th anniversary party",
      imageSrc: "/Blog Page/Assets/Blog 3 Circle.png",
      readMoreLink: "#",
    },
    {
      title: "Announce your engagement in a special way",
      imageSrc: "/Blog Page/Assets/Blog 4 Circle.png",
      readMoreLink: "#",
    },
    {
      title: "Find the perfect diwali gift with NexiGifting stand up pouches",
      imageSrc: "/Blog Page/Assets/Blog 5 Circle.png",
      readMoreLink: "#",
    },
    {
      title: "Baby shower return gifts to make your loved ones feel special",
      imageSrc: "/Blog Page/Assets/Blog 6 Circle.png",
      readMoreLink: "#",
    },
    {
      title: "Unique weddings favours to make your special day memorable!", 
      imageSrc: "/Blog Page/Assets/Blog 7 Circle.png",
      readMoreLink: "#",
    },
    {
      title: "10 items to gift with the NexiGifting pouch", 
      imageSrc: "/Blog Page/Assets/Blog 8 Circle.png",
      readMoreLink: "#",
    },
  ];

  useEffect(() => {
    import('swiper/css');
  }, []);

  return (
    // <section className="py-12 overflow-visible">
    //   <div className="container mx-auto px-4">
    <section className=" overflow-visible relative ">
      <div className="container mx-auto px-4 overflow-visible">
        <div className="flex items-center justify-center ">
          <h2 className="text-6xl font-bold text-[#0f1729]  mt-12">Blogs</h2>
          <Image
            src="/Home/Blog Title Illustration.svg"
            alt="Blog Icon"
            width={120}
            height={100}
          />
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={5}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide key={index}>
              <BlogCard index={index} {...post} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center mt-12">
          <Link href="/all-blog" className="bg-[#107d98] text-white px-8 py-4 mb-4 rounded-full text-xl font-semibold hover:bg-[#0c5f73] transition-colors">
            Show More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;