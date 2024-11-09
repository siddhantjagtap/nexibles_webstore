// components/AddMessage.js
"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SubmitFormIllustration from "../../../public/Home/Submit-Form-Illustration.svg";

export default function AddMessage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pouchId = searchParams.get("pouchId");
  const size = searchParams.get("size");
  const imageFileName = searchParams.get("image")?.replace(/%20/g, "-");
  const [productImages, setProductImages] = useState([]);
 const [skipPicture, setSkipPicture] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
const [image2, setImage2] = useState(null);
  const existingImageUrl = `https://nexiblesapp.barecms.com/uploads/${imageFileName}`;

  useEffect(() => {
    async function fetchProductImages() {
      const response = await fetch(`https://nexiblesapp.barecms.com/api/productimages/${pouchId}`);
      const data = await response.json();
      setProductImages(data.data);

      if (data.data && data.data.length > 0) {
        setImage2(data.data[0].image_url);
        console.log(data.data[0].image_url); // Set image2 from the first product image URL
      }
    }

    if (pouchId) {
      fetchProductImages();
    }
  }, [pouchId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.map((item) => {
      if (item.id === parseInt(pouchId, 10)) {
        return {
          ...item,
          customer_name: name || null,
          custom_message: message || null,
          image2: image2 || null, // Use the image2 from fetched product images
        };
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    router.push(
      `/almost-there?pouchId=${pouchId}&size=${size}&image=${encodeURIComponent(
        imageFileName
      )}`
    );
  };

  if (!imageFileName) {
    return <div>Product image not found</div>;
  }

  return (
    <div className="min-h-screen pt-16 lg:pt-24 bg-white px-4 md:py-8">
      <Link
        href={`/productsize?pouchId=${pouchId}`}
        className="text-[#124e66] ml-2 sm:ml-4 font-gotham-rounded-bold text-sm sm:text-base"
      >
        ← Back
      </Link>
      <h1 className="text-2xl sm:text-3xl font-gotham-rounded-bold text-[#ee6e73] text-center mt-4 mb-6 sm:mt-6 sm:mb-8">
        Add Your Message
      </h1>
      <div className="max-w-6xl flex flex-col sm:flex-row sm:px-[10rem] px-4">
        {/* Image section for mobile screens */}
        <div className="flex flex-col items-center w-full sm:hidden mb-6">
          {pouchId && (
            <Image
              src={existingImageUrl}
              alt="Selected Pouch"
              width={160}
              height={240}
              className="rounded max-w-[160px] max-h-[240px] object-contain"
            />
          )}
          {productImages.length > 0 && (
            <div className="flex flex-col items-center text-center mt-4">
              <Image
                src={`https://nexiblesapp.barecms.com/uploads/${productImages[0].image_url}`}
                alt="Back of Pouch"
                width={160}
                height={240}
                className="rounded max-w-[160px] max-h-[240px] object-contain"
              />
              <div className="text-[#ee6e73] text-xs mt-2">Back</div>
            </div>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-2/3 mb-8 sm:pr-8"
        >
          <div className="mb-4 sm:mb-6">
            <label
              htmlFor="name"
              className="block text-[#ee6e73] text-pt-35 sm:text-2xl font-gotham-medium mb-2"
            >
              Add your name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Karan & Jinal Doshi"
              className="w-full p-2 border border-[#197d8e] rounded-lg sm:rounded-3xl font-gotham-light"
             
            />
            <input
                type="checkbox"
                className="mr-2 form-checkbox border border-[#68a398] text-[#d1585a] focus:ring-[#68a398]"
                checked={skipPicture}
                onChange={(e) => setSkipPicture(e.target.checked)}
              />
              <span className="text-[#124e66]">Skip</span>
          </div>
          
          <div className="mb-4 sm:mb-6">
            <label
              htmlFor="message"
              className="block text-[#ee6e73] text-pt-35 sm:text-2xl font-gotham-medium mb-2"
            >
              Add your message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="As the festival of lights approaches, we're filled with joy and excitement, and we can't wait to share it with you!"
              className="w-full p-2 border border-[#197d8e] rounded-lg font-gotham-light sm:rounded-3xl text-sm h-32 sm:h-60"
              maxLength={60}
              required
            />
            <p className="text-xs font-gotham-light sm:text-md text-[#ee6e73] mt-1">up to 60 words maximum</p>
          </div>

          <div className="flex items-center mt-4">
            <Image
              src={SubmitFormIllustration}
              alt="Colorful Graphic"
              width={60}
              height={60}
              className="mr-4"
            />
            <button
              type="submit"
              className="bg-[#124e66] font-gotham-rounded-bold text-white px-4 py-2 rounded-full text-sm sm:text-base hover:bg-[#0e3e51] transition duration-300"
            >
              Next
            </button>
          </div>
        </form>

        {/* Image section for desktop/tablet screens */}
        <div className="hidden sm:flex w-1/3 flex-col items-center mt-8">
          {pouchId && (
            <div className="flex items-center justify-between w-full">
              <div className="text-center">
                <Image
                  src={existingImageUrl}
                  alt="Selected Pouch"
                  width={250}
                  height={350}
                  className="rounded max-w-[250px] max-h-[350px] object-contain"
                />
                <div className="text-[#ee6e73] font-gotham-light text-xs sm:text-sm mt-2">Front</div>
              </div>
              {productImages.length > 0 && (
                <div className="text-center ml-4">
                  <Image
                    src={`https://nexiblesapp.barecms.com/uploads/${productImages[0].image_url}`}
                    alt="Back of Pouch"
                    width={250}
                    height={350}
                    className="rounded max-w-[250px] max-h-[350px] object-contain"
                  />
                  <div className="text-[#ee6e73] text-xs  font-gotham-light sm:text-sm mt-2">Back</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}