'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '@/components/shop/Navbar'
import Footer from '@/components/shop/Footer'
import RelatedCategory from '@/components/shop/unused/Relatedcategory'

// Dynamically import MyCart with no SSR
const MyCart = dynamic(() => import('@/components/add-to-cart/My-Cart'), { ssr: false })

function Page() {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const token = process.env.NEXT_PUBLIC_API_KEY;
  const APIURL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      if (typeof window !== 'undefined') {
        try {
          const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
          const productIds = cartItems.map(item => item.id);
          
          if (productIds.length === 0) {
            setRelatedProducts([]);
            return;
          }

          const response = await fetch(`${APIURL}/api/related-products`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ productIds })
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          setRelatedProducts(data);
        } catch (error) {
          console.error('Error fetching related products:', error);
          setRelatedProducts([]);
        }
      }
    };

    if (isClient) {
      fetchRelatedProducts();
    }
  }, [isClient]);

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <>
      <Navbar />
      <div className='containers'>
        <MyCart />
        <RelatedCategory relatedProducts={relatedProducts} />
      </div>
      <Footer />
    </>
  )
}

export default Page;