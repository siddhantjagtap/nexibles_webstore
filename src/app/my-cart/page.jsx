import Cart from "@/components/Cart/Cart";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import React, { Suspense} from "react";

export default function page() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
      <Cart />
      </Suspense>
      <Footer />
    </>
  );
}
