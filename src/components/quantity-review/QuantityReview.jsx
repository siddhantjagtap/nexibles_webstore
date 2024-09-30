'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

export default function QuantityReview() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [quantity, setQuantity] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [pictureName, setPictureName] = useState('');
  const [receivers, setReceivers] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const imageFileName = searchParams.get('image');
   useEffect(() => {
    // Retrieve data from localStorage
    const storedName = localStorage.getItem('name');
    const storedMessage = localStorage.getItem('message');
    const storedPicture = localStorage.getItem('picture');
    const storedReceivers = localStorage.getItem('receivers');
    const storedQuantity = localStorage.getItem('quantity');
    // Set state with retrieved data
    if (storedName) setName(storedName);
    if (storedMessage) setMessage(storedMessage);
    if (storedPicture) setPictureName(storedPicture);
    if (storedReceivers) setReceivers(storedReceivers);
    if (storedQuantity) setQuantity(storedQuantity);
    // Pre-fill quantity from URL parameters
    const queryQuantity = searchParams.get('quantity');
    setQuantity(queryQuantity || '');
  }, [searchParams]);

  useEffect(() => {
    if (quantity) {
      localStorage.setItem('quantity', quantity);
    }
  }, [quantity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const numQuantity = Number(quantity);
    if (numQuantity < 50) {
      alert("Quantity must be at least 50.");
      return;
    }
    console.log({ quantity: numQuantity, name, message, pictureName, receivers, agreeToTerms });
    // Redirect to next page or process order
    router.push('/cart');
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    // Allow empty string or positive integers
    if (value === '' || /^\d+$/.test(value)) {
      setQuantity(value);
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPictureName(file.name);
    }
  };
  return (
    <div className="min-h-screen bg-white mt-[5rem] px-4 py-8">
      <button onClick={() => router.back()} className="text-[#124e66] ml-[1rem] font-bold">
        ← Back
      </button>

      <h1 className="text-4xl font-bold text-[#ee6e73] text-center mt-6 mb-8">Quantity and Review</h1>

      <div className="max-w-4xl mx-auto flex">
        <form onSubmit={handleSubmit} className="w-2/3 pr-8">
          <div className="mb-6">
            <label htmlFor="quantity" className="block text-[#ee6e73] text-xl font-bold mb-2">
              Quantity
            </label>
            <input
              type="text"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-full p-2 border border-[#68a398] rounded-3xl"
              placeholder="Enter quantity"
              required
            />
          </div>

          <h2 className="text-2xl font-bold text-[#ee6e73] mb-4">Yay you're done!</h2>
          <p className="text-gray-600 mb-4">Let's review everything once so your pouches are perfect!</p>

          <div className="mb-6">
            <label htmlFor="name" className="block text-[#ee6e73] text-xl font-bold mb-2">
              Add your name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-[#68a398] rounded-3xl"
              placeholder="eg. Karan & Jinal Doshi"
              required
              readOnly
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-[#ee6e73] text-xl font-bold mb-2">
              Add your message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-[#68a398] rounded-3xl h-32"
              placeholder="As the festival of lights approaches, we're filled with joy and excitement, and we can't wait to share it with you!"
              maxLength={60}
              required
              readOnly
            />
            <p className="text-sm text-gray-500 mt-1">upto 60 words maximum</p>
          </div>
          <div className="mb-6">
        <h2 className="text-xl font-bold text-[#ee6e73] mb-2">Add your picture</h2>
        <input
          type="file"
          accept=".jpeg,.jpg,.png,.heic,.svg"
          onChange={handleImageChange}
          className="mb-2 w-full p-2 border border-[#68a398] rounded-3xl"
        />
        {pictureName ? (
          <p className="text-gray-600">Uploaded image: {pictureName}</p>
        ) : (
          <p className="text-gray-600">No image uploaded</p>
        )}
        <p className="text-sm text-gray-500 mt-1">Acceptable picture formats: .jpeg, .jpg, .png, .heic, .svg</p>
        <p className="text-sm text-gray-500">Please keep the size under 5MB</p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-[#ee6e73] mb-2">Add list of receivers</h2>
        <input
          type="file"
          accept=".xlsx,.xls"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) setReceivers(file.name);
          }}
          className="mb-2 w-full p-2 border border-[#68a398] rounded-3xl"
        />
        {receivers ? (
          <p className="text-gray-600">Uploaded file: {receivers}</p>
        ) : (
          <p className="text-gray-600">No file uploaded</p>
        )}
        <p className="text-sm text-gray-500 mt-1">Acceptable formats: Excel (.xlsx, .xls)</p>
        <p className="text-sm text-gray-500">Please keep the size under 5MB</p>
      </div>

          <p className="text-[#ee6e73] font-bold mb-4">
            Please make sure you've uploaded the correct picture & document & there are no spelling errors anywhere!
          </p>

          <label className="flex items-center mb-6">
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="mr-2"
              required
            />
            <span className="text-gray-700">I've reviewed and approved my design</span>
          </label>
          <div className="flex items-center justify-end">
            <Image
              src="/Home/Submit-Form-Illustration.svg"
              alt="Submit Illustration"
              width={80}
              height={80}
            />
            <button
              type="submit"
              className="bg-[#124e66] text-white px-6 py-2 mb-12 rounded-full hover:bg-[#0e3e51] transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        </form>

        <div className="w-1/3">
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