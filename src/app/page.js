"use client";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Mid from "@/components/Home/Mid";
import Testimonials from "@/components/Home/Testinomials";
import Blogs from "@/components//Blog/Blogs";
import OwnDesign from "@/components/Home/OwnDesign";
import { VersatileAndCelebration } from "@/components/Home/VersatileAndCelebration"; // Correct import
import VersatileGifting from "@/components/Home/VersatileGifting";
import BrandValues from "@/components/Home/BrandValue";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mid />
      {/* <VersatileGifting/> */}
      <VersatileAndCelebration />
      {/* <BrandValues /> */}
       {/* Correct usage */}
      <Testimonials />
      <OwnDesign />
      <Blogs />
      <Footer />
    </>
  );
}
