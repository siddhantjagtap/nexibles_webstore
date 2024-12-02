"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Favicon from "../../../public/x for faq.svg";
import Loader from "../comman/Loader";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2 bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="px-2 sm:px-4 py-2 sm:py-3 bg-white border rounded-2xl border-black mb-2">
        <button
          className="w-full text-left flex justify-between items-center focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-[#db5c3c] text-base sm:text-xl font-quattrocento-regular">
            {question}
          </span>
          <Image
            src={Favicon}
            alt="Toggle Icon"
            width={20}
            height={20}
            className={`${isOpen ? "rotate-180" : "rotate-45"
              } transition-transform`}
          />
        </button>
      </div>
      {isOpen && (
        <div className="px-2 sm:px-4 py-2 sm:py-3 bg-white rounded-2xl">
          <p
            className="text-black text-xs sm:text-xl font-quattrocento-regular"
            dangerouslySetInnerHTML={{ __html: answer }} // Render HTML safely
          ></p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define relative paths for links
  const baseURL = "https://nexigifting.com";
  const trackingUrl = "/tracking";
  const shippingPolicyUrl = "/shipping-and-delivery-policy";
  const returnsPolicyUrl = "/refund-return-policy";

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch("https://nexiblesapp.barecms.com/api/faq", {
          headers: {
            "API-Key": "irrv211vui9kuwn11efsb4xd4zdkuq",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch FAQs");
        }

        const data = await response.json();

        // Filter FAQs for the "nexigifting" origin
        const filteredFaqs = data.data.filter(
          (item) => item.origin === "nexigifting" || item.origin === "Nexigifting"
        );

        // Replace placeholders in specific answers
        const updatedFaqs = filteredFaqs.map((faq) => {
          if (faq.question.includes("track my order")) {
            faq.answer = faq.answer.replace(
              "here",
              `<a href="${baseURL}${trackingUrl}" class="">here</a>`
            );
          } else if (faq.question.includes("order to be delivered")) {
            faq.answer = faq.answer.replace(
              "shipping policy",
              `<a href="${baseURL}${shippingPolicyUrl}" class="">shipping policy</a>`
            );
          } else if (faq.question.includes("Return/Refund Policy")) {
            faq.answer = faq.answer.replace(
              "here",
              `<a href="${baseURL}${returnsPolicyUrl}" class="">here</a>`
            );
          }
          else if (faq.question.includes("Can you custom make a pouch")) {
            faq.answer = faq.answer.replace(
              "sales@artnext.in",
              `<a href="mailto:sales@artnext.in" class="">sales@artnext.in</a>`
            );
          }
          return faq;
        });

        setFaqs(updatedFaqs);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching FAQs:", err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchFAQs();
  }, [baseURL]); // Add `baseURL` as a dependency to re-fetch FAQs if it changes

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">Error loading FAQs: {error}</p>
      </div>
    );
  }

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
          <h1 className="text-3xl sm:text-4xl md:mt-28 mt-24 font-gotham-rounded-bold text-white mb-4">
            FAQs
          </h1>
        </div>

        <div className="bg-white rounded-lg p-4 sm:p-6">
          <p className="text-center text-[#db5c3c] text-xl sm:text-2xl mb-4 font-quattrocento-bold">
            Do you have a question?{" "}
          </p>
          <p className="text-black sm:text-xl mb-6 px-2 sm:px-12 font-quattrocento-regular">
            {`We have solutions most of the time! If you can't find the answers you're looking for, please reach out to us at`}
            <a href="mailto:sales@artnext.in"> sales@artnext.in </a>
            and we will find a solution together.
          </p>

          {faqs.length > 0 ? (
            faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">
              No FAQs available at the moment.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
