import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import QuantityReview from "@/components/quantity-review/QuantityReview";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <QuantityReview />
      <Footer />
    </div>
  );
}
