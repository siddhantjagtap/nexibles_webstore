import ContactForm from '@/components/Contact-us/ContactForm'
import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import React from 'react'

export default function page() {
  return (
    <>
      <div className="[&>nav]:!bg-white">
        <Navbar />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
