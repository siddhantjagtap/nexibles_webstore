import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import Privacy from '@/components/Privacy-policy/Privacy'
import React from 'react'

function page() {
  return (
    <div className="[&>nav]:!bg-white">
    
        <Navbar />
          
        <Privacy />
      <Footer />

      </div>
  );
}

export default page