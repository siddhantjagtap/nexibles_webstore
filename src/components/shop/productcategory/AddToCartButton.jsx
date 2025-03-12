import React from 'react';
import Link from 'next/link';

const AddToCartButton = ({ onClick, allOptionsSelected }) => {
  return (
    <div className="mt-4 md:mt-8">
      {allOptionsSelected ? (
        <Link href="/my-cart">
          <button onClick={onClick} className="bg-[#30384E] rounded-md px-6 md:px-12 py-2 text-white">
            Add to Cart
          </button>
        </Link>
      ) : (
        <button onClick={onClick} className="bg-[#30384E] rounded-md px-6 md:px-12 py-2 text-white">
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default AddToCartButton;
