import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import ProductSize from '@/components/productsize/ProductSize'
import React, { Suspense } from 'react'

export default function page() {
  return (
    <div>
      <Navbar/>
      <Suspense fallback={<div>Loading...</div>}>
      <ProductSize/>
      </Suspense>
      <Footer/>
      </div>
  )
}
