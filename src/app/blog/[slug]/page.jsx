"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
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
import PopularProducts from "@/components/Blog/PopularProducts";

const BlogDetail = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const blogPosts = [
    {
      title:
        "Low MOQ, High Impact: Maximizing Limited-Edition Gifting With Custom Packaging",
        
      imageSrc: GrandMother,
      slug: "low-moqhigh-impact-maximizing-limited-edition-gifting-with-custom-packaging",
      introduction:
        "In the world of gifting, making a lasting impression is everything. With NexiGifting's innovative low MOQ solutions, you can now create personalized, limited-edition gifts that speak volumes without breaking the bank. Let's explore how our custom packaging solutions can transform your gifting experience:",
      sections: [
        {
          heading: "The Power of Personalization",
          content:
            "When it comes to gifting, the experience often lies in the details. Custom packaging can transform ordinary gifts into extraordinary experiences, especially during special occasions. With NexiGifting's low minimum order quantities (MOQs), you have the power to create limited-edition gifts that feel personal & unique—perfect for every celebration moment.",
        },
        {
          heading: "Affordable & Creative Gifting",
          content:
            "Gone are the days when you needed to order dozens of items just to get a good deal on custom packaging. NexiGifting's low MOQs mean you can affordably create small batches of personalized gifts that pack a punch. Imagine curating a special gift set for your best friend, complete with a pouch that showcases their favorite colors, quotes, or even a photo.",
        },
        {
          heading: "Crafting Memorable Moments",
          content:
            "Custom pouches not only enhance the gifting experience but also create memorable moments for both the giver and receiver. Picture the delight on a loved one's face when they unpack a beautifully packaged gift that has been thoughtfully tailored to them. This added layer of care & attention to detail turns a simple gift into a cherished memory.",
        },
        {
          heading: "Sustainability Meets Sentimentality",
          content:
            "In a world increasingly focused on sustainability, why not incorporate eco-friendly choices into your gifting? NexiGifting offers sustainable materials that not only elevate your packaging but also align with values that are important to many. Gifting responsibly shows that you care about the planet as much as you care about your loved ones.",
        },
        {
          heading: "Perfect for Every Occasion",
          content:
            "With the flexibility that low MOQs offer, you can design custom packaging for every occasion. Want to celebrate a friend's promotion with a unique gift? Or perhaps create a memorable set for a family reunion? NexiGifting allows you to bring your ideas to life without the stress of excess inventory or high costs. This holiday season, you can easily craft themed gifts that align perfectly with the spirit of the occasion.",
        },
        {
          heading: "Stand Out with Every Gift",
          content:
            "Ultimately, the goal of gifting is to express love, appreciation, & thoughtfulness. With NexiGifting's low MOQ, you can create high-impact, limited-edition gifts that elevate the experience for your loved ones. Every pouch can be a canvas for your creativity, making your gifts not just presents, but cherished memories.",
        },
      ],
    },
    {
      title:
        "Pack Happiness: 7 Thoughtful Gifts to Pack in NexiGifting Pouches",
      imageSrc: Biscuit,
      slug: "pack-happiness-7-thoughtful-gifts-to-pack-in-nexigifting-pouches",
      introduction:
        "Gift-giving is an art, and the presentation can elevate the entire experience for both the giver and receiver. A beautifully curated gift can bring a genuine smile and transform a simple gesture into a cherished memory that lingers close to the heart. Our customizable gifting pouches provide the perfect canvas for your creativity, allowing your message to truly resonate. If you're looking for inspiration, here are seven thoughtful gifts you can pack in your NexiPouch:",
      sections: [
        {
          heading: "Sweet Treats",
          content:
            "Fill your NexiPouch with gourmet chocolates, homemade cookies, or carefully selected confections that bring joy with every bite. Transform ordinary treats into extraordinary delights by presenting them in a beautifully crafted NexiPouch that adds that extra special touch.",
        },
        {
          heading: "Mini Care Packages",
          content:
            "Whether someone is going through tough times or not, everyone deserves a little TLC. Create a mini care package with selected comfort items, self-care products, and personal touches. Pack it all in a NexiPouch decorated with uplifting messages or calming designs.",
        },
        {
          heading: "Party Favours",
          content:
            "Make any celebration unforgettable with party favors presented in vibrant NexiPouches. Whether it's a birthday, shower, or special event, customized pouches add that perfect finishing touch to your party favors.",
        },
        {
          heading: "Gift Cards",
          content:
            "Transform the traditional gift card presentation by placing it in a stylishly designed pouch. Add a personal note, some confetti, or small treats to make opening a gift card as exciting as any other present.",
        },
        {
          heading: "Craft Kits",
          content:
            "Share the gift of creativity with a craft kit nestled in a vibrant NexiPouch. Whether it's a DIY bracelet making kit, paint set, or other creative supplies, presenting them in a custom pouch adds to the excitement of getting started on a project.",
        },
        {
          heading: "Customized Jewellery",
          content:
            "Present a favorite piece of jewelry in a stylish NexiPouch. Turn a simple gift into an unforgettable moment! Pack it alongside other small accessories or trinkets to create a curated set. Personalization—whether a name or a significant date—makes the unveiling even more special.",
        },
        {
          heading: "Snack Attack Delight",
          content:
            "Create an unforgettable snacking experience by curating a pouch filled with favorite treats. Mix sweet and savory options, add some unique finds, and maybe include a heartfelt note. This thoughtful combination in a custom NexiPouch makes for a perfect pick-me-up gift!",
        },
      ],
    },
    {
      title:
        "Celebration in a Pouch: How Custom Packaging Can Transform Festive Occasions",
      imageSrc: Cake,
      slug: "celebration-in-a-pouch-how-custom-packaging-can-tranform-festive-occassions",
      sections: [
        {
          heading: "Setting the Scene for Something Special",
          content:
            "Festive occasions are all about creating unforgettable moments, & custom packaging can make any gift feel like an event in itself. Instead of traditional gift-wrapping with festive patterns, try a beautiful pouch personalized with colors & elements that represent your event. With NextGenFlex, your packaging isn't just a container—it's part of the celebration!",
        },
        {
          heading: " Add a Personal Touch: Customization Beyond the Basics",
          content:
            "When it comes to festive packaging, even the smallest personal touches are everything. Imagine gifting pouches with custom colors, fonts, or even inside jokes printed right on them. But the real fun? Memorable customizations turn something simple like a pouch into a piece of the magic.",
        },
        {
          heading: "Transforming Everyday Moments into Festive Memories",
          content:
            "Seasonal celebrations offer a perfect time to elevate the basics! Seasonal celebrations call for fun, envelope-pushing packaging ideas. Think pouches filled with treats & decor designed around themed events like holiday parties or family gatherings. The flexibility of pouches means your gift-giving can be as big or as small as you want it to be. Create a truly special moment without the stress of traditional wrapping & ribbons.",
        },

        {
          heading: " Occasion-Based Pouches for Year-Round Joy",
          content:
            "Why should the joy of pouches be restricted to the holidays? Unique packaging options for smaller, more intimate moments are all the rage. A well-designed, branded pouch can be the perfect way to wrap gifts for birthdays, anniversaries, or even spontaneous gestures of love. Whether it's for winter celebrations, summer soirees, or the milestone events in-between, pouches add an extra element of surprise.",
        },

        {
          heading: "Beyond Packaging: From Gift to Keepsake",
          content:
            "Why limit the magic of festive pouches to wrapping? Instead of holding onto memories, recipients often keep custom pouches for future use, such as for organizing or travel. In this way, extending the brand of gift-giving beyond the moment itself creates a keepsake that continues to remind them of the occasion long after the day has passed.",
        },

        {
          heading: "Wrapping It All Up: Make Every Occasion Stand Out",
          content:
            "When it comes to creating that moment, custom packaging elevates any gift beyond the basics. Whether for holidays, birthdays, or other special events, pouches provide a flexible, beautiful, & reusable option for wrapping that truly stands out. Ready to transform your gifts into memories? Explore NextGenFlex and imagine the gifting possibilities!",
        },
      ],
    },
    {
      title: "Nostalgia in a Pouch: Curating Gifts that Spark Memories",
      imageSrc: Party,
      slug: "nostalgia-in-a-pouch-curating-gifts-that-spark-memories",
      introduction:
        "In a fast-paced world, nostalgia offers a comforting break, reminding us of simpler times & cherished experiences. What if you could capture those moments in a beautifully designed pouch? With NexGifting, you can create thoughtful gift packages filled with items that evoke fond memories, turning ordinary gifts into heartfelt treasures.",
      sections: [
        {
          heading: "Crafting the Perfect Nostalgic Gift: ",
          content:
            "Personal memories start by including items that hold special meaning for the recipient. This could be anything from a favorite childhood toy to a handwritten letter that recalls a shared experience. Personal touches transform a simple pouch into a cherished keepsake.",
        },
        {
          heading: "Themed Packages: ",
          content:
            "Consider curating themed gifts that reflect shared interests or pivotal moments in your relationship. For example, an Adventure pouch might include a map from a special trip, a vintage postcard from a beloved beach, & a photo of the two of you together. Each item will tell a story that brings a smile.",
        },
        {
          heading: " Sensory Reminders: ",
          content:
            "Engage the senses to evoke powerful memories. Include scents that trigger nostalgia, such as lavender for relaxation or coffee beans for cozy mornings. Add a playlist of songs or a USB filled with old photos to immerse the recipient in joyful reminiscence.",
        },

        {
          heading: "  Handwritten Notes:",
          content:
            " In a digital age, a handwritten note carries sentimental value. Share your favorite memory with the recipient & why it matters. This personal touch adds depth to your gift, transforming it from a simple pouch into a heartfelt experience.",
        },

        {
         
          heading: " Experience Over Objects:  ",
          content:
            " Consider including experience vouchers - these can be for activities like a movie night, a cooking session, or a visit to a local attraction. These tokens promise future memories & can be presented in a creative way, such as a beautifully designed ticket in your pouch.",
        },
        {
          heading: "Making it Unique: ",
          content:
            " The magic of gifting nostalgia lies in its personal touch. Each pouch can be uniquely tailored to the recipient's journey, filled with items that resonate with their life experiences. With NexGifting, your creativity knows no bounds. Explore the endless possibilities of creating gifts that spark joy through shared moments.",
        },
        {
          heading: "More Than Just a Gift: ",
          content:
            "  Nostalgia is a powerful connector, reminding us of the bonds we've built over the years. By curating thoughtful gift packages filled with sentimental items, you can create an unforgettable experience for your loved ones. So, this gifting season, embrace the beauty of memories with packages that go beyond conventional. With NexGifting's customizable pouches, your heartfelt gesture will shine brightly, turning memories into treasures.",
        },
      ],
    },
    {
      title:
        "Unwrap the Joy: How Custom Packaging Makes Holiday Gifting Extra Special",
      imageSrc: Ring,
      slug: "unwrap-the-joy-how-custom-packaging-makes-holiday-gifting-extra-special",

      sections: [
        {
          heading: "The Magic of Presentation",
          content:
            "During the holiday season, the joy of giving is often amplified by the excitement of unwrapping. Custom packaging transforms ordinary gifts into extraordinary experiences, elevating the anticipation and delight of the moment. Whether it's a beautifully wrapped box or a uniquely designed pouch, the presentation can make a lasting impression.",
        },
        {
          heading: "Personalization: A Touch of Thoughtfulness ",
          content:
            "Adding personal touches—like a handwritten note or a special design that reflects the recipient’s personality—can elevate the unwrapping experience. Imagine gifting a friend a cozy blanket in a pouch adorned with their favorite colors or a holiday motif. It’s not just about the gift; it's about making them feel cherished.",
        },
        {
          heading: " Crafting a Festive Experience",
          content:
            "Why not take it up a notch? Turn your packaging into a true celebration! Use fun, colorful wrapping materials, and include little surprises within the package, like holiday-themed treats or ornaments. Encourage your loved ones to share their unboxing experiences on social media, creating a community around the joy of giving and receiving.",
        },
        {
          heading: "  Sustainable Choices: Gifts That Care",
          content:
            "This holiday season, consider eco-friendly packaging options that reflect your values. Opt for reusable pouches or recyclable materials that show you care for both your loved ones and the planet. Sustainable gifting not only enhances the experience but also contributes to a cause we can all get behind.",
        },

        {
          heading: " Make Every Gift a Celebration",
          content:
            "Ultimately, it's the thought that counts—but the packaging can elevate that thought into something unforgettable. By focusing on the unwrapping experience, you create lasting memories that go beyond the gift itself. So this holiday season, let’s unwrap the joy together and make every gift an experience to remember!",
        },
      ],
    },
    {
      title: "Baby shower return gifts to make your loved ones feel special",
      imageSrc: Baby,
      slug: "baby-shower-return-gifts-to-make-your-loved-ones-feel-special",
      introduction:
        "A baby shower is a beautiful celebration of new life and the joy it brings to everyone involved. Show your appreciation to those who share in your happiness with thoughtfully packaged return gifts that leave a lasting impression. Here's how NexiGifting's custom pouches can help you create perfect baby shower favors:",
      sections: [
        {
          heading: "Thoughtful Baby Shower Favors",
          content:
            "Discover unique and meaningful return gift ideas that will make your baby shower memorable for all guests. From practical items to sentimental keepsakes, find the perfect way to say thank you.",
        },
        {
          heading: "Personal Touch",
          content:
            "Learn how to add personal elements to your baby shower return gifts that reflect your joy and gratitude. Make each guest feel special with customized packaging that captures the essence of this precious moment.",
        },
        {
          heading: "Creative Packaging",
          content:
            "Explore innovative ways to present your return gifts that will delight your guests and create lasting impressions. Our custom pouches can be designed to match your shower's theme perfectly.",
        },
      ],
    },
    {
      title: "Unique weddings favours to make your special day memorable!",
      imageSrc: Marriage,
      slug: "unique-weddings-favours-to-make-your-special-day-memorable",
      introduction:
        "Your wedding day is one of life's most precious moments, and every detail matters - including the wedding favors you choose for your guests. NexiGifting's custom pouches offer a unique and elegant way to present your wedding favors, ensuring they become cherished mementos of your special day. Let's explore how to create unforgettable wedding favors:",
      sections: [
        {
          heading: "Wedding Favor Innovation",
          content:
            "Explore creative and unique wedding favor ideas that will leave a lasting impression on your guests. From traditional tokens to modern keepsakes, find the perfect way to thank your guests.",
        },
        {
          heading: "Personalized Touches",
          content:
            "Discover ways to incorporate your personal story and style into your wedding favors. Make each gift uniquely yours with custom designs that reflect your love story.",
        },
        {
          heading: "Memorable Presentations",
          content:
            "Learn how to present your wedding favors in ways that enhance your special day's overall experience. Our custom pouches can be designed to complement your wedding theme perfectly.",
        },
      ],
    },
    {
      title: "10 items to gift with the NexiGifting pouch",
      imageSrc: DryFruits,
      slug: "10-items-to-gift-with-the-nexigifting-pouch",
      introduction:
        "Finding the perfect gift is an art, and presenting it beautifully is what makes it truly special. NexiGifting pouches offer endless possibilities for creating memorable gift presentations. Here's our curated list of ten items that pair perfectly with our custom pouches, ensuring your gifts make a lasting impression:",
      sections: [
        {
          heading: "Versatile Gift Ideas",
          content:
            "Explore ten versatile and thoughtful items perfect for gifting in NexiGifting pouches. From practical everyday items to luxury indulgences, find the perfect match for any occasion.",
        },
        {
          heading: "Creative Combinations",
          content:
            "Learn how to mix and match different items to create perfect gift combinations. Discover ways to personalize each pouch to complement your chosen gifts.",
        },
        {
          heading: "Presentation Tips",
          content:
            "Discover creative ways to arrange and present your chosen items in NexiGifting pouches. Make each gift a delightful surprise with our expert presentation techniques.",
        },
      ],
    },
  ];

  const currentBlog = blogPosts.find((post) => post.slug === slug);

  if (!currentBlog) {
    return <div>Blog post not found</div>;
  }


  
return (
  <div className="[&>nav]:!bg-white">
    <Navbar />

    <div className="relative w-full mx-auto md:mt-8">
      {/* Image container with full width, centered, without causing scroll */}
      <div className="relative mt-16 w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[450px] overflow-hidden">
        <Image
          src={currentBlog.imageSrc}
          alt={currentBlog.title}
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Centered Content */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-32">
        <h1 className=" max-w-[100%] font-gotham-rounded-bold px-18 text-center text-2xl sm:text-3xl md:text-3xl lg:text-3xl md:mt-8 mt-8 text-[#197d8e]">
          {currentBlog.title}
        </h1>

        {currentBlog.introduction && (
          <div className="mt-8">
            <p className="text-black leading-relaxed font-gotham-medium">
              {currentBlog.introduction}
            </p>
          </div>
        )}

        <div className="mt-4 space-y-4">
          {currentBlog.sections?.map((section) => (
            <div key={section.heading} className="space-y-2 font-gotham-medium">
              <h2 className="text-[#db5c3c] text-xl font-gotham-book">
                {section.heading}
              </h2>
              <p className="text-black leading-relaxed font-gotham-light">{section.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <PopularProducts />
        <BlogCarousel />
      </div>
      <Footer />
    </div>
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
