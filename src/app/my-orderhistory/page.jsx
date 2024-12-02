"use client"
import React from 'react'
import Navbar from '@/components/Home/Navbar'
import Footer from '@/components/Home/Footer'
import Link from 'next/link'
//import RelatedCategory from '@/components/shop/unused/Relatedcategory'
import MyOrdderHistory from '@/components/dashboard/MyOrdderHistory'
import MyAccount from '@/components/dashboard/MyAccount'
import { useEffect, useState } from 'react'
import { useAuth } from '@/utils/authContext'
const Page = () => {
  const { user } = useAuth();
  const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      const productIds = cartItems.map(item => item.id) || [];
      fetch('https://nexiblesapp.barecms.com/api/related-products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productIds })
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setRelatedProducts(data);
          console.log("datainmycart", data);
        })
        .catch(error => {
          console.error('Error fetching related products:', error);
        });
    }
  }, []);
  if (!user) {
    return (
      <div>
        <Navbar />
        <div className="bg-white py-10 md:py-20 mt-4 md:mt-10 px-4 md:px-10 min-h-[60vh] flex items-center justify-center">
          <div className="border border-[#197d8e] rounded-3xl p-8 w-full max-w-[800px]">
            <div className="text-center space-y-6">
              <h2 className="text-[#db5c3c] font-gotham-rounded-bold text-2xl md:text-3xl">
                Please Login to View Your Order History
              </h2>
              <p className="text-gray-700 text-lg font-gotham-light">
                Login to access your profile details and order history.
              </p>
              <Link
                href="/login"
                className="inline-block bg-[#db5c3c] text-white font-gotham-rounded-bold rounded-full px-8 py-4 text-lg hover:bg-[#c54e33] transition-all duration-200"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <div className='containers'>
        <div className="md:flex">
          <div className="md:w-1/3 w-full bg-white">
            <MyAccount />
          </div>
          <div className="w-full md:w-full">
            <MyOrdderHistory />
          </div>
        </div>
        {/* //<RelatedCategory relatedProducts={relatedProducts}/> */}
      </div>
      <Footer />
    </div>
  )
}

export default Page