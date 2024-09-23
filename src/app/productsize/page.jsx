import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import ProductSize from '@/components/productsize/ProductSize'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar/>
      <ProductSize/>
      <Footer/>
      </div>
  )
}