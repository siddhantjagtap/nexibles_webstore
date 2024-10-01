'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

export default function QuantityReview() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pouchId = searchParams.get('pouchId');
  const size = searchParams.get('size');
  const imageFileName = searchParams.get('image');

  // State variables
  const [quantity, setQuantity] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [uploadedPicture, setUploadedPicture] = useState('');
  const [uploadedReceivers, setUploadedReceivers] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [productDetails, setProductDetails] = useState({});

  // Load cart data from localStorage when the component mounts
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Find the specific product in the cart using pouchId and size
    const existingProduct = cart.find(
      (item) => item.id === Number(pouchId) && item.productSize === size
    );

    if (existingProduct) {
      // Populate the form fields with its details
      setQuantity(existingProduct.quantity || '');
      setCustomerName(existingProduct.customer_name || '');
      setCustomMessage(existingProduct.custom_message || '');
      setUploadedPicture(existingProduct.uploaded_picture || '');
      setUploadedReceivers(existingProduct.uploaded_receivers || '');
      setProductDetails(existingProduct);
    }
  }, [pouchId, size]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const numQuantity = Number(quantity);
    if (numQuantity < 50) {
      alert("Quantity must be at least 50.");
      return;
    }

    // Get existing cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Find existing product in the cart
    const existingProductIndex = cart.findIndex(
      (item) => item.id === Number(pouchId) && item.productSize === size
    );

    // Prepare updated product data
    const updatedProduct = {
      id: Number(pouchId),
      name: productDetails.name || "Unnamed Product", // Use dynamic name or default
      price: productDetails.price || "0", // Use dynamic price or default
      category: productDetails.category || "Uncategorized", // Use dynamic category or default
      quantity: numQuantity,
      custom_message: customMessage,
      customer_name: customerName,
      image: imageFileName,
      uploaded_picture: uploadedPicture || null,
      uploaded_receivers: uploadedReceivers || null,
      productSize: size,
    };

    if (existingProductIndex !== -1) {
      // Update existing product in the cart
      cart[existingProductIndex] = {
        ...cart[existingProductIndex],
        ...updatedProduct,
      };
    } else {
      // Add new product to the cart
      cart.push(updatedProduct);
    }

    // Update cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to the cart page
    router.push('/cart');
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setQuantity(value);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedPicture(file.name);
    }
  };

  const handleReceiverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedReceivers(file.name);
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
            <label htmlFor="customerName" className="block text-[#ee6e73] text-xl font-bold mb-2">
              Add your name
            </label>
            <input
              type="text"
              id="customerName"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full p-2 border border-[#68a398] rounded-3xl"
              placeholder="eg. Karan & Jinal Doshi"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="customMessage" className="block text-[#ee6e73] text-xl font-bold mb-2">
              Add your message
            </label>
            <textarea
              id="customMessage"
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="w-full p-2 border border-[#68a398] rounded-3xl h-32"
              placeholder="Your message here"
              maxLength={60}
              required
            />
            <p className="text-sm text-gray-500 mt-1">up to 60 words maximum</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-[#ee6e73] mb-2">Add your picture</h2>
            <input
              type="file"
              accept=".jpeg,.jpg,.png,.heic,.svg"
              onChange={handleImageChange}
              className="mb-2 w-full p-2 border border-[#68a398] rounded-3xl"
            />
            {uploadedPicture ? (
              <p className="text-gray-600">Uploaded image: {uploadedPicture}</p>
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
              onChange={handleReceiverChange}
              className="mb-2 w-full p-2 border border-[#68a398] rounded-3xl"
            />
            {uploadedReceivers ? (
              <p className="text-gray-600">Uploaded file: {uploadedReceivers}</p>
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
              className="bg-[#ee6e73] text-white px-6 py-2 rounded-full hover:bg-[#124e66] transition duration-300"
            >
              Continue
            </button>
          </div>
        </form>
        
        <div className="w-1/3">
          <h2 className="text-2xl font-bold text-[#ee6e73] mb-4">Product Preview</h2>
          <div className="border p-4 rounded-lg">
            {productDetails.image && (
              <Image
              src={`https://nexiblesapp.barecms.com/uploads/${productDetails.image}`}
                alt={productDetails.name}
                width={200}
                height={200}
                className="mb-4"
              />
            )}
            <p className="font-bold text-lg">{productDetails.name || "Unnamed Product"}</p>
            <p className="text-gray-700">Category: {productDetails.category || "Uncategorized"}</p>
            <p className="text-gray-700">Price: ₹{productDetails.price || "0"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
