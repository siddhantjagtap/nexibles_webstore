"use client";
import Testimonials from "@/components/Testinomal/Testinomals";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import BlogSection from "@/components/Home/BlogSection";
import Mid from "@/components/Home/Mid";
import Hero from "@/components/Home/Hero";
export default function Page() {
return (
 <>
 <Navbar />
 <Hero />
 <Mid />
 <Testimonials />
 <BlogSection />
 <Footer />
 </>
)
}
