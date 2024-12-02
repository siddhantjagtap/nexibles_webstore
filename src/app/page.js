"use client";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Mid from "@/components/Home/Mid";
import Testimonials from "@/components/Home/Testinomials";
import Blogs from "@/components//Blog/Blogs";
import OwnDesign from "@/components/Home/OwnDesign";
import { VersatileAndCelebration } from "@/components/Home/VersatileAndCelebration";
import VersatileGifting from "@/components/Home/VersatileGifting";
import BrandValues from "@/components/Home/BrandValue";
import PopularProducts from "@/components/Blog/PopularProducts";

export default function Page() {
  return (
    <>
      <div className="[&>nav]:!bg-white">
        <Navbar />
        <Hero />
        <Mid />
        <VersatileAndCelebration />
        <BrandValues />
        <Testimonials />
        <OwnDesign />
        <Blogs />
        <Footer />
      </div>
    </>
  );
}
