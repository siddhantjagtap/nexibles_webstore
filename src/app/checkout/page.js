import Checkout from "@/components/Checkout/Checkout";

import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
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
