import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import MyCart from '@/components/my-cart/MyCart'
import React from 'react'

export default function page() {
  return (
    <div>
       <Navbar />
       <div className='mt-[6rem]'>
        <MyCart />
       </div>
        <Footer/>
        </div>
  )
}
