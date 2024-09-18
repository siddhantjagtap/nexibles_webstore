// components/ThankYou.js
import React from 'react';

const ThankYou = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-500">
      <div className="max-w-lg p-8 bg-opacity-80 bg-white rounded-lg text-center">
        <img
          src="/path/to/your/image.png"
          alt="Envelope Icon"
          className="mx-auto mb-6 w-16 h-16"
        />
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-800 mb-4">
          For ordering from NexiGifting. You shall receive an email soon
          confirming your order and the <span className="font-bold text-yellow-500">tracking link</span> with it.
        </p>
        <p className="text-lg text-gray-800 mb-4">
          If you have any questions or need assistance, feel free to reach out to us at{' '}
          <a href="mailto:sales@artnext.in" className="text-yellow-500 underline">sales@artnext.in</a>
        </p>
        <p className="text-lg text-gray-800">Thanks again, and we hope you enjoy your personalised pouches!</p>
      </div>
    </div>
  );
};

export default ThankYou;
