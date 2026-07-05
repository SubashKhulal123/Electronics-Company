import { motion } from "framer-motion";
import { HiOutlineDevicePhoneMobile, HiOutlineComputerDesktop } from "react-icons/hi2";
import { HiOutlineHome } from "react-icons/hi2";
import { PiHeadphones } from "react-icons/pi";
import SectionHeading from "../common/SectionHeading";
import AnimatedSection from "../common/AnimatedSection";
import { categories } from "../../data/products";

const iconMap = {
  smartphone: HiOutlineDevicePhoneMobile,
  laptop: HiOutlineComputerDesktop,
  headphones: PiHeadphones,
  home: HiOutlineHome,
};

export default function Categories() {
  return (
    <section id="categories" className="section-py bg-surface-alt">
      <div className="container-px mx-auto max-w-8xl">
        <SectionHeading
          eyebrow="Shop by Category"
          title="Find your next favorite device"
          subtitle="From flagship phones to the accessories that complete them — every category is built to Auren's same exacting standard."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon];
            return (
              <AnimatedSection key={category.id} direction="up" delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="card-base group h-full cursor-pointer p-8 hover:border-primary/40 hover:shadow-lift"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-ink">{category.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{category.description}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
