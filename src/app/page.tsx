import Hero from "@/components/Hero";
import About from "@/components/About";
import Categories from "@/components/Categories";
import WhyUs from "@/components/WhyUs";
import CTABanner from "@/components/CTABanner";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Categories />
      <WhyUs />
      <CTABanner />
      <Testimonials />
      <Gallery />
      <Contact />
    </>
  );
}
