'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import SubmitFormIllustration from '../../../public/Home/Submit-Form-Illustration.svg';

export default function AlmostThere() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pouchId = searchParams.get('pouchId');
  const size = searchParams.get('size');
  const imageFileName = searchParams.get('image');

  const [picture, setPicture] = useState(null);
  const [receivers, setReceivers] = useState(null);

  const handleFileUpload = async (file, type) => {
    const formData = new FormData();
    formData.append('File', file);

    try {
      const response = await fetch('https://nexiblesapp.barecms.com/api/product/upload', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const result = await response.json();
        const fileName = result.data.originalname;
        console.log(fileName); // Adjust based on actual API response
        localStorage.setItem(type, fileName);
        return fileName;
      } else {
        console.error('File upload failed');
        return null;
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      return null;
    }
  };

  const handlePictureUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadedFileName = await handleFileUpload(file, 'picture');
      if (uploadedFileName) {
        setPicture(uploadedFileName);
      }
    }
  };

  const handleReceiversUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadedFileName = await handleFileUpload(file, 'receivers');
      if (uploadedFileName) {
        setReceivers(uploadedFileName);
      }
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare data to pass
    //const pictureUrl = picture ? URL.createObjectURL(picture) : null;
    //const receiversUrl = receivers ? URL.createObjectURL(receivers) : null;

    // Redirect to the Quantity and Review page
    router.push(`/quantity-review?pouchId=${pouchId}&size=${size}&image=${encodeURIComponent(imageFileName)}`);
  };

  return (
    <div className="min-h-screen bg-white px-4 py-8 mt-[5rem]">
      <Link
        href={`/message?pouchId=${pouchId}&size=${size}&image=${encodeURIComponent(imageFileName)}`}
        className="text-[#124e66] ml-[1rem] font-bold"
      >
        ← Back
      </Link>
      <h1 className="text-4xl font-bold text-[#ee6e73] text-center mt-6 mb-8">Almost There</h1>
      <div className="max-w-4xl mx-auto flex">
        <form onSubmit={handleSubmit} className="w-2/3 pr-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#d1585a] mb-2">Add your picture</h2>
            <p className="text-sm text-[#5f8d8a] mb-2">
              (This adds another personalised touch. You can put a picture of your family, pet, or yourself depending on the occasion. If not required please leave it empty.)
            </p>
            <input
              type="file"
              onChange={handlePictureUpload}
              accept=".jpeg,.jpg,.png,.heic,.svg"
              className="w-full p-2 border border-[#68a398] rounded-3xl"
            />
            <p className="text-sm text-[#5f8d8a] mt-1">
              Acceptable picture formats: .jpeg, .jpg, .png, .heic, .svg
            </p>
            <p className="text-sm text-[#5f8d8a]">Please keep the size under 5MB.</p>
            <label className="flex items-center mt-2">
              <input
                type="checkbox"
                className="mr-2 form-checkbox border border-[#68a398] text-[#d1585a] focus:ring-[#68a398]"
              />
              <span className="text-[#124e66]">Skip</span>
            </label>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#d1585a] mb-2">Add list of receivers</h2>
            <p className="text-sm text-[#5f8d8a] mb-2">
              (This should include the names to be printed on the bottom of the pouch. If not required please leave it empty.)
            </p>
            <input
              type="file"
              onChange={handleReceiversUpload}
              accept=".xlsx,.xls"
              className="w-full p-2 border border-[#68a398] rounded-3xl"
            />
            <p className="text-sm text-[#5f8d8a] mt-1">Acceptable formats: Excel (.xlsx, .xls)</p>
            <p className="text-sm text-[#5f8d8a]">Please keep the size under 5MB.</p>
            <label className="flex items-center mt-2">
              <input
                type="checkbox"
                className="mr-2 form-checkbox border border-[#68a398] text-[#d1585a] focus:ring-[#68a398]"
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
        <div className="w-1/3 mt-[3rem]">
          {imageFileName && (
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