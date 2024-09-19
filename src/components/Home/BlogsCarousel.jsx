"use client";
import Link from "next/link";
import Image from "next/image";
const BlogCard = ({ title, imageSrc, readMoreLink, index }) => {
  const backgroundColor = index % 2 === 0 ? "bg-[#db847d]" : "bg-[#66C1C2]";
  const encodedTitle = encodeURIComponent(title);
  return (
    <Link href={`/blog/${encodedTitle}`} passHref>
      <div
        className={`relative cursor-pointer ${backgroundColor} overflow-visible shadow-lg p-4 pt-24 pb-6 h-80 w-60 flex flex-col justify-between`}
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
            <a
              href={readMoreLink}
              className="inline-block text-black px-4 py-2 rounded-full font-semibold text-xl hover:text-gray-500 transition duration-300"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
};

const BlogCarousel = () => {
  const blogPosts = [
    {
      title: "Find the perfect diwali gift with NexiGifting stand up pouches",
      imageSrc: "/Home/Blog Image 1.jpg",
      readMoreLink: "#",
    },
    {
      title: "Unique wedding favors to make your special day memorable",
      imageSrc: "/Home/Blog Image 2.jpg",
      readMoreLink: "#",
    },
    {
      title: "10 items to gift with the NexiGifting pouch",
      imageSrc: "/Home/Blog Image 3.jpg",
      readMoreLink: "#",
    },
    {
      title: "Announce your engagement in a special way",
      imageSrc: "/Home/Blog Image 4.jpg",
      readMoreLink: "#",
    },
  ];

  return (
    <section className=" overflow-visible relative ">
      <div className="container mx-auto px-4 overflow-visible">
        <div className="flex items-center justify-center mb-28">
          <h2 className="text-3xl font-bold text-[#0f1729] mr- mt-12">Read More</h2>
          {/* <Image
            src="/Home/Blog Title Illustration.svg"
            alt="Blog Icon"
            width={120}
            height={100}
          /> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} index={index} {...post} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button className="bg-[#107d98] text-white px-8 py-4 mb-4 rounded-full text-xl font-semibold hover:bg-[#0c5f73] transition-colors">
            Show More
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;

