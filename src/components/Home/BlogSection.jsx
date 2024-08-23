// components/BlogSection.js
import Image from "next/image";

const BlogCard = ({ title, imageSrc, readMoreLink, index }) => {
  // Determine background color based on index
  const backgroundColor = index % 2 === 0 ? "bg-[#9177ad]" : "bg-[#362c60]";

  return (
    <div
      className={`relative flex flex-col items-center ${backgroundColor} rounded-lg overflow-visible shadow-lg p-6`} // Set overflow to visible
    >
      <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-52 h-52 rounded-full bg-white p-2 flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={title}
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="pt-20 pb-6 text-center">
        <h3 className="text-white text-lg font-semibold my-16 mb-4">{title}</h3>
        <a
          href={readMoreLink}
          className="inline-block text-yellow-400 px-4 py-2 rounded-full font-semibold hover:text-yellow-300 transition duration-300"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Find the perfect diwali gift with NexiGifting stand up pouches",
      imageSrc: "/Home/TestinomalImg.png",
      readMoreLink: "#",
    },
    {
      title: "Unique wedding favors to make your special day memorable",
      imageSrc: "/Home/TestinomalImg.png",
      readMoreLink: "#",
    },
    {
      title: "10 items to gift with the NexiGifting pouch",
      imageSrc: "/Home/TestinomalImg.png",
      readMoreLink: "#",
    },
    {
      title: "Announce your engagement in a special way",
      imageSrc: "/Home/TestinomalImg.png",
      readMoreLink: "#",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-900 overflow-visible">
      <div className="container mx-auto px-4 overflow-visible">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} index={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
