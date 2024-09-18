import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import Shop from '@/components/shop/Shop'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar/>
      <Shop />
      <Footer/>
      </div>
  )
}