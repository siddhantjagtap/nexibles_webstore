<<<<<<< HEAD
'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import SubmitFormIllustration from '../../../public/Home/Submit-Form-Illustration.svg';

export default function AddMessage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pouchId = searchParams.get('pouchId');
  const imageFileName = searchParams.get('image')?.replace(/%20/g, '-'); // Replace %20 with -

  // Construct the full image URL using the server URL
  const imageUrl = `https://nexiblesapp.barecms.com/uploads/${imageFileName}`;
=======
// components/message/AddMessage.jsx
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function AddMessage({ pouchId, size }) {
  const searchParams = useSearchParams();
  const image = searchParams.get('image'); // Get the image from query params
>>>>>>> 5e401a5884675ea6cef3bab48d94ccc7a981b83b

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD

    // Save name and message to local storage
    localStorage.setItem('name', name);
    localStorage.setItem('message', message);

    router.push(`/almost-there?pouchId=${pouchId}`);
  };

  if (!imageFileName) {
    return <div>Product image not found</div>;
  }

  return (
    <div className="min-h-screen mt-[5rem] bg-white px-4 py-8">
      <Link href={`/productsize?pouchId=${pouchId}`} className="text-[#124e66] ml-[1rem] font-bold">
        ← Back
      </Link>
      <h1 className="text-4xl font-bold text-[#ee6e73] text-center mt-6 mb-8">Add Your Message</h1>
      <div className="max-w-4xl mx-auto flex">
        <form onSubmit={handleSubmit} className="w-2/3 pr-8">
          <div className="mb-6">
            <label htmlFor="name" className="block text-[#ee6e73] text-2xl font-bold mb-2">
              Add your name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="eg. Karan & Jinal Doshi"
              className="w-[90%] p-2 border border-[#197d8e] rounded-3xl"
              required
            />
          </div>
          <div className="">
            <label htmlFor="message" className="block text-[#ee6e73] text-2xl font-bold mb-2">
              Add your message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="As the festival of lights approaches, we're filled with joy and excitement, and we can't wait to share it with you!"
              className="w-[90%] p-2 border border-[#197d8e] rounded-3xl h-60"
              maxLength={60}
              required
            />
            <p className="text-md text-[#ee6e73]">up to 60 words maximum</p>
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
              className="bg-[#124e66] text-white px-6 py-2 mb-12 rounded-full hover:bg-[#0e3e51] transition duration-300"
            >
              Next
            </button>
          </div>
        </form>
        <div className="w-1/3 mt-[3rem]">
          {pouchId && (
            <Image
              src={imageUrl} // Using the full absolute URL here
              alt="Selected Pouch"
              width={300}
              height={400}
              className="rounded"
            />
          )}
        </div>
      </div>
=======
    console.log({ name, message, pouchId, size });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <Link href={`/productsize?pouchId=${pouchId}`} className="text-[#124e66] font-bold">← Back</Link>
      <h1 className="text-4xl font-bold text-[#ee6e73] text-center mt-6 mb-8">Add Your Message</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="mb-6">
          <label htmlFor="name" className="block text-[#ee6e73] text-lg font-semibold mb-2">Add your name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="eg. Karan & Jinal Doshi"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-[#ee6e73] text-lg font-semibold mb-2">Add your message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="As the festival of lights approaches..."
            className="w-full p-2 border border-gray-300 rounded h-40"
            maxLength={60}
            required
          />
          <p className="text-sm text-gray-500 mt-1">Up to 60 words maximum</p>
        </div>
        <div className="flex justify-between items-center">
          {image && (
            <Image
              src={image}
              alt="Selected Pouch"
              width={150}
              height={200}
              className="rounded"
            />
          )}
          <button
            type="submit"
            className="bg-[#124e66] text-white px-6 py-2 rounded hover:bg-[#0e3e51] transition duration-300"
          >
            Next
          </button>
        </div>
      </form>
>>>>>>> 5e401a5884675ea6cef3bab48d94ccc7a981b83b
    </div>
  );
}
