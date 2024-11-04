"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
// import Diwaliphoto from "../../../../public/Blog Page/Assets/Blog 5 Full.jpg";
import Biscuit from "../../../../public/Blog Page/Assets/Blog 5 Image.jpg";
import GrandMother from "../../../../public/Blog Page/Assets/Blog 1 Image.jpg";
import Cake from "../../../../public/Blog Page/Assets/Blog 2 Image.jpg";
import Party from "../../../../public/Blog Page/Assets/Blog 3 Image.jpg";
import Ring from "../../../../public/Blog Page/Assets/Blog 4 Image.jpg";
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
      title:
        "Low MOQ,High Impact: Maximizing Limited-Edition Gifting With Custom Packaging",
      imageSrc: GrandMother,
      slug: "low-moqhigh-impact-maximizing-limited-edition-gifting-with-custom-packaging",
      description:
        "Discoverggf creative ways to surprise your guests with unique holiday gifts that will make your party unforgettable.",
    },
    {
      title:
        "Celebration in a Pouch: How Custom Packaging Can Tranform Festive Occassions",
      imageSrc: Cake,
      slug: "celebration-in-a-pouch-how-custom-packaging-can-tranform-festive-occassions",
      description:
        "Explore thoughtful and unique birthday gift ideas that will make every celebration special.",
    },
    {
      title: "Nostalgia in a Pouch: Curating Gifts that Spark Memories",
      imageSrc: Party,
      slug: "nostalgia-in-a-pouch-curating-gifts-that-spark-memories",
      description:
        "Learn how customized pouches can add a personal touch to your 50th anniversary celebration.",
    },
    {
      // title: "Announce your engagement in a special way",
      title:
        "Unwrap the Joy: How Custom Packaging Makes Holiday Gifting Extra Special",
      imageSrc: Ring,
      slug: "unwrap-the-joy-how-custom-packaging-makes-holiday-gifting-extra-special",
      description:
        "Get inspired by unique ideas to announce your engagement and celebrate this beautiful moment.",
    },
    {
      title:
        "Pack Happiness: 7 Thoughtful Gifts to Pack in NexiGifting Pouches",
      imageSrc: Biscuit,
      slug: "pack-happiness-7-thoughtful-gifts-to-pack-in-nexigifting-pouches",
      description: `
      Gift-giving is an art, and the presentation can elevate the entire experience for both the giver and receiver.
      A beautifully curated gift can bring a genuine smile and transform a simple gesture into a cherished memory that lingers close to the heart.
      Our customizable gifting pouches provide the perfect canvas for your creativity, allowing your message to truly resonate.
      If you’re looking for inspiration, here are seven thoughtful gifts you can pack in your NexiPouch:

      1. **Sweet Treats**
      Fill your NexiPouch with a pouch filled with gourmet chocolates or homemade cookies.
      Sweet treats are perfect for any occasion—birthdays, celebrations, or simply because! NexiPouch provides both a heartfelt note to add that extra layer of sentiment.

      2. **Mini Care Packages**
      Whether someone is going through tough times or not, everyone deserves a little TLC. 
      Create a mini care package filled with luxurious hand creams, soothing lip balms, essential oils, & snacks.
      Presented in a beautifully designed pouch, this thoughtful gesture says, ‘I care.’

      3. **Party Favours**
      Make any party event unforgettable with gifts in one or more vibrant NexiPouch brimming with colorful items!
      Give your event that personal touch and ensure that memory-filled gift for your celebration.
      Whether it’s a romantic wedding or a fun birthday bash, these personalized touches will leave your guests feeling special.

      4. **Gift Cards**
      Transform the traditional gift card presentation by placing it in a stylishly designed pouch accompanied by a personal note.
      This simple addition elevates the experience, turning a gift card into a memorable surprise.
      It’s the perfect way to let someone choose exactly what they desire while showing you care.

      5. **Craft Kits**
      Share the gift of creativity with a craft kit nestled in a vibrant NexiPouch!
      This isn’t just a present; it’s an invitation to explore a creative activity.
      Knitting, painting, or building—a craft kit provides a chance to unwind and unleash their inner artist.
      Plus, the exquisite pouch adds flair, making for a memorable gift that inspires fun & imagination.

      6. **Customized Jewellery**
      Create the ordinary gift experience personalized, presenting a favorite piece of jewelry or elegant earrings in a stylish NexiPouch.
      The dark blue pouch holds the elegant treasure inside, while the minimalistic elegance is perfect for personalization—whether an anklet or necklace, NexiPouch transforms jewelry into a timeless treasure that resonates on a deeper level.

      7. **Snack Attack Delight**
      Create an unforgettable snack experience by curating a pouch filled with their favorite dried fruits, nuts, & maybe some dark chocolate.
      If they’re a foodie or just love their salty snacks, the thoughtful way with NexiPouch, every gift can become a cherished treat that enhances the experience.
    `,
    },
    {
      title: "Baby shower return gifts to make your loved ones feel special",
      imageSrc: Baby,
      slug: "baby-shower-return-gifts-to-make-your-loved-ones-feel-special",
      description:
        "Find the best baby shower return gifts that will leave a lasting impression on your guests.",
    },
    {
      title: "Unique weddings favours to make your special day memorable!",
      imageSrc: Marriage,
      slug: "unique-weddings-favours-to-make-your-special-day-memorable",
      description:
        "Explore unique wedding favors that will delight your guests and make your special day unforgettable.",
    },
    {
      title: "10 items to gift with the NexiGifting pouch",
      imageSrc: DryFruits,
      slug: "10-items-to-gift-with-the-nexigifting-pouch",
      description:
        "Discover ten perfect items to include with the NexiGifting pouch for any occasion.",
    },
  ];

  const currentBlog = blogPosts.find((post) => post.slug === slug);

  if (!currentBlog) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="[&>nav]:!bg-white">
      <Navbar />
      <div className="relative w-full h-[120px] sm:h-[400px] md:h-[450px] ">
        <Image
          src={currentBlog.imageSrc}
          alt={currentBlog.title}
          className="md:w-full md:h-full h-full object-cover md:mt-4"
        />
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl md:mt-8 mt-8 px-4 sm:px-8 md:px-16 lg:px-32 italic text-center text-[#197d8e]">
        {currentBlog.title}
      </h1>
      {/* <p className="text-sm sm:text-base md:text-lg italic m-4 px-4 sm:px-8 md:px-16 lg:px-32 text-center">
        {currentBlog.description}
      </p> */}

      <p className="text-sm sm:text-base md:text-lg italic m-4 px-4 sm:px-8 md:px-16 lg:px-32 text-center text-[#db5c3c]">
        {currentBlog.description}
      </p>

      <div className="mt-8">
        <BlogCarousel />
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;








//before updated
// "use client";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import Diwaliphoto from "../../../../public/Blog Page/Assets/Blog 5 Full.jpg";
// import Biscuit from "../../../../public/Blog Page/Assets/Blog 1 Full.jpg";
// import Cake from "../../../../public/Blog Page/Assets/Blog 2 Full.jpg";
// import Party from "../../../../public/Blog Page/Assets/Blog 3 Full.jpg";
// import Ring from "../../../../public/Blog Page/Assets/Blog 4 Full.jpg";
// import Baby from "../../../../public/Blog Page/Assets/Blog 6 Full.jpg";
// import Marriage from "../../../../public/Blog Page/Assets/Blog 7 Full.jpg";
// import DryFruits from "../../../../public/Blog Page/Assets/Blog 8 Full.jpg";
// import Navbar from "@/components/Home/Navbar";
// import Footer from "@/components/Home/Footer";
// import BlogCarousel from "@/components/Blog/BlogsCarousel";

// const BlogDetail = () => {
//   const pathname = usePathname();
//   const slug = pathname.split("/").pop();

//   const blogPosts = [
//     {
//       title: "Perfect holiday gifting idea for your next party!",
//       imageSrc: Biscuit,
//       slug: "perfect-holiday-gifting-idea-for-your-next-party",
//     },
//     {
//       title: "Small and Unique gift ideas for your next birthday bash",
//       imageSrc: Cake,
//       slug: "small-and-unique-gift-ideas-for-your-next-birthday-bash",
//     },
//     {
//       title: "Customised pouches for your 50th anniversary party",
//       imageSrc: Party,
//       slug: "customised-pouches-for-your-50th-anniversary-party",
//     },
//     {
//       title: "Announce your engagement in a special way",
//       imageSrc: Ring,
//       slug: "announce-your-engagement-in-a-special-way",
//     },
//     {
//       title: "Pack Happiness: 7 Thougtful Gifts to Pack in NexiGifting Pouches",
//       // title: "Find the perfect diwali gift with NexiGifting stand up pouches",
//       imageSrc: Diwaliphoto,
//       // slug: "find-the-perfect-diwali-gift-with-nexigifting-stand-up-pouches",
//       slug: "pack-happiness-7-thougtful-gifts-to-pack-in-nexigifting-pouches",
//     },
//     {
//       title: "Baby shower return gifts to make your loved ones feel special",
//       imageSrc: Baby,
//       slug: "baby-shower-return-gifts-to-make-your-loved-ones-feel-special",
//     },
//     {
//       title: "Unique weddings favours to make your special day memorable!",
//       imageSrc: Marriage,
//       slug: "unique-weddings-favours-to-make-your-special-day-memorable",
//     },
//     {
//       title: "10 items to gift with the NexiGifting pouch",
//       imageSrc: DryFruits,
//       slug: "10-items-to-gift-with-the-nexigifting-pouch",
//     },
//   ];

//   const currentBlog = blogPosts.find((post) => post.slug === slug);

//   if (!currentBlog) {
//     return <div>Blog post not found</div>;
//   }

//   const description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

//   return (
//     // <div className="blog-detail">
//     <div className="[&>nav]:!bg-white">
//       <Navbar />
//       <div className="relative w-full h-[120px] sm:h-[400px] md:h-[450px] ">
//         {/* <Image
//           src={currentBlog.imageSrc}
//           alt={currentBlog.title}
//           layout="fill"
//           objectFit="cover"
//         /> */}
//         {/* <Image
//           src={currentBlog.imageSrc}
//           alt={currentBlog.title}
//           className="w-full md:h-[500px] h-[200px] object-contain md:mt-4"
//         /> */}
//         <Image
//           src={currentBlog.imageSrc}
//           alt={currentBlog.title}
//           className="md:w-full md:h-full h-full object-cover md:mt-4"
//         />
//       </div>
//       <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:mt-0 mt-8 px-4 sm:px-8 md:px-16 lg:px-32 italic text-center text-[#db5c3c]">
//         {currentBlog.title}
//       </h1>
//       <p className="text-sm sm:text-base md:text-lg italic m-4 px-4 sm:px-8 md:px-16 lg:px-32 text-center">
//         {description}
//       </p>
//       <div className="mt-8">
//         <BlogCarousel />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default BlogDetail;

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
