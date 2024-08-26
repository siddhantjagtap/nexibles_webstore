import Footer from '@/components/home/Footer'
import Navbar from '@/components/home/Navbar'
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
