"use client"
import React from 'react'
import Navbar from '@/components/shop/Navbar'
import Footer from '@/components/shop/Footer'
import RelatedCategory from '@/components/shop/unused/Relatedcategory'
import MyOrdderHistory from '@/components/dashboard/MyOrdderHistory'
import MyAccount from '@/components/dashboard/MyAccount'
import { useEffect, useState } from 'react'

const Page = () => {
  const token = process.env.NEXT_PUBLIC_API_KEY;
  const APIURL = process.env.NEXT_PUBLIC_API_URL;
  const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      const productIds = cartItems.map(item => item.id) || [];
      fetch(`${APIURL}/api/related-products`, {
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
          const filterCategory = data?.data?.filter(category => category.origin?.toLowerCase() === "nexibles") || [];
          setRelatedProducts(filterCategory);
        })
        .catch(error => {
          console.error('Error fetching related products:', error);
        });
    }
  }, []);
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
        {relatedProducts.length > 0 && (
          <RelatedCategory relatedProducts={relatedProducts} />
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Page