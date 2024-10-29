import FAQ from "@/components/FAQ_Page/FAQ";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import React from "react";

export default function FAQPage() {
  return (
    <div className="[&>nav]:!bg-white">
      <Navbar />
      <FAQ />
      <Footer />
    </div>
  );
}
