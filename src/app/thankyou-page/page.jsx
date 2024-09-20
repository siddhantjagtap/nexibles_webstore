import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import Thankyou from '@/components/Thankyou_Page/thankyou'
import React from 'react'

function page() {
  return (
    <div>
      <Navbar />
     <Thankyou />
     <Footer />
    </div>
  )
}

export default page