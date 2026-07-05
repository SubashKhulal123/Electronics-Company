import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import About from "../components/About/About";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";


export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <WhyChooseUs />
      <About />
      <Testimonials />
      <FAQ />
    </>
  );
}
