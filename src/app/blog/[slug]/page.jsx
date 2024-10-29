"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Diwaliphoto from "../../../../public/Blog Page/Assets/Blog 5 Full.jpg";
import Biscuit from "../../../../public/Blog Page/Assets/Blog 1 Full.jpg";
import Cake from "../../../../public/Blog Page/Assets/Blog 2 Full.jpg";
import Party from "../../../../public/Blog Page/Assets/Blog 3 Full.jpg";
import Ring from "../../../../public/Blog Page/Assets/Blog 4 Full.jpg";
import Baby from "../../../../public/Blog Page/Assets/Blog 6 Full.jpg";
import Marriage from "../../../../public/Blog Page/Assets/Blog 7 Full.jpg";
import DryFruits from "../../../../public/Blog Page/Assets/Blog 8 Full.jpg";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import BlogCarousel from "@/components/Blog/BlogsCarousel";

const BlogDetail = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const blogPosts = [
    {
      title: "Perfect holiday gifting idea for your next party!",
      imageSrc: Biscuit,
      slug: "perfect-holiday-gifting-idea-for-your-next-party",
    },
    {
      title: "Small and Unique gift ideas for your next birthday bash",
      imageSrc: Cake,
      slug: "small-and-unique-gift-ideas-for-your-next-birthday-bash",
    },
    {
      title: "Customised pouches for your 50th anniversary party",
      imageSrc: Party,
      slug: "customised-pouches-for-your-50th-anniversary-party",
    },
    {
      title: "Announce your engagement in a special way",
      imageSrc: Ring,
      slug: "announce-your-engagement-in-a-special-way",
    },
    {
      title: "Find the perfect diwali gift with NexiGifting stand up pouches",
      imageSrc: Diwaliphoto,
      slug: "find-the-perfect-diwali-gift-with-nexigifting-stand-up-pouches",
    },
    {
      title: "Baby shower return gifts to make your loved ones feel special",
      imageSrc: Baby,
      slug: "baby-shower-return-gifts-to-make-your-loved-ones-feel-special",
    },
    {
      title: "Unique weddings favours to make your special day memorable!",
      imageSrc: Marriage,
      slug: "unique-weddings-favours-to-make-your-special-day-memorable",
    },
    {
      title: "10 items to gift with the NexiGifting pouch",
      imageSrc: DryFruits,
      slug: "10-items-to-gift-with-the-nexigifting-pouch",
    },
  ];

  const currentBlog = blogPosts.find((post) => post.slug === slug);

  if (!currentBlog) {
    return <div>Blog post not found</div>;
  }

  const description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

  return (
    // <div className="blog-detail">
    <div className="[&>nav]:!bg-white">
      <Navbar />
      <div className="relative w-full h-[120px] sm:h-[400px] md:h-[450px] ">
        {/* <Image
          src={currentBlog.imageSrc}
          alt={currentBlog.title}
          layout="fill"
          objectFit="cover"
        /> */}
        <Image
          src={currentBlog.imageSrc}
          alt={currentBlog.title}
          className="w-full md:h-[500px] h-[200px] object-contain md:mt-4"
        />
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:mt-0 mt-8 px-4 sm:px-8 md:px-16 lg:px-32 italic text-center text-[#db5c3c]">
        {currentBlog.title}
      </h1>
      <p className="text-sm sm:text-base md:text-lg italic m-4 px-4 sm:px-8 md:px-16 lg:px-32 text-center">
        {description}
      </p>
      <div className="mt-8">
        <BlogCarousel />
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;

// "use client";
// import { usePathname } from 'next/navigation';
// import Image from 'next/image';
// import Diwaliphoto from '../../../../public/Blog Page/Assets/Blog 5 Full.jpg'
// import Biscuit from '../../../../public/Blog Page/Assets/Blog 1 Full.jpg'
// import Cake from '../../../../public/Blog Page/Assets/Blog 2 Full.jpg'
// import Party from '../../../../public/Blog Page/Assets/Blog 3 Full.jpg'
// import Ring from '../../../../public/Blog Page/Assets/Blog 4 Full.jpg'
// import Baby from '../../../../public/Blog Page/Assets/Blog 6 Full.jpg'
// import Marriage from '../../../../public/Blog Page/Assets/Blog 7 Full.jpg'
// import DryFruits from '../../../../public/Blog Page/Assets/Blog 8 Full.jpg'
// import Navbar from '@/components/Home/Navbar';
// import Footer from '@/components/Home/Footer';
// import BlogCarousel from '@/components/Blog/BlogsCarousel';

// const BlogDetail = () => {
//     const pathname = usePathname();
//     const slug = pathname.split('/').pop();

//     const blogPosts = [
//         {
//             title: "Perfect holiday gifting idea for your next party!",
//             imageSrc: Biscuit,
//             slug: "perfect-holiday-gifting-idea-for-your-next-party",
//         },
//         {
//             title: "Small and Unique gift ideas for your next birthday bash",
//             imageSrc: Cake,
//             slug: "small-and-unique-gift-ideas-for-your-next-birthday-bash",
//         },
//         {
//             title: "Customised pouches for your 50th anniversary party",
//             imageSrc: Party,
//             slug: "customised-pouches-for-your-50th-anniversary-party",
//         },
//         {
//             title: "Announce your engagement in a special way",
//             imageSrc: Ring,
//             slug: "announce-your-engagement-in-a-special-way",
//         },
//         {
//             title: "Find the perfect diwali gift with NexiGifting stand up pouches",
//             imageSrc: Diwaliphoto,
//             slug: "find-the-perfect-diwali-gift-with-nexigifting-stand-up-pouches",
//         },
//         {
//             title: "Baby shower return gifts to make your loved ones feel special",
//             imageSrc: Baby,
//             slug: "baby-shower-return-gifts-to-make-your-loved-ones-feel-special",
//         },
//         {
//             title: "Unique weddings favours to make your special day memorable!",
//             imageSrc: Marriage,
//             slug: "unique-weddings-favours-to-make-your-special-day-memorable",
//         },
//         {
//             title: "10 items to gift with the NexiGifting pouch",
//             imageSrc: DryFruits,
//             slug: "10-items-to-gift-with-the-nexigifting-pouch",
//         },
//     ];

//     const currentBlog = blogPosts.find(post => post.slug === slug);

//     if (!currentBlog) {
//         return <div>Blog post not found</div>;
//     }

//     const description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

//     return (
//         <div className="blog-detail">
//             <Navbar />
// <Image src={currentBlog.imageSrc} alt={currentBlog.title} className='w-full h-[500px] object-contain' />
//             <p className='text-5xl mt-4 px-[25rem] italic text-center text-[#db5c3c]'>{currentBlog.title}</p>
//             <p className='text-md italic m-4 px-40 text-center'>{description}</p>
//             <div>
//                 <BlogCarousel />
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default BlogDetail;
