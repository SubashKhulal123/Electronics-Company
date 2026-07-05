import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import {
  HiOutlineTruck,
  HiOutlineShieldCheck,
  HiOutlineLockClosed,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import { company } from "../../data/siteData";
import { heroFeatures } from "../../data/content";

const iconMap = {
  shipping: HiOutlineTruck,
  warranty: HiOutlineShieldCheck,
  secure: HiOutlineLockClosed,
  support: HiOutlineChatBubbleLeftRight,
};

const floatCardPositions = [
  "top-6 -left-4 md:-left-10",
  "top-1/3 -right-4 md:-right-12",
  "bottom-24 -left-2 md:-left-8",
  "bottom-4 right-6 md:right-2",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white pt-28 pb-16 md:pt-32"
    >
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container-px relative mx-auto grid max-w-8xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left column */}
        <div className="flex flex-col items-start">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="eyebrow mb-6"
          >
            {company.tagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl"
          >
            Next Generation <span className="text-primary">Electronics</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 max-w-lg text-base text-muted md:text-lg"
          >
            {company.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#products" className="btn-primary">
              Shop Now
              <HiArrowRight />
            </a>
            <a href="#categories" className="btn-secondary">
              Explore Products
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-14 flex items-center gap-8"
          >
            <div>
              <p className="text-2xl font-extrabold text-ink">15K+</p>
              <p className="text-xs text-muted">Happy Customers</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="text-2xl font-extrabold text-ink">4.9/5</p>
              <p className="text-xs text-muted">Average Rating</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="text-2xl font-extrabold text-ink">20+</p>
              <p className="text-xs text-muted">Design Awards</p>
            </div>
          </motion.div>
        </div>

        {/* Right column - floating composition */}
        <div className="relative mx-auto h-[420px] w-full max-w-md lg:h-[560px] lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute inset-0"
          >
            {/* Laptop - main image */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-6 w-[85%] -translate-x-1/2 overflow-hidden rounded-2xl border border-border shadow-lift lg:top-16"
            >
              <img
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop"
                alt="Auren laptop"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Smartphone */}
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-16 left-0 w-32 overflow-hidden rounded-2xl border border-border shadow-lift md:w-40 lg:bottom-24"
            >
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop"
                alt="Auren smartphone"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Smartwatch */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="absolute right-0 top-0 w-24 overflow-hidden rounded-2xl border border-border shadow-lift md:w-32"
            >
              <img
                src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800&auto=format&fit=crop"
                alt="Auren smartwatch"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Earbuds */}
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute bottom-0 right-6 w-24 overflow-hidden rounded-2xl border border-border shadow-lift md:w-32 md:right-10"
            >
              <img
                src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop"
                alt="Auren earbuds"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Floating glass feature cards */}
            {heroFeatures.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <motion.div
                  key={feature.id}
                  animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0] }}
                  transition={{
                    duration: 4.5 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  className={`absolute z-10 hidden items-center gap-2 rounded-2xl border border-white/60 bg-white/70 px-4 py-2.5 shadow-soft backdrop-blur-md sm:flex ${floatCardPositions[index]}`}
                >
                  <Icon className="text-primary text-base" />
                  <span className="text-xs font-semibold text-ink whitespace-nowrap">{feature.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
