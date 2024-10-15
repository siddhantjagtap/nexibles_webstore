import React from "react";
import Image from "next/image";
import BirdIllustration from "../../../public/Home/Bird-Illustration.svg";
import DiwaliImg from "../../../public/Home/pouch-3.png";
import BirthdayImg from "../../../public/Home/pouch-3.png";
import WeddingImg from "../../../public/Home/pouch-3.png";
import FindCelebrationImg from "../../../public/Home/pouch-3.png";
import DiwaliIcon from "../../../public/Homepage/Celebration/Diwali Text Icon.svg";
import BirthdayIcon from "../../../public/Homepage/Celebration/Birthday Text Icon.svg";
import WeddingIcon from "../../../public/Homepage/Celebration/Wedding Text Icon.svg";
import CelebrationIcon from "../../../public/Homepage/Celebration/Find Your Celebration Text Icon.svg";
import PouchPedestal from "../../../public/Homepage/Celebration/Pouch Pedestral.svg";

const celebrationCards = [
  { name: "Diwali", image: DiwaliImg, icon: DiwaliIcon },
  { name: "Birthday", image: BirthdayImg, icon: BirthdayIcon, splitText: true },
  { name: "Wedding", image: WeddingImg, icon: WeddingIcon },
  {
    name: "Find your Celebration",
    image: FindCelebrationImg,
    icon: CelebrationIcon,
  },
];

const CelebrationCard = ({ card, index }) => {
  const renderCardContent = () => {
    if (card.name === "Find your Celebration") {
      return (
        <div className="relative text-4xl flex flex-col items-center justify-center">
          <span>Find</span>
          <span className="flex items-center">
            Your
            <Image
              src={card.icon}
              alt="Celebration Icon"
              width={40}
              height={40}
              className="inline-block mx-2"
            />
          </span>
          <span>Celebration</span>
        </div>
      );
    }

    if (card.splitText) {
      return (
        <span className="relative mb-12 text-4xl ml-1">
          {card.name.split("").map((char, i) => (
            <React.Fragment key={i}>
              {char === "i" ? (
                <Image
                  src={BirthdayIcon}
                  alt="Birthday Icon"
                  width={10}
                  height={10}
                  className="inline-block mx-1 mb-6"
                />
              ) : (
                char
              )}
            </React.Fragment>
          ))}
        </span>
      );
    }

    return (
      <>
        <Image
          src={card.icon}
          alt={`${card.name} Icon`}
          layout="fill"
          objectFit="contain"
          className="p-6"
          style={{
            ...(index === 0 && { top: "-10px", left: "-10px" }),
            ...(index === 2 && { top: "-15px", left: "60px" }),
          }}
        />
        <span className="relative mb-16 text-4xl ml-8">{card.name}</span>
      </>
    );
  };

  return (
    <div className="w-64 flex flex-col mb-0 px-2 card-mobile">
      <div
        className="bg-[#d88473] py-[6rem] px-2 text-[#fafafa] font-bold text-3xl rounded-t-3xl flex flex-col items-center justify-center relative overflow-hidden text-center"
        style={{ height: "150px" }}
      >
        {renderCardContent()}
      </div>
      <div className="flex-grow bg-white py-[3rem] flex items-center justify-center relative p-4">
        <Image
          src={card.image}
          alt={card.name}
          width={260}
          height={260}
          objectFit="contain"
          className="relative z-10"
        />
        <Image
          src={PouchPedestal}
          alt="Pouch Pedestal"
          width={200}
          height={100}
          className="absolute bottom-0"
        />
      </div>
      <div className="bg-white pb-[1rem] rounded-b-3xl" />
    </div>
  );
};

