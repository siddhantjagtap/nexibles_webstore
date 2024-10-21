"use client";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ title, imageSrc, readMoreLink, index }) => {
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
  };
  const backgroundColor = index % 2 === 0 ? "bg-[#66C1C2]" : "bg-[#db847d]";
  const slug = createSlug(title);
  return (
    <Link href={`/blog/${slug}`} passHref>
      <div
        className={`relative mt-20 mb-20 cursor-pointer ${backgroundColor} shadow-lg p-4 pt-24 pb-6 
        md:h-[25rem] md:w-[18rem] h-[22rem] w-[15rem] flex flex-col justify-between m-4`}
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="md:w-60 md:h-60 rounded-full overflow-hidden w-[12rem] h-[12rem]">
            <Image
              src={imageSrc}
              alt={title}
              width={300}
              height={300}
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex flex-col flex-grow justify-between">
          <div className="text-center mt-4 px-2">
            <h3 className="text-white md:text-3xl text-xl mb-4 mt-8">
              {title}
            </h3>
          </div>
          <div className="text-center">
            <a
              href={readMoreLink}
              className="inline-block text-white hover:text-black t px-4 py-2 rounded-full font-semibold text-xl transition duration-300"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
};

function All_blog() {
  const blogPosts = [
    {
      title: "Perfect holiday gifting idea for your next party!",
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

  return (
    <div className="container mx-auto ">
      {/* <div className="flex items-center justify-center md:mt-36">
        <h2 className="text-6xl font-bold text-[#0f1729] ">Blogs</h2>
        <Image
          src="/Home/Blog Title Illustration.svg"
          alt="Blog Icon"
          width={120}
          height={100}
        />
      </div> */}

      <div className="flex items-center justify-center space-x-2 md:space-x-4 md:mt-36 mt-12">
        {/* Blog heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-[#0f1729]">Blogs</h2>
        {/* Image next to the heading */}
        <Image
          src="/Home/Blog Title Illustration.svg"
          alt="Blog Icon"
          width={40}
          height={30}
          className="w-20 h-20 md:w-32 md:h-32"
        />
      </div>
      <div className="px-20 flex flex-wrap justify-center mt-12">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} index={index} {...post} />
        ))}
      </div>
    </div>
  );
}

export default All_blog;
