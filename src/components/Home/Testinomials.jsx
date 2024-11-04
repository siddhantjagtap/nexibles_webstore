"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="bg-white relative px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Testimonial Heading */}
      <div className="text-center mb-4 sm:mb-8">
        <div className="flex justify-center items-center flex-col sm:flex-row">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#db5c3c] mx-2 sm:mx-4 my-2 sm:my-6">
            Testimonials
          </h1>
          <Image
            src="/Home/Walking Illustration.svg"
            alt="Testimonial Icon"
            width={100}
            height={100}
            className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[100px] md:h-[100px]"
          />
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="h-full flex flex-col">
          <div className="bg-[#197d8e] text-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-md flex-1 flex flex-col">
            <p className="text-sm sm:text-base mb-3 sm:mb-4 flex-1 font-bold text-justify hyphens-auto break-words">
              These pouches were perfect for our Diwali gift hampers. The
              option to personalize each one made our gifts stand out and
              brought smiles all around.
            </p>
            <div className="mt-auto">
              <p className="text-center text-sm sm:text-base font-extralight">
                - Ashish W
              </p>
              <p className="text-center text-sm sm:text-base font-extralight">
                Assistant Manager
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-2 sm:mt-4">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                size={20}
                className="sm:text-2xl"
                color="#0f6f8b"
              />
            ))}
          </div>
        </div>

        {/* Card 2 */}
        <div className="h-full flex flex-col">
          <div className="bg-[#db5c3c] text-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-md flex-1 flex flex-col">
            <p className="text-sm sm:text-base mb-3 sm:mb-4 flex-1 font-bold text-justify hyphens-auto break-words">
              I used these pouches for wedding favors and they were a hit! It
              looked great with our pictures on the pouch, the guests got to
              take home a cherished personalized gift.
            </p>
            <div className="mt-auto">
              <p className="text-center text-sm sm:text-base font-extralight">
                - Disha S
              </p>
              <p className="text-center text-sm sm:text-base font-extralight">
                Founder
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-2 sm:mt-4">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                size={20}
                className="sm:text-2xl"
                color="#0f6f8b"
              />
            ))}
          </div>
        </div>

        {/* Card 3 */}
        <div className="h-full flex flex-col">
          <div className="bg-[#197d8e] text-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-md flex-1 flex flex-col">
            <p className="text-sm sm:text-base mb-3 sm:mb-4 flex-1 font-bold text-justify hyphens-auto break-words">
              I gave my family these pouches filled with gourmet coffee &
              chocolates. The quality & easy customization was top-notch. It
              made the gifts more memorable!
            </p>
            <div className="mt-auto">
              <p className="text-center text-sm sm:text-base font-extralight">
                - Prasad N
              </p>
              <p className="text-center text-sm sm:text-base font-extralight">
                Marketing Head
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-2 sm:mt-4">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                size={20}
                className="sm:text-2xl"
                color="#0f6f8b"
              />
            ))}
          </div>
        </div>

        {/* Card 4 */}
        <div className="h-full flex flex-col">
          <div className="bg-[#db5c3c] text-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-md flex-1 flex flex-col">
            <p className="text-sm sm:text-base mb-3 sm:mb-4 flex-1 font-bold text-justify hyphens-auto break-words">
              The Nexipouches were fantastic for our baby shower return gifts.
              They were stylish, durable & we got to give some cute gifts to our
              guests.
            </p>
            <div className="mt-auto">
              <p className="text-center text-sm sm:text-base font-extralight">
                - Grishma C
              </p>
              <p className="text-center text-sm sm:text-base font-extralight">
                Housewife
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-2 sm:mt-4">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                size={20}
                className="sm:text-2xl"
                color="#0f6f8b"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;





// "use client";
// import Image from "next/image";
// import { FaStar } from "react-icons/fa";

// const Testimonials = () => {
//   return (
//     <div className="bg-white relative px-24">
//       {/* Testimonial Heading */}
//       <div className="text-center mb-8">
//         <div className="flex justify-center items-center">
//           <h1 className="text-4xl sm:text-3xl md:text-4xl font-bold text-[#db5c3c] mx-4 sm:mx- my-4 sm:my-6 ">
//             Testimonials
//           </h1>
//           <Image
//             src="/Home/Walking Illustration.svg"
//             alt="Testimonial Icon"
//             width={100}
//             height={100}
//             className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px]"
//           />
//         </div>
//       </div>

//       {/* Testimonial Cards */}
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 ">
//         {/* Card 1 */}
//         <div className="mx-auto">
//           <div className="bg-[#197d8e] text-white p-6 rounded-3xl shadow-md flex flex-col">
//             <p className="text-base mb-4">
//               “These pouches were perfect for our Diwali gift hampers. The
//               option to personalize each one made our gifts stand out and
//               brought smiles all around.”
//             </p>
//             <p className="mt-auto text-center ">- Ashish W</p>
//             <p className="mt-auto text-center ">Assistant Manager </p>
//           </div>
//           <div>
//             <div className="flex justify-center mt-4">
//               {[...Array(5)].map((_, i) => (
//                 <FaStar key={i} size={25} color="#0f6f8b" />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div>
//           <div className="bg-[#db5c3c] text-white p-6 rounded-3xl shadow-md flex flex-col">
//             <p className="text-base mb-4">
//               “I used these pouches for wedding favors and they were a hit! It
//               looked great with our pictures on the pouch, the guests got to
//               take home a cherished personalized gift.”
//             </p>
//             <p className="mt-auto text-center ">- Disha S </p>
//             <p className="mt-auto text-center ">Founder</p>
//           </div>
//           <div>
//             <div className="flex justify-center mt-4">
//               {[...Array(5)].map((_, i) => (
//                 <FaStar key={i} size={25} color="#0f6f8b" />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div>
//           <div className="bg-[#197d8e] text-white p-6 rounded-3xl shadow-md flex flex-col">
//             <p className="text-base mb-4">
//               “I gave my family these pouches filled with gourmet coffee &
//               chocolates. The quality & easy customization was top-notch. It
//               made the gifts more memorable!”
//             </p>
//             <p className="mt-auto text-center ">- Prasad N</p>
//             <p className="mt-auto text-center ">- Marketing Head</p>
//           </div>
//           <div>
//             <div className="flex justify-center mt-4">
//               {[...Array(5)].map((_, i) => (
//                 <FaStar key={i} size={25} color="#0f6f8b" />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Card 4 */}
//         <div>
//           <div className="bg-[#db5c3c] text-white p-6 rounded-3xl shadow-md flex flex-col">
//             <p className="text-base mb-4">
//               “The Nexipouches were fantastic for our baby shower return gifts.
//               They were stylish, durable & we got to give some cute gifts to our
//               guests.”
//             </p>
//             <p className="mt-auto text-center ">- Grishma C</p>
//             <p className="mt-auto text-center ">Housewife</p>
//           </div>
//           <div>
//             <div className="flex justify-center mt-4">
//               {[...Array(5)].map((_, i) => (
//                 <FaStar key={i} size={25} color="#0f6f8b" />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