export default function Celebration() {
  return (
    <div className="text-center relative z-10 pb-16 bg-no-repeat md:mt-44 ">
      <div className="flex items-center justify-center mb-12">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold md:text-white text-[#0f1729] md:mt-20 ml-[10rem] flex items-center ">
          Celebrations
          <Image
            src={BirdIllustration}
            alt="Bird Illustration"
            className="bird-illustration inline-block ml-"
          />
        </h3>
      </div>
      <div className="flex flex-wrap justify-center md:space-x-4">
        {celebrationCards.map((card, index) => (
          <CelebrationCard key={index} card={card} index={index} />
        ))}
      </div>
      <style jsx global>{`
        @media (max-width: 767px) {
          .card-mobile {
            width: 80% !important;
            margin-left: auto !important;
            margin-right: auto !important;
            margin-bottom: 2rem !important;
          }
          h3 {
            margin-left: 0 !important;
          }
        }

        @media (min-width: 768px) {
          .bird-illustration {
            width: 350px; // Default size for desktop
            height: 350px; // Default size for desktop
          }
        }

        @media (max-width: 767px) {
          .bird-illustration {
            width: 100px; // Adjusted size for mobile
            height: 100px; // Adjusted size for mobile
          }
        }
      `}</style>
    </div>
  );
}





// import React from "react";
// import Image from "next/image";
// import BirdIllustration from "../../../public/Home/Bird-Illustration.svg";
// import DiwaliImg from "../../../public/Home/pouch-3.png";
// import BirthdayImg from "../../../public/Home/pouch-3.png";
// import WeddingImg from "../../../public/Home/pouch-3.png";
// import FindCelebrationImg from "../../../public/Home/pouch-3.png";
// import DiwaliIcon from "../../../public/Homepage/Celebration/Diwali Text Icon.svg";
// import BirthdayIcon from "../../../public/Homepage/Celebration/Birthday Text Icon.svg";
// import WeddingIcon from "../../../public/Homepage/Celebration/Wedding Text Icon.svg";
// import CelebrationIcon from "../../../public/Homepage/Celebration/Find Your Celebration Text Icon.svg";
// import PouchPedestal from "../../../public/Homepage/Celebration/Pouch Pedestral.svg"; // Importing the pedestal SVG

// const celebrationCards = [
//   { name: "Diwali", image: DiwaliImg, icon: DiwaliIcon },
//   {
//     name: "Birthday",
//     image: BirthdayImg,
//     icon: BirthdayIcon,
//     splitText: true, // Flag to handle text splitting for Birthday
//   },
//   { name: "Wedding", image: WeddingImg, icon: WeddingIcon },
//   {
//     name: "Find your Celebration",
//     image: FindCelebrationImg,
//     icon: CelebrationIcon,
//   },
// ];

// export default function Celebration() {
//   return (
//     <div className="text-center relative z-10 pb-16 bg-no-repeat mt-44">
//       <div className="flex items-center justify-center mb-12">
//         <h3 className="text-4xl md:text-5xl font-bold text-[#0f1729] mt-20 ml-[10rem] flex items-center">
//           Celebrations
//           <Image
//             src={BirdIllustration}
//             alt="Bird Illustration"
//             width={250}
//             height={250}
//             className="inline-block ml-4"
//           />
//         </h3>
//       </div>

//       <div className="flex flex-wrap md:flex-nowrap justify-center md:space-x-4">
//         {celebrationCards.map((card, index) => (
//           <div
//             key={index}
//             className="w-full md:w-64 flex flex-col mb-8 md:mb-0"
//           >
//             <div
//               className="bg-[#d88473] py-[6rem] px-2 text-[#fafafa] font-bold text-2xl md:text-3xl rounded-t-3xl flex flex-col items-center justify-center relative overflow-hidden text-center mt-22"
//               style={{ height: "150px" }}
//             >
//               {/* Conditionally render the main icon only for non-Birthday cards */}
//               {card.name !== "Birthday" &&
//                 card.name !== "Find your Celebration" && (
//                   <Image
//                     src={card.icon}
//                     alt={`${card.name} Icon`}
//                     layout="fill"
//                     objectFit="contain"
//                     className="p-6"
//                     style={{
//                       ...(index === 0 && { top: "-10px", left: "-10px" }), // Diwali icon
//                       ...(index === 2 && { top: "-15px", left: "60px" }), // Wedding icon
//                     }}
//                   />
//                 )}

//               {/* Special rendering for "Find Your Celebration" text and icon */}
//               {card.name === "Find your Celebration" ? (
//                 <div className="relative text-4xl flex flex-col items-center justify-center">
//                   <span>Find</span>
//                   <span className="flex items-center">
//                     Your
//                     <Image
//                       src={card.icon}
//                       alt="Celebration Icon"
//                       width={40} // Adjust size of the icon here
//                       height={40}
//                       className="inline-block mx-2"
//                     />
//                   </span>
//                   <span>Celebration</span>
//                 </div>
//               ) : card.splitText ? (
//                 /* Birthday text with the "i" replaced with the Birthday Icon */
//                 <span className="relative mb-12 text-4xl ml-1">
//                   {card.name.split("").map((char, i) => (
//                     <React.Fragment key={i}>
//                       {char === "i" ? (
//                         <Image
//                           src={BirthdayIcon}
//                           alt="Birthday Icon"
//                           width={10} // Smaller width for the icon
//                           height={10} // Smaller height for the icon
//                           className="inline-block mx-1 mb-6"
//                         />
//                       ) : (
//                         char
//                       )}
//                     </React.Fragment>
//                   ))}
//                 </span>
//               ) : (
//                 <span className="relative mb-16 text-4xl ml-8">
//                   {card.name}
//                 </span>
//               )}
//             </div>

//             {/* Pouch image with the pedestal inside the same container */}
//             <div className="flex-grow bg-white py-[3rem] flex items-center justify-center relative p-4">
//               <Image
//                 src={card.image}
//                 alt={card.name}
//                 width={260}
//                 height={260}
//                 objectFit="contain"
//                 className="relative z-10"
//               />

//               {/* Pouch pedestal positioned at the bottom */}
//               <Image
//                 src={PouchPedestal}
//                 alt="Pouch Pedestal"
//                 width={200} // Adjust the width accordingly
//                 height={100} // Adjust the height accordingly
//                 className="absolute bottom-0"
//               />
//             </div>

//             <div className="bg-white pb-[1rem] rounded-b-3xl">

//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
