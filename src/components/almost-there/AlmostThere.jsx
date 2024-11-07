"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import SubmitFormIllustration from "../../../public/Home/Submit-Form-Illustration.svg";

export default function AlmostThere() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pouchId = searchParams.get("pouchId");
  const imageFileName = searchParams.get("image")?.replace(/%20/g, "-");
  const [picture, setPicture] = useState(null);
  const [receivers, setReceivers] = useState(null);
  const [skipPicture, setSkipPicture] = useState(false);
  const [skipReceivers, setSkipReceivers] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const size = searchParams.get("size");

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("File", file);

    try {
      const response = await fetch(
        "https://nexiblesapp.barecms.com/api/product/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const result = await response.json();
        return result.data.originalname;
      } else {
        console.error("File upload failed");
        return null;
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    }
  };

  const handlePictureUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadedFileName = await handleFileUpload(file);
      if (uploadedFileName) {
        setPicture(uploadedFileName);
        setErrorMessage("");
      }
    }
  };

  const handleReceiversUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadedFileName = await handleFileUpload(file);
      if (uploadedFileName) {
        setReceivers(uploadedFileName);
        setErrorMessage("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!picture && !receivers && !skipPicture && !skipReceivers) {
      setErrorMessage(
        "Please upload at least one of the fields (picture or receivers), or skip one of them."
      );
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedCart = cart.map((item) => {
      if (item.id === parseInt(pouchId, 10)) {
        return {
          ...item,
          uploaded_picture: skipPicture ? "Not uploaded" : picture,
          uploaded_receivers: skipReceivers ? "Not uploaded" : receivers,
        };
      }
      return item;
    });

    if (!cart.some((item) => item.id === parseInt(pouchId, 10))) {
      const newItem = {
        id: parseInt(pouchId, 10),
        size: size,
        uploaded_picture: skipPicture
          ? "Not uploaded"
          : picture || "Not uploaded",
        uploaded_receivers: skipReceivers
          ? "Not uploaded"
          : receivers || "Not uploaded",
      };
      updatedCart.push(newItem);
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    router.push(
      `/quantity-review?pouchId=${pouchId}&size=${size}&image=${encodeURIComponent(
        imageFileName
      )}`
    );
  };

  return (
    <div className="min-h-screen bg-white px-4 py-8 mt-[5rem]">
      <button
        onClick={() => window.history.back()}
        className="text-[#124e66] ml-[1rem] font-bold"
      >
        ← Back
      </button>
      <h1 className="text-4xl font-bold text-[#ee6e73] text-center mt-6 mb-8">
        Almost There
      </h1>
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row">
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-2/3 lg:pr-8 mb-8 lg:mb-0"
        >
          {errorMessage && (
            <div className="mb-4 text-red-600">{errorMessage}</div>
          )}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#d1585a] mb-2">
              Add your picture
            </h2>
            <p className="text-sm text-[#d1585a] mb-2">
              (This adds another personalised touch. You can put a picture of
              your family, pet, or yourself depending on the occasion. If not
              required, please leave it empty.)
            </p>
            <input
              type="file"
              onChange={handlePictureUpload}
              accept=".jpeg,.jpg,.png,.heic,.svg"
              className="w-full p-2 border border-[#68a398] rounded-3xl"
            />
            <p className="text-sm text-[#d1585a] mt-1">
              Acceptable picture formats: .jpeg, .jpg, .png, .heic, .svg. Please
              keep the size under 5MB.
            </p>
            <p className="text-sm text-[#d1585a] mt-1">
              Please keep size under 50mb?
            </p>
            <label className="flex items-center mt-2">
              <input
                type="checkbox"
                className="mr-2 form-checkbox border border-[#68a398] text-[#d1585a] focus:ring-[#68a398]"
                checked={skipPicture}
                onChange={(e) => setSkipPicture(e.target.checked)}
              />
              <span className="text-[#124e66]">Skip</span>
            </label>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#d1585a] mb-2">
              Add list of receivers
            </h2>
            <p className="text-sm text-[#d1585a] mb-2">
              (This should include the names to be printed on the bottom of the
              pouch. If not required, please leave it empty.)
            </p>
            <input
              type="file"
              onChange={handleReceiversUpload}
              accept=".xlsx,.xls"
              className="w-full p-2 border border-[#68a398] rounded-3xl"
            />
            <p className="text-sm text-[#d1585a] mt-1">
              Acceptable formats: Excel (.xlsx, .xls). Please keep the size
              under 5MB.
            </p>
            <p className="text-sm text-[#d1585a] mt-1">
              Please keep size under 50mb?
            </p>
            <label className="flex items-center mt-2">
              <input
                type="checkbox"
                className="mr-2 form-checkbox border border-[#68a398] text-[#d1585a] focus:ring-[#68a398]"
                checked={skipReceivers}
                onChange={(e) => setSkipReceivers(e.target.checked)}
              />
              <span className="text-[#124e66]">Skip</span>
            </label>
          </div>
          <div className="flex items-center justify-end">
            <Image
              src={SubmitFormIllustration}
              alt="Colorful Graphic"
              width={80}
              height={80}
              className=""
            />
            <button
              type="submit"
              className="bg-[#124e66] text-white mb-12 px-6 py-2 rounded-full hover:bg-[#0e3e51] transition duration-300"
            >
              Next
            </button>
          </div>
        </form>
        <div className="w-full lg:w-1/3 lg:mt-[3rem] flex justify-center lg:block">
          {pouchId && (
            <Image
              src={`https://nexiblesapp.barecms.com/uploads/${imageFileName}`}
              alt="Selected Pouch"
              width={300}
              height={400}
              className="rounded"
            />
          )}
        </div>
      </div>
    </div>
  );
}
