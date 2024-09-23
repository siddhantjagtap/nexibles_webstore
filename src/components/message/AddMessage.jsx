// components/message/AddMessage.jsx
'use client';  // Add this to mark it as a Client Component
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function AddMessage({ pouchId, size }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
          {/* Render the selected pouch image if available */}
          {pouchId && size && (
            <Image
              src={`/Home/pouch-${pouchId}.png`} // Assuming image naming is consistent
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
    </div>
  );
}
