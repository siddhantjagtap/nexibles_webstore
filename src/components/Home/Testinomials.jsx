"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="bg-white relative px-8">
      {/* Testimonial Heading */}
      <div className="text-center mb-8">
        <div className="flex justify-center items-center">
          <Image
            src="/Home/Walking Illustration.svg"
            alt="Testimonial Icon"
            width={100}
            height={100}
            className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[140px] md:h-[140px]"
          />
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-[#db5c3c] mx-4 sm:mx-6 my-4 sm:my-6 ">
            Testimonials
          </h1>
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 ">
        {/* Card 1 */}
        <div className="mx-auto">
          <div className="bg-[#197d8e] text-white p-6 rounded-3xl shadow-md flex flex-col">
            <p className="text-base mb-4">
              “These pouches were perfect for our Diwali gift hampers. The
              option to personalize each one made our gifts stand out and
              brought smiles all around.”
            </p>
            <p className="mt-auto text-center ">- Ashish W</p>
          </div>
          <div>
            <div className="flex justify-center mt-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={25} color="#0f6f8b" />
              ))}
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div>
          <div className="bg-[#db5c3c] text-white p-6 rounded-3xl shadow-md flex flex-col">
            <p className="text-base mb-4">
              “I used these pouches for wedding favors and they were a hit! It
              looked great with our pictures on the pouch, the guests got to
              take home a cherished personalized gift.”
            </p>
            <p className="mt-auto text-center ">- Disha S</p>
          </div>
          <div>
            <div className="flex justify-center mt-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={25} color="#0f6f8b" />
              ))}
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div>
          <div className="bg-[#197d8e] text-white p-6 rounded-3xl shadow-md flex flex-col">
            <p className="text-base mb-4">
              “I gave my family these pouches filled with gourmet coffee &
              chocolates. The quality & easy customization was top-notch. It
              made the gifts more memorable!”
            </p>
            <p className="mt-auto text-center ">- Prasad N</p>
          </div>
          <div>
            <div className="flex justify-center mt-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={25} color="#0f6f8b" />
              ))}
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div>
          <div className="bg-[#db5c3c] text-white p-6 rounded-3xl shadow-md flex flex-col">
            <p className="text-base mb-4">
              “The Nexipouches were fantastic for our baby shower return gifts.
              They were stylish, durable & we got to give some cute gifts to our
              guests.”
            </p>

            <p className="mt-auto text-center ">- Grishma C</p>
          </div>
          <div>
            <div className="flex justify-center mt-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={25} color="#0f6f8b" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
