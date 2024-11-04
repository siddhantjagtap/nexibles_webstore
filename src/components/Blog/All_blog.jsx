"use client";
import Link from "next/link";
import Image from "next/image";

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
    <Link href={`/blog/${slug}`} passHref>
      <div
        className={`relative mt-10 mb-10 cursor-pointer ${backgroundColor} shadow-lg p-4 pt-16 pb-4
        md:h-[20rem] md:w-[15rem] h-[18rem] w-[12rem] flex flex-col justify-between m-2 mt-24`}
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="md:w-40 md:h-40 rounded-full overflow-hidden w-[10rem] h-[10rem]">
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
          <div className="text-center mt-2 px-1">
            <h3 className="text-white md:text-2xl text-lg mb-2 mt-4">
              {title}
            </h3>
          </div>
          <div className="text-center">
            <Link
              href={`/blog/${slug}`}
              passHref
              className="inline-block text-white hover:text-black px-3 py-1 rounded-full font-semibold text-lg transition duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

function All_blog() {
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
      // title: "Find the perfect diwali gift with NexiGifting stand up pouches",
      title:
        "Pack Happiness: 7 Thoughtful Gifts to Pack in NexiGifting Pouches",
      imageSrc: "/Blog Page/Assets/Blog 5 Circle.png",
    },
    // {
    //   title: "Baby shower return gifts to make your loved ones feel special",
    //   imageSrc: "/Blog Page/Assets/Blog 6 Circle.png",
    // },
    // {
    //   title: "Unique weddings favours to make your special day memorable!",
    //   imageSrc: "/Blog Page/Assets/Blog 7 Circle.png",
    // },
    // {
    //   title: "10 items to gift with the NexiGifting pouch",
    //   imageSrc: "/Blog Page/Assets/Blog 8 Circle.png",
    // },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center space-x-2 md:space-x-4 md:mt-36 mt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f1729]">Blogs</h2>
        <Image
          src="/Home/Blog Title Illustration.svg"
          alt="Blog Icon"
          width={40}
          height={30}
          className="w-20 h-20 md:w-32 md:h-32"
        />
      </div>
      <div className="px-10 flex flex-wrap justify-center mt-8">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} index={index} {...post} />
        ))}
      </div>
    </div>
  );
}

export default All_blog;

//before update
// "use client";
// import Link from "next/link";
// import Image from "next/image";

// const BlogCard = ({ title, imageSrc, readMoreLink, index }) => {
//   const createSlug = (title) => {
//     return title
//       .toLowerCase()
//       .replace(/[^\w\s-]/g, "")
//       .replace(/\s+/g, "-")
//       .replace(/--+/g, "-")
//       .trim();
//   };
//   const backgroundColor = index % 2 === 0 ? "bg-[#db5c3c]" : "bg-[#197d8e]";
//   const slug = createSlug(title);

//   return (
//     <Link href={`/blog/${slug}`} passHref>
//       <div
//         className={`relative mt-10 mb-10 cursor-pointer ${backgroundColor} shadow-lg p-4 pt-16 pb-4
//         md:h-[20rem] md:w-[15rem] h-[18rem] w-[12rem] flex flex-col justify-between m-2 mt-24`}
//       >
//         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//           <div className="md:w-40 md:h-40 rounded-full overflow-hidden w-[10rem] h-[10rem]">
//             <Image
//               src={imageSrc}
//               alt={title}
//               width={300}
//               height={300}
//               objectFit="cover"
//             />
//           </div>
//         </div>
//         <div className="flex flex-col flex-grow justify-between">
//           <div className="text-center mt-2 px-1">
//             <h3 className="text-white md:text-2xl text-lg mb-2 mt-4">
//               {title}
//             </h3>
//           </div>
//           <div className="text-center">
//             <Link
//               href={readMoreLink}
//               className="inline-block text-white hover:text-black px-3 py-1 rounded-full font-semibold text-lg transition duration-300"
//             >
//               Read More
//             </Link>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// function All_blog() {
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
//     <div className="container mx-auto ">
//       <div className="flex items-center justify-center space-x-2 md:space-x-4 md:mt-36 mt-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-[#0f1729]">Blogs</h2>
//         <Image
//           src="/Home/Blog Title Illustration.svg"
//           alt="Blog Icon"
//           width={40}
//           height={30}
//           className="w-20 h-20 md:w-32 md:h-32"
//         />
//       </div>
//       <div className="px-10 flex flex-wrap justify-center mt-8">
//         {blogPosts.map((post, index) => (
//           <BlogCard key={index} index={index} {...post} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default All_blog;
