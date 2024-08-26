import Checkout from "@/components/checkout/Checkout";

import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import React from "react";

export default function page() {
  return (
    <>
    <Navbar />
    <Checkout />
      {/* <ContactForm /> */}
      <Footer />
    </>
  );
}
