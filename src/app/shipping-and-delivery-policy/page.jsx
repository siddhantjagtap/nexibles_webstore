import Footer from '@/components/home/Footer'
import Navbar from '@/components/home/Navbar'
import Shipping from '@/components/shipping-and-delivery-policy/Shipping'
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