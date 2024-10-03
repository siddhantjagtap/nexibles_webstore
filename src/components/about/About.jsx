import React from "react";
import BirdIllustration from "../../../public/About_Us_Page/About_Us_Bird_Illustration.svg";

export default function About() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/About_Us_Page/Abou_Us_Background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* First Section (About NexiGifting) */}
      <div className="relative flex flex-col lg:flex-row items-start justify-between pt-16 md:pt-24 gap-6 md:gap-8 px-4 md:px-6 lg:px-24 py-8 md:py-12">
        <div className="lg:w-1/2 text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-[#f9e2b2]">
            About NexiGifting
          </h2>
          <p className="text-base md:text-2xl lg:text-3xl leading-snug mb-4 md:mb-6">
            Welcome to NexiGifting, India’s first customized Stand Up Pouch
            platform for personalized gifting. A new venture of Nexibles,
            crafted in India with love for the world, we are dedicated to
            turning your gifting ideas into reality with a touch of
            personalization.
          </p>
          <p className="text-base md:text-2xl lg:text-3xl leading-snug mb-4 md:mb-6">
            Whether you’re celebrating a birthday, hosting a Diwali party,
            sending out wedding invitations, or simply spreading joy, our quick
            delivery and tailored designs ensure that each gift pouch perfectly
            aligns with your vision.
          </p>
          <p className="text-base md:text-2xl lg:text-3xl leading-snug mb-4 md:mb-6">
            We make it easy to create memorable gifts with our flexible order
            quantities, ranging from just 50 to 500 pouches. Experience the
            convenience and creativity of bespoke gifting with NexiGifting—where
            your imagination meets our innovation.
          </p>
        </div>
      </div>

      {/* Second Section (By Nexibles) */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-6 md:gap-8 px-4 md:px-6 lg:px-24">
        <div className="lg:w-1/2 text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-[#f9e2b2]">
            By Nexibles
          </h2>
          <p className="text-base md:text-2xl lg:text-3xl leading-snug mb-4 md:mb-6">
            Under the brand name - NEXt generation flexIBLES, we look forward to
            taking the idea of flexible packaging to the next level by bringing
            in digital printing as a revolutionary alternative to conventional
            processes of producing flexible packaging.
          </p>
          <p className="text-base md:text-2xl lg:text-3xl leading-snug mb-4 md:mb-6">
            We utilize the room for experimentation and creativity to help
            clients with high-yielding and quick-quality packaging solutions.
          </p>
          <p className="text-base md:text-2xl lg:text-3xl leading-snug mb-4 md:mb-6">
            With an efficient team of experts and experienced professionals, we
            provide converters and end-users with a wide range of custom
            flexible packaging solutions, including pouches, shrink sleeves,
            labels, and roll stock. Our broad range of product packaging
            solutions enables us to meet the demands of a diverse range of
            market segments.
          </p>
          <p className="text-base md:text-2xl lg:text-3xl leading-snug mb-4 md:mb-6">
            Our in-house Quality Control lab also ensures that each produced
            batch satisfies the most stringent quality requirements that the
            industry demands and the product deserves.
          </p>
          <p className="text-base md:text-2xl lg:text-3xl leading-snug md:mb-6">
            A fully equipped in-house pre-press division translates into quality
            of design & layouts, all under the qualified and watchful eyes of
            our team.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src={BirdIllustration.src}
            alt="Bird Illustration"
            className="w-40 md:w-60 lg:w-[600px]  md:mt-48 lg:mt-64 lg:h-auto"
          />
        </div>
      </div>
    </div>
  );
}


//old
// import React from 'react';
// import BirdIllustration from '../../../public/About_Us_Page/About_Us_Bird_Illustration.svg';

// export default function About() {
//   return (
//     <div
//       className="min-h-screen"
//       style={{
//         backgroundImage: "url('/About_Us_Page/Abou_Us_Background.jpg')",
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       {/* First Section (About NexiGifting) */}
//       <div className="relative flex flex-col lg:flex-row items-start justify-between pt-24 gap-8 px-6 lg:px-24 py-12">
//         <div className="lg:w-1/2 text-white">
//           <h2 className="text-5xl font-semibold mb-6 text-[#f9e2b2]">About NexiGifting</h2>
//           <p className="text-3xl leading-snug mb-6">
//             Welcome to NexiGifting, India’s first customized Stand Up Pouch platform for personalized gifting. A new venture of Nexibles, crafted in India with love for the world, we are dedicated to turning your gifting ideas into reality with a touch of personalization.
//           </p>
//           <p className="text-3xl leading-snug mb-6">
//             Whether you’re celebrating a birthday, hosting a Diwali party, sending out wedding invitations, or simply spreading joy, our quick delivery and tailored designs ensure that each gift pouch perfectly aligns with your vision.
//           </p>
//           <p className="text-3xl leading-snug mb-6">
//             We make it easy to create memorable gifts with our flexible order quantities, ranging from just 50 to 500 pouches. Experience the convenience and creativity of bespoke gifting with NexiGifting—where your imagination meets our innovation.
//           </p>
//         </div>
//       </div>

//       {/* Second Section (By Nexibles) */}
//       <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 px-6 lg:px-24 ">
//         <div className="lg:w-1/2 text-white">
//           <h2 className="text-5xl font-semibold mb-6 text-[#f9e2b2]">By Nexibles</h2>
//           <p className="text-3xl leading-snug mb-6">
//             Under the brand name - NEXt generation flexIBLES, we look forward to taking the idea of flexible packaging to the next level by bringing in digital printing as a revolutionary alternative to conventional processes of producing flexible packaging.
//           </p>
//           <p className="text-3xl leading-snug mb-6">
//             We utilize the room for experimentation and creativity to help clients with high-yielding and quick-quality packaging solutions.
//           </p>
//           <p className="text-3xl leading-snug mb-6">
//             With an efficient team of experts and experienced professionals, we provide converters and end-users with a wide range of custom flexible packaging solutions, including pouches, shrink sleeves, labels, and roll stock. Our broad range of product packaging solutions enables us to meet the demands of a diverse range of market segments.
//           </p>
//           <p className="text-3xl leading-snug mb-6">
//             Our in-house Quality Control lab also ensures that each produced batch satisfies the most stringent quality requirements that the industry demands and the product deserves.
//           </p>
//           <p className="text-3xl leading-snug mb-6">
//             A fully equipped in-house pre-press division translates into quality of design & layouts, all under the qualified and watchful eyes of our team.
//           </p>
//         </div>
//         <div className="lg:w-1/2 flex justify-center lg:justify-start">
//           <img
//             src={BirdIllustration.src}
//             alt="Bird Illustration"
//             className="w-60 md:w-80 lg:w-[600px] mt-64 lg:h-auto"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
