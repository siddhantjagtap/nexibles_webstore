import AlmostThere from "@/components/almost-there/AlmostThere";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import React, { Suspense } from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
      <AlmostThere />
      </Suspense>
      <Footer />
    </div>
  );
}
