import { HiArrowRight } from "react-icons/hi2";
import SectionHeading from "../common/SectionHeading";
import AnimatedSection from "../common/AnimatedSection";
import ProductCard from "./ProductCard";
import { featuredProducts } from "../../data/products";

export default function Products() {
  return (
    <section id="products" className="section-py bg-surface-alt">
      <div className="container-px mx-auto max-w-8xl">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured Products"
            title="This season's essentials"
            subtitle="A curated set of our best-reviewed devices, ready to ship this week."
            className="mb-0"
          />
          <AnimatedSection direction="left" delay={0.2}>
            <a href="#" className="btn-secondary shrink-0">
              View All Products
              <HiArrowRight />
            </a>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <AnimatedSection key={product.id} direction="up" delay={index * 0.1}>
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
