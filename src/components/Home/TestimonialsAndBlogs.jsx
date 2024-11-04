"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import HomepageArch1 from "../../../public/Home/Homepage-Arch-1.svg";

const BlogCard = ({ title, imageSrc, readMoreLink, index }) => {
  const backgroundColor = index % 2 === 0 ? "bg-gray-400" : "bg-[#362c60]";
  return (
    <div
      className={`relative flex flex-col items-center ${backgroundColor} rounded-lg overflow-visible shadow-lg p-6`}
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
        
          <a href={readMoreLink}
          className="inline-block text-yellow-400 px-4 py-2 rounded-full font-semibold hover:text-yellow-300 transition duration-300"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default function TestimonialsAndBlogs() {
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
    <div className="bg-[#464087] relative overflow-hidden" >
      {/* <div className="absolute top-0 mr-2 w-full h-full">
        <Image
          src={HomepageArch1}
          alt="Background Arch"
          layout="intrinsic"
          height={1000} // match height of the uploaded image
          width={1180} // match width of the uploaded image
          className=""
        />
      </div> */}
      <div className="absolute right-[0px] top-0 ml-auto h-full w-auto">
        <Image
          src={HomepageArch1}
          alt="Decorative Arch"
          layout="intrinsic"
          height={1500} // match height of the uploaded image
          width={1550} // match width of the uploaded image
          className="mt-[10rem]"
        />
      </div>
      <div className="py-1 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center mb-12 flex justify-center items-center">
          <div className="flex items-center space-x-3">
            <Image
              src="/Home/Walking Illustration.svg"
              alt="Testimonial Icon"
              width={150}
              height={10}
            />
            <h1 className="font-gotham-bold text-pt-40 text-yellow-400">Testimonials</h1>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
            <div className="flex flex-col h-full">
              <div className="bg-[#9187a6] p-6 rounded-3xl shadow-lg mx-auto max-w-sm flex-1">
                <p className="text-black text-base">
                  {`"These pouches were perfect for our Diwali gift hampers. The
                  option to personalize each one made our gifts stand out and
                  brought smiles all around."`}
                </p>
                <p className="mt-4 text-center text-black">{`- Ashish W`}</p>
              </div>
              <div className="flex justify-center mt-4 text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} size={20} />
                ))}
              </div>
            </div>
            <div className="flex flex-col h-full">
              <div className="bg-[#f7eee5] p-6 rounded-3xl shadow-lg mx-auto max-w-sm flex-1">
                <p className="text-black text-base">
                  {`"I used these pouches for wedding favors and they were a hit!
                  It looked great with our pictures on the pouch, the guests got
                  to take home a cherished personalised gift."`}
                </p>
                <p className="mt-4 text-center text-black">{`- Disha S`}</p>
              </div>
              <div className="flex justify-center mt-4 text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} size={20} />
                ))}
              </div>
            </div>
            <div className="flex flex-col h-full">
              <div className="bg-[#9187a6] p-6 rounded-3xl shadow-lg mx-auto max-w-sm flex-1">
                <p className="text-black text-base">
                  {`"I gave my family these pouches filled with gourmet coffee &
                  chocolates. The quality & easy customization was top-notch. It
                  made the gifts more memorable!"`}
                </p>
                <p className="mt-4 text-center text-black">{`- Prasad N`}</p>
              </div>
              <div className="flex justify-center mt-4 text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} size={20} />
                ))}
              </div>
            </div>
            <div className="flex flex-col h-full">
              <div className="bg-[#f7eee5] p-6 rounded-3xl shadow-lg mx-auto max-w-sm flex-1">
                <p className="text-black text-base">
                  {`"The Nexipouches were fantastic for our baby shower return
                  gifts. They were stylish, durable & we got to give some cute
                  gifts to our guests."`}{" "}
                </p>
                <p className="mt-4 text-center text-black">{`- Grishma C`}</p>
              </div>
              <div className="flex justify-center mt-4 text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} size={20} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-28">
          <Image
            src="/Home/Want your own design illustration.svg"
            alt="Testimonial Icon"
            width={300}
            height={50}
          />
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold text-yellow-400 mb-4">
              {`Want your own design?`}
            </h1>
            <p className="text-white text-xl text-center">
              {`Not finding what you want exactly?`}
              <br />
              {`Reach out to us at`}{" "}
              <a href="mailto:sales@artnext.in" className="text-yellow-400">
                {`sales@artnext.in`}
              </a>
              <br />
              {`and our designers will customise`}
              <br />
              {` the pouch as per your specific needs.`}
            </p>
          </div>
        </div>
      </div>
      <section className="py-16 overflow-visible relative z-10">
        <div className="container mx-auto px-4 overflow-visible">
          <div className="flex items-center justify-center mb-12">
            <h2 className="text-4xl font-bold text-yellow-400 mr- mt-12">
              Blogs
            </h2>
            <Image
              src="/Home/Blog Title Illustration.svg"
              alt="Blog Icon"
              width={120}
              height={100}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} index={index} {...post} />
            ))}
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="bg-yellow-400 px-4 py-2 rounded-full font-bold text-2xl text-[#464087] hover:bg-yellow-300 transition duration-300">
              Show More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}