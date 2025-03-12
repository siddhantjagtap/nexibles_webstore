import React, { useEffect, useState } from 'react';
import Link from "next/link"

export default function Banner() {
  const [productData, setProductData] = useState([]);
  const token = process.env.NEXT_PUBLIC_API_KEY;
  const APIURL = process.env.NEXT_PUBLIC_API_URL;

  // Fetching data from the API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${APIURL}/api/category_master/cat/2`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'API-Key': token,
          },
        });
        const result = await response.json();

        if (result.status === "success") {
          setProductData(result.data);  // Store API data in state
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only on mount

  // Filtering products as per your logic (if required)
  const filterData = productData.filter(product => product.id === 3 || product.id === 14);

  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row p-2 md:space-x-8 justify-center">
        {productData.map((product) => (
          <div key={product.id} className="w-full flex md:w-1/2 relative border-2 p-2 rounded-md">
            {/* Left Section: Name and Order Button */}
            <div className="absolute md:bottom-6 bottom-0 left-4 md:left-10 right-4 md:right-0 py-6 flex flex-col">
              <p className="text-gray-900 font-bold text-lg md:text-2xl mb-2">{product.name}</p>
              <Link href={`/category/${product.cat_url}`}>
                <button className="bg-[#30384E] rounded-md text-sm md:text-base text-white w-auto md:w-44 py-2 px-6 uppercase">Order now</button>
              </Link>
            </div>
            {/* Right Section: Image */}
            <img
              src={`https://nexiblesapp.barecms.com/uploads/${product.bg_Img}`}
              alt={product.name}
              className="h-84 w-52 items-end object-contain rounded-lg ml-auto" // Ensure the image is on the right
            />
          </div>
        ))}
      </div>
    </div>
  );
}