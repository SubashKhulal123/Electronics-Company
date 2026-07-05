import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Products from "../components/Products/Products";
import About from "../components/About/About";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";
import Newsletter from "../components/Newsletter/Newsletter";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <WhyChooseUs />
      <Products />
      <About />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Contact />
    </>
  );
}
