"use client";
import NextImage from "next/image";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  return (
    <div className="bg-[#464087] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold text-yellow-400">{`Testimonials`}</h1>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* First Flex: Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 mt-8 ">
          {/* Testimonial 1 */}
          <div className="flex flex-col h-full ">
            <div className="bg-[#9187a6] p-6 rounded-3xl shadow-lg mx-auto max-w-sm flex-1">
              <p className="text-black text-base">
                {`"I gave my family these pouches filled with gourmet coffee &
                chocolates. The quality & easy customization was top-notch. It
                made the gifts more memorable!"`}{" "}
              </p>
              <p className="mt-4 text-center text-black">{`- Prasad N`}</p>
            </div>
            <div className="flex justify-center mt-4 text-yellow-400 h-4">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} size={20} />
              ))}
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="flex flex-col h-full">
            <div className="bg-[#f7eee5] p-6 rounded-3xl shadow-lg mx-auto max-w-sm flex-1">
              <p className="text-black text-base">
                {`“I used these pouches for wedding favors and they were a hit! It
                looked great with our pictures on the pouch, the guests got to
                take home a cherished personalised gift.”`}
              </p>
              <p className="mt-4 text-center text-black">{`- Disha S`}</p>
            </div>
            <div className="flex justify-center mt-4 text-yellow-400">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} size={20} />
              ))}
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="flex flex-col h-full">
            <div className="bg-[#f7eee5] p-6 rounded-3xl shadow-lg mx-auto max-w-sm flex-1">
              <p className="text-black text-base">
                {`“The Nexipouches were fantastic for our baby shower return
                gifts. They were stylish, durable & we got to give some cute
                gifts to our guests.”`}
              </p>
              <p className="mt-4 text-center text-black font-">
                {`- Grishma C`}
              </p>
            </div>
            <div className="flex justify-center mt-4 text-yellow-400">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} size={20} />
              ))}
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="flex flex-col h-full">
            <div className="bg-[#9f94b8] p-6 rounded-3xl shadow-lg mx-auto max-w-sm flex-1">
              <p className="text-black text-base">
                {`“These custom pouches made my gift-giving so special! I got to
                choose my own design & they held my homemade laddoos
                beautifully. My friends loved the personal touch.”`}
              </p>
              <p className="mt-4 text-center text-black">{`- Pooja J`}</p>
            </div>
            <div className="flex justify-center mt-4 text-yellow-400">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} size={20} />
              ))}
            </div>
          </div>
        </div>

        {/* Second Flex: Image and Paragraph */}
        <div className="flex flex-col items-center justify-center flex-1 mt-8 lg:mt-0">
          <div className="flex justify-center items-center bg-[#f8f8f8] rounded-3xl shadow-lg mb-4">
            <NextImage
              src="/Home/TestinomalImg.png"
              alt="Gift Image"
              width={350}
              height={350}
            />
          </div>
          <div className="flex justify-center text-yellow-400">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} size={20} />
            ))}
          </div>
          <div className="bg-[#f7eee5] p-6 m-4 rounded-3xl shadow-lg mx-auto max-w-sm text-center">
            <p className="text-black text-base font-bold">
              {`“The custom pouches were perfect for our Diwali gift hampers. The
              option to personalize each one made our gifts stand out and
              brought smiles all around.”`}
            </p>
            <p className="mt-4 text-black">{`- Mansi B`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
