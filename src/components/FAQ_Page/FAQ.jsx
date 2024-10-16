"use client";
import React, { useState } from "react";
import Image from "next/image";
import Favicon from "../../../public/favicon.ico";
import FAQsBackground from "../../../public/F&Q/FAQs Background.jpg";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2 bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="px-2 sm:px-4 py-2 sm:py-3 bg-white border rounded-2xl border-black mb-2">
        <button
          className="w-full text-left flex justify-between items-center focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-[#db5c3c] text-base sm:text-xl font-semibold">
            {question}
          </span>
          <Image
            src={Favicon}
            alt="Toggle Icon"
            width={20}
            height={20}
            className={`${
              isOpen ? "rotate-180" : "rotate-45"
            } transition-transform`}
          />
        </button>
      </div>
      {isOpen && (
        <div className="px-2 sm:px-4 py-2 sm:py-3 bg-white border rounded-2xl border-2 border-black">
          <p className="text-black text-sm sm:text-xl">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How can I track my order?",
      answer:
        "You can use the tracking link mailed to you after your order was confirmed or check it out here to check the progress of your order.",
    },
    {
      question: "How long will it take for my order to be delivered?",
      answer:
        "We ship out orders within 3-5 business days after the order is placed & confirmed. For more details check out our shipping policy.",
    },
    {
      question: "Can I make changes in the design after my order is placed?",
      answer:
        "Since all orders are custom made we can't make any changes once the order is sent for printing. We do confirm all details before printing your orders. If we get the changes before the orders go for print, we can happily accommodate the changes.",
    },
    {
      question:
        "I can't find a design on the website for my event. Can you custom make a pouch for me?",
      answer:
        "We love a challenge. You can reach out to us at sales@artnext.in and our design team will make a design specifically catered for you.",
    },
    {
      question: "What is the Return/Refund Policy?",
      answer: "You can find our Returns & Refund Policy here.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center py-8 sm:py-12 px-2 sm:px-4 md:px-6 lg:px-8"
      style={{
        backgroundImage: `url('/F&Q/FAQ_BG.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-4 mt-16 sm:mt-24">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            FAQs
          </h1>
        </div>

        <div className="bg-white rounded-lg p-4 sm:p-6">
          <p className="text-center text-[#db5c3c] text-xl sm:text-2xl mb-4 font-semibold">
            Do you have a question?{" "}
          </p>
          <p className="text-black text-base sm:text-xl mb-6 px-2 sm:px-12">
            We have solutions most of the time! If you cant find the answers
            youre looking for, please reach out to us at sales@artnext.in and
            we will find a solution together.
          </p>

          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

//old
// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Favicon from "../../../public/favicon.ico"; // Make sure the path is correct
// import FAQsBackground from "../../../public/F&Q/FAQs Background.jpg"; // Ensure the correct image path

// const FAQItem = ({ question, answer }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="mb-2 bg-white rounded-lg shadow-sm overflow-hidden">
//       <div className="px-4 py-3 bg-white border rounded-2xl border-black mb-2">
//         <button
//           className="w-full text-left flex justify-between items-center focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <span className="text-[#db5c3c] text-xl font-semibold">
//             {question}
//           </span>
//           <Image
//             src={Favicon}
//             alt="Toggle Icon"
//             width={20}
//             height={20}
//             className={`${
//               isOpen ? "rotate-180" : "rotate-45"
//             } transition-transform`}
//           />
//         </button>
//       </div>
//       {isOpen && (
//         <div className="px-4 py-3 bg-white border rounded-2xl border-2 border-black">
//           <p className="text-black text-xl ">{answer}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// const FAQ = () => {
//   const faqs = [
//     {
//       question: "How can I track my order?",
//       answer:
//         "You can use the tracking link mailed to you after your order was confirmed or check it out here to check the progress of your order.",
//     },
//     {
//       question: "How long will it take for my order to be delivered?",
//       answer:
//         "We ship out orders within 3-5 business days after the order is placed & confirmed. For more details check out our shipping policy.",
//     },
//     {
//       question: "Can I make changes in the design after my order is placed?",
//       answer:
//         "Since all orders are custom made we can't make any changes once the order is sent for printing. We do confirm all details before printing your orders. If we get the changes before the orders go for print, we can happily accommodate the changes.",
//     },
//     {
//       question:
//         "I can't find a design on the website for my event. Can you custom make a pouch for me?",
//       answer:
//         "We love a challenge. You can reach out to us at sales@artnext.in and our design team will make a design specifically catered for you.",
//     },
//     {
//       question: "What is the Return/Refund Policy?",
//       answer: "You can find our Returns & Refund Policy here.",
//     },
//   ];

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8"
//       style={{
//         backgroundImage: `url('/F&Q/FAQ_BG.jpg')`, // Correct path for background image
//         backgroundSize: "cover",
//         backgroundPosition: "center top",
//         backgroundRepeat: "no-repeat",
//         backgroundAttachment: "fixed",
//         minHeight: "100vh",
//       }}
//     >
//       <div className="max-w-3xl mx-auto">
//         <div className="text-center mb-4 mt-24">
//           <h1 className="text-4xl font-bold text-white mb-4 ">FAQs</h1>
//         </div>

//         {/* Move the paragraph inside the FAQ section */}
//         <div className="bg-white rounded-lg p-6">
//           <p className="text-center text-[#db5c3c] text-2xl mb-4 font-semibold">
//             Do you have a question?{" "}
//           </p>
//           <p className="text-black text-xl mb-6 px-12 ">
//          {`   We have solutions most of the time! If you can't find the answers`}
//           {`  you're looking for, please reach out to us at sales@artnext.in and`}
//             we will find a solution together.
//           </p>

//           {faqs.map((faq, index) => (
//             <FAQItem
//               key={index}
//               question={faq.question}
//               answer={faq.answer} // Pass the answer prop here
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;
