import Loader from '@/components/comman/Loader'
import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import AddMessage from '@/components/message/AddMessage'
import React, { Suspense } from 'react'

export default function page() {
  return (
    <div>
    <Navbar/>
    <Suspense fallback={<div>
      <Loader/>
    </div>}>
    <AddMessage/>
    </Suspense>
    <Footer/>
    </div>
  )
}
