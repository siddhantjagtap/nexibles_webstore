import React, { useEffect, useState } from 'react';
import Link from "next/link";

export default function Trendingproducts() {
  const [productData, setProductData] = useState([]);
  const token = process.env.NEXT_PUBLIC_API_KEY;
  const APIURL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${APIURL}/api/product/product_list/3`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'API-Key': token,
          },
        });
        const result = await response.json();

        if (result.status === "success") {
          setProductData(result.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white py-8">
      <div className="px-2 mb-8">
        <h2 className="text-black font-bold text-2xl md:text-start text-center">Trending Products</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 ">
        {productData.map((product) => (
          <div key={product.id} className="border-2 p-4 flex flex-col h-full rounded-lg shadow-md">
            <div className="flex-grow flex items-center justify-center">
              <img
                src={`https://nexiblesapp.barecms.com/uploads/${product.image}`}
                alt={product.alt}
                className="w-full h-auto max-h-48 object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-900 font-bold text-lg mb-2">{product.name}</p>
              <Link href={`/carddetails/${product.id}`}>
                <button className="bg-[#30384E] rounded-md text-sm text-white py-2 px-6 uppercase ">
                  Order now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
