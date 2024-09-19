"use client";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Mid from "@/components/Home/Mid";
import Testimonials from "@/components/Home/Testinomials";
import Blogs from "@/components/Home/Blogs";
import OwnDesign from "@/components/Home/OwnDesign";
import { VersatileAndCelebration } from "@/components/Home/VersatileAndCelebration"; // Correct import

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Mid />
      <VersatileAndCelebration /> {/* Correct usage */}
      <Testimonials />
      <OwnDesign />
      <Blogs />
      <Footer />
    </>
  );
}
