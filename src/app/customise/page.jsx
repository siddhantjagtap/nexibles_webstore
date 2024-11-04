
import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import OwnDesign from '@/components/Home/OwnDesign'
import React from 'react'

function page() {
  return (
    <div className="[&>nav]:!bg-white ">
      <Navbar />
      <div className="my-28">
        <OwnDesign />
      </div>
      <Footer />
    </div>
  );
}

export default page