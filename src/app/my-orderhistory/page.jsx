"use client"
import React from 'react'
import Navbar from '@/components/Home/Navbar'
import Footer from '@/components/Home/Footer'
//import RelatedCategory from '@/components/shop/unused/Relatedcategory'
import MyOrdderHistory from '@/components/dashboard/MyOrdderHistory'
import MyAccount from '@/components/dashboard/MyAccount'
import { useEffect,useState } from 'react'

const Page = () => {
    const[relatedProducts,setRelatedProducts]=useState([]);
 useEffect(() => {
    if (typeof window !== 'undefined') {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      const productIds = cartItems.map(item => item.id)  || [];
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
          console.log("datainmycart",data);
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
            {/* //<RelatedCategory relatedProducts={relatedProducts}/> */}
            </div>
            <Footer />
        </div>
    )
}

export default Page