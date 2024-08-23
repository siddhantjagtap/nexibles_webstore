
import Image from "next/image";
import Home from "@/components/Home/Hero";
import Hero from "@/components/Home/Hero";
import Testimonials from "@/components/Testinomal/Testinomals";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import BlogSection from "@/components/Home/BlogSection";
export default function Page() {
return (
 <>
 <Navbar />
 <Hero/>
 <Testimonials />
 <BlogSection />
 <Footer />
 </>
)
}


