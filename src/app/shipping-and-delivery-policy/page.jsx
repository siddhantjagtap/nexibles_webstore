import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import Shipping from '@/components/Shipping-and-Delivery-Policy/Shipping'
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
      <Shipping />
      <Footer/>
    </div>
  )
}

export default page