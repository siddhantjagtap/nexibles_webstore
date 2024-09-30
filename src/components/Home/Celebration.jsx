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
import PouchPedestal from "../../../public/Homepage/Celebration/Pouch Pedestral.svg"; // Importing the pedestal SVG

const celebrationCards = [
  { name: "Diwali", image: DiwaliImg, icon: DiwaliIcon },
  {
    name: "Birthday",
    image: BirthdayImg,
    icon: BirthdayIcon,
    splitText: true, // Flag to handle text splitting for Birthday
  },
  { name: "Wedding", image: WeddingImg, icon: WeddingIcon },
  {
    name: "Find your Celebration",
    image: FindCelebrationImg,
    icon: CelebrationIcon,
  },
];

export default function Celebration() {
  return (
    <div className="text-center relative z-10 pb-16 bg-no-repeat mt-44">
      <div className="flex items-center justify-center mb-12">
        <h3 className="text-4xl md:text-5xl font-bold text-[#0f1729] mt-20 ml-[10rem] flex items-center">
          Celebrations
          <Image
            src={BirdIllustration}
            alt="Bird Illustration"
            width={250}
            height={250}
            className="inline-block ml-4"
          />
        </h3>
      </div>

      <div className="flex flex-wrap md:flex-nowrap justify-center md:space-x-4">
        {celebrationCards.map((card, index) => (
          <div
            key={index}
            className="w-full md:w-64 flex flex-col mb-8 md:mb-0"
          >
            <div
              className="bg-[#d88473] py-[6rem] px-2 text-[#fafafa] font-bold text-2xl md:text-3xl rounded-t-3xl flex flex-col items-center justify-center relative overflow-hidden text-center mt-22"
              style={{ height: "150px" }}
            >
              {/* Conditionally render the main icon only for non-Birthday cards */}
              {card.name !== "Birthday" &&
                card.name !== "Find your Celebration" && (
                  <Image
                    src={card.icon}
                    alt={`${card.name} Icon`}
                    layout="fill"
                    objectFit="contain"
                    className="p-6"
                    style={{
                      ...(index === 0 && { top: "-10px", left: "-10px" }), // Diwali icon
                      ...(index === 2 && { top: "-15px", left: "60px" }), // Wedding icon
                    }}
                  />
                )}

              {/* Special rendering for "Find Your Celebration" text and icon */}
              {card.name === "Find your Celebration" ? (
                <div className="relative text-4xl flex flex-col items-center justify-center">
                  <span>Find</span>
                  <span className="flex items-center">
                    Your
                    <Image
                      src={card.icon}
                      alt="Celebration Icon"
                      width={40} // Adjust size of the icon here
                      height={40}
                      className="inline-block mx-2"
                    />
                  </span>
                  <span>Celebration</span>
                </div>
              ) : card.splitText ? (
                /* Birthday text with the "i" replaced with the Birthday Icon */
                <span className="relative mb-12 text-4xl ml-1">
                  {card.name.split("").map((char, i) => (
                    <React.Fragment key={i}>
                      {char === "i" ? (
                        <Image
                          src={BirthdayIcon}
                          alt="Birthday Icon"
                          width={10} // Smaller width for the icon
                          height={10} // Smaller height for the icon
                          className="inline-block mx-1 mb-6"
                        />
                      ) : (
                        char
                      )}
                    </React.Fragment>
                  ))}
                </span>
              ) : (
                <span className="relative mb-16 text-4xl ml-8">
                  {card.name}
                </span>
              )}
            </div>

            {/* Pouch image with the pedestal inside the same container */}
            <div className="flex-grow bg-white py-[3rem] flex items-center justify-center relative p-4">
              <Image
                src={card.image}
                alt={card.name}
                width={260}
                height={260}
                objectFit="contain"
                className="relative z-10"
              />

              {/* Pouch pedestal positioned at the bottom */}
              <Image
                src={PouchPedestal}
                alt="Pouch Pedestal"
                width={200} // Adjust the width accordingly
                height={100} // Adjust the height accordingly
                className="absolute bottom-0"
              />
            </div>

            <div className="bg-white pb-[1rem] rounded-b-3xl">
              
            </div>
          </div>
        ))}
      </div>
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
// import DiwaliIcon from "../../../public/Home/pouch-3.png";
// import BirthdayIcon from "../../../public/Home/pouch-3.png";
// import WeddingIcon from "../../../public/Home/pouch-3.png";
// import CelebrationIcon from "../../../public/Home/pouch-3.png";

// const celebrationCards = [
//   { name: "Diwali", image: DiwaliImg, icon: DiwaliIcon },
//   { name: "Birthday", image: BirthdayImg, icon: BirthdayIcon },
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
//         <h3 className="text-4xl md:text-5xl font-bold text-[#0f1729] mt-20 ml-[10rem]">
//           Celebrations
//         </h3>
//         <Image
//           src={BirdIllustration}
//           alt="Bird Illustration"
//           width={300}
//           height={300}
//           className="inline-block "
//         />
//       </div>

//       <div className="flex flex-wrap md:flex-nowrap justify-center md:space-x-4">
//         {celebrationCards.map((card, index) => (
//           <div
//             key={index}
//             className="w-full md:w-64 flex flex-col mb-8 md:mb-0"
//           >
//             <div
//               className="bg-[#d88473] py-[3rem] px-2 text-[#fafafa] font-bold text-2xl md:text-3xl rounded-t-3xl flex items-center justify-center relative overflow-hidden"
//               style={{ height: "150px" }}
//             >
//               <Image
//                 src={card.icon}
//                 alt={`${card.name} Icon`}
//                 layout="fill"
//                 objectFit="cover"
//                 className="opacity-20"
//               />
//               <span className="relative z-10">{card.name}</span>
//             </div>
//             <div className="flex-grow bg-white py-[5rem] flex items-center justify-center p-4">
//               <Image
//                 src={card.image}
//                 alt={card.name}
//                 width={260}
//                 height={260}
//                 objectFit="contain"
//               />
//             </div>
//             <div className="bg-white pb-[1rem] rounded-b-3xl">
//               {/* <button className="bg-[#ffda40] text-[#464087] py-1 px-16 font-bold text-2xl md:text-3xl rounded-full mt-4">
//                 Explore
//               </button> */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
